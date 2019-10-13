<template>
  <div class="page-container">
    <link rel="stylesheet" type="text/css" href="/css/prism.css">
    <script src="/js/prism.js"></script>
    <div class="page-header">
      <div class="menu-btn" @click.stop="switchDownNav">
        <div :class="['menu', showNav ? 'on' : '']"></div>
      </div>
      <div class="logo-font">
        <nuxt-link :to="{ name: 'site' }">
          <div>MY</div>
          <div>BLOG</div>
        </nuxt-link>
      </div>
      <div class="site-dir-list">
        <nuxt-link
          v-for="dir of dirList"
          :class="{
            active: dir.name.includes(routeName),
            dir: true
          }"
          :to="{ path: dir.path }"
          :key="dir.value">
          {{ dir.title }}
        </nuxt-link>
        <nuxt-link v-if="currentUser.admin" class="dir" :to="{ path: '/manage' }">后台管理</nuxt-link>
      </div>
      <div
        :class="{
          'header-down-nav': true,
          show: showNav
        }">
        <nuxt-link
          v-for="dir of dirList"
          @click.stop="chooseNav(dir)"
          :class="{
            active: dir.name.includes(routeName),
            'nav-item': true,
          }"
          :to="{ path: dir.path }"
          :key="dir.value">
          {{ dir.title }}
        </nuxt-link>
        <nuxt-link　v-if="currentUser.admin" class="nav-item" :to="{ path: '/manage' }">后台管理</nuxt-link>
      </div>
      <div class="placeholder"></div>
      <div class="welcome-message">欢迎来到小刚哥的博客~</div>
    </div>
    <div class="page-content">
      <div class="site-info" v-if="isSiteHome">
        <div class="site-info-content">
          <div class="blog-title-container">
            <div class="blog-title">
              <div>MY</div>
              <div>BLOG</div>
            </div>
            <div class="sentence">明天会和今天一样度过</div>
          </div>
          <div class="amount">
            <div class="view-amount">
              <!-- <span class="title">访问量</span>
              <span class="content">1000</span> -->
            </div>
            <div class="blog-amount">
              <!-- <span class="title">日志</span>
              <span class="content">1000</span> -->
            </div>
          </div>
        </div>
      </div>
      <nuxt-child class="content-container">
      </nuxt-child>
    </div>
    <div class="page-footer">
      <div class="footer-container">
        <img class="wechat" src="/img/wechat.jpeg" alt="">
        <div class="get-in-touch">
          <img src="/img/contact.png" alt="">
          <div class="contact-info">
            <div class="contact-message">我的联系方式</div>
            <div class="contact-item">
              <span class="title">邮箱</span>
              <span class="content">lushg-tcxg@qq.com</span>
            </div>
            <div class="contact-item">
              <span class="title">QQ</span>
              <span class="content">1401618872</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal
      transfer
      v-model="loginShow"
      title="登录"
      footer-hide>
      <div slot='header' class="login-header">
        <h3>github登录</h3>
      </div>
      <div class="login-container">
        <div class="login-content">
          <Icon type="logo-github" @click.stop="loginWithGithub" class="logo-github"></Icon>
        </div>
        <div class="login-footer"></div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { CLIENT_ID } from '@/libs/config'

export default {
  data() {
    return {
      dirList: [{
        title: '文章',
        value: 'article',
        name: ['site', 'site-article'],
        path: '/site'
      },
      {
        title: '留言',
        value: 'message',
        name: ['site-message'],
        path: '/site/message'
      },
      {
        title: '关于',
        value: 'about',
        name: ['site-about'],
        path: '/site/about'
      }],
      currentDir: 'article',
      showNav: false,
      loginShow: false
    }
  },
  computed: {
    isSiteHome () {
      return this.$route.name == 'site'
    },
    routeName () {
      return this.$route.name
    },
    currentUser () {
      return this.$store.getters['userInfo/info']
    }
  },
  created() {
    this.$bus.$on('login-show', this.showLogin)
    this.getUserInfo()
  },
  beforeDestroy() {
    this.$bus.$off('login-show')
  },
  methods: {
    switchDownNav () {
      this.showNav = !this.showNav
    },
    chooseNav (dir) {
      this.showNav = false
    },
    getUserInfo () {
      this.$store.dispatch('userInfo/getUserInfo')
    },
    showLogin () {
      this.loginShow = true
    },
    hideLogin () {
      this.loginShow = false
    },
    loginWithGithub () {
      let scope = "user:email"
      let loginWIndow = window.open(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${scope}`, 'login', 'resizable=yes,scrollbars=yes,status=yes,height=600,width=800')
      window._loginCallback = (success) => {
        if (success) {
          this.$Message.success('登录成功')
          this.hideLogin()
          loginWIndow.close()
          this.getUserInfo()
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.page-container
  color rgb(0, 0, 128)
  display flex
  flex-direction column
  flex-shrink 0
  min-height 100vh
  .page-header
    height 120px
    display flex
    position relative
    background #ECF5FD
    .logo-font
      margin-left 65px
      font-size 2rem
      line-height .9
      display flex
      flex-direction column
      justify-content center
    .site-dir-list
      user-select none
      display flex
      align-items center
      font-size 1rem
      margin-left 105px
      .dir
        margin 0 20px
        cursor pointer
        color black
        &.active
          color #ff7f21
    .header-down-nav
      display none
    .placeholder
      flex auto
    .welcome-message
      font-size 1rem
      align-self center
      padding-right 2rem
  .page-content
    flex auto
    .site-info
      height 37.5rem
      width 100%
      background center / 100vw 100% no-repeat url(http://file.wintc.top/star.jpg)
      .site-info-content
        position relative
        margin 0 auto
        max-width 1000px
        .blog-title-container
          position absolute
          left 0
          top 152px
          color white
          .blog-title
            font-size 5rem
            line-height 88px
          .sentence
            font-size 2rem
        .amount
          color #ff7f21
          position absolute
          right 1.5rem
          top 290px
          font-size 18px
          line-height 50px
          .view-amount, .blog-amount
            .title
              display inline-block
              width 4.5rem
              position relative
              &::before
                position absolute
                right -5px
                content ':'
                margin 0 .5rem
    .content-container
      padding 100px 0 160px 0
      color black
  .page-footer
    border-top 1px solid rgb(0, 0, 128)
    .footer-container
      margin 0 auto
      max-width 1000px
      display flex
      justify-content space-between
      padding 60px 0 80px 0
      flex-wrap wrap
      .wechat
        width 10rem
        height 10rem
      .get-in-touch
        height 10rem
        display flex
        padding 0 10px
        img
          height 10rem
          width 2.5rem
          margin-right 20px
        .contact-info
          display flex
          flex-direction column
          justify-content space-around
          .contact-message
            font-size 20px
            margin 20px 0
          .contact-item
            font-size 1rem
            display flex
            .title
              margin-right 20px
              width 2rem

.login-header 
  user-select none
.login-container
  .login-content
    text-align center
    font-size 10rem
    display flex
    align-items center
    justify-content center
    padding 0
    .logo-github
      padding 1rem
      cursor pointer
      border-radius 8px
      &:hover
        background #EEF0F0
      &:active
        background #DFDFDF
        transition all .3s

@media screen and (max-width 768px)
  .page-container
    .page-header
      .menu-btn
        position absolute
        top 40px
        right 20px
        .menu
          width 50px
          height 40px
          position relative
          cursor pointer
          &::before, &::after
            width 50px
            height 6px
            content ''
            display block
            border-radius 8px
            background #FF7F21
            position absolute
            left 0
            transition all .15s ease-in-out
          &::before
            box-shadow 0 34px #FF7F21
            top 0
          &::after
            bottom 17px
          &.on::before
            top 17px
            box-shadow none
            transform rotate(225deg)
          &.on::after
            bottom 17px
            transform rotate(135deg)
      .site-dir-list
        display none
      .welcome-message
        display none
      .header-down-nav.show
        background #ECECEC
        width 100%
        position absolute
        top 120px
        z-index 2
        left 0
        padding 0
        border-radius 0
        color #2C405A
        display block
        border-top 1px solid #B9B9B9
        .nav-item
          cursor pointer
          user-select none
          list-style none
          font-size 16px
          transition all .3s
          padding 0 40px
          line-height 60px
          border-bottom 1px solid #B9B9B9
          position relative
          display block
          &:hover, &.active
            background #6B798C
            color white

    .page-content
      .site-info
        .site-info-content
          .blog-title-container
            top 290px
            left 20px
            .blog-title
              font-size 40px
              line-height 44px
            .sentence
              font-size 24px
          .amount
            left 20px
            top 210px
            line-height 30px
@media screen and (max-width: 1200px)
  .page-container
    .page-header
      .logo-font
        margin-left 20px
    .page-content
      .content-container
        padding 60px 0
</style>

<style lang="stylus">
@import 'static/css/prism.css'
@import 'static/css/github-markdown.css'
</style>