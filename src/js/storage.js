console.log('hello storage')

const myObject = {
  name: 'maciek',
  age: 35
}

localStorage.setItem('name', JSON.stringify(myObject))

const fromStorage = JSON.parse(localStorage.getItem('name'));

console.log(fromStorage)

