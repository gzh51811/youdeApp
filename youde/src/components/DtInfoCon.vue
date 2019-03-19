<template>
    <div >
        <img :src="item" alt="" v-for="item in urls" :key="item">
    </div>
</template>

<script>
export default {
    computed : {
        urls : function(){
            return this.$store.getters.urls;
        }
    }
}
</script>

<style lang="scss" scoped>
    img{
        width: 100%;
        height: 100%;
    }
</style>



