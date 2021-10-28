const btn = document.querySelector('.btn');
console.log(btn);
btn.addEventListener('click', () => {
  getData();
});

function getData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', './api/sample.json');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // const text = document.createElement('p');
      // text.textContent = xhr.responseText;
      // document.body.appendChild(text);
      console.log(typeof xhr.responseText);
      const data = JSON.parse(xhr.responseText);
      const displayData = data
        .map((item) => {
          return `<p> ${item.name}</p>`;
        })
        .join('');
      const elt = document.createElement('div');
      elt.innerHTML = displayData;
      document.body.appendChild(elt);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };

  xhr.send();
}
