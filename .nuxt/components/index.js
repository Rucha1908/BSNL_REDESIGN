export { default as Breadcrumb } from '../../components/Breadcrumb.vue'
export { default as Caraosel } from '../../components/Caraosel.vue'
export { default as Footer } from '../../components/footer.vue'
export { default as Logo } from '../../components/logo.vue'
export { default as Register } from '../../components/register.vue'
export { default as Tabs } from '../../components/tabs.vue'

export const LazyBreadcrumb = import('../../components/Breadcrumb.vue' /* webpackChunkName: "components/Breadcrumb" */).then(c => c.default || c)
export const LazyCaraosel = import('../../components/Caraosel.vue' /* webpackChunkName: "components/Caraosel" */).then(c => c.default || c)
export const LazyFooter = import('../../components/footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyLogo = import('../../components/logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyRegister = import('../../components/register.vue' /* webpackChunkName: "components/register" */).then(c => c.default || c)
export const LazyTabs = import('../../components/tabs.vue' /* webpackChunkName: "components/tabs" */).then(c => c.default || c)
