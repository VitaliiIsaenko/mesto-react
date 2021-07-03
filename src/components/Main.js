import React from "react";
import api from "../utils/api";
import Card from "../components/Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardRemove(card) {
    api
      .removeCard(card._id)
      .then((_) =>
        setCards((state) => state.filter((cards) => cards._id !== card._id))
      )
      .catch((err) => console.log(err));
  }

  return (
    <main>
      <section className="profile">
        <button
          className="profile__avatar-edit"
          type="button"
          onClick={props.onEditAvatar}
          style={{ backgroundImage: `url(${currentUser?.avatar})` }}
        ></button>
        <div className="profile__info">
          <div className="profile__header">
            <h1 className="profile__name">{currentUser?.name}</h1>
            <button
              className="profile__edit"
              type="button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__about">{currentUser?.about}</p>
        </div>
        <button
          className="profile__add"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="pictures">
        <ul className="pictures__list">
          {cards.map((c) => {
            return (
              <Card
                key={c._id}
                card={c}
                onCardClick={props.onCardClick}
                onCardLike={handleCardLike}
                onCardRemove={handleCardRemove}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
export default Main;
