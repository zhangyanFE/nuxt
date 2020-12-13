<!--
 * @Author: your name
 * @Date: 2020-12-11 18:00:12
 * @LastEditTime: 2020-12-11 18:00:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yilan_nuxt/pages/news.vue
-->
<template>
  <div class="news-wrap">
    <Card title="新闻中心" :list="list" />
  </div>
</template>
<script>
import { NewsData } from "@/pages/data";

export default {
  data() {
    return {
      list: NewsData()
    };
  },
  head() {
    return {
      title: "新闻中心"
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
};
</script>
<style lang="scss" scoped>
.news-wrap{
  margin-top: 40px;
}
</style>
