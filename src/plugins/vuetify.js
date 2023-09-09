/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#778DA9",
          secondary: "#415A77",
          accent: "#0D1B2A",
          info: "#2F3E46",
          background: "#E0E1DD"
        },
      },
    },
  },
});
