<template>
  <div>
    <slot v-if="userinfo" :userinfo="userinfo"></slot>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  computed: {
    userinfo () {
      return this.$store.state.user.info[this.userId] || null
    }
  },
  watch: {
    userId: {
      immediate: true,
      handler () {
        this.refreshInfo()
      }
    }
  },
  methods: {
    ...mapActions({
      getInfo: 'user/getInfo'
    }),
    refreshInfo () {
      this.userId && this.getInfo({ id: this.userId })
    }
  }
}
</script>
