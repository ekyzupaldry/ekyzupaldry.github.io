const checkbox = document.querySelector('.hamburger-menu input');
const ul = document.querySelector('nav ul');

checkbox.addEventListener('click', function (){
    ul.classList.toggle('open');
});