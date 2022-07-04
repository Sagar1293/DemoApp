<template>
	<!-- invoice list -->
	<div class="invoice__list">
		<div class="row">
			<div class="col-6">
				<!-- employer details -->
				<EmployerDetails />
			</div>
			<div class="col-6">
				<!-- invoice form -->
				<InvoiceForm :formFields="formFields" />
			</div>
		</div>

		<!-- daily work hour list -->
		<DailyWorkHourList />

		<div>
			<h5 class="title-lg text-gray">Anipa Oligona</h5>
			<textarea rows="4" class="explaination"></textarea>
		</div>

		<div class="text-center mt-5">
			<button class="btn-common btn-red">Save</button>
		</div>
	</div>
</template>

<script>
import EmployerDetails from '@/views/invoice/components/EmployerDetails';
import InvoiceForm from '@/views/invoice/components/InvoiceForm';
import DailyWorkHourList from '@/views/invoice/components/DailyWorkHourList';

export default {
	name: 'InvoiceList',

	components: {
		EmployerDetails,
		InvoiceForm,
		DailyWorkHourList,
	},

	setup() {
		/**
		 * Methods
		 * *******************************************************************
		 */
		return {
			// form related
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.invoice__list {
	// width: 100%;
	// display: block;
	// align-items: center;
	// background-color: #fff;
	// border-radius: 20px;
	// padding: 50px 70px;

	.text-gray {
		margin-bottom: 15px;
		color: #a0a4a9;
	}
	.explaination {
		padding: 10px;
		border-radius: 12px;
		outline: none;
		width: 100%;
		border: 3px dashed #dde0e2;
	}
}
</style>
