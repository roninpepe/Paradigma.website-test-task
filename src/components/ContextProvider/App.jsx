import { useState } from 'react';
import { AppContext } from 'context/AppContext';

function AppContextProvider(props) {
  const [modal, changeModalState] = useState('');
  const [menu, changeMenuState] = useState(false);
  const [phone, changePhoneState] = useState('');

  const updateModal = (value) => {
    changeModalState(value);
  };
  const updateMenu = () => {
    changeMenuState(!menu);
  };
  const updatePhone = (value) => {
    changePhoneState(value);
  };

  return (
    <AppContext.Provider
      value={{
        modal,
        menu,
        phone,
        updateModal,
        updateMenu,
        updatePhone,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
