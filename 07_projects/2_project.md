## Project 2 Solution

```JavaScript

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);

  // console.log(height);
  // console.log(weight);
  const heightInMeter = height / 100;
  const bmiIndex = (weight / (heightInMeter * heightInMeter)).toFixed(2);
  const result = document.querySelector('#results');
  result.innerHTML = bmiIndex;
});


```