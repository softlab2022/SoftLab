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

            app.initImageCompare();

            app.changeDraculaHeroImage();
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

            $('.slider-main').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                arrows: true,
                nextArrow: '.up',
                prevArrow: '.down',
                vertical: true,
                centerMode: true,
                centerPadding: false,
                autoplaySpeed: 2000,
            });
            $('.compat-slider').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                autoplaySpeed: 2000,
                responsive: [
                    {
                        breakpoint: 1399.98,
                        settings: {
                            arrows: false,
                            centerMode: false,
                            centerPadding: '40px',
                            slidesToShow: 5
                        }
                    },
                    {
                        breakpoint: 1199.98,
                        settings: {
                            arrows: false,
                            centerMode: false,
                            centerPadding: '40px',
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 991.98,
                        settings: {
                            arrows: false,
                            centerMode: false,
                            centerPadding: '40px',
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 767.98,
                        settings: {
                            arrows: false,
                            centerMode: false,
                            centerPadding: '40px',
                            slidesToShow: 2
                        }
                    }
                ]
            });

            $('.dracula-slider').slick({
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 4,
                autoplay: true,
                arrows: false,
                autoplaySpeed: 2000,
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
        },

        initImageCompare: function () {
            $(".reader-mode-image-compare").twentytwenty({

                //  How much of the before image is visible when the page loads
                default_offset_pct: 0.5,

                // label text
                before_label: 'General View',
                after_label: 'Reader Mode View',

                //overlay
                no_overlay: true,

            });
        },

        changeDraculaHeroImage: function () {
            const image = $('.dracula-hero-image');

            setInterval(() => {
                const imageSrc = image.attr('src');
                const isDark = imageSrc.includes('hero-dark');
                image.attr('src', imageSrc.replace(isDark ? 'hero-dark' : 'hero-light', isDark ? 'hero-light' : 'hero-dark'));

                $('.mode-btn').removeClass('active');
                $(`.mode-btn.mode-${isDark ? 'light' : 'dark'}`).addClass('active');

            }, 2000);
        }
    }

    $(document).ready(app.init);


})(jQuery);

// countdown js
var target_date = new Date().getTime() + (1000*3600*48); // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	days = pad( parseInt(seconds_left / 5800) );
	seconds_left = seconds_left % 5800;
		 
	hours = pad( parseInt(seconds_left / 600) );
	seconds_left = seconds_left % 600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}