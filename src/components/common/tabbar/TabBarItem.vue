<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else :style="activeStyle">
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>   
    </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#ff8198'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive() {
      // 不等于-1说明在活跃的路径里找得到当前路径
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color : this.activeColor} : {}
    }
  }
}
</script>

<style>

.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  /* padding-bottom: 4px; */
}

</style>