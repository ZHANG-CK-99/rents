import registerVants from './vant'
import registerComponents from './components'
const registerPlugins = (Vue) => {
  registerVants(Vue)
  registerComponents(Vue)
}

export default registerPlugins
