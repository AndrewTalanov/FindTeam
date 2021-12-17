import './navigation-menu.css';

const NavigationMenu = () => {
  return (
    <aside className='navigation-menu-wrapper'>
      <nav className='nav-menu'>
        {/* ленты */}
        <ul>
          <li tabIndex={6}>
            <div className="nav-menu-icon">
              <img src="../icons/profile.svg" alt="Иконка экрана 'Мой профиль'"/>
            </div>
            <p>My profile</p>
          </li>
          <li tabIndex={7}>
            <img src="../icons/Feed.svg" alt="Иконка экрана 'Новости'"/>
            <p>Feed</p>
          </li>
        </ul>
        <hr />
        {/* личные функции */}
        <ul>
          <li tabIndex={8}>
            <img src="../icons/messenger.svg" alt="Иконка экрана 'Сообщения'"/>
            <p>My profile</p>
          </li>
          <li tabIndex={9}>
            <img src="../icons/follow.svg" alt="Иконка экрана 'Подписки'"/>
            <p>Following</p>
          </li>
        </ul>
        <hr />
        {/* менторы - партнеры */}
        <ul>
          <li tabIndex={10}>
            <div className="nav-menu-icon">
              <img src="../icons/lamp.svg" alt="Иконка экрана 'Менторы'"/>
            </div>
            <p>Mentors</p>
          </li>
          <li tabIndex={11}>
            <div className="nav-menu-icon">
              <img src="../icons/partners.svg" alt="Иконка экрана 'Партнеры'"/>
            </div>
            <p>Partners</p>
          </li>
        </ul>
        {/* прочее */}
        <ul>
          <li tabIndex={12}>
            <div className="nav-menu-icon">
              <img src="../icons/bookmarks.svg" alt="Иконка экрана 'Заметки'"/>
            </div>
            <p>Bookmarks</p>
          </li>
          <li tabIndex={13}>
            <div className="nav-menu-icon">
              <img src="../icons/setting.svg" alt="Иконка экрана 'Настройки'"/>
            </div>
            <p>Setting</p>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default NavigationMenu;