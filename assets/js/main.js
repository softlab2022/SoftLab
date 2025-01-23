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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y29tcG9uZW50cy9wcmljaW5nLmpzIiwid2VicGFjazovL3NvZnRsYWIvLi9zcmMvanMvY29tcG9uZW50cy9zdGlja3ktYmFubmVyLmpzIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NvZnRsYWIvLi9zcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBjb25zdCBhcHAgPSB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL0hhbmRsZSBwcmljaW5nIHN3aXRjaGVyXHJcbiAgICAgICAgICAgICQoJy5wcmljaW5nLXN3aXRjaGVyJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZVN3aXRjaGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBsaWNlbnNlIHN3aXRjaGVyXHJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZUxpY2Vuc2VTd2l0Y2hlcik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQoJy5wcmljZS10ZXh0JykucmVtb3ZlQ2xhc3MoJ2FubnVhbCBsaWZldGltZScpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykgPyAnYW5udWFsJyA6ICdsaWZldGltZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVMaWNlbnNlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGUnKS50ZXh0KCQodGhpcykudGV4dCgpKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpY2Vuc2UgPSAkKHRoaXMpLmRhdGEoJ2xpY2Vuc2UnKTtcclxuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnbGljZW5zZS0xIGxpY2Vuc2UtMiBsaWNlbnNlLTUgbGljZW5zZS0xMDAgbGljZW5zZS11bmxpbWl0ZWQgJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhgbGljZW5zZS0ke2xpY2Vuc2V9YCk7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShhcHAuaW5pdCk7XHJcblxyXG59KShqUXVlcnkpOyIsIi8vIDsoZnVuY3Rpb24gKCQpIHtcclxuLy8gICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICBjb25zdCBiYW5uZXIgPSAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXIsICNoYWxsb3dlZW4tb2ZmZXJzLCAjYmxhY2stZnJpZGF5LW9mZmVycycpO1xyXG5cclxuLy8gICAgICAgICAvLyBDbG9zZSBiYW5uZXJcclxuLy8gICAgICAgICBiYW5uZXIub24oJ2NsaWNrJywgJy5iYW5uZXItY2xvc2UnLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgICQoJyNoZWFkZXItc3RpY2t5LWJhbm5lcicpLnJlbW92ZSgpO1xyXG4vLyAgICAgICAgIH0pO1xyXG5cclxuLy8gICAgICAgICAvLyBCYW5uZXIgY291bnRkb3duXHJcbi8vICAgICAgICAgY29uc3QgY291bnRkb3duID0gYmFubmVyLmZpbmQoJy5iYW5uZXItY291bnRkb3duJyk7XHJcbi8vICAgICAgICAgY29uc3QgdGltZXIgPSBiYW5uZXIuZmluZCgnLnRpbWVyJyk7XHJcblxyXG4vLyAgICAgICAgIGlmIChjb3VudGRvd24ubGVuZ3RoKSB7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IFNFQ09ORCA9IDEwMDA7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IE1JTlVURSA9IDYwICogU0VDT05EO1xyXG4vLyAgICAgICAgICAgICBjb25zdCBIT1VSID0gNjAgKiBNSU5VVEU7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IERBWSA9IDI0ICogSE9VUjtcclxuXHJcbi8vICAgICAgICAgICAgIGNvbnN0IGZvcm1hdFRpbWUgPSAoZGlzdGFuY2UpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gREFZKTtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBEQVkpIC8gSE9VUik7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBIT1VSKSAvIE1JTlVURSk7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBNSU5VVEUpIC8gU0VDT05EKTtcclxuXHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiZGF5c1wiPiR7ZGF5c31kPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhvdXJzXCI+JHtob3Vyc31oPC9zcGFuPiA8c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIj4ke21pbnV0ZXN9bTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzZWNvbmRzXCI+JHtzZWNvbmRzfXM8L3NwYW4+YDtcclxuLy8gICAgICAgICAgICAgfTtcclxuXHJcbi8vICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVRpbWVyID0gKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbi8vICAgICAgICAgICAgICAgICAvL2xldCBjb3VudERvd25EYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyA4LjUgKiBEQVk7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKCcyMDI0LTEyLTA1VDIzOjU5OjAwJykuZ2V0VGltZSgpO1xyXG5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxyXG4vLyAgICAgICAgICAgICAgICAgaWYgKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnKSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnKTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSB0aW1lXHJcbi8vICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2JmX29mZmVyc190aW1lJyk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIHRpbWVyLmh0bWwoZm9ybWF0VGltZShkaXN0YW5jZSkpO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIC8vIFNhdmUgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbi8vICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnLCBjb3VudERvd25EYXRlKTtcclxuLy8gICAgICAgICAgICAgfTtcclxuXHJcbi8vICAgICAgICAgICAgIGNvbnN0IHggPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XHJcbi8vICAgICAgICAgICAgIHVwZGF0ZVRpbWVyKCk7IC8vIENhbGwgaW1tZWRpYXRlbHksIGRvbuKAmXQgd2FpdCBmb3IgdGhlIGZpcnN0IGludGVydmFsIHRvIGV4ZWN1dGVcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyB9KShqUXVlcnkpO1xyXG5cclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGJhbm5lciA9ICQoJyNoZWFkZXItc3RpY2t5LWJhbm5lciwgI2hhbGxvd2Vlbi1vZmZlcnMsICNibGFjay1mcmlkYXktb2ZmZXJzJyk7XHJcblxyXG4gICAgICAgIC8vIENsb3NlIGJhbm5lclxyXG4gICAgICAgIGJhbm5lci5vbignY2xpY2snLCAnLmJhbm5lci1jbG9zZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnI2hlYWRlci1zdGlja3ktYmFubmVyJykucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEJhbm5lciBjb3VudGRvd25cclxuICAgICAgICBjb25zdCBjb3VudGRvd24gPSBiYW5uZXIuZmluZCgnLmJhbm5lci1jb3VudGRvd24nKTtcclxuICAgICAgICBjb25zdCB0aW1lciA9IGJhbm5lci5maW5kKCcudGltZXInKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZG93bi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgU0VDT05EID0gMTAwMDtcclxuICAgICAgICAgICAgY29uc3QgTUlOVVRFID0gNjAgKiBTRUNPTkQ7XHJcbiAgICAgICAgICAgIGNvbnN0IEhPVVIgPSA2MCAqIE1JTlVURTtcclxuICAgICAgICAgICAgY29uc3QgREFZID0gMjQgKiBIT1VSO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcGFkWmVybyA9IChudW0pID0+IChudW0gPCAxMCA/IGAwJHtudW19YCA6IG51bSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXRUaW1lID0gKGRpc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gcGFkWmVybyhNYXRoLmZsb29yKGRpc3RhbmNlIC8gREFZKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IHBhZFplcm8oTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBEQVkpIC8gSE9VUikpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IHBhZFplcm8oTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBIT1VSKSAvIE1JTlVURSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IHBhZFplcm8oTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBNSU5VVEUpIC8gU0VDT05EKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY291bnRkb3duXCI+PHNwYW4gY2xhc3M9XCJkYXlzXCI+JHtkYXlzfTwvc3Bhbj4gPHA+RGF5PC9wPjwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj48c3BhbiBjbGFzcz1cImhvdXJzXCI+JHtob3Vyc308L3NwYW4+IDxwPkhvdXI8L3A+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZG93blwiPjxzcGFuIGNsYXNzPVwibWludXRlc1wiPiR7bWludXRlc308L3NwYW4+IDxwPk1pbjwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj48c3BhbiBjbGFzcz1cInNlY29uZHNcIj4ke3NlY29uZHN9PC9zcGFuPiA8cD5TZWM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlVGltZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb3VudERvd25EYXRlID0gbmV3IERhdGUoJzIwMjQtMTItMDVUMjM6NTk6MDAnKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2JmX29mZmVyc190aW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFubmVyLnJlbW92ZSgpOyBcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHgpOyBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZXIuaHRtbChmb3JtYXRUaW1lKGRpc3RhbmNlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiZl9vZmZlcnNfdGltZScsIGNvdW50RG93bkRhdGUpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcclxuICAgICAgICAgICAgdXBkYXRlVGltZXIoKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KShqUXVlcnkpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9jb21wb25lbnRzL3ByaWNpbmdcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3N0aWNreS1iYW5uZXJcIjtcclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG4gICAgY29uc3QgYXBwID0ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9Jbml0IFRlc3RpbW9uaWFsIFNsaWRlclxyXG4gICAgICAgICAgICBhcHAuaW5pdFRlc3RpbW9uaWFsU2xpZGVyKCk7XHJcblxyXG4gICAgICAgICAgICAvL0luaXQgRnVuIEZhY3QgQ291bnRlclxyXG4gICAgICAgICAgICBhcHAuaW5pdEZ1bkZhY3RDb3VudGVyKCk7XHJcblxyXG4gICAgICAgICAgICAvL0luaXQgc2Nyb2xsaW5nIGhlYWRlclxyXG4gICAgICAgICAgICBhcHAuaW5pdEZpeGRIZWFkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vSGFuZGxlIGNvbnRhY3QgZm9ybSB0YWJzXHJcbiAgICAgICAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVDb250YWN0Rm9ybSk7XHJcbiAgICAgICAgICAgIC8vSGFuZGxlIG1vZGFsIHZpZGVvXHJcbiAgICAgICAgICAgIC8vICQoXCIjb3Blbi1tb2RhbFwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVNb2RhbFZpZGVvKTtcclxuICAgICAgICAgICAgLy8gJChcIi5tb2RhbC1idG4tY2xvc2VcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlTW9kYWxWaWRlb0Nsb3NlKTtcclxuXHJcbiAgICAgICAgICAgIC8vSGFuZGxlIHBvcHVwIGltZ1xyXG4gICAgICAgICAgICBhcHAuaGFuZGxlUG9wdXBpbWcoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvL0hhbmRsZSB0byB0b3AgYnV0dG9uXHJcbiAgICAgICAgICAgICQoXCIudG8tdG9wXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZVRvVG9wKTtcclxuXHJcbiAgICAgICAgICAgIC8vaGFuZGxlIHByaWNpbmcgaXRlbSBjbGlja1xyXG4gICAgICAgICAgICAkKFwiLml0ZW0tcHJpY2VcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlUHJpY2luZ0l0ZW0pO1xyXG5cclxuICAgICAgICAgICAgLy9IYW5kbGUgSW1hZ2UgQ29tcGFyZSBvbiBSZWFkZXIgTW9kZSBwYWdlXHJcbiAgICAgICAgICAgIGFwcC5pbml0SW1hZ2VDb21wYXJlKCk7XHJcblxyXG4gICAgICAgICAgICAvL0NoYW5nZSBEcmFjdWxhIEhlcm8gSW1hZ2VcclxuICAgICAgICAgICAgYXBwLmNoYW5nZURyYWN1bGFIZXJvSW1hZ2UoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBBZmZpbGlhdGUgRm9ybVxyXG4gICAgICAgICAgICAkKFwiI2FmZmlsaWF0ZS1yZWdpc3Rlci1mb3JtXCIpLm9uKFwic3VibWl0XCIsIGFwcC5oYW5kbGVBZmZpbGlhdGVGb3JtKTtcclxuXHJcbiAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikub24oXCJjaGFuZ2VcIiwgYXBwLmhhbmRsZVByb2R1Y3RDaGFuZ2UpO1xyXG4gICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikub24oXCJjaGFuZ2VcIiwgYXBwLmhhbmRsZU1ldGhvZENoYW5nZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgU2VhcmNoXHJcbiAgICAgICAgICAgICQoXCIuc2VhcmNoLWJ0blwiKS5vbihcImNsaWNrXCIsIGFwcC5vcGVuU2VhcmNoKTtcclxuICAgICAgICAgICAgJChcIi5jZW5jZWwtYnRuXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmNhbmNlbFNlYXJjaCk7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9wZW5TZWFyY2g6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQoXCIuc2VhcmNoLWZvcm1cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICAkKFwiLnNlYXJjaC1maWVsZFwiKS5mb2N1cygpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNhbmNlbFNlYXJjaDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJChcIi5zZWFyY2gtZm9ybVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0VGVzdGltb25pYWxTbGlkZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gSG9tZSB0ZXN0aW1vbmlhbCBzbGlkZXJcclxuICAgICAgICAgICAgJChcIi5zaW5nbGUtdGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRQYWRkaW5nOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCIucmlnaHRcIixcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgLy8gYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9nb29nbGUgZHJpdmVcclxuICAgICAgICAgICAgJChcIi50ZXN0aW1vbmlhbC1pdGVtc1wiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCIucmlnaHRcIixcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy90ZXN0aW1vbmlhbC1pdGVtcy1jZjdcclxuICAgICAgICAgICAgJChcIi50ZXN0aW1vbmlhbC1pdGVtcy1jZjdcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiLnJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vcHJldmlldyBlYWNmNy10ZXN0aW1vbmlhbC1pdGVtc1xyXG4gICAgICAgICAgICAkKFwiLmVhY2Y3LXRlc3RpbW9uaWFsLWl0ZW1zXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIi5lYWNmNy1yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIi5lYWNmNy1sZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2Fib3V0IHNsaWRlclxyXG4gICAgICAgICAgICAkKFwiLnNsaWRlci1tYWluXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiLnVwXCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiLmRvd25cIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKFwiLmNvbXBhdC1zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTM5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vZHJhY3VsYSBzbGlkZXJcclxuICAgICAgICAgICAgJChcIi5kcmFjdWxhLXNsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXRGdW5GYWN0Q291bnRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLmNvdW50ZXJcIikuY291bnRlclVwKHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAxNixcclxuICAgICAgICAgICAgICAgIHRpbWU6IDE1MDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vc2Nyb2xsaW5nIGhlYWRlciBqc1xyXG4gICAgICAgIGluaXRGaXhkSGVhZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuICAgICAgICAgICAgY29uc3QgZml4ZWRoZWFkZXIgPSAkKCcuc2l0ZS1oZWFkZXInKTtcclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTY3JvbGwgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsID4gbGFzdFNjcm9sbFRvcCB8fCBjdXJyZW50U2Nyb2xsIDwgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNjcm9sbCBkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgZml4ZWRoZWFkZXIucmVtb3ZlQ2xhc3MoJ2ZpeGVkLWhlYWRlcicpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2Nyb2xsIHVwXHJcbiAgICAgICAgICAgICAgICAgICAgZml4ZWRoZWFkZXIuYWRkQ2xhc3MoJ2ZpeGVkLWhlYWRlcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSBjdXJyZW50U2Nyb2xsIDw9IDAgPyAwIDogY3VycmVudFNjcm9sbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vSGFuZGxlIHBvcHVwIGltZyBqc1xyXG4gICAgICAgIC8vIGhhbmRsZVBvcHVwaW1nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgICQoJy5zaW5nbGUgYXJ0aWNsZSBpbWcnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAkLm1hZ25pZmljUG9wdXAub3Blbih7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaXRlbXM6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc3JjOiBzcmNcclxuICAgICAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtaW1nLW1vYmlsZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmVydGljYWxGaXQ6IHRydWVcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgLy9IYW5kbGUgcG9wdXAgaW1nIGpzXHJcbiAgICAgICAgaGFuZGxlUG9wdXBpbWc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLnNpbmdsZSBhcnRpY2xlIGltZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgICAgICAgICAgbGl0eShzcmMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vSGFuZGxlIHBvcHVwIGltZyBqcyBlbmQgXHJcblxyXG4gICAgICAgIGhhbmRsZUNvbnRhY3RGb3JtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIuY29udGFjdC1mb3JtLXdyYXBcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoYC5jb250YWN0LWZvcm0td3JhcC5mb3JtLSR7JCh0aGlzKS5kYXRhKFwidGFyZ2V0XCIpfWApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICBoYW5kbGVUb1RvcDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIFwiZmFzdFwiKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVQcmljaW5nSXRlbTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLml0ZW0tcHJpY2VcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5pdEltYWdlQ29tcGFyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLnJlYWRlci1tb2RlLWltYWdlLWNvbXBhcmVcIikudHdlbnR5dHdlbnR5KHtcclxuICAgICAgICAgICAgICAgIC8vICBIb3cgbXVjaCBvZiB0aGUgYmVmb3JlIGltYWdlIGlzIHZpc2libGUgd2hlbiB0aGUgcGFnZSBsb2Fkc1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdF9vZmZzZXRfcGN0OiAwLjUsXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbGFiZWwgdGV4dFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlX2xhYmVsOiBcIkdlbmVyYWwgVmlld1wiLFxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJfbGFiZWw6IFwiUmVhZGVyIE1vZGUgVmlld1wiLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vb3ZlcmxheVxyXG4gICAgICAgICAgICAgICAgbm9fb3ZlcmxheTogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2hhbmdlRHJhY3VsYUhlcm9JbWFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9ICQoXCIuZHJhY3VsYS1oZXJvLWltYWdlXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpbWFnZS5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlU3JjID0gaW1hZ2UuYXR0cihcInNyY1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzRGFyayA9IGltYWdlU3JjLmluY2x1ZGVzKFwiaGVyby1kYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuYXR0cihcclxuICAgICAgICAgICAgICAgICAgICBcInNyY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGFyayA/IFwiaGVyby1kYXJrXCIgOiBcImhlcm8tbGlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEYXJrID8gXCJoZXJvLWxpZ2h0XCIgOiBcImhlcm8tZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiLm1vZGUtYnRuXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgJChgLm1vZGUtYnRuLm1vZGUtJHtpc0RhcmsgPyBcImxpZ2h0XCIgOiBcImRhcmtcIn1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlQWZmaWxpYXRlRm9ybTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZhaWxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvZHVjdCBzZWxlY3Rpb25cclxuICAgICAgICAgICAgbGV0IHByb2R1Y3RzID0gW107XHJcbiAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ106Y2hlY2tlZFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwcm9kdWN0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTWV0aG9kcyBTZWxlY3Rpb25cclxuICAgICAgICAgICAgbGV0IG1ldGhvZHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbWV0aG9kcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vYm9vdHN0cmFwIHZhbGlkYXRpb25cclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICQodGhpcykuZ2V0KDApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGZvcm0pLmFkZENsYXNzKFwid2FzLXZhbGlkYXRlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFmYWlsZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSAkKFwiI25hbWVcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbWFpbCA9ICQoXCIjZW1haWxcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwZW1haWwgPSAkKFwiI3BlbWFpbFwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvbWFpbiA9ICQoXCIjZG9tYWluXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGlzdGljcyA9ICQoXCIjc3RhdGlzdGljc1wiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb24gPSAkKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiI3Byb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3cC5hamF4LnNlbmQoXCJhZmZpbGlhdGVfcmVnaXN0ZXJcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZW1haWw6IHBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluOiBkb21haW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kczogbWV0aG9kcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGlzdGljczogc3RhdGlzdGljcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbjogcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNzdWJtaXRcIikuZmluZChcIi5mYS1zcGlubmVyXCIpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNhZmZpbGlhdGUtcmVnaXN0ZXItZm9ybVwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLm1lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3N1Ym1pdFwiKS5maW5kKFwiLmZhLXNwaW5uZXJcIikuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlUHJvZHVjdENoYW5nZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJChcIltuYW1lPSdwcm9kdWN0W10nXTpjaGVja2VkXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVNZXRob2RDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nbWV0aG9kW10nXTpjaGVja2VkXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gaGFuZGxlTW9kYWxWaWRlbzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBgYDtcclxuICAgICAgICAvLyAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9ICQoXCIuaGVyby1ob3ctYnV0dFwiKTtcclxuICAgICAgICAvLyAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmQobW9kYWxDb250ZW50KTtcclxuXHJcblxyXG4gICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgIC8vIGhhbmRsZU1vZGFsVmlkZW9DbG9zZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gJChcIi5oZXJvLWhvdy1idXR0XCIpLmNsb3Nlc3QoJyNzdGF0aWNCYWNrZHJvcCcpO1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0YXJnZXRFbGVtZW50KTtcclxuICAgICAgICAvLyAgICAgdGFyZ2V0RWxlbWVudC5lbXB0eSgpO1xyXG5cclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgIH07XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtbGlnaHRib3hdJywgbGl0eSk7XHJcbiAgICAvL21vYmlsZSBtZW51IGNsb3NlIGpzXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgJG1lbnUgPSAkKCcubW9iaWxlLW1lbnUnKTtcclxuICAgICAgICBjb25zdCAkY2xvc2VCdG4gPSAkKCcjY2xvc2VfYnRuJyk7XHJcbiAgICAgICAgY29uc3QgJHRvZ2dsZU1lbnVCdG4gPSAkKCcjbWVudS10b2dnbGUnKTtcclxuICAgICAgICAkdG9nZ2xlTWVudUJ0bi5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRtZW51LmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCEkbWVudS5pcyhlLnRhcmdldCkgJiYgJG1lbnUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDAgJiYgISR0b2dnbGVNZW51QnRuLmlzKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgJG1lbnUucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICRjbG9zZUJ0bi5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRtZW51LnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBlYWNmNyBwcmV2aWV3IGpzIHN0YXJ0XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gSGFuZGxlIFNob3cgQ29kZSBidXR0b24gY2xpY2tcclxuICAgICAgICAkKFwiLnNob3ctYnV0dG9uc1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5kYXRhKFwiaW5kZXhcIik7IC8vIEdldCB0aGUgaW5kZXggZnJvbSB0aGUgZGF0YSBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgdmFyICRmb3JtQXJlYSA9ICQoJy5mb3JtLWFyZWFbZGF0YS1pbmRleD1cIicgKyBpbmRleCArICdcIl0nKTtcclxuICAgICAgICAgICAgdmFyICRmb3JtQ29kZUNvbnRhaW5lciA9ICRmb3JtQXJlYS5maW5kKFwiLmZvcm0tY29kZVwiKTtcclxuICAgICAgICAgICAgdmFyICRlYWNmN0Zvcm0gPSAkZm9ybUFyZWEuZmluZChcIi5lYWNmNy1mb3JtXCIpO1xyXG4gICAgICAgICAgICB2YXIgJGNvcHlCdXR0b24gPSAkZm9ybUFyZWEuZmluZChcIi5jb3B5LWJ1dHRvbnNcIik7XHJcbiAgICAgICAgICAgIHZhciAkc2hvd0J1dHRvbiA9ICQodGhpcyk7IC8vIEN1cnJlbnQgU2hvdyBDb2RlIGJ1dHRvblxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIHRoZSBmb3JtIGNvZGUgYW5kIGFzc29jaWF0ZWQgZWxlbWVudHNcclxuICAgICAgICAgICAgaWYgKCRmb3JtQ29kZUNvbnRhaW5lci5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkZm9ybUNvZGVDb250YWluZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJGVhY2Y3Rm9ybS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkY29weUJ1dHRvbi5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkc2hvd0J1dHRvbi5odG1sKCc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNvZGVcIj48L2k+IFNob3cgQ29kZScpOyAvLyBDaGFuZ2UgdGV4dCB0byBTaG93IENvZGVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRmb3JtQ29kZUNvbnRhaW5lci5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkZWFjZjdGb3JtLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICRjb3B5QnV0dG9uLnNob3coKTtcclxuICAgICAgICAgICAgICAgICRzaG93QnV0dG9uLmh0bWwoJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtY29kZVwiPjwvaT4gSGlkZSBDb2RlJyk7IC8vIENoYW5nZSB0ZXh0IHRvIEhpZGUgQ29kZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAvLyBIYW5kbGUgQ29weSBDb2RlIGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICQoXCIuY29weS1idXR0b25zXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmRhdGEoXCJpbmRleFwiKTsgLy8gR2V0IHRoZSBpbmRleCBmcm9tIHRoZSBkYXRhIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICB2YXIgJGZvcm1BcmVhID0gJCgnLmZvcm0tYXJlYVtkYXRhLWluZGV4PVwiJyArIGluZGV4ICsgJ1wiXScpO1xyXG4gICAgICAgICAgICB2YXIgY29kZVRleHQgPSAkZm9ybUFyZWEuZmluZChcIi5mb3JtLWNvZGVcIikudGV4dCgpLnRyaW0oKTtcclxuICAgIFxyXG4gICAgICAgICAgICBjb3B5VG9DbGlwYm9hcmQoY29kZVRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgLy8gSGFuZGxlIGNvZGUgY29udGVudCBjbGljayB0byBjb3B5IGFuZCBzZWxlY3QgYWxsXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5mb3JtLWNvZGUgY29kZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjb2RlVGV4dCA9ICQodGhpcykudGV4dCgpLnRyaW0oKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBTZWxlY3QgYWxsIHRleHQgaW4gdGhlIGNvZGUgYmxvY2tcclxuICAgICAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQ29weSB0aGUgY29kZSB0byB0aGUgY2xpcGJvYXJkXHJcbiAgICAgICAgICAgIGNvcHlUb0NsaXBib2FyZChjb2RlVGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAvLyBDb3B5IHRvIGNsaXBib2FyZCBmdW5jdGlvblxyXG4gICAgICAgIGZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZCh0ZXh0KSB7XHJcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJGb3JtIGNvZGUgY29waWVkIHRvIGNsaXBib2FyZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNvcHkgY29kZTogXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBGYWxsYmFjayBmb3IgdW5zdXBwb3J0ZWQgQ2xpcGJvYXJkIEFQSVxyXG4gICAgICAgICAgICAgICAgdmFyIHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgICAgICAgICAgICAgdGV4dEFyZWEudmFsdWUgPSB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0QXJlYS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3NmdWwgPSBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3NmdWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJGb3JtIGNvZGUgY29waWVkIHRvIGNsaXBib2FyZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJDb3B5IGZhaWxlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJVbmFibGUgdG8gY29weSB0ZXh0LlwiKTtcclxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0QXJlYSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICAvLyBlYWNmNyBwcmV2aWV3IGpzIGVuZFxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoYXBwLmluaXQpO1xyXG59KShqUXVlcnkpO1xyXG5cclxuXHJcbi8vIGxldCAkaXRlbXMgPSAkKCcuc2xpZGVyLW1haW4gLnNsaWRlci1pdGVtIC5pdGVtJyk7XHJcbi8vIGxldCAkbmV4dCA9ICQoJyNuZXh0Jyk7XHJcbi8vIGxldCAkcHJldiA9ICQoJyNwcmV2Jyk7XHJcblxyXG4vLyBsZXQgYWN0aXZlID0gMztcclxuLy8gbGV0IGF1dG9TbGlkZUludGVydmFsO1xyXG5cclxuLy8gZnVuY3Rpb24gbG9hZFNob3coKSB7XHJcbi8vICAgICBsZXQgc3R0ID0gMDtcclxuXHJcbi8vICAgICAvLyBTZXR0aW5nIHN0eWxlIGZvciB0aGUgYWN0aXZlIGl0ZW1cclxuLy8gICAgICRpdGVtcy5lcShhY3RpdmUpLmNzcyh7XHJcbi8vICAgICAgICAgdHJhbnNmb3JtOiAnbm9uZScsXHJcbi8vICAgICAgICAgekluZGV4OiAxLFxyXG4vLyAgICAgICAgIGZpbHRlcjogJ25vbmUnLFxyXG4vLyAgICAgICAgIG9wYWNpdHk6IDFcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIC8vIEZvciBpdGVtcyBhZnRlciB0aGUgYWN0aXZlIGl0ZW1cclxuLy8gICAgIGZvciAobGV0IGkgPSBhY3RpdmUgKyAxOyBpIDwgJGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgc3R0Kys7XHJcbi8vICAgICAgICAgJGl0ZW1zLmVxKGkpLmNzcyh7XHJcbi8vICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHsxMjAgKiBzdHR9cHgpIHNjYWxlKCR7MSAtIDAuMiAqIHN0dH0pIHBlcnNwZWN0aXZlKDE2cHgpIHJvdGF0ZVkoLTFkZWcpYCxcclxuLy8gICAgICAgICAgICAgekluZGV4OiAtc3R0LFxyXG4vLyAgICAgICAgICAgICBmaWx0ZXI6ICdibHVyKDVweCknLFxyXG4vLyAgICAgICAgICAgICBvcGFjaXR5OiBzdHQgPiAyID8gMCA6IDAuNlxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC8vIFJlc2V0IGBzdHRgIGZvciBpdGVtcyBiZWZvcmUgdGhlIGFjdGl2ZSBpdGVtXHJcbi8vICAgICBzdHQgPSAwO1xyXG4vLyAgICAgZm9yIChsZXQgaSA9IGFjdGl2ZSAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbi8vICAgICAgICAgc3R0Kys7XHJcbi8vICAgICAgICAgJGl0ZW1zLmVxKGkpLmNzcyh7XHJcbi8vICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHstMTIwICogc3R0fXB4KSBzY2FsZSgkezEgLSAwLjIgKiBzdHR9KSBwZXJzcGVjdGl2ZSgxNnB4KSByb3RhdGVZKDFkZWcpYCxcclxuLy8gICAgICAgICAgICAgekluZGV4OiAtc3R0LFxyXG4vLyAgICAgICAgICAgICBmaWx0ZXI6ICdibHVyKDVweCknLFxyXG4vLyAgICAgICAgICAgICBvcGFjaXR5OiBzdHQgPiAyID8gMCA6IDAuNlxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIGxvYWRTaG93KCk7XHJcblxyXG4vLyAkbmV4dC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIHN0b3BBdXRvU2xpZGUoKTtcclxuLy8gICAgIGFjdGl2ZSA9IGFjdGl2ZSArIDEgPCAkaXRlbXMubGVuZ3RoID8gYWN0aXZlICsgMSA6IDA7XHJcbi8vICAgICBsb2FkU2hvdygpO1xyXG4vLyAgICAgc3RhcnRBdXRvU2xpZGUoKTtcclxuLy8gfSk7XHJcblxyXG4vLyAkcHJldi5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIHN0b3BBdXRvU2xpZGUoKTtcclxuLy8gICAgIGFjdGl2ZSA9IGFjdGl2ZSAtIDEgPj0gMCA/IGFjdGl2ZSAtIDEgOiAkaXRlbXMubGVuZ3RoIC0gMTtcclxuLy8gICAgIGxvYWRTaG93KCk7XHJcbi8vICAgICBzdGFydEF1dG9TbGlkZSgpO1xyXG4vLyB9KTtcclxuXHJcbi8vIC8vIEF1dG8gc2xpZGUgZnVuY3Rpb25cclxuLy8gZnVuY3Rpb24gc3RhcnRBdXRvU2xpZGUoKSB7XHJcbi8vICAgICBhdXRvU2xpZGVJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgIGFjdGl2ZSA9IGFjdGl2ZSArIDEgPCAkaXRlbXMubGVuZ3RoID8gYWN0aXZlICsgMSA6IDA7XHJcbi8vICAgICAgICAgbG9hZFNob3coKTtcclxuLy8gICAgIH0sIDMwMDApO1xyXG4vLyB9XHJcblxyXG4vLyAvLyBTdG9wIGF1dG8gc2xpZGUgb24gdXNlciBpbnRlcmFjdGlvblxyXG4vLyBmdW5jdGlvbiBzdG9wQXV0b1NsaWRlKCkge1xyXG4vLyAgICAgY2xlYXJJbnRlcnZhbChhdXRvU2xpZGVJbnRlcnZhbCk7XHJcbi8vIH1cclxuXHJcbi8vIC8vIFN0YXJ0IGF1dG8tc2xpZGUgd2hlbiB0aGUgcGFnZSBsb2Fkc1xyXG4vLyBzdGFydEF1dG9TbGlkZSgpO1xyXG5cclxuIl0sIm5hbWVzIjpbIiQiLCJhcHAiLCJpbml0Iiwib24iLCJoYW5kbGVTd2l0Y2hlciIsImhhbmRsZUxpY2Vuc2VTd2l0Y2hlciIsImUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaGFzQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsImxpY2Vuc2UiLCJkYXRhIiwiY29uY2F0IiwiZG9jdW1lbnQiLCJyZWFkeSIsImpRdWVyeSIsImJhbm5lciIsInJlbW92ZSIsImNvdW50ZG93biIsImZpbmQiLCJ0aW1lciIsImxlbmd0aCIsIlNFQ09ORCIsIk1JTlVURSIsIkhPVVIiLCJEQVkiLCJwYWRaZXJvIiwibnVtIiwiZm9ybWF0VGltZSIsImRpc3RhbmNlIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJ1cGRhdGVUaW1lciIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiY291bnREb3duRGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiY2xlYXJJbnRlcnZhbCIsIngiLCJodG1sIiwic2V0SXRlbSIsInNldEludGVydmFsIiwiaW5pdFRlc3RpbW9uaWFsU2xpZGVyIiwiaW5pdEZ1bkZhY3RDb3VudGVyIiwiaW5pdEZpeGRIZWFkZXIiLCJoYW5kbGVDb250YWN0Rm9ybSIsImhhbmRsZVBvcHVwaW1nIiwiaGFuZGxlVG9Ub3AiLCJoYW5kbGVQcmljaW5nSXRlbSIsImluaXRJbWFnZUNvbXBhcmUiLCJjaGFuZ2VEcmFjdWxhSGVyb0ltYWdlIiwiaGFuZGxlQWZmaWxpYXRlRm9ybSIsImhhbmRsZVByb2R1Y3RDaGFuZ2UiLCJoYW5kbGVNZXRob2RDaGFuZ2UiLCJvcGVuU2VhcmNoIiwiY2FuY2VsU2VhcmNoIiwiZm9jdXMiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhcnJvd3MiLCJhdXRvcGxheVNwZWVkIiwic3BlZWQiLCJjb250ZW50UGFkZGluZyIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiZG90cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ2ZXJ0aWNhbCIsImNvdW50ZXJVcCIsImRlbGF5IiwidGltZSIsImxhc3RTY3JvbGxUb3AiLCJmaXhlZGhlYWRlciIsIndpbmRvdyIsInNjcm9sbCIsImN1cnJlbnRTY3JvbGwiLCJzY3JvbGxUb3AiLCJjbGljayIsInNyYyIsImF0dHIiLCJsaXR5IiwiYW5pbWF0ZSIsInR3ZW50eXR3ZW50eSIsImRlZmF1bHRfb2Zmc2V0X3BjdCIsImJlZm9yZV9sYWJlbCIsImFmdGVyX2xhYmVsIiwibm9fb3ZlcmxheSIsImltYWdlIiwiaW1hZ2VTcmMiLCJpc0RhcmsiLCJpbmNsdWRlcyIsInJlcGxhY2UiLCJmYWlsZWQiLCJwcm9kdWN0cyIsImVhY2giLCJwdXNoIiwidmFsIiwibWV0aG9kcyIsImZvcm0iLCJnZXQiLCJjaGVja1ZhbGlkaXR5IiwibmFtZSIsImVtYWlsIiwicGVtYWlsIiwiZG9tYWluIiwic3RhdGlzdGljcyIsInByb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb24iLCJ3cCIsImFqYXgiLCJzZW5kIiwiYmVmb3JlU2VuZCIsInN1Y2Nlc3MiLCJoaWRlIiwic2hvdyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNvbXBsZXRlIiwiJG1lbnUiLCIkY2xvc2VCdG4iLCIkdG9nZ2xlTWVudUJ0biIsImlzIiwidGFyZ2V0IiwiaGFzIiwiaW5kZXgiLCIkZm9ybUFyZWEiLCIkZm9ybUNvZGVDb250YWluZXIiLCIkZWFjZjdGb3JtIiwiJGNvcHlCdXR0b24iLCIkc2hvd0J1dHRvbiIsImNvZGVUZXh0IiwidHJpbSIsImNvcHlUb0NsaXBib2FyZCIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRoZW4iLCJhbGVydCIsImVyciIsInRleHRBcmVhIiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwiYm9keSIsImFwcGVuZENoaWxkIiwic2VsZWN0Iiwic3VjY2Vzc2Z1bCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9