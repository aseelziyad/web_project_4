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

const popup = document.querySelector(".popup");

const popupEditProfile = document.querySelector(".popup_edit-profile");
const profileEditButton = document.querySelector(".profile__edit-button");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector("#Name");
const aboutInput = document.querySelector("#About");

const allCloseButtons = document.querySelectorAll(".popup__close");

// open popupfunc//
function openPopup(popup) {
  popup.classList.add("popup_active");
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileSubtitle.textContent;
}
//close popupfunc//
function closePopup() {
  popup.classList.remove("popup_active");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;

  closePopup();
}
// close popups//
allCloseButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    const allThePopups = document.querySelectorAll(".popup");
    allThePopups.forEach((popup) => popup.classList.remove("popup_active"));
    closePopup(allThePopups);
  })
);

//-----------------------------------popupAddcard------------------------------//

const popupAddCard = document.querySelector(".popup_add-card");
const profileAddButton = document.querySelector(".profile__add-button");
const titleInput = popupAddCard.querySelector("#Title");
const imageLinkInput = popupAddCard.querySelector("#ImageLink");
const addForm = popupAddCard.querySelector("#form_add");

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

  //-------------------------popupImage-----------------//
  cardImage.addEventListener("click", () => {
    popupImage.querySelector(".popup__image-card").src = cardData.link;
    popupImage.querySelector(".popup__image-title").textContent = cardData.name;

    openPopup(popupImage);
  });
  //-----------------------deleteButton-------------------//
  const cardDeleteButton = card.querySelector(".photograph__delete-button");

  cardDeleteButton.addEventListener("click", (evt) => {
    evt.target.parentElement.remove();
  });
  //-------------------------likeButton-------------------//
  const cardLikeButton = card.querySelector(".photograph__like-button");
  cardLikeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("photograph__like-button_active");
  });

  return card;
}

//------------------------submitting NewCard--------------------//
function addNewCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: titleInput.value,
    link: imageLinkInput.value,
  };
  cards.prepend(createCard(newCard));
  titleInput.value = "";
  imageLinkInput.value = "";
  closePopup(popupAddCard);
}

initialCards.forEach((initialCardsData) => {
  cards.prepend(createCard(initialCardsData));
});

profileAddButton.addEventListener("click", function () {
  openPopup(popupAddCard);
});
profileEditButton.addEventListener("click", function () {
  openPopup(popupEditProfile);
});
formElement.addEventListener("submit", handleFormSubmit);
popupAddCard.addEventListener("submit", addNewCard);
