<script setup lang="ts">

onMounted(() => {
  console.log('Nuxt startup !!!')
})

interface RandomUser {
  results: Result[];
  info: Info;
}

interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

interface Result {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Dob;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: string;
}

interface Dob {
  date: Date;
  age: number;
}

interface ID {
  name: string;
  value: string;
}

interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Street {
  number: number;
  name: string;
}

interface Timezone {
  offset: string;
  description: string;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

const { data } = await useFetch('https://randomuser.me/api')

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
  <!-- <NuxtWelcome /> -->
  <!-- <Title>Home</Title> -->
  <!-- <ul>
    <li v-for="result in results" :key="result.id">
      {{ result.name }}
    </li>
  </ul> -->
  {{ data }}
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