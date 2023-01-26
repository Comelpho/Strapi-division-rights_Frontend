import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/styles/main.scss"],
  ssr: true,

  components: {
    dirs: ["~/components"],
  },
});
