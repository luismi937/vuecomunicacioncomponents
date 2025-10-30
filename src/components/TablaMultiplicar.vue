<template>
  <div>
    <h2>Tabla del {{ numero }}</h2>
    <table border="1" cellpadding="5">
      <tr>
        <th>Operación</th>
        <th>Resultado</th>
      </tr>
      <tr v-for="i in 10" :key="i">
        <td>{{ numero }} × {{ i }}</td>
        <td>{{ numero * i }}</td>
      </tr>
    </table>

    <RouterLink to="/">⬅️ Volver al menú</RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const numero = computed(() => parseInt(route.params.numero))
</script>
<style scoped>
h2 {
  color: #2c3e50;
}
table {
  width: 50%;
  margin-top: 1rem;
  border-collapse: collapse;
}
th {
  background-color: #42b983;
  color: white;
}
td, th {
  padding: 0.5rem;
  text-align: center;
}
a {
  display: inline-block;
  margin-top: 1rem;
  text-decoration: none;
  color: #42b983;
}
a:hover {
  text-decoration: underline;
}
</style>