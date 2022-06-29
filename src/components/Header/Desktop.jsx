import About from 'components/About';
import Navigation from 'components/Navigation';
import PriceList from 'components/PriceList';
import Social from 'components/Social';
import CallMe from 'components/CallMe';

import { ReactComponent as Logo } from 'assets/icons/logo.svg';

function HeaderDesktop() {
  return (
    <div className="header__wrapper header__wrapper_desktop">
      <Navigation className="header__navigation" />
      <div className="header__info">
        <About className="header__about" />
        <PriceList className="header__price" />
        <Logo />
        <Social className="header__social" />
        <CallMe className="header__call-me" />
      </div>
    </div>
  );
}

export default HeaderDesktop;
