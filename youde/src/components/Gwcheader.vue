<template>
    <header data-v-916e8b0c="" data-v-35c3340a="" class="gHeader clearfix">
        <div data-v-916e8b0c="" class="search-box" style="color: rgb(88, 89, 89);">
            <h2 data-v-916e8b0c="">购物车</h2>
        </div>
        <div data-v-916e8b0c="" class="editContainer">
            <span data-v-916e8b0c="" class="editBtn" @click="change"></span>
        </div>
    </header>
</template>
<script>
    export default {
        props : ['changeBtn','btnStatus'],
        methods : {
            change(e){
                if(!this.btnStatus){
                    e.target.innerHTML = '完成';
                    e.target.classList.remove('editBtn');
                }else{
                    e.target.innerHTML = '';
                    e.target.classList.add('editBtn');
                }
                this.changeBtn();
            }
        }
    }
</script>
<style scoped>
    .editBtn{
        display:block;
        width:20px;
        height:20px;
        background:url('../assets/editIcon.5aa145e.png') no-repeat left center;
        background-size:20px 20px;
    }
</style>
