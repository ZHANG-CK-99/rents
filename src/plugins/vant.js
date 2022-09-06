import { Button } from 'vant'

const VantList = [Button]

const registerVants = (Vue) => {
  VantList.forEach((item) => Vue.use(item))
}

export default registerVants
