<!--
 * @Author: your name
 * @Date: 2020-12-11 17:22:09
 * @LastEditTime: 2020-12-11 18:40:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yilan_nuxt/layouts/default.vue
-->
<template>
  <div>
    <a-layout id="components-layout-demo-top" class="layout">
      <a-layout-header>
        <div class="logo" />
        <a-menu
          theme="light"
          mode="horizontal"
          :default-selected-keys="[$route.path]"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item :key="'/'">
            <NuxtLink to="/">首页</NuxtLink>
          </a-menu-item>
          <a-menu-item :key="'/product'">
            <NuxtLink to="/product">产品中心</NuxtLink>
          </a-menu-item>
          <a-menu-item :key="'/news'">
            <NuxtLink to="/news">新闻中心</NuxtLink>
          </a-menu-item>
          <a-menu-item :key="'/information'">
            <NuxtLink to="/information">信息报告</NuxtLink>
          </a-menu-item>
          <a-menu-item :key="'/about'">
            <NuxtLink to="/about">关于我们</NuxtLink>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content :class="[$route.path !== '/' && 'mt']">
        <Nuxt />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        北京一览科技有限公司 《互联网药品信息服务资格证书》的证书编号：(京)-经营性-2020-0110
        联系我们：010-87538769
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.path);
  }
};
</script>
<style lang="scss">
$logo: "~assets/images/logo.png";

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.logo {
  width: 120px;
  height: 32px;
  background: url($logo) no-repeat;
  margin: 16px 28px 16px 0;
  float: left;
}
.layout {
  position: relative;
  background: #fff !important;
  .ant-menu {
    background: transparent;
  }
  .ant-layout-header {
    background: transparent;
    position: absolute;
    right: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    margin: 0 auto;
    .ant-menu-horizontal {
      border-bottom: 1px solid transparent;
      .ant-menu-item-selected,
      .ant-menu-item-active {
        border-bottom: 2px solid transparent;
        a {
          color: #0063cb;
        }
      }
      .ant-menu-item-selected {
        a {
          font-weight: bold;
        }
      }
    }
  }
  .ant-layout-content{
    margin-bottom: 70px;
  }
  .ant-layout-footer {
    background: #f7f7f7;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
  @media screen and (min-width: 1560px) {
    .ant-layout-header {
      width: 1190px;
    }
  }
  .mt {
    margin-top: 64px;
  }
}
</style>
