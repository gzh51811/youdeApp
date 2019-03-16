<template>
    <div class="cartWrap">
        <GwcHeader :changeBtn="changeBtn" :btnStatus="btnStatus"></GwcHeader>
        <Gwccontent :btnStatus="btnStatus"></Gwccontent>
    </div>
</template>
<script>
    import GwcHeader from '../components/Gwcheader'
    import Gwccontent from '../components/Gwccontent'

    export default {
        data(){
            return {
                btnStatus : false
            }
        },
        methods:{
            changeBtn(){
                this.btnStatus = !this.btnStatus;
            }
        },
        components : {
            GwcHeader,
            Gwccontent
        }
    }
</script>
<style scoped>

</style>