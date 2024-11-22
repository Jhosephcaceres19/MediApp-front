import { FormAddHora } from './components/FormAddHora'
import { HeaderDoctor } from './HeaderDoctor'

export const Doctor = () => {
  return (
    <div className='bg-sky-600/50 min-h-screen'>
      <HeaderDoctor/>
      <div className='text-lg font-bold w-screen text-center p-2'>
      Registrar Hora
      </div>
      <FormAddHora/>
      
    </div>
  )
}
