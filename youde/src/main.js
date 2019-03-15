import Vue from 'vue'

import store from './configs/store'
import router from './configs/router'

//引入vue-touch
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'});

//引入vue-lazyload
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    preLoad: 1.3,
    // error: require('@/assets/img/dou_dou.jpg'),   //请求失败后显示的图片
    // loading: require('@/assets/img/dou_dou.jpg'),   //加载的loading过渡图片
    attempt: 1     // 尝试次数
});

// 引入全局样式
import './stylesheets/index.css'
import './stylesheets/icon.css'

Vue.config.productionTip = false

new Vue({
    render: h => h('router-view'),
    store,
    router
}).$mount('#app')
