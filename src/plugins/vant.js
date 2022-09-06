import { Button, NavBar, Toast, Cell, Field, Form } from 'vant'

const VantList = [Button, NavBar, Toast, Cell, Field, Form]

const registerVants = (Vue) => {
  VantList.forEach((item) => Vue.use(item))
}

export default registerVants
