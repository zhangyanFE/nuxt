import Vue from "vue";
import { Layout, Menu, Row, Col } from "ant-design-vue";
const { Item } = Menu;

const { Header, Footer, Content } = Layout;
Vue.use(Layout).use(Header).use(Footer).use(Content).use(Menu).use(Item).use(Row).use(Col);
