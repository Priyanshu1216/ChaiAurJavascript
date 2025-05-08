const code = ["js", "ruby", "java", "py", "cpp"]

code.forEach(ele => {
  console.log(ele);
});


// for Each loop holds various values as well
// it has item, index and also full array

code.forEach((ele, index, code) => {
  console.log(ele, index, code);
});