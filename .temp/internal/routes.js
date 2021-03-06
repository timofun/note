/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\Project\\asset-press\\asset-press\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-a917738c",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-a917738c").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-9c9ce584",
    path: "/pc/finance.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-9c9ce584").then(next)
    },
  },
  {
    name: "v-5292f06e",
    path: "/pc/consumable.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5292f06e").then(next)
    },
  },
  {
    name: "v-bd477164",
    path: "/pc/emp_manage.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-bd477164").then(next)
    },
  },
  {
    name: "v-5a484dfa",
    path: "/pc/guide.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5a484dfa").then(next)
    },
  },
  {
    name: "v-567af254",
    path: "/pc/order.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-567af254").then(next)
    },
  },
  {
    name: "v-2b3bb73a",
    path: "/pc/inventory.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2b3bb73a").then(next)
    },
  },
  {
    name: "v-640d5cb4",
    path: "/pc/summary.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-640d5cb4").then(next)
    },
  },
  {
    name: "v-26ee1a9a",
    path: "/pc/q&a.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-26ee1a9a").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]