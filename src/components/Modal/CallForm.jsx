import { useContext } from 'react';
import { AppContext } from 'context/AppContext';

import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';
import { ReactComponent as Cross } from 'assets/icons/cross.svg';

function ModalCallForm() {
  const context = useContext(AppContext);

  const submitFormEvent = (e) => {
    const formData = new FormData(e.target);
    const phone = formData
      .get('phone')
      .replace(/\D/g, '')
      .replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/g, '+$1 ($2) $3 - $4 - $5');

    e.preventDefault();
    context.updatePhone(phone);
  };

  return (
    <div className="app__modal modal">
      <div className="modal__wrapper">
        <div className="modal__call-form call-form">
          {context.phone === '' ? (
            <form
              className={'call-form__form'}
              action="/"
              onSubmit={submitFormEvent}
            >
              <div className="call-form__header">Быстро оставить заявку</div>
              <div className="call-form__subheader">
                Введите номер, мы позвоним вам в течение 10 минут в рабочее
                время
              </div>
              <div className="call-form__time">
                Пн–Пт 9:00 - 18:00, Сб 10:00 - 18:00
              </div>
              <label htmlFor="cfPhone" className="call-form__field-label">
                Введите номер телефона
              </label>
              <input
                type="text"
                className="call-form__field call-form__phone"
                id="cfPhone"
                name="phone"
                placeholder="+7 ( _ _ _ ) _ _ _ - _ _ - _ _"
                pattern="^\+?7\s?\(?\d{3}\)?\s?\d{3}((\s?[-])?\s?\d{2}){2}$"
                onInput={(e) => {
                  const el = e.target;
                  if (el.validity.patternMismatch) {
                    el.setCustomValidity(
                      'Введите российский номер телефона: +7 (ABC) XXX - XX - XX'
                    );
                  } else {
                    el.setCustomValidity('');
                  }
                }}
                tabIndex={1}
                required
                autoFocus
              />
              <div className="pb call-form__submit-wrapper">
                <div className="call-form__submit-face">
                  Позвоните мне <Arrow />
                </div>
                <input
                  className="call-form__submit"
                  type="submit"
                  tabIndex={3}
                />
              </div>
              <div className="call-form__tos-wrapper">
                <input
                  type="checkbox"
                  className="call-form__tos"
                  id="cfTOS"
                  tabIndex={2}
                  required
                />
                <label htmlFor="cfTOS" className="pb call-form__tos-label">
                  Нажимая кнопку вы соглашаетесь с условиями
                  <br />
                  <a href="#" className="call-form__tos-link">
                    Политики конфиденциальности
                  </a>
                </label>
              </div>
            </form>
          ) : (
            <div className="call-form__stub">
              <div className="call-form__stub-message">
                Спасибо!
                <br />
                Ваша заявка принята.
                <br />
                Мы Вам перезвоним на следующий номер:
              </div>
              <div className="call-form__stub-phone">{context.phone}</div>
            </div>
          )}
          <div
            className="pb call-form__close"
            onClick={() => {
              context.updatePhone('');
              context.updateModal('');
            }}
          >
            <Cross />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCallForm;
