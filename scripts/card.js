import { openPopup } from "./utils.js";

export default class Card {
  constructor(data, cardSelector) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".photograph")
      .cloneNode(true);

    return cardTemplate;
  }

  getCards() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".photograph__title").textContent = this._name;
    this._element.querySelector(".photograph__post").src = this._link;
    this._element.querySelector(".photograph__post").alt = this._title;

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
      .addEventListener("click", this._handleCardImage);
  }
  _handleLikeIcon = (event) => {
    event.target.classList.toggle("photograph__like-button_active");
  };

  _handleDeleteIcon = (event) => {
    event.target.parentElement.remove();
  };
  _handleCardImage = () => {
    const popupImage = document.querySelector(".popup_image");
    const popupImageTitle = popupImage.querySelector(".popup__image-title");
    const popupImageLink = popupImage.querySelector(".popup__image-card");
    popupImageTitle.textContent = this._name;
    popupImageLink.src = this._link;
    popupImageLink.alt = this._name;
    openPopup(popupImage);
  };
}
