import { version } from './package.json'
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '药品网站',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://img.yilan.tv/favicon.ico' }
    ]
  },
  generate: {
    routes: [
      '/newsdetail/0',
      '/newsdetail/1',
      '/newsdetail/2',
      '/newsdetail/3',
      '/newsdetail/4',
      '/newsdetail/5',
      '/newsdetail/6',
      '/newsdetail/7',
      '/newsdetail/8',
      '/newsdetail/9',
      '/newsdetail/10',
      '/newsdetail/11',
      '/productdetail/0',
      '/productdetail/1',
      '/productdetail/2',
      '/productdetail/3',
      '/productdetail/4',
      '/productdetail/5',
    ]
  },
  // router: {
  //   trailingSlash: false
  // },
  loading: {
    color: '#1890ff',
    height: '2px',
    continuous: true
  },
  // loading: '~/components/LoadingBar.vue',
  transition: {
    name: 'layout',
    mode: 'out-in'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // 'ant-design-vue/dist/antd.css'
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/antd-ui'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: `https://static.yladm.com/Transformers/yilan-web/${version}/`,
    filenames: {
      css: ({ isDev }) => (isDev ? "[name].js" : "[name].[contenthash:7].css"),
      app: ({ isDev }) => (isDev ? "[name].js" : "[name].[contenthash:7].js"),
      chunk: ({ isDev }) => (isDev ? "[name].js" : "[name].[contenthash:7].js")
    },
    // extractCSS: process.env.NODE_ENV == "development" ? false : true, // 提取css到独立文件
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: undefined,
        cacheGroups: {}
      }
    },
    loaders: {
      less: {
        javascriptEnabled: true
      }
    },
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'es',
            style: true,
          }
        ]
      ]
    },
    transpile: [/ant-design-vue/],
  }
}
