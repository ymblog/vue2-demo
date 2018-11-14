import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
Vue.use(Vuex);
const state = {
	token:'',//token值
	name:''//用户名称
};
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})