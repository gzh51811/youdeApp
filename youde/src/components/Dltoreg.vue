<template>
    <div data-v-5ad292c0="" class="pwlogin">
        <p data-v-5ad292c0="">
            <a data-v-5ad292c0="" href="javascript:;" class="">

            </a>
        </p> <span data-v-5ad292c0="" id="">
        <a data-v-5ad292c0="" href="javascript:;" class="" @click="gotoReg">立即注册</a>
    </span>
    </div>
</template>
<script>
    export default {
        methods : {
            gotoReg(){
                this.$router.push({name:'reg'});
            }
        }
    }
</script>