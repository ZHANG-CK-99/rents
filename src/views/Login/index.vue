<template>
  <div class="container-login">
    <!-- 头部 -->
    <van-nav-bar
      title="账号登录"
      left-arrow
      @click-left="onClickLeft"
      class="nav-bar"
    />
    <!-- 表单项 -->
    <van-form @submit="onSubmit" class="form">
      <van-field
        v-model="account"
        name="account"
        placeholder="请输入账户"
        :rules="userNameRules"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="passwordRules"
      />
      <div style="margin: 16px">
        <van-button class="loginBtn" block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import { passwordRules, userNameRules } from './config'
export default {
  name: 'loginPage',
  props: {},
  components: {},
  data() {
    return {
      account: '',
      password: '',
      userNameRules,
      passwordRules
    }
  },
  computed: {},
  // 生命周期 - 创建完成(访问当前this实例)
  created() {},
  // 生命周期 - 挂载完成(访问DOM元素)
  mounted() {},
  methods: {
    onClickLeft() {
      this.$toast('返回')
    },
    onSubmit(values) {
      console.log('submit', values)
    }
  }
}
</script>
<style scoped lang="less">
.container-login {
  .nav-bar {
    background-color: #21b97a;
    :deep(.van-nav-bar__left) {
      .van-icon-arrow-left {
        color: #fff;
      }
    }
    :deep(.van-nav-bar__title) {
      color: #fff;
    }
  }
  .form {
    /deep/.van-cell__value input{
      height: 100px;
    }
  }
  .loginBtn {
    background-color: #21b97a;
  }
}
</style>
