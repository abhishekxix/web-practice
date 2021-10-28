import { random } from './utils/data.js'; //for named export
import rdm from './utils/data.js'; // for default export
import { people } from './utils/data.js';
import showPeople from './utils/showPeople.js';

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  showPeople(people);
});

console.log(random);
console.log(rdm);
