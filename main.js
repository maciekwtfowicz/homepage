const firstName = 'Maciek Korsan';
const age = 35;

console.log(`Nazywam się ${firstName} i mam ${age} lat`);

const header = document.querySelector('.page-header__heading--js')


console.log(header.style)

header.style.color = 'red';

const contentJs = document.querySelector('.my-article__content--js');

contentJs.innerHTML = 'Jestem wypełniony javascriptem  🤯'