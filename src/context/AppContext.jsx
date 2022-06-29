import { createContext } from 'react';

const defaultAppContext = {
  modal: '',
  menu: false,
  phone: '',
  updateModal: (v) => {},
  updateMenu: () => {},
  updatePhone: (v) => {},
};

export const AppContext = createContext(defaultAppContext);
