import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import masonry from 'vue-next-masonry';
import { loadFonts } from './plugins/webfontloader';

loadFonts();

createApp(App).use(router).use(vuetify).use(masonry).mount('#app');
