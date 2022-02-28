export default class Popup {
  constructor(popupSelector) {
    //attribute = this => popupselectors(anypop)
    this._popup = document.querySelector(popupSelector);
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
    this._handleCloseOnClick = this._handleCloseOnClick.bind(this);
  }

  open() {
    this._popup.classList.add("popup_active");
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove("popup_active");
    this.removeEventListener();
  }

  _handleEscapeClose(event) {
    if (
      event.target.classList.contains("popup_active") ||
      event.key === "Escape"
    ) {
      this.close();
    }
  }

  _handleCloseOnClick(event) {
    if (
      event.target.classList.contains("popup_active") ||
      event.target.classList.contains("popup__close")
    ) {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener("keydown", this._handleEscapeClose);
    document.addEventListener("mousedown", this._handleCloseOnClick);
  }

  removeEventListener() {
    document.removeEventListener("keydown", this._handleEscapeClose);
    // document.removeventListener("mousedown", this._handleCloseOnClick);
  }
}
