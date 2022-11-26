<template>
  <div class="home-container">
    <!-- 头部搜索 -->
    <search></search>
    <!-- 头部搜索 -->
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in swipe" :key="index">
        <img
          class="upper"
          v-lazy="`http://liufusong.top:8080` + image.imgSrc"
        />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图 -->
    <!-- 宫格导航 -->
    <van-grid :border="false" :column-num="4">
      <van-grid-item v-for="img in nav_imgs" :key="img.id">
        <van-image :src="img.src" width="60px" height="60px" />
        <p class="title">{{ img.title }}</p>
      </van-grid-item>
    </van-grid>
    <!-- /宫格导航 -->
    <!-- 租房小组 -->
    <van-grid
      :column-num="2"
      :gutter="10"
      direction="horizontal"
      class="rent-group"
    >
      <van-cell class="cell-content" title="租房小组" value="更多" />
      <van-grid-item
        v-for="item in Rental_group"
        :key="item.id"
        icon="photo-o"
        :text="item.title"
      >
        <van-image
          :src="`http://liufusong.top:8080` + item.imgSrc"
          width="50px"
        ></van-image>
        <div class="detail">
          <p>{{ item.title }}</p>
          <p>{{ item.desc }}</p>
        </div>
      </van-grid-item>
    </van-grid>
    <!-- /租房小组 -->
    <!-- 租房的列表作为一个弹出层放在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import { Rotation, getRentGroups, getCurrentLocation, getCityInfo } from '@/api'
export default {
  name: 'HomePage',
  components: {},
  props: {},
  data() {
    return {
      swipe: [],
      nav_imgs: [
        { id: '001', src: require('@/assets/imgs/2.png'), title: '整租' },
        { id: '002', src: require('@/assets/imgs/4.png'), title: '合租' },
        { id: '003', src: require('@/assets/imgs/3.png'), title: '地图找房' },
        { id: '004', src: require('@/assets/imgs/1.png'), title: '去出租' }
      ],
      Rental_group: []
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getSwipe()
    this.getRentGroup()
    this.getCurrentLocation()
  },
  mounted() {},
  methods: {
    async getSwipe() {
      const {
        data: { body }
      } = await Rotation()
      this.swipe = body
    },
    async getRentGroup() {
      const {
        data: { body }
      } = await getRentGroups()
      this.Rental_group = body
    },
    async getCurrentLocation() {
      try {
        const ipInfo = await getCurrentLocation()
        const city = ipInfo.data.content.address_detail.city.replace('市', '')
        const {
          data: {
            body: { label: cityName, value: cityCode }
          }
        } = await getCityInfo(city)
        // 将城市信息存储在vuex中
        console.log(cityCode, cityName)
        this.$store.commit('city/SET_CITY', { cityName, cityCode })
      } catch (error) {
        this.$toast.fail('获取当前城市定位失败')
      }
    }
  }
}
</script>

<style scoped lang="less">
.home-container {
  position: relative;
  // 搜索栏样式

  // 轮播图样式
  /deep/.my-swipe {
    height: 400px;
    .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      background-color: #39a9ed;
      .upper {
        width: 100%;
      }
    }
  }
  // 宫格导航
  .title {
    font-size: 16px;
  }
  // 租房小组
  .rent-group {
    background-color: #f6f5f6;
    .cell-content {
      background: #f6f5f6;
      font-weight: 700;
    }
    .detail {
      margin-left: 20px;
      p {
        font-size: 16px;
      }
    }
  }
}
</style>
