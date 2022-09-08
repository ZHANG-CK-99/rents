<template>
  <div class="city">
    <!-- 导航 -->
    <nav-bar class="nowCity" title="城市列表"></nav-bar>
    <!-- 城市列表 -->
   <div class="allCitys">
     <van-index-bar :index-list="indexList">
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell title="杭州" />

      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell
        :title="item.label"
        v-for="(item, index) in hotCity"
        :key="index"
      />
      <!-- 渲染所有城市列表 -->
      <div v-for="value in leader" :key="value">
        <van-index-anchor :index="value">{{ value }}</van-index-anchor>
        <van-cell
          v-for="(item, index) in filterCity(value)"
          :title="item.label"
          :key="index"
        />
      </div>
    </van-index-bar>
   </div>
  </div>
</template>
<script>
import { getAllCity, getHotCity } from '@/api/city'
export default {
  name: 'CityPage',
  props: {},
  components: {},
  data() {
    return {
      indexList: [
        '#',
        '热',
        'A',
        'B',
        'C',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'M',
        'N',
        'Q',
        'S',
        'T',
        'W',
        'X',
        'Y',
        'Z'
      ],
      hotCity: [],
      allCity: [],
      leader: [
        'A',
        'B',
        'C',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'M',
        'N',
        'Q',
        'S',
        'T',
        'W',
        'X',
        'Y',
        'Z'
      ]
    }
  },
  computed: {
    filterCity() {
      return (value) => {
        return this.allCity.filter(
          (item) => item.short[0].toUpperCase() === value
        )
      }
    }
  },
  // 生命周期 - 创建完成(访问当前this实例)
  created() {
    this.getAllCity()
    this.getHotCity()
  },
  // 生命周期 - 挂载完成(访问DOM元素)
  mounted() {},
  methods: {
    async getAllCity() {
      const {
        data: { body }
      } = await getAllCity({ level: 1 })
      this.allCity = body
    },
    async getHotCity() {
      const {
        data: { body }
      } = await getHotCity()
      this.hotCity = body
    }
  }
}
</script>
<style scoped lang="less">
.city {
  position: relative;
  padding-top: 92px;
  // 导航固定定位
  .nowCity {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }
  // 设置中间部分
  .allCitys {
    height: calc(100vh - 92px - 2px);
    overflow: auto;
  }
  // 侧边栏样式
  :deep(.van-index-bar__index) {
    display: inline-block;
    padding: 0;
    margin-bottom: 15px;
    width: 40px;
    height: 40px;
  }
  :deep(.van-index-bar__index--active) {
    border-radius: 50%;
    background: skyblue;
    color: aliceblue;
  }
  :deep(.van-index-anchor) {
    color: #d0d0d0;
    font-size: 28px;
  }
  :deep(.van-cell__title) {
    color: #000;
    font-size: 32px;
  }
}
</style>
