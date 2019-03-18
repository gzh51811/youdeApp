<template>
    <div class="all">
        <ul>
            <li v-for="(tab,idx) in tabs" :key='tab' :class="{active : activeIdx==idx}" @click="changeTab(idx)">{{tab}}</li>
        </ul>
        <div class="con">
            <component :is='comActive' ></component>            
        </div>
        
    </div>
</template>

<script>

import DtInfoCom from '../components/DtInfoCom.vue';
import DtInfoCon from '../components/DtInfoCon.vue';

export default {
    data(){
        return {
            tabs : ['商品详情','商品说明书'],
            comActive : 'DtInfoCon',
            activeIdx : 0,
        }
    },



    components : {
        DtInfoCom,
        DtInfoCon
    },

    methods : {
        changeTab(idx){
            this.activeIdx = idx;
            this.comActive = idx ? 'DtInfoCom' : 'DtInfoCon';
        }
    }
}
</script>


<style lang="scss" scoped>

div.all{

    ul{
        height: 1.25rem;
        display: flex;
        border-bottom: 1px solid #ccc;
        li{
            flex: 1;
            text-align: center;
            height: 1.25rem;
            line-height: 1.25rem;
        }

        li.active{
            border-bottom : 2px solid red;
            color : blue;
        }
    }

}
</style>



