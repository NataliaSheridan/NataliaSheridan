import { people } from '../data/people.js'

const main = document.querySelector('#main')

const mainHeader = document.createElement('header')
document.body.insertBefore(mainHeader, main)

const maleButton = document.createElement('button')
maleButton.textContent = "male charecters"
mainHeader.appendChild(maleButton)

maleButton.addEventListener('click',()=> populateDOM(maleCharacters))

mainHeader.appendChild(maleButton)

const femaleButton = document.createElement('button')
femaleButton.textContent = "female charecters"
femaleButton.addEventListener('click', ()=>populateDOM(femaleCharacters))
mainHeader.appendChild(femaleButton)

const othersButton = document.createElement('button')
otherButton.textContent = "other charecters"
othersButton.addEventListener('click', ()=>populateDOM(otherCharacters))
mainHeader.appendChild(otherButton)
const maleCharacters = people.filter( person => person.gender === 'male')
console.log(maleCharacters.length)
const femaleCharacters = people.filter( person => person.gender === 'female')
console.log(femaleCharacters.length)

const otherCharacters = people.filter(person => {
    if(person.gender ==='n/a' || person.gender === 'hermaprhodite'|| person.gender === 'none') { return person}
})
console.log(otherCharacters)

function populateDOM(characters) {
    // remove all the previous items before populating with new ones
    while (main.firstChild) {
        main.removeChild(main.firstChild)
    }
characters.forEach((element) => {
const personFig = document.createElement('figure')
const personImg = document.createElement ('img')
let charNum = getLastNumber(element.url)
personImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
const personCaption = document.createElement('figcaption')
personCaption.textContent = element.name

personCaption.textContent = element.name
personFig.appendChild(personImg)
personFig.appendChild(personCaption)

main.appendChild(personFig)
getLastNumber(element.url)
    
})
}
function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end -2
    console.log(url)
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}