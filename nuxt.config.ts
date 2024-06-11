// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	srcDir: "src/",
	components: ["components", "layouts"],
	devtools: { enabled: process.env.NODE_ENV == "development" },
});
