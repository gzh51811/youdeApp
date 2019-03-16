<template>
  <div class="scroll-list">
    <div class="list-rigth">
      <p class="names">花茶</p>
      <div class="item-list clearfix">
        <div class="item-goods">
          <img src>
          <p>花茶</p>
        </div>
        <div class="item-goods">
          <img src>
          <p>花茶</p>
        </div>
        <div class="item-goods">
          <img src>
          <p>花茶</p>
        </div>
        <div class="item-goods">
          <img src>
          <p>花茶</p>
        </div>
      </div>
       <p class="names">红茶</p>
      <div class="item-list clearfix">
        <div class="item-goods">
          <img src>
          <p>花茶</p>
        </div>
        <div class="item-goods">
          <img src>
          <p>花茶</p>
        </div>
        <div class="item-goods">
          <img src>
          <p>花茶</p>
        </div>
        <div class="item-goods">
          <img src>
          <p>花茶</p>
        </div>
      </div>
       <p class="names">黑茶</p>
      <div class="item-list clearfix">
        <div class="item-goods">
          <img src>
          <p>花茶</p>
        </div>
        <div class="item-goods">
          <img src>
          <p>花茶</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
p {
  color: black;
}
.scroll-list {
  position: absolute;
  top: 0.96rem;
  bottom: 50px;
  left: 2.2rem;
  right: 10px;
  padding-left: 10px;
}
.names {
  font-size: 0.3rem;
  height: 0.4rem;
  line-height: 0.4rem;
  margin: 0.2rem 0;
  display: flex;
}
.names:before {
  content: " ";
  display: inline-block;
  width: 0.07rem;
  height: 0.34rem;
  margin-right: 0.16rem;
  border-radius: 0.07rem;
  background-color: #89c1e1;
}
.item-list {
  border: 1px solid #eee;
  border-radius: 0.14rem;
  margin-bottom: 50px;
}
.item-goods {
  width: 50%;
  float: left;
  box-sizing: border-box;
  text-align: center;
  padding: 0.2rem 0;
}
.item-goods img {
  width: 1.8rem;
  height: 1.8rem;
  text-align: center;
}
.item-goods p {
  font-size: 12px;
  color: black;
  display: block;
}
</style>
