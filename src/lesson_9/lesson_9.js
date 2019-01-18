import './lesson_9.scss';
const buttons = document.querySelectorAll('.btn');

function btnToggler(btn, color) {
  let isActive = false;

  function toggleClass() {
    if(isActive === false) {
      btn.style.backgroundColor = color;
      isActive = true;
    } else {
      btn.style.backgroundColor = 'transparent';
      isActive = false;
    }
  }

  btn.onclick = toggleClass;
}

function generateColor() {
  const getRandValue = () => Math.round(Math.random() * (0 - 255) + 255);

  return `rgb(${getRandValue()}, ${getRandValue()}, ${getRandValue()})`;
}

for(let i = 0; i < buttons.length; i++) {
  console.log(buttons[i]);
  btnToggler(buttons[i], generateColor());
}

btnToggler(document.querySelector('.test'), generateColor());


let students = [
  { name: 'Vasya', age: 18},
  { name: 'Petya', age: 16},
  { name: 'Alex', age: 5},
];

function averageAge(people) {
  let totalAge = 0;

  for (let i = 0; i < students.length; i++) {
    totalAge = totalAge + people[i].age;
  }
  return totalAge / people.length
}

function maxAge(people) {
  let maxAge = 0;

  for (let i = 0; i < people.length; i++) {
  if (maxAge < people[i].age) {
    maxAge = people[i].age;
    name = people[i].name;
  }
  }
  return name;
}

let arr = [-1, 0, 1];

function isPossitive(arr) {
  let isPositive = true;
  for (let i = 0; i < arr.length; i++)
  if (arr[i] < 0) {
    isPositive = false;
    break;
  }
  
  return isPosititve;
}



console.log(averageAge(students));
console.log(maxAge(students));
console.log(isPositive([1, 0, 10, -20, 1]));