<template>
  <nav>
    <ul id="menu">
      <li><router-link to="/">Deportes</router-link></li>
      <li><router-link to="/comics">comics</router-link></li>
      <li><router-link to="/numeros">Numeros</router-link></li>
        <li v-for="num in numeros" :key="num"><router-link :to="'/numerodoble/'+ num">Numero Doble {{ num }}</router-link></li>
    </ul>
  </nav>
</template>
<script>

export default {
  name: "MenuComponent",

  data() {
    return {
      numeros: [5, 10, 15, 20]
    };
  },


};
</script>
<style scoped>
nav {
  background-color: #333;
  padding: 1rem;
}
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}
li {
  color: white;
}
a {
  color: white;
  text-decoration: none;
}
a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

</style>