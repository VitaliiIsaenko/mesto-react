function ImagePopup(props) {
    return (
    <div className={`popup popup_type_picture ${props.selectedCard != null ? 'popup_opened' : ''}`}>
    <div className="popup__picture">
      <button className="popup__close" type="button" onClick={props.onClose}></button>
      <figure className="popup__figure">
        <img className="popup__image" src={props.selectedCard != null ? props.selectedCard.link : "#"} alt={props.selectedCard != null ? props.selectedCard.name : "#"} />
        <figcaption className="popup__image-caption"></figcaption>
      </figure>
    </div>
  </div>);
}

export default ImagePopup;