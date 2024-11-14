import * as Yup from "yup";
import MedicoInterface from "../interface/MedicoInterface";
import MedicoService from "../service/MedicoService";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";

export const FormDoctor = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("el nombre es requerido"),
    apellido: Yup.string().required("el apelldio es requerido"),
    especialidad: Yup.string().required("la especialidad es requerida"),
    numero_licencia: Yup.string().required(
      "el numero de licencia es requerido"
    ),
    telefono: Yup.string().required("el telefono es requerido"),
  });

  const handleSubmit = async (values: MedicoInterface, { resetForm }: FormikHelpers<MedicoInterface>) => {
    try {
      const { nombre, apellido, especialidad, numero_licencia, telefono } =
        values;
      const response = await MedicoService.registerMedico(
        nombre,
        apellido,
        especialidad,
        numero_licencia,
        telefono
      );
      console.log("registro exitoso", response.data);
      alert("Se registro el medico");
      resetForm();
      navigate("/doctor");
    } catch (error) {
      console.log("error al registrar al medico", error);
    }
  };
  return (
    <Formik
      initialValues={{
        nombre: "",
        apellido: "",
        especialidad: "",
        numero_licencia: "",
        telefono: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      
    >
      <Form className="flex flex-col gap-2 text-center w-72 bg-sky-600/50 p-4">
        <Field
          name="nombre"
          type="text"
          placeholder="Ingrese su nombre"
          className="text-center p-2 rounded-md bg-sky-100"
        />
        <ErrorMessage name="nombre" component="div" className="text-red-500 text-sm" />
        <Field
          name="apellido"
          type="text"
          placeholder="Ingrese su apellido"
          className="text-center p-2 rounded-md bg-sky-100"
        />
        <ErrorMessage name="apellido" component="div" className="text-red-500 text-sm" />
        <Field
          name="especialidad"
          type="text"
          placeholder="Ingrese el apellido"
          className="text-center p-2 rounded-md bg-sky-100"
        />
        <ErrorMessage
          name="especialidad"
          component="div"
          className="text-red-500 test-sm"
        />
        <Field
          name="numero_licencia"
          type="text"
          placeholder="Ingresa el numero de licencia"
          className="text-center p-2 rounded-md bg-sky-100"
        />
        <ErrorMessage
          name="numero_licencia"
          component="div"
          className="text-red-500 test-sm"
        />
        <Field
          name="telefono"
          type="text"
          placeholder="Ingrese el numero de celular"
          className="text-center p-2 rounded-md bg-sky-100"
        />
        <ErrorMessage
          name="telefono"
          component="div"
          className="text-red-500 test-sm"
        />
        <button type="submit" className="bg-sky-500 p-2 rounded-md hover:bg-sky-400">Registrar Medico</button>
      </Form>
    </Formik>
  );
};
