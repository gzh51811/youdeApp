import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from '../App'
import Sort from '../pages/Sort'
import Details from '../pages/Details'
import Login from '../pages/Login'
import Reg from '../pages/Reg'
import Home from '../pages/Home'
import List from '../pages/List'
import Cart from '../pages/Cart'
import Mine from '../pages/Mine'

const routes = [
    {
        path : '/',
        component : App,
        children:[
            {
                path : '/',
                name : 'home',
                component : Home
            },
            {
                path : '/list',
                name : 'list',
                component : List
            },
            {
                path : '/cart',
                name : 'cart',
                component : Cart
            },
            {
                path : '/mine',
                name : 'mine',
                component : Mine
            }
        ]
    },
    {
        path : '/sort',
        name : 'sort',
        component : Sort
    },
    {
        path : '/details',
        name : 'details',
        component : Details
    },
    {
        path : '/login',
        name : 'login',
        component : Login
    },
    {
        path : '/reg',
        name : 'reg',
        component : Reg
    }

];

const router = new VueRouter({
    routes
});

export default router;