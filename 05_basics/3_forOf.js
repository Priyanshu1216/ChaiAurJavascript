// for of loop

// Array specific loop

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
  console.log(val);
}

const str = "hell0 world"

for (const ch of str) {
  console.log(ch);
}


// Maps -> use for key value pair, it remembers the order which you use to enter the values in map.

// -> holds unique values

const map = new Map()

map.set('IN', 'INDIA')
map.set('USA', 'United State of America')

console.log(map);

for (const key of map) {
  console.log(key);

}

// or


for (const [key, value] of map) {
  console.log(key, value);

}

