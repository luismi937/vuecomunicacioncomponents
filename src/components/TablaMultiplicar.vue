<template>
  <div>
    <h2>Tabla del {{ numero }}</h2>

    <table border="1" cellpadding="6">
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

// Obtenemos el parámetro "numero" desde la URL y lo convertimos a entero
const numero = computed(() => parseInt(route.params.numero))
</script>
<style scoped>
table {
  margin: auto;
  border-collapse: collapse;
}
th {
  background-color: #f2f2f2;
}
td, th {
  padding: 8px 12px;
}

</style>