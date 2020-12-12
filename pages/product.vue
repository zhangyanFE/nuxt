<!--
 * @Author: your name
 * @Date: 2020-12-11 17:49:34
 * @LastEditTime: 2020-12-11 17:49:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yilan_nuxt/pages/product.vue
-->
<template>
  <div>产品中心</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  head() {
    return {
      title: "产品中心"
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
});
</script>
