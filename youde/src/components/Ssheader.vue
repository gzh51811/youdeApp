<template>
    <div data-v-0f11067f="" data-v-49192188="" class="search-wrapper">
        <div data-v-0f11067f="" class="input-wrapper">
            <span data-v-0f11067f="" class="icon iconfont icon-search"></span>
            <span data-v-0f11067f="" class="icon iconfont icon-close-b" v-show="flag" @click="cancel"></span>
            <input data-v-0f11067f="" placeholder="搜索商品" ref="ipt" @input="changeBtn">
        </div>
        <div data-v-0f11067f="" class="button-wrapper" style="">
            <a data-v-0f11067f="" class="search-btn cancel-btn" :class="{
            blue : blue
            }" @click="goto">{{btnTitle}}</a>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                flag : false,
                btnTitle : '取消',
                blue : false
            }
        },
        methods:{
            changeBtn(){
                this.flag = true;
                this.btnTitle = '搜索';
                this.blue = true;
            },
            cancel(){
                this.flag = false;
                this.btnTitle = '取消';
                this.blue = false;
                this.$refs.ipt.value = '';
            },
            goto(){
                if(this.blue){
                    this.$router.push({name:'list'});
                }else{
                    this.$router.back();
                }
            }
        },
        mounted(){
            this.$refs.ipt.focus();
        }
    }
</script>
<style scoped>
    .blue{
        color:#00b2ff !important;
    }
</style>