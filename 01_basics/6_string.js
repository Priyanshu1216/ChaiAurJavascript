const str = "hello javascript"
const totalLectures = 100;

console.log(str);


// String methods


console.log(str.length); // this method also includes the count of space in string

// String concatination

console.log(`Hi I am learning ${str} which has almost ${totalLectures} lectures`);


// chatAt

console.log(str.charAt(9)); // we need to provide this method index value and this will give output the character which is in that given index


console.log(str.at(0)); // works similar to charAt method

// indexOf

console.log(str.indexOf("j")); // this method is opposite of charAt method


//slice

console.log(str.slice(0,5)); // slices this string based on given index values(start and end values)

// split

console.log(str.split(" ")); // splits the string based on the value we provide to the method



//trim

console.log("     hellll  ".trim()); // removes the whitespaces

// substring

console.log(str.substring(0,7)); // it gives the substring based on parameter given



// includes


console.log(str.includes("java")); // check whether a given value is part of string or not
