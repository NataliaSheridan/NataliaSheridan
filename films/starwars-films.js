import { films} from '../data/films.js'

let filmList = document.getElementById('filmlist')
console.log(filmlist)
let titlelist = document.createElement('ol')


//filmList.appendChild(titleList)

let figCaption = document.createElement('figcaption')

for(let i = 0; i < films.length; i++){
    let figure = document.createElement('figure')
    let image = document.createElement('img')
    let titleItem = document.createElement('li')
    titleItem.textContent = films[i]
    figCaption.textContent = films[i].title
    image.src = 'https://starwars-visualguide.com/assets/img/films/1.jpg'

    figure.appendChild(image)
    figure.appendChild(figCaption)

    filmList.appendChild(figure)
}