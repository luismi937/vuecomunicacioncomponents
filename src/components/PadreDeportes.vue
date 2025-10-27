<template>
    <div>
        <h1>Padre Deportes</h1>
        <ul>
            <li v-for="sport in deportes" :key="sport">
                <HijoDeportes :nombredeporte="sport"/>
            </li>
        </ul>
    </div>
</template>
<script>
 import HijoDeportes from './HijoDeportes.vue'
export default {
    name: "PadreDeportes",
    components:{
        HijoDeportes
    },
    data(){
        return{
            deportes:["Padel", "tenis", "futbol", "waterpolo"]
        }
    }
   

}
</script>
<style>

</style>