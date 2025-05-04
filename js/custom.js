$(document).ready(function() {
    // Initialize Swiper for any sliders
    if ($('.swiper').length) {
        new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.bd-dots-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            },
        });
    }

    // Smooth scroll for anchor links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
});