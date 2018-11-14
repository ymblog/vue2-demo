<template>
	<div class="page-city">
		<swiper :list="list" v-show="list.length > 0" direction="horizontal" :min-moving-distance="20" height="5rem" :show-dots="true" :show-desc-mask="false" dots-position="center"></swiper>
	   	<div class="top-nav">
			<router-link :to="{name:'list', params: {type:1}}">
				<i class="icon-city-dine"></i>
				<span>美食</span>
			</router-link>
			<router-link :to="{name:'list', params:{type:2}}">
				<i class="icon-city-hotel"></i>
				<span>酒店</span>
			</router-link>
			<router-link :to="{name:'list', params:{type:3}}">
				<i class="icon-city-tour"></i>
				<span>观光</span>
			</router-link>
	    </div>
	    <div class="city-item nearby-sence">
	    	<h2 class="title">附近的美食</h2>
	    	<div class="nearby-sence-con">
	    		<div class="nearby-sence-item" v-for="(item,index) in foods">
		            <router-link :to="{name:'detail',params:{id:index}}">
		            	<div class="shop-img">
		            		<img v-lazy="item.pic">
		            	</div>
		            </router-link>
		            <div class="nearby-sence-item-title">
						<span class="place">{{item.name}}</span>
		            </div>
	          </div>
	    	</div>
	    </div>
	    <ly-footer></ly-footer>
	</div>
</template>
<script>
import lyFooter from '@/components/footer';
import {Swiper} from 'vux';
export default{
	components: {
		Swiper,
		lyFooter
	},

	created(){
        this.$ajax({
			url: '/list',
            method: 'GET'
		}).then(data => {
			this.foods = data.data.list;
		});
    },
	data(){
		return{
			foods:[],
			showLoading:true,
			list:[{
				img:'http://www.fjta.com/static/app/cover2.3/img_city_350100@2x.png'
			},{
				img:'http://www.fjta.com/static/app/cover2.3/img_city_350400@2x.png'
			}]
		}
	}
}
</script>
<style lang="less" scoped>
@import 'index.less';
</style>