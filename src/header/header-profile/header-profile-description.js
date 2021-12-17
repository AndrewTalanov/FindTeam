// Имя и иконка
import './header-profile-description.css';

const HeaderProfileDescription = () => {
  return (
    <>
      <div className="header-profile-name">
        <p>Dan Pennington</p>
      </div>
      <div className="header-profile-avatar-icon">
        <img src="../images/1.png" alt="фотография пользователя" />
      </div>
    </>
  )
}

export default HeaderProfileDescription;