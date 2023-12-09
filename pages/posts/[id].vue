<script setup lang="ts">

const route = useRoute()
const { id } = route.params;

definePageMeta({
  // @ts-ignore
  validate: async (route: { params: { id: string } }) => {
    // Check if id is composed of digits
    return /^\d+$/.test(route.params.id)
  }
})

useHead({
  title: `Post ${id}`,
  meta: [
    { name: 'description', content: "post" },
  ]
})

useSeoMeta({
  title: `Post ${id}`,
  ogTitle: `Post ${id}`,
  ogDescription: "post",
  // ogImage: '',
  // twitterCard: 'summary_large_image',
  // twitterTitle: 'Nuxt HomePage',
  // twitterDescription: 'Home page',
  // twitterImage: 'https://nuxt.com/assets/og.png'
})

</script>

<template>
  current id is {{ id }}
</template>