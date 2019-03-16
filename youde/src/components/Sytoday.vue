<template>
    <div data-v-0f5990e2="" class="jinrituangou">
        <div data-v-0f5990e2="" class="jr-title">
            <span data-v-0f5990e2="" class="jr-title1">优德医药</span>
            <span data-v-0f5990e2="" class="jr-title2">今日团购</span>
        </div>
        <div data-v-0f5990e2="" class="jr-link">
            <div data-v-023ac5c2="" data-v-0f5990e2=""
                 class="swiper-container swiper-container-horizontal swiper-container-autoheight swiper-container-ios" style="width:200px;">
                <div class="swiper-wrapper"
                     :style="{width: '800px',
                     transform: `translate3d(${distance}, 0px, 0px)`,
                      'transition-duration': '0ms',
                       height: '62px'}">
                    <div data-v-0f5990e2="" class="swiper-slide swiper-slide-next" style="width: 200px;"
                         v-for="(item,idx) in itemList" :key="idx">
                        <div data-v-0f5990e2="" class="jrSwiperList">
                            <div data-v-0f5990e2="" class="jrSwiperListImg">
                                <img data-v-0f5990e2="" :src="item.src" alt="">
                            </div>
                            <div data-v-0f5990e2="" class="jrSwiperListText">
                                <span data-v-0f5990e2="" class="jsSwiperP">{{item.title}}</span>
                                <span data-v-0f5990e2="" class="jsSwiperPrace">￥{{item.price}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                itemList: [
                    {
                        src: 'https://pic.youde.com/201c11eac36b4805a99ebaad61ffaa26.jpg',
                        title: '创口贴(你是我心中的那首歌 蓝色)',
                        price: '1.00'
                    },
                    {
                        src: 'https://pic.youde.com/5db7bc70efbe492398b2734ef78305ff.png',
                        title: '血糖试纸(葡萄糖氧化酶法)',
                        price: '88.00'
                    },
                    {
                        src: 'https://pic.youde.com/583cf415f69e45ecb481f72186367f97.png',
                        title: '血糖仪1台+血糖试纸1盒（50片）+采血针1盒（50支）',
                        price: '98.00'
                    }, {
                        src: 'https://pic.youde.com/201c11eac36b4805a99ebaad61ffaa26.jpg',
                        title: '创口贴(你是我心中的那首歌 蓝色)',
                        price: '1.00'
                    }
                ],
                cur: 0
            }
        },
        computed:{
            getWidth(){
                return document.documentElement.clientWidth;
            },
            distance(){
                return this.cur * (-1) * 200 + 'px';
            }
        },
        methods: {
            setInt() {
                this.timer = setInterval(() => {
                    this.cur++;
                    if (this.cur > 3) {
                        this.cur = 1;
                    }
                }, 2000)
            }
        },
        mounted(){
            this.setInt();
        },
        destroyed(){
            clearInterval(this.timer);
        }
    }
</script>
<style scoped>
    .jr-title1,.jr-title2{
        margin-right:10px !important;
    }
</style>