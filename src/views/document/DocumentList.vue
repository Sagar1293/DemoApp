<template>
	<div class="document__list card-space">
		<!-- My Document List -->
		<my-documents />

		<!-- Contract File -->
		<contract-file />

		<!-- E-Contract File -->
		<e-contract />

		<!-- pay-slips -->
		<pay-slip />
	</div>
</template>

<script>
import MyDocuments from '@/views/document/components/MyDocuments.vue';
import ContractFile from '@/views/document/components/ContractFile.vue';
import EContract from '@/views/document/components/EContract.vue';
import PaySlip from '@/views/document/components/PaySlips.vue';

export default {
	name: 'DocumentList',

	components: {
		MyDocuments,
		ContractFile,
		EContract,
		PaySlip,
	},
	setup(){
		document.title = 'My Documents - Way2Work'
		return{}
	}
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';


</style>
