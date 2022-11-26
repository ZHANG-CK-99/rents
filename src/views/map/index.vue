<template>
  <div class="map">
    <!-- 标题 -->
    <nav-bar class="nav-bar-map" title="地图找房"></nav-bar>
    <!-- 地图 -->
    <baidu-map
      class="baidu-map"
      :center="center"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
      @ready="initMap"
    >
      <!-- 比例尺控件 -->
      <bm-scale anchor="BMAP_ANCHOR_TOP_LEFT"></bm-scale>
      <!-- 缩放组件 -->
      <bm-navigation
        anchor="BMAP_ANCHOR_TOP_LEFT"
        type="BMAP_NAVIGATION_CONTROL_LARGE"
      >
      </bm-navigation>
      <!-- 定位控件 -->
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
      ></bm-geolocation>
      <!-- 自定义覆盖物 -->
      <bm-overlay
        v-for="(item, index) in sonCity"
        :key="index"
        pane="labelPane"
        :class="{ sample: true, active }"
        @draw="draw($event, item.coord)"
        @click.native="onClick(item)"
      >
        <div>
          <p>{{ item.label }}</p>
          <p>{{ item.count }}套</p>
        </div>
      </bm-overlay>
    </baidu-map>
  </div>
</template>
<script>
import { getCityInfo, getSubCityInfo } from '@/api'
export default {
  name: 'MapPage',
  props: {},
  components: {},
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 11,
      active: false,
      sonCity: []
    }
  },
  computed: {},
  // 生命周期 - 创建完成(访问当前this实例)
  created() {},
  // 生命周期 - 挂载完成(访问DOM元素)
  mounted() {},
  methods: {
    loading() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
    },
    async initMap({ BMap, map }) {
      this.initCity(BMap, map)
      this.toastLoading(this.getCityInfo)
    },
    initCity(BMap, map) {
      const myGeo = new BMap.Geocoder()
      myGeo.getPoint(
        '上海',
        (point) => {
          if (point) {
            map.centerAndZoom(point, 11)
          } else {
            this.$toast.fail('地址解析失败')
          }
        },
        '上海'
      )
    },
    async getCityInfo(city) {
      if (!city) {
        city = this.$route.query.city
      }
      try {
        const {
          data: { body }
        } = await getCityInfo(city)
        const { data } = await getSubCityInfo(body.value)
        this.sonCity = data.body
        this.$toast.success('房源加载成功')
      } catch (error) {
        this.$toast.fail('房源加载失败')
      }
    },
    draw({ el, BMap, map }, { latitude, longitude }) {
      const pixel = map.pointToOverlayPixel(new BMap.Point(longitude, latitude))
      el.style.left = pixel.x - 60 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    },
    async toastLoading(usecity) {
      this.loading()
      await usecity()
    }
  }
}
</script>
<style scoped lang="less">
.map {
  .nav-bar-map {
    position: sticky;
    top: 0;
    left: 0;
  }
  .baidu-map {
    width: 100%;
    height: calc(100vh - 92px - 100px);
    .sample {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: rgba(12, 181, 106, 0.9);
      text-align: center;
      overflow: hidden;
      color: #fff;
      font-size: 12px;
      border: 2px solid #fff;
      padding: 10px;
      position: absolute;
    }
    .sample.active {
      display: flex;
      width: 100px;
      height: 20px;
      padding: 0;
      background: rgba(12, 181, 106, 0.9);
      color: #fff;
      font-size: 12px;
      border-radius: 5px;
      margin: 5px;
    }
  }
}
</style>
