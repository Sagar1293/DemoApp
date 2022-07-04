<template>
	<div class="econtract__list">
		<!-- e-contract-list -->
		<e-contract />
	</div>
</template>

<script>
import EContract from '@/views/econtract/components/EContract.vue';

export default {
	name: 'EContractList',

	components: {
		EContract,
	},
	setup(){
		document.title= 'Econtract - Way2Work'
	}
};
</script>


