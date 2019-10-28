const form = document.querySelector('form');
const ul = document.querySelector('myUL');
const button = document.querySelector('button');
const input = document.getElementById('plan');
let plansArray = localStorage.getItem('plans') ? JSON.parse(localStorage.getItem('plans')) : [];

localStorage.setItem('plans', JSON.stringify(plansArray));
const data = JSON.parse(localStorage.getItem('plans'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  myUL.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  plansArray.push(input.value);
  localStorage.setItem('plans', JSON.stringify(plansArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(plan => {
  liMaker(plan);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (myUL.firstChild) {
    myUL.removeChild(myUL.firstChild);
  }
  plansArray = [];
});