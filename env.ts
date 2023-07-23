const ENV = {
  dev: {
    NUXT_ENV_APP_MODE: 'development',
    NUXT_ENV_APP_BASE_URL: 'http://127.0.0.1:8080/',
    NUXT_ENV_APP_BASE_TITLE: 'Theirstory-测试环境',
  },
  prod: {
    NUXT_ENV_APP_MODE: 'production',
    NUXT_ENV_APP_BASE_URL: '/prod-api',
    NUXT_ENV_APP_BASE_TITLE: 'Theirstory.cn',
  }
}

export default ENV;
