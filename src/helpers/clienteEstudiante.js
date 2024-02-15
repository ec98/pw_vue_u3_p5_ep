import axios from "axios";

//methods consult
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

//fachada y export
export const consultEstudianteFachada = async (id) => {
  return await consultEstudiante(id);
}

export const insertEstudentFachada = async (body) => {
    return await insertEstudent(body);
}

