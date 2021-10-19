import { people } from '../data/people.js'
const main = document.querySelector('#main')

const personFig = document.createElement('figure')
const personImg = document.createElement('img')
personImg.src = 'http://starwars-visualguide.com/assets/img/characters/1.jpg'
personCaption.textContent = 'person name goes here'
personFig.appendChild(personImg)
personFig.appendChild(personCaption)

main.appendChild(personFig)
