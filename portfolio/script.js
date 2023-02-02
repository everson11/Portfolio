function toggleText() {
    let button = document.getElementById("toggle-button");


    if (button.innerHTML === "Ver menos") {
        button.innerHTML = "Ver mais";
    } else {  
        button.innerHTML = "Ver menos";
    }
}

var btn = document.querySelector('#toggle-button');
var card = document.querySelector('.card-projetos-escondido');

btn.addEventListener('click', function() {
    if(card.style.display === 'flex'){
        card.style.display = 'none';
    } else {
        card.style.display = 'flex';
    }
});








 


