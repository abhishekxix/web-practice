// JS is single threaded, synchronous language
// make soup
// chop onion
// boil water for 10 minutes
// add carrots and boil for 5 minutes
// add onion and boil water for 5 minutes

boilWater(0);
console.log('chop carrot');
// boilWater(5000);
console.log('chop onion');
// boilWater(5000);

for (let i = 0; i < 10000; i++) console.log('busy');

function boilWater(time) {
  console.log('boiling...');
  setTimeout(() => console.log('done', time), time);
}
