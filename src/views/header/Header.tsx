import NavElements from '../../components/NavElements';
import './header.scss';

interface headerProps {
  setShowSidebar: any;
  showSidebar: boolean;
}

const Header = ({ setShowSidebar, showSidebar }: headerProps) => {
  return (
    <header className="header">
      <div className="logo"></div>
      <NavElements />
      <div
        onClick={() => setShowSidebar(!showSidebar)}
        className="hamburger-menu"
      >
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
