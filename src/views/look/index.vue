<template>
  <div class="look-container">
    <!-- 导航栏 -->
    <nav-bar></nav-bar>
    <search></search>
    <!-- 筛选栏 -->
    <van-dropdown-menu>
      <choose-item
        :queryCondition="areaQueryCondition"
        title="区域"
      ></choose-item>
      <choose-item :queryCondition="rentType" title="方式"></choose-item>
      <choose-item :queryCondition="price" title="租金"></choose-item>
      <filter-choose></filter-choose>
    </van-dropdown-menu>
    <!-- 主体显示栏 -->
  </div>
</template>

<script>
import { getQueryCondision } from '@/api'
import { mapState } from '@/store/helper/city'
import ChooseItem from './components/ChooseItem.vue'
import FilterChoose from './components/FilterChoose.vue'
export default {
  name: 'HomePage',
  components: { ChooseItem, FilterChoose },
  props: {},

  data() {
    return {
      value: 0,
      areaQueryCondition: [], // 区域条件
      filterCondition: {}, // 筛选条件
      rentType: [], // 出租方式
      price: [] // 价格
    }
  },
  computed: {
    ...mapState(['currentCity'])
  },
  watch: {},
  created() {
    this.getQueryCondision()
  },
  mounted() {},
  methods: {
    loading() {
      this.$toast.loading({
        message: '加载中...',
        duration: 0
      })
    },
    async getQueryCondision() {
      const currentCity = this.currentCity
      try {
        // console.log(currentCity)
        this.loading()
        const {
          data: { body }
        } = await getQueryCondision(currentCity)
        // console.log(body)
        // console.log(body.area)
        this.DataIntegration(body)
        this.$toast.clear()
      } catch (error) {
        this.$toast.fail('请求失败')
      }
    },
    // 数据整合
    DataIntegration(body) {
      let {
        area,
        // characteristic,
        // floor,
        // oriented,
        price,
        rentType,
        // roomType,
        subway
      } = body

      /**
       * 这块地方要做什么？要把所有的数据进行整合
       * 要做的就是遍历数据让数据的结构变成一样的没有子集的添上默认的子集
       */
      // 合成区域筛选条件
      area = this.addChildrenField(area)
      subway = this.addChildrenField(subway)
      this.areaQueryCondition = [area, subway]
      // 出租条件
      this.rentType = rentType
      // 合成租金条件
      this.price = price
    },
    addChildrenField(obj) {
      // 递归数据
      const isHaveChildren = Object.prototype.hasOwnProperty.call(
        obj,
        'children'
      )
      // 如果没有数据
      if (!isHaveChildren) {
        obj.children = [{ label: '不限', value: 'null' }]
      } else {
        // 有子集怎么操作？递归遍历
        for (const key in obj.children) {
          this.addChildrenField(obj.children[key])
        }
      }
      return obj
    }
  }
}
</script>

<style scoped lang="less">
:deep(.search) {
  left: 24px;
  top: 14px;
  width: 720px;
  .searc-left {
    margin-left: 60px;
  }
}
</style>
