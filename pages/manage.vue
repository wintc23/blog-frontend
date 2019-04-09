<template>
  <div class="layout">
    <Layout>
      <Header>
        <nuxt-link class="return-site" :to="{ path: '/site' }">MY BLOG</nuxt-link>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu theme="light">
          </Menu>
        </Sider>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        {
          
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.return-site
  cursor pointer
  padding 8px 4px
  border-radius 4px
  background #EEF0F0
  color #2C405A !important
  font-weight blod
</style>
