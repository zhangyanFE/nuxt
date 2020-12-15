<!--
 * @Author: your name
 * @Date: 2020-12-11 17:53:11
 * @LastEditTime: 2020-12-11 17:53:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yilan_nuxt/pages/about.vue
-->
<template>
  <div class="about-wrap">
    <div class="about-wrap__box">
      <div class="about-wrap__box--title">关于我们</div>
      <div class="about-wrap__box--desc">
        北京一览科技有限公司出资组建的网站，公司依托先进的网络研发技术及专业设计制作团队，致力于为中国各行业企业和人士提供专业的了解医药常识的网站。
        一览科技网以遵寻为用户了了解日常养生基本常识为目标进行努力不懈推动。
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "关于我们"
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
.about-wrap {
  background: #f7f7f7;
  padding-top: 40px;
  padding-bottom: 10px;
  &__box {
    width: 900px;
    height: 702px;
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
      padding-bottom: 30px;
    }
    &--desc {
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      line-height: 30px;
    }
  }
}
</style>
