<template>
  <div v-if="!refresh">
    <!-- <h1>Estudiante</h1> -->
    <Estudiante/>
  </div>
</template>

<script>
import Estudiante from "../components/Estudiante.vue";

export default {
  data(){
    return {
      refresh: false,
    }
  },
  components: {
    Estudiante
  }
};
</script>

<style>



</style>