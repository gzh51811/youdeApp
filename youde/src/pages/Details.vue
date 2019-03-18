<template>
    <div class="all">
        <DtHeader></DtHeader>
        <div class="comRe">
            <component :is="compName"></component>
        </div>
        <!-- <div class="foot"> -->
            <dt-foot></dt-foot>
        <!-- </div> -->
        
    </div>
</template>

<script>

import DtHeader from '../components/DtHeader.vue';
import Dtgoods from '../components/Dtgoods.vue';
import DtInfo from '../components/DtInfo.vue';
import DtCom from '../components/DtCom.vue';
import DtFoot from '../components/DtFoot.vue';

export default {
    data(){
        return {

        }
    },

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
        DtFoot
    },

    created(){
        var {goodsId} = this.$route.query;
        var _this = this;
        console.log(goodsId);
        this.$axios.get('http://10.3.137.157:3000/goodsDetail',{
            params:{
                goodsId
            }
        }).then(function(res){

            //可取消
            console.log(res.data[0].data);

            _this.$store.commit('updateDetailInfo',res.data[0].data);

        }).catch(function(error){
            console.log("error : " + error);
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




