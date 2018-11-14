<!-- 加载组件 -->
<template>
	<div>
		<div class="loading-box" v-show="isLoading">
			<i></i>
		</div>
		<p class="no-data" v-show="isData">{{tip}}</p>
	</div>
</template>
<script>
	export default{
		props:['isLoading','isData','tip']
	}
</script>