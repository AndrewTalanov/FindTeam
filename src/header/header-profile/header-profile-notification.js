// открытие модального окна с уведомлениями
import './header-profile-notification.css';

const HeaderProfileNotification = () => {
  return (
    <div
      className="header-profile-notification"
      tabIndex={4}>
      <img
        src="../icons/notification.svg"
        alt="Открытие создания карточки" />
    </div>
  )
}

export default HeaderProfileNotification;