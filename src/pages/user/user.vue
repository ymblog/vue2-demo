<template>
	<div class="page-user">
		<img class="headpic" src="@/assets/images/headpic.png" alt="">
		<p>{{name}}，欢迎!</p>
		<div class="ui-btn" @click="logout">退出登录</div>
		<ly-footer></ly-footer>
	</div>
</template>
<script>
    import lyFooter from '../../components/footer';
    import {mapState} from 'vuex';
	export default{
		components:{
			lyFooter
		},
		computed:{
			...mapState(['name'])
		},
		methods:{
			logout(){
				this.$store.dispatch('logOut').then(() => {
					this.$router.push('/login');
				});
			}
		}
	}
</script>
<style lang="less" scope>
.page-user{
	height:100vh;
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column;
	color:#00b7ff;
	font-size:32px;
	.headpic{
		width:200px;
		height:200px;
		margin-bottom:30px;
		box-shadow:0 0 30px #ccc;
		border-radius:50%;
	}
	.ui-btn{
		margin-top:20px;
	}
}
</style>