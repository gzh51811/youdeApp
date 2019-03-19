<template>
    <div class="section">
        <div data-v-38a122bc="" class="splitLine"></div>
        <Wdtologin v-if="!flag"></Wdtologin>
        <Wdorder v-if="flag"></Wdorder>
        <div data-v-38a122bc="" class="splitLine"></div>
        <Wdmyassets v-if="flag"></Wdmyassets>
        <div data-v-38a122bc="" class="splitLine"></div>
        <Wdrequire v-if="flag"></Wdrequire>
        <div data-v-38a122bc="" class="splitLine"></div>
        <Wdaddress v-if="flag"></Wdaddress>
        <div data-v-38a122bc="" class="splitLine"></div>
        <Wdrenzheng v-if="flag"></Wdrenzheng>
        <div data-v-38a122bc="" class="splitLine"></div>
        <Wdmycollect v-if="flag"></Wdmycollect>
        <div data-v-38a122bc="" class="splitLine"></div>
        <Wdmycomment v-if="flag"></Wdmycomment>
        <div data-v-38a122bc="" class="splitLine"></div>
        <Wdchangemima v-if="flag"></Wdchangemima>
        <div data-v-38a122bc="" class="splitLine"></div>
        <Wdloginout v-if="flag"></Wdloginout>
    </div>
</template>
<script>
    import Wdtologin from './Wdtologin'
    import Wdorder from './Wdorder'
    import Wdmyassets from './Wdmyassets'
    import Wdrequire from './Wdrequire'
    import Wdaddress from './Wdaddress'
    import Wdrenzheng from './Wdrenzheng'
    import Wdmycollect from './Wdmycollect'
    import Wdmycomment from './Wdmycomment'
    import Wdchangemima from './Wdchangemima'
    import Wdloginout from './Wdloginout'

    export default {
        props:["nicheng"],
        data(){
            return {
               
            }
        },
        computed:{
            flag(){
                if(this.nicheng){
                    return true
                }else{
                    return false
                }
            }
        },
        components: {
            Wdtologin,
            Wdorder,
            Wdmyassets,
            Wdrequire,
            Wdaddress,
            Wdrenzheng,
            Wdmycollect,
            Wdmycomment,
            Wdchangemima,
            Wdloginout
        }
    }
</script>
<style scoped>

</style>