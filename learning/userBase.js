class User {

  constructor(name) {
    this.name = name;
  }

  getName() {
    return (this.name);
  }

  getIntroduction() {
    return (`Hi, my name is ${this.name}`);
  }
}

class UserBase {

  constructor(user) {
    this.user = user;
  }

  getUsers() {

    return (this.user).map((name) => {
       return name.getName()
    });
  }

  getIntroduction() {
    return (this.user).map((name) => {
       return name.getIntroduction()
    });
  }
}

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

const userBase = new UserBase(users)
console.log(userBase);
console.log(userBase.getUsers());
console.log(userBase.getIntroduction());
