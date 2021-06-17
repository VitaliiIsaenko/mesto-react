import logo from "./images/logo.svg";

function App() {
  return (
    <div className="underlay">
      <div className="page">
        <header className="header">
          <img className="header__logo" src={logo} alt="логотип Место" />
        </header>

        <main>
          <section className="profile">
            <button className="profile__avatar-edit" type="button">
              <img className="profile__avatar" src="#" alt="аватар" />
            </button>
            <div className="profile__info">
              <div className="profile__header">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button className="profile__edit" type="button"></button>
              </div>
              <p className="profile__about">Исследователь океана</p>
            </div>
            <button className="profile__add" type="button"></button>
          </section>

          <section className="pictures">
            <ul className="pictures__list">
              <template id="picture-template">
                <li className="pictures__item">
                  <button
                    className="pictures__item-remove"
                    type="button"
                  ></button>
                  <img className="pictures__item-photo" />
                  <div className="pictures__item-info">
                    <h2 className="pictures__item-name"></h2>
                    <div className="pictures__item-like-area">
                      <button
                        className="pictures__item-like"
                        type="button"
                      ></button>
                      <span className="pictures__item-likes-count">0</span>
                    </div>
                  </div>
                </li>
              </template>
            </ul>
          </section>
        </main>

        <footer className="footer">
          <p className="footer__copy">&copy; 2021 Mesto Russia</p>
        </footer>
      </div>

      <div className="popup popup_type_edit-profile">
        <div className="popup__container">
          <button className="popup__close" type="button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="form" name="edit-profile" novalidate>
            <input
              className="form__input form__input_type_profile-name"
              name="name"
              id="profile-name-input"
              type="text"
              placeholder="Введите имя"
              minlength="2"
              maxlength="40"
              required
            />
            <span className="form__input-error profile-name-input-error"></span>
            <input
              className="form__input form__input_type_about"
              name="about"
              id="about-input"
              type="text"
              placeholder="Введите информацию о себе"
              required
            />
            <span className="form__input-error about-input-error"></span>
            <button className="form__submit" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_edit-avatar">
        <div className="popup__container">
          <button className="popup__close" type="button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="form" name="edit-avatar" novalidate>
            <input
              className="form__input form__input_type_avatar"
              name="avatar"
              id="avatar-input"
              type="url"
              placeholder="Ссылка на аватар"
              required
            />
            <span className="form__input-error avatar-input-error"></span>
            <button className="form__submit" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add-card">
        <div className="popup__container">
          <button className="popup__close" type="button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="form" name="add-card" novalidate>
            <input
              className="form__input form__input_type_card-name"
              name="name"
              id="card-name-input"
              type="text"
              placeholder="Название"
              minlength="2"
              maxlength="30"
              required
            />
            <span className="form__input-error card-name-input-error"></span>
            <input
              className="form__input form__input_type_picture-link"
              name="link"
              id="link-input"
              type="url"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="form__input-error link-input-error"></span>
            <button className="form__submit" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_picture">
        <div className="popup__picture">
          <button className="popup__close" type="button"></button>
          <figure className="popup__figure">
            <img className="popup__image" src="#" alt="#" />
            <figcaption className="popup__image-caption"></figcaption>
          </figure>
        </div>
      </div>

      <div className="popup popup_type_approve">
        <div className="popup__container">
          <button className="popup__close" type="button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="form" name="approve" novalidate>
            <button
              className="form__submit form__submit_no-top-margin"
              type="submit"
            >
              Да
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
