<template>
    <div data-v-35c3340a="" class="wrapPadding">
        <div data-v-35c3340a="" class="cartList">
            <div data-v-35c3340a="" class="listHeader">
                <label data-v-35c3340a="" class=""></label>
                <span data-v-35c3340a="" class="cartTitle">优德电商平台</span>
            </div>
            <ul data-v-35c3340a="">
                <li data-v-35c3340a="" class="listItem">
                    <div data-v-35c3340a="" class="listItemContainer">
                        <div data-v-35c3340a="" class="checkBox">
                            <label data-v-35c3340a="" class=""></label>
                        </div>
                        <span data-v-35c3340a="" class="goodsImg">
                            <img data-v-35c3340a="" src="https://pic.youde.com/7354ada921d74ac4a6f8d2c22ed9f7ac.png"
                                 class="imgSize">
                        </span>
                        <div data-v-35c3340a="" class="goodsRight">
                            <h3 data-v-35c3340a="" class="goodsName">夜宁颗粒</h3>
                            <span data-v-35c3340a="" class="goodsSize">20g*10袋</span>
                            <div data-v-35c3340a="" class="goodsRightBtm">
                                <span data-v-35c3340a="" class="goodsPrice">¥56.00</span>
                                <div data-v-11ebe725="" data-v-35c3340a="">
                                    <div data-v-11ebe725="" class="goodsCount">
                                        <span data-v-11ebe725="" class="de"></span>
                                        <em data-v-11ebe725="">1</em>
                                        <span data-v-11ebe725="" class="add active">

                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div data-v-35c3340a="" class="cartFixedBtm">
            <div data-v-35c3340a="" class="cartCheckAll">
                <label data-v-35c3340a="" class=""></label> 全选
            </div>
            <div data-v-35c3340a="" class="cartTotal">
                <p data-v-35c3340a="">
                    合计：<strong data-v-35c3340a="">0.00</strong>
                </p>
            </div>
            <div data-v-35c3340a="" class="cartFixedRight" :class="{
            bgRed : btnStatus
            }">
                <span data-v-35c3340a="">{{btnStatus ? '删除' : '结算'}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props : ['btnStatus']
    }
</script>
<style scoped>
    .cartTitle {
        /*width: 100%;*/
        height: 0.86rem;
        line-height: 0.86rem;
        font-size: 0.3rem;
        color: #464646;
        border-bottom: 1px solid #efefef;
    }

    .cartWrap .listItemContainer .goodsRight {
        width: 3.6rem !important;
    }

    .cartWrap label {
        background: url('../assets/checkIcon.a368a5c.png') no-repeat !important;
        background-position: -10px 0px !important;
        /*红色部分Y轴-58*/
    }

    .cartFixedBtm .cartFixedRight {
        width:110px !important;
    }

    .cartFixedBtm .cartFixedRight span{
        margin-right:35px;
    }
</style>