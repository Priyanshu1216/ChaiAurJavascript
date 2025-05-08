// Numbers 

const num = 100 

//or

const num1 = new Number(100) // this format should be used more frequent

console.log(num);
console.log(num1);


// type cast

console.log(num.toString());

// to fixed

console.log(num.toFixed(2)); // represent number in fraction value


// locale string --> represent numbers in local values

const hundred = 100000000
console.log(hundred.toLocaleString());



////////////////////// Maths ////////////////////////////////////////////////


console.log(Math);

console.log(Math.sqrt(2));

console.log(Math.PI);

console.log(Math.abs(-4));

console.log(Math.round(4.3));
console.log(Math.round(4.6));

console.log(Math.ceil(3.4));
console.log(Math.floor(3.4));




// Math.random always gives value beyween 0 and 1

console.log(Math.floor((Math.random()*10) + 1));



// Getting random number beyween given min and max range

const min = 10
const max = 20


console.log(Math.floor(Math.random() * (max - min + 1)) + min);






