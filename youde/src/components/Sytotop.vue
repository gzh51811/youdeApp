<template>
    <div data-v-6b1dde78="" data-v-0f5990e2="" class="go-top-wrapper" v-show="flag" @click="toTop">
        <i data-v-6b1dde78="" class="icon iconfont icon-top"></i>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                flag: false
            }
        },
        methods: {
            //随便写个动画  低配的
            toTop() {
                let distance = -(document.documentElement.scrollTop - 0) / 4;
                this.timer = setInterval(() => {
                    document.documentElement.scrollBy(0, distance);
                }, 200);
                setTimeout(() => {
                    clearInterval(this.timer);
                }, 1000);
            },
            handleScroll() {
                if (document.documentElement.scrollTop > 50) {
                    this.flag = true;
                } else {
                    this.flag = false;
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll, true);
        }
    }
</script>
<style scoped>
    .go-top-wrapper {
        display: block;
    }

    i {
        position: absolute;
        left: 10px;
        top: 10px;
    }
</style>