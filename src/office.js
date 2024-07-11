//API url
const url = 'https://officeapi.akashrajpurohit.com/quote/random'
//creating a constant variable and point it to the span of the document
const quote = document.querySelector('span')

//initalize a constant variable and point it to the class answerImg
const answerPic = document.querySelector('.answer')
const answerName = document.querySelector('.name')

//initalize a constant variable and point to the button
const answerButton = document.querySelector('#answer')
const refreshButton = document.querySelector('#refresh')


function quoteRandomizer(){
    // fetch the randomizer of office character objects
  async function getQuotesJSON(){
    const response = await fetch(url)
    const person = response.json()
    return person
  }
  
  getQuotesJSON()
  .then((person) => {
      quote.innerText = person.quote
      answerPic.src = person.character_avatar_url
      answerPic.alt = person.character
      answerName.innerText = person.character
  })
}
document.addEventListener('DOMContentLoaded', quoteRandomizer)

//event listener for quote that will get another random quote from API
refreshButton.addEventListener('click', () => {
    answerPic.style.display = 'none'
    answerName.style.display = 'none'
    refreshButton.innerText = 'SKIP'
    // add logic to hide div of background using document query selector
    quoteRandomizer()
})


//eventlistener for the button. when clicked display changes to block
answerButton.addEventListener('click', () => {
    //show picture
    console.log("answer button press")
    // add logic to show div of background using document query selector
    answerPic.style.display = 'block'
    answerName.style.display = 'block'
    refreshButton.innerText = 'NEXT QUOTE'
})