import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.deepPurple.darken3,
        secondary: colors.yellow.accent3,
        accent: '#df3799',
        success: colors.green.accent4,
      },
      dark: {
        primary: colors.deepPurple.base,
        secondary: colors.orange.base,
        accent: '#df3799',
      },
    },
  },
});
