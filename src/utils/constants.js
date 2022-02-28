export const initialCards = [
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

export const popupEditProfile = document.querySelector(".popup_edit-profile");
export const nameInput = document.querySelector("#input-name");
export const aboutInput = document.querySelector("#input-about");
export const editForm = document.querySelector("#form-edit");
export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);

export const profileAddButton = document.querySelector(".profile__add-button");
export const profileTitle = document.querySelector(".profile__title");
export const profileSubtitle = document.querySelector(".profile__subtitle");

export const popupImageClass = ".popup_image";

export const cardTemplate = document.querySelector("#card-template").content;
export const cards = document.querySelector(".photographs");
export const popupAddCard = document.querySelector(".popup_add-card");
export const titleInput = popupAddCard.querySelector("#input-title");
export const imageLinkInput = popupAddCard.querySelector("#input-image-link");
export const addForm = popupAddCard.querySelector("#form-add");
//______________________template--------------------------//
export const settings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visiable",
};
