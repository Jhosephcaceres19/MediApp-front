import api from "../api/api"

type Estado= "pendiente" | "confirmada" | "cancelada";

const createCita = async(
    id:number,
    fecha: Date,
    hora: string,
    estado: Estado,
    id_medico:number,
    id_paciente: number
) =>{
    const response = await api.post("/cita",{
        id,
        fecha,
        hora,
        estado,
        id_medico,
        id_paciente
    })
    return response
}

const viewCita = async (id:number)=>{
    const response = await api.get(`/cita/${id}`)
    return response.data;
}

const updateCita= async(
    id:number,
    fecha:Date,
    hora:string,
    estado: Estado,
    id_medico:number,
    id_paciente: number
)=>{
    const response = await api.put("/cita",{
        id,
        fecha,
        hora,
        estado,
        id_medico,
        id_paciente,
    })
    return response;
}
const deleteCita = async(id:number)=>{
    const response =  await api.delete(`/cita/${id}`)
    return response.data;
}


const allCita= async()=>{
    const response = await api.get("/cita")
    return response.data;
}


export default{
    createCita,
    viewCita,
    updateCita,
    deleteCita,
    allCita
}