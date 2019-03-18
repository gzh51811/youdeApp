<template>



    <div class="allDt" v-if='dates'>

        <el-carousel :interval="2000" >
            <el-carousel-item v-for="item in dates.pictures" :key="item.id">
                <h3>
                    <img :src="item.pictureUrl" alt="" style="height:100%;width:100%;">
                </h3>
            </el-carousel-item>
        </el-carousel>
        <p class="title">{{dates.title}}</p>

        <p class="info">{{dates.recommendSpeech}}</p>

        <div>
            <p class="price">
                价格
                <span class="sale_nums">已售：{{dates.specValues[0].virtualSaleNum}}</span>
                <span >
                    <span class="sale-price">{{(dates.minPrice/100).toFixed(2)}}</span>
                </span>
            </p>
        </div>

        <div class="pinfo">
            <p >生产厂家 : {{dates.productName}}</p>
        </div>

        <div class="pinfo">
            <p >批准文号</p>
        </div>

        <div class="pinfo cuxiao" >
            <p >
                促销 
                <span class="cuxiao">{{dates.postPromotionName}}</span>
            </p>
        </div>

        <div class="pinfo">
            <p >选择规格 {{dates.specValues[0].specValue}}</p>
        </div>

        <div class="netShop">
            <img src="../assets/logo_d.png" alt="">
            <p class="netCenter">优德电商平台</p>

            <div class="netRight">
                <p>收藏店铺</p>
                <p>进入店铺</p>
            </div>
        </div>

        <dt-com></dt-com>
        
        <div class="cl">
            <dt-zhezao :contents='zezhaoCon1'></dt-zhezao>
        </div>



    </div>
</template>

<script>
import DtCom from './DtCom.vue';
import DtZhezao from './DtZhezao.vue'

export default {

    data(){
        return {
            active1 : false,
            active2 : false,

            zezhaoCon1 : '123',
            zezhaoCon2 : '234'

        }
    },

    computed : {
        dates(){
            return this.$store.state.detailInfo;
        }
    },

    components : {
        DtCom,
        DtZhezao
    },


    methods : {
        
    }

}
</script>


<style lang="scss" scoped>
    *{
        padding: 0;
        margin: 0;
    }


    p{
        padding-left: 2.5%;
        width: 97.5%;
        font-size: .4rem;
    }

    p.title{
        height: 1rem;
        line-height: 1rem;
        font-size: .45rem;
        color: #4d525b;
        border-bottom: 2px solid #f7f7f7;
    }

    p.info{
        height: 1.375rem;
        line-height: 1.375rem;
        color: #80838a;
        p{
            padding: 10px;
        }
        
    }
    span.cuxiao{
        display: inline-block;
        width: 2.5rem;
        background: #79bebe;
        margin-right: 6rem;
        height: 70%;
        margin-top: 5px;
        line-height: 170%;
        text-align: center;
        color: #fff;
        border-radius: 4px;
    }

    p.price{
        width: 92.5%;
        margin-left: 2.5%;
        margin-bottom: 2.5%;
        height: 1.375rem;
        line-height: 1.375rem;
        background: #f2f5f9;
        color: #706d6e;
        span{
            .sale-price{
                font-size: .625rem;
                font-weight: bold;
                color: #ff5d5d;
            }
            .sale-price::before{
                content: '￥';
                font-size: .4rem;
            }
        }       
        span.sale_nums{
            color: #6c696a;
            margin-left: 2.7rem;
            margin-right: 10px;
        }

    }

    div.pinfo {
        background: #f0f1f3;
        p{
            margin-top: 5px;
            color: #9e9e9e;
            height: 1rem;
            background: white;
            line-height: 1rem;
        }
    }

    div.netShop{
        border-top: 10px solid #f0f1f3;
        display: flex;
        width: 95%;
        padding: 2.5%;
        img{
            width: 2.55rem;
            height: 2.55rem;            
        }

        .netCenter{
            flex: 5;
            font-size: .38rem;
            color: black;


        }

        .netRight{
            flex: 2;
            padding-right: 10px;
            text-align: center;
            p:nth-child(1){
                border: 1px solid #ccc;
                font-size: .4rem;
                margin-top:.375rem; 
                padding: 6px;
                color : #666;
            }
            p:nth-child(2){
                border: 1px solid black;
                font-size: .4rem;
                margin-top:5px;
                padding: 6px;
                color: #eb2517;
            }
        }
    }

    div.cl{
        position: fixed;
        z-index: 999;
    }

    



    //elementUi样式
    .el-carousel{
        height: 9.125rem;
        background: #475669;
    }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 8.125rem;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>


