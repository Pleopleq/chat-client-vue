import TheHome from "../components/TheHome/index.vue";
import TheRegisterPage from "../components/TheRegisterPage/index.vue";

const routes = [
  {
    path: "/",
    component: TheHome,
  },
  {
    path: "/register",
    component: TheRegisterPage,
  },
];

export default routes;
