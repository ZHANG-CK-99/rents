<template>
  <van-dropdown-item class="drop" title="筛选">
    <template #default>
      <van-popup
        v-model="show"
        position="right"
        :style="{ width: '70%', height: '100%' }"
        get-container="body"
      >
        <van-cell title="单元格">
          <template #label>
            <van-grid :column-num="2" :gutter="10">
              <van-grid-item v-for="value in 6" :key="value" text="文字" />
            </van-grid>
          </template>
        </van-cell>
        <van-cell title="单元格" value="内容" label="描述信息" />
        <van-cell title="单元格" value="内容" label="描述信息" />
        <div>
          <van-button type="default">默认按钮</van-button>
          <van-button type="primary">主要按钮</van-button>
        </div>
      </van-popup>
    </template>
  </van-dropdown-item>
</template>
<script>
export default {
  name: 'FilterChoose',
  props: {},
  components: {},
  data() {
    return {
      show: true
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
:deep(.van-grid-item__content) {
  width: 160px;
  padding: 20px 40px 20px;
}
</style>
