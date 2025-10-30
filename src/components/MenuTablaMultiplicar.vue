<template>
  <div>
    <h2>Selecciona una tabla de multiplicar</h2>

    <ul>
      <li v-for="n in numeros" :key="n">
        <!-- Cada número es un enlace a /tabla/n -->
        <router-link :to="`/tabla/${n}`">Tabla del {{ n }}</router-link>

      </li>
    </ul>

    <button @click="generarNumeros"> Generar nuevos números</button>
  </div>
</template>

<script>
import { ref } from 'vue'

const numeros = ref([])

function generarNumeros() {
  numeros.value = []
  // Generamos 5 números aleatorios del 1 al 10 sin repetir
  while (numeros.value.length < 5) {
    const num = Math.floor(Math.random() * 10) + 1
    if (!numeros.value.includes(num)) {
      numeros.value.push(num)
    }
  }
}

// Generar números al montar el componente
generarNumeros()
</script>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 8px 0;
}
a {
  text-decoration: none;
  color: #42b983;
}
a:hover {
  text-decoration: underline;
}
button {
  margin-top: 16px;
  padding: 8px 12px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
