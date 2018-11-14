<template>
	<div class="page-detail">
		<my-header title="详情"></my-header>
		<div class="lt-block main">
			<img :src="list.pic" alt="">
			<div class="info-box">
				<div class="info-header">
					<p class="title">{{list.name}}</p>
					<p class="tel"><a :href="'tel:'+ list.tel"></a><span class="icon-box"><i class="icon-phone"></i></span>{{list.tel}}</a></p>
				</div>
				<p><span></span>{{address}}</p>
			</div>
		</div>
	</div>
</template>
<script>
	import myHeader from '@/components/header';
	export default{
		components:{
			myHeader
		},
		created(){
			this.$ajax({
				url: '/list',
	            method: 'GET'
			}).then(data => {
				this.list = data.data.list[this.$route.params.id];
			});
		},
		data(){
			return{
				list:''
			}
		}
	}
</script>
<style lang="less" scope>
	.page-detail{
		height:100vh;
		background:#fff;
		.main{
			img{
				width:100%;
			}
		}
		.info-box{
			padding:20px;
			.info-header{
				display:flex;
				margin-bottom:20px;
				justify-content: space-between;
				line-height:50px;
			}
			.tel{
				display:flex;
				align-items:center;
				color:#00b7ff;
			}
			.icon-box{
				line-height:1;
				min-width:50px;
			}
		}
		.title{
			margin-bottom:10px;
			font-size:32px;
		}
	}
</style>