// разметка
import './header-search.css';

const HeaderSearch = () => {
  return (
    <form
      className='header-search'
      role='search'>
      <input
        id='header-search-input'
        type='text'
        tabIndex={2}
        placeholder='Search...'></input>
      <label
        className="header-search-label"
        htmlFor="header-search-input">
        <img
          src="../icons/loupe1.svg"
          alt="Иконка поиска, лупа" />
      </label>
    </form>
  )
}

export default HeaderSearch;