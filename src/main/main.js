import Aside from './aside/aside';
import MainPage from './main-page/main-page';
import './main.css';
import NavigationMenu from './navigation-menu/navigation-menu';
import OpenCard from './open-card/open-card';

const Main = () => {
  return (
    <main className='main'>
      <NavigationMenu/>
      <MainPage/>
      {/* <OpenCard/> */}
      <Aside/>
    </main>
  )
}

export default Main;