import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    timing: false,
  },
  modules: ["@nuxtjs/tailwindcss"],
  compilerOptions: {
    isCustomElement: (tag) => {
      return tag.startsWith("Nuxt");
    },
  },
});
