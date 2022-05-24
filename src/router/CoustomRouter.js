import vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../pages/HomeView.vue";
import LoginView from "../pages/LoginView.vue"
import SignUpView from "../pages/SignUpView.vue"


vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUpView
  },
];

let router = new VueRouter({
    mode:"history",
    routes,
base:process.env.BASE_URL
})
export default router