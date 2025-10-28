<template>
  <div class="container">
    <h2>✨ Ejemplo Checkbox ✨</h2>

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
      const cantidad = Math.floor(Math.random() * 10) + 5; // entre 5 y 14
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
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap");

body {
  background: radial-gradient(circle at top left, #0a0f24, #01030b);
}

.container {
  max-width: 480px;
  margin: 80px auto;
  padding: 40px 30px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 40px rgba(0, 200, 255, 0.1);
  backdrop-filter: blur(15px);
  color: #fff;
  text-align: center;
  font-family: "Outfit", sans-serif;
  position: relative;
  overflow: hidden;
}

.container::before {
  content: "";
  position: absolute;
  top: -30%;
  left: -30%;
  width: 150%;
  height: 150%;
  background: radial-gradient(
    circle at center,
    rgba(0, 195, 255, 0.3),
    transparent 70%
  );
  z-index: 0;
  animation: pulse 6s infinite ease-in-out;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.4;
  }
}

h2 {
  font-size: 2.3rem;
  font-weight: 700;
  color: #00eaff;
  text-shadow: 0 0 10px #00eaff, 0 0 30px #00aaff;
  margin-bottom: 25px;
  z-index: 2;
  position: relative;
}

.btn {
  border: none;
  background: linear-gradient(90deg, #007cf0, #00dfd8, #007cf0);
  color: white;
  padding: 14px 36px;
  border-radius: 40px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
  font-size: 1rem;
  position: relative;
  overflow: hidden;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.7);
}

.checkboxes {
  margin-top: 30px;
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
  user-select: none;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #cdeaff;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.checkbox-label input {
  display: none;
}

.custom-box {
  width: 26px;
  height: 26px;
  border: 2px solid rgba(0, 234, 255, 0.7);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 234, 255, 0.4);
  transition: all 0.3s ease;
  position: relative;
}

.checkbox-label input:checked + .custom-box {
  background: linear-gradient(145deg, #00c6ff, #0072ff);
  border-color: #00eaff;
  box-shadow: 0 0 20px #00eaff;
}

.checkbox-label input:checked + .custom-box::after {
  content: "✔";
  color: white;
  font-size: 16px;
  position: absolute;
  top: 2px;
  left: 6px;
  text-shadow: 0 0 8px white;
}

.num {
  font-size: 1.1rem;
}

.result {
  margin-top: 35px;
  z-index: 2;
  position: relative;
}

.result p {
  color: #aad8ff;
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.result h3 {
  font-size: 2rem;
  font-weight: 700;
  color: #00eaff;
  text-shadow: 0 0 12px #00eaff, 0 0 40px #00aaff;
  letter-spacing: 1px;
}
</style>
