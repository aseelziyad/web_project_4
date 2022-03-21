import "./index.css";
import Popup from "../components/Popup.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Api from "../utils/Api.js";
import {
  settings,
  profileEditButton,
  profileAddButton,
  avatarEditButton,
  editForm,
  avatarForm,
  addForm,
  nameInput,
  aboutInput,
  popupImageClass,
  popupDelete,
} from "../utils/constants.js";
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "6edae45a-96e2-41b1-a788-2616fd5c518a",
    "Content-Type": "application/json",
  },
});

let userId;
// let newInfo = {};

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cardsData, userData]) => {
    userId = userData._id;
    cardList.renderer(cardsData);
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
    });
    userInfo.setUserAvatar(userData.avatar);
  })
  .catch((err) => {
    console.log(err);
  });
//-------- create cards

const imagePopup = new PopupWithImage(popupImageClass);
imagePopup.setEventListeners();

const deleteCardPopup = new PopupWithSubmit(popupDelete);
deleteCardPopup.setEventListeners();

function createCard({ data }) {
  const card = new Card(
    {
      data,
      handleCardClick: () => {
        imagePopup.openImage(data.name, data.link);
      },
      handleLikeIcon: (id) => {
        const isLiked = card.checkLikes();
        if (isLiked) {
          api
            .disLikeCard(id)
            .then((res) => {
              card.updateLike(res.likes);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          api
            .likeCard(id)
            .then((res) => {
              card.updateLike(res.likes);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },

      handleDeleteCard: (id) => {
        deleteCardPopup.open();

        deleteCardPopup.setAction(() => {
          api
            .deleteCard(id)
            .then((res) => {
              card.deleteCard();
              deleteCardPopup.close();
            })
            .catch((err) => {
              console.log(err);
            });
        });
      },
    },
    "#card-template",
    userId
  );
  //this._element
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section(
  {
    renderer: (data) => {
      cardList.addItem(createCard({ data }));
    },
  },
  ".photographs"
);

// ------ Profile
const editFormValidator = new FormValidator(settings, editForm);
editFormValidator.enableValidation();

const userInfo = new UserInfo({
  userNameSelector: ".profile__title",
  userInfoSelector: ".profile__subtitle",
  userAvatarSelector: ".profile__avatar",
});

const editProfilePopup = new PopupWithForm(
  ".popup_edit-profile",
  handleProfileFormSubmit,
  editFormValidator
);
editProfilePopup.setEventListeners();

function handleProfileFormSubmit(data) {
  editProfilePopup.showLoading();
  api
    .setUserInfo(data)
    .then((data) => {
      userInfo.setUserInfo(data);
      editProfilePopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editProfilePopup.hideLoading();
    });
}

function handleEditButton() {
  const { name, about } = userInfo.getUserInfo();
  nameInput.value = name;
  aboutInput.value = about;
  editProfilePopup.open();
}
// ________Avatar

const avatarFormValidator = new FormValidator(settings, avatarForm);
avatarFormValidator.enableValidation();

const editAvatarPopup = new PopupWithForm(
  ".popup_avatar",
  handleAvatarFormSubmit,
  avatarFormValidator
);
editAvatarPopup.setEventListeners();

function handleAvatarFormSubmit(data) {
  editAvatarPopup.showLoading();

  api
    .setUserAvatar(data.avatar)
    .then((res) => {
      userInfo.setUserAvatar(data.avatar);
      editAvatarPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editAvatarPopup.hideLoading();
    });
}

function handleAvatarButton() {
  editAvatarPopup.open();
}

// ---------Add Card

const addFormValidator = new FormValidator(settings, addForm);
addFormValidator.enableValidation();

const addCardPopup = new PopupWithForm(
  ".popup_add-card",
  handleCardFormSubmit,
  addFormValidator
);
addCardPopup.setEventListeners();

function handleCardFormSubmit({ name, link }) {
  addCardPopup.showLoading();

  const data = {
    name: name,
    link: link,
  };
  api
    .createCard(data)
    .then((data) => {
      cardList.addItem(createCard({ data }));
      addCardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addCardPopup.hideLoading();
    });
}

function handleAddButton() {
  addCardPopup.open();
}

// ------------- eventListeners
profileEditButton.addEventListener("click", handleEditButton);
profileAddButton.addEventListener("click", handleAddButton);
avatarEditButton.addEventListener("click", handleAvatarButton);
