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
  Image as VanImage,
  List,
  IndexBar,
  IndexAnchor
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
  VanImage,
  List,
  IndexBar,
  IndexAnchor
]

const registerVants = (Vue) => {
  VantList.forEach((item) => Vue.use(item))
}

export default registerVants
