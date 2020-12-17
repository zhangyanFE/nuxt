<!--
 * @Author: your name
 * @Date: 2020-12-16 18:17:10
 * @LastEditTime: 2020-12-16 18:22:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yilan_nuxt/pages/example.vue
-->
<template>
  <div>
    <div>{{ content }}</div>
    <button @click="refresh">Refresh</button>
    <p>Path: {{ $route.path }}</p>
    <NuxtLink to="/">Back to Mountains</NuxtLink>
    <ul>
      <li v-for="(item, index) of mountains" :key="index">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: context => {
    return "example";
  },
  data() {
    return {
      content: "",
      mountains: []
    };
  },
  head() {
    return {
      title: "Nuxt Api",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ],
      link: []
    };
  },
  middleware: "example",
  //   transition: "",
  //   transition: {},
  //   transition(to, from) {},
  created() {
    console.log("created");
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  async asyncData({ params, redirect }) {
    const mountains = await fetch(
      "https://api.nuxtjs.dev/mountains"
    ).then(res => res.json());
    return {
      mountains,
      content: "Created at: " + new Date()
    };
  },
  methods: {
    refresh() {
      this.$nuxt.refresh();
    }
  }
};
</script>
