import api from "../api/api";

const registerMedico = async (
  nombre: string,
  apellido: string,
  especialidad: string,
  numero_licencia: string,
  telefono: string
) => {
  const { data } = await api.post("/medico", {
    nombre,
    apellido,
    especialidad,
    numero_licencia,
    telefono,
  });

  return data;
};


const viewMedico =async(id: number) =>{
    const response = await api.get(`/medico/${id}`)
    return response.data;
}

const  deleteMedico= async(id: number) =>{
    const response = await api.delete(`/medico/${id}`)
    return response.data;
}

export default{
    registerMedico,
    viewMedico,
    deleteMedico
}
