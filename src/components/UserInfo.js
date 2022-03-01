export default class UserInfo {
  constructor({ userNameSelector, userInfoSelector }) {
    this._name = document.querySelector(userNameSelector);
    this._job = document.querySelector(userInfoSelector);
  }

  //  --  returns an object with information about the user.
  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent,
    };
  }

  //  -----takes new user data and adds it on the page
  setUserInfo(name, job) {
    this._name.textContent = name;
    this._job.textContent = job;
  }
}
