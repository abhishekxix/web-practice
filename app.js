import { random } from './utils/data.js'; //for named export
import rdm from './utils/data.js'; // for default export
import { people } from './utils/data.js';
import showPeople from './utils/showPeople.js';
import get from './utils/getElement.js';

const btn = get('.btn');

btn.addEventListener('click', () => {
  showPeople(people);
});

console.log(random);
console.log(rdm);
