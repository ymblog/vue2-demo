<!-- 回到顶部组件 -->
<template>
	<i @click="goTop()" v-show="isShowTop" class="icon go-top"></i>
</template>
<script>
	export default{
		data(){
			return{
				isShowTop:false
			}
		},
		created(){
            window.addEventListener('scroll',() => {
            	this.isShowTop = document.body.scrollTop > 500 ? true : false;
		    });
		},
		methods:{
			goTop(){
				let doc = document.body.scrollTop ? document.body : document.documentElement;
			    let scrollTop = doc.scrollTop;
			    let top = function () {
			        scrollTop = scrollTop + (0 - scrollTop) / 2;
			        if (scrollTop < 1) {
			            doc.scrollTop = 0;
			            return false;
			        }
			        doc.scrollTop = scrollTop;
			        stop = requestAnimationFrame(top);    
			    };
			    top();
			}
		}
	}
</script>