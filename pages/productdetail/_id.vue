<!--
 * @Author: your name
 * @Date: 2020-12-15 10:19:54
 * @LastEditTime: 2020-12-15 10:52:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yilan_nuxt/pages/productdetail/_id.vue
-->
<template>
  <div class="productdetail-wrap">
    <div class="crumbs" v-if="detail.detailInfo">产品中心 > {{ detail.detailInfo.title }}</div>
    <div class="shop-box" v-if="detail.detailInfo">
      <img :src="detail.detailInfo.img" :alt="detail.detailInfo.title" />
      <div class="shop-detail">
        <div class="shop-detail--title">{{ detail.detailInfo.title }}</div>
        <div class="shop-detail--subtitle">
          {{ detail.detailInfo.subtitle }}
        </div>
        <div class="shop-detail--info">
          <div class="shop-detail--info__item">
            通用名称：{{ detail.detailInfo.productname }}
          </div>
          <div class="shop-detail--info__item">
            产品编号：{{ detail.detailInfo.productnum }}
          </div>
          <div class="shop-detail--info__item">
            批准文号：{{ detail.detailInfo.productdnum }}
          </div>
          <div class="shop-detail--info__item">
            产品规格：{{ detail.detailInfo.productspec }}
          </div>
          <div class="shop-detail--info__item">
            生产厂家：{{ detail.detailInfo.productmanu }}
          </div>
        </div>
      </div>
    </div>
    <div class="shopintr-box"></div>
  </div>
</template>
<script>
import { ProductData } from "@/pages/data";

export default {
  data() {
    return {
      detail: {}
    };
  },
  created() {
    if (process.client) {
    }
  },
  mounted() {
    this.detail = ProductData()[this.$route.params.id].detail;
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
};
</script>
<style lang="scss" scoped>
.productdetail-wrap {
  width: 1190px;
  margin: 0 auto;
  .crumbs {
    margin-top: 20px;
  }
  .shop-box {
    display: flex;
    margin: 26px 0 42px 0;
    img {
      width: 400px;
      height: 294px;
      background: #ffffff;
      border: 1px solid #e5e5e5;
    }
    .shop-detail {
      margin-left: 47px;
    }
  }
}
</style>
