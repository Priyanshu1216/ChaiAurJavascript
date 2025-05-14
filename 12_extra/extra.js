
const CODE_WORK = [
  'Compilers intensily bestow',
  'On commencing without ego',
  'Different processes ajar',
  'Exit with zero quick',
];


// console.log(CODE_WORK[0]);
CODE_WORK.forEach(ele => {
  console.log(ele.at(-1));
});

for (const ele of CODE_WORK) {
  console.log(ele);
}

for (let i = 0; i < CODE_WORK.length; i++) {
  console.log(CODE_WORK.at(-1));
}