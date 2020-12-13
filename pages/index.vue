<!--
 * @Author: your name
 * @Date: 2020-12-11 17:22:09
 * @LastEditTime: 2020-12-11 18:45:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yilan_nuxt/pages/index.vue
-->
<template>
  <div class="container">
    <div>
      <Banner />
      <div class="gutter-wrap">
        <Card title="医药新闻" :list="list" :styles="{ height: '287px' }" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { HomeData } from "@/pages/data";

export default Vue.extend({
  data() {
    return {
      list: HomeData()
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

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  /* margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}

.gutter-wrap {
  padding-bottom: 70px;
}
</style>
