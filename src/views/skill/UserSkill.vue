<template>
	<!-- <SeekForGigDetails /> -->
	<!-- manage skill -->
	<div class="manage__skil card-space my-3">
		<!-- header -->
		<div class="payment-pill-header mb-4">
			<div class="pph-left">
				<h5 class="title-lg">
					{{ t('skill.title') }}
				</h5>
			</div>
		</div>

		<!-- manage skill form -->
		<div class="manage_skill__form">
			<form class="theme-input tab-form">
				<!-- note - 1 -->
				<div class="form-row">
					<p class="msp-note form-group">
						{{ t('leProfile.leAccount.userSkillDesc') }}
					</p>
				</div>

				<!-- note - 2 - example -->
				<div class="form-row">
					<p class="msp-note form-group">
						<span class="d-block font-weight-bold">{{ t('leProfile.leAccount.example') }}:</span>
						<span>
							{{ t('leProfile.leAccount.userSkillExTit') }} <br />
							{{ t('leProfile.leAccount.userSkillEx') }}
						</span>
					</p>
				</div>

				<hr />

				<!-- your skill list -->
				<!-- <div class="form-row">
					<div class="form-group col-12">
						<label class="d-block"> {{ t('skill.yourSkills') }}<span>*</span> </label>
						<div class="user_skills">
							<span v-for="(skill, index) in userSkills" :key="index" class="user_skill">
								<span>{{ skill.reference && skill.reference.skill }}</span>
								<button type="button" @click="deleteSkill(skill.referenceId)">
									<FontAwesomeIcon :icon="deleteIcon" />
								</button>
							</span>
						</div>
					</div>
				</div> -->

				<!-- add skill -->
				<!-- <div class="form-row align-items-end">					
					<div class="form-group col-xl-10 col-lg-9 col-md-8">
						<label for="skill"> {{ t('skill.addSkill') }}<span>*</span> </label>

						<Multiselect
							id="addSkill"
							class="form-group"
							hideSelected
							@input="skillField.handleChange"
							@blur="skillField.handleBlur"
							:placeholder="
								t('validation.selectField', {
									field: 'fieldList.skill',
								})
							"
							v-model="skillField.value"
							:options="skillOptions"
							valueProp="skill"
							mode="single"
							label="skill"
							trackBy="skill"
							:searchable="true"
							:canDeselect="false"
							@change="tempFunction($event)"
						/>
						<p class="skill_error_msg text-center text-danger">
							{{ skillField.errorMessage }}
						</p>
					</div>
					<div
						class="
							form-group
							col-xl-2 col-lg-3 col-md-4
							text-center text-md-right
						"
					>
						<button type="button" class="btn-common btn-red mt-2 mx-auto" @click="submitForm" :disabled="isSubmitting">
							{{ t('skill.addSkill') }}
						</button>
					</div>
				</div> -->
				<div class="form-row">
					<div class="form-group col-lg-6 col-12 mb-0">
						<label for="skill"> {{ t('common.add') }} {{ t('fieldList.skill') }} </label>
						<Multiselect id="skill" class="form-group px-remove multiselect-height" trackBy="skill"
							@input="jobSkillsField.handleChange" @blur="jobSkillsField.handleBlur" :placeholder="
								t('validation.selectField', {
									field: 'fieldList.skill',
								})
							" :searchable="true" valueProp="referenceId" v-model="jobSkillsField.value" :options="userSkillOptions"
							label="skill" mode="tags" :hideSelected="false" />
						<!-- @change="tempFunction($event)" -->
						<p class="text-danger">
							{{ jobSkillsField.errorMessage }}
						</p>
					</div>
					<div class="
							form-group
							col-xl-2 col-lg-3 col-md-4 mb-0
							text-center text-md-right
						">
						<button type="button" class="btn-common btn-red mx-auto mt-3" @click="submitForm"
							:disabled="isSubmitting">
							{{ t('common.save') }}
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { reactive, onMounted, computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import Multiselect from '@vueform/multiselect';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import SeekForGigDetails from '@/views/profile/SeekForGigDetails.vue';

export default {
	name: 'ManageSkill',

	// components
	components: {
		Multiselect,
		// FontAwesomeIcon,
		// SeekForGigDetails,
	},

	setup() {
		// i18n instance
		const { t } = useI18n({ useScope: 'global' });
		const search = ref(null);
		// icons
		const deleteIcon = faTimes;

		// global store
		const store = useStore(); // use state

		// add skill validation
		const skillSchema = yup.object({
			// skillId: yup
			// 	.number()
			// 	.nullable()
			// 	.optional(),
			// .required(
			// 	t('validation.requiredField', {
			// 		field: 'fieldList.skill',
			// 	}),
			// ),
			referenceId: yup
				.array()
				.nullable()
				.optional()
				// .min(
				// 	1,
				// 	t('validation.minValue', {
				// 		field: 'fieldList.skill',
				// 		minLen: 1,
				// 	}),
				// )
				.required(
					t('validation.requiredField', {
						field: 'fieldList.skill',
					}),
				),
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, isSubmitting, resetForm, setValues } = useForm({
			validationSchema: skillSchema,
		});

		// form fields
		// const skillField = reactive(useField('skillId', undefined, { initialValue: 0 }));
		const jobSkillsField = reactive(useField('referenceId', undefined, { initialValue: [] }));

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */
		onMounted(() => {
			// fetch current user's work details
			fetchDefaultSkills();
			fetchUserSkills();
		});

		/**
		 * Computed Properties
		 * *******************************************************************
		 */
		// get default skills
		const skillOptions = computed(() => {
			const user_skills = userSkills.value.map(x => x.referenceId);
			return store.getters['skill/getSkillOptions'].filter(x => !user_skills.includes(x.referenceId));
		});
		const userSkillOptions = computed(() => store.getters['skill/getUserSkillOptions']);

		// get current users skills
		const userSkills = computed(() => store.state.skill.userSkills);

		/**
		 * Methods
		 * *******************************************************************
		 */
		// fetch default skills
		const fetchDefaultSkills = async () => {
			const payload = {
				search: search.value,
			};
			await store.dispatch('skill/getDefaultSkills', payload);
		};

		// fetch users skills
		const fetchUserSkills = async () => {
			await store.dispatch('skill/getCurrentUserSkills').then(res => {
				console.log(res.data, 'datattttttttttttt');
				setValues({
					referenceId: res.data.reduce((acc, item) => {
						acc.push(item.reference.referenceId);
						return acc;
					}, []),
				});
			});
		};

		// submit form - add skill
		const submitForm = handleSubmit(async values => {
			await store.dispatch('skill/addUserSkill', values).then(() => {
				resetForm(); // reset form
				fetchUserSkills();
			});
		});

		// delete skill
		const deleteSkill = async id => {
			await store.dispatch('skill/deleteUserSkill', id).then(() => {
				fetchUserSkills();
			});
		};

		// const tempFunction = async e => {
		// 	console.log(e, 'eeeeeeeeeeeeeeeeeeeeeeee');
		// 	console.log(userSkillOptions.value,'userSkillOptions.value');
		// 	const data = {
		// 		referenceId: (userSkillOptions.value.find(x => console.log(x,'kkkkkkkk')) || {}).referenceId,
		// 		//  x.skill === e
		// 	};
		// 	console.log(data, '<><><><><><><<');

		// 	await store.dispatch('skill/addUserSkill', data).then(() => {
		// 		resetForm(); // reset form
		// 		fetchUserSkills();
		// 	});
		// };
		//watch
		// watchEffect(skillField.value,()=>{
		// 	console.log(skillField.value,'==========');
		// })

		return {
			// tempFunction,
			// translate function
			t,

			// icons
			deleteIcon,

			// form related
			formMeta,
			isSubmitting,

			// fields
			// skillField,
			jobSkillsField,

			// computed
			skillOptions,
			userSkills,
			userSkillOptions,

			// methods
			submitForm,
			deleteSkill,
		};
	},
};
</script>

<style src="@vueform/multiselect/themes/default.css">
</style>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.manage__skil {
	.manage_skill__form {
		.user_skills {
			width: 100%;
			// padding: 12px 15px;
			background-color: #fbfbfb;
			border: 1px solid #eaeaea;
			border-radius: 25px;
			min-height: 40px;
			height: auto;
			display: flex;
			flex-wrap: wrap;

			.user_skill {
				background: $coloRed;
				color: #fff;
				padding: 5px 10px;
				padding-right: 20px;
				border-radius: 25px;
				display: flex;
				align-items: center;
				width: max-content;
				float: left;
				margin: 5px 5px;

				span {
					margin-right: 10px;
				}

				button {
					font-size: 10px;
					color: #fff;
				}
			}
		}

		.skill_error_msg {
			position: absolute;
			left: 20px;
			margin-top: 10px;
			width: 100%;
		}
	}
}
</style>
<style>
.tab-form .is-open .multiselect-input,
.tab-form .multiselect-input {
	max-height: 1070px !important;
}

.multiselect-input {
	padding: 0 !important;
	border: 1px solid #e2e2e2 !important;
}

.multiselect-tag {
	background-color: #ff4b57 !important;
	border-radius: 25px;
	padding: 10px;
}

.multiselect-tag i:before {
	color: #fff;
}
</style>
