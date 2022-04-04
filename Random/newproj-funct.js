const getSavedQuestions = () => {
    const questionJSON = localStorage.getItem('questions')
    return questionJSON ? JSON.parse(questionJSON) : []
}


const savedQuestions = (questions) => {
    localStorage.setItem('questions', JSON.stringify(questions))
}

const toggleQues = (id) => {
    const allQuestions = questions.find((allQuestions) => allQuestions.id === id)

    if(allQuestions) {
        allQuestions = allQuestions
    }
}

const renderQuestions = (questions, filtered) => {
    let filteredQuestions  = questions.filtered((allQuestions) => {

    })

    document.querySelector('#addFlashard').innerHTML = ''

    filteredQuestions.forEach((allQuestions) => {
        document.querySelector('#addFlashcard').appendChild(allQuestions)
    })
}

