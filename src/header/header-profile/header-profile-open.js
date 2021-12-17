// открытие профиля
import './header-profile-open.css';

const HeaderProfileOpen = () => {
  return (
    <div
      className="header-profile-open"
      tabIndex={5}>
      <img
        src="../icons/tick.svg"
        alt="Открытие профиля" />
    </div>
  )
}

export default HeaderProfileOpen;