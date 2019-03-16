<template>
    <header data-v-916e8b0c="" data-v-5ad292c0="" class="gHeader clearfix">
        <div data-v-916e8b0c="" class="f_logo">
            <i data-v-916e8b0c="" class="icon iconfont icon-back" style="color: rgb(88, 89, 89);" @click="back"></i>
        </div>
        <div data-v-916e8b0c="" class="search-box" style="color: rgb(88, 89, 89);">
            <h2 data-v-916e8b0c="">{{title}}</h2>
        </div>
    </header>
</template>
<script>
    export default {
        props : ['title'],
        methods:{
            back(){
                this.$router.back();
            }
        }
    }
</script>
<style scoped>

</style>