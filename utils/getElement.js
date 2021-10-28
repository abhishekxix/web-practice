function getElement(selector) {
  const elem = document.querySelector(selector);
  if (!elem) {
    throw Error('Element not selected');
  }
  return elem;
}

export default getElement;
