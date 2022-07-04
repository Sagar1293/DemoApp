<template>
	<!-- professional summary -->
	<div class="professional__summary">
		<!-- header -->
		<!-- <div class="md-header">
			<div class="md-header-left">
				
				<h5 class="header-title">
					{{ t('resume.professionalSummary') }}
				</h5>
			</div>
		</div> -->

		<!-- form -->
		<!-- <div class="professional__summary__form my-4">
			<form class="theme-input">
				<div class="form-row">
					
					<div class="form-group col-12">
						<label for="pro_summary">
							{{ t('resume.updateProfessionalSummary') }}
						</label>

						<textarea
							class="form-control"
							id="pro_summary"
							:placeholder="
								t('validation.enterField', {
									field: 'fieldList.pro_summary',
								})
							"
							@input="summaryField.handleChange"
							@blur="summaryField.handleBlur"
							:value="summaryField.value"
						></textarea>

						<p class="text-danger">
							{{ summaryField.errorMessage }}
						</p>
					</div>
				</div>

				
				<div class="form-row btn-row justify-content-end">
					<button
						type="button"
						class="btn-common btn-darkGray"
						@click="submitForm"
					>
						{{ t('common.update') }}
					</button>
				</div>
			</form>
		</div> -->
	</div>
	<hr />
</template>

<script>
import {  onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import * as yup from 'yup';
import { useForm } from 'vee-validate';
import { useStore } from 'vuex';

export default {
	name: 'ProfessionalSummary',

	setup() {
		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// form schema validation
		const summarySchema = yup.object({
			professional_summary: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.pro_summary',
					}),
				)
				.min(2),
		});

		// global store
		const store = useStore(); // use state

		// form validation intialize
		const {
			meta: formMeta,
			handleSubmit,
			isSubmitting,
			setValues,
		} = useForm({
			validationSchema: summarySchema,
		});

		// form fields
		// const summaryField = reactive(
		// 	useField('professional_summary', undefined, { initialValue: null }),
		// );

		/**
		 * Mounted Props
		 * *******************************************************************
		 */
		onMounted(() => {
			const user = store.getters['auth/getUserData'];

			setValues({
				professional_summary: user.jobSeeker?.professional_summary,
			});
		});

		/**
		 * Computed Properties
		 * *******************************************************************
		 */
		// resume list
		const user = computed(() => store.getters['auth/getUserData']);

		/**
		 * Methods
		 * *******************************************************************
		 */
		// submit form - add work hour
		const submitForm = handleSubmit(async (values) => {
			// save the work details
			await store.dispatch('resume/updateProfessionalSummary', values);

			return true;
		});

		return {
			// translate function
			t,

			// form related
			formMeta,
			isSubmitting,

			// form field
			// summaryField,

			// methods
			submitForm,

			// computed
			user,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

@media (max-width: 576px) {
	.professional__summary {
		.professional__summary__form {
			.btn-row {
				justify-content: center !important;
			}
		}
	}
}
</style>