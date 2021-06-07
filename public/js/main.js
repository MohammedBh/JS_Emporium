<<<<<<< HEAD
// Sticky
let myBody = document.getElementsByTagName('body')[0]
let navbar = document.querySelector('.navButtons')
let sticky = navbar.offsetTop

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
myBody.setAttribute('onscroll', 'myFunction()')

// --------------- OPEN MODAL
let openModalButton = document.querySelector('.connexionButton')
let openModalButtonn = document.querySelector('.connexionButtonn')
=======
// --------------- OPEN MODAL
let openModalButton = document.querySelector('.connexionButton')
>>>>>>> f57dd038382df3ad4ac74c2f6be4e9a84e211a77
let closeModalButton = document.querySelector('#closeWindow')

let connexionWindow = document.querySelector('#connexionDiv')
let overlay = document.querySelector('#overlay')


<<<<<<< HEAD
openModalButtonn.addEventListener('click', () => {
    connexionWindow.classList.add('active')
    overlay.classList.add('active')
})

=======
>>>>>>> f57dd038382df3ad4ac74c2f6be4e9a84e211a77
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

<<<<<<< HEAD
// Navbar Toggle Button
let toggleButton = document.querySelector('.toggleButton')
let navbarLinks = document.querySelector('.navbar-links')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// DARK MODE + BRIGHT MODE
let darkButton = document.querySelector('#darkMod')
let brightButton = document.querySelector('#brightMod')
let darkButton2 = document.querySelector('#darkMod2')
let brightButton2 = document.querySelector('#brightMod2')

let header = document.querySelector('header')
let body = document.getElementsByTagName('body')[0]
let topimgOFF = document.querySelector('#topimgOFF')
let navButtons = document.querySelector('.navButtons')
let connexionDiv = document.querySelector('.connexionDiv')
let servicesImg = document.querySelector('#servicesImg')
let productCards = document.querySelector('#productCards')
let bottomCards = document.querySelector('.bottomCards')
let threeCards1 = document.querySelector('#threeCards1')
let threeCards2 = document.querySelector('#threeCards2')
let threeCards3 = document.querySelector('#threeCards3')
let carousel = document.querySelector('#caroussel')
let conn2 = document.querySelector('.conn2')

darkButton.addEventListener('click', () => {
    header.classList.add('darkmod')
    body.classList.add('darkmod')
    topimgOFF.classList.add('darkmod')
    navButtons.classList.add('darkmod')
    connexionDiv.classList.add('darkmod')
    servicesImg.classList.add('darkmod')
    productCards.classList.add('darkmod')
    bottomCards.classList.add('darkmod')
    threeCards1.classList.add('darkmod')
    threeCards2.classList.add('darkmod')
    threeCards3.classList.add('darkmod')
    carousel.classList.add('darkmod')
    conn2.classList.add('darkmod')
})

brightButton.addEventListener('click', () => {
    header.classList.remove('darkmod')
    body.classList.remove('darkmod')
    topimgOFF.classList.remove('darkmod')
    navButtons.classList.remove('darkmod')
    connexionDiv.classList.remove('darkmod')
    servicesImg.classList.remove('darkmod')
    productCards.classList.remove('darkmod')
    bottomCards.classList.remove('darkmod')
    threeCards1.classList.remove('darkmod')
    threeCards2.classList.remove('darkmod')
    threeCards3.classList.remove('darkmod')
    carousel.classList.remove('darkmod')
    conn2.classList.remove('darkmod')
})

darkButton2.addEventListener('click', () => {
    header.classList.add('darkmod')
    body.classList.add('darkmod')
    topimgOFF.classList.add('darkmod')
    navButtons.classList.add('darkmod')
    connexionDiv.classList.add('darkmod')
    servicesImg.classList.add('darkmod')
    productCards.classList.add('darkmod')
    bottomCards.classList.add('darkmod')
    threeCards1.classList.add('darkmod')
    threeCards2.classList.add('darkmod')
    threeCards3.classList.add('darkmod')
    carousel.classList.add('darkmod')
    conn2.classList.add('darkmod')
})

brightButton2.addEventListener('click', () => {
    header.classList.remove('darkmod')
    body.classList.remove('darkmod')
    topimgOFF.classList.remove('darkmod')
    navButtons.classList.remove('darkmod')
    connexionDiv.classList.remove('darkmod')
    servicesImg.classList.remove('darkmod')
    productCards.classList.remove('darkmod')
    bottomCards.classList.remove('darkmod')
    threeCards1.classList.remove('darkmod')
    threeCards2.classList.remove('darkmod')
    threeCards3.classList.remove('darkmod')
    carousel.classList.remove('darkmod')
    conn2.classList.remove('darkmod')
})

// 3 CARDS MOUSEOVER
let topCard1 = document.querySelector('#topCards1')
let topCard2 = document.querySelector('#topCards2')
let topCard3 = document.querySelector('#topCards3')
let line1 = document.querySelectorAll('.underlinee')[0]
let line2 = document.querySelectorAll('.underlinee')[1]
let line3 = document.querySelectorAll('.underlinee')[2]

topCard1.addEventListener('mouseover', () => {
    line1.style = 'transition:1s;margin: 0 40%'
})

topCard1.addEventListener('mouseout', () => {
    line1.style = 'transition:1s;margin: 0 15%'
})

topCard2.addEventListener('mouseover', () => {
    line2.style = 'transition:1s;margin: 0 40%'
})

topCard2.addEventListener('mouseout', () => {
    line2.style = 'transition:1s;margin: 0 15%'
})

topCard3.addEventListener('mouseover', () => {
    line3.style = 'transition:1s;margin: 0 40%'
})

topCard3.addEventListener('mouseout', () => {
    line3.style = 'transition:1s;margin: 0 15%'
})

// Zoom Images
let recentProd = document.querySelector('.recentProducts')
tabImgs = Array.from(recentProd)

tabImgs.forEach(element => {
    let recentProd = element.querySelectorAll('img')
    recentProd.forEach(element => {
        element.style.position = 'relative'
        element.addEventListener('mouseover', (e) => {
            element.style.transform = 'scale(1.25)'
            element.style.zIndex = "99"
        })
        element.addEventListener('mouseout', () => {
            element.style.transform = 'scale(1)'
        })
    });
});

// CAROUSEL
const carouButtons = document.querySelector(".carouButtons");
const slides = document.querySelector(".inner");

carouButtons.addEventListener("click", e => {
    if (e.target.nodeName === "BUTTON") {
        Array.from(carouButtons.children).forEach(item =>
            item.classList.remove("active")
        );
        if (e.target.classList.contains("first")) {
            slides.style.transform = "translateX(-0%)";
            e.target.classList.add("active");
        } else if (e.target.classList.contains("second")) {
            slides.style.transform = "translateX(-12%)";
            e.target.classList.add("active");
        } else if (e.target.classList.contains('third')) {
            slides.style.transform = 'translatex(-25%)';
            e.target.classList.add('active');

        } else if (e.target.classList.contains('quatre')) {
            slides.style.transform = 'translatex(-40%)';
            e.target.classList.add('active');

        } else if (e.target.classList.contains('cinq')) {
            slides.style.transform = 'translatex(-40%)';
            e.target.classList.add('active');

        } else if (e.target.classList.contains('six')) {
            slides.style.transform = 'translatex(-100%)';
            e.target.classList.add('active');

        } else if (e.target.classList.contains('sept')) {
            slides.style.transform = 'translatex(-120%)';
            e.target.classList.add('active');

        } else if (e.target.classList.contains('huit')) {
            slides.style.transform = 'translatex(-140%)';
            e.target.classList.add('active');


        } else if (e.target.classList.contains('neuf')) {
            slides.style.transform = 'translatex(-160%)';
            e.target.classList.add('active');

        }
    }
});
=======
// Zoom 3 Cards
>>>>>>> f57dd038382df3ad4ac74c2f6be4e9a84e211a77
