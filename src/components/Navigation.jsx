import NavigationItem from 'components/NavigationItem';

import { ReactComponent as Home } from 'assets/icons/home.svg';

function Navigation(props) {
  const pages = [
    'Каталог',
    'Преимущества',
    'Примеры работ',
    'Монтаж',
    'Отзывы',
    'Ответы на вопросы',
    'Контакты',
  ];

  return (
    <nav className={`navigation ${props.className ?? ''}`}>
      <a href="/" className="navigation__link navigation__home">
        <Home />
      </a>
      {pages.map((item, i) => (
        <NavigationItem key={i}>{item}</NavigationItem>
      ))}
    </nav>
  );
}

export default Navigation;
