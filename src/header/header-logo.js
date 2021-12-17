// логотип
import './header-logo.css';

const HeaderLogo = () => {
  return (
    <div
      className='header-logo'
      tabIndex={1}>
      <img
        className='logo-image'
        src="../icons/Logo.svg"
        alt="Логотип сервиса"
        title='Главная страница'/>      
    </div>
  )
}

export default HeaderLogo