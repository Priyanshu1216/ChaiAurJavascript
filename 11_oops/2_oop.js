// // Object literal

// const user = {
//   username: "rashu",
//   loginCount: 10,
//   signedIn: true,

//   getUserDetails: function () {
//     console.log("Details: ", this.username);
//     console.log(this);

//   }
// }

// console.log(user.loginCount);
// console.log(user.getUserDetails());



// // constructor function

// const newObject = new Object()

// function User(username, isLoggedIn) {
//   this.username = username;
//   this.isLoggedIn = isLoggedIn;

//   return this
// }



// const user1 = new User("rashu", true)
// const user2 = new User("rashuuuu", false)

// console.log(user1);



class User {
  constructor(username, email) {
    this.email = email;
    this.username = username
  }

  encryptPassword() {
    return this.email.toLowerCase()
  }
}


const user = new User("rashunigam", "prinigam@gmail.com")

console.log(user.encryptPassword());


// inheritance

class Teacher extends User {
  constructor(username, email) {
    super(username)
    this.email = email
  }
}


console.log(user instanceof User);


// getter & setter methods


class Man {
  constructor(name, email) {
    this.name = name;
    this.email = email
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value
  }
}


const man1 = new Man("Jay", "jay@gmail.com")
console.log(man1);
console.log(man1._name);

