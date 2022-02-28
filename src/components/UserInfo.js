export default class UserInfo {
  constructor({ userName, userInfo }) {
    this._name = document.querySelector(userName);
    this._job = document.querySelector(userInfo);
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
