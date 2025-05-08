// reduce

const num = [1, 2, 3, 4]


const myTotal = num.reduce((acc, currVal) => {
  return acc + currVal;
}, 0)  // passing initial value to accumulator


console.log(myTotal);


// or


console.log(num.reduce((acc, currVal) => acc + currVal, 0))



const shoppingCart = [
  {
    "item": "JS course",
    "price": 999
  },
  {
    "item": "Python course",
    "price": 1999
  },
  {
    "item": "Ruby course",
    "price": 2999
  },
  {
    "item": "Java course",
    "price": 3999
  }
]


const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)


console.log(total);
