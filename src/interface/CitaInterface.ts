type Estado= "pendiente" | "confirmada" |"cancelada"
export default interface CitaInterface{
    fecha:Date;
    hora: string;
    estado: Estado;
    id_medico: number;
    id_paciente: number;
}
