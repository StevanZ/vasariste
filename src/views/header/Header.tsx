import NavElements from './NavElements';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo"></div>
      <NavElements />
      <div className="hamburger-menu">
        <i
          style={{ fontSize: '1.5em' }}
          className="fa fa-bars"
          aria-hidden="true"
        ></i>
      </div>
    </header>
  );
};

export default Header;
