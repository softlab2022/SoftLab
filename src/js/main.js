import './components/pricing';

;(function ($) {

    const app = {
        init: function () {
            app.initTestimonialSlider();
            app.initFunFactCounter();

            $('.contact-form .tab-item').on('click', app.handleContactForm);
            $('.to-top').on('click', app.handleToTop);

            //handle pricing item click
            $('.item-price').on('click', app.handlePricingItem)
        },

        initTestimonialSlider: function () {

            // Home testimonial slider
            $('.single-testimonial-items').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows: true,
                autoplaySpeed: 3000,
                speed: 2000,
                contentPadding: '30px',
                nextArrow: '.right',
                prevArrow: '.left',
                adaptiveHeight: true,
            });

            $('.testimonial-items').slick({
                centerMode: false,
                centerPadding: '60px',
                slidesToShow: 3,
                dots: true,
                arrows: true,
                nextArrow: '.right',
                prevArrow: '.left',
                responsive: [
                    {
                        breakpoint: 1199.98,
                        settings: {
                            arrows: false,
                            centerMode: false,
                            centerPadding: '40px',
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 991.98,
                        settings: {
                            arrows: false,
                            centerMode: false,
                            centerPadding: '40px',
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 767.98,
                        settings: {
                            arrows: false,
                            centerMode: false,
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

        handleToTop: function () {
            $('html, body').animate({scrollTop: 0}, 'fast');
        },

        handlePricingItem: function () {
            $('.item-price').removeClass('active');
            $(this).addClass('active');
        }
    }

    $(document).ready(app.init);

    $(".demo").twentytwenty({

        //  How much of the before image is visible when the page loads
        default_offset_pct: 0.5,
      
        // or vertical
        orientation: 'horizontal',
      
        // label text
        before_label: 'Before',
        after_label: 'After',
      
        // enable/disable overlay
        no_overlay: false,
      
        // move with handle
        move_with_handle_only: true,
      
        // click to move
        click_to_move: false
        
      });  
        

})(jQuery);