// map -> callback function

const num = [1, 2, 3, 4, 5, 6]

const num1 = num.map((num) => num + 10)

console.log(num1);



// this is called method chaining


const num2 = num.map((i) => i * 10)
  .map((i) => i + 1)
  .filter((i) => i % 2 == 0)

console.log(num2);
