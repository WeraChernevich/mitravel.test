const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
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