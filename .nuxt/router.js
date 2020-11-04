import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3225158a = () => interopDefault(import('../pages/Browseplans.vue' /* webpackChunkName: "pages/Browseplans" */))
const _a41cf9ac = () => interopDefault(import('../pages/confirmationpage.vue' /* webpackChunkName: "pages/confirmationpage" */))
const _61be0090 = () => interopDefault(import('../pages/DATA.vue' /* webpackChunkName: "pages/DATA" */))
const _039e7264 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _bb4b21fe = () => interopDefault(import('../pages/stateselection.vue' /* webpackChunkName: "pages/stateselection" */))
const _4a03bc10 = () => interopDefault(import('../pages/zeel.vue' /* webpackChunkName: "pages/zeel" */))
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
    path: "/Browseplans",
    component: _3225158a,
    name: "Browseplans"
  }, {
    path: "/confirmationpage",
    component: _a41cf9ac,
    name: "confirmationpage"
  }, {
    path: "/DATA",
    component: _61be0090,
    name: "DATA"
  }, {
    path: "/inspire",
    component: _039e7264,
    name: "inspire"
  }, {
    path: "/stateselection",
    component: _bb4b21fe,
    name: "stateselection"
  }, {
    path: "/zeel",
    component: _4a03bc10,
    name: "zeel"
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
