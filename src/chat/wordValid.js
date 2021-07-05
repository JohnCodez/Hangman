let validCharacters = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function wordValid(word) {
    let result = true
    word = word.split('')
    word.forEach(letter => {
        if(word.length === 1 && word[0] === ' '){
            result = false
        } else if (!validCharacters.includes(letter.toLowerCase())) {
            result = false
        } 
    })
    return result
}
