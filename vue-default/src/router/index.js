import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import Contact from "../views/Contact.vue";
// import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home, //prefetch를 아예 안쓰는 방법
  },
  // {
  //   path: "/",
  //   name: "About",
  //   component: About,
  // },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      //방문하는 순간 임포트하는 방법 ex.사용자가 많이 접근할 거 같지 않은 컴포넌트
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(
        //prefetch를 적용해서 첫 화면이 로딩될때 캐시에 올려두는 방법 ex.사용자가 많이 접근할 컴포넌트는 미리 캐시에 올려두기
        /* webpackChunkName: "contact", webpackPrefetch:true */ "../views/Contact.vue"
      ),
  },
  {
    path: "/basic",
    name: "Basic",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      //방문하는 순간 임포트하는 방법 ex.사용자가 많이 접근할 거 같지 않은 컴포넌트
      import(/* webpackChunkName: "about" */ "../views/Basic.vue"),
  },
  {
    path: "/databinding",
    name: "DataBinding",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      //방문하는 순간 임포트하는 방법 ex.사용자가 많이 접근할 거 같지 않은 컴포넌트
      import(/* webpackChunkName: "about" */ "../views/DataBinding.vue"),
  },
  {
    path: "/databindinghtml",
    name: "DataBindingHtml",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DataBindingHtml.vue"),
  },
  {
    path: "/example",
    name: "Example",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Example.vue"),
  },
  {
    path: "/serverData",
    name: "ServerData",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ServerData.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
