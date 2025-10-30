<template>
  <div>
    <h1>Número doble: {{ doble }}</h1>

    <h2 style="color: red">{{ mensaje }}</h2>

    <button @click="redirectToHome()">Go to Home</button>
  </div>
</template>

<script>
export default {
  name: "NumeroDoble",

  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
  },

  data() {
    return {
      mensaje: "",

      doble: 0,
    };
  },

  mounted() {
    console.log("Param: " + this.$route.params.numero);

    //LOS PARAMETROS SIEMPRE SON STRING, NO IMPORTA SI SON NUMERICOS

    let numero = this.$route.params.numero;

    if (numero == "") {
      this.mensaje = "Sin parámetros en Routing";
    } else {
      this.mensaje = "Parámetro recibido: " + numero;

      this.doble = parseInt(numero) * 2;
    }
  },
  watch: {
    "$route.params.numero"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.mensaje = "Esto ha cambiado: " + this.$route.params.numero;

        this.doble = parseInt(this.$route.params.numero) * 2;

        console.log("Next: " + nextVal);

        console.log("Old: " + oldVal);
      }
    },
  },
};
</script>
