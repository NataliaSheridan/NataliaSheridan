import { films} from '../data/films.js'

let filmlist = document.querySelector('#filmlist')

let titlelist = document.createElement('ol')

filmList.appendChild(titleList)

figImg.src = 'https://starwars-visualguide.com/assets/img/films/1.jpg'
let figCaption = document.createElement('figcaption')

for(let i = 0; i < films.length; i++){
    let figure = document.createElement('figure')
let figure = document.createElement('img')
    let titleItem = document.createElement('li')
    titleItem.textContent = films[i]
figCaption.textContent = films[i].title

figure.appendChild(figImg)
figure.appendChild(figCaption)

filmList.appendChild(figure)
}