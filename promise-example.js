// JS is single threaded, synchronous language

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  /* setTimeout(() => {
    heading1.classList.add('red');
    setTimeout(() => {
      heading2.classList.add('green');
      setTimeout(() => {
        heading3.classList.add('blue');
      }, 1000);
    }, 1000);
  }, 1000); */
});

const promise = new Promise((resolve, reject) => {
  let value = true;
  if (value) resolve(value);
  reject(value);
});

promise
  .then((value) => console.log(value))
  .catch((value) => {
    console.error(value);
  });
