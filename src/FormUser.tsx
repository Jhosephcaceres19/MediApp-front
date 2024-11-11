import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik"
import * as Yup from "yup"
import PacienteService from './service/PacienteService';
import PacienteInterface from './interface/PacienteInterface';
export const FormUser = () => {
    const validationSchema = Yup.object().shape({
        nombre:Yup.string().required("el nombre es requerido"),
        apellido: Yup.string().required("EL apellido es requerido"),
        fecha_nacimiento: Yup.string().required("la edad es requerido"),
        correo: Yup.string().required("EL correo es requerido").email("Tiene que ser un correo electronico"),
        telefono: Yup.string().required("Es requerido"),

    });

    const handleSubmit = async(values: PacienteInterface, {resetForm})=>{
        
        try{
            const response = await PacienteService.registerPaciente(values)
            console.log("Registro exitoso", response.data);
            resetForm();
        }
        catch (error){
            console.log("error al registrar", error)
        }
    }
  return (
    <Formik
    initialValues={{
        nombre:"",
        apellido:"",
        fecha_nacimiento:"",
        correo:"",
        telefono:""
    }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
    >
        <Form>
            <Field
            label="nombre"
            name="nombre"
            type="text"
            placeholder="ingrese su nombre"
            />
            <ErrorMessage name='nombre'/>
            <Field
            label="apellido"
            name="apellido"
            type="text"
            placeholder="ingrese su apellido"
            />
            <ErrorMessage name='apellido'/>
            <Field
            label="edad"
            name="fecha_nacimiento"
            type="date"
            placeholder="ingrese su edad"
            />
            <ErrorMessage name='edad'/>
            <Field
            label="correo"
            name="correo"
            type="text"
            placeholder="ingrese su correo"
            />
            <ErrorMessage name='correo'/>
            <Field
            label="telefono"
            name="telefono"
            type="text"
            placeholder="ingrese su numero de celular"
            />
            <ErrorMessage name='telefono'/>
            <button type='submit'>Registrar</button>
        </Form>

    </Formik>
  )
}
