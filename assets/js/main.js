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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3N0aWNreS1iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24gKCQpIHtcclxuICAgIGNvbnN0IGFwcCA9IHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vSGFuZGxlIHByaWNpbmcgc3dpdGNoZXJcclxuICAgICAgICAgICAgJCgnLnByaWNpbmctc3dpdGNoZXInKS5vbignY2xpY2snLCBhcHAuaGFuZGxlU3dpdGNoZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlIGxpY2Vuc2Ugc3dpdGNoZXJcclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5vbignY2xpY2snLCBhcHAuaGFuZGxlTGljZW5zZVN3aXRjaGVyKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnYW5udWFsIGxpZmV0aW1lJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICdhbm51YWwnIDogJ2xpZmV0aW1lJyk7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUxpY2Vuc2VTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZScpLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGljZW5zZSA9ICQodGhpcykuZGF0YSgnbGljZW5zZScpO1xyXG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdsaWNlbnNlLTEgbGljZW5zZS0yIGxpY2Vuc2UtNSBsaWNlbnNlLTEwMCBsaWNlbnNlLXVubGltaXRlZCAnKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGBsaWNlbnNlLSR7bGljZW5zZX1gKTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxuXHJcbn0pKGpRdWVyeSk7IiwiLy8gOyhmdW5jdGlvbiAoJCkge1xyXG4vLyAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgIGNvbnN0IGJhbm5lciA9ICQoJyNoZWFkZXItc3RpY2t5LWJhbm5lciwgI2hhbGxvd2Vlbi1vZmZlcnMsICNibGFjay1mcmlkYXktb2ZmZXJzJyk7XHJcblxyXG4vLyAgICAgICAgIC8vIENsb3NlIGJhbm5lclxyXG4vLyAgICAgICAgIGJhbm5lci5vbignY2xpY2snLCAnLmJhbm5lci1jbG9zZScsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICAgJCgnI2hlYWRlci1zdGlja3ktYmFubmVyJykucmVtb3ZlKCk7XHJcbi8vICAgICAgICAgfSk7XHJcblxyXG4vLyAgICAgICAgIC8vIEJhbm5lciBjb3VudGRvd25cclxuLy8gICAgICAgICBjb25zdCBjb3VudGRvd24gPSBiYW5uZXIuZmluZCgnLmJhbm5lci1jb3VudGRvd24nKTtcclxuLy8gICAgICAgICBjb25zdCB0aW1lciA9IGJhbm5lci5maW5kKCcudGltZXInKTtcclxuXHJcbi8vICAgICAgICAgaWYgKGNvdW50ZG93bi5sZW5ndGgpIHtcclxuLy8gICAgICAgICAgICAgY29uc3QgU0VDT05EID0gMTAwMDtcclxuLy8gICAgICAgICAgICAgY29uc3QgTUlOVVRFID0gNjAgKiBTRUNPTkQ7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IEhPVVIgPSA2MCAqIE1JTlVURTtcclxuLy8gICAgICAgICAgICAgY29uc3QgREFZID0gMjQgKiBIT1VSO1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgZm9ybWF0VGltZSA9IChkaXN0YW5jZSkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyBEQVkpO1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlIERBWSkgLyBIT1VSKTtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlIEhPVVIpIC8gTUlOVVRFKTtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlIE1JTlVURSkgLyBTRUNPTkQpO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCJkYXlzXCI+JHtkYXlzfWQ8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaG91cnNcIj4ke2hvdXJzfWg8L3NwYW4+IDxzcGFuIGNsYXNzPVwibWludXRlc1wiPiR7bWludXRlc31tPC9zcGFuPiA8c3BhbiBjbGFzcz1cInNlY29uZHNcIj4ke3NlY29uZHN9czwvc3Bhbj5gO1xyXG4vLyAgICAgICAgICAgICB9O1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgdXBkYXRlVGltZXIgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuLy8gICAgICAgICAgICAgICAgIC8vbGV0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDguNSAqIERBWTtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBjb3VudERvd25EYXRlID0gbmV3IERhdGUoJzIwMjQtMTItMDVUMjM6NTk6MDAnKS5nZXRUaW1lKCk7XHJcblxyXG5cclxuLy8gICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbi8vICAgICAgICAgICAgICAgICBpZiAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZl9vZmZlcnNfdGltZScpKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZl9vZmZlcnNfdGltZScpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcclxuXHJcbi8vICAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIHRpbWVcclxuLy8gICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYmZfb2ZmZXJzX3RpbWUnKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgdGltZXIuaHRtbChmb3JtYXRUaW1lKGRpc3RhbmNlKSk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLy8gU2F2ZSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuLy8gICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiZl9vZmZlcnNfdGltZScsIGNvdW50RG93bkRhdGUpO1xyXG4vLyAgICAgICAgICAgICB9O1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgeCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcclxuLy8gICAgICAgICAgICAgdXBkYXRlVGltZXIoKTsgLy8gQ2FsbCBpbW1lZGlhdGVseSwgZG9u4oCZdCB3YWl0IGZvciB0aGUgZmlyc3QgaW50ZXJ2YWwgdG8gZXhlY3V0ZVxyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KTtcclxuXHJcbi8vIH0pKGpRdWVyeSk7XHJcblxyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYmFubmVyID0gJCgnI2hlYWRlci1zdGlja3ktYmFubmVyLCAjaGFsbG93ZWVuLW9mZmVycywgI2JsYWNrLWZyaWRheS1vZmZlcnMnKTtcclxuXHJcbiAgICAgICAgLy8gQ2xvc2UgYmFubmVyXHJcbiAgICAgICAgYmFubmVyLm9uKCdjbGljaycsICcuYmFubmVyLWNsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXInKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQmFubmVyIGNvdW50ZG93blxyXG4gICAgICAgIGNvbnN0IGNvdW50ZG93biA9IGJhbm5lci5maW5kKCcuYmFubmVyLWNvdW50ZG93bicpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVyID0gYmFubmVyLmZpbmQoJy50aW1lcicpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBTRUNPTkQgPSAxMDAwO1xyXG4gICAgICAgICAgICBjb25zdCBNSU5VVEUgPSA2MCAqIFNFQ09ORDtcclxuICAgICAgICAgICAgY29uc3QgSE9VUiA9IDYwICogTUlOVVRFO1xyXG4gICAgICAgICAgICBjb25zdCBEQVkgPSAyNCAqIEhPVVI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYWRaZXJvID0gKG51bSkgPT4gKG51bSA8IDEwID8gYDAke251bX1gIDogbnVtKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdFRpbWUgPSAoZGlzdGFuY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBwYWRaZXJvKE1hdGguZmxvb3IoZGlzdGFuY2UgLyBEQVkpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gcGFkWmVybyhNYXRoLmZsb29yKChkaXN0YW5jZSAlIERBWSkgLyBIT1VSKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gcGFkWmVybyhNYXRoLmZsb29yKChkaXN0YW5jZSAlIEhPVVIpIC8gTUlOVVRFKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gcGFkWmVybyhNYXRoLmZsb29yKChkaXN0YW5jZSAlIE1JTlVURSkgLyBTRUNPTkQpKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj48c3BhbiBjbGFzcz1cImRheXNcIj4ke2RheXN9PC9zcGFuPiA8cD5EYXk8L3A+PC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZG93blwiPjxzcGFuIGNsYXNzPVwiaG91cnNcIj4ke2hvdXJzfTwvc3Bhbj4gPHA+SG91cjwvcD4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRkb3duXCI+PHNwYW4gY2xhc3M9XCJtaW51dGVzXCI+JHttaW51dGVzfTwvc3Bhbj4gPHA+TWluPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZG93blwiPjxzcGFuIGNsYXNzPVwic2Vjb25kc1wiPiR7c2Vjb25kc308L3NwYW4+IDxwPlNlYzwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVUaW1lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSgnMjAyNC0xMi0wNVQyMzo1OTowMCcpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZl9vZmZlcnNfdGltZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZl9vZmZlcnNfdGltZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBjb3VudERvd25EYXRlIC0gbm93O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYmZfb2ZmZXJzX3RpbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICBiYW5uZXIucmVtb3ZlKCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoeCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lci5odG1sKGZvcm1hdFRpbWUoZGlzdGFuY2UpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTYXZlIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JmX29mZmVyc190aW1lJywgY291bnREb3duRGF0ZSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCB4ID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZXIsIDEwMDApO1xyXG4gICAgICAgICAgICB1cGRhdGVUaW1lcigpOyBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pKGpRdWVyeSk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvcHJpY2luZ1wiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lclwiO1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBjb25zdCBhcHAgPSB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL0luaXQgVGVzdGltb25pYWwgU2xpZGVyXHJcbiAgICAgICAgICAgIGFwcC5pbml0VGVzdGltb25pYWxTbGlkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vSW5pdCBGdW4gRmFjdCBDb3VudGVyXHJcbiAgICAgICAgICAgIGFwcC5pbml0RnVuRmFjdENvdW50ZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vSW5pdCBzY3JvbGxpbmcgaGVhZGVyXHJcbiAgICAgICAgICAgIGFwcC5pbml0Rml4ZEhlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgLy9IYW5kbGUgY29udGFjdCBmb3JtIHRhYnNcclxuICAgICAgICAgICAgJChcIi5jb250YWN0LWZvcm0gLnRhYi1pdGVtXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZUNvbnRhY3RGb3JtKTtcclxuICAgICAgICAgICAgLy9IYW5kbGUgbW9kYWwgdmlkZW9cclxuICAgICAgICAgICAgLy8gJChcIiNvcGVuLW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZU1vZGFsVmlkZW8pO1xyXG4gICAgICAgICAgICAvLyAkKFwiLm1vZGFsLWJ0bi1jbG9zZVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVNb2RhbFZpZGVvQ2xvc2UpO1xyXG5cclxuICAgICAgICAgICAgLy9IYW5kbGUgcG9wdXAgaW1nXHJcbiAgICAgICAgICAgIGFwcC5oYW5kbGVQb3B1cGltZygpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vSGFuZGxlIHRvIHRvcCBidXR0b25cclxuICAgICAgICAgICAgJChcIi50by10b3BcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlVG9Ub3ApO1xyXG5cclxuICAgICAgICAgICAgLy9oYW5kbGUgcHJpY2luZyBpdGVtIGNsaWNrXHJcbiAgICAgICAgICAgICQoXCIuaXRlbS1wcmljZVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVQcmljaW5nSXRlbSk7XHJcblxyXG4gICAgICAgICAgICAvL0hhbmRsZSBJbWFnZSBDb21wYXJlIG9uIFJlYWRlciBNb2RlIHBhZ2VcclxuICAgICAgICAgICAgYXBwLmluaXRJbWFnZUNvbXBhcmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vQ2hhbmdlIERyYWN1bGEgSGVybyBJbWFnZVxyXG4gICAgICAgICAgICBhcHAuY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlIEFmZmlsaWF0ZSBGb3JtXHJcbiAgICAgICAgICAgICQoXCIjYWZmaWxpYXRlLXJlZ2lzdGVyLWZvcm1cIikub24oXCJzdWJtaXRcIiwgYXBwLmhhbmRsZUFmZmlsaWF0ZUZvcm0pO1xyXG5cclxuICAgICAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5vbihcImNoYW5nZVwiLCBhcHAuaGFuZGxlUHJvZHVjdENoYW5nZSk7XHJcbiAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5vbihcImNoYW5nZVwiLCBhcHAuaGFuZGxlTWV0aG9kQ2hhbmdlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBTZWFyY2hcclxuICAgICAgICAgICAgJChcIi5zZWFyY2gtYnRuXCIpLm9uKFwiY2xpY2tcIiwgYXBwLm9wZW5TZWFyY2gpO1xyXG4gICAgICAgICAgICAkKFwiLmNlbmNlbC1idG5cIikub24oXCJjbGlja1wiLCBhcHAuY2FuY2VsU2VhcmNoKTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb3BlblNlYXJjaDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJChcIi5zZWFyY2gtZm9ybVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIuc2VhcmNoLWZpZWxkXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2FuY2VsU2VhcmNoOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKFwiLnNlYXJjaC1mb3JtXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXRUZXN0aW1vbmlhbFNsaWRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBIb21lIHRlc3RpbW9uaWFsIHNsaWRlclxyXG4gICAgICAgICAgICAkKFwiLnNpbmdsZS10ZXN0aW1vbmlhbC1pdGVtc1wiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICAgICAgICAgIHNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFBhZGRpbmc6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIi5yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIi5sZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAvLyBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL2dvb2dsZSBkcml2ZVxyXG4gICAgICAgICAgICAkKFwiLnRlc3RpbW9uaWFsLWl0ZW1zXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIi5yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIi5sZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL3Rlc3RpbW9uaWFsLWl0ZW1zLWNmN1xyXG4gICAgICAgICAgICAkKFwiLnRlc3RpbW9uaWFsLWl0ZW1zLWNmN1wiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCIucmlnaHRcIixcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2Fib3V0IHNsaWRlclxyXG4gICAgICAgICAgICAkKFwiLnNsaWRlci1tYWluXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiLnVwXCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiLmRvd25cIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKFwiLmNvbXBhdC1zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTM5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vZHJhY3VsYSBzbGlkZXJcclxuICAgICAgICAgICAgJChcIi5kcmFjdWxhLXNsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXRGdW5GYWN0Q291bnRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLmNvdW50ZXJcIikuY291bnRlclVwKHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAxNixcclxuICAgICAgICAgICAgICAgIHRpbWU6IDE1MDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vc2Nyb2xsaW5nIGhlYWRlciBqc1xyXG4gICAgICAgIGluaXRGaXhkSGVhZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuICAgICAgICAgICAgY29uc3QgZml4ZWRoZWFkZXIgPSAkKCcuc2l0ZS1oZWFkZXInKTtcclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTY3JvbGwgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsID4gbGFzdFNjcm9sbFRvcCB8fCBjdXJyZW50U2Nyb2xsIDwgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNjcm9sbCBkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgZml4ZWRoZWFkZXIucmVtb3ZlQ2xhc3MoJ2ZpeGVkLWhlYWRlcicpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2Nyb2xsIHVwXHJcbiAgICAgICAgICAgICAgICAgICAgZml4ZWRoZWFkZXIuYWRkQ2xhc3MoJ2ZpeGVkLWhlYWRlcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSBjdXJyZW50U2Nyb2xsIDw9IDAgPyAwIDogY3VycmVudFNjcm9sbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vSGFuZGxlIHBvcHVwIGltZyBqc1xyXG4gICAgICAgIC8vIGhhbmRsZVBvcHVwaW1nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgICQoJy5zaW5nbGUgYXJ0aWNsZSBpbWcnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAkLm1hZ25pZmljUG9wdXAub3Blbih7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaXRlbXM6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc3JjOiBzcmNcclxuICAgICAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtaW1nLW1vYmlsZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmVydGljYWxGaXQ6IHRydWVcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgLy9IYW5kbGUgcG9wdXAgaW1nIGpzXHJcbiAgICAgICAgaGFuZGxlUG9wdXBpbWc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLnNpbmdsZSBhcnRpY2xlIGltZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgICAgICAgICAgbGl0eShzcmMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vSGFuZGxlIHBvcHVwIGltZyBqcyBlbmQgXHJcblxyXG4gICAgICAgIGhhbmRsZUNvbnRhY3RGb3JtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIuY29udGFjdC1mb3JtLXdyYXBcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoYC5jb250YWN0LWZvcm0td3JhcC5mb3JtLSR7JCh0aGlzKS5kYXRhKFwidGFyZ2V0XCIpfWApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICBoYW5kbGVUb1RvcDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIFwiZmFzdFwiKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVQcmljaW5nSXRlbTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLml0ZW0tcHJpY2VcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5pdEltYWdlQ29tcGFyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLnJlYWRlci1tb2RlLWltYWdlLWNvbXBhcmVcIikudHdlbnR5dHdlbnR5KHtcclxuICAgICAgICAgICAgICAgIC8vICBIb3cgbXVjaCBvZiB0aGUgYmVmb3JlIGltYWdlIGlzIHZpc2libGUgd2hlbiB0aGUgcGFnZSBsb2Fkc1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdF9vZmZzZXRfcGN0OiAwLjUsXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbGFiZWwgdGV4dFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlX2xhYmVsOiBcIkdlbmVyYWwgVmlld1wiLFxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJfbGFiZWw6IFwiUmVhZGVyIE1vZGUgVmlld1wiLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vb3ZlcmxheVxyXG4gICAgICAgICAgICAgICAgbm9fb3ZlcmxheTogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2hhbmdlRHJhY3VsYUhlcm9JbWFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9ICQoXCIuZHJhY3VsYS1oZXJvLWltYWdlXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpbWFnZS5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlU3JjID0gaW1hZ2UuYXR0cihcInNyY1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzRGFyayA9IGltYWdlU3JjLmluY2x1ZGVzKFwiaGVyby1kYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuYXR0cihcclxuICAgICAgICAgICAgICAgICAgICBcInNyY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGFyayA/IFwiaGVyby1kYXJrXCIgOiBcImhlcm8tbGlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEYXJrID8gXCJoZXJvLWxpZ2h0XCIgOiBcImhlcm8tZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiLm1vZGUtYnRuXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgJChgLm1vZGUtYnRuLm1vZGUtJHtpc0RhcmsgPyBcImxpZ2h0XCIgOiBcImRhcmtcIn1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlQWZmaWxpYXRlRm9ybTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZhaWxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvZHVjdCBzZWxlY3Rpb25cclxuICAgICAgICAgICAgbGV0IHByb2R1Y3RzID0gW107XHJcbiAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ106Y2hlY2tlZFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwcm9kdWN0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTWV0aG9kcyBTZWxlY3Rpb25cclxuICAgICAgICAgICAgbGV0IG1ldGhvZHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbWV0aG9kcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vYm9vdHN0cmFwIHZhbGlkYXRpb25cclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICQodGhpcykuZ2V0KDApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGZvcm0pLmFkZENsYXNzKFwid2FzLXZhbGlkYXRlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFmYWlsZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSAkKFwiI25hbWVcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbWFpbCA9ICQoXCIjZW1haWxcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwZW1haWwgPSAkKFwiI3BlbWFpbFwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvbWFpbiA9ICQoXCIjZG9tYWluXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGlzdGljcyA9ICQoXCIjc3RhdGlzdGljc1wiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb24gPSAkKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiI3Byb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3cC5hamF4LnNlbmQoXCJhZmZpbGlhdGVfcmVnaXN0ZXJcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZW1haWw6IHBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluOiBkb21haW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kczogbWV0aG9kcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGlzdGljczogc3RhdGlzdGljcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbjogcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNzdWJtaXRcIikuZmluZChcIi5mYS1zcGlubmVyXCIpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNhZmZpbGlhdGUtcmVnaXN0ZXItZm9ybVwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLm1lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3N1Ym1pdFwiKS5maW5kKFwiLmZhLXNwaW5uZXJcIikuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlUHJvZHVjdENoYW5nZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJChcIltuYW1lPSdwcm9kdWN0W10nXTpjaGVja2VkXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVNZXRob2RDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nbWV0aG9kW10nXTpjaGVja2VkXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gaGFuZGxlTW9kYWxWaWRlbzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBgYDtcclxuICAgICAgICAvLyAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9ICQoXCIuaGVyby1ob3ctYnV0dFwiKTtcclxuICAgICAgICAvLyAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmQobW9kYWxDb250ZW50KTtcclxuXHJcblxyXG4gICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgIC8vIGhhbmRsZU1vZGFsVmlkZW9DbG9zZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gJChcIi5oZXJvLWhvdy1idXR0XCIpLmNsb3Nlc3QoJyNzdGF0aWNCYWNrZHJvcCcpO1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0YXJnZXRFbGVtZW50KTtcclxuICAgICAgICAvLyAgICAgdGFyZ2V0RWxlbWVudC5lbXB0eSgpO1xyXG5cclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgIH07XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtbGlnaHRib3hdJywgbGl0eSk7XHJcbiAgICAvL21vYmlsZSBtZW51IGNsb3NlIGpzXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgJG1lbnUgPSAkKCcubW9iaWxlLW1lbnUnKTtcclxuICAgICAgICBjb25zdCAkY2xvc2VCdG4gPSAkKCcjY2xvc2VfYnRuJyk7XHJcbiAgICAgICAgY29uc3QgJHRvZ2dsZU1lbnVCdG4gPSAkKCcjbWVudS10b2dnbGUnKTtcclxuICAgICAgICAkdG9nZ2xlTWVudUJ0bi5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRtZW51LmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCEkbWVudS5pcyhlLnRhcmdldCkgJiYgJG1lbnUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDAgJiYgISR0b2dnbGVNZW51QnRuLmlzKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgJG1lbnUucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICRjbG9zZUJ0bi5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRtZW51LnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShhcHAuaW5pdCk7XHJcbn0pKGpRdWVyeSk7XHJcblxyXG5cclxuLy8gbGV0ICRpdGVtcyA9ICQoJy5zbGlkZXItbWFpbiAuc2xpZGVyLWl0ZW0gLml0ZW0nKTtcclxuLy8gbGV0ICRuZXh0ID0gJCgnI25leHQnKTtcclxuLy8gbGV0ICRwcmV2ID0gJCgnI3ByZXYnKTtcclxuXHJcbi8vIGxldCBhY3RpdmUgPSAzO1xyXG4vLyBsZXQgYXV0b1NsaWRlSW50ZXJ2YWw7XHJcblxyXG4vLyBmdW5jdGlvbiBsb2FkU2hvdygpIHtcclxuLy8gICAgIGxldCBzdHQgPSAwO1xyXG5cclxuLy8gICAgIC8vIFNldHRpbmcgc3R5bGUgZm9yIHRoZSBhY3RpdmUgaXRlbVxyXG4vLyAgICAgJGl0ZW1zLmVxKGFjdGl2ZSkuY3NzKHtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06ICdub25lJyxcclxuLy8gICAgICAgICB6SW5kZXg6IDEsXHJcbi8vICAgICAgICAgZmlsdGVyOiAnbm9uZScsXHJcbi8vICAgICAgICAgb3BhY2l0eTogMVxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgLy8gRm9yIGl0ZW1zIGFmdGVyIHRoZSBhY3RpdmUgaXRlbVxyXG4vLyAgICAgZm9yIChsZXQgaSA9IGFjdGl2ZSArIDE7IGkgPCAkaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICBzdHQrKztcclxuLy8gICAgICAgICAkaXRlbXMuZXEoaSkuY3NzKHtcclxuLy8gICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgkezEyMCAqIHN0dH1weCkgc2NhbGUoJHsxIC0gMC4yICogc3R0fSkgcGVyc3BlY3RpdmUoMTZweCkgcm90YXRlWSgtMWRlZylgLFxyXG4vLyAgICAgICAgICAgICB6SW5kZXg6IC1zdHQsXHJcbi8vICAgICAgICAgICAgIGZpbHRlcjogJ2JsdXIoNXB4KScsXHJcbi8vICAgICAgICAgICAgIG9wYWNpdHk6IHN0dCA+IDIgPyAwIDogMC42XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLy8gUmVzZXQgYHN0dGAgZm9yIGl0ZW1zIGJlZm9yZSB0aGUgYWN0aXZlIGl0ZW1cclxuLy8gICAgIHN0dCA9IDA7XHJcbi8vICAgICBmb3IgKGxldCBpID0gYWN0aXZlIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuLy8gICAgICAgICBzdHQrKztcclxuLy8gICAgICAgICAkaXRlbXMuZXEoaSkuY3NzKHtcclxuLy8gICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgkey0xMjAgKiBzdHR9cHgpIHNjYWxlKCR7MSAtIDAuMiAqIHN0dH0pIHBlcnNwZWN0aXZlKDE2cHgpIHJvdGF0ZVkoMWRlZylgLFxyXG4vLyAgICAgICAgICAgICB6SW5kZXg6IC1zdHQsXHJcbi8vICAgICAgICAgICAgIGZpbHRlcjogJ2JsdXIoNXB4KScsXHJcbi8vICAgICAgICAgICAgIG9wYWNpdHk6IHN0dCA+IDIgPyAwIDogMC42XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gbG9hZFNob3coKTtcclxuXHJcbi8vICRuZXh0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgc3RvcEF1dG9TbGlkZSgpO1xyXG4vLyAgICAgYWN0aXZlID0gYWN0aXZlICsgMSA8ICRpdGVtcy5sZW5ndGggPyBhY3RpdmUgKyAxIDogMDtcclxuLy8gICAgIGxvYWRTaG93KCk7XHJcbi8vICAgICBzdGFydEF1dG9TbGlkZSgpO1xyXG4vLyB9KTtcclxuXHJcbi8vICRwcmV2Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgc3RvcEF1dG9TbGlkZSgpO1xyXG4vLyAgICAgYWN0aXZlID0gYWN0aXZlIC0gMSA+PSAwID8gYWN0aXZlIC0gMSA6ICRpdGVtcy5sZW5ndGggLSAxO1xyXG4vLyAgICAgbG9hZFNob3coKTtcclxuLy8gICAgIHN0YXJ0QXV0b1NsaWRlKCk7XHJcbi8vIH0pO1xyXG5cclxuLy8gLy8gQXV0byBzbGlkZSBmdW5jdGlvblxyXG4vLyBmdW5jdGlvbiBzdGFydEF1dG9TbGlkZSgpIHtcclxuLy8gICAgIGF1dG9TbGlkZUludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgYWN0aXZlID0gYWN0aXZlICsgMSA8ICRpdGVtcy5sZW5ndGggPyBhY3RpdmUgKyAxIDogMDtcclxuLy8gICAgICAgICBsb2FkU2hvdygpO1xyXG4vLyAgICAgfSwgMzAwMCk7XHJcbi8vIH1cclxuXHJcbi8vIC8vIFN0b3AgYXV0byBzbGlkZSBvbiB1c2VyIGludGVyYWN0aW9uXHJcbi8vIGZ1bmN0aW9uIHN0b3BBdXRvU2xpZGUoKSB7XHJcbi8vICAgICBjbGVhckludGVydmFsKGF1dG9TbGlkZUludGVydmFsKTtcclxuLy8gfVxyXG5cclxuLy8gLy8gU3RhcnQgYXV0by1zbGlkZSB3aGVuIHRoZSBwYWdlIGxvYWRzXHJcbi8vIHN0YXJ0QXV0b1NsaWRlKCk7XHJcbiJdLCJuYW1lcyI6WyIkIiwiYXBwIiwiaW5pdCIsIm9uIiwiaGFuZGxlU3dpdGNoZXIiLCJoYW5kbGVMaWNlbnNlU3dpdGNoZXIiLCJlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwidG9nZ2xlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJsaWNlbnNlIiwiZGF0YSIsImNvbmNhdCIsImRvY3VtZW50IiwicmVhZHkiLCJqUXVlcnkiLCJiYW5uZXIiLCJyZW1vdmUiLCJjb3VudGRvd24iLCJmaW5kIiwidGltZXIiLCJsZW5ndGgiLCJTRUNPTkQiLCJNSU5VVEUiLCJIT1VSIiwiREFZIiwicGFkWmVybyIsIm51bSIsImZvcm1hdFRpbWUiLCJkaXN0YW5jZSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidXBkYXRlVGltZXIiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImNvdW50RG93bkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImNsZWFySW50ZXJ2YWwiLCJ4IiwiaHRtbCIsInNldEl0ZW0iLCJzZXRJbnRlcnZhbCIsImluaXRUZXN0aW1vbmlhbFNsaWRlciIsImluaXRGdW5GYWN0Q291bnRlciIsImluaXRGaXhkSGVhZGVyIiwiaGFuZGxlQ29udGFjdEZvcm0iLCJoYW5kbGVQb3B1cGltZyIsImhhbmRsZVRvVG9wIiwiaGFuZGxlUHJpY2luZ0l0ZW0iLCJpbml0SW1hZ2VDb21wYXJlIiwiY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSIsImhhbmRsZUFmZmlsaWF0ZUZvcm0iLCJoYW5kbGVQcm9kdWN0Q2hhbmdlIiwiaGFuZGxlTWV0aG9kQ2hhbmdlIiwib3BlblNlYXJjaCIsImNhbmNlbFNlYXJjaCIsImZvY3VzIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXJyb3dzIiwiYXV0b3BsYXlTcGVlZCIsInNwZWVkIiwiY29udGVudFBhZGRpbmciLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImRvdHMiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwidmVydGljYWwiLCJjb3VudGVyVXAiLCJkZWxheSIsInRpbWUiLCJsYXN0U2Nyb2xsVG9wIiwiZml4ZWRoZWFkZXIiLCJ3aW5kb3ciLCJzY3JvbGwiLCJjdXJyZW50U2Nyb2xsIiwic2Nyb2xsVG9wIiwiY2xpY2siLCJzcmMiLCJhdHRyIiwibGl0eSIsImFuaW1hdGUiLCJ0d2VudHl0d2VudHkiLCJkZWZhdWx0X29mZnNldF9wY3QiLCJiZWZvcmVfbGFiZWwiLCJhZnRlcl9sYWJlbCIsIm5vX292ZXJsYXkiLCJpbWFnZSIsImltYWdlU3JjIiwiaXNEYXJrIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwiZmFpbGVkIiwicHJvZHVjdHMiLCJlYWNoIiwicHVzaCIsInZhbCIsIm1ldGhvZHMiLCJmb3JtIiwiZ2V0IiwiY2hlY2tWYWxpZGl0eSIsIm5hbWUiLCJlbWFpbCIsInBlbWFpbCIsImRvbWFpbiIsInN0YXRpc3RpY3MiLCJwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uIiwid3AiLCJhamF4Iiwic2VuZCIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwiaGlkZSIsInNob3ciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjb21wbGV0ZSIsIiRtZW51IiwiJGNsb3NlQnRuIiwiJHRvZ2dsZU1lbnVCdG4iLCJpcyIsInRhcmdldCIsImhhcyJdLCJzb3VyY2VSb290IjoiIn0=