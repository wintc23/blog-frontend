<template>
  <div class="about-me markdown-body">
    <div class="content" v-html="aboutMe.body_html">
    </div>
  </div>
</template>

<script>
import { getAboutMe } from '@/api/posts'

export default {
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    return getAboutMe().then(res => {
      if (res.status == 200) {
        return {
          aboutMe: res.data
        }
      }
    }).catch(e => {
      error({ statusCode: 404, message: '页面找不到了哦' })
    })
  }
}
</script>

<style lang="stylus" scoped>

.about-me
  .content
    max-width 1000px
    margin 0 auto
    font-size 1rem

@media screen and (max-width: 1200px)
  .about-me
    .content
      padding 0 1rem
</style>
