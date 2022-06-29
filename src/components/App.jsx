import Header from 'components/Header';
import ModalCallForm from 'components/Modal/CallForm';
import { AppContext } from 'context/AppContext';
import { useContext } from 'react';
import HomePage from './HomePage';

function App() {
  const context = useContext(AppContext);

  return (
    <div className="App">
      <Header />
      <HomePage />
      {context.modal !== '' ? <ModalCallForm /> : <></>}
    </div>
  );
}

export default App;
