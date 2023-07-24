import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_898c319c from 'nuxt_plugin_plugin_898c319c' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_middleware_6fc7f418 from 'nuxt_plugin_middleware_6fc7f418' // Source: .\\middleware.js (mode: 'all')
import nuxt_plugin_appplugin_6b47ecc4 from 'nuxt_plugin_appplugin_6b47ecc4' // Source: ..\\node_modules\\.pnpm\\@nuxt+bridge-edge@3.0.0-28161214.90af848_@babel+core@7.22.9_rollup@3.26.3_vue@2.7.14_webpack@5.88.2\\node_modules\\@nuxt\\bridge-edge\\dist\\runtime\\app.plugin.mjs (mode: 'all')
import nuxt_plugin_configplugin_61ba676a from 'nuxt_plugin_configplugin_61ba676a' // Source: ..\\node_modules\\.pnpm\\@nuxt+bridge-edge@3.0.0-28161214.90af848_@babel+core@7.22.9_rollup@3.26.3_vue@2.7.14_webpack@5.88.2\\node_modules\\@nuxt\\bridge-edge\\dist\\runtime\\config.plugin.mjs (mode: 'all')
import nuxt_plugin_nitrobridgeserver_72dd7e0c from 'nuxt_plugin_nitrobridgeserver_72dd7e0c' // Source: .\\nitro-bridge.server.mjs (mode: 'server')
import nuxt_plugin_nitrobridgeclient_2168be94 from 'nuxt_plugin_nitrobridgeclient_2168be94' // Source: .\\nitro-bridge.client.mjs (mode: 'client')
import nuxt_plugin_plugin_e198aedc from 'nuxt_plugin_plugin_e198aedc' // Source: ..\\node_modules\\.pnpm\\@pinia+nuxt@0.4.11_rollup@3.26.3_typescript@5.1.6_vue@2.7.14\\node_modules\\@pinia\\nuxt\\dist\\runtime\\plugin.vue2 (mode: 'all')
import nuxt_plugin_capiplugin_537c18e5 from 'nuxt_plugin_capiplugin_537c18e5' // Source: .\\capi.plugin.mjs (mode: 'all')
import nuxt_plugin_errorpluginserver_0344a338 from 'nuxt_plugin_errorpluginserver_0344a338' // Source: ..\\node_modules\\.pnpm\\@nuxt+bridge-edge@3.0.0-28161214.90af848_@babel+core@7.22.9_rollup@3.26.3_vue@2.7.14_webpack@5.88.2\\node_modules\\@nuxt\\bridge-edge\\dist\\runtime\\error.plugin.server.mjs (mode: 'server')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const store = null
  const router = await createRouter(ssrContext, config, { store })

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"pinia-example-nuxt","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_898c319c === 'function') {
    await nuxt_plugin_plugin_898c319c(app.context, inject)
  }

  if (typeof nuxt_plugin_middleware_6fc7f418 === 'function') {
    await nuxt_plugin_middleware_6fc7f418(app.context, inject)
  }

  if (typeof nuxt_plugin_appplugin_6b47ecc4 === 'function') {
    await nuxt_plugin_appplugin_6b47ecc4(app.context, inject)
  }

  if (typeof nuxt_plugin_configplugin_61ba676a === 'function') {
    await nuxt_plugin_configplugin_61ba676a(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_nitrobridgeserver_72dd7e0c === 'function') {
    await nuxt_plugin_nitrobridgeserver_72dd7e0c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_nitrobridgeclient_2168be94 === 'function') {
    await nuxt_plugin_nitrobridgeclient_2168be94(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_e198aedc === 'function') {
    await nuxt_plugin_plugin_e198aedc(app.context, inject)
  }

  if (typeof nuxt_plugin_capiplugin_537c18e5 === 'function') {
    await nuxt_plugin_capiplugin_537c18e5(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_errorpluginserver_0344a338 === 'function') {
    await nuxt_plugin_errorpluginserver_0344a338(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
