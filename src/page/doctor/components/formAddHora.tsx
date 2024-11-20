import * as Yup from "yup"
import HoraInterface from "../../../interface/HoraInterface"
import { Field, Form, Formik, FormikHelpers } from "formik"
import HoraService from "../../../service/HoraService"
export const formAddHora = () => {
    const validationSchema = Yup.object().shape({
        id_medico: Yup.number().required("el id es importante"),
        diaSemana :Yup.number().required("ES importante el "),
        horarioInicio:Yup.string().required("es requerido hora"),
        horarioFin:Yup.string().required("es requerido la hora de fin")
    })

    const handleSubmit = async(
        values: HoraInterface,
        {resetForm}: FormikHelpers<HoraInterface>
    )=>{
        try{
            const {id_medico, diaSemana,horarioInicio, horarioFin}=values;
            const response = await HoraService.createHora(
                id_medico,
                diaSemana,
                horarioInicio,
                horarioFin
            )
            console.log("se regitro correctamente la hora", response.data)
            resetForm()
        }catch(error){
            console.log("error al registrar la hora", error)
        }
    }
  return (
    <div>
        <Formik
            initialValues={{
                id_medico:0,
                diaSemana:"",
                horarioInicio:"",
                horarioFin:""
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <Field
                name
                />
            </Form>

        </Formik>
    </div>
  )
}
