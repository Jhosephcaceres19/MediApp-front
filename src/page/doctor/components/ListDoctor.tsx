import { useEffect, useState } from "react";
import HoraInterface from "../../../interface/HoraInterface";
import HoraService from "../../../service/HoraService";


export const ListDoctor = () => {

    const [hora, setHora]= useState<HoraInterface[]>([]);
    const id = 1
    useEffect(() => {
        const fetchHora = async (id: number) =>{
            try{
                const data = await HoraService.viewHora(id)
                setHora(data);
            }
            catch (error){
                console.log("no se cargaron las horas",error)
            }
        }
        fetchHora(id);
    },[]);
    return (
    <div>
      <colgroup>
        <col className="w-60" />
        <col className="w-60" />
        <col className="w-60" />
      </colgroup>
      <thead>
        <tr className="p-2">
          <th className="p-2">Nombre doctor </th>
          <th className="p-2">Hora inicio</th>
          <th className="p-2">Hora fin</th>
        </tr>
      </thead>
      <tbody>
        {hora.map((hora)=>(
            <tr>
                <th>{hora.diaSemana}</th>
                <th>{hora.horarioInicio}</th>
                <th>{hora.horarioFin}</th>
            </tr>
        ))}
        
      </tbody>
    </div>
  );
};
