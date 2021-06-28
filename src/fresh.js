function fresh() {
    hangman.innerHTML = ''
    word.innerHTML = ''
    for (let i = 1; i < 7; i++) {
        window['div' + i] = document.createElement('div')
    }
    div1.innerHTML = '&nbsp;_______'
    div2.innerHTML = '&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |'
    div3.innerHTML = '&nbsp;|'
    div4.innerHTML = '&nbsp;|'
    div5.innerHTML = '&nbsp;|'
    div6.innerHTML = '/|\\'

    div1.id = '1'
    div2.id = '2'
    div3.id = '3'
    div4.id = '4'
    div5.id = '5'
    div6.id = '6'
    hangman.append(div1, div2, div3, div4, div5, div6)

    chatLog.innerHTML = ''
    guessedLetters = []
}

