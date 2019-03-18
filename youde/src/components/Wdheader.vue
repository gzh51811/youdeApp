<template>
    <header data-v-916e8b0c="" data-v-38a122bc="" class="gHeader clearfix perCenterHeader">
        <div data-v-916e8b0c="" class="f_logo">
            <i data-v-916e8b0c="" class="icon iconfont icon-back" style="color: rgb(88, 89, 89);" @click="back"></i>
        </div>
        <div data-v-916e8b0c="" class="search-box" style="color: rgb(88, 89, 89);">
            <h2 data-v-916e8b0c="">我的</h2>
        </div>
    </header>
</template>
<script>
    export default {
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>
<style scoped>

</style>