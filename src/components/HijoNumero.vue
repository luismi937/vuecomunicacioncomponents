<template>
  <div>
    <h5 style="color: blue">Número hijo: {{ numero }}</h5>

    <button @click="callSumarNumeros()">Sumar {{ numero }}</button>
  </div>
</template>

<script>
export default {
  name: "HijoNumero",

  props: ["numero"],

  methods: {
    callSumarNumeros() {
      this.$emit("sumarNumeros", this.numero);
    },
  },
};
</script>
