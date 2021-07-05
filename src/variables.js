let secretWord = []
let secretWordStored = []
let wrongGuesses = 0

const word = document.getElementById('word')
const chatBoxForm = document.getElementById('chatbox-form')
const chatBox = document.getElementById('chatbox')
const chatLog = document.getElementById('chat-log')
const playAgain = document.getElementById('play-again')
const hangman = document.getElementById('hangman')

let guessedLetters = []
let points = 0  