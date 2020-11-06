
// Samling av alla HTML-variabler
const secondArticleButton = document.querySelector('.art-2 button');
const secondArticleImg = document.querySelector('.art-2 img');
const secondArticleP = document.querySelector('.art-2 p');
const footerA = document.querySelectorAll('footer a');
const footerSection = document.querySelector('footer section');
const firstArticleP = document.querySelector('.art-1 p');
const thirdArticleP = document.querySelector('.art-3 p');


// Förändringar som görs nör jag klickar på knappen till Fire hoodien.
secondArticleButton.addEventListener('click', function(event){
    // kallar på createResetButton funktionen som skapar resetknappen
    createResetButton();
    
    // Ändrar display till block av listan
    showList();


    // Ändrar bild på article 2
    secondArticleImg.setAttribute('src', 'https://images.unsplash.com/photo-1585245802021-88032c9350c6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600')

    // Ändrar färg på knappen.
    secondArticleButton.style.background = 'cornflowerblue';

    // Ändrar texten i article 2 paragraf.
    secondArticleP.innerText = "Thank you for buying this hoodie! Your house is now haunted."
})

footerA[3].addEventListener('click', function(event){
    createResetButton();
    showList();
    // Tar bort Twitterlänken
    footerA[3].style.display = 'none'
    footerA[4].style.display = 'block'
    footerA[5].style.display = 'block'
})

footerA[4].addEventListener('click', function(event){
    createResetButton();
    showList();
    // Tar bort Facebooklänken
    footerA[3].style.display = 'block'
    footerA[4].style.display = 'none'
    footerA[5].style.display = 'block'
})

footerA[5].addEventListener('click', function(event){
    createResetButton();
    showList();
    // Tar bort Instagramlänken
    footerA[3].style.display = 'block'
    footerA[4].style.display = 'block'
    footerA[5].style.display = 'none'
})

// Skapar en lista inuti footer
const list = footerSection.insertAdjacentHTML('afterend', `
<ul>
        <li>Things that will affect the hoodies poorly:</li>
        <li>Fire</li>
        <li>Small rodents</li>
        <li>The police</li>
</ul>`)


const footerList = document.querySelector('footer ul');
const footerLi = document.querySelectorAll('footer li');
// Modifierar listan
footerList.setAttribute('class', 'footer-list');

footerLi[0].style.fontWeight = 'bold';
footerLi[0].style.fontSize = '18px';


// Lägga till event till art-1 och art-2 buttons
const firstArticleButton = document.querySelector('.art-1 button');
const thirdArticleButton = document.querySelector('.art-3 button');

// Event för första produktens button
firstArticleButton.addEventListener('click', function(event){
    createResetButton();
    showList();
    firstArticleP.innerText = 'The Ash and Water hoodies are unable to be purchased at this moment, caused by pending lawsuits, but we can send you a 10cm*10cm image of the hoodies to be kept in your wallet. Thank you.';

    thirdArticleP.innerText = 'The Ash and Water hoodies are unable to be purchased at this moment, caused by pending lawsuits, but we can send you a 10cm*10cm image of the hoodies to be kept in your wallet. Thank you.';
});

// Event för tredje produktens button
thirdArticleButton.addEventListener('click', function(event){
    createResetButton();
    showList();
    firstArticleP.innerText = 'The Ash and Water hoodies are unable to be purchased at this moment, caused by pending lawsuits, but we can send you a 10cm*10cm image of the hoodies to be kept in your wallet. Thank you.';

    thirdArticleP.innerText = 'The Ash and Water hoodies are unable to be purchased at this moment, caused by pending lawsuits, but we can send you a 10cm*10cm image of the hoodies to be kept in your wallet. Thank you.';
});










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

    // Tar bort footer listan.
    footerList.style.display = 'none'

    // Ändrar tillbaka texten i första och tredje produkten
    firstArticleP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!';
    thirdArticleP.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe ratione possimus nobis?'
    
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

// Funktionen som sätter display till block av listan.
function showList(){
    footerList.style.display = 'block'
};


