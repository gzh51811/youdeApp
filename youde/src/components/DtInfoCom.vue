<template>

    <div class="com">
        <p class="title">【药品名称】</p>
        <p class="content">{{goods.title}}</p>
        <p class="title">【厂家名称】</p>
        <p class="content">{{goods.productName}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {goods : this.$store.getters.detailGoods};
    }
}
</script>

<style>
    div.com{
        padding: .5rem 0;
        background: #f0f1f3;
    }
    p{
        font-size: .26rem;
        height: .52rem;
        line-height: .52rem;
        color: black !important;
    }
    p.title{
        box-sizing: border-box;
        padding-left: .5rem;
        width: 100%;
    }
    p.content{
        box-sizing: border-box;
        padding-left: 1.5rem;
    }
</style>

