import BigCard from '../cards/big-card';
import Card from '../cards/card';
import './main-page.css';

const ContentPage = () => {
  return (
    <section className='main-page'>
      <BigCard/>
      <div className="main-page-cards">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </section>
  )
}

export default ContentPage;