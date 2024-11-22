type DiaSemana = "Lunes" | "Martes" | "Miércoles" |"Jueves" | "Viernes" | "Sabado" |"Otros"
export default interface HoraInterface{
    id_medico:number;
    diaSemana:DiaSemana;
    horarioInicio: string;
    horarioFin:string;
}