numero doble
<template>
  <div>
    <h5 style="color: green">Número doble: {{ numeroDoble }}</h5>
  </div>
</template>
<script>
export default {
  name: "NumeroDoble",

  props: ["numero"],

  computed: {
    numeroDoble() {
      return this.numero * 2;
    },
  },
};

</script>
<style scoped>
h5 {
  font-weight: bold;
}
</style>
