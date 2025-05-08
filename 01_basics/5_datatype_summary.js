// Primitive (Call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const age = 100; //number
let otherAge = 100.34 //number

let str = "rashu" //string
let isLoggedIn = true //boolean
let emptyVar = null // null
let nothing; //undefined

let sym = Symbol('123')
let sym1 = Symbol('123')

console.log(sym === sym1); // In symbols, although we have given them same value, still their memory location is different which makes them unique


let bigNum = 123456789n // bigInt











// Non - primitive (Reference type) (Call by reference)

// Array, Objects, Functions

//  NOTE:  data type of all the non primitives are by default Object, excpet function. (function's datatype is Object function)

//eg.




let arr = [1, 2, 3, 4, 5, "rashu"]
console.log(typeof (arr));
console.log(arr);


const obj = {
  name: "rashu",
  age: 24,
}

console.log(obj);




const myFun = function () {
  console.log("hello world");
}

console.log(myFun);




//-----------------------------------------------------------------------------------------------------------------




// Memory

//stack and Heap

// Stack memory => Primitive data types

// Heap memory => Non - primitve data types


let myName = "priyanshu";
let newName = myName;

newName = "rashu"

console.log(myName);
console.log(newName);



let obj1 = {
  name: "rashu",
  age: 24,
}


let obj2 = obj1

obj2.name = "priyanshu"

console.log(obj1); // here the value of original object obj1.name will be changed to new value because it is refrence datatype (object) which follows heap memory so if we change on one object who is refrenced to other then change will be seen on both the objects.


