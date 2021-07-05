function guessSwitch(){
    switch(wrongGuesses) {
        case 1:
            hangman.src = './hook_images/head_hook.png'
            break
        case 2: 
            hangman.src = './hook_images/body_hook.png'
            break
        case 3: 
            hangman.src = './hook_images/arm1_hook.png'
            break
        case 4:
            hangman.src = './hook_images/arm2_hook.png'
            break
        case 5:
            hangman.src = './hook_images/leg1_hook.png'
            break
        case 6:
            hangman.src = './hook_images/leg2_hook.png'
            end()
            break
    }
}