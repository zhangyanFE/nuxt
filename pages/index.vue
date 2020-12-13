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
      <div class="gutter-example">
        <div class="title">医药新闻</div>
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="8">
            <div class="gutter-box">
              <div class="row-title">
                科济生物CT053全人抗BCMA CAR T细胞注射液纳入突破性治疗品种
              </div>
              <p class="desc">
                12月8日，科济生物宣布，其CT053全人抗BCMA自体CAR
                T细胞注射液通过CDE公示期，纳入突破性治疗药物品种，拟定适应症为复发难治性多发性骨髓瘤(R/R
                MM)。宣布，其CT053全人抗BCMA自体CAR
                T细胞注射液通过CDE公示期，纳入突破性治疗
              </p>
              <p class="time">2020-12-09 15:12</p>
            </div>
          </a-col>
          <a-col class="gutter-row" :span="8">
            <div class="gutter-box">
              <div class="row-title">
                科济生物CT053全人抗BCMA CAR T细胞注射液纳入突破性治疗品种
              </div>
              <p class="desc">
                12月8日，科济生物宣布，其CT053全人抗BCMA自体CAR
                T细胞注射液通过CDE公示期，纳入突破性治疗药物品种，拟定适应症为复发难治性多发性骨髓瘤(R/R
                MM)。宣布，其CT053全人抗BCMA自体CAR
                T细胞注射液通过CDE公示期，纳入突破性治疗
              </p>
              <p class="time">2020-12-09 15:12</p>
            </div>
          </a-col>
          <a-col class="gutter-row" :span="8">
            <div class="gutter-box">
              <div class="row-title">
                科济生物CT053全人抗BCMA CAR T细胞注射液纳入突破性治疗品种
              </div>
              <p class="desc">
                12月8日，科济生物宣布，其CT053全人抗BCMA自体CAR
                T细胞注射液通过CDE公示期，纳入突破性治疗药物品种，拟定适应症为复发难治性多发性骨髓瘤(R/R
                MM)。宣布，其CT053全人抗BCMA自体CAR
                T细胞注射液通过CDE公示期，纳入突破性治疗
              </p>
              <p class="time">2020-12-09 15:12</p>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
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

.links {
  padding-top: 15px;
}

.gutter-example {
  width: 90%;
  margin: 0 auto;
  .title {
    width: 56px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 700;
    text-align: left;
    color: #3f3f3f;
    line-height: 20px;
  }
}

.gutter-example {
  .ant-row {
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin: 26px auto 82px auto;
    .gutter-row {
      padding-left: 0 !important;
      padding-right: 30px !important;
    }
  }
}
.gutter-example >>> .ant-row > div {
  background: transparent;
  border: 0;
}
.gutter-box {
  position: relative;
  height: 287px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  padding: 23px 0 13px 0;
  .row-title {
    font-size: 20px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    color: #3f3f3f;
    line-height: 28px;
    padding: 0 15px;
    margin-bottom: 16px;
  }
  .desc {
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    color: #3f3f3f;
    line-height: 24px;
    padding: 0 15px;
  }
  .time {
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    color: #b0b0b0;
    line-height: 20px;
    position: absolute;
    bottom: -5px;
    left: 15px;
  }
}
</style>
