const hardware = ['mouse', 'keyboard', 'screen']

console.log(hardware);


const newHardware = hardware.slice(1,5)


console.log(newHardware);

console.log(hardware);


const myObject = {
  name: "Maciek",
  age: 35
}

const myText = "jaki tu będzieasdasdmaciekasdasdasd";

const textLegth = myText.length

console.log(myText.slice(0,15))

if (myText.indexOf('Maciek') >= 0) {
  console.log('maciek znaleziony')
} else {
  console.log('maciek nieznaleziony :(')
}

console.log(myText[textLegth-1]) 