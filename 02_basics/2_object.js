// Objects

// Singleton -> creating objects through constructor // Object.create

// Object literals

const sym = Symbol("hello");


const user = {
  name: "rashu",
  age: 24,
  [sym]: "hello again from sysmbol" 
}

console.log(user);

console.log(user.name); // this is how we access the key values of objects

// another way to access the elements

console.log(user["age"]);
console.log((user[sym]));

user.addFunction = function(){
  console.log("hello from function");
}

user.addFunction2 = function(){
  console.log(`hello from function ${this.name}`);
}


console.log(user);
console.log(user.addFunction2());







// Using Singleton method to create objects

const newObj = new Object()

newObj.id = "abc123"
newObj.name=  "priyanshu"
newObj.isLoggedIn = true


newObj.fullName = {
  email: "email.com",
  funnname: {
    firstname: "priyanshu",
    lastname: "nigam"
  }
}


console.log(newObj);


// merge two objects

const ob1 = {1:"1", 2:"2"}
const ob2 = {3:"3", 4:"4"}

const ob3 = Object.assign(ob1, ob2) // or Object.assign({}, ob1, ob2)


const ob4 = {...ob1, ...ob2} // spread opeator

console.log(ob4);

console.log(ob3);


// Keys and values


console.log(Object.keys(ob4)); // returns all keys in array


console.log(Object.values(ob4)); // return values in array



console.log(Object.entries(ob4)); // return key and values in array of arrays




// Destructuring of Objects

const course = {
  name: "JS in English",
  price: "999",
  instructor: "priyanshu"
}

console.log(course.instructor);



const {instructor: ins} = course // destructuring from course object


// console.log(instructor);  or
console.log(ins);



// Json format


// {
//   "name": "rashu",
//   "age": 24,
//   "location": "Indore"
// }