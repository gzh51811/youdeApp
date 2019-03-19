<template>
    <div data-v-38a122bc="" class="loginOut">
        <button data-v-38a122bc="" @click="logout">退出登录</button>
    </div>
</template>
<script>
export default {
    methods:{
        logout(){
            localStorage.removeItem("username");
            this.$router.push({name:"login"});
        }
    }
}
</script>
