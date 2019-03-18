<template>
<div>

    <div class="item" v-for="data in datas" :key="data.createTime">
        <div class="top">
            <div class="dtComLeft">
                <img src="" alt="">
                <p>{{data.commentAccount}}</p>
            </div>
            <div class="dtComRight" v-for="i in data.descgrade" :key='i'>
                <i></i>
            </div>
        </div><br>
        <p>{{data.commentContent}}</p><br><br>
        <p>{{data.createTime}}</p>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            datas : this.$store.getters.commonds
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
            display: flex;
            .dtComLeft{
                flex: 2;
                img{
                    width: 36px;
                    height: 36px;
                }
                p{
                    line-height: 36px;
                }
            }
            .dtComRight{
                flex: 1;
            }
        }
    }
</style>





