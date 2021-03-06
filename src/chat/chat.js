chatBoxForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const guess = e.target.children[0].value.toLowerCase()
    const li = document.createElement('li')
    li.textContent = guess
    
    if (!wordValid(guess)) {
        li.textContent = 'Invalid Character'
        li.style.color = 'red'
    } else if (guess === '' || guess === null){
        li.textContent = 'Type a Letter to Guess'
        li.style.color = 'red'
    } else if (guessedLetters.includes(guess)) {
        li.textContent = 'Guess a New Letter'
        li.style.color = 'red'
    } else if (secretWordStored.includes(guess)) {
        secretWordStored.map((letter, i) => {
            if (letter.toLowerCase() === guess) {
                secretWord[i] = guess
            }
        })
        word.innerHTML = secretWord.join(' ')
        if (!secretWord.includes('_')){
            end()
            points = points + 100
        }
        li.style.color = 'green'
        guessedLetters.push(guess)
    } else {
        wrongGuesses = wrongGuesses + 1
        guessSwitch()
        li.style.color = 'red'
        guessedLetters.push(guess)
    }
    chatLog.prepend(li)
    e.target.children[0].value = ''

    cleanChat()
})