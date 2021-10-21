import { people } from '../data/people.js'

const main = document.querySelector('#main')

const maleCharacters = people.filter( person => person.gender === 'male')
console.log(maleCharacters.length)
const femaleCharecters = people.filter( person => person.gender === 'female')
console.log(femaleCharacters.length)

const otherCharacter = people.filter(person => {
    if(person.gender ==='n/a' || person.gender === 'hermaprhodite') { return person}
})
people.forEach((element) => {
    if (index !==17) {
const personFig = document.createElement('figure')
const personImg = document.createElement('img')
personImg.src = `https://starwars-visualguide.com/assets/img/characters/${
    index + 1
  }.jpg`
personCaption.textContent = element.name
personFig.appendChild(personImg)
personFig.appendChild(personCaption)

main.appendChild(personFig)
getLastNumber(element.url)
    }
})
function getLastNumber(url) {
    let end = url.lastIndexof('/')
    let start = end -2
    console.log(url)
    if (url.charAt(start) === "/") {
        start++
    }
}