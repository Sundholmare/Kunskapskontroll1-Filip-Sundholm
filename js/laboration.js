
// Samling av alla HTML-variabler
const secondArticleButton = document.querySelector('.art-2 button');
const secondArticleImg = document.querySelector('.art-2 img');
const secondArticleP = document.querySelector('.art-2 p');
const footerA = document.querySelectorAll('footer a');


// Förändringar som görs nör jag klickar på knappen till Fire hoodien.
secondArticleButton.addEventListener('click', function(event){
    // kallar på createResetButton funktionen som skapar resetknappen
    createResetButton();

    // Ändrar bild på article 2
    secondArticleImg.setAttribute('src', 'https://images.unsplash.com/photo-1585245802021-88032c9350c6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600')

    // Ändrar färg på knappen.
    secondArticleButton.style.background = 'cornflowerblue';

    // Ändrar texten i article 2 paragraf.
    secondArticleP.innerText = "Thank you for buying this hoodie! Your house is now haunted."
})

footerA[3].addEventListener('click', function(event){
    createResetButton();
    // Tar bort Twitterlänken
    footerA[3].style.display = 'none'
    footerA[4].style.display = 'block'
    footerA[5].style.display = 'block'
})

footerA[4].addEventListener('click', function(event){
    createResetButton();
    // Tar bort Facebooklänken
    footerA[3].style.display = 'block'
    footerA[4].style.display = 'none'
    footerA[5].style.display = 'block'
})

footerA[5].addEventListener('click', function(event){
    createResetButton();
    // Tar bort Instagramlänken
    footerA[3].style.display = 'block'
    footerA[4].style.display = 'block'
    footerA[5].style.display = 'none'
})










// Välja ut och skapa resetknappen/funktionen
const reset = document.querySelector('header a');

// Själva reset Eventet
reset.addEventListener('click', function(event){
    // Reset av själva resetKnappen
    reset.innerText = 'Home'
    reset.style.background = 'none'
    reset.style.borderRadius = '0px'
    reset.style.padding = '0px'

    // Reset av second Article
    secondArticleButton.style.background = '#222';
    secondArticleImg.setAttribute('src', 'img/hoodie-fire.png');
    secondArticleP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque sint quaerat consequatur laudantium!';

    // Reset av Twitterknappen
    footerA[3].style.display = 'block'
    // Reset av Facebookknappen
    footerA[4].style.display = 'block'
    // Reset av Instagramknappen
    footerA[5].style.display = 'block'
    
})

// funktion som alla andra funktioner kommer ha för att få fram resetknappen
function createResetButton(){
    // ändrar texten
    reset.innerText = 'Reset Page'
    // ändrar bakgrundsfärgen
    reset.style.background = 'coral'
    // ändrar border-radius
    reset.style.borderRadius = '5px'
    // lägger till padding
    reset.style.padding = '10px'
}
