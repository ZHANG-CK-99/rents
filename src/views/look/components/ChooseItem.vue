<template>
  <div>
    <van-dropdown-item :title="title" ref="dropdownItem">
      <van-picker
        ref="picker"
        show-toolbar
        toolbar-position="bottom"
        :columns="queryCondition"
        value-key="label"
        confirm-button-text="确定"
        :visible-item-count="5"
        @confirm="confirm"
      >
        <template #confirm>
          <van-button type="primary" class="confirm-btn">确定</van-button>
        </template>
        <template #cancel>
          <span @click="cancle" class="cancle-btn">取消</span>
        </template>
      </van-picker>
    </van-dropdown-item>
  </div>
</template>
<script>
// import { getHouseInfo } from '@/api'
export default {
  name: 'ChooseItem',
  props: {
    queryCondition: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  components: {},
  data() {
    return {
      // 请求体参数
      queryParams: {
        area: '',
        price: '',
        rentType: '',
        more: ''
      }
    }
  },
  computed: {},
  // 生命周期 - 创建完成(访问当前this实例)
  created() {
    // 这里用到发布订阅思想
    this.$bus.$on('submitQueryParams', this.submitQueryParams)
  },
  // 生命周期 - 挂载完成(访问DOM元素)
  mounted() {},
  methods: {
    confirm() {
      // 1.先获取表单中选择
      const res = this.$refs.picker.getValues()
      switch (this.title) {
        case '区域':
          if (res[2].value !== '') {
            this.queryParams.area = res[2].value
          } else if (res[1].value !== '') {
            this.queryParams.area = res[1].value
          }
          break
        case '方式':
          this.queryParams.rentType = res[0].value
          break
        case '租金':
          this.queryParams.price = res[0].value
          break
      }
      // 将数据放到vuex中
      this.submitQueryParams()
      this.$refs.dropdownItem.toggle(false)
    },
    submitQueryParams(more) {
      // 判断进来的是不是有more
      if (more) {
        // 合成查询more字段
        // 因为复合查询字段的more字段是很多子弹复合在一起的而且去做查询是用,分隔
        this.queryParams.more = more.join(',')
      }
      // 提交给vuex
      this.$store.commit('city/UPDATE_QUERY_PARAMS', this.queryParams)
      // 通过事件总线在每次提交的时候把数据列表更新掉
      this.$bus.$emit('reLoad')
    },
    cancle() {
      this.$refs.dropdownItem.toggle(false)
    }
  },
  beforeDestroy() {
    this.$bus.$off('submitQueryParams')
  }
}
</script>
<style scoped lang="less">
.confirm-btn {
  width: 450px;
}
.cancle-btn {
  display: inline-block;
  width: 150px;
}
:deep(.van-picker__confirm) {
  padding-right: 0;
}
</style>
