import "./components/pricing";
import "./components/sticky-banner";

(function ($) {
    const app = {
        init: function () {
            //Init Testimonial Slider
            app.initTestimonialSlider();

            //Init Fun Fact Counter
            app.initFunFactCounter();

            //Init scrolling header
            app.initFixdHeader();

            //Handle contact form tabs
            $(".contact-form .tab-item").on("click", app.handleContactForm);
            //Handle modal video
            // $("#open-modal").on("click", app.handleModalVideo);
            // $(".modal-btn-close").on("click", app.handleModalVideoClose);

            //Handle popup img
            app.handlePopupimg();


            //Handle to top button
            $(".to-top").on("click", app.handleToTop);

            //handle pricing item click
            $(".item-price").on("click", app.handlePricingItem);

            //Handle Image Compare on Reader Mode page
            app.initImageCompare();

            //Change Dracula Hero Image
            app.changeDraculaHeroImage();

            // Handle Affiliate Form
            $("#affiliate-register-form").on("submit", app.handleAffiliateForm);

            $("[name='product[]']").on("change", app.handleProductChange);
            $("[name='method[]']").on("change", app.handleMethodChange);

            // Handle Search
            $(".search-btn").on("click", app.openSearch);
            $(".cencel-btn").on("click", app.cancelSearch);

        },

        openSearch: function (e) {
            $(".search-form").addClass("active");

            $(".search-field").focus();
        },

        cancelSearch: function (e) {
            $(".search-form").removeClass("active");
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
                // adaptiveHeight: true,
            });
            //multimedia player hero slider
            $(".hero-image-main").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                 dots: true,
                autoplaySpeed: 3000,
                speed: 2000,
                contentPadding: "30px",
                // adaptiveHeight: true,
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

            //testimonial-items-cf7
            $(".testimonial-items-cf7").slick({
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

            //preview eacf7-testimonial-items
            $(".eacf7-testimonial-items").slick({
                centerMode: false,
                centerPadding: "60px",
                slidesToShow: 3,
                dots: true,
                autoplay: true,
                arrows: true,
                autoplaySpeed: 3000,
                nextArrow: ".eacf7-right",
                prevArrow: ".eacf7-left",
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

        //scrolling header js
        initFixdHeader: function () {
            let lastScrollTop = 0;
            const fixedheader = $('.site-header');

            $(window).scroll(function () {
                let currentScroll = $(this).scrollTop();

                if (currentScroll > lastScrollTop || currentScroll < 5) {
                    // Scroll down
                    fixedheader.removeClass('fixed-header');

                } else {
                    // Scroll up
                    fixedheader.addClass('fixed-header');
                }

                lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
            });
        },


        //Handle popup img js
        // handlePopupimg: function () {
        //     $('.single article img').click(function () {
        //         var src = $(this).attr('src');

        //         $.magnificPopup.open({
        //             items: {
        //                 src: src
        //             },
        //             type: 'image',
        //             closeOnContentClick: true,
        //             mainClass: 'mfp-img-mobile',
        //             image: {
        //                 verticalFit: true
        //             }
        //         });
        //     });
        // },

        //Handle popup img js
        handlePopupimg: function () {
            $('.single article img').click(function () {
                var src = $(this).attr('src');
                lity(src);
            });
        },
        //Handle popup img js end 

        handleContactForm: function () {
            $(".contact-form .tab-item").removeClass("active");
            $(this).addClass("active");

            $(".contact-form-wrap").removeClass("active");
            $(`.contact-form-wrap.form-${$(this).data("target")}`).addClass("active");
        },


        handleToTop: function () {
            $("html, body").animate({ scrollTop: 0 }, "fast");
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

        handleAffiliateForm: function (e) {
            e.preventDefault();

            var failed = false;

            // Product selection
            let products = [];
            $("[name='product[]']:checked").each(function () {
                products.push($(this).val());
            });

            if (!products.length) {
                $("[name='product[]']").attr("required", true);
                failed = true;
            } else {
                $("[name='product[]']").attr("required", false);
            }

            // Methods Selection
            let methods = [];

            $("[name='method[]']:checked").each(function () {
                methods.push($(this).val());
            });

            if (!methods.length) {
                $("[name='method[]']").attr("required", true);
                failed = true;
            } else {
                $("[name='method[]']").attr("required", false);
            }

            //bootstrap validation
            const form = $(this).get(0);

            if (form.checkValidity() === false) {
                failed = true;

                $(form).addClass("was-validated");
            }

            if (!failed) {
                const name = $("#name").val();
                const email = $("#email").val();
                const pemail = $("#pemail").val();
                const domain = $("#domain").val();
                const statistics = $("#statistics").val();
                const promotion_method_description = $(
                    "#promotion_method_description"
                ).val();

                wp.ajax.send("affiliate_register", {
                    data: {
                        name: name,
                        email: email,
                        pemail: pemail,
                        domain: domain,
                        products: products,
                        methods: methods,
                        statistics: statistics,
                        promotion_method_description: promotion_method_description,
                    },
                    beforeSend: () => {
                        $("#submit").find(".fa-spinner").removeClass("d-none");
                    },
                    success: (data) => {
                        $("#affiliate-register-form").hide();

                        $(".message").show();
                    },
                    error: (error) => {
                        console.log(error);
                    },
                    complete: () => {
                        $("#submit").find(".fa-spinner").addClass("d-none");
                    },
                });
            }
        },

        handleProductChange: function () {
            if ($("[name='product[]']:checked").length) {
                $("[name='product[]']").attr("required", false);
            } else {
                $("[name='product[]']").attr("required", true);
            }
        },

        handleMethodChange: function () {
            if ($("[name='method[]']:checked").length) {
                $("[name='method[]']").attr("required", false);
            } else {
                $("[name='method[]']").attr("required", true);
            }
        },

        // handleModalVideo: function () {
        //     const modalContent = ``;
        //     const targetElement = $(".hero-how-butt");
        //     targetElement.append(modalContent);


        // },

        // handleModalVideoClose: function () {
        //     const targetElement = $(".hero-how-butt").closest('#staticBackdrop');
        //     console.log(targetElement);
        //     targetElement.empty();

        // },

    };
    $(document).on('click', '[data-lightbox]', lity);
    //mobile menu close js
    $(document).ready(function () {
        const $menu = $('.mobile-menu');
        const $closeBtn = $('#close_btn');
        const $toggleMenuBtn = $('#menu-toggle');
        $toggleMenuBtn.click(function () {
            $menu.addClass('show');
        });
        $(document).click(function (e) {
            if (!$menu.is(e.target) && $menu.has(e.target).length === 0 && !$toggleMenuBtn.is(e.target)) {
                $menu.removeClass('show');
            }
        });
        $closeBtn.click(function () {
            $menu.removeClass('show');
        });
    });

    // eacf7 preview js start
    $(document).ready(function () {
        // Handle Show Code button click
        $(".show-buttons").on("click", function () {
            var index = $(this).data("index"); // Get the index from the data attribute
            var $formArea = $('.form-area[data-index="' + index + '"]');
            var $formCodeContainer = $formArea.find(".form-code");
            var $eacf7Form = $formArea.find(".eacf7-form");
            var $copyButton = $formArea.find(".copy-buttons");
            var $showButton = $(this); // Current Show Code button
    
            // Toggle visibility of the form code and associated elements
            if ($formCodeContainer.is(":visible")) {
                $formCodeContainer.hide();
                $eacf7Form.show();
                $copyButton.hide();
                $showButton.html('<i class="fa-solid fa-code"></i> Show Code'); // Change text to Show Code
            } else {
                $formCodeContainer.show();
                $eacf7Form.hide();
                $copyButton.show();
                $showButton.html('<i class="fa-solid fa-code"></i> Hide Code'); // Change text to Hide Code
            }
        });
    
        // Handle Copy Code button click
        $(".copy-buttons").on("click", function () {
            var index = $(this).data("index"); // Get the index from the data attribute
            var $formArea = $('.form-area[data-index="' + index + '"]');
            var codeText = $formArea.find(".form-code").text().trim();
    
            copyToClipboard(codeText);
        });
    
        // Handle code content click to copy and select all
        $(document).on("click", ".form-code code", function () {
            var codeText = $(this).text().trim();
    
            // Select all text in the code block
            var range = document.createRange();
            range.selectNodeContents(this);
            var selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
    
            // Copy the code to the clipboard
            copyToClipboard(codeText);
        });
    
        // Copy to clipboard function
        function copyToClipboard(text) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text)
                    .then(function () {
                        alert("Form code copied to clipboard!");
                    })
                    .catch(function (err) {
                        console.error("Failed to copy code: ", err);
                    });
            } else {
                // Fallback for unsupported Clipboard API
                var textArea = document.createElement("textarea");
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    var successful = document.execCommand("copy");
                    if (successful) {
                        alert("Form code copied to clipboard!");
                    } else {
                        alert("Copy failed.");
                    }
                } catch (err) {
                    alert("Unable to copy text.");
                } finally {
                    document.body.removeChild(textArea);
                }
            }
        }
    });
     // eacf7 preview js end
    $(document).ready(app.init);
})(jQuery);


// let $items = $('.slider-main .slider-item .item');
// let $next = $('#next');
// let $prev = $('#prev');

// let active = 3;
// let autoSlideInterval;

// function loadShow() {
//     let stt = 0;

//     // Setting style for the active item
//     $items.eq(active).css({
//         transform: 'none',
//         zIndex: 1,
//         filter: 'none',
//         opacity: 1
//     });

//     // For items after the active item
//     for (let i = active + 1; i < $items.length; i++) {
//         stt++;
//         $items.eq(i).css({
//             transform: `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`,
//             zIndex: -stt,
//             filter: 'blur(5px)',
//             opacity: stt > 2 ? 0 : 0.6
//         });
//     }

//     // Reset `stt` for items before the active item
//     stt = 0;
//     for (let i = active - 1; i >= 0; i--) {
//         stt++;
//         $items.eq(i).css({
//             transform: `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`,
//             zIndex: -stt,
//             filter: 'blur(5px)',
//             opacity: stt > 2 ? 0 : 0.6
//         });
//     }
// }
// loadShow();

// $next.on('click', function() {
//     stopAutoSlide();
//     active = active + 1 < $items.length ? active + 1 : 0;
//     loadShow();
//     startAutoSlide();
// });

// $prev.on('click', function() {
//     stopAutoSlide();
//     active = active - 1 >= 0 ? active - 1 : $items.length - 1;
//     loadShow();
//     startAutoSlide();
// });

// // Auto slide function
// function startAutoSlide() {
//     autoSlideInterval = setInterval(function() {
//         active = active + 1 < $items.length ? active + 1 : 0;
//         loadShow();
//     }, 3000);
// }

// // Stop auto slide on user interaction
// function stopAutoSlide() {
//     clearInterval(autoSlideInterval);
// }

// // Start auto-slide when the page loads
// startAutoSlide();

