<!--
 * @Author: your name
 * @Date: 2020-12-11 17:49:34
 * @LastEditTime: 2020-12-11 17:49:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yilan_nuxt/pages/product.vue
-->
<template>
  <div class="product-wrap">
    <div class="product-title">产品中心</div>
    <div class="product-card">
      <a-row :gutter="16">
        <a-col
          class="gutter-row"
          :span="8"
          v-for="(item, index) of list"
          :key="index"
          @click="toDetail(index)"
        >
          <div class="gutter-box">
            <img :src="item.img" :alt="item.title" />
            <div class="title">{{ item.title }}</div>
            <div class="more">{{ item.more }}</div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import { ProductData } from "@/pages/data";

import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      list: ProductData()
    };
  },
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
  },
  methods: {
    toDetail(index:any) {
      this.$router.push(`productdetail/${index}`);
    }
  }
});
</script>
<style lang="scss" scoped>
.product-wrap {
  width: 1190px;
  margin: 0 auto;
  .product-title {
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    color: #3f3f3f;
    line-height: 20px;
    margin-top: 15px;
    margin-bottom: 26px;
  }
  .ant-row {
    margin-left: 0 !important;
    margin-right: 0 !important;
    .gutter-row {
      padding-left: 0 !important;
      padding-right: 30px !important;
      margin-bottom: 30px;
    }
  }
  .gutter-box {
    position: relative;
    height: 265px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    padding: 23px 0 13px 0;
    cursor: pointer;
    img {
      display: block;
      height: 150px;
      margin: 0 auto;
      background: #999;
    }
    .title {
      font-size: 20px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: center;
      color: #3f3f3f;
      line-height: 28px;
    }
    .more {
      width: 123px;
      height: 31px;
      line-height: 31px;
      border: 1px solid #b2b2b2;
      margin: 12px auto;
      text-align: center;
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      color: #387cff;
    }
  }
  .gutter-wrap >>> .ant-row > div {
    background: transparent;
    border: 0;
  }
}
</style>
