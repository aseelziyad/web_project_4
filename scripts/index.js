// import formValidator from "./formValidater.js";

import Card from "./card.js";
import FormValidator from "./FormValidater.js";
import { openPopup, closePopup } from "./utils.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const popupEditProfile = document.querySelector(".popup_edit-profile");
const nameInput = document.querySelector("#input-name");
const aboutInput = document.querySelector("#input-about");
const editForm = document.querySelector("#form-edit");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const cards = document.querySelector(".photographs");
const popupAddCard = document.querySelector(".popup_add-card");
const titleInput = popupAddCard.querySelector("#input-title");
const imageLinkInput = popupAddCard.querySelector("#input-image-link");
const addForm = popupAddCard.querySelector("#form-add");
//______________________template--------------------------//
const settings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visiable",
};
// !!-----form Validator
const editFormValidator = new FormValidator(settings, editForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(settings, addForm);
addFormValidator.enableValidation();

//!!-------- create cards
const createCards = () => {
  initialCards.forEach((cardData) =>
    cards.append(new Card(cardData, "#card-template").getCards())
  );
};
createCards();
// !!------ Handlers
function handleFormSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;

  closePopup(popupEditProfile);
}

function handleEditButton() {
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileSubtitle.textContent;
  openPopup(popupEditProfile);
  editFormValidator.reset();
}

// !!---------Adding newCard form
function handleAddNewCard(event) {
  event.preventDefault();
  const addCard = {
    name: titleInput.value,
    link: imageLinkInput.value,
  };
  const card = new Card(addCard, "#card-template").getCards();
  cards.prepend(card);
  closePopup(popupAddCard);
}

function handleAddButton() {
  openPopup(popupAddCard);
  addForm.resetForms();
  addFormValidator.resetForms();
}
// !!------------- eventListeners
profileEditButton.addEventListener("click", handleEditButton);
profileAddButton.addEventListener("click", handleAddButton);
editForm.addEventListener("submit", handleFormSubmit);
addForm.addEventListener("submit", handleAddNewCard);
