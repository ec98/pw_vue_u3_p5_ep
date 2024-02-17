import axios from "axios";

//methods AXIOS
const consultEstudiante = async (id) => {
  //axios tiene incluido implicitamente un await, no hace falta declararlo
  const data = axios.get(`http://localhost:8086/API/v1.0/Matricula/estudiantes/${id}`).then((r) => r.data);
  console.log(data);
  return data;
}

const insertEstudent = async (body) => {
    const data = axios.post(`http://localhost:8086/API/v1.0/Matricula/estudiantes`,body).then(r => r.data);
    console.log(data);
}

const updateEstudent = async (id, body) => {
  const data = axios.put(`http://localhost:8086/API/v1.0/Matricula/estudiantes/${id}`,body).then(r => r.data);
  console.log(data);
}

const deleteEstudent = async (id) => {
  const data = axios.delete(`http://localhost:8086/API/v1.0/Matricula/estudiantes/${id}`).then(r => r.data);
  console.log(data);
}

//fachadas y exports
export const consultEstudianteFachada = async (id) => {
  return await consultEstudiante(id);
}

export const insertEstudentFachada = async (body) => {
    return await insertEstudent(body);
}

export const updateEstudentFachada = async (id, body) => {
  return await updateEstudent(id, body);
}

export const deleteEstudentFachada = async (id) => {
  return await deleteEstudent(id);
}