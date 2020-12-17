<template>
  <div>
    <p>页面参数：{{ $route.params }}</p>
    <pre>
      {{ post }}
    </pre>
  </div>
</template>
<script>
export default {
  layout: "posts",
  scrollToTop: true,
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },
  head() {
    return {
      title: "posts"
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  async asyncData({ params, $axios, error }) {
    const id = params.id;

    try {
      const post = await $axios.$get(`https://api.nuxtjs.dev/posts/${id}`);
      return { post };
    } catch (e) {
      error(e); // Show the nuxt error page with the thrown error
    }
  }
};
</script>
