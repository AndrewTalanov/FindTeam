// бэкграунд + разметка
import './header.css';
import HeaderLogo from './header-logo';
import HeaderProfile from './header-profile';
import HeaderSearch from './header-search';

const Header = () => {
  return (
    <header className='header'>
      <HeaderLogo/>
      <HeaderSearch/>
      <HeaderProfile/>
    </header>
  )
}

export default Header;