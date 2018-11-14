import Vue from 'vue';
import App from './App';
import router from './router';
import infiniteScroll from 'vue-infinite-scroll';
import vueLazyload from 'vue-lazyload';
import FastClick from 'fastclick';
import '@/assets/js/lib-flexible';//移动端使用
import '@/assets/js/filter';//引入过滤器
import '@/assets/js/directive';//引入自定义指令
import util from '@/assets/js/util';
import store from '@/store/index.js';//使用vuex 不使用请删除掉

Vue.config.productionTip = false;
//解决300毫秒点击问题
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
//懒加载
Vue.use(vueLazyload, {
	preLoad: 1.3,
	error: require('@/assets/images/default-img.png'),
	loading: require('@/assets/images/default-img.png'),//防止url的问题
	attempt: 3,
	listenEvents: [ 'scroll' ]
});
//加载更多
Vue.use(infiniteScroll);
Vue.use(util);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
