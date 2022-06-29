import HomePagePros from './HomePage/Pros';

import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';
import { ReactComponent as Click } from 'assets/icons/click.svg';

function HomePage() {
  return (
    <main className="app__home-page home-page">
      <HomePagePros />
      <div className="home-page__content">
        <div className="home-page__title">
          Продажа <span className="_semibold">кровельных материалов</span> в
          Тюмени и Тюменской области
        </div>
        <div className="home-page__subtitle">
          <div className="home-page__dots">
            <div className="home-page__dot"></div>
            <div className="home-page__dot"></div>
            <div className="home-page__dot"></div>
            <div className="home-page__dot"></div>
          </div>
          и монтаж под ключ
        </div>
        <div className="home-page__actions">
          <div className="home-page__buttons">
            <div className="pb home-page__button home-page__button_green">
              Рассчитать стоимость
              <br />
              материалов и монтажа <Arrow />
            </div>
            <div className="pb home-page__button">
              Записаться на
              <br />
              просмотр объектов <Arrow />
            </div>
          </div>
          <div className="home-page__tip">
            <Click />
            <div className="home-page__tip-text">
              <span className="_semibold">
                Ответьте на несколько вопросов и получите
              </span>{' '}
              сметную стоимость и 3 подарка за экономию нашего времени
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
