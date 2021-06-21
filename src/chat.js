chatBoxForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const guess = e.target.children[0].value.toLowerCase()
    if (secretWordStored.includes(guess)) {
        secretWordStored.map((letter, i) => {
            if (letter.toLowerCase() === guess) {
                secretWord[i] = guess
            }
        })
        word.innerHTML = secretWord.join(' ')
        if (!secretWord.includes('_')){end()}
    } else {
        let three = document.getElementById('3')
        let four = document.getElementById('4')
        let five = document.getElementById('5')
        wrongGuesses = wrongGuesses + 1
        switch(wrongGuesses) {
            case 1:
                three.innerHTML = '&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O'
                break
            case 2: 
                four.innerHTML = '&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|'
                break
            case 3: 
                four.innerHTML = '&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/|'
                break
            case 4:
                four.innerHTML = '&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/|\\'
                break
            case 5:
                five.innerHTML = '&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/'
                break
            case 6:
                five.innerHTML = '&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ \\'
                end()
                break
        }
    }
    e.target.children[0].value = ''
})