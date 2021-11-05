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
  {
    path: "/test",
    name: "Test",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Test.vue"),
  },
  {
    path: "/parent",
    name: "ParentComponent",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ParentComponent.vue"),
  },
  {
    path: "/profile",
    name: "MyPage",
    component: () =>
      import(/* webpackChunkName: "basic" */ "../views/MyPage.vue"),
  },
  {
    path: "/slot",
    name: "SlotUseModalLayout",
    component: () =>
      import(/* webpackChunkName: "basic" */ "../views/SlotUseModalLayout.vue"),
  },
  {
    path: "/provideInject",
    name: "ProvideInject",
    component: () =>
      import(/* webpackChunkName: "basic" */ "../views/ProvideInject.vue"),
  },
  {
    path: "/MixinTest",
    name: "MixinTest",
    component: () =>
      import(/* webpackChunkName: "basic" */ "../views/MixinTest.vue"),
  },
  {
    path: "/calculator",
    name: "calculator",
    component: () =>
      import(/* webpackChunkName: "example" */ "../views/Calculator.vue"),
  },
  {
    path: "/compositionapi",
    name: "CompositionAPI",
    component: () =>
      import(/* webpackChunkName: "example" */ "../views/CompositionAPI.vue"),
  },
  {
    path: "/compositionapi2",
    name: "CompositionAPI2",
    component: () =>
      import(/* webpackChunkName: "example" */ "../views/CompositionAPI2.vue"),
  },
  {
    path: "/compositionapi3",
    name: "CompositionAPI3",
    component: () =>
      import(/* webpackChunkName: "example" */ "../views/CompositionAPI3.vue"),
  },
  {
    path: "/compositionapi4",
    name: "CompositionAPI4",
    component: () =>
      import(/* webpackChunkName: "example" */ "../views/CompositionAPI4.vue"),
  },
  {
    path: "/compositionapiprovide",
    name: "CompositionAPIProvider",
    component: () =>
      import(
        /* webpackChunkName: "example" */ "../views/CompositionAPIProvider.vue"
      ),
  },
  {
    path: "/customdirectives",
    name: "CustomDirectives",
    component: () =>
      import(/* webpackChunkName: "example" */ "../views/CustomDirectives.vue"),
  },
  {
    path: "/plugins",
    name: "Plugins",
    component: () =>
      import(/* webpackChunkName: "example" */ "../views/Plugins.vue"),
  },
  {
    path: "/storeaccess",
    name: "Store Access",
    component: () =>
      import(/* webpackChunkName: "example" */ "../views/StoreAccess.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
