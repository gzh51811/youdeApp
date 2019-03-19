<template>
    <div id="app">
        <router-view></router-view>
        <Xfooter :cartlist="cartlist"></Xfooter>
    </div>
</template>

<script>

// 底部
import Xfooter from './components/Xfooter.vue'
import qs from "qs"

    export default {
        name: 'app',
        data(){
            return{
                cartlist:[]
            }
        },
        components: {
            Xfooter
        },
        created(){
            let username =  localStorage.getItem("username");

            this.$axios.post("http://localhost:3000/cart/cartlist",
                qs.stringify({
                    username
                })
            
            
            ).then(res=>{
            
                    this.$store.dispatch('setgoodslist',res.data);
                   this.cartlist = this.$store.getgoodslist;
                })


        }

    }
</script>

<style>

</style>
