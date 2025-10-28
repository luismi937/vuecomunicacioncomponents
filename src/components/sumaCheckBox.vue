<template>
  <div class="container">
    <h2>💎 Ejemplo Checkbox</h2>

    <button class="btn" @click="generarCheckboxes">
      <span>🎲 Generar Checkbox</span>
    </button>

    <div class="checkboxes">
      <label
        v-for="(num, index) in numeros"
        :key="index"
        class="checkbox-label"
      >
        <input
          type="checkbox"
          :value="num"
          v-model="seleccionados"
          @change="calcularSuma"
        />
        <span class="custom-box"></span>
        <span class="num">{{ num }}</span>
      </label>
    </div>

    <div class="result">
      <p>La suma seleccionada es</p>
      <h3>{{ suma }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "SumaCheckbox",
  data() {
    return {
      numeros: [],
      seleccionados: [],
      suma: 0,
    };
  },
  methods: {
    generarCheckboxes() {
      this.numeros = [];
      this.seleccionados = [];
      this.suma = 0;
      const cantidad = Math.floor(Math.random() * 10) + 5;
      for (let i = 0; i < cantidad; i++) {
        this.numeros.push(Math.floor(Math.random() * 100));
      }
    },
    calcularSuma() {
      this.suma = this.seleccionados.reduce((acc, val) => acc + Number(val), 0);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

body {
  background: radial-gradient(circle at top right, #c2e9fb, #a1c4fd);
  font-family: "Poppins", sans-serif;
}

.container {
  max-width: 500px;
  margin: 70px auto;
  padding: 45px 35px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  color: #2c3e50;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.container::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at top left,
    rgba(255, 255, 255, 0.4),
    transparent 70%
  );
  z-index: 0;
}

h2 {
  font-size: 2.4rem;
  font-weight: 700;
  color: #0078ff;
  margin-bottom: 25px;
  text-shadow: 0 2px 10px rgba(0, 120, 255, 0.3);
  position: relative;
  z-index: 2;
}

.btn {
  background: linear-gradient(90deg, #007cf0, #00dfd8);
  border: none;
  color: white;
  padding: 14px 36px;
  border-radius: 35px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 223, 216, 0.6);
  font-size: 1.1rem;
  z-index: 2;
  position: relative;
}

.btn:hover {
  transform: translateY(-2px);
  background: linear-gradient(90deg, #00dfd8, #007cf0);
  box-shadow: 0 8px 30px rgba(0, 223, 216, 0.8);
}

.checkboxes {
  margin-top: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
  position: relative;
  z-index: 2;
}

.checkbox-label {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  padding: 12px 22px;
  border-radius: 18px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #1e3d59;
  font-weight: 600;
  transition: all 0.25s ease;
  border: 2px solid transparent;
}

.checkbox-label:hover {
  transform: translateY(-2px);
  border-color: #00bfff;
  box-shadow: 0 8px 20px rgba(0, 191, 255, 0.2);
}

.checkbox-label input {
  display: none;
}

.custom-box {
  width: 22px;
  height: 22px;
  border: 2px solid #007cf0;
  border-radius: 6px;
  transition: all 0.25s ease;
  position: relative;
}

.checkbox-label input:checked + .custom-box {
  background: linear-gradient(145deg, #00c6ff, #0072ff);
  box-shadow: 0 0 12px rgba(0, 114, 255, 0.6);
  border-color: #007cf0;
}

.checkbox-label input:checked + .custom-box::after {
  content: "✔";
  color: white;
  font-size: 14px;
  position: absolute;
  left: 4px;
  top: 0;
}

.num {
  font-size: 1.1rem;
}

.result {
  margin-top: 40px;
  position: relative;
  z-index: 2;
}

.result p {
  color: #3a3a3a;
  font-size: 1.1rem;
  margin-bottom: 5px;
  font-weight: 500;
}

.result h3 {
  font-size: 2.4rem;
  font-weight: 800;
  color: #007cf0;
  text-shadow: 0 0 15px rgba(0, 124, 240, 0.4);
}
</style>
