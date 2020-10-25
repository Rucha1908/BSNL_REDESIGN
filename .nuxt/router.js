import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6d925daa = () => interopDefault(import('../pages/browseplans.vue' /* webpackChunkName: "pages/browseplans" */))
const _a41cf9ac = () => interopDefault(import('../pages/confirmationpage.vue' /* webpackChunkName: "pages/confirmationpage" */))
const _039e7264 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _bb4b21fe = () => interopDefault(import('../pages/stateselection.vue' /* webpackChunkName: "pages/stateselection" */))
const _163f40dc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/BSNL_REDESIGN/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/browseplans",
    component: _6d925daa,
    name: "browseplans"
  }, {
    path: "/confirmationpage",
    component: _a41cf9ac,
    name: "confirmationpage"
  }, {
    path: "/inspire",
    component: _039e7264,
    name: "inspire"
  }, {
    path: "/stateselection",
    component: _bb4b21fe,
    name: "stateselection"
  }, {
    path: "/",
    component: _163f40dc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
