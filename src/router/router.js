//importacion de vue y create
import { createRouter, createWebHashHistory } from "vue-router";

//paginas web para configurar/trabajar como rutas; pweb = 4
// sc = '@/pages/'
import EstudianteActualizar from "@/pages/EstudianteActualizar.vue";
import EstudianteConsultar from "@/pages/EstudianteConsultar.vue";
import EstudianteGuardar from "@/pages/EstudianteGuardar.vue";
import EstudianteEliminar from "@/pages/EstudianteEliminar.vue";

//cada pagina se asigna ruta
//rutas
const routes = [
    //path puede ser cualquier nombre, pero importante referenciar
  {
    path: "/actualizar",
    component: EstudianteActualizar,
  },
  {
    path: "/consultar",
    component: EstudianteConsultar,
  },
  {
    path: "/guardar",
    component: EstudianteGuardar,
  },
  {
    path: "/eliminar",
    component: EstudianteEliminar,
  },
];

//config router
const router = createRouter({history: createWebHashHistory(), routes});

export default router;