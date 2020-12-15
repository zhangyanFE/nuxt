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
    <div class="crumbs" v-if="detail.detailInfo">
      产品中心 > {{ detail.detailInfo.title }}
    </div>
    <div class="shop-box" v-if="detail.detailInfo">
      <div class="shop-img">
        <img :src="detail.detailInfo.img" :alt="detail.detailInfo.title" />
      </div>
      <div class="shop-detail">
        <div class="shop-detail--title">{{ detail.detailInfo.title }}</div>
        <div class="shop-detail--subtitle">
          {{ detail.detailInfo.subtitle }}
        </div>
        <div class="shop-detail--info">
          <p class="shop-detail--info__item">
            <span>通用名称：</span>{{ detail.detailInfo.productname }}
          </p>
          <p class="shop-detail--info__item">
            <span>产品编号：</span>{{ detail.detailInfo.productnum }}
          </p>
          <p class="shop-detail--info__item">
            <span>批准文号：</span>{{ detail.detailInfo.productdnum }}
          </p>
          <p class="shop-detail--info__item">
            <span>产品规格：</span>{{ detail.detailInfo.productspec }}
          </p>
          <p class="shop-detail--info__item">
            <span>生产厂家：</span>{{ detail.detailInfo.productmanu }}
          </p>
        </div>
      </div>
    </div>
    <div class="shopintr-box">
      <div class="product-title">商品介绍</div>
      <div class="shopintr-info">
        <div class="shopintr-info--item">
          <div class="shopintr-info--item__title">产品名称</div>
          <div class="shopintr-info--item__text">
            {{ detail.productintr.name }}
          </div>
        </div>
        <div class="shopintr-info--item">
          <div class="shopintr-info--item__title">主要原料</div>
          <div class="shopintr-info--item__text">
            {{ detail.productintr.raw }}
          </div>
        </div>
        <div class="shopintr-info--item">
          <div class="shopintr-info--item__title">主要作用</div>
          <div class="shopintr-info--item__text">
            {{ detail.productintr.effect }}
          </div>
        </div>
        <div class="shopintr-info--item">
          <div class="shopintr-info--item__title">产品规格</div>
          <div class="shopintr-info--item__text">
            {{ detail.productintr.dnum }}
          </div>
        </div>
        <div class="shopintr-info--item">
          <div class="shopintr-info--item__title">用法用量</div>
          <div class="shopintr-info--item__text">
            {{ detail.productintr.cons }}
          </div>
        </div>
        <div class="shopintr-info--item">
          <div class="shopintr-info--item__title">生产企业</div>
          <div class="shopintr-info--item__text">
            {{ detail.productintr.enterprise }}
          </div>
        </div>
      </div>
    </div>
    <div class="instr-box">
      <div class="product-title">说 明 书</div>
      <div class="instr-list">
        <template v-if="detail.instructions.type == 'text'">
          <p v-for="(item, index) in detail.instructions.list" :key="index">
            {{ item }}
          </p>
        </template>
        <template v-else>
          <img
            v-for="(item, index) in detail.instructions.list"
            :key="index"
            :src="item"
            :alt="`product_${index}`"
          />
        </template>
      </div>
    </div>
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
    this.detail = ProductData()[this.$route.params.id].detail;
  },
  mounted() {
    // this.detail = ProductData()[this.$route.params.id].detail;
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
    .shop-img {
      width: 400px;
      height: 294px;
      background: #ffffff;
      border: 1px solid #e5e5e5;
      position: relative;
      img {
        height: 244px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .shop-detail {
      margin-left: 47px;
      &--title {
        font-size: 20px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        color: #3f3f3f;
        line-height: 28px;
      }
      &--subtitle {
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #3f3f3f;
        line-height: 20px;
        padding: 10px 0 30px 0;
      }
      &--info {
        &__item {
          span {
            font-size: 14px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #a4a4a4;
          }
        }
      }
    }
  }
  .shopintr-box {
    width: 850px;
    .shopintr-info {
      border: 1px solid #e5e5e5;
      margin-top: 30px;
      &--item {
        display: flex;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        font-size: 14px;
        &:not(:last-child) {
          border-bottom: 1px solid #e5e5e5;
        }

        &__title {
          width: 141px;
          padding: 12px 0;
          color: #323232;
          text-align: center;
          background: #f7f7f7;
          border-right: 1px solid #e5e5e5;
        }
        &__text {
          width: 709px;
          color: #666666;
          padding: 12px 0 12px 23px;
        }
      }
    }
  }
  .instr-box {
    margin-top: 46px;
    margin-bottom: 100px;
    .instr-list {
      margin-top: 30px;
      p {
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        color: #666666;
      }
      img {
        width: 100%;
        display: block;
      }
    }
  }
  .product-title {
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    color: #0063cb;
    line-height: 22px;
    position: relative;
    &::after {
      position: absolute;
      left: 0;
      bottom: -8px;
      content: "";
      width: 63px;
      height: 3px;
      background: #0063cb;
    }
  }
}
</style>
