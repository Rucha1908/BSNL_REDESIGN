import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3225158a = () => interopDefault(import('../pages/Browseplans.vue' /* webpackChunkName: "pages/Browseplans" */))
const _a41cf9ac = () => interopDefault(import('../pages/confirmationpage.vue' /* webpackChunkName: "pages/confirmationpage" */))
const _5fa75514 = () => interopDefault(import('../pages/customactions.vue' /* webpackChunkName: "pages/customactions" */))
const _35327bae = () => interopDefault(import('../pages/dialog.vue' /* webpackChunkName: "pages/dialog" */))
const _996aa48e = () => interopDefault(import('../pages/forms.vue' /* webpackChunkName: "pages/forms" */))
const _d8821f12 = () => interopDefault(import('../pages/grids.vue' /* webpackChunkName: "pages/grids" */))
const _a9292976 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _4b91766e = () => interopDefault(import('../pages/horizontalcards.vue' /* webpackChunkName: "pages/horizontalcards" */))
const _039e7264 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _5503387c = () => interopDefault(import('../pages/loadingaction.vue' /* webpackChunkName: "pages/loadingaction" */))
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
    path: "/Browseplans",
    component: _3225158a,
    name: "Browseplans"
  }, {
    path: "/confirmationpage",
    component: _a41cf9ac,
    name: "confirmationpage"
  }, {
    path: "/customactions",
    component: _5fa75514,
    name: "customactions"
  }, {
    path: "/dialog",
    component: _35327bae,
    name: "dialog"
  }, {
    path: "/forms",
    component: _996aa48e,
    name: "forms"
  }, {
    path: "/grids",
    component: _d8821f12,
    name: "grids"
  }, {
    path: "/home",
    component: _a9292976,
    name: "home"
  }, {
    path: "/horizontalcards",
    component: _4b91766e,
    name: "horizontalcards"
  }, {
    path: "/inspire",
    component: _039e7264,
    name: "inspire"
  }, {
    path: "/loadingaction",
    component: _5503387c,
    name: "loadingaction"
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
