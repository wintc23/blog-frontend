<template>
  <div class="blog-page-container">
    <div class="blog-page">
      <div class="title">
        <div
          v-for="(type, idx) of typeList"
          :class="{
            type: true,
            active: currentType == type.id
          }"
          :key="type.id">
          <span v-if="idx !== 0" class="divide">|</span>
          <nuxt-link class="name" :to="{ name: 'site', query: { page: 1, type: type.id } }">{{ type.name }}</nuxt-link>
        </div>
      </div>
      <div class="post-list">
        <div class="post" v-for="post of postList" :key="post.id">
          <div class="img">
            <img src="http://demo.cssmoban.com/cssthemes5/ccpt_12_cid/res/img/sy_img3.jpg" alt="">
          </div>
          <div class="post-content">
            <h3 :title="post.title">{{ post.title }}</h3>
            <h5>{{ calTypeName(post) }}</h5>
            <p v-html="post.abstract"></p>
            <div>
              <nuxt-link :to="{ name: 'site-article', query: { type: post.type, postId: post.id }}">阅读全文</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <Page :page-size="perPage" :total="totalCount" @on-change='choosePage' show-elevator :current="currentPage"></Page>
      </div>
    </div>
  </div>
</template>

<script>
import { getPosts } from '@/api/posts'

const PER_PAGE = 5

export default {
  watchQuery: ['page', 'type'],
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    let { type, page = 1} = query
    let data = {
      per_page: PER_PAGE,
      post_type: +type,
      page: +page
    }
    return getPosts(data).then(res => {
      if (res.status == 200) {
        let {
          list: postList,
          total: totalCount,
          page: currentPage,
        } = res.data
        return { postList, totalCount, currentPage }
      }
    })
  },
  data () {
    return {
      perPage: PER_PAGE
    }
  },
  computed: {
    typeList () {
      return this.$store.getters['postType/list'] || []
    },
    currentType () {
      if (this.$route.query.type) return this.$route.query.type
      let type = this.typeList.find(item => item.default)
      if (type) return type.id
      return ''
    }
  },
  created() {
    this.$store.dispatch('postType/getType')
  },
  methods: {
    calTypeName (post) {
      let type = this.typeList.find(item => item.id == post.type)
      if (type) return type.name
      return ''
    },
    choosePage (page) {
      if (page == this.currentPage) return
      let query = { page, type: this.currentType || undefined }
      this.$router.push({ name: 'site', query })
      this.$el.scrollIntoView({block: "start", inline: "nearest", behavior: 'smooth' })
    }
  }
}
</script>

<style lang="stylus" scoped>
/* autoprefixer: off */
.blog-page-container
  .blog-page
    margin 0 auto
    max-width 1000px
    .title
      margin-bottom 60px
      font-size 1rem
      display flex
      user-select none
      .type
        .divide
          margin 0 1rem
        &:hover, &.active
          .name
            color #ff7f21
        .name
          cursor pointer
          display inline-block
          width 4rem
          text-align center
          color black
    .post-list
      .post
        margin-bottom 80px
        overflow hidden
        &::before
          content ''
          display block
          clear both
        .img
          img
            width 100%
        .post-content
          padding-left 100px
          >h3
            margin 20px 0
            font-size 24px
            text-overflow ellipsis
            overflow hidden
            white-space nowrap
          >h5
            font-size 12px
            color #FF7F21
            margin-bottom 2rem
          >p
            line-height 37px
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
            overflow hidden
          >div
            color #FF7F21
            user-select none
            cursor pointer
            text-decoration underline
            margin-top 16px
    .pagination
      text-align center

@media screen and (max-width 1200px)
  .blog-page-container
    .blog-page
      .title
        padding-left 10px
      .post-list
        .post
          margin-bottom 50px
          .img
            padding 0 10px
          .post-content
            padding 0 20px
            >h3
              margin 15px 0
              font-size 22px
            >h5
              margin-bottom 10px
            >p
              line-height 30px
            >div
              margin-top 5px

@media screen and (min-width: 768px)
  .blog-page-container
    .blog-page
      .post-list
        .post
          .post-content
            width 66.66666667%
            float left
          .img
            width 33.33333333%
            float  left

@media screen and (min-width 992px)
  .blog-page-container
    .blog-page
      .post-list
        .post
          .img
            width 41.66666667%
          .post-content
            width 58.33333333%
            position relative
            display block
            
</style>

