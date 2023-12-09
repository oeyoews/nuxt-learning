<script setup lang="ts">
import type { User } from '~/types/user'

const counter = useState('count', () => Math.random() * 100)

onMounted(() => {
  console.log('Nuxt startup !!!')
})

// @ts-ignore
const { data }: { data: User[] } = await useFetch('https://jsonplaceholder.typicode.com/users')

useHead({
  title: 'Nuxt HomePage',
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : 'Site Title';
  },
  meta: [
    { name: 'description', content: 'Home page' }
  ]
})

useSeoMeta({
  title: 'Nuxt HomePage',
  ogTitle: 'Nuxt HomePage',
  ogDescription: 'Home page',
  // ogImage: '',
  // twitterCard: 'summary_large_image',
  // twitterTitle: 'Nuxt HomePage',
  // twitterDescription: 'Home page',
  // twitterImage: 'https://nuxt.com/assets/og.png'
})

</script>

<template>
  <h2>List Render</h2>
  <li v-for="item in data" :key="item.id">
    {{ item.name }} |
    {{ item.username }}
  </li>
  {{ counter }}
  <button @click="counter++">++</button>
  <button @click="counter--">--</button>
  <div>
    <NuxtLink to="/about">
      About
    </NuxtLink>
    <NuxtLink to="/posts/1">
      Post
    </NuxtLink>
  </div>
  <Test class="font-bold">
    Test component
  </Test>
</template>