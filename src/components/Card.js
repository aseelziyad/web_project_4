import PopupWithImage from "./PopupWithImage.js";

export default class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._cardSelector = cardSelector;
    this._handleImagePopupOpen = handleCardClick;
    this._name = data.name;
    this._link = data.link;
    this._element = this._setCardTemplate();
    this._cardImage = this._element.querySelector(".photograph__post");
    this._element.querySelector(".photograph__title").textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._setEventListeners();
  }

  _setCardTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".photograph")
      .cloneNode(true);
  }

  getCardTemplate() {
    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".photograph__delete-button")
      .addEventListener("click", this._handleDeleteIcon);
    this._element
      .querySelector(".photograph__like-button")
      .addEventListener("click", this._handleLikeIcon);
    this._element
      .querySelector(".photograph__post")
      .addEventListener("click", this._handleImagePopupOpen);
  }

  _handleDeleteIcon = () => {
    this._element.remove();
    this._element = null;
  };

  _handleLikeIcon = (event) => {
    event.target.classList.toggle("photograph__like-button_active");
  };
}
