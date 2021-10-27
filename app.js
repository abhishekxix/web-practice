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
