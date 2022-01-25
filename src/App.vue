<template>
  <v-app>
    <v-app-bar density="compact" color="primary">
      <v-app-bar-title>Blog</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn
        variant="outlined"
        class="nav-btn mr-1"
        selected-class="active"
        :to="{ name: 'home' }"
        border="false"
      >
        Home
      </v-btn>
      <v-btn variant="outlined" class="nav-btn mr-1" :to="{ name: 'blogs' }">
        Blogs
      </v-btn>
      <v-btn variant="outlined" class="nav-btn mr-2" :to="{ name: 'about' }">
        About
      </v-btn>
      <v-divider vertical></v-divider>
      <v-btn variant="outlined" class="ml-2 nav-btn">
        <v-icon left icon="mdi-account-circle-outline"></v-icon>
        <span>Alexander Stüben</span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-btn {
  color: white;
  border-color: transparent;
}
.nav-btn.v-btn--active {
  border-color: white;
}
</style>
