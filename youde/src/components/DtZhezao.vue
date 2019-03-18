<template>
    <div class="all" ref="all">

        <div class="ztop" ref='ztop'></div>
        <div class="zbottom" ref='zbottom' @click.stop='close' >{{contents}}</div>

    </div>
</template>
<script>
export default {
    
    props : ['contents'],

    methods : {
        close(){
            setTimeout(() => {
                this.$refs.all.style.top = '100%';
            }, 500);
        }
    },

    mounted(){
        this.$refs.all.style.height = innerHeight + "px";
        this.$refs.ztop.style.height = innerHeight/2 + "px";
        this.$refs.zbottom.style.height = innerHeight/2 + "px";

        //阻止拖动
        this.$refs.all.ontouchmove = function(e){
            e.preventDefault();
        }
        

    }
}
</script>


<style lang="scss" scoped>

div.all{
    width: 100%;
    position: fixed;
    top: 100%;
    z-index:9999;
    div.ztop{
        background: rgb(79, 79, 218);
        opacity: .2;
    }


    div.zbottom{
        position: relative;
        background: white;
        z-index: 9999;
    }
}

</style>

