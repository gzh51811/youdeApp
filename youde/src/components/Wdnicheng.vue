<template>
    <div data-v-38a122bc="" class="sectionHeader relative">
        <img data-v-38a122bc="" src="../assets/my_headBg.5fc8e1b.jpg" alt="">
        <div data-v-38a122bc="" class="userInfoCont">
            <div data-v-38a122bc="" class="fl userInfo">
                <div data-v-38a122bc="" class="userImg">
                    <img data-v-38a122bc="" src="../assets/headImg.e7eb358.png" alt="">
                </div>
                <div data-v-38a122bc="" class="userName">{{nicheng}}</div>
            </div>
            <div data-v-38a122bc="" class="fr signIn">
                <div data-v-38a122bc="">
                    <span data-v-38a122bc="" class="signBtn fl" v-show="!isok" @click="show">{{text}}</span>
                    <span data-v-38a122bc="" class="signTag fl">?</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["nicheng"],
    data(){
        return{
            isok:false,
            text:""  
        }
    },
    methods:{
       show(){
                this.text = "今日已签到"        
           }
       },
    created(){
          let username = localStorage.getItem("username");
         if(username){
             this.text = "签到"
         }else{
             this.text = "签到送积分"
         }

    }
       
          

    }

</script>
