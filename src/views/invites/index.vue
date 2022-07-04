<template>
	<!--Invite Employer List-->
	<div class="invite-employer card-space">
		<!-- header -->
		<div class="payment-pill-header mb-4">
			<div class="pph-left">
				<h5 class="title-lg">
					{{ t('companyInvites.invite_user') }}
				</h5>
			</div>
		</div>

		<!-- form field -->
		<div>
			<form class="tab-form">
				<div class="form_part form-row">
					<div class="form-group col-lg-6 col-12 theme-input">
						<label for="teamName">
							{{ t('companyInvites.user_name') }}
						</label>

						<input
							id="employer_name"
							type="text"
							class="form-control"
							:placeholder="
								t('validation.enterField', {
									field: 'fieldList.yourFullName',
								})
							"
							@input="fullNameField.handleChange"
							@blur="fullNameField.handleBlur"
							:value="fullNameField.value"
						/>
						<p class="text-danger">
							{{ fullNameField.errorMessage }}
						</p>
					</div>
				</div>

				<div class="form_part form-row">
					<div class="form-group col-lg-6 col-12 theme-input">
						<label for="teamName">
							{{ t('companyInvites.user_email') }}
						</label>

						<input
							id="employer_email"
							type="text"
							class="form-control"
							:placeholder="
								t('validation.enterField', {
									field: 'fieldList.email',
								})
							"
							@input="emailField.handleChange"
							@blur="emailField.handleBlur"
							:value="emailField.value"
						/>
						<p class="text-danger">
							{{ emailField.errorMessage }}
						</p>
					</div>
				</div>

				<div class="form_part form-row">
					<div class="form-group col-12 theme-input">
						<label for="teamName">
							{{ t('companyInvites.message') }}
						</label>
						<textarea
							rows="4"
							class="explaination"
							:placeholder="
								t('validation.enterField', {
									field: 'fieldList.content',
								})
							"
							@input="contentField.handleChange"
							@blur="contentField.handleBlur"
							:value="contentField.value"
						></textarea>
						<p class="text-danger">
							{{ contentField.errorMessage }}
						</p>
					</div>
				</div>

				<div>
					<button type="button" class="btn-common btn-red" @click="submitForm">
						{{ t('companyInvites.invite_user') }}
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import moment from 'moment';
import { useRouter } from 'vue-router';

export default {
	name: 'seekerInvites',

	components: {},

	setup() {
		// ref vars

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		// global router
		const router = useRouter();

		// form schema validation
		const inviteSchema = yup.object({
			email: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.email',
					}),
				)
				.min(2),
			full_name: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.yourFullName',
					}),
				),
			content: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.content',
					}),
				),
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, isSubmitting } = useForm({
			validationSchema: inviteSchema,
		});

		// form fields
		const fullNameField = reactive(useField('full_name', undefined, { initialValue: null }));
		const emailField = reactive(useField('email', undefined, { initialValue: null }));
		const contentField = reactive(useField('content', undefined, { initialValue: null }));

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */
		onMounted(() => {});

		/**
		 * Computed Properties
		 * *******************************************************************
		 */

		// get country options
		// const countryOptions = computed(() => store.getters['country/getCountryOptions']);
		/**
		 * Methods
		 * *******************************************************************
		 */
		// submit form - change tab - step - 2
		const submitForm = handleSubmit(async values => {
			await store.dispatch('dashboard/inviteSeekerEmployer', values).then(res => {
				console.log(res, 'gfahjdsfajhdsfahkjdsf');
				// fetch user details
				router.push({ name: 'Dashboard' });
			});

			return true;
		});

		const dateFormated = date => {
			console.log(date);
			return moment('2021-01-21').format('DD/MM/YYYY');
		};

		/**
		 * Watch
		 * *******************************************************************
		 */

		return {
			// trasnslate function
			t,

			// refs
			//icon

			// form related
			formMeta,
			isSubmitting,

			// fields
			emailField,
			fullNameField,
			contentField,
			// computed

			// methods
			submitForm,
			dateFormated,
		};
	},
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';
.invite-employer {
	.explaination {
		padding: 10px;
		border-radius: 12px;
		outline: none;
		border: 3px dashed #dde0e2;
		width: 100%;
		font-weight: 600;
		font-size: 14px;
		background-color: #f6f6f6;
	}
}
</style>
