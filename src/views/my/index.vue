<template>
  <div class="my-container">
    <div class="title">
      <!-- 背景框 -->
      <div class="Background-box"></div>
      <!-- 登录框 -->
      <div class="login">
        <!-- 头像显示 -->
        <div class="avactor">
          <img
            :src="
              user
                ? `http://liufusong.top:8080${userInfo.avatar}`
                : '@/assets/imgs/avatar.png'
            "
            alt=""
          />
        </div>
        <div class="details">
          <div class="uname">{{ user ? userInfo.nickname : '游客' }}</div>
          <van-button
            @click="logOut"
            class="loginBtn"
            type="primary"
            size="small"
            >{{ user ? '退出' : '去登录' }}</van-button
          >
        </div>
      </div>
    </div>
    <!-- 宫格 -->
    <van-grid :border="false" :column-num="3">
      <van-grid-item icon="star-o" text="我的收藏" to="/favorate" />
      <van-grid-item icon="wap-home-o" text="我的出租" to="/rent" />
      <van-grid-item icon="clock-o" text="看房记录" />
      <van-grid-item icon="send-gift-o" text="成为房主" />
      <van-grid-item icon="contact" text="个人资料" />
      <van-grid-item icon="service-o" text="联系我们" />
    </van-grid>
    <!-- 广告 -->
    <div class="advertise">
      <img src="@/assets/imgs/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api'
import { mapState } from 'vuex'
import { Dialog } from 'vant'
export default {
  name: 'MyPage',
  components: {},
  props: {},
  data() {
    return {
      userInfo: {}
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  created() {
    if (this.user) {
      this.getUserInfo()
    }
  },
  mounted() {},
  methods: {
    async getUserInfo() {
      const {
        data: { body }
      } = await getUserInfo()
      this.userInfo = body
    },
    async logOut() {
      if (!this.user) {
        return this.$router.push('/login')
      } else {
        try {
          await Dialog.confirm({ title: '提示', message: '是否确定退出' })
          this.$store.commit('removeUser')
        } catch (error) {
          this.$toast(error)
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.my-container {
  position: relative;
  .title {
    height: 600px;
    .Background-box {
      width: 100%;
      height: 380px;
      background: url(~@/assets/imgs/bg.png) no-repeat 0/100%;
    }
    .login {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      left: 70px;
      top: 270px;
      width: 600px;
      min-height: 310px;
      background-color: #fff;
      box-shadow: -2px 2px 16px 1px rgba(0, 0, 0, 0.2);
      .avactor {
        position: absolute;
        left: 230px;
        top: -56px;
        padding: 10px;
        width: 140px;
        height: 140px;
        background-color: #f5f5f5;
        border-radius: 50%;
        box-sizing: border-box;
        z-index: 2;
        img {
          width: 100%;
        }
      }
      .details {
        .uname {
          width: 150px;
          text-align: center;
          margin: 10px;
          font-size: 16px;
          // line-height: 600px;
        }
        .loginBtn {
          width: 120px;
          margin-left: 28px;
        }
      }
    }
  }
  .advertise {
    width: 690px;
    height: 168px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
}
</style>
