// Dates


let date = new Date()

console.log(date);
console.log(date.toString());
console.log(date.toISOString());
console.log(date.toUTCString());





let myDate = new Date(2023, 0, 31) // months start from 0
console.log(myDate.toDateString());




let myDateTime = new Date(2023, 0, 31, 5,3) 
console.log(myDateTime.toLocaleString());



console.log(Math.floor(Date.now()/1000));

