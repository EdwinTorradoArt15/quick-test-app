import { Navbar } from '../../components/Navbar/Navbar';
import { SideBar } from '../../components/SideBar/SideBar';
import './inicio.scss';


export const Inicio = () => {
  return (
    <div className='home'>
        <SideBar/>
        <div className='homeContainer'>
          <Navbar/>
          Home container
        </div>
    </div>
  )
}
