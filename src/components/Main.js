import React from "react";
import api from "../utils/Api";
import Card from "../components/Card";

function Main(props) {

  const [user, setUserInfo] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserInfo({name:data.name,about:data.about,avatar:data.avatar});
    })
  },[]);

  React.useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data.map(c => {
        return <Card key={c._id} card={c} onCardClick={props.onCardClick}/>
      }));
    }
  )},[props.onCardClick]);

    return (
    <main>
          <section className="profile">
            <button className="profile__avatar-edit" type="button" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${user.avatar})` }} >
            </button>
            <div className="profile__info">
              <div className="profile__header">
                <h1 className="profile__name">{user.name}</h1>
                <button className="profile__edit" type="button" onClick={props.onEditProfile} ></button>
              </div>
              <p className="profile__about">{user.about}</p>
            </div>
            <button className="profile__add" type="button" onClick={props.onAddPlace}></button>
          </section>

          <section className="pictures">
            <ul className="pictures__list">
              {cards}
            </ul>
          </section>
        </main>
    );
}
export default Main;