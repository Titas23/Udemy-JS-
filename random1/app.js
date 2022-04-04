'use strict'

let content = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
const form = document.getElementById('form')
const errorEl = document.getElementById('error')

document.getElementById("save_card").addEventListener("click", () => {
  addFlashcard()
})

document.getElementById("delete_cards").addEventListener("click", () => {
  localStorage.clear()
  flashcards.innerHTML = ''
  content = []
})

document.getElementById("show_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "block"
})

document.getElementById("close_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "none"
})

const flashcardMaker = (text) => {
  const flashcard = document.createElement("div")
  const question = document.createElement('h2')
  const answer = document.createElement('h2')

  flashcard.className = 'flashcard'

  question.setAttribute("style", "border-top:1px solid red; padding: 15px; margin-top:30px")
  question.textContent = text.my_question

  answer.setAttribute("style", "text-align:center; display:none; color:green")
  answer.textContent = text.my_answer

  flashcard.appendChild(question)
  flashcard.appendChild(answer)

  flashcard.addEventListener("click", () => {
    if(answer.style.display == "none")
      answer.style.display = "block"
    else
      answer.style.display = "none"
  })

  document.querySelector("#flashcards").appendChild(flashcard)
}

content.forEach(flashcardMaker)


const addFlashcard = () => {
  const question = document.querySelector("#question")
  const answer = document.querySelector("#answer")

  let flashcard_info = {
    'my_question' : question.value,
    'my_answer'  : answer.value 
  }
  let messages = []
  if(question.value === ''|| answer.value == null) {
      messages.push('A question or answer must be filled out')
  }
  if (question.value.length <= 3 || answer.value.length <=3 ) {
      messages.push('Must be more than 3 characters in each section')
  }
  if (messages.length > 0) {
      errorEl.innerText = messages.join(', ')
  } 
  content.push(flashcard_info);
  localStorage.setItem('items', JSON.stringify(content))
  flashcardMaker(content[content.length - 1])
  question.value = ""
  answer.value = ""
}

