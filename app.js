const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: "cube",
    cubeEffect: {                       // added
        slideShadows: true,             // added（Presence of shadows on the slide surface
        shadow: true,                   // added（Presence of shadows below the slide
        shadowOffset: 10,              // added（Position of shadows below the slide (in pixels)
        shadowScale: 1,                 // added（Size Ratio of shadows below the slide (0~1)
    },                                  // added
    grabCursor: true,
    speed: 1500,
    autoplay: {
        delay: 2000,
    },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});

document.querySelector('.stories__content-btn-red').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.stories__wrapper').classList.toggle('active');

});





document.querySelector('.mobile-nav__nav-burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.mobile-nav__overlay').classList.toggle('active');
    document.querySelector('.mobile-nav__list').classList.toggle('open');
    document.querySelector('body').classList.toggle('active');

});