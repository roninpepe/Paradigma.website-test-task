import React from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/_.scss';
import App from 'components/App';
import AppContextProvider from 'components/ContextProvider/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
