const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  console.log('hello');
  addColor(1000, heading1, 'red')
    .then(() => addColor(1000, heading2, 'green'))
    .then(() => addColor(1000, heading3, 'blue'))
    .catch((err) => console.error(err));
});

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (!element) reject();

    setTimeout(() => {
      element.style.color = color;
      resolve();
    }, time);
  });
}
