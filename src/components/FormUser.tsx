"use client";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import PacienteService from "../service/PacienteService";
import PacienteInterface from "../interface/PacienteInterface";
import { useNavigate } from "react-router-dom";
export const FormUser = () => {
const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("El nombre es requerido"),
    apellido: Yup.string().required("El apellido es requerido"),
    fecha_nacimiento: Yup.date()
    .required(
      "La fecha de nacimiento es requerida"
    )
    .typeError("La fecha de debe estar en formato YYYY-MM-DD"),
    correo: Yup.string()
      .required("El correo es requerido")
      .email("Debe ser un correo electrónico válido"),
    telefono: Yup.string().required("El teléfono es requerido"),
  });

  const handleSubmit = async (values: PacienteInterface, { resetForm }: FormikHelpers<PacienteInterface>) => {
    try {
      const { nombre, apellido, fecha_nacimiento, correo, telefono } = values;
      const response = await PacienteService.registerPaciente(
        nombre,
        apellido,
        fecha_nacimiento,
        correo,
        telefono
      );
      console.log("Registro exitoso", response.data);
      alert("Se registro el paciente")
      navigate('/user')
      resetForm();
    } catch (error) {
      console.log("Error al registrar", error);
    }
  };

  return (
    <Formik
      initialValues={{
        nombre: "",
        apellido: "",
        fecha_nacimiento: "",
        correo: "",
        telefono: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col gap-2 text-center">
        <Field
          className="text-center p-2 rounded-md bg-sky-100"
          name="nombre"
          type="text"
          placeholder="Ingrese su nombre"
        />
        <ErrorMessage
          name="nombre"
          component="div"
          className="text-red-500 text-sm"
        />

        <Field
          className="text-center p-2 rounded-md bg-sky-100"
          name="apellido"
          type="text"
          placeholder="Ingrese su apellido"
        />
        <ErrorMessage
          name="apellido"
          component="div"
          className="text-red-500 text-sm"
        />

        <label htmlFor="">Ingrese la fecha de necimiento</label>
        <Field
          className="text-center p-2 rounded-md bg-sky-100"
          name="fecha_nacimiento"
          type="date"
          placeholder="Ingrese fecha de nacimiento"
        />
        <ErrorMessage
          name="fecha_nacimiento"
          component="div"
          className="text-red-500 text-sm"
        />

        <Field
          className="text-center p-2 rounded-md bg-sky-100"
          name="correo"
          type="email"
          placeholder="Ingrese su correo"
        />
        <ErrorMessage
          name="correo"
          component="div"
          className="text-red-500 text-sm"
        />

        <Field
          className="text-center p-2 rounded-md bg-sky-100"
          name="telefono"
          type="text"
          placeholder="Ingrese su número de celular"
        />
        <ErrorMessage
          name="telefono"
          component="div"
          className="text-red-500 text-sm"
        />

        <button
          className="bg-sky-500 p-2 rounded-md hover:bg-sky-400"
          type="submit"
        >
          Registrar Paciente
        </button>
      </Form>
    </Formik>
  );
};
