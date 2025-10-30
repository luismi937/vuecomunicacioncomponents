<template>
  <div>
    <h2>Selecciona una tabla de multiplicar</h2>
    <ul>
      <li v-for="n in numeros" :key="n">
        <RouterLink :to="`/tabla/${n}`">Tabla del {{ n }}</RouterLink>
      </li>
    </ul>

    <button @click="generarNumeros"> Generar nuevos números</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const numeros = ref([])

function generarNumeros() {
  numeros.value = []
  // Generamos 5 números aleatorios del 1 al 10
  for (let i = 0; i < 5; i++) {
    const num = Math.floor(Math.random() * 10) + 1
    if (!numeros.value.includes(num)) {
      numeros.value.push(num)
    }
  }
}

// Genera números al cargar el componente
generarNumeros()
</script>
<style scoped>
h2 {
  color: #2c3e50;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0.5rem 0;
}
a {
  text-decoration: none;
  color: #42b983;
}
a:hover {
  text-decoration: underline;
}
button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>