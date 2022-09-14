<template>
  <div>
    <div class="search">
      <div class="searc-left">
        <span class="address" @click="$router.push('/city')">
          杭州
          <van-icon name="arrow-down" />
        </span>
        <span class="break">|</span>
        <van-search
          v-model="keyWorld"
          disabled
          placeholder="请输入小区或者地址"
          background="#fff"
          class="search-input"
        />
      </div>
      <van-icon name="location-o" color="#fff" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchPage',
  props: {},
  components: {},
  data() {
    return {
      keyWorld: ''
    }
  },
  computed: {},
  // 生命周期 - 创建完成(访问当前this实例)
  created() {},
  // 生命周期 - 挂载完成(访问DOM元素)
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="less">
.search {
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 52px;
  z-index: 2;
  width: 750px;
  height: 70px;
  // background-color: pink;
  .searc-left {
    display: flex;
    width: 620px;
    margin-left: 40px;
    background-color: #fff;
    .address {
      font-size: 14px;
      line-height: 70px;
      text-align: center;
      margin-left: 15px;
    }
    .break {
      color: #efefef;
      text-align: center;
      line-height: 70px;
    }
    .search-input {
      height: 70px;
      .van-search__content {
        background-color: #fff;
        .van-cell {
          background-color: #fff;
        }
      }
    }
  }
}
</style>
