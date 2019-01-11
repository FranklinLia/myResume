// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/common/reset.styl'
import './assets/common/base.styl'

Vue.config.productionTip = false

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    error: require('./assets/img/load.png'),
    loading: require('./assets/img/load.png'),
    attempt: 1
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})
