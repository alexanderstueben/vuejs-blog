<template>
  <div class="content">
    <h1>Meine Blogs</h1>
    <div class="blog-container" v-if="blogs.length">
      <v-card v-for="blog in blogs" :key="blog.id">
        <v-card-header>
          <v-card-header-text>
            <v-card-title>{{ blog.title }}</v-card-title>
            <v-card-subtitle>{{ blog.description }}</v-card-subtitle>
          </v-card-header-text>
        </v-card-header>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BlogService from '@/services/BlogService';
import { Blog } from '@/types/Blog';

@Options({})
export default class AboutView extends Vue {
  blogs: Blog[] = [];

  async mounted() {
    this.blogs = (await BlogService.getAll()).data;
  }
}
</script>

<style lang="scss">
.content {
  padding: 1rem;
}
.blog-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: -0.5rem;
  margin-top: 1rem;
}
.blog-container .v-card {
  flex: 0 0 calc(33% - 1rem);
  margin: 0.5rem;
}
</style>
