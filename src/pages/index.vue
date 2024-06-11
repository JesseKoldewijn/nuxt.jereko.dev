<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const headers = useRequestHeaders();
const host = headers["host"];
const proto = headers["x-forwarded-proto"] || "http";
const hostBase = host ? `${proto}://${host}` : "http://localhost";

const reqUrl = new URL(route.fullPath, hostBase);

useSeoMeta({
	title: "Nuxt Jereko",
	description:
		"This project is a basic but solid project using Nuxt.js 3.x that also uses TailwindCSS, ShadCN/ui and some other great nice 2 haves.",
	ogTitle: "Nuxt Jereko",
	ogDescription:
		"This project is a basic but solid project using Nuxt.js 3.x that also uses TailwindCSS, ShadCN/ui and some other great nice 2 haves.",
	// ogImage: "[og:image]",
	ogUrl: reqUrl.href,
	twitterTitle: "Nuxt Jereko",
	twitterDescription:
		"This project is a basic but solid project using Nuxt.js 3.x that also uses TailwindCSS, ShadCN/ui and some other great nice 2 haves.",
	// twitterImage: "[twitter:image]",
	twitterCard: "summary",
});

useHead({
	htmlAttrs: {
		lang: "en",
	},
	link: [
		{
			rel: "icon",
			type: "image/ico",
			href: "/favicon.ico",
		},
	],
});
</script>

<template>
	<div>
		<p>Current route: {{ route.path }}</p>
		<a href="/about">About</a>
	</div>
</template>
