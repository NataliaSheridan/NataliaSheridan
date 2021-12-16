import { removeChildren } from '../utils/index.js'


function getAPIData(url) {
  try {
    return fetch(url).then((data) => data.json())
  } catch (error) {
    console.error(error)
    
    
  }
}

function loadPokemon(offset = 0, limit = 25)
 {
  getAPIData(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  ).then(async (data) => {
    
    for (const pokemon of data.results) {
      await getAPIData(pokemon.url).then((pokeData) =>
        populatePokeCard(pokeData),
        
      )
    }
  })
}

const pokeGrid = document.querySelector('.pokeGrid')
const loadButton = document.querySelector('.loadPokemon')
loadButton.addEventListener('click', () => {
  
  removeChildren(pokeGrid)
  loadPokemon(150, 30)  
  
})
const gameButton = document.querySelector('.gameButton')
gameButton.addEventListener('click', () => {

  
  removeChildren(pokeGrid)
  loadPokemon(350, 20)  
  loadPokemon(350, 20)  
  
  
})

const moreButton = document.querySelector('.morePokemon')
moreButton.addEventListener('click', () => {
  let limit = prompt('How many more Pokemon should I load?')
  let offset = prompt('At which Pokemon ID should I start loading?')
  loadPokemon(offset, limit)
})



const newButton = document.querySelector('.newPokemon')
newButton.addEventListener('click', () => {
  let pokeName = prompt('What is the name of your new Pokemon?')
  let pokeHeight = prompt("What is the Pokemon's height?")
  let pokeWeight = prompt("What is the Pokemon's weight?")
  let pokeAbilities = prompt(
    'What are your Pokemon abilities? (use a comma separated list)',
  )
  
  let types = [{type:{name:"normal"}}]
  let newPokemon = new Pokemon(
    pokeName,
    pokeHeight,
    pokeWeight,
    getAbilitiesArray(pokeAbilities),
    types,
  )
  console.log(newPokemon)
  populatePokeCard(newPokemon)
})







function getAbilitiesArray(commaString) {
  let tempArray = commaString.split(',')
  return tempArray.map((abilityName) => {
    return {
      ability: {
        name: abilityName,
      },
    }
  })
}

class Pokemon {
  constructor(name, height, weight, abilities,types) {
    ;(this.id = 100),
      (this.name = name),
      (this.height = height),
      (this.weight = weight),
      (this.abilities = abilities),
      (this.types = types)
  }
}



function populatePokeCard(singlePokemon) {
  console.log(singlePokemon)
  const pokeScene = document.createElement('div')
  pokeScene.className = 'scene'
  const pokeCard = document.createElement('div')
  pokeCard.className = 'card'
  pokeCard.addEventListener('click', () =>
    pokeCard.classList.toggle('is-flipped'),
  )
  const back = populateCardFront(singlePokemon)
  const front = populateCardBack(singlePokemon)

  pokeCard.appendChild(back)
  pokeCard.appendChild(front)
  pokeScene.appendChild(pokeCard)
  pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
  const pokeFront = document.createElement('figure')
  pokeFront.className = 'cardFace front'
  const pokeImg = document.createElement('img')
  pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

  const pokeCaption = document.createElement('figcaption')
  pokeCaption.textContent = pokemon.name

  pokeFront.appendChild(pokeImg)
  pokeFront.appendChild(pokeCaption)
 const label = document.createElement('h4')
 label.textContent = 'abilities'
 pokeFront.appendChild(label)
  const abilityList = document.createElement('ul')
  pokemon.abilities.forEach((abilityItem) => {
    let listItem = document.createElement('li')
    listItem.textContent = abilityItem.ability.name
    abilityList.appendChild(listItem)
  })
    typesBackground(pokemon, pokeFront)
    pokeFront.appendChild(abilityList)
  return pokeFront
}

function typesBackground(pokemon, card) {
  let pokeType1 = pokemon.types[0].type.name
  let pokeType2 = pokemon.types[1]?.type.name
  console.log(pokeType1, pokeType2)
  if(!pokeType2) {
    card.style.setProperty('background', getPokeTypeColor(pokeType1))
  } else {
    card.style.setProperty(
      'background',
      `linear-gradient(${getPokeTypeColor(pokeType1)}, ${getPokeTypeColor(pokeType2)})`,
    )
  }
}

function getPokeTypeColor(pokeType) {
  let color
  switch (pokeType) {
    case 'grass':
      color = '#C3FDB8'
      break
    case 'fire':
      color = '#B0E0E6'
      break
    case 'water':
      color = '#A7C7E7'
      break
    case 'bug':
      color = '#7FFF00'
      break
    case 'normal':
      color = 'FFB6C1'
      break
    case 'flying':
      color = '#FDCD6'
      break
    case 'poison':
      color = '#BdeDef'
      break
    case 'electric':
      color = '#DCDCDC'
      break
    case 'psychic':
        color = 'pink'
        break
    case 'ground':
        color = '#C0C0C0'
        break
    default:
      color = '#888888'
  }
  return color
}

function populateCardBack(pokemon) {
  const pokeBack = document.createElement('figure')
  pokeBack.className = 'cardFace back'
  const pokeImg = document.createElement('img')
  pokeImg.src = `https://i.etsystatic.com/6015221/r/il/7c5de2/2211249220/il_794xN.2211249220_8bj8.jpg`
  pokeBack.appendChild(pokeImg)

return pokeBack
}



//  function shuffle(array) {
//     var currentIndex = array.length,
//       temporaryValue,
//       randomIndex;
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
//       // And swap it with the current element.
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }
//     return array;
//   }
const allPokemon = await getAllSimplePokemon()

async function getAllSimplePokemon() {
  const allPokemon = []
  await getAPIData(
    `https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0`,
  ).then(async (data) => {
    for (const pokemon of data.results) {
      await getAPIData(pokemon.url).then((pokeData) => {
        const mappedPokemon = {
          abilities: pokeData.abilities,
          height: pokeData.height,
          id: pokeData.id,
          name: pokeData.name,
          types: pokeData.types,
          weight: pokeData.weight,
        }
        allPokemon.push(mappedPokemon)
      })
    }
  })
  return allPokemon
}
function getAllPokemonByType(type) {
  return allPokemon.filter((pokemon) => pokemon.types[0].type.name == type)
}
const typeSelector = document.querySelector('#typeSelector')
typeSelector.addEventListener('change', (event) => {
  const usersTypeChoice = event.target.value.toLowerCase()
  const allByType = getAllPokemonByType(usersTypeChoice)
  removeChildren(pokeGrid)
  allByType.forEach((item) => populatePokeCard(item))
})
