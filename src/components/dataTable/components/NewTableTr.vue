<template>
	<tr>
		<slot></slot>
	</tr>
</template>

<script>
export default {
	name: 'NewTbTr',
};
</script>

<style lang="scss" scoped>
tr {
	padding: 20px 20px;
	border-bottom: 1px solid #dee2e6;
	border-radius: 10px;
	overflow: hidden;
	&:last-child {
		border-bottom: 1px solid transparent;
	}
}
</style>
