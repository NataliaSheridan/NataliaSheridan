import { people } from '../data/representatives.j'
import { people } from '..data/senators.js'
import { getLastNumber } from '../utils/index.js'

const main = document.querySelector('#main')

const mainHeader = document.createElement('header')
document.body.insertBefore(mainHeader, main)

const representativesButton = document.createElement('button')
representativesButton.textContent = "Representatives"
representativesButton.addEventListener('click',() => populateDOM(representative))
mainHeader.appendChild(representativesButton)

const senatorsButton = document.createElement('button')
senatorsButton.textContent = "senators"
senatorsButton.addEventListener('click',() => populateDOM(senators))
mainHeader.appendChild(senatorsButton)

const republicans = document.createElement('button')
republicansButton.textContent = "republicans"
republicansButton.addEventListener('click', () => populateDOM(republicans))
mainHeader.appendChild(republicans)

const democratsButton = document.createElement('button')
democratsButton.textContent = "democrats"
democratsButton.addEventListener('click', () => populateDOM(democrat))
mainHeader.appendChild(democrat)

const representatives = people.filter((person)=> person.short_title === 'Rep.')

console.log(Senators.length)
const Senators = people.filter((person) => person.short_title === 'Sen.')

console.log(senators.length)

const democrats = people.filter((person) => {
    if(
         person.party === 'd') { return person
        }
})
const republican = people.filter((person)=> person.short_title === 'R')




function populateDOM(people) {
    // remove all the previous items before populating with new ones
    while (main.firstChild) {
        main.removeChild(main.firstChild)
    }
characters.forEach((element) => {
const personFig = document.createElement('figure')
const personImg = document.createElement ('img')
let charNum = getLastNumber(element.url)
personImg.src = `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`
const personCaption = document.createElement('figcaption')
personCaption.textContent = element.name

personFig.appendChild(personImg)
personFig.appendChild(personCaption)

main.appendChild(personFig)
getLastNumber(element.url)
    
})
}
