## Javascript Project Solution 4 Changing color

```Javascript


function generateColor() {
  let color = '#';
  let hex = '0123456789ABCDEF';

  for (let i = 0; i < 6; i++) {
    let num = hex[Math.floor(Math.random() * 16)];
    color += num;
  }
  return color;
}

let startColor;
function startChangingColor() {
  if (!startColor) startColor = setInterval(changeColor, 1000);
  function changeColor() {
    document.body.style.backgroundColor = generateColor();
  }
}
function stopChangingColor() {
  clearInterval(startColor);
  startColor = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

// console.log(color);


```