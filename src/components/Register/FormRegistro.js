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
          errores.usuario = 'El usuario no puede contener caracteres especiales'
        }

        // Validacion correo
        if(!valores.correo){
          errores.correo = 'Por favor ingresa un correo electronico'
        }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
          errores.correo = 'El correo no puede contener caracteres especiales'
        }

        // Validacion contrasenia
        if(!valores.contrasenia){
          errores.contrasenia = 'Por favor ingresa una contrasenia'
        }else if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(valores.contrasenia)){
          errores.contrasenia = 'La Contrasenia muy corta'
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

        <Form className="d-flex flex-column form-registro ">

          <div className="mx-auto">

          <div className="py-3">
            <label className="d-none" htmlFor="nombre">Nombre</label>
            <Field
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="form-control"
              id="nombre"
            />
            <ErrorMessage name="nombre" component={() => (
               <p className="error-message">{errors.nombre}</p>
            )}/>
          </div>

          <div>
            <label className="d-none" htmlFor="usuario">Usuario</label>
            <Field
              type="text"
              name="usuario"
              placeholder="Usuario"
              className="form-control"
              id="usuario"
            />
            <ErrorMessage name="usuario" component={() => (
               <p className="error-message">{errors.usuario}</p>
            )}/>
          </div>

          <div className="py-3">
            <label className="d-none" htmlFor="correo">Email</label>
            <Field
              type="email"
              name="correo"
              placeholder="Email"
              className="form-control"
              id="correo"
            />
            <ErrorMessage name="correo" component={() => (
               <p className="error-message">{errors.correo}</p>
            )}/>
          </div>

          <div>
            <label className="d-none" htmlFor="contrasenia">Contrasenia</label>
            <Field
              type="password"
              name="contrasenia"
              placeholder="Contrasenia"
              className="form-control"
              id="contrasenia"
            />
            <ErrorMessage name="contrasenia" component={() => (
               <p className="error-message">{errors.contrasenia}</p>
            )}/>
          </div>

          <div className="py-3">
            <label className="d-none" htmlFor="contrasenia2">Confirmar contrasenia</label>
            <Field
              type="password"
              name='contrasenia2'
              placeholder="Confirmar contrasenia"
              className="form-control"
              id="contrasenia2"
            />
            <ErrorMessage name="contrasenia2" component={() => (
               <p className="error-message">{errors.contrasenia2}</p>
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
