<!--
 * @Author: your name
 * @Date: 2020-12-11 17:52:28
 * @LastEditTime: 2020-12-11 17:52:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yilan_nuxt/pages/information.vue
-->
<template>
  <div class="infomation-wrap">
    <div class="info info-title">信息报告</div>
    <div class="info info-desc">
      我公司一直与国内多家医疗结构战略合作，收集临床预防、诊断、治疗或调节生理功能的正常用量下出现有害和意外反应，通过医院药剂科检测员我公司一直与国内多家医疗结构战略合作，收集临床预防、诊断、治疗或调节生理功能的正常用量下出现有害和意外反应，通过医院药剂科检测员
    </div>
    <div class="info-card">
      <a-row :gutter="16">
        <a-col
          class="gutter-row"
          :span="8"
          v-for="(item, index) of list"
          :key="index"
          @mouseover="handleItem(item, 1)"
          @mouseleave="handleItem(item, 2)"
        >
          <div class="gutter-box">
            <div class="row-title">
              {{ item.title }}
            </div>
            <p class="img">
              <!-- {{ item.desc }} -->
              <img :src="item.img" :alt="item.title" />
            </p>
            <!-- <p class="payinfo">{{ item.payinfo }}</p> -->
            <div class="mask-box" v-if="item.isActive">
              <div class="mask-title">{{ item.title }}</div>
              <div class="mask-qrcode">二维码</div>
              <div class="mask-bottom">
                <p class="qrcode-info">扫码付费观看</p>
                <p class="qrcode-pay">{{ item.payinfo }}</p>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import { InfoData } from "@/pages/data";

export default {
  data() {
    return {
      list: InfoData(),
      isActive: false
    };
  },
  head() {
    return {
      title: "信息报告"
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  methods: {
    handleItem(item, type) {
      if (type == 1) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.infomation-wrap {
  width: 1190px;
  margin: 0 auto;
  .info {
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    color: #3f3f3f;
    line-height: 20px;
    &.info-title {
      margin-top: 10px;
    }
    &.info-desc {
      margin: 17px 0 36px 0;
    }
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
    height: 510px;
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
    .img {
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #3f3f3f;
      line-height: 24px;
      padding: 0 15px;
      img {
        display: block;
        width: 100%;
        overflow: hidden;
      }
    }
    .payinfo {
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #0063cb;
      line-height: 20px;
      position: absolute;
      bottom: -5px;
      left: 15px;
    }
  }
  .gutter-wrap >>> .ant-row > div {
    background: transparent;
    border: 0;
  }
  /* 弹窗 */
  .mask-box {
    position: absolute;
    top: 0;
    left: 0;
    height: 510px;
    background: #ffffff;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.32);
    .mask-title {
      font-size: 20px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      color: #3f3f3f;
      line-height: 28px;
      padding: 0 15px;
      margin-top: 23px;
      margin-bottom: 45px;
    }
    .mask-qrcode {
      width: 244px;
      height: 244px;
      background: url("https://static.1lan.tv/Transformers/yilan-web/images/pay-qrcode.png")
        #f9f9f9 no-repeat;
      background-size: 244px auto;
      margin: 0 auto;
      line-height: 244px;
      text-align: center;
      padding-bottom: 41px;
      color: #ffffff;
      text-indent: -9999px;
    }
    .mask-bottom {
      margin-top: 40px;
      text-align: center;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;

      .qrcode-info {
        color: #868686;
      }
      .qrcode-pay {
        color: #0063cb;
      }
    }
  }
}
</style>
