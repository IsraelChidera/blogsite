<template>
  <div>
    <router-view></router-view>
  </div>
</template> 

<script>
import addBlog from './components/addBlog.vue'
import showBlog from './components/showBlog.vue'
import listBlogs from './components/listBlogs.vue'

export default {

  components: {
    addBlog,
    showBlog,
    listBlogs
  }
}
</script>

<style scoped>

</style>
