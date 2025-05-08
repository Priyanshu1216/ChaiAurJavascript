// Arrays -> Collection of multiple items in single variable

const arr = [1,2,3,5]

// Array methods

arr.push(4) // push element in the last of the arry.

console.log(arr);

arr.pop() // removes last element of the array

console.log(arr);



arr.unshift(0) // add element in the start of the array

console.log(arr);



arr.shift() // removes starting element from the array

console.log(arr);

 
console.log(arr.includes(9));  // checks of the given element is available in array or not



console.log(arr.indexOf(1)); // gives index of given element


console.log(arr.join());  // changes array to sting
console.log(typeof (arr.join()));



// Slice and Splice

const arr1 = new Array(1,2,3,4,5,6,7)

console.log("original array: ", arr1);


 const arr2 = arr1.slice(1,3)
 console.log("checking the original array to see if this is affected", arr1);
 
 console.log(arr2);


 // Slice slices the array based on given values but does not change the original array.



 const arr3 = arr1.splice(1,3)

 console.log("checking if the original array is affected after using splice", arr1);
 
 console.log(arr3);
 

 // Splice affects the original array.
 // it slices out the array based on given values including the last given index but changes the original array




 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




 const marvel = ["ironman", "thor", "spiderman"]
 const dc = ["superman", "batman"]

// marvel.push(dc) // or we can use marvel.concat(dc) would also work same

 console.log(marvel);
//  console.log(marvel[3]);
//  console.log(marvel[3][1]);
 

 

//  if we want to merge them into one Array, we have to use spread operator.

// spread operator (...) // it spread everything

 
const marvel1 = [...marvel, ...dc]

console.log(marvel1);






// Convert everything into array


console.log(Array.from("priyanshu")); // from converts everything(string, objects) into array



let score1 = 100;
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2, score3));
