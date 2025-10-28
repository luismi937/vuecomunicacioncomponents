<template>
  <div class="container">
    <h2>Ejemplo Checkbox</h2>
    <button class="btn" @click="generarCheckboxes">Generar Checkbox</button>
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
        {{ num }}
        <span class="checkmark"></span>
      </label>
    </div>
    <h3 class="result">
      La suma seleccionada es <span>{{ suma }}</span>
    </h3>
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
      const cantidad = Math.floor(Math.random() * 10) + 5; // entre 5 y 14 checkboxes
      for (let i = 0; i < cantidad; i++) {
        const numAleatorio = Math.floor(Math.random() * 100);
        this.numeros.push(numAleatorio);
      }
    },
    calcularSuma() {
      this.suma = this.seleccionados.reduce(
        (acc, val) => acc + Number(val),
        0
      );
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.container {
  max-width: 420px;
  margin: 60px auto;
  background: linear-gradient(135deg, #f9faff, #e0f0ff);
  border-radius: 18px;
  padding: 35px 30px;
  box-shadow: 0 12px 40px rgba(0, 75, 165, 0.15);
  font-family: 'Poppins', sans-serif;
  text-align: center;
  user-select: none;
}

h2 {
  color: #10375c;
  font-weight: 600;
  margin-bottom: 25px;
  font-size: 2.3rem;
  letter-spacing: 1.1px;
}

.btn {
  background: linear-gradient(90deg, #007cf0, #00dfd8);
  border: none;
  color: white;
  padding: 14px 36px;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 223, 216, 0.5);
  font-weight: 600;
}

.btn:hover {
  background: linear-gradient(90deg, #00dfd8, #007cf0);
  box-shadow: 0 12px 32px rgba(0, 223, 216, 0.7);
  transform: translateY(-3px);
}

.checkboxes {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
}

.checkbox-label {
  position: relative;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 24px;
  padding: 12px 24px 12px 44px;
  font-weight: 500;
  font-size: 1.05rem;
  color: #10375c;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 4px 12px rgba(16, 55, 92, 0.12);
  transition: box-shadow 0.3s ease;
  min-width: 70px;
  justify-content: center;
}

.checkbox-label:hover {
  box-shadow: 0 8px 20px rgba(16, 55, 92, 0.2);
}

/* Ocultar el checkbox original */
.checkbox-label input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Crear un custom checkbox */
.checkbox-label .checkmark {
  position: absolute;
  left: 16px;
  height: 24px;
  width: 24px;
  background: #e6f3ff;
  border-radius: 6px;
  box-shadow: inset 0 0 5px rgba(0, 123, 255, 0.2);
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

/* Cuando está marcado */
.checkbox-label input:checked ~ .checkmark {
  background: linear-gradient(135deg, #007cf0, #00dfd8);
  box-shadow: 0 0 12px rgba(0, 223, 216, 0.9);
}

/* Añadir la "palomita" */
.checkbox-label .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-label input:checked ~ .checkmark:after {
  display: block;
  left: 7px;
  top: 3px;
  width: 7px;
  height: 14px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

/* Texto del resultado */
.result {
  margin-top: 35px;
  color: #005b96;
  font-weight: 700;
  font-size: 1.7rem;
  user-select: text;
}

.result span {
  color: #00bcd4;
  font-weight: 900;
  text-shadow: 0 1px 5px rgba(0, 188, 212, 0.7);
}
</style>
