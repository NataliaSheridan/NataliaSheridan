import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'
console.log(senators)
const members = [...senators, ...representatives] // modern combining arrays like a genus

const senatorDiv = document.querySelector('.senators')
const seniorityHeading = document.querySelector('.seniority')
const weaselOrderedList = document.querySelector('.weaselList')
console.log(simplifiedMembers(members))
function simplifiedMembers(chamberFilter) {
  const filteredArray = members.filter(member => chamberFilter ? member.short_title === chamberFilter : member)

  return filteredArray.map(senator => {
    const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
    return {
      id: senator.id,
      name: `${senator.first_name}${middleName}${senator.last_name}`,
      party: senator.party,
      imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`,
      gender: senator.gender,
      seniority: +senator.seniority,
      missedVotesPct: senator.missed_votes_pct,
      loyaltyPct: senator.votes_with_party_pct,
    }
  })
}

//populateSenatorDiv(simplifiedMembers())

function populateSenatorDiv(simpleSenators) {
  let elements = senatorDiv.childNodes
  // elements.forEach(element => {
  //   console.log(element)
  //   Element.removeChild()
  // })
  
  simpleSenators.forEach(senator => {
    let senFigure = document.createElement('figure')
    let figImg = document.createElement('img')
    let figCaption = document.createElement('figcaption')

    figImg.src = senator.imgURL

    figCaption.textContent = senator.name
    senFigure.appendChild(figImg)
    senFigure.appendChild(figCaption)
    senatorDiv.appendChild(senFigure)
  })
}

//const filterSenators = (prop, value) => simplifiedSenators().filter(senator => senator[prop] === value)
  
//const republicans = filterSenators('party', 'R')
//const femaleSenators = filterSenators('gender', 'F')

//console.log(republicans, femaleSenators)

const mostSeniorMember = simplifiedMembers().reduce((acc, senator) => {
  return acc.seniority > senator.seniority ? acc : senator 
})

seniorityHeading.textContent = `The most senior member of Congress is ${mostSeniorMember.name} who has taken our tax dollars as salary for more than ${mostSeniorMember.seniority} years!`

const mostLoyal = simplifiedMembers().reduce((acc, senator) => {
  if(senator.loyaltyPct === 100) {
    acc.push(senator)
  }
  return acc
}, [])

const biggestWeasel = simplifiedMembers().reduce((acc, senator) => 
(acc.missedVotesPct || 0) > senator.missedVotesPct ? acc : senator, {})

const biggestWeasels = simplifiedMembers().filter(senator => senator.missedVotesPct >= 50)

console.log(mostLoyal)

biggestWeasels.forEach(weasel => {
  let listItem = document.createElement('li')
  listItem.textContent = weasel.name
  weaselOrderedList.appendChild(listItem)
})
 
populateSenatorDiv(simplifiedMembers().reduce((acc, senator) => {
  if(senator.loyaltyPct === 100) {
    acc.push(senator)
  }
  return acc
}, []))

function zoomin(){
  var myImg = 
  document.getElementById("zoom_img");
  var currWidth = 
  myImg.clientWidth;
  if(currentWidth >= 1000){
     alert("You're fully zoomed in!");
    }else{
      myImg.style.width = (currWidth + 100) + "px";
    }
    }

    

  //const list = document.querySelector('list')

    //const addList = (array, element) => { 
      //array.forEach(item => {
        //const div = document.createElement('li')
        //div.textContent = item.
        //element.appendChild(li)

    //});
  //}

  //addList(peopleArray,list)

  //const filteredArray = people.Array.filter(person => //person.short_title === 'rep')


  const buttons = 
  document.getElementsByTagName('button');
  console.log(button.length)
  for(var i=0; i<buttons.length;i++) {
    buttons[i].addEventListener('click',(e) =>{
      getList(e.target.innerHTML);
    })
  }
  function getList(type) {
    type = type.toLowerCase()
  }



  
