<template>
    <div id="app">
        <router-view></router-view>
        <Xfooter></Xfooter>
    </div>
</template>

<script>

// 底部
import Xfooter from './components/Xfooter.vue'
import Vue from 'vue'

import axios from "axios";
Vue.prototype.$axios = axios;

    export default {
        name: 'app',
        components: {
            Xfooter
        }
    }
</script>

<style>

</style>
