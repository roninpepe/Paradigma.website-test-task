import { ReactComponent as Viber } from 'assets/icons/viber.svg';
import { ReactComponent as WhatsApp } from 'assets/icons/whatsapp.svg';
import { ReactComponent as Telegram } from 'assets/icons/telegram.svg';

function Social(props) {
  return (
    <div className={`social ${props.className}`}>
      <div className="social__text">
        <span className="social__indicator"></span> Отвечаем{' '}
        <span className="_bold"> онлайн</span>
      </div>
      <div className="social__links">
        <a
          href="viber://chat?number="
          className="social__link social__viber"
          target="_blank"
        >
          <Viber />
        </a>
        <a
          href="https://wa.me"
          className="social__link social__whatsapp"
          target="_blank"
        >
          <WhatsApp />
        </a>
        <a
          href="https://t.me"
          className="social__link social__telegram"
          target="_blank"
        >
          <Telegram />
        </a>
      </div>
    </div>
  );
}

export default Social;
