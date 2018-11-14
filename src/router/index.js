import Vue from 'vue';
import Router from 'vue-router';
import Util from '@/assets/js/util';
import common from '@/assets/js/common';
import store from '@/store/index.js';//使用vuex 不使用请删除掉
//组件统一懒加载引入
const index = r => require.ensure([], () => r(require('@/pages/index/index')), 'index');
const list = r => require.ensure([], () => r(require('@/pages/list/list')), 'list');
const detail = r => require.ensure([], () => r(require('@/pages/detail/detail')), 'detail');
const login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login');
const user = r => require.ensure([], () => r(require('@/pages/user/user')), 'user');
const journey = r => require.ensure([], () => r(require('@/pages/journey/journey')), 'journey');
Vue.use(Util);
Vue.use(Router);
/* 需要验证登录的加上
meta:{
    requiresAuth:true
}
*/
//默认 hash 模式
const router = new Router({
    routes: [
        {
            path: '',
            redirect: '/index'
        },{
            path:'/index',
            name:'index',
            component:index
        },{
            path:'/list/:type',
            name:'list',
            component:list
        },{
            path:'/detail/:id',
            name:'detail',
            component:detail
        },{
            path:'/login',
            name:'login',
            component:login
        },{
            path:'/journey',
            name:'journey',
            component:journey,
            meta:{
                requiresAuth:true
            }
        },{
            path:'/user',
            name:'user',
            component:user,
            meta:{
                requiresAuth:true
            }
        }
    ]
});
//登录验证 包括存储用户信息 不使用请删除掉
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (common.cookie.get('token')) {
            if(store.state.token){
                next();
            }else{
                store.commit('SET_NAME',common.cookie.get('name'));
                store.commit('SET_TOKEN',common.cookie.get('token'));
                next();
            }    
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
        }
    } else {
        next();
    }
});
export default router;