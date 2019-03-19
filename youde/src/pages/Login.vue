<template>
    <div class="z-container">
        <Xheader title="登录"></Xheader>
        <Dlloginform></Dlloginform>
        <Dltoreg></Dltoreg>
    </div>
</template>
<script>
    import Xheader from '../components/Xheader'
    import Dlloginform from '../components/Dlloginform'
    import Dltoreg from '../components/Dltoreg'

    export default {
        components : {
            Xheader,
            Dlloginform,
            Dltoreg
        },
        created(){
           
        }
    }
</script>
<style scoped>

</style>