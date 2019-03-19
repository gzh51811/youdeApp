<template> 

    <div>
        <i class="icon iconfont icon-back" @click="back"></i>
        <ul>
            <li v-for="(item,idx) in navs" :key='item.text' @click.stop="chooseCom(item.compName,idx)" :class="{active : activeIdx==idx}">{{item.text}}</li>
        </ul>
        <i class="icon iconfont icon-star-empty"></i>
    </div>
</template>
<script>



export default {

    data(){
        return {
            navs : [
            {
                text : '商品',
                compName : 'Dtgoods'
            },
            {
                text : '详情',
                compName : 'DtInfo'
            },
            {
                text : '评论',
                compName : 'DtCom'
            }
            ],
            activeIdx : 0
        } 
    },

    methods : {
        chooseCom(name,idx){
            this.$store.commit('changeCompName',name);
            this.activeIdx = idx;
        },

        back(){
            window.history.back();
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

div{
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    background: white;
    height: 1.3rem; 
    
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    display: flex;
    justify-content: center;
    align-items: center;

    i{
        font-size: .5rem;
    }
    
    ul{
        width: 4.6rem;
        height: .75rem;    
        display: flex;
        text-align: center;
        border: 1px solid #6ea0da;
        border-radius: 3px;
        margin:0 1.5rem;

        li{
            flex: 1;
            font-size: .3rem;
            border-right: 1px solid #6ea0da;
            line-height: .75rem;
            color: #585454;
        }

        li:last-child{
            border-right: none;
        }

        li.active{
            background: red;
            color : white;
        }
    }

}
</style>


