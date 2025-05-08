// for loop


const array = [1, 2, 3, 4, 5, 6, 7, 7]

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}


for (let i = 0; i <= 10; i++) {
  console.log(`Outer loop ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`Inner loop j is ${j} and i is ${i}`);

  }

}



// break and continue


for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected five");
    break;
  }
  console.log(index);
}


for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected five");
    continue;
  }
  console.log(index);
}