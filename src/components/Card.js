export default class Card {
  constructor(
    { data, handleCardClick, handleDeleteCard, handleLikeIcon },
    cardSelector,
    userId
  ) {
    this._cardSelector = cardSelector;
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._handleImagePopupOpen = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeIcon = handleLikeIcon;
    this._element = this._getCardTemplate();
    this._element.querySelector(".photograph__title").textContent = this._name;
    this._cardImage = this._element.querySelector(".photograph__post");
    this._deleteCardButton = this._element.querySelector(
      ".photograph__delete-button"
    );
    this._likeCardButton = this._element.querySelector(
      ".photograph__like-button"
    );
    this._likeCounter = this._element.querySelector(
      ".photograph__like-counter"
    );
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._checkId();
    this._isLiked();
    this._setEventListeners();
  }

  _getCardTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".photograph")
      .cloneNode(true);
  }

  getCard() {
    return this._element;
  }
  //visibality of delete icon
  _checkId() {
    if (this._ownerId !== this._userId) {
      this._deleteCardButton.style.display = "none";
    }
  }

  deleteCard(_id) {
    this._element.remove();
    this._element = null;
  }

  checkLikes() {
    return this._likes.some((person) => person._id == this._userId);
  }

  updateLike = (newLikes) => {
    this._likes = newLikes;
    this._isLiked();
  };

  _isLiked() {
    this._likeCounter.textContent = this._likes.length;
    if (this.checkLikes()) {
      this._likeCardButton.classList.add("photograph__like-button_active");
    } else {
      this._likeCardButton.classList.remove("photograph__like-button_active");
    }
  }

  _setEventListeners() {
    this._deleteCardButton.addEventListener("click", () => {
      this._handleDeleteCard(this._id);
    });
    this._likeCardButton.addEventListener("click", () => {
      this._handleLikeIcon(this._id);
    });
    this._element
      .querySelector(".photograph__post")
      .addEventListener("click", this._handleImagePopupOpen);
  }
}
