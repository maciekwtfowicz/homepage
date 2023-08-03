const firstName = 'Maciek Korsan';
const age = 35;

console.log(`Nazywam się ${firstName} i mam ${age} lat`);

const header = document.querySelector('.page-header__heading--js')



const contentJs = document.querySelector('.my-article__content--js');

contentJs.innerHTML = 'Jestem wypełniony javascriptem  🤯'

const calculate = myNumber => (myNumber+4)*7


calculate(1);

const result = calculate(2);
console.log(result)


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

 deathStar.fire('alderaan')
 deathStar.fire('scarif')

const greet = (name, age) => {
  const result = `Witaj ${name}! Masz ${age} lat!`;
  return result;
}

const greeting = greet('Maciek', 35);

console.log(greeting)

console.log(greet('Karolina', 34))



const button = document.querySelector('.page-header__button--js')

button.addEventListener('click', (e) => {
  const header = document.querySelector('.page-header__heading--js');
  header.innerHTML = 'klik, klik!';
})

