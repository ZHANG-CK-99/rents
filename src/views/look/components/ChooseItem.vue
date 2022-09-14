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
    return {}
  },
  computed: {},
  // 生命周期 - 创建完成(访问当前this实例)
  created() {},
  // 生命周期 - 挂载完成(访问DOM元素)
  mounted() {},
  methods: {
    confirm() {
      console.log(222)
    },
    cancle() {}
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
