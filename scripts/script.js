let popup = document.querySelector(".popup");
let closeButton = popup.querySelector(".popup__close");

let editButton = document.querySelector(".profile__edit-button");
let profileTitle = document.querySelector(".profile__title")
let profileSubtitle = document.querySelector(".profile__subtitle")

let formElement = document.querySelector(".popup__form")
let nameInput = document.querySelector("#Name");
let aboutInput= document.querySelector("#About");

function openPopup() {
popup.classList.add("popup_active");
nameInput.value = profileTitle.textContent;
aboutInput.value = profileSubtitle.textContent;
}

function closePopup() {
    popup.classList.remove("popup_active");
}

function handleFormSubmit(evt) {
    evt.prevent.Default();
    profileTitle.textContent = nameInput.value
    profileSubtitle.textContent = aboutInput.value
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleFormSubmit);


