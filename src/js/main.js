(function ($) {
    $(document).ready(function () {
        //Testimonial Slider
        $('.testimonial-item').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            autoplaySpeed: 3000,
            speed: 2000,
            nextArrow: '.right',
            prevArrow: '.left',
        });

        $('.think-main-items').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    });
})(jQuery);