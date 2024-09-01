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

function SendMessage(){
    (function(){
        emailjs.init(""); //Account public key
    })();

    var serviceID = "service_qqdqf35";  //Email service ID
    var templateID = ""; //Email Template ID

    var params = {
        senderName: document.querySelector("#name").value,
        senderMail: document.querySelector("#email").value,
        senderPhone: document.querySelector("#telephone").value,
        senderTopic: document.querySelector("#topic").value,
        senderMessage: document.querySelector("#message").value,
    };
    emailjs.send(serviceID, templateID, params)
    .then( res=> {
        alert('We have received your message.' + params['senderName'] + '!');
    })
}