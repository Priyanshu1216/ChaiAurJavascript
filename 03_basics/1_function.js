// Functions

// block of code to do some task


function sayMyName(){
  console.log("Priyanshu");
}


sayMyName()


function addTwoNum(a,b){   // here a.b are parameters
  return a + b;
}


const res= addTwoNum(2,3); // passing values when calling functions are called arguments.


console.log("result:",res);



// passing multiple values


function loginUserMessage(username){
  if (username){
    return `${username} just logged In`
  }
  else{
    return "Please pass a value to the funtion"
  }
}


console.log(loginUserMessage("rashu"));
console.log(loginUserMessage()); // undefined just logged In


 
function loginUserMessage(username = "ram"){ // passing default value when no value provided
  if (username){
    return `${username} just logged In`
  }
  else{
    return "Please pass a value to the funtion"
  }
}



// using rest operator

function calculateCartPrice(...prices){
  return prices
}


console.log(calculateCartPrice(1,2,3,4,5));



const user1 = {
  name: "rashu",
  age: 24
}


function handleObject(anyObject){
  console.log(`${anyObject.name} and age is ${anyObject.age}`);
}


handleObject(user1);



// passing array

const newArr = [1,2,3,4,5,6]

function handleArray(arr){
  return arr[1];
}


console.log(handleArray(newArr));
