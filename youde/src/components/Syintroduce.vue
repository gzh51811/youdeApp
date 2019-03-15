<template>
    <div data-v-0f5990e2="" class="recommend">
        <div data-v-0f5990e2="" class="recommendTitle">
            <img data-v-0f5990e2=""
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACCElEQVRYR82X4TEEQRCF30XARYAMiMDJgAgQgROBEwEiQARkgAjIABkQAfVdbV/tjt3p7i1V9J+tu+3pftPz5nXvRH9sk2T+bUmHknhis+b52DxfJN1K4hmyKIC5pBNJm6Go0pukS0lXnr8HYF/SRSJxmQ8gp5Luh4DUACwknXk7CL4n1nmf7xCAm+asg/FDbsQ8Lj37APzmzst8HAfcWFkJgDO/C+1nvNNBmxMlAEizkYj91PjuJtaQY8v82wC4ajA+Y3uN80NmUcMFOKE2gDG7NyHKrl1VwQCgbM9jdyHpSNJ1cv0OimkAYCZKF7X3HnHKVgGVnBsAtLxGJBKSAI3/kMT58bttyDSVWG96Bb9rhIbAMw8AySBauLkUoDhaCAqo0joAviq1Hwuilpx0xJ1aBWoAzDlTCS85MT+pjHcE7cJEKxFJTtwQB3rPzbkqHqFteQdA9Boy7cD0mkU7Ke15kRWi5SIHQLSbdoSImBEhgYg2/3G1TLwQFTiCIc9eb1gJWbYZTZskJKZ52f0muc2A/PfqVInB5Ecz8qrAtbHy9gmLXVcbv9YGQHRk/N8NJICOksipcu9rdySzVdGrlAHRe4VrY/mYCWkI0I+dm2PkwwR2Z+bENggIx0ZGfZi0A6F+cCMKhMT4L69azbwKlGtpNICxj1MbYmw6Zm4gaXh+yALwNpR+/w0xW3Ah/eWmtQAAAABJRU5ErkJggg==">
            <span data-v-0f5990e2="" style="margin-right:200px;">为您推荐</span>
        </div>
        <div data-v-0f5990e2="" class="recommendCont clearfix">
            <div data-v-0f5990e2="" class="recommendList" v-for="(item,idx) in itemList" :key="idx" style="height:200px;overflow:hidden;">
                <div data-v-0f5990e2="" class="inner">
                    <div data-v-0f5990e2="" class="recommendListImg">
                        <img data-v-0f5990e2="" :src="item.src" style="width:106px;height:106px;"
                             class="recommendImgSize">
                    </div>
                    <p data-v-0f5990e2="" class="recommendListTitle">{{item.title}}</p>
                    <p data-v-0f5990e2="" class="recommendListPrace" >
                        <span data-v-0f5990e2="">
                        ￥{{item.price}}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                itemList : [
                    {
                        title : '虾青素 雨生红球藻复合膳食食品（压片糖）',
                        src : 'https://pic.youde.com/a94e23ba1c714b54bfe7949901486289.png',
                        price : '498.00'
                    },
                    {
                        title : '解郁丸',
                        src : 'https://pic.youde.com/7d79979212ba4772904fed7a4cb78d05.png',
                        price : '59.00'
                    },
                    {
                        title : '全自动臂式电子血压计',
                        src : 'https://pic.youde.com/5646db3e2ae546cdbdba249480a23900.png',
                        price : '258.00'
                    },
                    {
                        title : '全自动臂式电子血压计',
                        src : 'https://pic.youde.com/4b23cf370f85448a99eacd6b4582f95e.png',
                        price : '198.00'
                    },
                    {
                        title : '瑞普斯 美康牌力健胶囊 30粒',
                        src : 'https://pic.youde.com/5fa4da84b57c444c97cbbd0925c76ad5.png',
                        price : '238.00'
                    },
                    {
                        title : '瑞普斯牌果蔬复合片',
                        src : 'https://pic.youde.com/6e4624a053ce44fb9c5286ea76858b54.jpg',
                        price : '218.00'
                    },
                    {
                        title : '天门冬氨酸钙',
                        src : 'https://pic.youde.com/93e14fead18b44f3824d968cb62f32f7.png',
                        price : '398.00'
                    },
                    {
                        title : '腰条营养素固体饮料',
                        src : 'https://pic.youde.com/8ddcba75fed040ccac7726d45c5bacbd.png',
                        price : '268.00'
                    },
                    {
                        title : '瑞普斯牌番茄青果复合片',
                        src : 'https://pic.youde.com/20be1f07d22849ccb7c8194260b717c8.png',
                        price : '498.00'
                    },
                    {
                        title : '瑞普斯牌蛋白粉（固体饮料）',
                        src : 'https://pic.youde.com/65eb152056554134ae55f8e2eb2bcb24.jpg',
                        price : '268.00'
                    },
                    {
                        title : '瑞普斯 大阔海牌液体钙胶囊 100粒',
                        src : 'https://pic.youde.com/27c644d588934aaf97a624bd6a96cd35.jpg',
                        price : '178.00'
                    },
                    {
                        title : '瑞普斯牌大豆卵磷脂',
                        src : 'https://pic.youde.com/6595bae151d34475a59aacf811c9ce91.jpg',
                        price : '188.00'
                    },
                    {
                        title : '阿胶糕(原味)',
                        src : 'https://pic.youde.com/0f25b1185036431aab7c2b3dec871212.png',
                        price : '198.00'
                    },
                    {
                        title : '阿胶固元糕（玫瑰型）',
                        src : 'https://pic.youde.com/cbf35810112047889581b8debde89358.png',
                        price : '99.00'
                    },
                    {
                        title : '阿胶固元糕（红枣枸杞型）',
                        src : 'https://pic.youde.com/87001506d16b43969818b87780428de9.jpg',
                        price : '99.00'
                    },
                    {
                        title : '阿胶速溶粉',
                        src : 'https://pic.youde.com/3fcce9b5810942f2907d7ac3428022b2.png',
                        price : '168.00'
                    },
                    {
                        title : '阿胶糕（玫瑰型）',
                        src : 'https://pic.youde.com/ff46ec402db243c99148774f747682ce.jpg',
                        price : '168.00'
                    },
                    {
                        title : '血糖仪1台+血糖试纸1盒（50片）+采血针1盒（50支）',
                        src : 'https://pic.youde.com/583cf415f69e45ecb481f72186367f97.png',
                        price : '98.00'
                    },
                    {
                        title : '童宝乐片',
                        src : 'https://pic.youde.com/95206c2b2c1e4b398c2cb93808335492.png',
                        price : '48.00'
                    },
                    {
                        title : '夜宁颗粒',
                        src : 'https://pic.youde.com/7354ada921d74ac4a6f8d2c22ed9f7ac.png',
                        price : '56.00'
                    },
                    {
                        title : '优等 水解胶原蛋白粉 德国进口 5g*30袋*6盒',
                        src : 'https://pic.youde.com/82147b9f3edb49e7b2491cdcc89a83c0.png',
                        price : '1698.00'
                    },
                    {
                        title : '阿胶益寿晶',
                        src : 'https://pic.youde.com/0efc63efa1be456b9417235475c77b49.jpg',
                        price : '98.00'
                    },
                    {
                        title : '阿胶',
                        src : 'https://pic.youde.com/198d0ef135114aa3a0330fe92ec8a32a.png',
                        price : '1350.00'
                    },
                    {
                        title : '精杞参胶囊',
                        src : 'https://pic.youde.com/b4eaa572ca334916b1c780370e333972.png',
                        price : '58.00'
                    }
                ]
            }
        }
    }
</script>
<style scoped>

</style>