(function ($) {

    const app = {
        init: function () {
            app.initSlider();
            app.initFunFactCounter();

            $('.contact-form .tab-item').on('click', app.handleContactForm);
        },

        initSlider: function () {
            $('.testimonial-items').slick({
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
                centerMode: false,
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
        },

        initFunFactCounter: function () {
            $('.counter').counterUp({
                delay: 16,
                time: 1500
            });
        },

        handleContactForm: function () {
            $('.contact-form .tab-item').removeClass('active');
            $(this).addClass('active');

            $('.contact-form-wrap').removeClass('active');
            $(`.contact-form-wrap.form-${$(this).data('target')}`).addClass('active');
        },
    }

    $(document).ready(app.init);


})(jQuery);