<template>
<!-- <PadreDeportes/> -->
<!-- <PadreNumeros /> -->
 <!-- <ComicsComponent/>  -->
  <!-- <seleccionMultiple /> -->
  <!-- <sumaCheckBox /> -->
   <!-- <MenuComponent />
   <router-view></router-view> -->
   <MenuTablaMultiplicar/>
   <router-view></router-view>
</template>

<script>
import MenuTablaMultiplicar from './components/MenuTablaMultiplicar.vue';

// import ComicsComponent from './components/ComicsComponent.vue';
// import seleccionMultiple from './components/seleccionMultiple.vue'
// import MenuComponent from './components/MenuComponent.vue';
// import sumaCheckBox from './components/sumaCheckBox.vue'



// import PadreDeportes from './components/PadreDeportes.vue'
// import PadreNumeros from './components/PadreNumeros.vue'




export default {
  name: 'App',
  components: {
    // PadreDeportes,
    // PadreNumeros
    // ComicsComponent
    // seleccionMultiple
    // sumaCheckBox
    // MenuComponent
    MenuTablaMultiplicar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
