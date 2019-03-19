<template>
    <div data-v-0f5990e2="" class="menu">
        <ul data-v-0f5990e2="" class="ind_navi clearfix">
            <li data-v-0f5990e2="" v-for="(m,idx) in menuList" :key="idx" @click="gotolist">
                <a data-v-0f5990e2="">
                    <i data-v-0f5990e2="">
                        <img data-v-0f5990e2="" :src="m.src">
                    </i>
                    {{m.title}}
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                menuList : [
                    {
                        href : '',
                        src : 'https://pic.youde.com/e096fdd60f92482191658bc13505aabd.png',
                        title : '全球购'
                    },
                    {
                        href : '',
                        src : 'https://pic.youde.com/04a14c6f740d481e8ed2bce76b2a58af.png',
                        title : '医疗器械'
                    },
                    {
                        href : '',
                        src : 'https://pic.youde.com/eb04291227934248b323986dc0ead932.png',
                        title : '明星产品'
                    },
                    {
                        href : '',
                        src : 'https://pic.youde.com/071e4f76feab4d85a56f670555e81694.png',
                        title : '家用理疗'
                    },
                    {
                        href : '',
                        src : 'https://pic.youde.com/01f777d2ae8c4d269b4bffa10d16395d.png',
                        title : '家庭常备'
                    },
                    {
                        href : '',
                        src : 'https://pic.youde.com/63fc4bc8dc214ed1acc84d2488d4bb13.png',
                        title : 'VIP专区'
                    },
                    {
                        href : '',
                        src : 'https://pic.youde.com/2fedb534e8a742659aa5c9e2bc61d45c.png',
                        title : '秒杀专场'
                    },
                    {
                        href : '',
                        src : 'https://pic.youde.com/5777c44fada54908a658d0be882d46d5.png',
                        title : '积分商城'
                    }
                ]
            }
        },
        methods:{
            gotolist(){
                this.$router.push({name:"list"});
            }
        }
    }
</script>
<style scoped>

</style>