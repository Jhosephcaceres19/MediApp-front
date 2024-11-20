import api from "../api/api";

const registerMedico = async (
  nombre: string,
  apellido: string,
  especialidad: string,
  numero_licencia: string,
  telefono: string
) => {
  try {
    const response = await api.post("/medico", {
      nombre,
      apellido,
      especialidad,
      numero_licencia,
      telefono,
    });
    
    console.log("Respuesta del servidor:", response);

    return response.data;  
  } catch (error) {
    console.error("Error al registrar el médico:", error);
    throw error;  
  }
};



const viewMedico =async(id: number) =>{
  try{

    const response = await api.get(`/medico/${id}`)
    return response.data
  }catch(error){
    console.log("eeror al ver al medico por el id", error)
  }
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
