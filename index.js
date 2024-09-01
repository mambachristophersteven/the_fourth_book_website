const menuButton = document.getElementById('menu-btn');
const closeButton = document.getElementById('close-btn');
const activeMenu = document.getElementById('mobile-menu-view');
const mobileHome = document.getElementById('mobile-home');
const mobileMission = document.getElementById('mobile-mission');
const mobileImpact = document.getElementById('mobile-impact');
const mobileApproach = document.getElementById('mobile-approach');
const mobileApp = document.getElementById('mobile-app');

menuButton.addEventListener('click',()=>{
    activeMenu.style.display= "flex";
})

closeButton.addEventListener('click',()=>{
    activeMenu.style.display= "none";
})

mobileApp.addEventListener('click',()=>{
    activeMenu.style.display= "none";
})

mobileApproach.addEventListener('click',()=>{
    activeMenu.style.display= "none";
})

mobileImpact.addEventListener('click',()=>{
    activeMenu.style.display= "none";
})

mobileMission.addEventListener('click',()=>{
    activeMenu.style.display= "none";
})

mobileHome.addEventListener('click',()=>{
    activeMenu.style.display= "none";
})

