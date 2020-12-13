<template>
  <div class="news-wrap">
    <div class="news-wrap__box">
      <div class="news-wrap__box--title">{{ detailInfo.title }}</div>
      <div class="news-wrap__box--source">{{ detailInfo.source }}</div>
      <div class="news-wrap__box--article">
        <p v-for="(item, index) of detailInfo.article" :key="index">
          {{ item }}
        </p>
      </div>
      <p class="news-wrap__box--statement">{{ detailInfo.statement }}</p>
    </div>
  </div>
</template>
<script>
import { NewsData } from "@/pages/data";

export default {
  data() {
    return {
      detailInfo: {}
    };
  },
  mounted() {
    this.detailInfo = NewsData()[this.$route.query.id].detail;
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
};
</script>
<style lang="scss" scoped>
.news-wrap {
  background: #f7f7f7;
  padding-top: 40px;
  padding-bottom: 10px;
  &__box {
    width: 900px;
    /* height: 702px; */
    background: #ffffff;
    border: 1px solid #e5e5e5;
    color: #3f3f3f;
    margin: 0 auto;
    padding: 30px 44px 0 44px;
    &--title {
      font-size: 28px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      line-height: 40px;
      padding-bottom: 25px;
    }
    &--source {
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      color: #999999;
      line-height: 20px;
      margin-bottom: 20px;
    }
    &--article {
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      line-height: 30px;
    }
    &--statement {
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      color: #999999;
      line-height: 40px;
    }
  }
}
</style>
