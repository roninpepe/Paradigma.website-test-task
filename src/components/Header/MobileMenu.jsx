import Navigation from 'components/Navigation';
import About from 'components/About';
import PriceList from 'components/PriceList';
import Social from 'components/Social';

function ModalMobileMenu() {
  return (
    <div className="header__mobile-menu mobile-menu">
      <Navigation className="mobile-menu__navigation" />
      <About className="mobile-menu__about" />
      <PriceList className="mobile-menu__price-list" />
      <Social className="mobile-menu__social" />
    </div>
  );
}

export default ModalMobileMenu;
