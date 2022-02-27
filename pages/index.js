// import "./pages/indec.css";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import {
  initialCards,
  settings,
  profileEditButton,
  profileAddButton,
  editForm,
  addForm,
  nameInput,
  aboutInput,
  popupImageClass,
} from "../utils/constants.js";

//!!-------- define consts
const imagePopup = new PopupWithImage(popupImageClass);
imagePopup.setEventListeners();

//!!-------- create cards
function createCard({ data }) {
  const card = new Card(
    {
      data,
      handleCardClick: () => {
        imagePopup.openImage(data.name, data.link);
      },
    },
    "#card-template"
  );
  //this._element
  const cardElement = card.getCardTemplate();
  return cardElement;
}

const cardList = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      cardList.addItem(createCard({ data }));
    },
  },
  ".photographs"
);
cardList.renderer();

// !!------ Profile
const editFormValidator = new FormValidator(settings, editForm);
editFormValidator.enableValidation();

const userInfo = new UserInfo({
  userName: ".profile__title",
  userInfo: ".profile__subtitle",
});

const editProfilePopup = new PopupWithForm(
  ".popup_edit-profile",
  handleProfileFormSubmit,
  editFormValidator
);

function handleProfileFormSubmit(data) {
  userInfo.setUserInfo(data.name, data.job);
  editProfilePopup.setEventListeners();
  editProfilePopup.close();
}

function handleEditButton() {
  const { name, job } = userInfo.getUserInfo();
  nameInput.value = name;
  aboutInput.value = job;
  editProfilePopup.open();
}

// !!---------Add Card

const addFormValidator = new FormValidator(settings, addForm);
addFormValidator.enableValidation();

const addCardPopup = new PopupWithForm(
  ".popup_add-card",
  handleCardFormSubmit,
  addFormValidator
);
addCardPopup.setEventListeners();

function handleCardFormSubmit() {
  const inputValues = addCardPopup._getInputValues();
  const data = {
    name: inputValues.title,
    link: inputValues.imageLink,
  };
  addCardPopup.close();
  cardList.addItem(createCard({ data }));
  addCardPopup.reset();
}

function handleAddButton() {
  addCardPopup.open();
}

// !!------------- eventListeners
profileEditButton.addEventListener("click", handleEditButton);
profileAddButton.addEventListener("click", handleAddButton);
