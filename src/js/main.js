import * as nowaNazwa from "./calculate";
import differenceInDays from 'date-fns/differenceInDays'
import substract from "./substract";

const firstName = 'Maciek Korsan';
const age = 35;

const calculate = () => 'hej hej obliczam';

console.log(`Nazywam się ${firstName} i mam ${age} lat`);

const header = document.querySelector('.page-header__heading--js')



const contentJs = document.querySelector('.my-article__content--js');

contentJs.innerHTML = 'Jestem wypełniony javascriptem  🤯'




calculate(1);

const result = nowaNazwa.calculate(2);


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



const button = document.querySelector('.page-header__button--js')

button.addEventListener('click', (e) => {
 document.documentElement.style.setProperty('--backgroundColor', 'tomato')
})

console.log(`Różnica między 10, a 5 to: ${substract(10,5)}`)
