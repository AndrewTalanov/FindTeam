import Aside from './aside/aside';
import MainPage from './main-page/main-page';
import './main.css';
import NavigationMenu from './navigation-menu/navigation-menu';

const Main = () => {
  return (
    <main className='main'>
      <NavigationMenu/>
      <MainPage/>
      <Aside/>
    </main>
  )
}

export default Main;