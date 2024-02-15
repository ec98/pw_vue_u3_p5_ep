<template>
  <div>
    <h1>Componente Estudiante</h1>
    <input v-model="id" type="text" />
    <button @click="consultId">Consultar</button>
    <input v-model="nombre" type="text">

    <input v-model="apellido" type="text" />
    <button @click="insertarEs">Insertar</button>
  </div>
</template>

<script>
import {
  consultEstudianteFachada,
  insertEstudentFachada
} from "../helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      id: null,
      nombre: null,
      apellido: null
    };
  },
  methods: {
    async consultId() {
      const data = await consultEstudianteFachada(this.id);
      console.log("consultando desde Componeten Estudiante.");
      console.log(data);
      this.nombre = data[0].nombre;
      console.log(this.nombre);
    },
    async insertarEs() {
      //body
      const bodyEstu = {
        nombre: "Belen",
        apellido: this.apellido,
        carrera: "Ciencias en la Computacion"
      };
      await insertEstudentFachada(bodyEstu);
    }
  }
};
</script>

<style>
</style>