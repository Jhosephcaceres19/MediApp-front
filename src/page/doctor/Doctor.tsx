import { FormAddHora } from "./components/FormAddHora";
import { ListDoctor } from "./components/ListDoctor";
import { HeaderDoctor } from "./HeaderDoctor";

export const Doctor = () => {
  return (
    <div className="bg-sky-600/50 min-h-screen">
      <HeaderDoctor />
      <div className="text-lg font-bold w-screen text-center p-2">
        Registrar Hora
      </div>
      <div className="flex gap-3 w-full  justify-center">
        <FormAddHora />
        <div className="rounded-xl border-2 p-2 border-white">Lista de horas
          <ListDoctor/>
        </div>
      </div>
    </div>
  );
};
