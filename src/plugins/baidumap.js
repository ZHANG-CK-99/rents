import BaiduMap, { BmlMarkerClusterer } from 'vue-baidu-map'
const registerBaiDuMap = (Vue) => {
  Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'pSkmn0bqpyXfxG1bGomfnjU78w4HdyHB'
  })
  Vue.component('bml-marker-cluster', BmlMarkerClusterer)
}

export default registerBaiDuMap
