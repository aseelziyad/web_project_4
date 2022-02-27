import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageCard = this._popup.querySelector(".popup__image-card");
    this._popupImageTitle = this._popup.querySelector(".popup__image-title");
  }

  openImage(name, link) {
    this._popupImageTitle.textContent = name;
    this._popupImageCard.src = link;
    this._popupImageCard.alt = name;

    super.open();
  }
}
