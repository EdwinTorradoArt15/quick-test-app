/* import { Login } from "./components/Login/Login";
import { Registro } from "./components/Register/Registro"; */
import { Fragment } from "react";
// import {Dashboard} from './components/Dashboard/Dashboard'
import { Inicio } from "./pages/inicio/Inicio";
import { Perfil } from "./pages/perfil/Perfil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InfCuestionario } from "./pages/estadisticas/InfCuestionario";
import { CrearCuestionario } from "./pages/crearCuestionario/CrearCuestionario";
import { Configuracion } from "./pages/configuracion/Configuracion";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Login />}/>
        <Route path='/registro' element={<Registro/>}/> */}
          {/* <Route path='/' element={<Dashboard/>}/> */}

          {/* Rutas para la navegacion y fijacion del contenido */}
          <Route path="/">
            <Route index element={<Inicio />} />

            <Route path="perfil">
                <Route index element={<Perfil/>}/>
                <Route path=":informacion-cuestionario" element={<InfCuestionario/>}/>
            </Route>

            <Route path="perfil/crear-cuestionario">
                <Route index element={<CrearCuestionario/>}/>
            </Route>

            <Route path="configuracion">
                <Route index element={<Configuracion/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
