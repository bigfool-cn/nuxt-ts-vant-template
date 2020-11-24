
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-ts-vant-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/flexible.js', type: 'text/javascript', chatset: 'utf-8' }
    ]
  },

  env: {
    baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1' : 'http://127.0.0.2'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vant'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  typescript: {
    typeCheck: {
      eslint: {
        files: [
          './**/*.{ts,js,vue}',
          './**/**/*.{ts,js,vue}',
          './**/**/**/*.{ts,js,vue}'
        ]
      }
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'vant',
            // 目前在 nuxt 中无法按需引入样式，因此采用手动引入的方式
            style: false
          },
          'vant'
        ]
      ]
    },
    postcss: {
      plugins: {
        autoprefixer: {
          overrideBrowserslist: [
            '> 1%',
            'Android 4.1',
            'iOS 7.1',
            'Chrome > 31',
            'last 5 versions'
          ]
        },
        'postcss-pxtorem': {
          rootValue: 37.5,
          propList: ['*']
        }
      }
    }
  }
}
