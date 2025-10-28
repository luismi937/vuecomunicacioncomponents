<template>
  <div style="text-align: center; margin-top: 30px;">
    <h2>Selección múltiple</h2>
    <select multiple v-model="seleccionados" size="6" style="width: 150px;">
      <option v-for="item in elementos" :key="item" :value="item">{{ item }}</option>
    </select>
    <br />
    <button @click="mostrarSeleccionados" style="margin-top: 10px;">Mostrar seleccionados</button>
    <div v-if="textoSeleccionados" style="margin-top: 15px; color: blue; font-weight: bold;">
      {{ textoSeleccionados }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SeleccionMultiple",
  data() {
    return {
      elementos: [
        "Elemento 1",
        "Elemento 2",
        "Elemento 3",
        "Elemento 4",
        "Elemento 5",
        "Elemento 6",
        "Elemento 7",
        "Elemento 8",
      ],
      seleccionados: [],
      textoSeleccionados: "",
    };
  },
  methods: {
    mostrarSeleccionados() {
      this.textoSeleccionados = this.seleccionados.join(", ") + (this.seleccionados.length ? "," : "");
    },
  },
};
</script>

<style scoped>
select {
  font-size: 16px;
}
button {
  font-size: 14px;
  cursor: pointer;
}
</style>
