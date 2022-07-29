import "./sideBar.scss";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const SideBar = () => {

  // Aniadimos una clase de seleccion de los item


  return (
    <div className="sideBar">
      <div className="top">
        <span className="logo">QuickTest</span>
      </div>
      <div className="center">
        <ul>
          <li>
            <DashboardRoundedIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <LibraryBooksRoundedIcon />
            <span>Mis cuestionarios</span>
          </li>
          <li>
            <SettingsRoundedIcon />
            <span>Configuracion</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <LogoutRoundedIcon />
            <span>Salir</span>
          </li>
        </ul>
        <div className="footer">
          <span>Redes sociales</span>
          <div className="redes">
            <FacebookIcon/>
            <InstagramIcon/>
          </div>
          <p>@copyrigth 2022 - ART Developers</p>
        </div>
      </div>
    </div>
  );
};

