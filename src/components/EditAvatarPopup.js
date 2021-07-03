import PopupWithForm from "./PopupWithForm";
import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditAvatarPopup(props) {
  const avatarRef = React.useRef();
  const currentUser = React.useContext(CurrentUserContext);


  React.useEffect(() => {
    avatarRef.current.value = currentUser?.avatar;
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="form__input form__input_type_avatar"
        name="avatar"
        id="avatar-input"
        type="url"
        placeholder="Ссылка на аватар"
        required
        ref={avatarRef}
      />
    </PopupWithForm>
  );
}
