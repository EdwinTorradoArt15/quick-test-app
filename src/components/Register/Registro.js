import { FormRegistro } from "./FormRegistro"

export const Registro = () => {
  return (
    <div className="container vh-100 d-flex">
      <div className="registro-contenedor mx-auto my-auto text-center p-3">
        <h1>Registro</h1>
        <FormRegistro/>
      </div>
    </div>
  )
}
