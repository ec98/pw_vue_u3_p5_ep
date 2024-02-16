<template>
  <div>
    <div class="insertStyles">
      <h1>Pagina Eliminar</h1>
      <input class="inputConsult" id="id" v-model="id" type="text" placeholder="Ingrese ID" />

      <button class="buttonInsert" @click="eliminarId">Eliminar</button>
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
.buttonInsert {
  display: flex;
  width: 100px;
  /* margin-left: 90px; */
  /* margin-top: 10px; */
  justify-content: center;
  align-items: center;
}
.inputConsult {
  background: rgb(175, 219, 220);
}
.insertStyles {
  margin: 20px;
  padding: 40px;
}
</style>