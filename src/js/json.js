const myObject = {
  name: "Maciek",
  hi: () => {
    console.log('hi')
  },
  age: 35,
  hobby: ['frontend', 'music', 'gaming']
}

const myJSON  = JSON.stringify(myObject)

console.log(myJSON)

const myParsedObject = JSON.parse(myJSON);

console.log(myParsedObject)