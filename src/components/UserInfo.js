export default class UserInfo {
  constructor({ userNameSelector, userInfoSelector, userAvatarSelector }) {
    this._name = document.querySelector(userNameSelector);
    this._about = document.querySelector(userInfoSelector);
    this._avatar = document.querySelector(userAvatarSelector);
  }

  getUserAvatar() {
    return {
      avatar: this._avatar.src
    };
  }

  setUserAvatar(imageLink) {
    this._avatar.src = imageLink;
  }
  //  --  returns an object with information about the user.
  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
    };
  }

  //  -----takes new user data and adds it on the page
  setUserInfo({name, about}) {
    this._name.textContent = name;
    this._about.textContent = about;
  }
}
