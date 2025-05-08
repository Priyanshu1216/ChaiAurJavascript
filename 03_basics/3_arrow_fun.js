// Arrow functions


// this is mostly used whith objects


const user = {
  name: "rashu",
  age: 24,
  welcome: function(){
    console.log(`${this.name} welcome`); // this is used for current context


    console.log(this); 
  }
}



user.welcome();
user.name = "raja"
user.welcome()


console.log(this);





function chai(){
  let username = "Rashu" 
  console.log(this.username); // undefined because we are not using with objects
}


chai()



// Arrow functions

const chai1 = () => {
  let username = "Rashu" 
  console.log(this.username);
}

chai1()




// () => {}       this is arrow function syntax



// we can also use as variable



const addTwo = (a,b) => {
  return a + b;             // this is explicit return, means we have to use return keyword in parenthesis.
}


console.log(addTwo(1,2));



const addTwo1 = (a,b) => (a + b);             // this is implicit return, means we do not have to use return keyword and neither parenthesis.


console.log(addTwo1(2,3));


// what if we have to return an object


const addTwo2 = (a,b) => ({user: "rashu"});

console.log(addTwo2(2,3));

