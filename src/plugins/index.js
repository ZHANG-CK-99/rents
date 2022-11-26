import registerVants from './vant'
import registerComponents from './components'
import registerBaiDuMap from './baidumap'
const registerPlugins = (Vue) => {
  registerVants(Vue)
  registerComponents(Vue)
  registerBaiDuMap(Vue)
}

export default registerPlugins
