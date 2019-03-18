<template>

    <div>
        <ul>
            <li v-for="nav in navs" :key="nav.text">
                <i v-if="nav.hasIco">{{nav.ico}}</i>
                {{nav.text}}
            </li>
        </ul>
    </div>
    
</template>

<script>
export default {
    
    data(){
        return {
            navs : [
            {
                text : '电话',
                path : '/phone',
                hasIco : true,
                ico : '电话'
            },
            {
                text : '购物车',
                path : '/cart',
                hasIco : true,
                ico : '购物车'
            },
            {
                text : '立即购买',
                path : '/buy',
                hasIco : false,
            },
            {
                text : '加入购物车',
                path : '/cart',
                hasIco : false
            },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

div{
    position: fixed;
    bottom: 0;
    height: 1.3rem;
    width: 100%;
    ul{
        font-size: 0px;
        height: 1.3rem;
        background: #f5f5f5; 
        display: flex;
        text-align: center;
        li{
            height: 100%;
            border: none;
            line-height: 1.3rem;
        }
        li:nth-child(1),li:nth-child(2){
            flex : 1;
            font-size: .25rem;
        }
        li:nth-child(3),li:nth-child(4){
            flex : 2;
            font-size: .35rem;
            color: white;
        }
        li:nth-child(3){
            background: #4792d1;
        }
        li:nth-child(4){
            background: #ff5d5d;
        }
    }
}
</style>


