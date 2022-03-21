export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
      .then(this._getResponseData);
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then(this._getResponseData);
  }

  setUserInfo({ name, about, avatar }) {
    return fetch(`${this._baseUrl}/users/me `,{
      headers: this._headers,
      method: "PATCH",

      body: JSON.stringify({
        name,
        about,
        avatar,
      }),
    })
      .then(this._getResponseData);
  }

  createCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(this._getResponseData);
  }

   deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    })
    .then(this._getResponseData);
   }
  
   likeCard(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      headers: this._headers,
      method: "PUT",
    })
    .then(this._getResponseData);
   }
  
  disLikeCard(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      headers: this._headers,
      method: "DELETE",
    })
    .then(this._getResponseData);
  }

  setUserAvatar(imageLink) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify
        ({ avatar: imageLink }),
    })
    .then(this._getResponseData);
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`); 
    }
    return res.json();
  }
}

