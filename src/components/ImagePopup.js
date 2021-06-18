function ImagePopup() {
    return (
    <div className="popup popup_type_picture">
    <div className="popup__picture">
      <button className="popup__close" type="button"></button>
      <figure className="popup__figure">
        <img className="popup__image" src="#" alt="#" />
        <figcaption className="popup__image-caption"></figcaption>
      </figure>
    </div>
  </div>);
}

export default ImagePopup;