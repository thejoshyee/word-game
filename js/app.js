// Variables 

const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startGameBtn = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;

const phrases = [
    'Do your best and forget the rest',
    'Sushi is the best',
    'I am Batman',
    'You are what you eat',
    'The grass is always greener'
];


// listen for the start game button to be pressed

startGameBtn.addEventListener('click', e => {
    overlay.style.display = 'none';
});


// Function to return a random phrase from an array

let getRandomPhraseAsArray = (arr) => {
    let phrase = phrases[Math.floor(Math.random() * phrases.length)].split(''); 
    return phrase;
}

getRandomPhraseAsArray(phrases);


// Adds the letters of a string to the display

let addPhraseToDisplay = (arr) => {
    for ( let i = 0; i < arr.length; i++ ) {
        let liList = document.createElement('li');
        let ulList = document.querySelector('#phrase ul');
        liList.textContent = arr[i];
        ulList.appendChild(liList);
        
        if (liList.textContent === ' ') {
            liList.className = 'space';
        }
        else {
            liList.className = 'letter';
        }
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 


// check if a letter is in the phrase

const checkLetter = button => {


};

// check if the game has been won or lost

const checkWin = () => {


};


// listen for the onscreen keyboard to be clicked

qwerty.addEventListener('click', e => {



});
