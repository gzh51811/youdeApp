<template>
    <div class="all" ref="all" :style="{top : top}">

        <div class="ztop" ref='ztop'></div>
        <div class="zbottom" ref='zbottom'>
            <div v-if="code == 1">
                <div style="line-height:60px;font-size:24px;text-align:center;padding-right:8%;border-bottom:1px solid #ccc;">
                    促销活动
                    <i class="icon iconfont icon-2guanbi" style="float:right"  @click.stop='close' ></i>
                </div>
                <div style="line-height:46px;height:46px;font-size:15px;border-bottom:1px solid #ccc">
                     {{contents.postPromotionName}}
                     <span style="display:inline-block;height:24px;
                            border:1px solid #ccc;line-height:24px;
                            float:left;padding:0 10px;border-radius:3px;
                            background:#ccc;color:white;margin:10px;
                            ">
                         {{contents.postPromotionName}}
                     </span>
                </div>
            </div>
            <div  v-if="code == 2" style="padding-top:10px;" class="xl">
                 <div style="height : 90px; ">
                     <img :src="contents.thumbnail" style="float: left;height:90px;">
                     <div style="float : left">
                        <p>￥{{(contents.xsPrice/100).toFixed(2)}}</p><br>
                        <p>库存{{contents.stock}}件</p>

                        <div>
                            <p style="float : left;">购物数量：</p>                            
                            <ul style="display:flex; float:left;height:24px; line-height:24px;">
                                <li @click="sub" :class="{disable : num<=0}"><i class="icon iconfont icon-jian"></i></li>
                                <li>{{num}}</li>
                                <li @click="add" ref='add' :class="{disable : num>=contents.stock}"><i class="icon iconfont icon-jia"></i></li>
                            </ul>
                        </div>

                     </div>

                     <i style="float:right;padding-right:10px;" 
                     class="icon iconfont icon-2guanbi"
                     @click.stop='close'
                     ></i>
                 </div>

                <p style="padding-left:8px;">规格</p><br>
                <p style="padding:4px 10px;border:1px solid #ccc;
                margin-left:10px;"
                >{{contents.specValue}}</p><br><br>

                <button style="margin-left:2.4rem;width:4rem;text-align:center;
                        border-radius:6px;background:#58bc58;color:white;"
                        @click='check'>提交</button>
            </div>
        </div>

    </div>
</template>
<script>
import qs from 'qs';
import { constants } from 'fs';

export default {
    data(){
        return {
            num : 0,
            disabled : false
        }
    },

    computed : {
        //遮罩类型
        code(){
           return this.$store.getters.code; 
        },
        //遮罩出现或消失
        top(){
            return this.$store.getters.top;
        },

        contents(){
            return this.$store.getters.zhezao;
        }
    },
    

    methods : {
        check(){
            if(this.num >=1){
                this.$axios.post('http://localhost:3000/cart',
                        qs.stringify({
                        nums : this.num,
                        username :localStorage.getItem('username'),
                        goodsId : this.$route.query.goodsId
                        })
                ).then(res => {
            this.close();      
            this.$store.dispatch('setgoodslist',res.data);

                });
            }
          
           
        },

        close(){
            this.$store.commit('updateCode',{
                    code : 2,
                    top : "100%"
            });
        },

        add(){
            if(this.contents){
                if(this.num >= this.contents.stock){
                    return;
                }else{
                    this.num++;
                }
            }
        },

        sub(){
            if(this.contents){
                if(this.num <= 0){
                    return;
                }else{
                    this.num--;
                }
            }
        }

    },

    mounted(){
        this.$refs.all.style.height = innerHeight + "px";
        this.$refs.ztop.style.height = innerHeight/2 + "px";
        this.$refs.zbottom.style.height = innerHeight/2 + "px";

        //阻止拖动
        this.$refs.all.ontouchmove = function(e){
            e.preventDefault();
        };

        //阻止鼠标滚轮事件
        window.onmousewheel = document.onmousewheel = function(e){
            e.preventDefault();
        };



    }
}
</script>


<style lang="scss" scoped>
li.disable{
    background: #ccc;
}


.xl{
    p{
        margin: 4px;
    }
}

ul{
    display: flex;
    width: 2.4rem;
    text-align: center;
    li{
        flex: 1;
        border: 1px solid #ccc;
    }
    li:nth-child(2){
        flex: 2;
    }
}

div.all{
    transition: top 1.5s;
    width: 100%;
    position: fixed;
    top: 100%;
    z-index:9999;
    div.ztop{
        background: rgb(79, 79, 218);
        opacity: .2;
        
    }


    div.zbottom{
        position: relative;
        background: white;
        z-index: 9999;

        
    }
}

</style>

