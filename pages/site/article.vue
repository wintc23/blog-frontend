<template>
  <div class="post-detail-container">
    <div class="post-detail">
      <h3 class="post-title">{{ postData.title }}</h3>
      <div class="post-info">
        <span class="time"> {{ $formatTime(postData.timestamp) }}</span>
        <span class="type" v-if="type">{{ type.name }}</span>
      </div>
      <div class="post-content" v-html="postData.body_html"></div>
      <div class="relative-post" @click="scrollToTop">
        <router-link class="link" :to="{ name: 'site-article', query: { postId: before.id } }" v-if="!!before">
          <span>上一篇：</span>
          {{ before.title }}
        </router-link>
        <router-link class="link" :to="{ name: 'site-article', query: { postId: after.id } }" v-if="!!after">
          <span>下一篇：</span>
          {{ after.title }}
        </router-link>
      </div>
      <div class="comment-area">
        <div class="title">评论</div>
        <div class="add-comment">
          <CommentInput placeholder="既然来了，就说几句吧" v-model="comment"></CommentInput>
          <Button class="comment-button" type="success" size="small" @click.stop="addComment(comment)">确定</Button>
          <!-- <Button class="comment-button" type="text">取消</Button> -->
        </div>
        <div class="comments">
          <simple-tree
            :expand="false"
            class="comment-tree"
            :node-class="'tree-node-container'"
            :treeData="commentTree"
            :max-indent="16">
            <template v-slot:default="{ parentData, data, level }">
              <div class="comment-root" v-if="level == 1">
                <avatar class="img" :userId="data.author_id">
                  <template v-slot:default="{ userinfo }">
                    <img :src="userinfo.avatar" alt="用户头像">
                  </template>
                </avatar>
                <div class="text">
                  <div class="title">
                    <avatar class="name" :userId="data.author_id">
                      <template v-slot:default="{ userinfo }">
                        <span>{{ userinfo.username }}</span>
                      </template>
                    </avatar>
                    <div class="date">{{ $formatTime(data.timestamp) }}</div>
                  </div>
                  <div class="comment-content">
                    <p @click.stop="checkReply(data)">{{ data.body }}</p>
                    <div class="comment-reply">
                      <template v-if="data.commentEdit">
                        <Input class="reply-input" placeholder="回复：说点啥呢．．．" type="textarea" autosize v-model="data.comment"/>
                        <Button class="comment-button" size="small" type="success" @click.stop="addComment(data.comment, data.id)">确定</Button>
                        <Button class="comment-button" size="small" type="text" @click.stop="hideComment(data)">取消</Button>
                      </template>
                      <span class="reply-icon" @click.stop="setComment(data)" v-else-if="$IsPC">
                        <Icon type="ios-paper-plane" class="icon" />
                        <span>回复</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="reply-comment" v-else>
                <div class="title">
                  <avatar class="author" :userId="data.author_id">
                    <template v-slot:default="{ userinfo }">
                      <img :src="userinfo.avatar" alt="用户头像">
                      <span class="author-name">{{ userinfo.username }}</span>
                    </template>
                  </avatar>
                  <span class="reply-title">回复</span>
                  <avatar class="response-author" :userId="parentData.author_id">
                    <template v-slot:default="{ userinfo }">
                      <img :src="userinfo.avatar" alt="用户头像">
                      <span class="response-author-name">{{ userinfo.username }}</span>
                    </template>
                  </avatar>
                  <span class="comment-time">{{ $formatTime(data.timestamp) }}</span>
                </div>
                <div class="comment-content">
                <p class="text">{{ data.body }}</p>
                <div class="comment-reply">
                  <template v-if="data.commentEdit">
                    <Input class="reply-input" placeholder="说点啥呢．．．" type="textarea" autosize v-model="data.comment"/>
                    <Button class="comment-button" size="small" type="success" @click.stop="addComment(data.comment, data.id)">确定</Button>
                    <Button class="comment-button" size="small" type="text" @click.stop="hideComment(data)">取消</Button>
                  </template>
                  <span class="reply-icon" @click.stop="setComment(data)" v-else>
                    <Icon type="ios-paper-plane" class="icon" />
                    <span>回复</span>
                  </span>
                </div>
                </div>
              </div>
            </template>
          </simple-tree>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPost } from '@/api/posts'
import { addComment } from '@/api/comment'
import CommentInput from '@/components/CommentInput'
import _ from 'lodash'

export default {
  scrollToTop: true,
  watchQuery: ['postId', 'refresh'],
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    return getPost(query.postId).then(res => {
      if (res.status == 200) {
        let comments = _.cloneDeep(res.data.comments)
        comments.sort((a, b) => a.timestamp > b.timestamp ? 1 : -1)
        let info = {}
        let list = []
        for (let comment of comments) {
          if (comment.response_id) {
            // 已经排序 response_id一定已经在info中
            if (!info[comment.response_id]) continue
            info[comment.response_id].push(comment)
            info[comment.id] = info[comment.response_id]
          } else {
            comment.children = []
            info[comment.id] = comment.children
            list.push(comment)
          }
        }
        list.sort((a, b) => a.timestamp < b.timestamp ? 1 : -1)
        return {
          postData: res.data,
          commentTree: list
        }
      }
    })
  },
  components: {
    CommentInput
  },
  data () {
    return {
      comment: ''
    }
  },
  computed: {
    before () {
      return this.postData.before
    },
    after () {
      return this.postData.after
    },
    comments () {
      return this.postData.comments
    },
    typeList () {
      return this.$store.getters['postType/list'] || []
    },
    type () {
      let type = this.typeList.find(item => item.id === this.postData.type_id)
      return type
    },
    currentUser () {
      return this.$store.getters['userInfo/info']
    }
  },
  created() {
    this.$store.dispatch('postType/getType')
  },
  methods: {
    scrollToTop () {
      this.$el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    setComment (data) {
      if (!this.currentUser.id) {
        this.$bus.$emit('login-show')
        this.$Message.info('请先登录后再操作')
        return
      }
      console.log('hello', data.id)
      this.$set(data, 'commentEdit', true)
      if (!data.comment) {
        this.$set(data, 'comment', '')
      }
    },
    hideComment (data) {
      this.$delete(data, 'commentEdit')
    },
    addComment (comment, response) {
      if (!comment) {
        this.$Message.info('操作失败，评论不能为空')
        return
      }
      if (!this.currentUser.id) {
        this.$bus.$emit('login-show')
        this.$Message.info('请先登录后再操作')
        return
      }
      let params = {
        body: comment,
        post_id: this.postData.id,
      }
      response && (params.response_id = response)
      addComment(params).then(res => {
        if (res.status == 200) {
          let query = { ...this.$route.query }
          query.refresh = +query.refresh ? 0 : 1
          this.comment = ''
          this.$router.push({
            name: this.$route.name,
            query
          })
        }
      }).catch(error => {
        this.$Message.error('网络请求失败')
      })
    },
    checkReply (data) {
      if (this.$IsPC) return
      this.setComment(data)
    }
  }
}
</script>

<style lang="stylus" scoped>
.post-detail-container
  .post-detail
    max-width 1000px
    margin 0 auto
    padding 0 20px 40px
    .post-title
      font-size 24px
      text-align center
      margin-bottom 36px
    .post-info
      text-align center
      margin-bottom 30px
      .time
        margin-right 26px
      .type
        color #ff7f21
    .relative-post
      margin 2rem 0
      .link
        display block
        margin 4px 0
        &:hover
          text-decoration underline
        &:active
          position relative
          left 1px
          top 1px
    .comment-area
      .add-comment
        .comment-button
          margin 4px
          float right
      .comments
        clear both
        .comment-tree >>>
          >.tree-node-container
            border-bottom 1px solid #e5e5e5
            padding 40px 0 30px
            .comment-root
              // border 1px solid red
              .img
                float left
                img
                  width 50px
                  height 50px
                  border-radius 50%
              .text
                padding-left 70px
                line-height 22px
                color #333
                .title
                  margin-bottom 10px
                  .name, .date
                    display inline
                  .date
                    float right
            .reply-comment
              padding-left 54px
              .title
                line-height 30px
                margin 4px 0
                .author, .response-author
                  display inline
                  img
                    width 30px
                    height 30px
                    border-radius 50%
                    vertical-align middle
                  .author-name, .response-author-name
                    color #6B6B6B
                    font-weight bold
                .reply-title
                  color #3361d8
                .comment-time
                  color #6B6B6B
              .comment-content
                margin-left 30px
              .text
                background #ECF5FD
                padding 5px
                border-radius 4px
.comment-content
  background #ECF5FD
  padding 5px 10px
  border-radius 4px
  .comment-reply
    overflow hidden
    .reply-input
      margin 4px 0
    .reply-icon
      display flex
      align-items center
      cursor pointer
      user-select none
      color #3361d8
      width 3rem
      opacity 0
      transition all .2s
      .icon
        font-size 1rem
    .comment-button
      margin 4px
      float right
  &:hover
    .comment-reply .reply-icon
      opacity 1

@media screen and (max-width: 768px)
  .post-detail-container
    .post-detail
      .comment-area
        .comments
          .comment-tree >>>
            >.tree-node-container
              padding 10px 0
              .comment-root
                .img
                  img
                    height 30px
                    width 30px
                .text
                  padding-left 0
                  .title
                    line-height 30px
                    .name
                      margin-left 20px
              .reply-comment
                padding-left 0
                .comment-content
                  margin-left 0
    // .comment-content

</style>

