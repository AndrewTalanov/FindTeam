// открытие модального окна с созданием контента
import './header-profile-add.css';

const HeaderProfileAdd = () => {
  return (
    <div
      className="header-profile-add"
      tabIndex={3}>
      <img
        src="../icons/add.svg"
        alt="Открытие модального окна - создание карточки"/>
    </div>
  )
}

export default HeaderProfileAdd;