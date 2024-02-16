<template>
  <div>
    <div class="container">
      <div class="consultStyles">
        <!-- <h1>Componente Estudiante</h1> -->
        <input class="inputConsult" id="id" v-model="id" type="text" placeholder="Ingrese ID" />
        <button class="buttonConsult" @click="consultId">Consultar</button>
      </div>
      <div class="insertStyles">
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

        <button class="buttonInsert" @click="insertarEs">Insertar</button>
        <button class="buttonInsert" @click="limpiar">Limpiar</button>
        <button class="buttonInsert" @click="actualizarId">Actualizar</button>
        <button class="buttonInsert" @click="eliminarId">Eliminar</button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  consultEstudianteFachada,
  insertEstudentFachada,
  updateEstudentFachada,
  deleteEstudentFachada
} from "../helpers/clienteEstudiante.js";

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
  methods: {
    async consultId() {
      const data = await consultEstudianteFachada(this.id);
      console.log("consultando desde Componeten Estudiante.");
      console.log(data);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.genero = data.genero;
      this.carrera = data.carrera;
      this.gratuidad = data.gratuidad;
      this.edad = data.edad;
      this.direccion = data.direccion;
      this.facultad = data.facultad;
      this.fechaNacimiento = data.fechaNacimiento;
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
    async eliminarId() {
      await deleteEstudentFachada(this.id);
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
  }
};
</script>

<style scoped>
.container {
  display: grid;
  justify-content: center;
  align-items: center;
}
.inputConsult,
.idConsult {
  background: rgb(175, 219, 220);
}
.consultStyles {
  display: grid;
  grid-template-rows: repeat(2, 40px);
  justify-content: center;
  align-items: center;
}

.insertStyles {
  display: grid;
  grid-template-rows: repeat(1, 20px);
  margin: 20px;
  padding: 40px;
  box-shadow: 5px 6px 4px 4px;
  background: white;
}
label {
  text-align: left;
  background: white;
  margin-bottom: 1px;
  margin-top: -2px;
}
input {
  margin-bottom: 15px;
  padding: 3px;
  width: 270px;
  border: none;
  background: white;
  border-bottom: 1px solid black;
}

.buttonConsult {
  display: flex;
  width: 160px;
  margin-left: 60px;
}

.buttonInsert {
  display: flex;
  width: 100px;
  margin-left: 90px;
  margin-top: 10px;
}

.buttonConsult,
.buttonInsert {
  display: grid;
  font-size: 30px;
  color: white;
  font-family: "Times New Roman", Times, serif;
  background: rgb(91, 160, 150);
  cursor: pointer;
  border: none;
  border-radius: 6px;
}
</style>