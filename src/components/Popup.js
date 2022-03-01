export default class Popup {
  constructor(popupSelector) {
    //attribute = this => popupselectors(anypop)
    this._popup = document.querySelector(popupSelector);
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
    this._handleBackgroundClose = this._handleBackgroundClose.bind(this);
    this._handleCloseOnClick = this._handleCloseOnClick.bind(this);
  }

  open() {
    this._popup.classList.add("popup_active");
    this.setDocumentEventListeners();
  }

  close() {
    this._popup.classList.remove("popup_active");
    this.removeDocumentEventListeners();
  }

  _handleEscapeClose(event) {
    console.log(event.target.classList);

    if (event.key === "Escape") {
      this.close();
    }
  }

  _handleBackgroundClose(event) {
    console.log(event.target.classList);
    if (event.target.classList.contains("popup_active")) {
      this.close();
    }
  }

  _handleCloseOnClick(event) {
    if (event.target.classList.contains("popup__close")) {
      this.close();
    }
  }

  setDocumentEventListeners() {
    document.addEventListener("keydown", this._handleEscapeClose);
    document.addEventListener("mousedown", this._handleBackgroundClose);
  }

  removeDocumentEventListeners() {
    document.removeEventListener("keydown", this._handleEscapeClose);
    document.removeEventListener("mousedown", this._handleBackgroundClose);
  }

  setEventListeners() {
    this._popup.addEventListener("click", this._handleCloseOnClick);
  }
}
