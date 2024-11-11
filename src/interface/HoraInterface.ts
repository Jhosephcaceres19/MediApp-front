type DiaSemana = "lunes" | "martes" | "miercoles" |"jueves" | "viernes"
export default interface HoraInterface{
    id_medico:number;
    diaSemana:DiaSemana;
    horarioInicio: string;
    horarioFin:string;
}