<template>
  <div>
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
      class="nav-bar"
    />
  </div>
</template>
<script>
export default {
  name: 'NavBarPage',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  components: {},
  data() {
    return {}
  },
  computed: {},
  // 生命周期 - 创建完成(访问当前this实例)
  created() {},
  // 生命周期 - 挂载完成(访问DOM元素)
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>
<style scoped lang="less">
.nav-bar {
  background-color: #21b97a;
  :deep(.van-nav-bar__left) {
    .van-icon-arrow-left {
      color: #fff;
    }
  }
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
}
</style>
