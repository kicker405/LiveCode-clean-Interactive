import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__h1">MUI</h1>
      <ul className="header__list">
        <li className="header__list-item"><a className='header__link' href='#'>HOME</a></li>
        <li className="header__list-item"><a className='header__link' href='#'>ABOUT</a></li>
        <li className="header__list-item"><a className='header__link' href='#'>CONTACT</a></li>
        <li className="header__list-item">
          <input className="header__input" type="text" placeholder='Search...'></input>
        </li>
      </ul>
    </header>
  );
}
