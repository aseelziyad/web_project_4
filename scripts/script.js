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

//popup Edit//

const allThePopups = document.querySelectorAll(".popup");

const popupEditProfile = document.querySelector(".popup_edit-profile");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupSubmitButton = document.querySelectorAll(".popup__submit-btn");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const formElement = document.querySelector(".popup__form");
const formEdit = document.querySelector("#form-edit");
const nameInput = document.querySelector("#input-name");
const aboutInput = document.querySelector("#input-about");

// open popupfunc//
function openPopup(popup) {
  popup.classList.add("popup_active");
  document.addEventListener("keydown", closePopupKey);
  document.addEventListener("mousedown", closePopupClick);
}

// function popup closed with key//

function closePopupKey(event) {
  if (event.key === "Escape") {
    closePopup(document.querySelector(".popup_active"));
  }
}
// function popup closed with mouse//
function closePopupClick(event) {
  if (event.target.classList.contains("popup_active")) {
    closePopup(document.querySelector(".popup_active"));
  }
}
//close popupfunc//
function closePopup(popup) {
  popup.classList.remove("popup_active");
  document.removeEventListener("keydown", closePopupKey);
  document.removeEventListener("mousedown", closePopupClick);
}

function handleFormSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;

  closePopup(popupEditProfile);
}
formEdit.addEventListener("submit", handleFormSubmit);

profileEditButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileSubtitle.textContent;
  checkFormValidity(formEdit, pageSettings);
  openPopup(popupEditProfile);
});

const allCloseButtons = document.querySelectorAll(".popup__close");

// close popups//
allCloseButtons.forEach((button) =>
  button.addEventListener("click", () => {
    allThePopups.forEach((popup) => closePopup(popup));
  })
);

//-----------------------------------popupAddcard------------------------------//

const popupAddCard = document.querySelector(".popup_add-card");
const profileAddButton = document.querySelector(".profile__add-button");
const titleInput = popupAddCard.querySelector("#input-title");
const imageLinkInput = popupAddCard.querySelector("#input-image-link");
const addForm = popupAddCard.querySelector("#form-add");

//______________________template--------------------------//
const cardTemplate = document.querySelector("#card-template").content;
const cards = document.querySelector(".photographs");
const popupImage = document.querySelector(".popup_image");

function createCard(cardData) {
  // cardData = name link
  const card = cardTemplate.querySelector(".photograph").cloneNode(true);

  const cardImage = card.querySelector(".photograph__post");
  const cardTitle = card.querySelector(".photograph__title");

  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  //-------------------------popupImage-----------------//
  cardImage.addEventListener("click", () => {
    popupImage.querySelector(".popup__image-card").src = cardData.link;
    popupImage.querySelector(".popup__image-title").textContent = cardData.name;
    popupImage.querySelector(".popup__image-card").alt = cardData.name;

    openPopup(popupImage);
  });
  //-----------------------deleteButton-------------------//
  const cardDeleteButton = card.querySelector(".photograph__delete-button");

  cardDeleteButton.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });
  //-------------------------likeButton-------------------//
  const cardLikeButton = card.querySelector(".photograph__like-button");
  cardLikeButton.addEventListener("click", (event) => {
    event.target.classList.toggle("photograph__like-button_active");
  });

  return card;
}

//------------------------submitting NewCard--------------------//
function addNewCard(event) {
  event.preventDefault();
  const newCard = {
    name: titleInput.value,
    link: imageLinkInput.value,
  };
  cards.prepend(createCard(newCard));
  titleInput.value = "";
  imageLinkInput.value = "";
  closePopup(popupAddCard);
}

initialCards.forEach((initialCardData) => {
  cards.prepend(createCard(initialCardData));
});

profileAddButton.addEventListener("click", function () {
  checkFormValidity(addForm, pageSettings);
  openPopup(popupAddCard);
});
popupAddCard.addEventListener("submit", addNewCard);
