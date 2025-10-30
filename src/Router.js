import { createWebHistory } from "vue-router";
import PadreDeportes from "./components/PadreDeportes.vue";
import ComicsComponent from "./components/ComicsComponent.vue";
import PadreNumeros from "./components/PadreNumeros.vue";
import NumeroDoble from "./components/NumeroDoble.vue";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";

const myRoutes = [
    {path: "/" , component: PadreDeportes},
    {path: "/numerodoble/?" , component: NumeroDoble},
    {path: "/comics" , component: ComicsComponent},
    {path: "/numeros" , component: PadreNumeros},
    {path: "tablamultiplicar/:num" , component: TablaMultiplicar}
    
];

const router = createWebHistory({
    history: createWebHistory(),
    routes: myRoutes
})

export default {history: router, routes: myRoutes};
