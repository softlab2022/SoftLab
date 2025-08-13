/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/pricing.js":
/*!**************************************!*\
  !*** ./src/js/components/pricing.js ***!
  \**************************************/
/***/ (() => {

;
(function ($) {
  var app = {
    init: function init() {
      //Handle pricing switcher
      $('.pricing-switcher').on('click', app.handleSwitcher);

      // Handle license switcher
      $('.license-dropdown .dropdown-item').on('click', app.handleLicenseSwitcher);
    },
    handleSwitcher: function handleSwitcher(e) {
      $('.price-text').removeClass('annual lifetime').addClass($(this).hasClass('active') ? 'annual' : 'lifetime');
      $(this).toggleClass('active');
    },
    handleLicenseSwitcher: function handleLicenseSwitcher(e) {
      e.preventDefault();
      $('.license-dropdown .dropdown-toggle').text($(this).text());
      $('.license-dropdown .dropdown-item').removeClass('active');
      $(this).addClass('active');
      var license = $(this).data('license');
      $('.price-text').removeClass('license-1 license-2 license-5 license-100 license-unlimited ').addClass("license-".concat(license));
    }
  };
  $(document).ready(app.init);
})(jQuery);

/***/ }),

/***/ "./src/js/components/sticky-banner.js":
/*!********************************************!*\
  !*** ./src/js/components/sticky-banner.js ***!
  \********************************************/
/***/ (() => {

// ;(function ($) {
//     "use strict";

//     $(document).ready(function () {
//         const banner = $('#header-sticky-banner, #halloween-offers, #black-friday-offers');

//         // Close banner
//         banner.on('click', '.banner-close', function () {
//             $('#header-sticky-banner').remove();
//         });

//         // Banner countdown
//         const countdown = banner.find('.banner-countdown');
//         const timer = banner.find('.timer');

//         if (countdown.length) {
//             const SECOND = 1000;
//             const MINUTE = 60 * SECOND;
//             const HOUR = 60 * MINUTE;
//             const DAY = 24 * HOUR;

//             const formatTime = (distance) => {
//                 const days = Math.floor(distance / DAY);
//                 const hours = Math.floor((distance % DAY) / HOUR);
//                 const minutes = Math.floor((distance % HOUR) / MINUTE);
//                 const seconds = Math.floor((distance % MINUTE) / SECOND);

//                 return `<span class="days">${days}d</span> <span class="hours">${hours}h</span> <span class="minutes">${minutes}m</span> <span class="seconds">${seconds}s</span>`;
//             };

//             const updateTimer = () => {
//                 const now = new Date().getTime();
//                 //let countDownDate = new Date().getTime() + 8.5 * DAY;
//                 let countDownDate = new Date('2024-12-05T23:59:00').getTime();

//                 // Check if there is a time in local storage
//                 if ( localStorage.getItem('bf_offers_time')) {
//                     countDownDate = localStorage.getItem('bf_offers_time');
//                 }

//                 const distance = countDownDate - now;

//                 if (distance < 0) {
//                     // Reset the time
//                     localStorage.removeItem('bf_offers_time');
//                     return;
//                 }

//                 timer.html(formatTime(distance));

//                 // Save time in local storage
//                 localStorage.setItem('bf_offers_time', countDownDate);
//             };

//             const x = setInterval(updateTimer, 1000);
//             updateTimer(); // Call immediately, don’t wait for the first interval to execute

//         }
//     });

// })(jQuery);

(function ($) {
  "use strict";

  $(document).ready(function () {
    var banner = $('#header-sticky-banner, #halloween-offers, #black-friday-offers');

    // Close banner
    banner.on('click', '.banner-close', function () {
      $('#header-sticky-banner').remove();
    });

    // Banner countdown
    var countdown = banner.find('.banner-countdown');
    var timer = banner.find('.timer');
    if (countdown.length) {
      var SECOND = 1000;
      var MINUTE = 60 * SECOND;
      var HOUR = 60 * MINUTE;
      var DAY = 24 * HOUR;
      var padZero = function padZero(num) {
        return num < 10 ? "0".concat(num) : num;
      };
      var formatTime = function formatTime(distance) {
        var days = padZero(Math.floor(distance / DAY));
        var hours = padZero(Math.floor(distance % DAY / HOUR));
        var minutes = padZero(Math.floor(distance % HOUR / MINUTE));
        var seconds = padZero(Math.floor(distance % MINUTE / SECOND));
        return "<div class=\"countdown\"><span class=\"days\">".concat(days, "</span> <p>Day</p></div> \n                <div class=\"countdown\"><span class=\"hours\">").concat(hours, "</span> <p>Hour</p> </div>\n                <div class=\"countdown\"><span class=\"minutes\">").concat(minutes, "</span> <p>Min</p></div>\n                <div class=\"countdown\"><span class=\"seconds\">").concat(seconds, "</span> <p>Sec</p>\n                </div>");
      };
      var updateTimer = function updateTimer() {
        var now = new Date().getTime();
        var countDownDate = new Date('2024-12-05T23:59:00').getTime();

        // Check if there is a time in local storage
        if (localStorage.getItem('bf_offers_time')) {
          countDownDate = localStorage.getItem('bf_offers_time');
        }
        var distance = countDownDate - now;
        if (distance < 0) {
          localStorage.removeItem('bf_offers_time');
          banner.remove();
          clearInterval(x);
          return;
        }
        timer.html(formatTime(distance));

        // Save time in local storage
        localStorage.setItem('bf_offers_time', countDownDate);
      };
      var x = setInterval(updateTimer, 1000);
      updateTimer();
    }
  });
})(jQuery);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_pricing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pricing */ "./src/js/components/pricing.js");
/* harmony import */ var _components_pricing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_pricing__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_sticky_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sticky-banner */ "./src/js/components/sticky-banner.js");
/* harmony import */ var _components_sticky_banner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_sticky_banner__WEBPACK_IMPORTED_MODULE_1__);


(function ($) {
  var app = {
    init: function init() {
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
      app.handleChangeDotText();
    },
    openSearch: function openSearch(e) {
      $(".search-form").addClass("active");
      $(".search-field").focus();
    },
    cancelSearch: function cancelSearch(e) {
      $(".search-form").removeClass("active");
    },
    initTestimonialSlider: function initTestimonialSlider() {
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
        prevArrow: ".left"
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
        contentPadding: "30px"
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
        responsive: [{
          breakpoint: 1199.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "40px",
            slidesToShow: 3
          }
        }, {
          breakpoint: 991.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "40px",
            slidesToShow: 2
          }
        }, {
          breakpoint: 767.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "40px",
            slidesToShow: 1
          }
        }]
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
        responsive: [{
          breakpoint: 1199.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "40px",
            slidesToShow: 3
          }
        }, {
          breakpoint: 991.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "40px",
            slidesToShow: 2
          }
        }, {
          breakpoint: 767.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "40px",
            slidesToShow: 1
          }
        }]
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
        responsive: [{
          breakpoint: 1199.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "40px",
            slidesToShow: 3
          }
        }, {
          breakpoint: 991.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "40px",
            slidesToShow: 2
          }
        }, {
          breakpoint: 767.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "40px",
            slidesToShow: 1
          }
        }]
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
        autoplaySpeed: 2000
      });
      $(".compat-slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [{
          breakpoint: 1399.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "40px",
            slidesToShow: 5
          }
        }, {
          breakpoint: 1199.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "40px",
            slidesToShow: 4
          }
        }, {
          breakpoint: 991.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "40px",
            slidesToShow: 3
          }
        }, {
          breakpoint: 767.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "40px",
            slidesToShow: 2
          }
        }]
      });
      //dracula slider
      $(".dracula-slider").slick({
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 4,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [{
          breakpoint: 1199.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "40px",
            slidesToShow: 3
          }
        }, {
          breakpoint: 991.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "40px",
            slidesToShow: 2
          }
        }, {
          breakpoint: 767.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: "40px",
            slidesToShow: 1
          }
        }]
      });
    },
    initFunFactCounter: function initFunFactCounter() {
      $(".counter").counterUp({
        delay: 16,
        time: 1500
      });
    },
    //scrolling header js
    initFixdHeader: function initFixdHeader() {
      var lastScrollTop = 0;
      var fixedheader = $('.site-header');
      $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
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
    handleChangeDotText: function handleChangeDotText() {
      $('.slick-dots li:nth-child(1) button').text('Audio Player');
      $('.slick-dots li:nth-child(2) button').text('Video Player');
      $('.slick-dots li:nth-child(3) button').text('Podcast Player');
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
    handlePopupimg: function handlePopupimg() {
      $('.single article img').click(function () {
        var src = $(this).attr('src');
        lity(src);
      });
    },
    //Handle popup img js end 

    handleContactForm: function handleContactForm() {
      $(".contact-form .tab-item").removeClass("active");
      $(this).addClass("active");
      $(".contact-form-wrap").removeClass("active");
      $(".contact-form-wrap.form-".concat($(this).data("target"))).addClass("active");
    },
    handleToTop: function handleToTop() {
      $("html, body").animate({
        scrollTop: 0
      }, "fast");
    },
    handlePricingItem: function handlePricingItem() {
      $(".item-price").removeClass("active");
      $(this).addClass("active");
    },
    initImageCompare: function initImageCompare() {
      $(".reader-mode-image-compare").twentytwenty({
        //  How much of the before image is visible when the page loads
        default_offset_pct: 0.5,
        // label text
        before_label: "General View",
        after_label: "Reader Mode View",
        //overlay
        no_overlay: true
      });
    },
    changeDraculaHeroImage: function changeDraculaHeroImage() {
      var image = $(".dracula-hero-image");
      if (!image.length) return;
      setInterval(function () {
        var imageSrc = image.attr("src");
        var isDark = imageSrc.includes("hero-dark");
        image.attr("src", imageSrc.replace(isDark ? "hero-dark" : "hero-light", isDark ? "hero-light" : "hero-dark"));
        $(".mode-btn").removeClass("active");
        $(".mode-btn.mode-".concat(isDark ? "light" : "dark")).addClass("active");
      }, 2000);
    },
    handleAffiliateForm: function handleAffiliateForm(e) {
      e.preventDefault();
      var failed = false;

      // Product selection
      var products = [];
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
      var methods = [];
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
      var form = $(this).get(0);
      if (form.checkValidity() === false) {
        failed = true;
        $(form).addClass("was-validated");
      }
      if (!failed) {
        var name = $("#name").val();
        var email = $("#email").val();
        var pemail = $("#pemail").val();
        var domain = $("#domain").val();
        var statistics = $("#statistics").val();
        var promotion_method_description = $("#promotion_method_description").val();
        wp.ajax.send("affiliate_register", {
          data: {
            name: name,
            email: email,
            pemail: pemail,
            domain: domain,
            products: products,
            methods: methods,
            statistics: statistics,
            promotion_method_description: promotion_method_description
          },
          beforeSend: function beforeSend() {
            $("#submit").find(".fa-spinner").removeClass("d-none");
          },
          success: function success(data) {
            $("#affiliate-register-form").hide();
            $(".message").show();
          },
          error: function error(_error) {
            console.log(_error);
          },
          complete: function complete() {
            $("#submit").find(".fa-spinner").addClass("d-none");
          }
        });
      }
    },
    handleProductChange: function handleProductChange() {
      if ($("[name='product[]']:checked").length) {
        $("[name='product[]']").attr("required", false);
      } else {
        $("[name='product[]']").attr("required", true);
      }
    },
    handleMethodChange: function handleMethodChange() {
      if ($("[name='method[]']:checked").length) {
        $("[name='method[]']").attr("required", false);
      } else {
        $("[name='method[]']").attr("required", true);
      }
    }

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
    var $menu = $('.mobile-menu');
    var $closeBtn = $('#close_btn');
    var $toggleMenuBtn = $('#menu-toggle');
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
        navigator.clipboard.writeText(text).then(function () {
          alert("Form code copied to clipboard!");
        })["catch"](function (err) {
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ1IsUUFBUSxDQUFDO1FBQ3ZDO01BQ0o7SUFDSjtFQUNKLENBQUMsQ0FBQztFQUNGO0VBQ0FuSyxDQUFDLENBQUNnQixRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDaEIsR0FBRyxDQUFDQyxJQUFJLENBQUM7QUFDL0IsQ0FBQyxFQUFFZ0IsTUFBTSxDQUFDOztBQUdWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3N0aWNreS1iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24gKCQpIHtcclxuICAgIGNvbnN0IGFwcCA9IHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vSGFuZGxlIHByaWNpbmcgc3dpdGNoZXJcclxuICAgICAgICAgICAgJCgnLnByaWNpbmctc3dpdGNoZXInKS5vbignY2xpY2snLCBhcHAuaGFuZGxlU3dpdGNoZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlIGxpY2Vuc2Ugc3dpdGNoZXJcclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5vbignY2xpY2snLCBhcHAuaGFuZGxlTGljZW5zZVN3aXRjaGVyKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnYW5udWFsIGxpZmV0aW1lJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICdhbm51YWwnIDogJ2xpZmV0aW1lJyk7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUxpY2Vuc2VTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZScpLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGljZW5zZSA9ICQodGhpcykuZGF0YSgnbGljZW5zZScpO1xyXG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdsaWNlbnNlLTEgbGljZW5zZS0yIGxpY2Vuc2UtNSBsaWNlbnNlLTEwMCBsaWNlbnNlLXVubGltaXRlZCAnKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGBsaWNlbnNlLSR7bGljZW5zZX1gKTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxuXHJcbn0pKGpRdWVyeSk7IiwiLy8gOyhmdW5jdGlvbiAoJCkge1xyXG4vLyAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgIGNvbnN0IGJhbm5lciA9ICQoJyNoZWFkZXItc3RpY2t5LWJhbm5lciwgI2hhbGxvd2Vlbi1vZmZlcnMsICNibGFjay1mcmlkYXktb2ZmZXJzJyk7XHJcblxyXG4vLyAgICAgICAgIC8vIENsb3NlIGJhbm5lclxyXG4vLyAgICAgICAgIGJhbm5lci5vbignY2xpY2snLCAnLmJhbm5lci1jbG9zZScsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICAgJCgnI2hlYWRlci1zdGlja3ktYmFubmVyJykucmVtb3ZlKCk7XHJcbi8vICAgICAgICAgfSk7XHJcblxyXG4vLyAgICAgICAgIC8vIEJhbm5lciBjb3VudGRvd25cclxuLy8gICAgICAgICBjb25zdCBjb3VudGRvd24gPSBiYW5uZXIuZmluZCgnLmJhbm5lci1jb3VudGRvd24nKTtcclxuLy8gICAgICAgICBjb25zdCB0aW1lciA9IGJhbm5lci5maW5kKCcudGltZXInKTtcclxuXHJcbi8vICAgICAgICAgaWYgKGNvdW50ZG93bi5sZW5ndGgpIHtcclxuLy8gICAgICAgICAgICAgY29uc3QgU0VDT05EID0gMTAwMDtcclxuLy8gICAgICAgICAgICAgY29uc3QgTUlOVVRFID0gNjAgKiBTRUNPTkQ7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IEhPVVIgPSA2MCAqIE1JTlVURTtcclxuLy8gICAgICAgICAgICAgY29uc3QgREFZID0gMjQgKiBIT1VSO1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgZm9ybWF0VGltZSA9IChkaXN0YW5jZSkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyBEQVkpO1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlIERBWSkgLyBIT1VSKTtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlIEhPVVIpIC8gTUlOVVRFKTtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlIE1JTlVURSkgLyBTRUNPTkQpO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCJkYXlzXCI+JHtkYXlzfWQ8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaG91cnNcIj4ke2hvdXJzfWg8L3NwYW4+IDxzcGFuIGNsYXNzPVwibWludXRlc1wiPiR7bWludXRlc31tPC9zcGFuPiA8c3BhbiBjbGFzcz1cInNlY29uZHNcIj4ke3NlY29uZHN9czwvc3Bhbj5gO1xyXG4vLyAgICAgICAgICAgICB9O1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgdXBkYXRlVGltZXIgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuLy8gICAgICAgICAgICAgICAgIC8vbGV0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDguNSAqIERBWTtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBjb3VudERvd25EYXRlID0gbmV3IERhdGUoJzIwMjQtMTItMDVUMjM6NTk6MDAnKS5nZXRUaW1lKCk7XHJcblxyXG5cclxuLy8gICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbi8vICAgICAgICAgICAgICAgICBpZiAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZl9vZmZlcnNfdGltZScpKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZl9vZmZlcnNfdGltZScpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcclxuXHJcbi8vICAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIHRpbWVcclxuLy8gICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYmZfb2ZmZXJzX3RpbWUnKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgdGltZXIuaHRtbChmb3JtYXRUaW1lKGRpc3RhbmNlKSk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLy8gU2F2ZSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuLy8gICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiZl9vZmZlcnNfdGltZScsIGNvdW50RG93bkRhdGUpO1xyXG4vLyAgICAgICAgICAgICB9O1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgeCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcclxuLy8gICAgICAgICAgICAgdXBkYXRlVGltZXIoKTsgLy8gQ2FsbCBpbW1lZGlhdGVseSwgZG9u4oCZdCB3YWl0IGZvciB0aGUgZmlyc3QgaW50ZXJ2YWwgdG8gZXhlY3V0ZVxyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KTtcclxuXHJcbi8vIH0pKGpRdWVyeSk7XHJcblxyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYmFubmVyID0gJCgnI2hlYWRlci1zdGlja3ktYmFubmVyLCAjaGFsbG93ZWVuLW9mZmVycywgI2JsYWNrLWZyaWRheS1vZmZlcnMnKTtcclxuXHJcbiAgICAgICAgLy8gQ2xvc2UgYmFubmVyXHJcbiAgICAgICAgYmFubmVyLm9uKCdjbGljaycsICcuYmFubmVyLWNsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXInKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQmFubmVyIGNvdW50ZG93blxyXG4gICAgICAgIGNvbnN0IGNvdW50ZG93biA9IGJhbm5lci5maW5kKCcuYmFubmVyLWNvdW50ZG93bicpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVyID0gYmFubmVyLmZpbmQoJy50aW1lcicpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBTRUNPTkQgPSAxMDAwO1xyXG4gICAgICAgICAgICBjb25zdCBNSU5VVEUgPSA2MCAqIFNFQ09ORDtcclxuICAgICAgICAgICAgY29uc3QgSE9VUiA9IDYwICogTUlOVVRFO1xyXG4gICAgICAgICAgICBjb25zdCBEQVkgPSAyNCAqIEhPVVI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYWRaZXJvID0gKG51bSkgPT4gKG51bSA8IDEwID8gYDAke251bX1gIDogbnVtKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdFRpbWUgPSAoZGlzdGFuY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBwYWRaZXJvKE1hdGguZmxvb3IoZGlzdGFuY2UgLyBEQVkpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gcGFkWmVybyhNYXRoLmZsb29yKChkaXN0YW5jZSAlIERBWSkgLyBIT1VSKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gcGFkWmVybyhNYXRoLmZsb29yKChkaXN0YW5jZSAlIEhPVVIpIC8gTUlOVVRFKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gcGFkWmVybyhNYXRoLmZsb29yKChkaXN0YW5jZSAlIE1JTlVURSkgLyBTRUNPTkQpKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj48c3BhbiBjbGFzcz1cImRheXNcIj4ke2RheXN9PC9zcGFuPiA8cD5EYXk8L3A+PC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZG93blwiPjxzcGFuIGNsYXNzPVwiaG91cnNcIj4ke2hvdXJzfTwvc3Bhbj4gPHA+SG91cjwvcD4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRkb3duXCI+PHNwYW4gY2xhc3M9XCJtaW51dGVzXCI+JHttaW51dGVzfTwvc3Bhbj4gPHA+TWluPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZG93blwiPjxzcGFuIGNsYXNzPVwic2Vjb25kc1wiPiR7c2Vjb25kc308L3NwYW4+IDxwPlNlYzwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVUaW1lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSgnMjAyNC0xMi0wNVQyMzo1OTowMCcpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZl9vZmZlcnNfdGltZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZl9vZmZlcnNfdGltZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBjb3VudERvd25EYXRlIC0gbm93O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYmZfb2ZmZXJzX3RpbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICBiYW5uZXIucmVtb3ZlKCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoeCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lci5odG1sKGZvcm1hdFRpbWUoZGlzdGFuY2UpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTYXZlIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JmX29mZmVyc190aW1lJywgY291bnREb3duRGF0ZSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCB4ID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZXIsIDEwMDApO1xyXG4gICAgICAgICAgICB1cGRhdGVUaW1lcigpOyBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pKGpRdWVyeSk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvcHJpY2luZ1wiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lclwiO1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBjb25zdCBhcHAgPSB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL0luaXQgVGVzdGltb25pYWwgU2xpZGVyXHJcbiAgICAgICAgICAgIGFwcC5pbml0VGVzdGltb25pYWxTbGlkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vSW5pdCBGdW4gRmFjdCBDb3VudGVyXHJcbiAgICAgICAgICAgIGFwcC5pbml0RnVuRmFjdENvdW50ZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vSW5pdCBzY3JvbGxpbmcgaGVhZGVyXHJcbiAgICAgICAgICAgIGFwcC5pbml0Rml4ZEhlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgLy9IYW5kbGUgY29udGFjdCBmb3JtIHRhYnNcclxuICAgICAgICAgICAgJChcIi5jb250YWN0LWZvcm0gLnRhYi1pdGVtXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZUNvbnRhY3RGb3JtKTtcclxuICAgICAgICAgICAgLy9IYW5kbGUgbW9kYWwgdmlkZW9cclxuICAgICAgICAgICAgLy8gJChcIiNvcGVuLW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZU1vZGFsVmlkZW8pO1xyXG4gICAgICAgICAgICAvLyAkKFwiLm1vZGFsLWJ0bi1jbG9zZVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVNb2RhbFZpZGVvQ2xvc2UpO1xyXG5cclxuICAgICAgICAgICAgLy9IYW5kbGUgcG9wdXAgaW1nXHJcbiAgICAgICAgICAgIGFwcC5oYW5kbGVQb3B1cGltZygpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vSGFuZGxlIHRvIHRvcCBidXR0b25cclxuICAgICAgICAgICAgJChcIi50by10b3BcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlVG9Ub3ApO1xyXG5cclxuICAgICAgICAgICAgLy9oYW5kbGUgcHJpY2luZyBpdGVtIGNsaWNrXHJcbiAgICAgICAgICAgICQoXCIuaXRlbS1wcmljZVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVQcmljaW5nSXRlbSk7XHJcblxyXG4gICAgICAgICAgICAvL0hhbmRsZSBJbWFnZSBDb21wYXJlIG9uIFJlYWRlciBNb2RlIHBhZ2VcclxuICAgICAgICAgICAgYXBwLmluaXRJbWFnZUNvbXBhcmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vQ2hhbmdlIERyYWN1bGEgSGVybyBJbWFnZVxyXG4gICAgICAgICAgICBhcHAuY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlIEFmZmlsaWF0ZSBGb3JtXHJcbiAgICAgICAgICAgICQoXCIjYWZmaWxpYXRlLXJlZ2lzdGVyLWZvcm1cIikub24oXCJzdWJtaXRcIiwgYXBwLmhhbmRsZUFmZmlsaWF0ZUZvcm0pO1xyXG5cclxuICAgICAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5vbihcImNoYW5nZVwiLCBhcHAuaGFuZGxlUHJvZHVjdENoYW5nZSk7XHJcbiAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5vbihcImNoYW5nZVwiLCBhcHAuaGFuZGxlTWV0aG9kQ2hhbmdlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBTZWFyY2hcclxuICAgICAgICAgICAgJChcIi5zZWFyY2gtYnRuXCIpLm9uKFwiY2xpY2tcIiwgYXBwLm9wZW5TZWFyY2gpO1xyXG4gICAgICAgICAgICAkKFwiLmNlbmNlbC1idG5cIikub24oXCJjbGlja1wiLCBhcHAuY2FuY2VsU2VhcmNoKTtcclxuXHJcbiAgICAgICAgICAgIGFwcC5oYW5kbGVDaGFuZ2VEb3RUZXh0KCk7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9wZW5TZWFyY2g6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQoXCIuc2VhcmNoLWZvcm1cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICAkKFwiLnNlYXJjaC1maWVsZFwiKS5mb2N1cygpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNhbmNlbFNlYXJjaDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJChcIi5zZWFyY2gtZm9ybVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0VGVzdGltb25pYWxTbGlkZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gSG9tZSB0ZXN0aW1vbmlhbCBzbGlkZXJcclxuICAgICAgICAgICAgJChcIi5zaW5nbGUtdGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRQYWRkaW5nOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCIucmlnaHRcIixcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgLy8gYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL211bHRpbWVkaWEgcGxheWVyIGhlcm8gc2xpZGVyXHJcbiAgICAgICAgICAgICQoXCIuaGVyby1pbWFnZS1tYWluXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRQYWRkaW5nOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgIC8vIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vZ29vZ2xlIGRyaXZlXHJcbiAgICAgICAgICAgICQoXCIudGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiLnJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vdGVzdGltb25pYWwtaXRlbXMtY2Y3XHJcbiAgICAgICAgICAgICQoXCIudGVzdGltb25pYWwtaXRlbXMtY2Y3XCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIi5yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIi5sZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL3ByZXZpZXcgZWFjZjctdGVzdGltb25pYWwtaXRlbXNcclxuICAgICAgICAgICAgJChcIi5lYWNmNy10ZXN0aW1vbmlhbC1pdGVtc1wiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCIuZWFjZjctcmlnaHRcIixcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCIuZWFjZjctbGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9hYm91dCBzbGlkZXJcclxuICAgICAgICAgICAgJChcIi5zbGlkZXItbWFpblwiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIi51cFwiLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIi5kb3duXCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJChcIi5jb21wYXQtc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2RyYWN1bGEgc2xpZGVyXHJcbiAgICAgICAgICAgICQoXCIuZHJhY3VsYS1zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0RnVuRmFjdENvdW50ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIi5jb3VudGVyXCIpLmNvdW50ZXJVcCh7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMTYsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiAxNTAwLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvL3Njcm9sbGluZyBoZWFkZXIganNcclxuICAgICAgICBpbml0Rml4ZEhlYWRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpeGVkaGVhZGVyID0gJCgnLnNpdGUtaGVhZGVyJyk7XHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U2Nyb2xsID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA+IGxhc3RTY3JvbGxUb3AgfHwgY3VycmVudFNjcm9sbCA8IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTY3JvbGwgZG93blxyXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkaGVhZGVyLnJlbW92ZUNsYXNzKCdmaXhlZC1oZWFkZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNjcm9sbCB1cFxyXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkaGVhZGVyLmFkZENsYXNzKCdmaXhlZC1oZWFkZXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsYXN0U2Nyb2xsVG9wID0gY3VycmVudFNjcm9sbCA8PSAwID8gMCA6IGN1cnJlbnRTY3JvbGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUNoYW5nZURvdFRleHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLnNsaWNrLWRvdHMgbGk6bnRoLWNoaWxkKDEpIGJ1dHRvbicpLnRleHQoJ0F1ZGlvIFBsYXllcicpO1xyXG4gICAgICAgICAgICAkKCcuc2xpY2stZG90cyBsaTpudGgtY2hpbGQoMikgYnV0dG9uJykudGV4dCgnVmlkZW8gUGxheWVyJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGljay1kb3RzIGxpOm50aC1jaGlsZCgzKSBidXR0b24nKS50ZXh0KCdQb2RjYXN0IFBsYXllcicpO1xyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvL0hhbmRsZSBwb3B1cCBpbWcganNcclxuICAgICAgICAvLyBoYW5kbGVQb3B1cGltZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICAkKCcuc2luZ2xlIGFydGljbGUgaW1nJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIHNyYyA9ICQodGhpcykuYXR0cignc3JjJyk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgJC5tYWduaWZpY1BvcHVwLm9wZW4oe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNyYzogc3JjXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IHRydWUsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLWltZy1tb2JpbGUnLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZlcnRpY2FsRml0OiB0cnVlXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgIC8vSGFuZGxlIHBvcHVwIGltZyBqc1xyXG4gICAgICAgIGhhbmRsZVBvcHVwaW1nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5zaW5nbGUgYXJ0aWNsZSBpbWcnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcclxuICAgICAgICAgICAgICAgIGxpdHkoc3JjKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL0hhbmRsZSBwb3B1cCBpbWcganMgZW5kIFxyXG5cclxuICAgICAgICBoYW5kbGVDb250YWN0Rm9ybTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLmNvbnRhY3QtZm9ybSAudGFiLWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICAkKFwiLmNvbnRhY3QtZm9ybS13cmFwXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKGAuY29udGFjdC1mb3JtLXdyYXAuZm9ybS0keyQodGhpcykuZGF0YShcInRhcmdldFwiKX1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgaGFuZGxlVG9Ub3A6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCBcImZhc3RcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlUHJpY2luZ0l0ZW06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIi5pdGVtLXByaWNlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXRJbWFnZUNvbXBhcmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIi5yZWFkZXItbW9kZS1pbWFnZS1jb21wYXJlXCIpLnR3ZW50eXR3ZW50eSh7XHJcbiAgICAgICAgICAgICAgICAvLyAgSG93IG11Y2ggb2YgdGhlIGJlZm9yZSBpbWFnZSBpcyB2aXNpYmxlIHdoZW4gdGhlIHBhZ2UgbG9hZHNcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRfb2Zmc2V0X3BjdDogMC41LFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxhYmVsIHRleHRcclxuICAgICAgICAgICAgICAgIGJlZm9yZV9sYWJlbDogXCJHZW5lcmFsIFZpZXdcIixcclxuICAgICAgICAgICAgICAgIGFmdGVyX2xhYmVsOiBcIlJlYWRlciBNb2RlIFZpZXdcIixcclxuXHJcbiAgICAgICAgICAgICAgICAvL292ZXJsYXlcclxuICAgICAgICAgICAgICAgIG5vX292ZXJsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNoYW5nZURyYWN1bGFIZXJvSW1hZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSAkKFwiLmRyYWN1bGEtaGVyby1pbWFnZVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaW1hZ2UubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVNyYyA9IGltYWdlLmF0dHIoXCJzcmNcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0RhcmsgPSBpbWFnZVNyYy5pbmNsdWRlcyhcImhlcm8tZGFya1wiKTtcclxuICAgICAgICAgICAgICAgIGltYWdlLmF0dHIoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNyYy5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0RhcmsgPyBcImhlcm8tZGFya1wiIDogXCJoZXJvLWxpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGFyayA/IFwiaGVyby1saWdodFwiIDogXCJoZXJvLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5tb2RlLWJ0blwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICQoYC5tb2RlLWJ0bi5tb2RlLSR7aXNEYXJrID8gXCJsaWdodFwiIDogXCJkYXJrXCJ9YCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUFmZmlsaWF0ZUZvcm06IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmYWlsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByb2R1Y3Qgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIGxldCBwcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddOmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcHJvZHVjdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE1ldGhvZHMgU2VsZWN0aW9uXHJcbiAgICAgICAgICAgIGxldCBtZXRob2RzID0gW107XHJcblxyXG4gICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ106Y2hlY2tlZFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1ldGhvZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2Jvb3RzdHJhcCB2YWxpZGF0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkKHRoaXMpLmdldCgwKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgJChmb3JtKS5hZGRDbGFzcyhcIndhcy12YWxpZGF0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZmFpbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gJChcIiNuYW1lXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWwgPSAkKFwiI2VtYWlsXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVtYWlsID0gJChcIiNwZW1haWxcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb21haW4gPSAkKFwiI2RvbWFpblwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpc3RpY3MgPSAkKFwiI3N0YXRpc3RpY3NcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uID0gJChcclxuICAgICAgICAgICAgICAgICAgICBcIiNwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICkudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgd3AuYWpheC5zZW5kKFwiYWZmaWxpYXRlX3JlZ2lzdGVyXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVtYWlsOiBwZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpbjogZG9tYWluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IG1ldGhvZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpc3RpY3M6IHN0YXRpc3RpY3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb246IHByb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjc3VibWl0XCIpLmZpbmQoXCIuZmEtc3Bpbm5lclwiKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjYWZmaWxpYXRlLXJlZ2lzdGVyLWZvcm1cIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNzdWJtaXRcIikuZmluZChcIi5mYS1zcGlubmVyXCIpLmFkZENsYXNzKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVByb2R1Y3RDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0ncHJvZHVjdFtdJ106Y2hlY2tlZFwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlTWV0aG9kQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J21ldGhvZFtdJ106Y2hlY2tlZFwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIGhhbmRsZU1vZGFsVmlkZW86IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gYGA7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSAkKFwiLmhlcm8taG93LWJ1dHRcIik7XHJcbiAgICAgICAgLy8gICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kKG1vZGFsQ29udGVudCk7XHJcblxyXG5cclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICAvLyBoYW5kbGVNb2RhbFZpZGVvQ2xvc2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9ICQoXCIuaGVyby1ob3ctYnV0dFwiKS5jbG9zZXN0KCcjc3RhdGljQmFja2Ryb3AnKTtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGFyZ2V0RWxlbWVudCk7XHJcbiAgICAgICAgLy8gICAgIHRhcmdldEVsZW1lbnQuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgLy8gfSxcclxuXHJcbiAgICB9O1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWxpZ2h0Ym94XScsIGxpdHkpO1xyXG4gICAgLy9tb2JpbGUgbWVudSBjbG9zZSBqc1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0ICRtZW51ID0gJCgnLm1vYmlsZS1tZW51Jyk7XHJcbiAgICAgICAgY29uc3QgJGNsb3NlQnRuID0gJCgnI2Nsb3NlX2J0bicpO1xyXG4gICAgICAgIGNvbnN0ICR0b2dnbGVNZW51QnRuID0gJCgnI21lbnUtdG9nZ2xlJyk7XHJcbiAgICAgICAgJHRvZ2dsZU1lbnVCdG4uY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkbWVudS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICghJG1lbnUuaXMoZS50YXJnZXQpICYmICRtZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwICYmICEkdG9nZ2xlTWVudUJ0bi5pcyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICRtZW51LnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkY2xvc2VCdG4uY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkbWVudS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvLyBlYWNmNyBwcmV2aWV3IGpzIHN0YXJ0XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gSGFuZGxlIFNob3cgQ29kZSBidXR0b24gY2xpY2tcclxuICAgICAgICAkKFwiLnNob3ctYnV0dG9uc1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5kYXRhKFwiaW5kZXhcIik7IC8vIEdldCB0aGUgaW5kZXggZnJvbSB0aGUgZGF0YSBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgdmFyICRmb3JtQXJlYSA9ICQoJy5mb3JtLWFyZWFbZGF0YS1pbmRleD1cIicgKyBpbmRleCArICdcIl0nKTtcclxuICAgICAgICAgICAgdmFyICRmb3JtQ29kZUNvbnRhaW5lciA9ICRmb3JtQXJlYS5maW5kKFwiLmZvcm0tY29kZVwiKTtcclxuICAgICAgICAgICAgdmFyICRlYWNmN0Zvcm0gPSAkZm9ybUFyZWEuZmluZChcIi5lYWNmNy1mb3JtXCIpO1xyXG4gICAgICAgICAgICB2YXIgJGNvcHlCdXR0b24gPSAkZm9ybUFyZWEuZmluZChcIi5jb3B5LWJ1dHRvbnNcIik7XHJcbiAgICAgICAgICAgIHZhciAkc2hvd0J1dHRvbiA9ICQodGhpcyk7IC8vIEN1cnJlbnQgU2hvdyBDb2RlIGJ1dHRvblxyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIHZpc2liaWxpdHkgb2YgdGhlIGZvcm0gY29kZSBhbmQgYXNzb2NpYXRlZCBlbGVtZW50c1xyXG4gICAgICAgICAgICBpZiAoJGZvcm1Db2RlQ29udGFpbmVyLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgICAgICRmb3JtQ29kZUNvbnRhaW5lci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkZWFjZjdGb3JtLnNob3coKTtcclxuICAgICAgICAgICAgICAgICRjb3B5QnV0dG9uLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICRzaG93QnV0dG9uLmh0bWwoJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtY29kZVwiPjwvaT4gU2hvdyBDb2RlJyk7IC8vIENoYW5nZSB0ZXh0IHRvIFNob3cgQ29kZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGZvcm1Db2RlQ29udGFpbmVyLnNob3coKTtcclxuICAgICAgICAgICAgICAgICRlYWNmN0Zvcm0uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJGNvcHlCdXR0b24uc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJHNob3dCdXR0b24uaHRtbCgnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jb2RlXCI+PC9pPiBIaWRlIENvZGUnKTsgLy8gQ2hhbmdlIHRleHQgdG8gSGlkZSBDb2RlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIENvcHkgQ29kZSBidXR0b24gY2xpY2tcclxuICAgICAgICAkKFwiLmNvcHktYnV0dG9uc1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5kYXRhKFwiaW5kZXhcIik7IC8vIEdldCB0aGUgaW5kZXggZnJvbSB0aGUgZGF0YSBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgdmFyICRmb3JtQXJlYSA9ICQoJy5mb3JtLWFyZWFbZGF0YS1pbmRleD1cIicgKyBpbmRleCArICdcIl0nKTtcclxuICAgICAgICAgICAgdmFyIGNvZGVUZXh0ID0gJGZvcm1BcmVhLmZpbmQoXCIuZm9ybS1jb2RlXCIpLnRleHQoKS50cmltKCk7XHJcblxyXG4gICAgICAgICAgICBjb3B5VG9DbGlwYm9hcmQoY29kZVRleHQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBIYW5kbGUgY29kZSBjb250ZW50IGNsaWNrIHRvIGNvcHkgYW5kIHNlbGVjdCBhbGxcclxuICAgICAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmZvcm0tY29kZSBjb2RlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNvZGVUZXh0ID0gJCh0aGlzKS50ZXh0KCkudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2VsZWN0IGFsbCB0ZXh0IGluIHRoZSBjb2RlIGJsb2NrXHJcbiAgICAgICAgICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29weSB0aGUgY29kZSB0byB0aGUgY2xpcGJvYXJkXHJcbiAgICAgICAgICAgIGNvcHlUb0NsaXBib2FyZChjb2RlVGV4dCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIENvcHkgdG8gY2xpcGJvYXJkIGZ1bmN0aW9uXHJcbiAgICAgICAgZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKHRleHQpIHtcclxuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5jbGlwYm9hcmQpIHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkZvcm0gY29kZSBjb3BpZWQgdG8gY2xpcGJvYXJkIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY29weSBjb2RlOiBcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrIGZvciB1bnN1cHBvcnRlZCBDbGlwYm9hcmQgQVBJXHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0QXJlYS52YWx1ZSA9IHRleHQ7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcclxuICAgICAgICAgICAgICAgIHRleHRBcmVhLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3VjY2Vzc2Z1bCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzc2Z1bCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkZvcm0gY29kZSBjb3BpZWQgdG8gY2xpcGJvYXJkIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkNvcHkgZmFpbGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIlVuYWJsZSB0byBjb3B5IHRleHQuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gZWFjZjcgcHJldmlldyBqcyBlbmRcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxufSkoalF1ZXJ5KTtcclxuXHJcblxyXG4vLyBsZXQgJGl0ZW1zID0gJCgnLnNsaWRlci1tYWluIC5zbGlkZXItaXRlbSAuaXRlbScpO1xyXG4vLyBsZXQgJG5leHQgPSAkKCcjbmV4dCcpO1xyXG4vLyBsZXQgJHByZXYgPSAkKCcjcHJldicpO1xyXG5cclxuLy8gbGV0IGFjdGl2ZSA9IDM7XHJcbi8vIGxldCBhdXRvU2xpZGVJbnRlcnZhbDtcclxuXHJcbi8vIGZ1bmN0aW9uIGxvYWRTaG93KCkge1xyXG4vLyAgICAgbGV0IHN0dCA9IDA7XHJcblxyXG4vLyAgICAgLy8gU2V0dGluZyBzdHlsZSBmb3IgdGhlIGFjdGl2ZSBpdGVtXHJcbi8vICAgICAkaXRlbXMuZXEoYWN0aXZlKS5jc3Moe1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogJ25vbmUnLFxyXG4vLyAgICAgICAgIHpJbmRleDogMSxcclxuLy8gICAgICAgICBmaWx0ZXI6ICdub25lJyxcclxuLy8gICAgICAgICBvcGFjaXR5OiAxXHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICAvLyBGb3IgaXRlbXMgYWZ0ZXIgdGhlIGFjdGl2ZSBpdGVtXHJcbi8vICAgICBmb3IgKGxldCBpID0gYWN0aXZlICsgMTsgaSA8ICRpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgIHN0dCsrO1xyXG4vLyAgICAgICAgICRpdGVtcy5lcShpKS5jc3Moe1xyXG4vLyAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7MTIwICogc3R0fXB4KSBzY2FsZSgkezEgLSAwLjIgKiBzdHR9KSBwZXJzcGVjdGl2ZSgxNnB4KSByb3RhdGVZKC0xZGVnKWAsXHJcbi8vICAgICAgICAgICAgIHpJbmRleDogLXN0dCxcclxuLy8gICAgICAgICAgICAgZmlsdGVyOiAnYmx1cig1cHgpJyxcclxuLy8gICAgICAgICAgICAgb3BhY2l0eTogc3R0ID4gMiA/IDAgOiAwLjZcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAvLyBSZXNldCBgc3R0YCBmb3IgaXRlbXMgYmVmb3JlIHRoZSBhY3RpdmUgaXRlbVxyXG4vLyAgICAgc3R0ID0gMDtcclxuLy8gICAgIGZvciAobGV0IGkgPSBhY3RpdmUgLSAxOyBpID49IDA7IGktLSkge1xyXG4vLyAgICAgICAgIHN0dCsrO1xyXG4vLyAgICAgICAgICRpdGVtcy5lcShpKS5jc3Moe1xyXG4vLyAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7LTEyMCAqIHN0dH1weCkgc2NhbGUoJHsxIC0gMC4yICogc3R0fSkgcGVyc3BlY3RpdmUoMTZweCkgcm90YXRlWSgxZGVnKWAsXHJcbi8vICAgICAgICAgICAgIHpJbmRleDogLXN0dCxcclxuLy8gICAgICAgICAgICAgZmlsdGVyOiAnYmx1cig1cHgpJyxcclxuLy8gICAgICAgICAgICAgb3BhY2l0eTogc3R0ID4gMiA/IDAgOiAwLjZcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBsb2FkU2hvdygpO1xyXG5cclxuLy8gJG5leHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgICBzdG9wQXV0b1NsaWRlKCk7XHJcbi8vICAgICBhY3RpdmUgPSBhY3RpdmUgKyAxIDwgJGl0ZW1zLmxlbmd0aCA/IGFjdGl2ZSArIDEgOiAwO1xyXG4vLyAgICAgbG9hZFNob3coKTtcclxuLy8gICAgIHN0YXJ0QXV0b1NsaWRlKCk7XHJcbi8vIH0pO1xyXG5cclxuLy8gJHByZXYub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgICBzdG9wQXV0b1NsaWRlKCk7XHJcbi8vICAgICBhY3RpdmUgPSBhY3RpdmUgLSAxID49IDAgPyBhY3RpdmUgLSAxIDogJGl0ZW1zLmxlbmd0aCAtIDE7XHJcbi8vICAgICBsb2FkU2hvdygpO1xyXG4vLyAgICAgc3RhcnRBdXRvU2xpZGUoKTtcclxuLy8gfSk7XHJcblxyXG4vLyAvLyBBdXRvIHNsaWRlIGZ1bmN0aW9uXHJcbi8vIGZ1bmN0aW9uIHN0YXJ0QXV0b1NsaWRlKCkge1xyXG4vLyAgICAgYXV0b1NsaWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICBhY3RpdmUgPSBhY3RpdmUgKyAxIDwgJGl0ZW1zLmxlbmd0aCA/IGFjdGl2ZSArIDEgOiAwO1xyXG4vLyAgICAgICAgIGxvYWRTaG93KCk7XHJcbi8vICAgICB9LCAzMDAwKTtcclxuLy8gfVxyXG5cclxuLy8gLy8gU3RvcCBhdXRvIHNsaWRlIG9uIHVzZXIgaW50ZXJhY3Rpb25cclxuLy8gZnVuY3Rpb24gc3RvcEF1dG9TbGlkZSgpIHtcclxuLy8gICAgIGNsZWFySW50ZXJ2YWwoYXV0b1NsaWRlSW50ZXJ2YWwpO1xyXG4vLyB9XHJcblxyXG4vLyAvLyBTdGFydCBhdXRvLXNsaWRlIHdoZW4gdGhlIHBhZ2UgbG9hZHNcclxuLy8gc3RhcnRBdXRvU2xpZGUoKTtcclxuXHJcbiJdLCJuYW1lcyI6WyIkIiwiYXBwIiwiaW5pdCIsIm9uIiwiaGFuZGxlU3dpdGNoZXIiLCJoYW5kbGVMaWNlbnNlU3dpdGNoZXIiLCJlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwidG9nZ2xlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJsaWNlbnNlIiwiZGF0YSIsImNvbmNhdCIsImRvY3VtZW50IiwicmVhZHkiLCJqUXVlcnkiLCJiYW5uZXIiLCJyZW1vdmUiLCJjb3VudGRvd24iLCJmaW5kIiwidGltZXIiLCJsZW5ndGgiLCJTRUNPTkQiLCJNSU5VVEUiLCJIT1VSIiwiREFZIiwicGFkWmVybyIsIm51bSIsImZvcm1hdFRpbWUiLCJkaXN0YW5jZSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidXBkYXRlVGltZXIiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImNvdW50RG93bkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImNsZWFySW50ZXJ2YWwiLCJ4IiwiaHRtbCIsInNldEl0ZW0iLCJzZXRJbnRlcnZhbCIsImluaXRUZXN0aW1vbmlhbFNsaWRlciIsImluaXRGdW5GYWN0Q291bnRlciIsImluaXRGaXhkSGVhZGVyIiwiaGFuZGxlQ29udGFjdEZvcm0iLCJoYW5kbGVQb3B1cGltZyIsImhhbmRsZVRvVG9wIiwiaGFuZGxlUHJpY2luZ0l0ZW0iLCJpbml0SW1hZ2VDb21wYXJlIiwiY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSIsImhhbmRsZUFmZmlsaWF0ZUZvcm0iLCJoYW5kbGVQcm9kdWN0Q2hhbmdlIiwiaGFuZGxlTWV0aG9kQ2hhbmdlIiwib3BlblNlYXJjaCIsImNhbmNlbFNlYXJjaCIsImhhbmRsZUNoYW5nZURvdFRleHQiLCJmb2N1cyIsInNsaWNrIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImFycm93cyIsImF1dG9wbGF5U3BlZWQiLCJzcGVlZCIsImNvbnRlbnRQYWRkaW5nIiwibmV4dEFycm93IiwicHJldkFycm93IiwiZG90cyIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInZlcnRpY2FsIiwiY291bnRlclVwIiwiZGVsYXkiLCJ0aW1lIiwibGFzdFNjcm9sbFRvcCIsImZpeGVkaGVhZGVyIiwid2luZG93Iiwic2Nyb2xsIiwiY3VycmVudFNjcm9sbCIsInNjcm9sbFRvcCIsImNsaWNrIiwic3JjIiwiYXR0ciIsImxpdHkiLCJhbmltYXRlIiwidHdlbnR5dHdlbnR5IiwiZGVmYXVsdF9vZmZzZXRfcGN0IiwiYmVmb3JlX2xhYmVsIiwiYWZ0ZXJfbGFiZWwiLCJub19vdmVybGF5IiwiaW1hZ2UiLCJpbWFnZVNyYyIsImlzRGFyayIsImluY2x1ZGVzIiwicmVwbGFjZSIsImZhaWxlZCIsInByb2R1Y3RzIiwiZWFjaCIsInB1c2giLCJ2YWwiLCJtZXRob2RzIiwiZm9ybSIsImdldCIsImNoZWNrVmFsaWRpdHkiLCJuYW1lIiwiZW1haWwiLCJwZW1haWwiLCJkb21haW4iLCJzdGF0aXN0aWNzIiwicHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbiIsIndwIiwiYWpheCIsInNlbmQiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsImhpZGUiLCJzaG93IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY29tcGxldGUiLCIkbWVudSIsIiRjbG9zZUJ0biIsIiR0b2dnbGVNZW51QnRuIiwiaXMiLCJ0YXJnZXQiLCJoYXMiLCJpbmRleCIsIiRmb3JtQXJlYSIsIiRmb3JtQ29kZUNvbnRhaW5lciIsIiRlYWNmN0Zvcm0iLCIkY29weUJ1dHRvbiIsIiRzaG93QnV0dG9uIiwiY29kZVRleHQiLCJ0cmltIiwiY29weVRvQ2xpcGJvYXJkIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGVDb250ZW50cyIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGhlbiIsImFsZXJ0IiwiZXJyIiwidGV4dEFyZWEiLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJzdWNjZXNzZnVsIiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=