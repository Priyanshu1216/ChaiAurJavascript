## Project 1 solution

```JavaScript


const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

// console.log(buttons)

buttons.forEach((button) => {
  // console.log(button)
  button.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    body.style.backgroundColor = `${e.target.id}`;
  });
});

```