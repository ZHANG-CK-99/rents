<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :error.sync="err"
      error-text="加载失败,点击重试"
    >
      <rent-list-item
        v-for="(item, index) in list"
        :key="index"
        :detail="item"
        @click.native="
          $router.push({
            path: '/detail',
            query: { houseCode: item.houseCode }
          })
        "
      ></rent-list-item>
    </van-list>
  </div>
</template>
<script>
import { getHouseInfo } from '@/api'
export default {
  name: 'RentList',
  props: {},
  components: {},
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      err: false
    }
  },
  computed: {},
  beforeCreate() {
    // 用户重新定义数据注册监听事件，让别人可以调用
    this.$bus.$on('reLoad', () => {
      // 置空数组
      console.log(111)
      this.list = []
      // 初始化分页查询条件
      this.$store.commit('city/SET_PAGE', true)
      // 重新加载
      this.onLoad()
    })
  },
  // 生命周期 - 创建完成(访问当前this实例)
  created() {},
  // 生命周期 - 挂载完成(访问DOM元素)
  mounted() {},
  beforeDestroy() {
    // 组件销毁的时候要干掉事件。因为不能影响下一次
    this.$bus.$off('reload')
  },
  methods: {
    async onLoad() {
      try {
        const queryParams = this.$store.state.city.queryParams
        const {
          data: {
            body: { list }
          }
        } = await getHouseInfo(queryParams)
        console.log(list)
        this.list.push(...list)
        // 更新分页
        this.$store.commit('city/SET_PAGE')
        this.loading = false
        if (!list.length) {
          this.finished = true
        }
      } catch (error) {
        this.loading = false
        this.err = true
      }
    }
  }
}
</script>
<style scoped lang="less"></style>
