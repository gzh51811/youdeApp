<template>
        <div data-v-0f5990e2="">
            <div data-v-0f5990e2="" class="haibao-wrapper">
                <div data-v-0f5990e2="" class="item" v-for="(img,idx) in imgList" :key="idx">
                    <img data-v-0f5990e2="" :src="img.src">
                </div>
            </div>
            <div data-v-0f5990e2="" class="line"></div>
        </div>
</template>
<script>
    export default {
        data(){
            return {
                imgList : [
                    {
                        src : 'https://pic.youde.com/9edcaff0a9a549f68716cf1ce94c8e81.jpg'
                    },
                    {
                        src : 'https://pic.youde.com/d5c7aa3291cc4769979e93eb6e1e1b67.png'
                    },
                    {
                        src : 'https://pic.youde.com/1d41f0dba52743e9a977bbfbd35a855b.png'
                    }
                ]
            }
        }
    }
</script>
<style scoped>

</style>