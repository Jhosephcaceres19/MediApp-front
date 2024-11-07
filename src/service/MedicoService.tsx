import api from "../api/api";

const registerMedico = async (
  nombre: string,
  apellido: string,
  especialidad: string,
  numero_licencia: string,
  telefono: string
) => {
  const { data } = await api.post("", {
    nombre,
    apellido,
    especialidad,
    numero_licencia,
    telefono,
  });

  return data;
};



export default registerMedico;
