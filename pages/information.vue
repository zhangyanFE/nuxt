<!--
 * @Author: your name
 * @Date: 2020-12-11 17:52:28
 * @LastEditTime: 2020-12-11 17:52:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yilan_nuxt/pages/information.vue
-->
<template>
  <div>信息中心</div>
</template>
<script>
export default {
  head() {
    return {
      title: '信息中心'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
}
</script>