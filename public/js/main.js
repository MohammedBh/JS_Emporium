// --------------- OPEN MODAL
let openModalButton = document.querySelector('.connexionButton')
let closeModalButton = document.querySelector('#closeWindow')

let connexionWindow = document.querySelector('#connexionDiv')
let overlay = document.querySelector('#overlay')


openModalButton.addEventListener('click', () => {
    connexionWindow.classList.add('active')
    overlay.classList.add('active')
})

closeModalButton.addEventListener('click', () => {
    connexionWindow.classList.remove('active')
    registerDiv.classList.remove('active')
    overlay.classList.remove('active')
})

// --------------- CLOSE MODAL
let sInscrire = document.querySelector('#sInscrire')
let seConnecter = document.querySelector('#seConnecter')

let closeModalButton2 = document.querySelector('#closeWindow2')
let registerDiv = document.querySelector('#registerDiv')

sInscrire.addEventListener('click', () => {
    connexionWindow.classList.remove('active')
    registerDiv.classList.add('active')
})

seConnecter.addEventListener('click', () => {
    connexionWindow.classList.add('active')
    registerDiv.classList.remove('active')
})

closeModalButton2.addEventListener('click', () => {
    registerDiv.classList.remove('active')
    overlay.classList.remove('active')
})

overlay.addEventListener('click', () => {
    registerDiv.classList.remove('active')
    connexionWindow.classList.remove('active')
    overlay.classList.remove('active')
})
// ------------------------------------- END MODAL

// Zoom 3 Cards
