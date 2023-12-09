<script setup lang="ts">

onMounted(() => {
  console.log('Nuxt startup !!!')
})

const { data }: { data: User[] } = await useFetch('https://jsonplaceholder.typicode.com/users')
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}


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