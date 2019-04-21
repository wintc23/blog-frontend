<template>
  <div class="manage-container">
    <div class="manage-header">
      <Menu mode="horizontal" theme="primary" active-name="post">
        <nuxt-link class="return-site" :to="{ path: '/site' }">MY BLOG</nuxt-link>
        <div class="layout-nav">
          <MenuItem
            v-for="menu of menuList"
            :key="menu.value"
            :to="{ name: menu.name }"
            :name="menu.value">
            <Icon :type="menu.icon"></Icon>{{ menu.title }}
          </MenuItem>
        </div>
      </Menu>
    </div>
    <nuxt-child class="manage-content"></nuxt-child>
  </div>
</template>

<script>
import { checkAdmin } from '@/api/user'

export default {
  data () {
    return {
      menuList: [{
        title: '文章管理',
        name: 'manage',
        icon: 'md-book',
        value: 'post'
      },
      {
        title: '评论管理',
        name: 'manage-comment',
        value: 'comment',
        icon: "ios-chatbubbles"
      },
      {
        title: '留言管理',
        name: 'manage-message',
        icon: "ios-chatboxes-outline",
        value: 'message'
      }]
    }
  },
  computed: {
    currentUser () {
      return this.$store.getters['userInfo/info']
    }
  },
  beforeRouteEnter (to, from, next) {
    checkAdmin().then(res => {
      if (res.status == 200 && res.data.admin) {
        next()
      } else {
        next({ name: 'site' })
      }
    }).catch(error => {
      next({ name: 'site' })
    })
  },
  methods: {
    selectMenu (name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="stylus" scoped>
.manage-container
  display flex
  flex-direction column
  height 100vh
  .manage-header
    position relative
    .return-site
      float left
      position relative
      top 15px
      left 20px
      width 100px
      height 30px
      line-height 30px
      text-align center
      background white
      border-radius 4px
      color black
      font-weight blod
    .layout-nav
      float right
      margin 0 auto
      margin-right 20px
  .manage-content
    flex auto
</style>
