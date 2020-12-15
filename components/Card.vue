<template>
  <div class="gutter-wrap">
    <div class="title" v-if="title">{{ title }}</div>
    <a-row :gutter="16">
      <a-col
        class="gutter-row"
        :span="8"
        v-for="(item, index) of list"
        :key="index"
        @click="toDetail(item, index)"
      >
        <div class="gutter-box" :style="styles">
          <div class="row-title">
            {{ item.title }}
          </div>
          <p class="desc">
            {{ item.desc }}
          </p>
          <p class="time">{{ item.date }}</p>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "标题"
    },
    styles: {
      type: Object,
      default: () => ({
        height: "287px",
        margin: ""
      })
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    toDetail(item, index) {
      this.$router.push({
        path: `newsdetail/${index}`,
        query: {
            source: !item.isJump ? 'home' : 'news'
          }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.gutter-wrap {
  width: 1190px;
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
    /* height: 287px; */
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
}
.gutter-wrap >>> .ant-row > div {
  background: transparent;
  border: 0;
}
</style>
