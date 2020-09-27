export { default as Logofile } from '../../components/Logofile.vue'
export { default as Browsebread } from '../../components/browsebread.vue'
export { default as Caraosel } from '../../components/caraosel.vue'
export { default as Confirmbread } from '../../components/confirmbread.vue'
export { default as Statebread } from '../../components/statebread.vue'
export { default as Tabs } from '../../components/tabs.vue'

export const LazyLogofile = import('../../components/Logofile.vue' /* webpackChunkName: "components/Logofile" */).then(c => c.default || c)
export const LazyBrowsebread = import('../../components/browsebread.vue' /* webpackChunkName: "components/browsebread" */).then(c => c.default || c)
export const LazyCaraosel = import('../../components/caraosel.vue' /* webpackChunkName: "components/caraosel" */).then(c => c.default || c)
export const LazyConfirmbread = import('../../components/confirmbread.vue' /* webpackChunkName: "components/confirmbread" */).then(c => c.default || c)
export const LazyStatebread = import('../../components/statebread.vue' /* webpackChunkName: "components/statebread" */).then(c => c.default || c)
export const LazyTabs = import('../../components/tabs.vue' /* webpackChunkName: "components/tabs" */).then(c => c.default || c)
