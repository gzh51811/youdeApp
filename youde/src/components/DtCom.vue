<template>
<div :v-if="datas">

    <div class="item"  v-for="data in datas" :key="data.createTime">
        <div class="top">
            <div class="dtComLeft">
                <img src="../assets/headImg.e7eb358.png" alt="">
                <span>{{data.commentAccount}}</span>
            </div>
            <div class="dtComRight">
                <i class="icon iconfont icon-star on" v-for="i in data.descgrade" :key='i'></i>
            </div>
        </div><br>
        <p>{{data.commentContent}}</p><br><br>
        <p>{{data.createTime}}</p>
    </div>
</div>
</template>
<script>
export default {

    computed:{
        datas(){
            if(this.$store.getters.commonds){
                return this.$store.getters.commonds;
            }else{
                return false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    div.item{
        background: #f0f1f3;
        padding: 2.5%;
        margin-bottom: 2.5%;
        div.top{
            overflow: hidden;
            line-height: 36px;
            .dtComLeft{
                float: left;
                img{
                    width: 36px;
                    height: 36px;
                }
                span{
                    line-height: 36px;
                }
            }
            .dtComRight{
                float: right;
                i{
                    padding : 0;
                }
            }
        }
    }
</style>





