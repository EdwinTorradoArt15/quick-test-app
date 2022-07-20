import { Link } from "react-router-dom"

export const FooterLogin = () => {
  return (
    <div className="pt-3 contenedor-footer">
        <p className="text-dark text-footer">¿No tienes cuenta? Regístrate <Link to={'/registro'} className="link">aquí</Link></p>
    </div>
  )
}
