import {
  Button,
  NavBar,
  Toast,
  Cell,
  Field,
  Form,
  Tabbar,
  TabbarItem,
  Grid,
  GridItem,
  Dialog,
  Loading,
  Swipe,
  SwipeItem,
  Lazyload,
  Search,
  Icon,
  Image as VanImage
} from 'vant'

const VantList = [
  Button,
  NavBar,
  Toast,
  Cell,
  Field,
  Form,
  Tabbar,
  TabbarItem,
  Grid,
  GridItem,
  Dialog,
  Loading,
  Swipe,
  SwipeItem,
  Lazyload,
  Search,
  Icon,
  VanImage
]

const registerVants = (Vue) => {
  VantList.forEach((item) => Vue.use(item))
}

export default registerVants
