<template>

    <div
            data-v-463f1e5b
            data-v-8f50877c
            class="floor bottom-bar-pannel"
            style="display: block; font-size: 16px;"
    >
        <div data-v-463f1e5b class="floor-container">
            <ul data-v-463f1e5b class="tab4">
                <li data-v-463f1e5b class="router-link-active" @click="goto('home')">
          <span data-v-463f1e5b class="bar-img">
            <i data-v-463f1e5b class="icon iconfont icon-home2" :class="{
            active : isOn === 'home'
            }"></i>
          </span>
                    <span data-v-463f1e5b class="cart-index" :class="{
            active : isOn === 'home'
            }">首页</span>
                </li>
                <li data-v-463f1e5b class="router-link-exact-active router-link-active" @click="goto('category')">
          <span data-v-463f1e5b class="bar-img">
            <i data-v-463f1e5b class="icon iconfont icon-fenlei " :class="{
            active : isOn === 'category'
            }"></i>
          </span>
                    <span data-v-463f1e5b class="cart-index" :class="{
            active : isOn === 'category'
            }">分类</span>
                </li>
                <li data-v-463f1e5b @click="goto('cart')">
          <span data-v-463f1e5b class="bar-img relative">
            <em data-v-463f1e5b class="shopcar_num">{{cartlist?cartlist.length:0}}</em>
            <i data-v-463f1e5b class="icon iconfont icon-add_cart" :class="{
            active : isOn === 'cart'
            }"></i>
          </span>
                    <span data-v-463f1e5b class="cart-index" :class="{
            active : isOn === 'cart'
            }">购物车</span>
                </li>
                <li data-v-463f1e5b @click="goto('mine')">
          <span data-v-463f1e5b class="bar-img">
            <i data-v-463f1e5b class="icon iconfont icon-home1" :class="{
            active : isOn === 'mine'
            }"></i>
          </span>
                    <span data-v-463f1e5b class="cart-index" :class="{
            active : isOn === 'mine'
            }">我的</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        computed: {
            isOn() {
                return this.$route.name;
            },
            cartlist(){
                return this.$store.getters.getgoodslist;
            }
        },
        methods: {
            goto(name) {
                  let username = localStorage.getItem("username");
                  console.log(username == "");
                  console.log(name);
                  this.$router.push({name}) 
            },
        
        },
        //   created(){
        //          let username = localStorage.getItem("username");
        //         console.log(usernmae);
        //   } 

    }
</script>
<style scoped>

    .icon-home2:before {
        content: "\e6a9"
    }

    .icon-fenlei:before {
        content: "\e6fa";
    }

    .icon-add_cart:before {
        content: "\e770";
    }

    .icon-home1:before {
        content: "\e601";
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    span {
        float: none
    }
    .floor{
        z-index:1000 !important;
    }
</style>
