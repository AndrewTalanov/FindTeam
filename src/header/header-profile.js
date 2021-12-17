// разметка мини профиля
import './header-profile.css';
import HeaderProfileAdd from './header-profile/header-profile-add';
import HeaderProfileNotification from './header-profile/header-profile-notification';
import HeaderProfileDescription from './header-profile/header-profile-description';
import HeaderProfileOpen from './header-profile/header-profile-open';

const HeaderProfile = () => {
  return (
    <div className='header-profile'>
      <HeaderProfileAdd/>
      <HeaderProfileNotification/>
      <HeaderProfileDescription/>
      <HeaderProfileOpen/>
    </div>
  )
}

export default HeaderProfile;