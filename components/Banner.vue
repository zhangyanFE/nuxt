<!--
 * @Author: your name
 * @Date: 2020-12-11 18:45:10
 * @LastEditTime: 2020-12-11 18:45:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yilan_nuxt/components/Banner.vue
-->

<template>
  <div class="wrap-banner">
    <div class="banner">
      <p>帮助你了解最新的医药 新闻，保健小知识</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 488px;
  background: url("~assets/images/banner_bg.png") no-repeat;
  background-size: contain;
  margin: 0 auto;
  p {
    width: 660px;
    height: 184px;
    font-size: 66px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    text-align: left;
    color: #0063cb;
    position: relative;
    top: 156px;
    left: 40px;
  }
}

@media screen and (min-width: 1560px) {
  .banner {
    width: 1190px;
    p {
      font-size: 55px;
      top: 114px;
    }
  }
}
</style>
