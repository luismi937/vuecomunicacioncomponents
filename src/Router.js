import { createWebHistory } from "vue-router";
import PadreDeportes from "./components/PadreDeportes.vue";
import ComicsComponent from "./components/ComicsComponent.vue";
import PadreNumeros from "./components/PadreNumeros.vue";

const myRoutes = [
    {path: "/" , component: PadreDeportes},
    {path: "/comics" , component: ComicsComponent},
    {path: "/numeros" , component: PadreNumeros}
];

const router = createWebHistory({
    history: createWebHistory(),
    routes: myRoutes
})

export default {history: router, routes: myRoutes};
