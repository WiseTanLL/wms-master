import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routers from './routers';
import store from './vuex/user';
import FastClick from 'fastclick';

Vue.config.debug = true; //开启debug模式

Vue.use(VueRouter); //启用路由
Vue.use(VueResource); //启用资源管理

//新建路由
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: routers
});
FastClick.attach(document.body);

// 处理刷新的时候vuex被清空但是用户已经登录的情况
if (window.sessionStorage.user) {
	store.dispatch('setUserInfo', JSON.parse(window.sessionStorage.user));
}

// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requireAuth)) {
		alert('sss');
		if (store.state.userInfo.userId) {
			next();
		} else {
			next({
				path: '/login',
				query: {
					redirect: to.fullPath
				}
			});
		}
	} else {
		next();
	}
});

const app = new Vue({
	router: router,
	store
}).$mount('#app');