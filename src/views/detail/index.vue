<template>
  <div class="detail">
    <!-- 导航栏 -->
    <nav-bar :title="detail.community"></nav-bar>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" class="my-swipe" indicator-color="white">
      <van-swipe-item v-for="(image, index) in detail.houseImg" :key="index">
        <img v-lazy="`http://liufusong.top:8080${image}`" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { getHouseDetail } from '@/api'
export default {
  name: 'DetailPage',
  props: {
    houseCode: {
      type: String,
      required: true
    }
  },
  components: {},
  data() {
    return {
      detail: {}
    }
  },
  computed: {},
  // 生命周期 - 创建完成(访问当前this实例)
  created() {
    this.getHouseDetail()
  },
  // 生命周期 - 挂载完成(访问DOM元素)
  mounted() {},
  methods: {
    async getHouseDetail() {
      try {
        const {
          data: { body }
        } = await getHouseDetail(this.houseCode)
        this.detail = body
        console.log(this.detail)
      } catch (error) {
        console.log(111)
      }
    }
  }
}
</script>
<style scoped lang="less">
.detail {
  // 轮播样式
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
    img {
      width: 100%;
      height: 600px;
    }
  }
}
</style>
