import * as Yup from "yup";
import HoraInterface from "../../../interface/HoraInterface";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import HoraService from "../../../service/HoraService";
export const FormAddHora = () => {
  const validationSchema = Yup.object().shape({
    id_medico: Yup.number().required("el id es importante"),
    diaSemana: Yup.string()
      .oneOf(["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"]).required("es requerido el dia de la semana"),
    horarioInicio: Yup.string().required("es requerido hora"),
    horarioFin: Yup.string().required("es requerido la hora de fin"),
  });

  const handleSubmit = async (
    values: HoraInterface,
    { resetForm }: FormikHelpers<HoraInterface>
  ) => {
    try {
      const { id_medico, diaSemana, horarioInicio, horarioFin } = values;
      const response = await HoraService.createHora(
        id_medico,
        diaSemana,
        horarioInicio,
        horarioFin
      );
      console.log("se regitro correctamente la hora", response.data);
      resetForm();
    } catch (error) {
      console.log("error al registrar la hora", error);
    }
  };
  return (
    <div>
      <Formik
        initialValues={{
          id_medico: 0,
          diaSemana: "Otros",
          horarioInicio: "",
          horarioFin: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex gap-4 w-[600px] rounded-lg border-2 justify-around p-4">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
            <label htmlFor="">Selecionar doctor</label>
            <Field name="id_medico" type="text" placeholder="id del medico" />
            <ErrorMessage
              name="id_medico"
              component="div"
              className="text-red-500"
            />
            </div>
            <button type="submit" className="text-sm bg-sky-600 rounded-lg p-2 hover:bg-sky-400">
            registrar hora
          </button>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Seleccionar Dia</label>
          <Field as="select" name="diaSemana">
            <option value="">Dia</option>
            <option value="Lunes">Lunes</option>
            <option value="Martes">Martes</option>
            <option value="Miercoles">Miercoles</option>
            <option value="Jueves">Jueves</option>
            <option value="Viernes">Viernes</option>
            <option value="Sabado">Sabado</option>
          </Field>
          <ErrorMessage
            name="diaSemana"
            component="div"
            className="text-red-500"
          />
          <label htmlFor="">Seleccionar hora inicio</label>
          <Field name="horarioInicio" type="time" placeholder="03:23 AM" />
          <ErrorMessage
            name="horaInicio"
            component="div"
            className="text-red-500"
          />
          <label htmlFor="">Seleccionar hora fin</label>
          <Field name="horaFin" type="time" placeholder="3:23 AM" />
          <ErrorMessage
            name="horaFin"
            component="div"
            className="text-red-500"
          />
          </div>

          
        </Form>
      </Formik>
    </div>
  );
};
