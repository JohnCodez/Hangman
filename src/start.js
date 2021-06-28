function setup() {
    fresh()
    wrongGuesses = 0
    const enterWordForm = document.createElement('form')
    const enterWord = document.createElement('input')
    enterWord.id = 'entered-word'
    enterWord.placeholder = 'Word (10 letters max)'
    enterWord.autocomplete = 'off'
    enterWordForm.addEventListener('submit', (e) => {
        e.preventDefault()
        if (e.target.children[0].value.indexOf(' ') >= 0) {
            enterWord.value = ''
            enterWord.placeholder = 'Cannot Include Space'

        } else if (e.target.children[0].value.length < 11 && e.target.children[0].value.length > 0) {
            let newWord = []
            e.target.children[0].value.split('').forEach(letter => {
                newWord.push('_')
            })
            secretWordStored = e.target.children[0].value.toLowerCase().split('')
            secretWord = newWord
            enterWordForm.remove()
            word.innerHTML = secretWord.join(' ')
            chatBox.disabled = ''
            chatBox.placeholder = 'Guess'
            playAgain.hidden = 'hidden'
        } else {
            enterWord.value = ''
            enterWord.placeholder = '10 letters MAX'
        }
        
    })
    word.append(enterWordForm)
    enterWordForm.append(enterWord)
}
setup()

function end() {
    chatBox.disabled = 'disabled'
    chatBox.placeholder = ''
    playAgain.hidden = ''
    playAgain.addEventListener('click', () => {
        playAgain.hidden = 'hidden'
        setup()
    })
}