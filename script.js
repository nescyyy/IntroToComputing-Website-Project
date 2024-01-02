const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
header.classList.toggle ("sticky", window.scrollY > 200)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};


const sr = ScrollReveal ({
    distance: '40px',
    duration: 2050,
    delay: 200,
    reset: true
});

sr.reveal('.hero-text',{origin: 'top'});
sr.reveal('.about-img, .service-item, .about-text',{origin: 'bottom'});
sr.reveal('.about-text h2, .text-center, .right-contact h2',{origin: 'top'});
sr.reveal('.left-contact',{origin: 'left'});
sr.reveal('.right-contact',{origin: 'right'});
sr.reveal('.end-section',{origin: 'top'});
sr.reveal('.portfolio-content',{origin: 'top'});
sr.reveal('.contact-box',{origin: 'right'});



function message(e){
    var Name= document.getElementById('name');
    var email= document.getElementById('email');
    var msg= document.getElementById('msg');
    const success=document.getElementById('success');
    const danger=document.getElementById('danger');

    if(Name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display= 'block';  
    }
    else{
        setTimeout(() => {
          Name.value= '';
          email.value= '';
          msg.value= '';
        },2000);

        success.style.display= 'block';

        }
       setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
       }, 4000);

    }
