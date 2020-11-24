import Vue from 'vue'
import { Tabbar, TabbarItem, Swipe, SwipeItem, Tab, Tabs, Cell, Grid, GridItem, NoticeBar, Icon, Search } from 'vant'

// 目前在 nuxt 中无法按需引入样式，因此采用手动引入的方式
import 'vant/lib/index.css'

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Tab)
  .use(Tabs)
  .use(Cell)
  .use(Grid)
  .use(GridItem)
  .use(NoticeBar)
  .use(Icon)
  .use(Search)
