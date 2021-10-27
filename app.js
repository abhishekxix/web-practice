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

const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
// const heading = document.querySelector('.heading')

function sayHello() {
  console.log('hello there')
}

// heading.addEventListener('click', sayHello)

btn.addEventListener('click', function () {
  const element = document.createElement('h1')
  element.classList.add('heading')
  element.textContent = `I am inside container`
  container.appendChild(element)
})

container.addEventListener('click', function (e) {
  if (e.target.classList.contains('heading')) console.log('hello there')
})
