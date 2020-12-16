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
        北京一览科技有限公司创建于2017年，是医药类综合网站。作为互联网的先行者，医药网依托诚信的作风和强大的技术优势，凭借丰富的用户资源，已经成为医药媒体领域中传播力和影响力较强的网络专业媒体平台之一。
      </div>
      <div class="about-wrap__box--list">
        <p>建网目的</p>
        <p>1．服务于医药行业：提供实用的（商业、专业）信息发布、交流及检索平台；</p>
        <p>2．服务于老百姓：提供健康信息和基础医药知识，并就某些产品质量作出警示；</p>
        <p>3．服务于政府：提供政策法规宣传、普及和扩大相关公告通报的影响。</p>
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
    &--list{
      margin-top: 50px;
    }
  }
}
</style>
