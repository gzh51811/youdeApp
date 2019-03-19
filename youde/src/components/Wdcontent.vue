<template>
    <div data-v-38a122bc="" class="wrapper">
        <Wdnicheng :nicheng='nicheng'></Wdnicheng>
        <Wdsection :nicheng='nicheng'></Wdsection>
    </div>
</template>
<script>
    import Wdnicheng from './Wdnicheng'
    import Wdsection from './Wdsection'

    export default {
        data(){
            return{
                nicheng:""
            }
        },
        components : {
            Wdnicheng,
            Wdsection
        },
        created(){
            // let user = localStorage.getItem("username")
             this.nicheng = localStorage.getItem("username");

        }
    }
</script>
<style scoped>

</style>