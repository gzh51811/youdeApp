<template>
    <div class="z-container">
        <Xheader title="注册"></Xheader>
        <Zccontent></Zccontent>
    </div>
</template>
<script>
    import Xheader from '../components/Xheader'
    import Zccontent from '../components/Zccontent'

    export default {
        components : {
            Xheader,
            Zccontent
        },
        // created(){
        //      this.$axios.post("http://localhost:3000/reg",{
                
        //     })
        // }
    }
</script>