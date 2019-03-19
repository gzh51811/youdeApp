<template>
    <div class="all">
        <DtHeader></DtHeader>
        <div class="comRe">
            <component :is="compName"></component>
            <dt-zhezao></dt-zhezao>
        </div>
        <dt-foot></dt-foot>
    </div>
</template>

<script>

import DtHeader from '../components/DtHeader.vue';
import Dtgoods from '../components/Dtgoods.vue';
import DtInfo from '../components/DtInfo.vue';
import DtCom from '../components/DtCom.vue';
import DtFoot from '../components/DtFoot.vue';
import DtZhezao from '../components/DtZhezao.vue';
import qs from 'qs';

export default {

    computed : {
        compName(){
            return this.$store.state.compName;
        }
    },


    components : {
        DtHeader,
        Dtgoods,
        DtInfo,
        DtCom,
        DtFoot,
        DtZhezao
    },

    created(){
        var {goodsId} = this.$route.query;
        var _this = this;
        this.$axios.get('http://localhost:3000/goodsDetail',{
            params:{
                goodsId
            }
        }).then(function(res){

            _this.$store.commit('updateDetailInfo',res.data[0].data);
            if(res.data[0]){
                _this.$store.commit('updateDetailInfo',res.data[0].data);
            }
        }).catch(function(error){
            console.log("error : " + error);
        });


        let username =  localStorage.getItem("username");

        this.$axios.post("http://localhost:3000/cart/cartlist",
            qs.stringify({
                username
            })
        
        
        ).then(res=>{
        
            this.$store.dispatch('setgoodslist',res.data);

        })


    }
}
</script>
<style lang="scss" scoped>

.all{
    position: relative;
  
    .comRe{

        position: absolute;
        top: 1.3rem;
        margin-bottom: 1.3rem;
        width: 100%;
        
    }

}

</style>




