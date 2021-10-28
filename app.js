// JS is single threaded, synchronous language
// make soup
// chop onion
// boil water for 10 minutes
// add carrots and boil for 5 minutes
// add onion and boil water for 5 minutes

boilWater(10000);

function boilWater(time) {
  console.log('boiling...');
  console.log('chop carrot');

  setTimeout(() => {
    console.log('add carrots');

    console.log('chop onion');

    setTimeout(() => {
      console.log('carrots are done.');
      console.log('add onions');
      setTimeout(() => {
        console.log('soup is done');
      }, 5000);
    }, 5000);
  }, time);
}
