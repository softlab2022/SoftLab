import "./components/pricing";
import "./components/sticky-banner";

(function ($) {
    const app = {
        init: function () {

            //Init Testimonial Slider
            app.initTestimonialSlider();

            //Init Fun Fact Counter
            app.initFunFactCounter();

            //Handle contact form tabs
            $(".contact-form .tab-item").on("click", app.handleContactForm);

            //Handle to top button
            $(".to-top").on("click", app.handleToTop);

            //handle pricing item click
            $(".item-price").on("click", app.handlePricingItem);

            //Handle Image Compare on Reader Mode page
            app.initImageCompare();

            //Change Dracula Hero Image
            app.changeDraculaHeroImage();

            

        },


        initTestimonialSlider: function () {
            // Home testimonial slider
            $(".single-testimonial-items").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows: true,
                autoplaySpeed: 3000,
                speed: 2000,
                contentPadding: "30px",
                nextArrow: ".right",
                prevArrow: ".left",
                adaptiveHeight: true,
            });

            //google drive
            $(".testimonial-items").slick({
                centerMode: false,
                centerPadding: "60px",
                slidesToShow: 3,
                dots: true,
                autoplay: true,
                arrows: true,
                autoplaySpeed: 3000,
                nextArrow: ".right",
                prevArrow: ".left",
                responsive: [
                    {
                        breakpoint: 1199.98,
                        settings: {
                            arrows: false,
                            centerMode: false,
                            centerPadding: "40px",
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 991.98,
                        settings: {
                            arrows: false,
                            centerMode: false,
                            centerPadding: "40px",
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 767.98,
                        settings: {
                            arrows: false,
                            centerMode: false,
                            centerPadding: "40px",
                            slidesToShow: 1,
                        },
                    },
                ],
            });
            //about slider
            $(".slider-main").slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                arrows: true,
                nextArrow: ".up",
                prevArrow: ".down",
                vertical: true,
                centerMode: true,
                centerPadding: false,
                autoplaySpeed: 2000,
            });

            $(".compat-slider").slick({
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
                            centerPadding: "40px",
                            slidesToShow: 5,
                        },
                    },
                    {
                        breakpoint: 1199.98,
                        settings: {
                            arrows: false,
                            centerMode: false,
                            centerPadding: "40px",
                            slidesToShow: 4,
                        },
                    },
                    {
                        breakpoint: 991.98,
                        settings: {
                            arrows: false,
                            centerMode: false,
                            centerPadding: "40px",
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 767.98,
                        settings: {
                            arrows: false,
                            centerMode: false,
                            centerPadding: "40px",
                            slidesToShow: 2,
                        },
                    },
                ],
            });
            //dracula slider
            $(".dracula-slider").slick({
                centerMode: true,
                centerPadding: "60px",
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
                            centerPadding: "40px",
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 991.98,
                        settings: {
                            arrows: false,
                            centerMode: false,
                            centerPadding: "40px",
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 767.98,
                        settings: {
                            arrows: false,
                            centerMode: false,
                            centerPadding: "40px",
                            slidesToShow: 1,
                        },
                    },
                ],
            });
        },

        initFunFactCounter: function () {
            $(".counter").counterUp({
                delay: 16,
                time: 1500,
            });
        },

        handleContactForm: function () {
            $(".contact-form .tab-item").removeClass("active");
            $(this).addClass("active");

            $(".contact-form-wrap").removeClass("active");
            $(`.contact-form-wrap.form-${$(this).data("target")}`).addClass("active");
        },

        handleToTop: function () {
            $("html, body").animate({scrollTop: 0}, "fast");
        },

        handlePricingItem: function () {
            $(".item-price").removeClass("active");
            $(this).addClass("active");
        },

        initImageCompare: function () {
            $(".reader-mode-image-compare").twentytwenty({
                //  How much of the before image is visible when the page loads
                default_offset_pct: 0.5,

                // label text
                before_label: "General View",
                after_label: "Reader Mode View",

                //overlay
                no_overlay: true,
            });
        },

        changeDraculaHeroImage: function () {
            const image = $(".dracula-hero-image");

            if (!image.length) return;

            setInterval(() => {
                const imageSrc = image.attr("src");
                const isDark = imageSrc.includes("hero-dark");
                image.attr(
                    "src",
                    imageSrc.replace(
                        isDark ? "hero-dark" : "hero-light",
                        isDark ? "hero-light" : "hero-dark"
                    )
                );

                $(".mode-btn").removeClass("active");
                $(`.mode-btn.mode-${isDark ? "light" : "dark"}`).addClass("active");
            }, 2000);
        },


    };

    $(document).ready(app.init);
    
    //video js for radio player ads
    new VenoBox({
        selector: '.my-video-links',
    });

})(jQuery);
