<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" ></home-swiper>
    </swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue"
import {getHomeMultidata} from "../../network/home"
import HomeSwiper from "./childComps/HomeSwiper.vue"
import RecommendView from "./childComps/RecommendView.vue"

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    // 请求多个数据
    getHomeMultidata().then(res => {
      // console.log(res);
      // this.result = res
      this.banners = res.data.banner.list,
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style>
.home-nav{
  background-color: #ff8198;
  color: #fff;
}
</style>