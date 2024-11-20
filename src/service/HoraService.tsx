import api from "../api/api";

// Definir el tipo para los días de la semana permitidos
type DiaSemana = "lunes" | "martes" | "miércoles" | "jueves" | "viernes";

const createHora = async (
  
  id_medico: number,
  diaSemana: DiaSemana,
  horarioInicio: string, // Cambiado de 'time' a 'string'
  horarioFin: string     // Cambiado de 'time' a 'string'
) => {
  // Validación para asegurar que `diaSemana` sea uno de los valores permitidos
  const diasPermitidos: DiaSemana[] = ["lunes", "martes", "miércoles", "jueves", "viernes"];
  if (!diasPermitidos.includes(diaSemana)) {
    throw new Error("El día de la semana debe ser entre lunes y viernes.");
  }

  // Estructura de los datos a enviar
  const data = {
    
    id_medico,
    diaSemana,
    horarioInicio,
    horarioFin,
  };

  // Llamada al endpoint
  const response = await api.post("/hora", data);
  return response;
};

const viewHora = async(id:number)=>{
    const response = await api.get(`/hora/${id}`)
    return response.data;
}

const updateHora = async(
    id:number,
    id_medico: number,
    diaSemana: DiaSemana,
    horarioInicio: string,
    horarioFin: string
)=>{
    const diasPermitidos: DiaSemana[] = ["lunes", "martes", "miércoles","jueves","viernes"];
    if(!diasPermitidos.includes(diaSemana)){
        throw new Error("el dia de la semana tiene que ser de lunes a viernes")
    };
    const response = await api.put("/hora",{
        id,
        id_medico,
        diaSemana,
        horarioInicio,
        horarioFin
    })
    return response;
}

export default {createHora, viewHora, updateHora};
