import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  //note the construter take what can not be common about the abject
  //  the passed constructer's parameters tell us the defined popups and how to handle each one
  //difference is with handling the form (addcard/ editdata) */ but popups are the same in general
  constructor(PopupSelector, handleFormSubmit, validator) {
    super(PopupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._popup.querySelectorAll(".popup__input");

    // we need to reset the validator  whenever we open the popup (in the open mehtod)
    // to do so, we need a validator object (passed by as parameter)
    this._validator = validator;
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  open() {
    // by using the method `resetValidation` of the instance validator
    // it will reset validation form whenever we opne the popop
    // this mehtod is called with INSATNCE (not static)
    this._validator.resetValidation();
    super.open();
  }

  close() {
    super.close();
  }

  reset() {
    this._form.reset();
  }

  setEventListeners() {
    // every popup has submit button
    this._popup.addEventListener("submit", (event) => {
      event.preventDefault;
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }
}
