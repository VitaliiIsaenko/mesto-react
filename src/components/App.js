import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
    const [popupsClosed, setPopupsClosed] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div className="underlay">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="form__input form__input_type_avatar"
          name="avatar"
          id="avatar-input"
          type="url"
          placeholder="Ссылка на аватар"
          required
        />
      </PopupWithForm>

      <PopupWithForm
        name="add-card"
        title="Новое место"
        buttonText="Сохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>

      <ImagePopup />

      <PopupWithForm
        name="approve"
        title="Вы уверены?"
        buttonText="Да"
        onClose={closeAllPopups}
      ></PopupWithForm>
    </div>
  );
}

export default App;
