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
              <Card key={c._id} card={c} onCardClick={props.onCardClick} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
export default Main;
