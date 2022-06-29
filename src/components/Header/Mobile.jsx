import { useContext } from 'react';
import { AppContext } from 'context/AppContext';
import CallMe from 'components/CallMe';
import ModalMobileMenu from 'components/Header/MobileMenu';

import { ReactComponent as Logo } from 'assets/icons/logo-m.svg';
import { ReactComponent as Burger } from 'assets/icons/burger.svg';
import { ReactComponent as Cross } from 'assets/icons/cross.svg';

function HeaderMobile() {
  const context = useContext(AppContext);

  return (
    <div
      className={`header__wrapper header__wrapper_mobile ${
        context.menu ? 'header__wrapper_fullscreen' : ''
      }`}
    >
      <div className="header__info">
        <Logo />
        <CallMe className="header__call-me" />
        <div
          className="pb header__burger"
          onClick={() => {
            context.updateMenu();
          }}
        >
          {context.menu ? <Cross /> : <Burger />}
        </div>
      </div>
      {context.menu ? <ModalMobileMenu /> : <></>}
    </div>
  );
}

export default HeaderMobile;
