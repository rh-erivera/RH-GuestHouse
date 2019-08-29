
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', href: '/design1/slide1.jpg', as: 'image'},
      { rel: 'preload', href: '/design1/slide2.jpg', as: 'image'},
      { rel: 'preload', href: '/design1/slide3.jpg', as: 'image'},
      { rel: 'preload', href: '/design1/slide4.jpg', as: 'image'},
      { rel: 'preload', href: '/design1b/slide1.jpg', as: 'image'},
      { rel: 'preload', href: '/design1b/slide2.jpg', as: 'image'},
      { rel: 'preload', href: '/design1b/slide3.jpg', as: 'image'},
      { rel: 'preload', href: '/design1b/slide4.jpg', as: 'image'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
