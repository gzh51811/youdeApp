<template>
    <div data-v-38a122bc="" class="noLoginSection">
        <img data-v-38a122bc="" src="../assets/headImg.e7eb358.png" alt="" class="noLoginImg">
        <a data-v-38a122bc="" href="javascript:;" class="goLoginBtn" @click="gotologin">点我去登录</a>
    </div>
</template>
<script>
export default {
    methods:{
        gotologin(){
            this.$router.push({name:"login"});
        }
    }
}
</script>

<style scoped>

</style>