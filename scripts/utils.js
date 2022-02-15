const allThePopups = document.querySelectorAll(".popup");
const allCloseButtons = document.querySelectorAll(".popup__close");

// !!open popups----------**//
export const openPopup = (popup) => {
  popup.classList.add("popup_active");
  document.addEventListener("keydown", closePopupKey);
  document.addEventListener("mousedown", closePopupClick);
};

// !!close popupButtons-----------**//
allCloseButtons.forEach((button) =>
  button.addEventListener("click", () => {
    allThePopups.forEach((popup) => closePopup(popup));
  })
);

//!close popup!//
export const closePopup = (popup) => {
  popup.classList.remove("popup_active");
  document.removeEventListener("keydown", closePopupKey);
  document.removeEventListener("mousedown", closePopupClick);
};

// !popup closed with key!//

function closePopupKey(event) {
  if (event.key === "Escape") {
    closePopup(document.querySelector(".popup_active"));
  }
}

//!popup closed with click !//
function closePopupClick(event) {
  if (event.target.classList.contains("popup_active")) {
    closePopup(document.querySelector(".popup_active"));
  }
}
