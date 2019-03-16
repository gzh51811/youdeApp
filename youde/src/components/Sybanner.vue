<template>
    <div data-v-0f5990e2="" class="slider-wrapper">
        <div data-v-023ac5c2="" data-v-0f5990e2=""
             class="swiper-container swiper-container-horizontal swiper-container-autoheight swiper-container-ios"
             @touchstart="clearInt" @touchend="setInt">
            <v-touch v-on:swipeleft="left" v-on:swiperight="right">
                <div class="swiper-wrapper"
                     :style="{width: `${bigBox}px`,
                      transform: `translate3d(${distance}, 0px, 0px)`,
                       height: '181px',
                        'transition-duration': '200ms'}">
                    <div data-v-0f5990e2="" class="swiper-slide" :style="{width:`${screenWidth}px`}" v-for="(b,idx) in bannerList"
                         :key="idx">
                        <a data-v-0f5990e2="" href="https://special.youde.com/20190313/e13ed381.html">
                            <img data-v-0f5990e2="" :style="{width:screenWidth,height:'175px'}"
                                 :src="b.src">
                        </a>
                    </div>
                </div>
            </v-touch>
            <div data-v-023ac5c2="" class="swiper-pagination swiper-pagination-bullets">
                <span class="swiper-pagination-bullet" :class="{
                'swiper-pagination-bullet-active' : cur == idx
                }" v-for="(cir,idx) in 6"></span>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                bannerList: [
                    {
                        url: '',
                        src: 'https://pic.youde.com/d648d497a195431792da8f742b5deb6e.png'
                    },
                    {
                        url: '',
                        src: 'https://pic.youde.com/fad04a0e83d34f4dbcdaf569aa90bdd9.png'
                    },
                    {
                        url: '',
                        src: 'https://pic.youde.com/7f27c165d27a49779c804179a638d17c.png'
                    },
                    {
                        url: '',
                        src: 'https://pic.youde.com/7f1c6cf5076a4d0f97ec2ac9dbceb677.jpg'
                    },
                    {
                        url: '',
                        src: 'https://pic.youde.com/2cf774971d6a4d2383f84eb249a6e54f.png'
                    },
                    {
                        url: '',
                        src: 'https://pic.youde.com/ecaf29a68d104c11a374426b7af7fcda.png'
                    }
                ],
                cur: 5,
                //显示第几张banner图的下标
                curIdx: 0
            }
        },
        computed: {
            distance() {
                return this.curIdx * this.screenWidth * (-1) + 'px'
            },
            screenWidth(){
                return document.documentElement.clientWidth;
            },
            bigBox(){
                return this.screenWidth * this.bannerList.length;
            }
        },
        methods: {
            //轮播图左滑
            left() {
                this.curIdx++;
                if (this.curIdx > 5) {
                    this.curIdx = 0;
                }
                this.cur--;
                if (this.cur < 0) {
                    this.cur = 5;
                }
            },
            //轮播图右滑
            right() {
                this.cur++;
                if (this.cur > 5) {
                    this.cur = 0;
                }
                this.curIdx--;
                if (this.curIdx < 0) {
                    this.curIdx = 5;
                }
            },
            //封装轮播图定时器
            bannerInterval() {
                this.bannerTimer = setInterval(() => {
                    this.curIdx++;
                    if (this.curIdx > 5) {
                        this.curIdx = 0;
                    }
                    this.cur--;
                    if (this.cur < 0) {
                        this.cur = 5;
                    }
                }, 2000)
            },
            //手指触摸清除定时器
            clearInt() {
                clearInterval(this.bannerTimer);
            },
            //触摸结束设置定时器
            setInt() {
                this.bannerInterval();
            },
            getWidth() {
               console.log(document.documentElement.clientWidth)
            }
        },
        mounted() {
            //开启定时器
            this.bannerInterval();
            this.getWidth();
        },
        destroyed() {
            //销毁时 清除定时器
            clearInterval(this.bannerTimer);
        }
    }
</script>
<style scoped>
    .slider-wrapper .swiper-container .swiper-pagination {
        width: 96px;
        height: 8px;
        left: 50%;
        margin-left: -48px;
    }
</style>