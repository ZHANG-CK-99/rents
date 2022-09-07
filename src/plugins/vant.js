import {
  Button,
  NavBar,
  Toast,
  Cell,
  Field,
  Form,
  Tabbar,
  TabbarItem
} from 'vant'

const VantList = [Button, NavBar, Toast, Cell, Field, Form, Tabbar, TabbarItem]

const registerVants = (Vue) => {
  VantList.forEach((item) => Vue.use(item))
}

export default registerVants
