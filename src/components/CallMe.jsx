import { useContext } from 'react';
import { AppContext } from 'context/AppContext';

function CallMe(props) {
  const context = useContext(AppContext);

  return (
    <div className={`call-me ${props.className ?? ''}`}>
      <div className="call-me__text">
        <span className="call-me__indicator"></span>{' '}
        <span className="_bold">Пн-Пт</span> 9:00 - 18:00,{' '}
        <span className="_bold">Сб</span> 10:00 - 18:00
      </div>
      <div className="call-me__phone">8 (800) 222-54-60</div>
      <div
        className="pb call-me__link"
        onClick={() => {
          context.updateModal('call-form');
        }}
      >
        Позвоните мне
      </div>
    </div>
  );
}

export default CallMe;
