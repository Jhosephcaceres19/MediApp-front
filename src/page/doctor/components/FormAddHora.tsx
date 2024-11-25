import * as Yup from "yup";
import HoraInterface from "../../../interface/HoraInterface";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import HoraService from "../../../service/HoraService";

export const FormAddHora = () => {
  const validationSchema = Yup.object().shape({
    id_medico: Yup.number().required("El ID del médico es obligatorio"),
    diaSemana: Yup.string()
      .oneOf(["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"], "Día inválido")
      .required("El día de la semana es obligatorio"),
    horarioInicio: Yup.string().required("La hora de inicio es obligatoria"),
    horarioFin: Yup.string().required("La hora de fin es obligatoria"),
  });

  const handleSubmit = async (
    values: HoraInterface,
    { resetForm }: FormikHelpers<HoraInterface>
  ) => {
    try {
      const { id_medico, diaSemana, horarioInicio, horarioFin } = values;
      console.log("los valores son" ,values)
      const response = await HoraService.createHora(
        id_medico,
        diaSemana,
        horarioInicio,
        horarioFin
      );
      console.log("Se registró correctamente la hora", response.data);
      resetForm();
    } catch (error) {
      console.log("Error al registrar la hora", error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          id_medico: 0,
          diaSemana: "Lunes",
          horarioInicio: "",
          horarioFin: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="flex gap-4 w-[600px] rounded-lg border-2 justify-around p-4">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <label htmlFor="id_medico">Seleccionar doctor</label>
                <Field name="id_medico" type="number" placeholder="ID del médico" />
                <ErrorMessage
                  name="id_medico"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <button
                type="submit"
                className="text-sm bg-sky-600 rounded-lg p-2 hover:bg-sky-400"
              >
                Registrar hora
              </button>
            </div>
            <div className="flex flex-col">
              <label htmlFor="diaSemana">Seleccionar día</label>
              <Field as="select" name="diaSemana">
                <option value="">Selecciona un día</option>
                <option value="Lunes">Lunes</option>
                <option value="Martes">Martes</option>
                <option value="Miércoles">Miércoles</option>
                <option value="Jueves">Jueves</option>
                <option value="Viernes">Viernes</option>
                <option value="Sabado">Sábado</option>
              </Field>
              <ErrorMessage
                name="diaSemana"
                component="div"
                className="text-red-500"
              />
              <label htmlFor="horarioInicio">Seleccionar hora inicio</label>
              <Field name="horarioInicio" type="time" />
              <ErrorMessage
                name="horarioInicio"
                component="div"
                className="text-red-500"
              />
              <label htmlFor="horarioFin">Seleccionar hora fin</label>
              <Field name="horarioFin" type="time" />
              <ErrorMessage
                name="horarioFin"
                component="div"
                className="text-red-500"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
