// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "header_nav") {
//       x.className += " responsive";
//     } else {
//       x.className = "header_nav";
//     }
//   }
let icon = document.querySelector('.icon')
let headerMenu = document.querySelector('.header_menu')
let closeMenu = document.querySelector('.close__menu')


bttMenu.addEventListener('click', () => {
    menuU.classList.add('menu__active')
})

closeMenu.addEventListener('click', () => {
    menuU.classList.remove('menu__active')
})