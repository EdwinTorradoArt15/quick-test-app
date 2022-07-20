import { Login } from "./components/Login/Login";
import { Registro } from "./components/Register/Registro";
import { Fragment } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/registro' element={<Registro/>}/>
      </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
