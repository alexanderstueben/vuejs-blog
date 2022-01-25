<template>
  <div class="home">
    <v-card>
      <v-card-header>
        <v-card-header-text>
          <v-card-title>Home</v-card-title>
        </v-card-header-text>
      </v-card-header>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
