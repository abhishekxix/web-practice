/* 'use strict'

const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  console.log('button clicked')
})
// console.log(btn)
// for (let i = 0; i < 20; i++) {
//   btn.click()
// }
// console.log(typeof undefined)
const names = [
  'abhishek',
  'john',
  'susan',
  'peter',
  'lmao',
  'no',
  'more',
  'people',
]

names.forEach((item) => {
  console.log(item)
})

const hello = function () {
  return 'hello'
}

const person = {
  name: 'abhishek',
  age: 20,
  hello() {
    return `hello ${this.name}`
  },
}

console.log(person)

let text = 'Peter Johnson'
let result = text.charAt(text.length - 1)
console.log(result)

btn.style.color = 'white'
btn.style.backgroundColor = 'red'
// btn.style.width = '100vw'
// btn.style.height = '100vh'

const first = document.querySelector('#first')
const second = document.createElement('div')
second.innerHTML = first.innerHTML
document.body.append(second)
// second.remove()
// document.body.removeChild(first)
 */

// const btn = document.querySelector('.btn')
// const container = document.querySelector('.container')
// // const heading = document.querySelector('.heading')

// function sayHello() {
//   console.log('hello there')
// }

// // heading.addEventListener('click', sayHello)

// btn.addEventListener('click', function () {
//   const element = document.createElement('h1')
//   element.classList.add('heading')
//   element.textContent = `I am inside container`
//   container.appendChild(element)
// })

// container.addEventListener('click', function (e) {
//   if (e.target.classList.contains('heading')) console.log('hello there')
// })

// IIFE - Immediately Invoked function expressions

const num1 = 30;
const num2 = 50;

function add() {
  // can access global variables
  console.log(`the result is: ${num1 + num2}`);
}

add();

// this was useful when only var was available
// it was an emulation of the block scope
(function () {
  const num3 = 59;
  const num4 = 50;
  // these are not accessible out of the IIFE
  console.log('hello world');
})();

const result = (function () {
  const num3 = 59;
  const num4 = 50;
  // these are not accessible out of the IIFE
  console.log('hello world');
})(); //it is invoked immediately

// function and var declarations are hoisted
// var values are not hoisted
// let and const are not

// --------------------------
// Closures are functions that return a function
// Closure gives access to an outer function's scope from an inner function
// make private variables with closure
function outer() {
  let privateVar = 'secret';

  function inner() {
    console.log(`hello there secret is : ${privateVar}`);
  }
  return inner;
}

// outer()();
const value = outer();
console.log(value);
value();

// ----------------------------------------
function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  return showBalance;
}

// Inner will remember the values when closure was invoked
const susan = newAccount('susan', 500);
const john = newAccount('john', 4000);
const bobo = newAccount('bobo', 1000);

susan();
john();
bobo();
