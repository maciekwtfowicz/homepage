const hardware = ['mouse', 'keyboard', 'screen']

const elements = ['😎', '😲', '🤦‍♂️', '🎬']

let myNumber = 13;

const myFunction = (a) => {
  const b = a * 3;
  const c = b * 7;
  return b+c;
}


for (let i = 0; i < elements.length; i++) {
  myNumber = myNumber * (i+1);
  myFunction(i);
}  


for (let element of elements) {
}

let n = 9;
do {
  n = n + 3;
} while (n < 9) 


const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed 💥`)
  },
  isOperating: true,
  levels: 357,
  name: 'Death Star',
  population: 10000,
  commander: {
    name: 'darth vader'
  } 
}

for (property in deathStar) {
}
