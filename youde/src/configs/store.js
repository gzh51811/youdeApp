import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        // 详情页指定动态组件名
        compName : 'Dtgoods',

        //详情页数据
        detailInfo : '',

       
        dataA : '',

        dataB : '',

        code : 1,

        top : "100%",


    },
    getters:{

         //遮罩数据
         code(state){
            return state.code;
         },

         top(state){
            return state.top;
         },


        zhezao(state){
            if(state.code == 1){
                return  {
                    postPromotionName : state.detailInfo.postPromotionName
                };
            }else if (state.code == 2){
                return {
                    //图片
                    thumbnail : state.detailInfo.thumbnail,
                    //库存
                    stock : state.detailInfo.specValues[0].stock,
                    //规格
                    specValue : state.detailInfo.specValues[0].specValue,
                    //销售价格
                    xsPrice : state.detailInfo.specValues[0].xsPrice
                };
            }
        },

        //详情页所有数据
        detailGoods(state){
            return state.detailInfo;
        },

        //详情页图片数组
        urls(state){
            if(state.detailInfo){
                var imgSrc = state.detailInfo.pictures.map(item => {
                    return item.pictureUrl;
                });
                return imgSrc;
            }
        },

        //详情页评论数据
        commonds(state){
            if(state.detailInfo){
                return state.detailInfo.spComments.map(item => {
                    return {
                            createTime : item.createTime,
                            commentAccount : item.commentAccount,
                            commentContent : item.commentContent,
                            descgrade : item.descgrade
                        }
                })
            }

        }

    },
    mutations:{

        // 详情页动态组件
        changeCompName(state,payload){
            this.state.compName = payload; 
        },

        //更新详情页数据
        updateDetailInfo(state,payload){
            this.state.detailInfo = payload;
        },

        //更新遮罩数据
        updateCode(state,payload){
            if(payload.code){

                this.state.code = payload.code;
                this.state.top = payload.top;

            }
        }

    },
    actions:{

    }
});

export default store;