

export default function Card(props) {
function handleClick() {
    props.onCardClick(props.card);
}

    return (
        <li className="pictures__item">
        <button className="pictures__item-remove" type="button" ></button>

        <button className="pictures__item-photo" style={{ backgroundImage: `url(${props.card.link})`}} onClick={handleClick} type="button"></button>
        <div className="pictures__item-info">
            <h2 className="pictures__item-name">{props.card.name}</h2>
            <div className="pictures__item-like-area">
                <button className="pictures__item-like" type="button"></button>
                <span className="pictures__item-likes-count">{props.card.likes.length}</span>
            </div>
        </div>
      </li>
        );
}