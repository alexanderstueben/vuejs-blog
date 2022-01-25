// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Vuetify
import { createVuetify } from 'vuetify';

export default createVuetify({
  theme: {
    defaultTheme: 'myLightTheme',
    themes: {
      myLightTheme: {
        dark: false,
        colors: {
          background: '#EEE',
          surface: '#FFFFFF',
          primary: '#FF1493',
          secondary: '#FF69B4',
          error: '#FF0000',
          info: '#0000FF',
          success: '#00FF00',
          warning: '#FFFF00'
        },
        variables: {}
      }
    }
  }
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
