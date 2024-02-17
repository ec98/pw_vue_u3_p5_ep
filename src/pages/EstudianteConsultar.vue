<template>
  <div class="container">
    <h1>Pagina Consultar</h1>
    <div class="pageConsult">
      <input class="inputConsult" id="id" v-model="id" type="text" placeholder="Ingrese ID" />
      <button class="buttonConsult" @click="consultId">Consultar</button>
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
    </div>
  </div>
</template>

<script>
import { consultEstudianteFachada } from "../helpers/clienteEstudiante.js";
export default {
  data() {
    return {
      info: false,
    };
  },
  created(){
    console.log(this.$route)
    console.log(this.$route.params.id)
    console.log(this.$route.query)
    console.log(this.$route.query.anio)
    console.log(this.$route.query.mes)
    // this.consultId();
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
      // this.info = true;
    }
  }
};
</script>

<style scoped>
.container{
  display: grid;
  justify-content: center;
  align-items: center;
}

.pageConsult{
  margin: 30px;
}

.infoConsult{
  display: grid;
  display: grid;
  grid-template-rows: repeat(1, 20px);
  margin: 60px;
  padding: 40px;
  width: 300px;
  box-shadow: 5px 6px 4px 4px;
  background: white;
}

label{
  text-align: left;
  background: white;
}

.buttonConsult{
  display: grid;
  font-size: 30px;
  width: 120px;
  margin-left: 80px;
  color: white;
  font-family: "Times New Roman", Times, serif;
  background: rgb(91, 160, 150);
  cursor: pointer;
  border: none;
  border-radius: 6px;
}
</style>