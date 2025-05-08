// IIFE

// Immediately invoked function expression
// functions which needs to be executed immediately



// Steps:

// 1. Create a normal function

function chai(){
  console.log("DB connected");
}

// 2. call the function

// function chai(){
//   console.log("DB connected");
// }()


// 3. Wrap the function inside a ()

(function chai(){
  console.log("DB connected");
})();

// or

( () => {
  console.log("DB connected");
})();



// note-> must use semicolon after the function call


// passing variables to IIFE


( (name) => {
  console.log(`DB connected ${name}`);
})('rashu');

