$(document).ready(() => {

    AOS.init();

    const slideMenu = ['oi-slide', 'cam-slide', 'mango-slide', 'dua-slide', 'chanhday-slide']

    const menu = ['./images/Oi/oi.webp', './images/Cam/cam.webp', './images/Xoai/xoai.webp', './images/Dua/dua.webp', './images/Chanhday/chanhday.webp',]

    const slider = $('#slider-hero');

    const swiper = new Swiper(".mySwiper", {
        spaceBetween: 0,
        centeredSlides: true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<img src="' + menu[index] + '"/>' + '</span>';
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            slideChangeTransitionStart: function () {
                slider.find('[data-aos]').hide(0).removeClass('aos-init').removeClass('aos-animate');
            }, slideChangeTransitionEnd: function () {
                slider.find('[data-aos]').show(0);
                AOS.refresh();


            },
        },

    });

    $('.swiper-slide').on('click', function () {
        for (let i = 0; i < slideMenu.length; i++) {
            if ($(this).hasClass(slideMenu[i])) {
                localStorage.setItem('detail', slideMenu[i])
                return
            }
        }
    })

    $('#bars').on("click", () => {
        $('.header-overlay').addClass('show')
        $('.header-overlay').removeClass('close')
        $('body').addClass('show')
    })
    $('#xmark').on("click", () => {
        $('.header-overlay').addClass('close')
        $('.header-overlay').removeClass('show')
        $('body').removeClass('show')
    })
})
