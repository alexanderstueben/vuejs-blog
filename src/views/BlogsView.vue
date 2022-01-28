<template>
  <div class="content">
    <div v-if="blogs.length" class="blog-wrapper">
      <v-card
        :to="{ name: 'blog', params: { id: blog.id } }"
        class="card"
        v-for="blog in blogs"
        :key="blog.id"
      >
        <v-img
          class="blog-image"
          :src="'https://picsum.photos/1920/1080?random=' + blog.id"
        ></v-img>
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
.blog-image {
  background-size: cover;
}
.blog-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 1rem;
}
</style>
