<!-- 头部组件 -->
<template>
	<header class="ly-header">
		<i class="icon-back" @click="back"></i>
        <span>{{title}}</span>
		<i class="icon-search" v-show="isSearch" @click="search"></i></header>
</template>
<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1);
			},
            search(){
                this.$emit('search');
            }
		},
        props:['title','isSearch','fun']
	}
</script>
<style lang="less" scoped>
/* 头部 */
.ly-header{
    height: 88px;
    text-align: center;
    font-size: 36px;
    line-height: 88px;
    font-weight: bold;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    border-bottom:1px solid #ededed; /* no */
    z-index: 1000;
    .icon-back{
        position: absolute;
        left: 24px; 
        top:  21px; 
        &:before{
            content:"";
            position:absolute;
            top:-10px;
            right:-10px;
            bottom:-10px;
            left:-10px;
        }
    }
    .icon-search{
        position: absolute;
        top: 24px; 
        right: 24px; 
        &:before{
            content:"";
            position:absolute;
            top:-10px;
            right:-10px;
            bottom:-10px;
            left:-10px;
        }
    }
    .seek,.close,.compile{
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 28px;
        color: #00b7ff;
        font-weight: normal;
    }
    .header-setting{
        position:absolute;
        top:26px;
        right:25px;
        line-height:1;
        a{
            padding:0.5px;
            margin-left:28px;
            vertical-align:middle;
            &:hover{
                color:#fff;
            }
        }
    }
    .star-hover{
        background-position:-582px -671px;
    }
}
</style>