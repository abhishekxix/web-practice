import { random } from './utils/data.js'; //for named export
import rdm from './utils/data.js'; // for default export
import { people } from './utils/data.js';

const container = document.querySelector('.container');
const btn = container.querySelector('.btn');

const showPeople = () => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person;
      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join('');
  let peopleDiv = document.querySelector('.people-div');

  if (!peopleDiv) {
    peopleDiv = document.createElement('div');
    peopleDiv.classList.add('people-div');
    container.appendChild(peopleDiv);
    console.log('created');
  }

  peopleDiv.innerHTML = newPeople;
};

btn.addEventListener('click', () => {
  showPeople();
});

console.log(random);
console.log(rdm);
