const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

const container = document.querySelector('.image-container');

btn.addEventListener('click', () => {
  loadImage(url)
    .then((img) => {
      container.appendChild(img);
    })
    .catch();
});
const url = 'https://source.unsplash.com/random';

function loadImage(url) {
  return new Promise((resove, reject) => {
    let img = new Image();
    img.addEventListener('load', () => resove(img));
    img.addEventListener('error', () => reject());

    img.src = url;
  });
}
