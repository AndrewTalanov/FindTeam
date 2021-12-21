import './card.css';

const Card = () => {
  return (
    <div className="card">
      <div className="card-info">
        <div className="card-info-profile">
          <h2 className='card-info-profile-title'>I can be your mentor in everything.</h2>
          <div className="card-info-profile-name">
            <img src="../icons/verification.svg" alt="Синяя галка - 'Подтвержденный профиль'" />
            <p>Name and Name Na</p>
          </div>
        </div>
        <div className="card-info-icon">
          <img src="../images/2.png" alt="Фотография профиля пользователя"/>
        </div>
      </div>
      <div className="card-description">
        <p>Game of as rest time eyes with of this it. Add was music merry any truth since going. Happiness she ham but instantly put departure propriety. She amiable all without say spirits shy clothes...</p>
      </div>
      <div className="card-icons">
        <div className="card-icons-main">
          <img src="../icons/lamp.svg" alt="Цветовое обозначение ментора" />
          <img src="../icons/bookmarks.svg" alt="Добавление в закладки" />
        </div>
        <div className="card-icons-dots">
          <div className="card-icons-dot"></div>
          <div className="card-icons-dot"></div>
          <div className="card-icons-dot"></div>
        </div>
      </div>
    </div>
  )
}

export default Card;