<template>
  <div class="container">
    <div class="pageActualizar">
      <h1>Pagina Actualizar</h1>
      <input class="inputConsult" id="id" v-model="id" type="text" placeholder="Ingrese ID" />
      <div class="infoConsult">
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
      <button class="buttonActualizar" @click="actualizarId">Actualizar</button>
      <button class="buttonLimpiar" @click="limpiar">Limpiar</button>
    </div>
  </div>
</template>

<script>
import { updateEstudentFachada } from "../helpers/clienteEstudiante.js";

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
  async actualizarId() {
    const body = {
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
    await updateEstudentFachada(this.id, body);
  },
  limpiar() {
    this.id = null;
    this.nombre = null;
    this.apellido = null;
    this.genero = null;
    this.carrera = null;
    this.gratuidad = null;
    this.edad = null;
    this.direccion = null;
    this.facultad = null;
    this.fechaNacimiento = null;
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.infoConsult {
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


.buttonActualizar,
.buttonLimpiar {
  display: grid;
  font-size: 30px;
  margin-top: 20px;
  width: 140px;
  color: white;
  font-family: "Times New Roman", Times, serif;
  background: rgb(91, 160, 150);
  cursor: pointer;
  border: none;
  border-radius: 6px;
  margin-left: 170px;
}
</style>