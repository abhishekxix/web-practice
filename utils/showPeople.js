import get from './getElement.js';

const showPeople = (people) => {
  const container = get('.container');
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

export default showPeople;
