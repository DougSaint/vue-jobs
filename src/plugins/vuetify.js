/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
import { VInfiniteScroll } from 'vuetify/labs/VInfiniteScroll'
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";

import { createVuetify } from "vuetify";

export default createVuetify({
  components: {
    VSkeletonLoader,
    VDataTable,
    VDataTableServer,
    VDataTableVirtual,
    VInfiniteScroll,
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#778DA9",
          secondary: "#415A77",
          accent: "#0D1B2A",
          info: "#2F3E46",
          background: "#E0E1DD",
        },
      },
    },
  },
});
