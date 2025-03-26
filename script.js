const btnmenu = document.querySelector('.menu-toggle');
const navitems = document.querySelector('.nav-items');

btnmenu.addEventListener('click', ()=>{
    navitems.classList.toggle('active');
})
