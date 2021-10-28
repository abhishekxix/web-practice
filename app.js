const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  console.log('hello');
  try {
    await addColor(1000, heading1, 'red');
    await addColor(1000, heading2, 'green');
    await addColor(1000, heading3, 'blue');
  } catch (err) {
    console.error(err);
  }
});
// async functions return a promise by default
async function dipslayColor() {
  // a(); //promise is rejected
  return 'hello'; // the return value is wrapped inside of a promise
}
console.log(dipslayColor());

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (!element) reject();

    setTimeout(() => {
      element.style.color = color;
      resolve();
    }, time);
  });
}
