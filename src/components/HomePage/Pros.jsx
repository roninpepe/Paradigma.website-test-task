import { ReactComponent as Cross } from 'assets/icons/cross.svg';
import { useState } from 'react';

function HomePagePros() {
  const pros = [
    ['Гарантия от 50 лет', 'на материалы и 5 лет на монтаж'],
    ['Замер, монтажный проект', 'и еще 4 услуги бесплатно'],
    ['Сметы точны', 'до копейки'],
    ['Поэтапная оплата,', 'кредит или рассрочка'],
    ['Наши крыши в каждом поселке', 'и дачном сообществе региона'],
  ];

  const [isOpened, setIsOpenedState] = useState(false);

  return (
    <div
      className={`home-page__home-pros home-pros ${
        isOpened ? 'home-pros_opened' : ''
      }`}
    >
      <div className="home-pros__list">
        {pros.map((e, i) => (
          <div className="home-pros__list-item" key={i}>
            <span className="_bold">{e[0]}</span> {e[1]}
          </div>
        ))}
      </div>
      <div className="home-pros__controls">
        <div
          className={`pb home-pros__button ${
            isOpened ? '' : 'home-pros__button_rotated'
          }`}
          onClick={() => {
            setIsOpenedState(!isOpened);
          }}
        >
          <Cross />
        </div>
      </div>
    </div>
  );
}

export default HomePagePros;
