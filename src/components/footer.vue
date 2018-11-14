<!-- 底部组件 -->
<template>
	<nav class="nav">
		<div class="nav-item">
			<div class="nav-box" :class="{ 'cur' : $route.path.indexOf('index') !== -1}" @click="go('/')">
				<span class="nav-1 icon-nav-side"></span>
				<p>周边</p>
			</div>
		</div>
		<div class="nav-item">
			<div class="nav-box" :class="{'cur' : $route.path.indexOf('journey') !== -1}" @click="go('/journey')">
				<span class="nav-2 icon-nav-trip"></span>
				<p>行程</p>
			</div>
		</div>
		<div class="nav-item">
			<div class="nav-box" :class="{'cur' : $route.path.indexOf('user') !== -1}" @click="go('/user')">
				<span class="nav-4 icon-nav-me"></span>
				<p>我的</p>
			</div>
		</div>
	</nav>
</template>
<script>
	export default{
		methods:{
			go(path){
				this.$router.push(path);
			}
		}
	}
</script>
<style lang="less" scoped>
@import (reference) "../assets/css/sprite.less";
.nav{
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	width: 100%;
	height: 99px;
	padding-top:10px;
	border-top: 1px solid #dadada; /* no */
	background-color: #fff;
	z-index: 1000;
	box-sizing:border-box;
	.nav-item{
	flex:1;
	text-align: center;
	color: #999;
	font-size: 22px;
	p{
		text-align: center;
		line-height:1;
	}
	span[class*=icon]{
	}
	.nav-box{
		display:inline-block;
		&.cur{
			p{
			color: #00b7ff;
			}
			.nav-1{
			.icon-nav-side-hover();
			}
			.nav-2{
			.icon-nav-trip-hover();
			}
			.nav-3{
			.icon-nav-find-hover();
			}
			.nav-4{
			.icon-nav-me-hover();
			}
		}
	}
	&:last-child{
		p{
			line-height:40px;
		}
	}
	}
}
</style>