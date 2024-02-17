<template>
  <div class="container">
    <h1>Pagina Guardar</h1>
    <div class="pageGuardar">
      <input class="inputConsult" id="id" v-model="id" type="text" placeholder="Ingrese ID" />
      <div class="entrysGuardar">
        <label for="idNombre">Nombre</label>
        <input id="idNombre" v-model="nombre" type="text" />

        <label for="idApellido">Apellido</label>
        <input id="idApellido" v-model="apellido" type="text" />

        <label for="idGenero">Genero</label>
        <input id="idGenero" v-model="genero" type="text" />

        <label for="idCarrera">Carrera</label>
        <input id="idCarrera" v-model="carrera" type="text" />

        <label for="idGratuidad">Gratuidad</label>
        <input id="idGratuidad" v-model="gratuidad" type="text" />

        <label for="idEdad">Edad</label>
        <input id="idEdad" v-model="edad" type="text" />

        <label for="idFacultad">Facultad</label>
        <input id="idFacultad" v-model="facultad" type="text" />

        <label for="idDireccion">Direccion</label>
        <input id="idDireccion" v-model="direccion" type="text" />

        <label for="idFechaNacimiento">Fecha de Nacimiento</label>
        <input id="idFechaNacimiento" v-model="fechaNacimiento" type="datetime-local" />
      </div>
      <button class="buttonInsert" @click="insertarEs">Insertar</button>
      <button class="buttonLimpiar" @click="limpiar">Limpiar</button>
    </div>
  </div>
</template>

<script>
import { insertEstudentFachada } from "../helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      id: null,
      nombre: null,
      apellido: null,
      genero: null,
      carrera: null,
      gratuidad: null,
      edad: null,
      direccion: null,
      facultad: null,
      fechaNacimiento: null
    };
  },
  async insertarEs() {
    //body
    const bodyEstu = {
      nombre: this.nombre,
      apellido: this.apellido,
      genero: this.genero,
      carrera: this.carrera,
      gratuidad: this.gratuidad,
      edad: this.edad,
      direccion: this.direccion,
      facultad: this.facultad,
      fechaNacimiento: this.fechaNacimiento
    };
    await insertEstudentFachada(bodyEstu);
  }
};
</script>

<style scoped>
.container {
  display: grid;
  justify-content: center;
  align-items: center;
}
.entrysGuardar {
  display: grid;
  grid-template-rows: repeat(1, 20px);
  margin: 60px;
  padding: 40px;
  width: 300px;
  box-shadow: 5px 6px 4px 4px;
  background: white;
}

label {
  background: white;
  text-align: left;
}

.buttonInsert,
.buttonLimpiar {
  display: grid;
  font-size: 30px;
  width: 120px;
  color: white;
  font-family: "Times New Roman", Times, serif;
  background: rgb(91, 160, 150);
  cursor: pointer;
  border: none;
  border-radius: 6px;
  margin: 20px;
}
.buttonInsert{
  margin-left: 190px;
}
.buttonLimpiar{
  margin-left: 190px;
}
</style>