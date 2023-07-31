import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  head: {
    title: '标题',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
      // 根据组件的名称而不是路径自动导入组件
      pathPrefix: false,
    }
  ],
  bridge: {
    vite: true,
  },
  // imports: {
  //   dirs: [
  //     // Scan top-level modules
  //     'composables',
  //     // ... or scan modules nested one level deep with a specific name and file extension
  //     'composables/*/index.{ts,js,mjs,mts}',
  //     // ... or scan all modules within given directory
  //     'composables/**'
  //   ]
  // }
  // build: {
  //   // @ts-ignore
  //   transpile: ['ofetch']
  // }
})
