
import combobox from './combobox.vue'
const Combobox = {
  install(Vue) {
    Vue.component(combobox.name, combobox)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Combobox = Combobox
  Vue.use(Combobox)
}
export default Combobox