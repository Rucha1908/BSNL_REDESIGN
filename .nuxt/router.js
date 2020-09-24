import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3225158a = () => interopDefault(import('../pages/Browseplans.vue' /* webpackChunkName: "pages/Browseplans" */))
const _38d14eed = () => interopDefault(import('../pages/cards.vue' /* webpackChunkName: "pages/cards" */))
const _5323381c = () => interopDefault(import('../pages/confirmatiopage.vue' /* webpackChunkName: "pages/confirmatiopage" */))
const _a1746136 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "pages/Home" */))
const _039e7264 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _0233cf19 = () => interopDefault(import('../pages/mapped.vue' /* webpackChunkName: "pages/mapped" */))
const _1cb0deca = () => interopDefault(import('../pages/negative.vue' /* webpackChunkName: "pages/negative" */))
const _f7456ab0 = () => interopDefault(import('../pages/newtabs.vue' /* webpackChunkName: "pages/newtabs" */))
const _7c466ffb = () => interopDefault(import('../pages/Padding.vue' /* webpackChunkName: "pages/Padding" */))
const _bb4b21fe = () => interopDefault(import('../pages/stateselection.vue' /* webpackChunkName: "pages/stateselection" */))
const _f7e8ad10 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _be104fa0 = () => interopDefault(import('../pages/typu.vue' /* webpackChunkName: "pages/typu" */))
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
    path: "/cards",
    component: _38d14eed,
    name: "cards"
  }, {
    path: "/confirmatiopage",
    component: _5323381c,
    name: "confirmatiopage"
  }, {
    path: "/Home",
    component: _a1746136,
    name: "Home"
  }, {
    path: "/inspire",
    component: _039e7264,
    name: "inspire"
  }, {
    path: "/mapped",
    component: _0233cf19,
    name: "mapped"
  }, {
    path: "/negative",
    component: _1cb0deca,
    name: "negative"
  }, {
    path: "/newtabs",
    component: _f7456ab0,
    name: "newtabs"
  }, {
    path: "/Padding",
    component: _7c466ffb,
    name: "Padding"
  }, {
    path: "/stateselection",
    component: _bb4b21fe,
    name: "stateselection"
  }, {
    path: "/test",
    component: _f7e8ad10,
    name: "test"
  }, {
    path: "/typu",
    component: _be104fa0,
    name: "typu"
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
