<template>
  <div class="page-container">
    <div class="page-header">
      <div class="logo-font">
        <div>MY</div>
        <div>BLOG</div>
      </div>
      <div class="site-dir-list">
        <div
          v-for="dir of dirList"
          :class="{
            current: currentDir === dir.value,
            dir: true
          }"
          :key="dir.value">
          {{ dir.title }}
        </div>
      </div>
      <div class="placeholder"></div>
      <div class="welcome-message">欢迎来到小刚哥的博客~</div>
    </div>
    <div class="page-content">
      <div class="site-info">
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
              <span class="title">访问量</span>
              <span class="content">1000</span>
            </div>
            <div class="blog-amount">
              <span class="title">日志</span>
              <span class="content">1000</span>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      dirList: [{
        title: '文章',
        value: 'article'
      },
      {
        title: '留言',
        value: 'message'
      },
      {
        title: '关于',
        value: 'about'
      }],
      currentDir: 'article'
    }
  },
  created() {
    // 
  },
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
    height 7.5rem
    display flex
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
        &.current
          color #ff7f21
    .placeholder
      flex auto
    .welcome-message
      font-size 1rem
      align-self center
      padding-right 2rem
  .page-content
    .site-info
      height 37.5rem
      width 100%
      background center / 100vw 100% no-repeat url(/img/star.jpg)
      .site-info-content
        position relative
        margin 0 auto
        max-width 1000px
        .blog-title-container
          position absolute
          left 0
          top 9.5rem
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
          .view-amount, .blog-amount
            line-height 50px
            .title
              display inline-block
              width 4.5rem
              position relative
              &::before
                position absolute
                right -5px
                content ':'
                margin 0 .5rem
    flex auto
    .content-container
      margin 0 auto
      max-width 1000px
  .page-footer
    border-top 1px solid rgb(0, 0, 128)
    .footer-container
      margin 0 auto
      max-width 1000px
      display flex
      justify-content space-between
      padding 70px 0
      .wechat
        width 10rem
        height 10rem
      .get-in-touch
        height 10rem
        display flex
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
</style>

