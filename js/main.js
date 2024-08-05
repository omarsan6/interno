const navTrigger = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector("#nav_menu");

navTrigger.addEventListener("click",() => {
    navMenu.classList.toggle('nav-is-open');
})

// swipper

const swiper = new Swiper('.swiper', {
    loop:true,
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView:2,
    spaceBetween:20,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        960: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
})

// animations

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 300,
});

sr.reveal('.hero__text',{origin: 'top'})

sr.reveal('.steps__step',{distance: '100px', interval: 100})

sr.reveal('.about__text',{origin: 'left'})
sr.reveal('.about__img',{origin: 'right', delay:800})

sr.reveal('.testimonial__bg',{delay:800})
sr.reveal('.testimonial__slider',{delay:1200})

sr.reveal('.brands__img',{delay:600, distance: '100px', interval:100})

sr.reveal('.work__title')
sr.reveal('.work__subtitle')
sr.reveal('.work__grid',{delay: 1000})

sr.reveal('.stats')
sr.reveal('.stats__item',{delay:600, distance: '100px', interval:100})


sr.reveal('.news__title')
sr.reveal('.news__item',{delay:1000, distance: '100px', interval:100})

sr.reveal('.contact__container')

sr.reveal('.footer__item')




