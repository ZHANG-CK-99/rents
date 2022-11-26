<template>
  <van-dropdown-item class="drop" title="筛选" @open="show = true">
    <template #default>
      <van-popup
        v-model="show"
        position="right"
        :style="{ width: '70%', height: '100%' }"
        get-container="body"
      >
        <van-cell
          v-for="(item, key) in filterCondition"
          :key="key"
          :title="key | converter"
        >
          <template #label>
            <van-grid :column-num="2" :gutter="10">
              <van-grid-item
                :text="value.label"
                v-for="(value, index) in item"
                :key="index"
                :class="{ active: more.indexOf(value.value) !== -1 }"
                @click="onClick(value.value)"
              />
            </van-grid>
          </template>
        </van-cell>
        <div class="choose-btn">
          <van-button type="default" @click="cancel">清除</van-button>
          <van-button type="primary" @click="confirm">确定</van-button>
        </div>
      </van-popup>
    </template>
  </van-dropdown-item>
</template>
<script>
export default {
  name: 'FilterChoose',
  props: {
    filterCondition: {
      type: Object,
      required: true
    }
  },
  components: {},
  data() {
    return {
      show: false,
      more: []
    }
  },
  computed: {},
  // 生命周期 - 创建完成(访问当前this实例)
  created() {},
  // 生命周期 - 挂载完成(访问DOM元素)
  mounted() {},
  methods: {
    onClick(value) {
      // 判断more数据里面有没有该字段，有的话删除字段，没有就添加字段
      const index = this.more.indexOf(value)
      if (index === -1) {
        this.more.push(value)
        // 没有就添加
      } else {
        this.more.splice(index, 1)
        // 有就删除
      }
    },
    confirm() {
      // 点击后，向vuex中存储查询参数（之前在chooseIitem里面使用了发布订阅模式）
      this.$bus.$emit('submitQueryParams', this.more)
      this.show = false
    },
    cancel() {
      this.show = false
    }
  },
  filters: {
    converter(value) {
      switch (value) {
        case 'roomType':
          return '户型'
        case 'oriented':
          return '朝向'
        case 'floor':
          return '地板'
        case 'characteristic':
          return '特色'
        default:
          break
      }
    }
  }
}
</script>
<style scoped lang="less">
:deep(.van-grid-item__content) {
  width: 200px;
  padding: 20px 40px 20px;
}

.active {
  :deep(.van-grid-item__content) {
    width: 200px;
    padding: 20px 40px 20px;
    background: #defaef;
    .van-grid-item__text {
      color: #76b9a0;
    }
  }
}
.choose-btn {
  display: flex;
  justify-content: space-between;
  :deep(.van-button--default) {
    flex: 1;
  }
  :deep(.van-button--primary) {
    flex: 2;
  }
}
</style>
