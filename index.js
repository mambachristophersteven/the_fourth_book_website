const menuButton = document.getElementById('menu-btn');
const closeButton = document.getElementById('close-btn');
const activeMenu = document.getElementById('mobile-menu-view');

menuButton.addEventListener('click',()=>{
    activeMenu.style.display= "flex";
})

closeButton.addEventListener('click',()=>{
    activeMenu.style.display= "none";
})
