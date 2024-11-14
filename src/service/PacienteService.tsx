import api from "../api/api";

const registerPaciente = async (
  nombre: string,
  apellido: string,
  fecha_nacimiento: string,
  correo: string,
  telefono: string
) => {
  const response = await api.post("/paciente", {
    nombre,
    apellido,
    fecha_nacimiento,
    correo,
    telefono,
  });
  return response;
};

const viewPaciente = async (id: number) => {
  const response = await api.get(`/paciente/${id}`);
  return response.data;
};

const updatePaciente = async (id:number, nombre: string, apellido: string, fecha_nacimiento: Date, correo: string, telefono: string ) =>{
    const response = await api.put('/paciente',{
        id,
        nombre,
        apellido,
        fecha_nacimiento,
        correo,
        telefono,
    })
    return response.data;
}

const deletePaciente = async(id:number)=>{
    const response= await api.delete(`/paciente/${id}`)
    return response.data;
}

const allPaciente= async () =>{
    const response = await api.get('/paciente')
    return response.data;
}

export default { registerPaciente, viewPaciente, updatePaciente, deletePaciente, allPaciente };
