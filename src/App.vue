<template>
	<div id="app">
		<transition name="fade" mode="out-in">
		  	<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
@import "./assets/css/base.less";
@import "./assets/css/layout.less";
@import "./assets/css/sprite.less";
</style>
