import HeaderDesktop from 'components/Header/Desktop';
import HeaderMobile from 'components/Header/Mobile';

function Header() {
  return (
    <div className="app__header header">
      <HeaderDesktop />
      <HeaderMobile />
    </div>
  );
}

export default Header;
