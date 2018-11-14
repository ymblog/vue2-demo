<template>
	<div class="page-journey-setting">
	    <div class="mod-column">
		    <div class="title">您想去哪些城市走走？</div>
		</div>
		<div class="column-block city-list" id="j-city-list" @click="selectCity">
		    <span v-for="(item,index) in citys"><em :data-index="index" :class="{'cur' : selected.indexOf(index) > -1}">{{item.name}}<i></i></em></span>  
		</div>
		<div class="mod-column">
		    <div class="title">您的假期共有几天呢？</div>
		</div>
		<div class="column-block total-day">
		    <div class="control-day"><i :class="[unTouch ? 'unTouch reduce' : 'reduce']" @click="reduce"></i><div class="cur-day">{{day}}</div><i class="add" @click="add"></i></div><span>天</span>
		</div>
		<a class="submit-btn" id="j-submit-btn" @click="create">为我推荐行程</a>
		<ly-footer>
		</ly-footer>
	</div>
</template>
<script>
	import lyFooter from '@/components/footer';
	export default{
		data(){
			return{
				citys:[{
					id:1,
					name:'福州'
				},{
					id:2,
					name:'厦门'
				},{
					id:3,
					name:'莆田'
				},{
					id:4,
					name:'三明'
				},{
					id:5,
					name:'泉州'
				}],
				selected:[],
				unTouch:false,
				day:1
			}
		},
		components:{
			lyFooter
		},
		methods:{
			//选择城市
			selectCity(e){
				let index = e.target.dataset.index,
					numberIndex = this.selected.indexOf(parseInt(index));
				if(numberIndex == -1&&index){
					this.selected.push(parseInt(index));
				}else if(numberIndex >= 0){
					this.selected.splice(numberIndex,1);
				}
			},
			//减
			reduce(){
				if(this.day <= 0){
					return false;
				}
				--this.day;
				if(this.day == 0){
					this.unTouch = true;
				}
			},
			//加
			add(){
				if(this.day == 0){
					this.unTouch = false;
				}
				++this.day;
				this.isShow = !this.isShow;
			},
			//制定行程
			create(){
				if(this.selected.length === 0){
					this.$toast('请选择城市');
				}else if(this.day === 0){
					this.$toast('选择天数为0');
				}else{
					this.$toast('暂无开发');
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	@import 'journey.less';
</style>