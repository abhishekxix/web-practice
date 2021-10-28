// // /* 'use strict'

// // const btn = document.querySelector('.btn')
// // btn.addEventListener('click', () => {
// //   console.log('button clicked')
// // })
// // // console.log(btn)
// // // for (let i = 0; i < 20; i++) {
// // //   btn.click()
// // // }
// // // console.log(typeof undefined)
// // const names = [
// //   'abhishek',
// //   'john',
// //   'susan',
// //   'peter',
// //   'lmao',
// //   'no',
// //   'more',
// //   'people',
// // ]

// // names.forEach((item) => {
// //   console.log(item)
// // })

// // const hello = function () {
// //   return 'hello'
// // }

// // const person = {
// //   name: 'abhishek',
// //   age: 20,
// //   hello() {
// //     return `hello ${this.name}`
// //   },
// // }

// // console.log(person)

// // let text = 'Peter Johnson'
// // let result = text.charAt(text.length - 1)
// // console.log(result)

// // btn.style.color = 'white'
// // btn.style.backgroundColor = 'red'
// // // btn.style.width = '100vw'
// // // btn.style.height = '100vh'

// // const first = document.querySelector('#first')
// // const second = document.createElement('div')
// // second.innerHTML = first.innerHTML
// // document.body.append(second)
// // // second.remove()
// // // document.body.removeChild(first)
// //  */

// // // const btn = document.querySelector('.btn')
// // // const container = document.querySelector('.container')
// // // // const heading = document.querySelector('.heading')

// // // function sayHello() {
// // //   console.log('hello there')
// // // }

// // // // heading.addEventListener('click', sayHello)

// // // btn.addEventListener('click', function () {
// // //   const element = document.createElement('h1')
// // //   element.classList.add('heading')
// // //   element.textContent = `I am inside container`
// // //   container.appendChild(element)
// // // })

// // // container.addEventListener('click', function (e) {
// // //   if (e.target.classList.contains('heading')) console.log('hello there')
// // // })

// // // IIFE - Immediately Invoked function expressions

// // const num1 = 30;
// // const num2 = 50;

// // function add() {
// //   // can access global variables
// //   console.log(`the result is: ${num1 + num2}`);
// // }

// // add();

// // // this was useful when only var was available
// // // it was an emulation of the block scope
// // (function () {
// //   const num3 = 59;
// //   const num4 = 50;
// //   // these are not accessible out of the IIFE
// //   console.log('hello world');
// // })();

// // const result = (function () {
// //   const num3 = 59;
// //   const num4 = 50;
// //   // these are not accessible out of the IIFE
// //   console.log('hello world');
// // })(); //it is invoked immediately

// // // function and var declarations are hoisted
// // // var values are not hoisted
// // // let and const are not

// // // --------------------------
// // // Closures are functions that return a function
// // // Closure gives access to an outer function's scope from an inner function
// // // make private variables with closure
// // function outer() {
// //   let privateVar = 'secret';

// //   function inner() {
// //     console.log(`hello there secret is : ${privateVar}`);
// //   }
// //   return inner;
// // }

// // // outer()();
// // const value = outer();
// // console.log(value);
// // value();

// // // ----------------------------------------
// // // function newAccount(name, initialBalance) {
// // //   let balance = initialBalance;
// // //   function showBalance() {
// // //     console.log(`Hey ${name}, your balance is ${balance}`);
// // //   }
// // //   return showBalance;
// // // }

// // // // Inner will remember the values when closure was invoked
// // // const susan = newAccount('susan', 500);
// // // const john = newAccount('john', 4000);
// // // const bobo = newAccount('bobo', 1000);

// // // susan();
// // // john();
// // // bobo();

// // // ----------------------------------------
// // // object with private fields or attributes
// // function newAccount(name, initialBalance) {
// //   let balance = initialBalance;
// //   function showBalance() {
// //     console.log(`Hey ${name}, your balance is ${balance}`);
// //   }

// //   function deposit(amount) {
// //     balance += amount;
// //     showBalance();
// //   }

// //   function withdraw(amount) {
// //     if (amount > balance)
// //       console.log(`Hey ${name}, sorry, not enough funds available`);
// //     balance -= amount;
// //     showBalance();
// //   }

// //   return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
// // }
// // const susan = newAccount('susan', 500);
// // const john = newAccount('john', 4000);
// // const bobo = newAccount('bobo', 1000);

// // john.deposit(20000);
// // john.withdraw(4300);

// // // ----------------------------------------------
// // // tagged template literals

// // const author = 'Some author';
// // const statement = 'some statement';

// // const quote = highlight`Here is the ${statement} by ${author} and it could not be more true`;
// // const container = document.querySelector('.container');
// // // console.log(container);
// // const paragraph = document.createElement('div');
// // paragraph.innerHTML = quote;
// // // console.log(paragraph);
// // container.appendChild(paragraph);
// // // console.log(quote);

// // function highlight(text, ...args) {
// //   const awesomeText = text.map((item, index) => {
// //     return `${item} <strong> ${args[index] || ''}</strong>`;
// //   });
// //   return awesomeText.join('');
// // }

// const sayHi = () => console.log('hello');
// sayHi();
// const double = (value) => value * 2;
// const num = double(4);
// console.log(num);

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => console.log('you clicked me'));

// const bob = {
//   firstName: 'bob',
//   sayname: function () {
//     // this is determined by the caller
//     console.log(this);
//     setTimeout(function () {
//       // the caller is not bob this time, so the property is undefined
//       // this will refer to window object in this case
//       console.log(this.firstName);
//     });
//     setTimeout(() => {
//       // here, this refers to the current surrounding scope, hence bob
//       console.log(this.firstName);
//     });
//     // or we can pass self = this as a an argument to either arrow function or the normal function object
//   },
// };

// const anna = {
//   firstName: 'bob',
//   sayname: () => {
//     // this refers to current the surrounding scope
//     console.log(this.firstName);
//   },
// };

// bob.sayname();
// // anna.sayname();

// // default parameters
// function print(value = 0) {
//   console.log(value);
// }
// print();

// // hoisting does not work with arrow functions because they have to be assigned to a variable

// Destructuring in ES6
// const fruits = ['orange', 'banana', 'lemon'];

// const [a, b, c, d, e, f] = fruits;
// console.log(a, b, c, d, e, f);
/* 
const [a, , c] = fruits;
console.log(a, c);

let first = 'bob';
let second = 'john';
// swapping using array destructuring
[second, first] = [first, second]; */

// // Object destructuring
// const bob = {
//   first: 'bob',
//   last: 'sanders',
//   city: 'chicago',
//   siblings: {
//     sister: 'jane',
//   },
// };
// // the variable name must match the name of the property we want to access and assign to it
// const {
//   first: firstName,
//   last,
//   city,
//   siblings: { sister: favoriteSibling },
// } = bob;

// console.log(firstName, last, city, favoriteSibling);
// // destructuring can also be used with function arguments when an object is passed

// function printPerson({
//   first: firstName,
//   last,
//   city,
//   siblings: { sister: favoriteSibling },
// }) {
//   console.log(firstName, last, city, favoriteSibling);
// }
// printPerson(bob);

// // ___________________________-
// // new string methods in es6
// const person = 'Peter Smith';
// const employee = '23456-EMP-PETER-SMITH';
// const manager = '23456-MAN-JOHN-DOE';

// // startsWith
// console.log(person.startsWith('Pet'));
// console.log(employee.startsWith('EMP', 6));

// // endsWith
// console.log(manager.endsWith('DOE'));
// console.log(manager.endsWith('DOE', 9));

// // includes
// console.log(employee.includes('PET'));

// // repeat
// const multiplyPeople = (person, amount) => person.repeat(amount);

// console.log(multiplyPeople(person, 50));

// const fruits = ['apple', 'orange', 'banana', 'peach'];
// const longName = 'John Smith Pepper III';
// let shortName = '';
// // for of loops through the values of an iterable object
// // String, Array, Map, Set, etc.

// for (const letter of longName) {
//   if (letter === ' ') {
//     continue;
//   }
//   shortName += letter;
// }

// console.log(shortName);

// for (const fruit of fruits) {
//   if (fruit === 'banana') continue;
//   console.log(fruit);
// }

// // spread operator
// const udemy = 'udemy';
// const boys = ['john', 'peter', 'bob'];
// const girls = ['susan', 'anna'];
// const bestFriend = 'arnold';

// const friends = [...boys, ...girls, ...bestFriend];
// console.log(friends);

// // const newFriends = friends //this is reference assignment
// const newFriends = [...friends]; // this will produce a copy of friends array

// // with es8, we can also use the spread operator with objects
// const person = {
//   name: 'john',
//   job: 'developer',
// };
// const newPerson = { ...person, name: 'peter' }; // override or create new property

// newPerson.city = 'chicago';

// console.log(newPerson);

// // spread operator also helps with conversion from nodelist to array

// const divs = document.querySelectorAll('div');

// const divlist = [...divs];
// console.log(divlist);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(Math.max(...numbers));

// --------------------------------------
// Rest operator
// gathers rest of the items

// arrays
// const fruits = ['apple', 'orange', 'banana', 'peach'];
// const [first, second, ...rest] = fruits;
// console.log(rest);

// // objects
// const person = {
//   name: 'john',
//   lastName: 'smith',
//   job: 'developer',
// };
// const { job, ...others } = person;

// console.log(others);

// // collecting the function parameters
// const getAvg = (name, ...scores) => {
//   let avg = scores.reduce((accumulator, curr) => accumulator + curr);
//   return avg / scores.length;
// };

// console.log(getAvg('john', 1, 2, 3, 4, 5));

// -----------------------------------------

// new Array methods
// Array.from, Array.of - Not on the prototype

// Array.of() creates array from var args
const friends = Array.of('john', 1, true);
console.log(friends);

// Array.from() returns an array with the elements of an object with the length property or an iterable object

const udemy = 'udemy';
console.log(Array.from(udemy));

function counTotal() {
  let total = Array.from(arguments).reduce((acc, curr) => acc + curr);
  return total;
}

console.log(counTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const e = document.querySelectorAll('.container');
// the second argument is the map method callback
const elements = Array.from(e, (item) => `this is ${item}`);

console.log(elements);
