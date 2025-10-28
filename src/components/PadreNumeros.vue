<template>
  <div>
    <h1>Padre números</h1>

    <h3 style="color: red">La suma es {{ suma }}</h3>

    <button @click="generarNumero()">Nuevo número</button>

    <div v-for="num in numeros" :key="num">
      <HijoNumero :numero="num" v-on:sumarNumeros="sumarNumeros" />
    </div>
  </div>
</template>

<script>
import HijoNumero from "./HijoNumero.vue";

export default {
  name: "PadreNumeros",

  components: {
    HijoNumero,
  },
  data() {
    return {
      numeros: [22, 33, 14],

      suma: 0,
    };
  },

  methods: {
    sumarNumeros(numero) {
      console.log(numero);

      this.suma += numero;
    },
    generarNumero() {
      let random = parseInt(Math.random() * 500) + 1;

      this.numeros.push(random);
    },
  },
};
</script>
