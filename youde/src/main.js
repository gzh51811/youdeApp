import Vue from 'vue'


import store from './configs/store'
import router from './configs/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
Vue.prototype.$axios = axios;




// 引入全局样式
import './stylesheets/index.css'


Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    render: h => h('router-view'),
    store,
    router
}).$mount('#app')
