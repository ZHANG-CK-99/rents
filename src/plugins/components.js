import Search from '@/components/Search'
import NavBar from '@/components/NavBar'
const components = {
  Search,
  NavBar
}

const registerComponents = (Vue) => {
  for (const cpnsName in components) {
    Vue.component(cpnsName, components[cpnsName])
  }
}

export default registerComponents
