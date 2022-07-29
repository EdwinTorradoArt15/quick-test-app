import './navbar.scss';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NightlightRoundRoundedIcon from '@mui/icons-material/NightlightRoundRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

export const Navbar = () => {
  return (
    <div className='navbarr'>
      <div className='wrapper'>
          <div className='search'>
              <input type='text' placeholder='Busqueda...'/>
                <SearchRoundedIcon className='icon'/>
          </div>
          <div className='items'>
            <div className='item'>
                <NightlightRoundRoundedIcon className='icon'/>
            </div>
            <div className='item'>
              <NotificationsRoundedIcon/>
              <div className='counter'>1</div>
            </div>
            <div className='item'>
              <img
                src='https://i.picsum.photos/id/873/200/300.jpg?hmac=CQHrOY67pytIwHLic3cAxphNbh2NwdxnFQtwaX5MLkM'
                alt='sds'
                className='avatar'
              />
            </div>
          </div>
      </div>
    </div>
  )
}
