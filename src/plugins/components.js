import Search from '@/components/Search'
import NavBar from '@/components/NavBar'
import RentListItem from '@/components/RentListItem'
const components = {
  Search,
  NavBar,
  RentListItem
}

const registerComponents = (Vue) => {
  for (const cpnsName in components) {
    Vue.component(cpnsName, components[cpnsName])
  }
}

export default registerComponents
