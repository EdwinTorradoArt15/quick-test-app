import { FormLogin } from "./FormLogin";
import { Remember } from "./Remember";
import { Seperator } from "./Seperator";
import { SocialMedias } from "./SocialMedias";
import {FooterLogin} from './FooterLogin'

export const Login = () => {
  return (
    <div className="container vh-100 d-flex">
      <div className="login-contenedor mx-auto my-auto text-center p-3">
        <h1>Inicia Sesion</h1>
        <FormLogin />
        <Remember />
        <Seperator/>
        <SocialMedias/>
        <FooterLogin/>
      </div>
    </div>
  );
};
