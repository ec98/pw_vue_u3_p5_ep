import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/actualizar",
    component: () => import('@/pages/EstudianteActualizar')
  },
  {
    path: "/consultar/:id",
    component: () => import('@/pages/EstudianteConsultar')
  },
  {
    path: "/guardar",
    component: () => import('@/pages/EstudianteGuardar')
  },
  {
    path: "/eliminar",
    component: () => import('@/pages/EstudianteEliminar')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/NotFoundPage')
  }
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;