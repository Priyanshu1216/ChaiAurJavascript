// Scopes


// let and const have local scope while var has global scope, hence it is not recommended to use var

let a = 100

if (true){
  let a = 10  // local scope

  // console.log(a);
  
  const b = 20 // local scope
  var c = 30 // global scope
}


// console.log(a);
// console.log(b);
// console.log(c);




// nested scope -> inner functions can access parent variables but parent can not use child variables


function one(){
  const name = "Rashu"

  function two(){
    const web = "youtube"
    console.log(name);
  }

  // console.log(web);  // will throw error here

  two();
}

one();




// ====================================================================//







console.log(addOne(5));

function addOne(num){
  return num + 1;
}



addTwo(5) // will throw error because it is not defined above
// can not use before declaration -> hoisting

const addTwo = function(num){
  return num + 2;
}
