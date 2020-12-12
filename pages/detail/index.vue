<template>
  <div>{{ $route.query.id }}</div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$route.query);
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
};
</script>
