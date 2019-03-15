import Vue from 'vue'

import store from './configs/store'
import router from './configs/router'

// 引入全局样式
import './stylesheets/index.css'
import './stylesheets/icon.css'

Vue.config.productionTip = false

new Vue({
    render: h => h('router-view'),
    store,
    router
}).$mount('#app')
