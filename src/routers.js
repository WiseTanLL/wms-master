const routers = [{
	path: '/',
	name: 'home',
	component(resolve) {
		require.ensure(['./App.vue'], () => {
			resolve(require('./App.vue'));
		});
	},
	meta: {
		requireAuth: true
	}
}, {
	path: '/login',
	name: 'login',
	component(resolve) {
		require.ensure(['./view/login.vue'], () => {
			resolve(require('./view/login.vue'));
		});
	}
}, {
	path: '/main',
	name: 'main',
	component(resolve) {
		require.ensure(['./view/login.vue'], () => {
			resolve(require('./view/login.vue'));
		});
	}
}];

export default routers;