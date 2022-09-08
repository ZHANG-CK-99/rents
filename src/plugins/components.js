import Search from '@/components/Search'
const components = {
  Search
}

const registerComponents = (Vue) => {
  for (const cpnsName in components) {
    Vue.component(cpnsName, components[cpnsName])
  }
}

export default registerComponents
