<template>
  <tab-bar>
      <tab-bar-item path="/home" >
        <div slot="item-icon" class="iconfont">&#xe7a7;</div>
        <div slot="item-icon-active" class="iconfont">&#xe7ae;</div>
        <div slot="item-text">首页</div> 
      </tab-bar-item>
      <tab-bar-item path="/category">
        <div slot="item-icon" class="iconfont">&#xe766;</div>
        <div slot="item-icon-active" class="iconfont">&#xe78c;</div>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" >
        <div slot="item-icon" class="iconfont">&#xe747;</div>
        <div slot="item-icon-active" class="iconfont">&#xe77a;</div>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" >
        <div slot="item-icon" class="iconfont">&#xe6ef;</div>
        <div slot="item-icon-active" class="iconfont">&#xe779;</div>
        <div slot="item-text">我的</div></tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBarItem from "../../common/tabbar/TabBarItem.vue"
import TabBar from "../../common/tabbar/TabBar.vue"

export default {
  components: {
    TabBarItem,
    TabBar
  }
}
</script>

<style>
  @import "../../../assets/css/tabber/iconfont.css"
  
</style>