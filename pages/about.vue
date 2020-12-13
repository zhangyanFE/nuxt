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
        我们是一支专注于视频15年的专业团队。从2005年兴起的长视频，到现在全网最红的短视频和小视频行业，我们的团队全部参与，从中积累了丰富的内容、算法和变现的经验。我们在视频产业的全部环节都有专业的团队和深厚的积累，包含内容签约、内容机器+人工审核、视频语义理解、视频播放平台、智能推荐系统、视频广告、视频带货等等环节。我们希望用专业的视频能力赋能每个企业，每个组织，每个人为用户提供更好的视频服务。在视频互联网时代，让视频无所不在！
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
