<template>
    <div data-v-0f5990e2="">
        <div data-v-0f5990e2="" class="miaosha clearfix">
            <div data-v-0f5990e2="" class="msTitle clearfix">
                <div data-v-0f5990e2="" class="msTitleLeft">
                    <img data-v-0f5990e2="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAC70lEQVRYw9WYsUtbQRzHP3l5aZQW6+vkIBrrUNAh4JY6BKeSwalr6R9geYtQXMVNBBGOCmJAFHWri0N0daiLZjObBhfNkqZtjFGjeR3uIuaZai55Bvsdj3f3+/B7d/f7fc+HpnK23QtEgCFgEOgHuoAO4A+QAQ6BAyAJ7FpCHOvE8GnAfABGgRjwViPGEZAANi0htj2Bytn2e+Az8Al4qZvZOyoAq8CKJcSPhqFytv0FGAMGmoBxKwXMW0J804LK2fYbYAL4+hh4g3KAGWDaEuLno1AKaBKwnwDGLQFMusGMGh9OtAgIFWfCPViVKbWHBE/zy/4lB7Dv7rHbTKlTNtZioEpixlT8aijksffylOloQMW/paxcjN/RuIeMzk46pqYe/OYikeAikah3yQLw0RJiu5KpUR0gAH8o5CUQKv4ogKFqWUxnNoDZ1+clUEWxnG33GsjiqlPLHsxUE0AojoiBrPaaRH783d1eA1U0ZCDbDy2ZPT34AoGnAAIYNJD9kF6iXL/OQyCAfhPZoOllyrXJ22Ix2mI1zkq5THFjg8udHZ3lu0xkx9hUpmrJubzkfGmJUiqlu3yHL2fbv4DXujMBzFCIV+Pj9xOUzVJYXOTm5KSRZX+byJ66IajgyMi9set0mkI8jpPPN7IkQMZENvnvdGcalkUgHK4au0omKa6t4ZRKjQIBHBpI16GfpWgUDFWlHIeLrS3Ol5ebBQI4MJE2SEu+YJAXkYjkKZUorq9ztb/fLExFSRPYRdqgukvNi+FhfO3tOPk8hXic63TaK6AjYNdQRrH+m88wCEaj3Jyekp+d9RIIIGEJcVxpXTaR/cyjCoTDlDMZzubmKGezXgIVFIfsPJVzXa1nps/v52xhAadY9BIIYLXioO+2wytIo/igrvb2oFz2Giil4lMFpaz0PNJdtFIO0jHfWvkq36dszkyLoWbcFr6WGZ1Ger9WSKh4Vfo/3hJccM/n1cUF9rzep1xwz+clrwbck795/gVP0htnpXfHhQAAAABJRU5ErkJggg=="
                                                                 alt="">
                    <span data-v-0f5990e2="">秒杀</span>
                </div>
                <div data-v-0f5990e2="" class="msTitleRight">
                    <div data-v-a4be9d14="" data-v-0f5990e2="" class="count-down">
                        <span data-v-a4be9d14="" class="title">距结束</span>
                        <div data-v-a4be9d14="" class="time-wrapper">
                            <div data-v-a4be9d14="" class="time-box">
                                <span data-v-a4be9d14="" style="width: 18px;">{{tian | buling}} </span>
                            </div>
                            天
                            <div data-v-a4be9d14="" class="time-box">
                                <span data-v-a4be9d14="" style="width: 18px;">{{shi | buling}}</span>:
                            </div>
                            <div data-v-a4be9d14="" class="time-box">
                                <span data-v-a4be9d14="" style="width: 18px;">{{fen | buling}}</span>:
                            </div>
                            <div data-v-a4be9d14="" class="time-box">
                                <span data-v-a4be9d14="" style="width: 18px;">{{miao | buling}}</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-0f5990e2="" class="msCont">
                <div data-v-023ac5c2="" data-v-0f5990e2=""
                     class="swiper-container swiper-container-horizontal swiper-container-autoheight swiper-container-ios">
                    <div class="swiper-wrapper"
                         :style="{width: '2686.67px',
                          height: '79px',
                           transform: `translate3d(${distance}, 0px, 0px)`,
                          'transition-duration': '200ms'}">
                        <div data-v-0f5990e2="" class="slider-item msGoods swiper-slide swiper-slide-duplicate"
                             data-swiper-slide-index="17" style="width: 93.3333px; margin-right: 10px;height:79px;"
                             v-for="(item,idx) in itemList" :key="idx">
                            <div data-v-0f5990e2="" class="msGoods-text">
                                <span data-v-0f5990e2="">￥{{item.newPrice}}</span><br>
                                <span data-v-0f5990e2="" class="deLine">￥{{item.oldPrice}}</span>
                            </div>
                            <div data-v-0f5990e2="" class="killItemImg">
                                <img data-v-0f5990e2="" alt="" class="killImg" v-lazy="item.src"
                                     style="width:64px;height:60px;">
                            </div>
                            <p data-v-0f5990e2="" class="msGoods-title"
                               style="width:93.33px;height:20px;line-height:20px;">{{item.title}}</p></div>

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
                        oldPrice: 45,
                        newPrice: 11,
                        title: "皇菊（优等）",
                        src: 'https://pic.youde.com/2dd558c0e6ea4c47a51a58eb088cbddd.png'
                    },
                    {
                        oldPrice: 18,
                        newPrice: 5.5,
                        title: "苦丁（代用茶）",
                        src: 'https://pic.youde.com/2f943db8474d4f99abbe2ebd85163bbf.png'
                    },
                    {
                        oldPrice: 12,
                        newPrice: 3.5,
                        title: "柠檬片代用茶（袋装）",
                        src: 'https://pic.youde.com/9c029c46f13f48138f084455382f31a6.png'
                    },
                    {
                        oldPrice: 18,
                        newPrice: 5.5,
                        title: "黄山贡菊（代用茶）",
                        src: 'https://pic.youde.com/927b4afb58044a129185829e0f68e978.png'
                    },
                    {
                        oldPrice: 15,
                        newPrice: 3.5,
                        title: "玫瑰花（代用茶）",
                        src: 'https://pic.youde.com/aee4bcd31ad041caba0cf514d4468f09.png'
                    },
                    {
                        oldPrice: 12,
                        newPrice: 4,
                        title: "杭白菊（代用茶）",
                        src: 'https://pic.youde.com/7fad2babe8844fd8b3fdbbf8186801fe.png'
                    },
                    {
                        oldPrice: 15,
                        newPrice: 4.5,
                        title: "胎菊王（代用茶）",
                        src: 'https://pic.youde.com/435dbb4d66934f0aab07ddd72b97c2ef.png'
                    },
                    {
                        oldPrice: 35,
                        newPrice: 12,
                        title: "胖大海（代用茶）",
                        src: 'https://pic.youde.com/d5194e7aa1fb4f23b185f1e1126dfffc.png'
                    },
                    {
                        oldPrice: 25,
                        newPrice: 6,
                        title: "红枣片（代用茶）",
                        src: 'https://pic.youde.com/6588a065b44c4947bade76948b197aa0.png'
                    },
                    {
                        oldPrice: 20,
                        newPrice: 5.5,
                        title: "栀子（代用茶）",
                        src: 'https://pic.youde.com/a6c16cf7ee364297b70a8158fb5698ff.png'
                    },
                    {
                        oldPrice: 26,
                        newPrice: 7.2,
                        title: "柠檬片代用茶（罐装）",
                        src: 'https://pic.youde.com/4bfe6c7d9b63418e8c7bf1f58ddf016d.png'
                    },
                    {
                        oldPrice: 48,
                        newPrice: 16,
                        title: "胖大海（代用茶）",
                        src: 'https://pic.youde.com/dfeec7bd019843f38479cd1d12fda5be.png'
                    },
                    {
                        oldPrice: 15,
                        newPrice: 3.5,
                        title: "玫瑰花（代用茶）",
                        src: 'https://pic.youde.com/aee4bcd31ad041caba0cf514d4468f09.png'
                    },
                    {
                        oldPrice: 12,
                        newPrice: 4,
                        title: "杭白菊（代用茶）",
                        src: 'https://pic.youde.com/7fad2babe8844fd8b3fdbbf8186801fe.png'
                    },
                    {
                        oldPrice: 15,
                        newPrice: 4.5,
                        title: "胎菊王（代用茶）",
                        src: 'https://pic.youde.com/435dbb4d66934f0aab07ddd72b97c2ef.png'
                    },
                    {
                        oldPrice: 35,
                        newPrice: 12,
                        title: "胖大海（代用茶）",
                        src: 'https://pic.youde.com/d5194e7aa1fb4f23b185f1e1126dfffc.png'
                    },
                    {
                        oldPrice: 25,
                        newPrice: 6,
                        title: "红枣片（代用茶）",
                        src: 'https://pic.youde.com/6588a065b44c4947bade76948b197aa0.png'
                    },
                    {
                        oldPrice: 20,
                        newPrice: 5.5,
                        title: "栀子（代用茶）",
                        src: 'https://pic.youde.com/a6c16cf7ee364297b70a8158fb5698ff.png'
                    },
                    {
                        oldPrice: 26,
                        newPrice: 7.2,
                        title: "柠檬片代用茶（罐装）",
                        src: 'https://pic.youde.com/4bfe6c7d9b63418e8c7bf1f58ddf016d.png'
                    },
                    {
                        oldPrice: 48,
                        newPrice: 16,
                        title: "胖大海（代用茶）",
                        src: 'https://pic.youde.com/dfeec7bd019843f38479cd1d12fda5be.png'
                    },
                    {
                        oldPrice: 45,
                        newPrice: 11,
                        title: "皇菊（优等）",
                        src: 'https://pic.youde.com/2dd558c0e6ea4c47a51a58eb088cbddd.png'
                    },
                    {
                        oldPrice: 18,
                        newPrice: 5.5,
                        title: "苦丁（代用茶）",
                        src: 'https://pic.youde.com/2f943db8474d4f99abbe2ebd85163bbf.png'
                    },
                    {
                        oldPrice: 12,
                        newPrice: 3.5,
                        title: "柠檬片代用茶（袋装）",
                        src: 'https://pic.youde.com/9c029c46f13f48138f084455382f31a6.png'
                    }
                ],
                cur: 0,
                now : 0
            }
        },
        computed: {
            distance() {
                return this.cur * (-1) * 103.3333 + 'px';
            },
            countdown() {
                let d = new Date('2019/3/25');
                return (d.getTime() - this.now) / 1000;
            },
            tian() {
                return parseInt(this.countdown / 60 / 60 / 24);
            },
            shi() {
                return parseInt((this.countdown / 60 / 60) % 24);
            },
            fen() {
                return parseInt((this.countdown / 60) % 60);
            },
            miao() {
                return parseInt(this.countdown % 60);
            }
        },
        methods: {
            setInt() {
                this.timer = setInterval(() => {
                    this.cur++;
                    this.panduan();
                }, 2000)
            },
            panduan() {
                if (this.cur > 20) {
                    this.cur = 1;
                }
            },
            changeNow(){
                this.timer2 = setInterval(()=>{
                    this.now = Date.now();
                },1000)
            }
        },
        filters:{
            //过滤器 小于10的补零
            buling(value){
                if(value < 10){
                   return value = '0' + value;
                }else{
                    return value;
                }
            }
        },
        mounted() {
            this.setInt();
            this.changeNow();
        },
        destroyed(){
            clearInterval(this.timer);
            clearInterval(this.timer2);
        }
    }
</script>
<style scoped>
    .msGoods-text span {
        text-align: left;
        color: #fff;
    }
</style>