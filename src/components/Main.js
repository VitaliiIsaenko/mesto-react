function Main(props) {
    return (
    <main>
          <section className="profile">
            <button className="profile__avatar-edit" type="button" onClick={props.onEditAvatar} >
              <img className="profile__avatar" src="#" alt="аватар" />
            </button>
            <div className="profile__info">
              <div className="profile__header">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button className="profile__edit" type="button" onClick={props.onEditProfile} ></button>
              </div>
              <p className="profile__about">Исследователь океана</p>
            </div>
            <button className="profile__add" type="button" onClick={props.onAddPlace}></button>
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
    );
}
export default Main;