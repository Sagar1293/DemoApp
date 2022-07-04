<template>
	<div class="invoice__list card-space">
		<!-- header -->
		<div class="payment-pill-header mb-4">
			<div class="pph-left">
				<h5 class="title-lg">Add Invoice Team</h5>
			</div>
		</div>
		<!-- form field -->
		<div>
			<form class="tab-form">
				<div class="select-file">
					<div class="form_part form-row">
						<div class="form-group col-md-6 col-12 theme-input">
							<label for="teamName">
								{{ t('fieldList.teamName') }}
							</label>

							<input
								id="addteamName"
								type="text"
								class="form-control"
								:placeholder="
									t('validation.enterField', {
										field: 'fieldList.teamName',
									})
								"
								@input="teamNameField.handleChange"
								@blur="teamNameField.handleBlur"
								:value="teamNameField.value"
							/>

							<p class="text-danger">
								{{ teamNameField.errorMessage }}
							</p>
						</div>
						<div class="form-group col-md-6 col-12 theme-input">
							<label for="emailAddress">
								{{ t('fieldList.emailAddress') }}
							</label>

							<input
								id="addemailAddress"
								type="email"
								class="form-control"
								:placeholder="
									t('validation.enterField', {
										field: 'fieldList.emailAddress',
									})
								"
								@input="userEmailField.handleChange"
								@blur="userEmailField.handleBlur"
								:value="userEmailField.value"
							/>

							<p class="text-danger">
								{{ userEmailField.errorMessage }}
							</p>
						</div>
						<div class="ml-auto">
							<div v-if="percentag >= 100">
								<button type="button" class="btn-common btn-red" @click="addItem()" :disabled="true">
									Add Member
								</button>
							</div>
							<div v-else>
								<span v-if="userEmailField.value === null || teamNameField.value === null">
									<button class="btn-common btn-red" @click="submitForm">
										Add Member
									</button>
								</span>
								<span v-else>
									<button type="button" class="btn-common btn-red" @click="addItem()">
										Add Member
									</button>
								</span>
							</div>
						</div>

						<div class="form-group col-12  mt-3" v-if="teamMembersListNew.length">
							<new-data-table :data="teamMembersListNew || []" sst>
								<template #thead>
									<new-tb-th>Member Name</new-tb-th>
									<new-tb-th>Member Email</new-tb-th>
									<!-- <new-tb-th>Shared Part</new-tb-th> -->
									<!-- <new-tb-th>Shared Type</new-tb-th> -->
									<new-tb-th>{{ t('common.actions') }}</new-tb-th>
								</template>

								<template #data="scopedData" ref="tableBody">
									<new-tb-tr class="invoice__row" :key="i" v-for="(tr, i) in scopedData.data">
										<new-tb-td>{{ tr.full_name || '-' }}</new-tb-td>

										<new-tb-td>{{ tr.email || '-' }}</new-tb-td>
										<!-- <new-tb-td>{{ tr.shared_part || '-' }}</new-tb-td> -->
										<!-- <new-tb-td>{{ tr.shared_type || '-' }}</new-tb-td> -->
										<new-tb-td class="d-flex align-items-center justify-content-end" v-if="tr.seekerId">
											<button class="tbl-action red-close grey-edit-grey">
												<FontAwesomeIcon :icon="deleteIcon" />
											</button>
										</new-tb-td>
										<new-tb-td class="d-flex align-items-center justify-content-end" v-else>
											<button class="tbl-action red-close" @click="deleteInvoice(i)">
												<FontAwesomeIcon :icon="deleteIcon" />
											</button>
										</new-tb-td>
									</new-tb-tr>
								</template>
							</new-data-table>
						</div>
					</div>
				</div>

				<!-- add btn -->
				<div class="text-center mt-5">
					<button class="btn-common btn-red" @click="submitForm">
						Add
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown, faPlus, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { computed, reactive, ref } from '@vue/reactivity';
// import Multiselect from '@vueform/multiselect';
import { onMounted, watch } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { useRouter } from 'vue-router';
import { shardType } from '@/utils/enums.js';
import { useSwal } from '../../../components/sweetalert';
export default {
	name: 'AddTeamInvoiceModal',

	components: {
		FontAwesomeIcon,
		// Multiselect,
	},

	setup() {
		// ref vars
		const seekerId = ref('');
		const userFullName = ref('');
		const userEmail = ref('');

		const teamMembersList = ref([]);
		const teamMembersListNew = ref([]);
		const shardTypeFlag = ref(null);
		const percentag = ref(0);

		// global store
		const store = useStore();

		// global router
		const router = useRouter();
		// sweetalert
		const Swal = useSwal();

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// icons
		const clodeicone = faTimes;
		const downArrowIcon = faChevronDown;
		const plusIcon = faPlus;
		const trashIcon = faTrashAlt;
		const deleteIcon = faTimes;

		const SeekerTeamSchema = yup.object({
			team_name: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.teamName',
					}),
				),
			// shared_part: yup
			// 	.number()
			// 	.typeError('shared part value must be a number')
			// 	.nullable()
			// 	.required(
			// 		t('validation.requiredField', {
			// 			field: 'fieldList.sharedPart',
			// 		}),
			// 	),
			// shared_type: yup
			// 	.string()
			// 	.nullable()
			// 	.required(
			// 		t('validation.requiredField', {
			// 			field: 'fieldList.sharedType',
			// 		}),
			// 	),
			user_email: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.emailAddress',
					}),
				)
				.email(t('validation.validEmail')),
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, isSubmitting, resetForm } = useForm({
			validationSchema: SeekerTeamSchema,
		});

		const teamNameField = reactive(useField('team_name', undefined, { initialValue: null }));

		// const sharedPartField = reactive(useField('shared_part', undefined, { initialValue: 0 }));

		// const shardTypeField = reactive(useField('shared_type', undefined, { initialValue: null }));
		const userEmailField = reactive(useField('user_email', undefined, { initialValue: null, validateOnValueUpdate: false }));

		/**
		 * Mounted
		 * *******************************************************************
		 */

		onMounted(() => {
			// store.dispatch('jobseekerTeam/getJobseekerList');
			//get login user emal and full name set in on load array
			const userDetails = store.state.auth.userProfile ?? null;
			//on load set user name and email
			teamMembersList.value.push({
				full_name: userDetails.full_name ?? '-',
				email: userDetails.email ?? '-',
				seekerId: userDetails.jobSeeker.id ?? null,
			});
		});

		/**
		 * Methods
		 * *******************************************************************
		 */
		const onChange = event => {
			seekerId.value = event.jobSeeker.id ?? '';
			userFullName.value = event.full_name ?? '';
			userEmail.value = event.email ?? '';
			// teamMembersList.value.push(event);
		};
		// get jobseeker list
		const employerList = computed(() => {
			return store.getters['jobseekerTeam/getSeekerList'];
		});
		//remove item for array
		const deleteInvoice = index => {
			teamMembersList.value.splice(index, 1);
		};

		// submit form - job post
		const submitForm = handleSubmit(async values => {
			const teamMembers = [];
			teamMembersListNew.value.forEach(item => {
				// let tempItem = [];
				// tempItem.email = item.email;
				// tempItem.email_exist = '' ;
				// tempItem.seekerId = item.seekerId;
				// tempItem.shared_part = item.shared_part;
				// tempItem.shared_type = item.shared_type;
				teamMembers.push(item.email);
			});
			await store
				.dispatch('jobseekerTeam/addSeekerTeam', {
					team_name: values.team_name,
					team_members: teamMembers,
				})
				.then(() => router.push({ name: 'Jobseeker Team List' }));
		});

		const addItem = () => {
			console.log(userEmailField.value);
			console.log(teamNameField.value, 'teamNameField');
			const tempO = {};
			tempO.email = userEmailField.value;

			if (!tempO.email) return false;

			const isAlreadyExist = teamMembersList.value.find(x => x.email === userEmailField.value);
			if (isAlreadyExist) {
				Swal.fire({
					text: 'Please do not add same in team list.',
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
				});
			} else {
				teamMembersList.value.push({ email: tempO.email });
				// userEmailField.value = null;
			}
		};

		const sharedTypeDisble = val => {
			console.log(val);
			shardTypeFlag.value = true;
		};

		/**
		 * Watch
		 * *******************************************************************
		 */
		watch(teamMembersList.value, () => {
			teamMembersListNew.value = teamMembersList.value.reduce((acc, item) => {
				acc.push(item);
				return acc;
			}, []);
		});

		return {
			//ref
			t,
			seekerId,
			teamMembersList,
			teamMembersListNew,
			trashIcon,
			shardType,
			userFullName,
			userEmail,
			resetForm,
			shardTypeFlag,
			percentag,

			// icons
			clodeicone,
			downArrowIcon,
			plusIcon,
			deleteIcon,

			// form related
			formMeta,
			isSubmitting,

			//field
			teamNameField,
			// sharedPartField,
			// shardTypeField,
			userEmailField,

			// computed props
			employerList,

			// methods
			addItem,
			onChange,
			deleteInvoice,
			submitForm,
			sharedTypeDisble,
		};
	},
};
</script>
// <style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';
@import '@/assets/scss/style.scss';

.model {
	// max-width: 1024px;
	width: 100%;
	padding: 50px 70px;
	border-radius: 25px;
	position: relative;
	@media (max-width: 576px) {
		padding: 20px 20px;
	}

	.close-icone {
		width: 20px;
		height: 20px;
		font-size: 20px;
		position: absolute;
		top: 5px;
		right: 5px;
		cursor: pointer;
	}

	.attachments {
		padding: 20px 0;
		font-weight: 700;
		text-align: center;
	}
	.input-title {
		font-size: 16px;
		margin-bottom: 5px;
		font-weight: 500;
		color: #858a90;
	}
	.input-pera {
		width: 100%;
		padding: 7px 10px;
		border-radius: 12px;
		border: 2px dashed #e4e6e7;
	}
	.input-back {
		border: none;
		background-color: #f6f6f6;
	}
	.plus {
		cursor: pointer;
		color: #ffff;
		width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 10px;
		border-radius: 50%;
		background-color: #ff4b57;
		border: 4px solid #ffe4e6;
	}
	.salary-btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
		box-shadow: 0px 4px 8px #dcdada;
		border-radius: 10px;
		padding: 3px 10px;
		width: 85%;
		.salary-dropdown {
			border-radius: 10px;
			background-color: #fbfbfb;
			padding: 2px 8px;
		}
		.dropdown-toggle::after {
			display: none;
		}
	}

	.text-prize {
		padding: 20px 0;
	}
	.input-fill {
		width: 100%;
		font-size: 14px;
		background: transparent;
		outline: none;
		border: none;
	}
	.text-center {
		text-align: center;
	}

	.btn-color {
		display: flex;
		align-items: center;
		::-webkit-file-upload-button {
			border: 1px solid #273238;
			border-radius: 10px;
			background-color: #273238;
			color: #fff;
			padding: 8px;
			float: right;
			margin-right: 0;
		}
	}
	.info-2 {
		width: 120px;
	}
	.team-text {
		font-size: 14px;
		color: #858a90;
		font-weight: 500;
		line-height: 41px;
	}
	.text-gray {
		color: #858a90;
		font-size: 14px;
		font-weight: 500;
	}
	.drop-font {
		font-size: 12px;
		color: #696d72;
	}
	.btn-common {
		white-space: nowrap;
	}
}

.dz-image {
	display: flex;
	flex-wrap: wrap;

	.thumb-img {
		width: 100px;
		height: 100px;
		object-fit: cover;
	}
}

.form-model {
	padding: 12px 15px;
	background-color: #fbfbfb;
	// border: 1px solid #eaeaea;
	border-radius: 25px;
	position: relative;
}

.dz-filename span {
	font-size: 12px;
}
.invoice-dropdown {
	padding: 12px 15px;
	background-color: #fbfbfb;
	border: 1px solid #eaeaea;
	height: 50px;
	width: 80%;
	border-radius: 25px;
	display: flex;
	align-items: center;
	padding: 10px 20px;
	&:focus {
		box-shadow: none;
	}
	&:after {
		display: none;
	}
}
.dropdown-menu {
	width: 80%;
	transform: translate(0px, 52px);
}
.select-employee {
	width: 100%;
	border-radius: 12px;
	// border: 1px solid #f2f2f2;
	background-color: #ffff;
	border-radius: 20px;
}
.multiselect-options {
	overflow: auto;
	border-radius: 10px;
}
.multiselect-option {
	background-color: #ffffff;
}
.multiselect-option.is-selected.is-pointed {
	color: #000;
	background: #ffff;
}
.multiselect-option.is-selected {
	color: #ff4b57;
	background-color: #ffff;
}
</style>
