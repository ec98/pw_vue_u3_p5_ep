<template>
  <div class="container">
    <h1>Pagina Eliminar</h1>
    <div class="insertStyles">
      <input class="inputConsult" id="id" v-model="id" type="text" placeholder="Ingrese ID" />
      <button class="buttonEliminar" @click="eliminarId">Eliminar</button>
    </div>
  </div>
</template>

<script>
import { deleteEstudentFachada } from "../helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      id: null
    };
  },
  methods: {
    async eliminarId() {
      await deleteEstudentFachada(this.id);
    }
  }
};
</script>

<style>
.container {
  display: grid;
  justify-content: center;
  align-items: center;
}

.inputConsult {
  background: rgb(175, 219, 220);
}
.insertStyles {
  display: grid;
  margin: 20px;
  padding: 40px;
}
input {
  margin-bottom: 15px;
  padding: 3px;
  width: 270px;
  border: none;
  background: white;
  border-bottom: 1px solid black;
}
.buttonEliminar {
  display: grid;
  font-size: 30px;
  width: 120px;
  margin-left: 75px;
  color: white;
  font-family: "Times New Roman", Times, serif;
  background: rgb(91, 160, 150);
  cursor: pointer;
  border: none;
  border-radius: 6px;
}
</style>