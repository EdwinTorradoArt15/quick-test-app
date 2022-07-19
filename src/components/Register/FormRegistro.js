import React, {useState} from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";

export const FormRegistro = () => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  return (
    <Formik
      initialValues={{
        nombre: '',
        usuario: '',
        correo: '',
        contrasenia: '',
        contrasenia2: ''
      }}
      validate={(valores) => {

        let errores = {}

        // Validacion nombre
        if(!valores.nombre){
          errores.nombre = 'Por favor ingresa un nombre'
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
          errores.nombre = 'El nombre solo puede contener letras'
        }

        // Validacion usuario
        if(!valores.usuario){
          errores.usuario = 'Por favor ingresa un nombre de usuario'
        }else if(!/^[a-zA-ZÀ-ÿ\s]{6,10}$/.test(valores.usuario)){
          errores.usuario = 'El usuario solo puede contener letras,numeros y espacios'
        }

        // Validacion correo
        if(!valores.correo){
          errores.correo = 'Por favor ingresa un correo electronico'
        }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
          errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo'
        }

        // Validacion contrasenia
        if(!valores.contrasenia){
          errores.contrasenia = 'Por favor ingresa una contrasenia'
        }else if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(valores.contrasenia)){
          errores.contrasenia = 'La contrasenia debe contener entre 8-16 digitos y contener almenos una mayuscula'
        }

        //Validar repetir contrasenia
        if(valores.contrasenia.length > 0){
          if(valores.contrasenia !== valores.contrasenia2){
            errores.contrasenia2 = 'Las contrasenias no coinciden'
          }
        }

        return errores;
      }}
      onSubmit={(valores,{resetForm}) => {
        resetForm();
        console.log(valores);
        setFormularioEnviado(true);
        setTimeout(() => setFormularioEnviado(false),5000)
      }}
    >
      {({errors}) => (

        <Form className="d-flex flex-column">

        <div className="mx-auto">
          <div className="py-3">
            <label htmlFor="nombre">Nombre</label>
            <Field
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="form-control"
              id="nombre"
            />
            <ErrorMessage name="nombre" component={() => (
               <div>{errors.nombre}</div>
            )}/>
          </div>

          <div className="pb-3">
            <label htmlFor="usuario">Usuario</label>
            <Field
              type="text"
              name="usuario"
              placeholder="Usuario"
              className="form-control"
              id="usuario"
            />
            <ErrorMessage name="usuario" component={() => (
               <div>{errors.usuario}</div>
            )}/>
          </div>

          <div className="pb-3">
            <label htmlFor="correo">Email</label>
            <Field
              type="email"
              name="correo"
              placeholder="Email"
              className="form-control"
              id="correo"
            />
            <ErrorMessage name="correo" component={() => (
               <div>{errors.correo}</div>
            )}/>
          </div>

          <div className="pb-3">
            <label htmlFor="contrasenia">Contrasenia</label>
            <Field
              type="password"
              name="contrasenia"
              placeholder="Contrasenia"
              className="form-control"
              id="contrasenia"
            />
            <ErrorMessage name="contrasenia" component={() => (
               <div>{errors.contrasenia}</div>
            )}/>
          </div>

          <div className="pb-3">
            <label htmlFor="contrasenia2">Confirmar contrasenia</label>
            <Field
              type="password"
              name='contrasenia2'
              placeholder="Confirmar contrasenia"
              className="form-control"
              id="contrasenia2"
            />
            <ErrorMessage name="contrasenia2" component={() => (
               <div>{errors.contrasenia2}</div>
            )}/>
          </div>

          <button type="submit" className="btn">
            Registrar
          </button>
          {formularioEnviado && <p>Su registro se completo exitosamente</p>}
        </div>
      </Form>
      )}
    </Formik>
  );
};
