import Popup from "./Popup.js";
 
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, validator) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._popup.querySelectorAll(".popup__input");
    this._button = this._form.querySelector(".popup__submit-btn");

    this._validator = validator;
  }

  getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }


  open() {
    this._validator.resetValidation();
    super.open();
  }

  close() {
    super.close();
    this._form.reset();

  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", () => {
      this._button.textContent = "Saving...";
      this._handleFormSubmit(this.getInputValues());
    });
  }
}
