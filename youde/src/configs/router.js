import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from '../App'
import Details from '../pages/Details'
import Login from '../pages/Login'
import Reg from '../pages/Reg'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Cart from '../pages/Cart'
import Mine from '../pages/Mine'
import List from '../pages/List'
import Search from '../pages/Search'

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
                path : '/category',
                name : 'category',
                component : Category
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
        path : '/list',
        name : 'list',
        component : List
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
    },
    {
        path : '/search',
        name : 'search',
        component : Search
    }
];

const router = new VueRouter({
    routes
});
// //全局路由守卫
// router.beforeEach((to,from,next)=>{
//     // console.log(to,from);
//     next();
// });
export default router;