export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
    this._handleBackgroundClose = this._handleBackgroundClose.bind(this);
    this._handleCloseOnCloseButtonClick = this._handleCloseOnCloseButtonClick.bind(this);
  }

  open() {
    this._popup.classList.add("popup_active");
    this._setDocumentEventListeners();
  }

  close() {
    this._popup.classList.remove("popup_active");
    this._removeDocumentEventListeners();
  }

  _handleEscapeClose = (event) => {


    if (event.key === "Escape") {
      this.close();
    }
  }

  _handleBackgroundClose(event) {
    if (event.target.classList.contains("popup_active")) {
      this.close();
    }
  }

  _handleCloseOnCloseButtonClick () {
      this.close();
  }

  _setDocumentEventListeners() {
    document.addEventListener("keydown", this._handleEscapeClose);
    document.addEventListener("mousedown", this._handleBackgroundClose);
  }

  _removeDocumentEventListeners() {
    document.removeEventListener("keydown", this._handleEscapeClose);
    document.removeEventListener("mousedown", this._handleBackgroundClose);
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector(".popup__close");
    closeButton.addEventListener("click", this._handleCloseOnCloseButtonClick );
  }
}
