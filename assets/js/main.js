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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ1IsUUFBUSxDQUFDO1FBQ3ZDO01BQ0o7SUFDSjtFQUNKLENBQUMsQ0FBQztFQUNGO0VBQ0FuSyxDQUFDLENBQUNnQixRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDaEIsR0FBRyxDQUFDQyxJQUFJLENBQUM7QUFDL0IsQ0FBQyxFQUFFZ0IsTUFBTSxDQUFDOztBQUdWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3N0aWNreS1iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24gKCQpIHtcbiAgICBjb25zdCBhcHAgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vSGFuZGxlIHByaWNpbmcgc3dpdGNoZXJcbiAgICAgICAgICAgICQoJy5wcmljaW5nLXN3aXRjaGVyJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZVN3aXRjaGVyKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIGxpY2Vuc2Ugc3dpdGNoZXJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZUxpY2Vuc2VTd2l0Y2hlcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdhbm51YWwgbGlmZXRpbWUnKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICdhbm51YWwnIDogJ2xpZmV0aW1lJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYW5kbGVMaWNlbnNlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGUnKS50ZXh0KCQodGhpcykudGV4dCgpKTtcblxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgY29uc3QgbGljZW5zZSA9ICQodGhpcykuZGF0YSgnbGljZW5zZScpO1xuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnbGljZW5zZS0xIGxpY2Vuc2UtMiBsaWNlbnNlLTUgbGljZW5zZS0xMDAgbGljZW5zZS11bmxpbWl0ZWQgJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoYGxpY2Vuc2UtJHtsaWNlbnNlfWApO1xuXG4gICAgICAgIH0sXG5cblxuICAgIH1cblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcblxufSkoalF1ZXJ5KTsiLCIvLyA7KGZ1bmN0aW9uICgkKSB7XG4vLyAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgIGNvbnN0IGJhbm5lciA9ICQoJyNoZWFkZXItc3RpY2t5LWJhbm5lciwgI2hhbGxvd2Vlbi1vZmZlcnMsICNibGFjay1mcmlkYXktb2ZmZXJzJyk7XG5cbi8vICAgICAgICAgLy8gQ2xvc2UgYmFubmVyXG4vLyAgICAgICAgIGJhbm5lci5vbignY2xpY2snLCAnLmJhbm5lci1jbG9zZScsIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgICAgICQoJyNoZWFkZXItc3RpY2t5LWJhbm5lcicpLnJlbW92ZSgpO1xuLy8gICAgICAgICB9KTtcblxuLy8gICAgICAgICAvLyBCYW5uZXIgY291bnRkb3duXG4vLyAgICAgICAgIGNvbnN0IGNvdW50ZG93biA9IGJhbm5lci5maW5kKCcuYmFubmVyLWNvdW50ZG93bicpO1xuLy8gICAgICAgICBjb25zdCB0aW1lciA9IGJhbm5lci5maW5kKCcudGltZXInKTtcblxuLy8gICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xuLy8gICAgICAgICAgICAgY29uc3QgU0VDT05EID0gMTAwMDtcbi8vICAgICAgICAgICAgIGNvbnN0IE1JTlVURSA9IDYwICogU0VDT05EO1xuLy8gICAgICAgICAgICAgY29uc3QgSE9VUiA9IDYwICogTUlOVVRFO1xuLy8gICAgICAgICAgICAgY29uc3QgREFZID0gMjQgKiBIT1VSO1xuXG4vLyAgICAgICAgICAgICBjb25zdCBmb3JtYXRUaW1lID0gKGRpc3RhbmNlKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyBEQVkpO1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBEQVkpIC8gSE9VUik7XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgSE9VUikgLyBNSU5VVEUpO1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlIE1JTlVURSkgLyBTRUNPTkQpO1xuXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cImRheXNcIj4ke2RheXN9ZDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJob3Vyc1wiPiR7aG91cnN9aDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJtaW51dGVzXCI+JHttaW51dGVzfW08L3NwYW4+IDxzcGFuIGNsYXNzPVwic2Vjb25kc1wiPiR7c2Vjb25kc31zPC9zcGFuPmA7XG4vLyAgICAgICAgICAgICB9O1xuXG4vLyAgICAgICAgICAgICBjb25zdCB1cGRhdGVUaW1lciA9ICgpID0+IHtcbi8vICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbi8vICAgICAgICAgICAgICAgICAvL2xldCBjb3VudERvd25EYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyA4LjUgKiBEQVk7XG4vLyAgICAgICAgICAgICAgICAgbGV0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSgnMjAyNC0xMi0wNVQyMzo1OTowMCcpLmdldFRpbWUoKTtcblxuXG4vLyAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSB0aW1lIGluIGxvY2FsIHN0b3JhZ2Vcbi8vICAgICAgICAgICAgICAgICBpZiAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZl9vZmZlcnNfdGltZScpKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnKTtcbi8vICAgICAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XG5cbi8vICAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSB0aW1lXG4vLyAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdiZl9vZmZlcnNfdGltZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICAgICAgdGltZXIuaHRtbChmb3JtYXRUaW1lKGRpc3RhbmNlKSk7XG5cbi8vICAgICAgICAgICAgICAgICAvLyBTYXZlIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxuLy8gICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiZl9vZmZlcnNfdGltZScsIGNvdW50RG93bkRhdGUpO1xuLy8gICAgICAgICAgICAgfTtcblxuLy8gICAgICAgICAgICAgY29uc3QgeCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcbi8vICAgICAgICAgICAgIHVwZGF0ZVRpbWVyKCk7IC8vIENhbGwgaW1tZWRpYXRlbHksIGRvbuKAmXQgd2FpdCBmb3IgdGhlIGZpcnN0IGludGVydmFsIHRvIGV4ZWN1dGVcbiAgICAgICAgICAgIFxuLy8gICAgICAgICB9XG4vLyAgICAgfSk7XG5cbi8vIH0pKGpRdWVyeSk7XG5cblxuKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGJhbm5lciA9ICQoJyNoZWFkZXItc3RpY2t5LWJhbm5lciwgI2hhbGxvd2Vlbi1vZmZlcnMsICNibGFjay1mcmlkYXktb2ZmZXJzJyk7XG5cbiAgICAgICAgLy8gQ2xvc2UgYmFubmVyXG4gICAgICAgIGJhbm5lci5vbignY2xpY2snLCAnLmJhbm5lci1jbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJyNoZWFkZXItc3RpY2t5LWJhbm5lcicpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCYW5uZXIgY291bnRkb3duXG4gICAgICAgIGNvbnN0IGNvdW50ZG93biA9IGJhbm5lci5maW5kKCcuYmFubmVyLWNvdW50ZG93bicpO1xuICAgICAgICBjb25zdCB0aW1lciA9IGJhbm5lci5maW5kKCcudGltZXInKTtcblxuICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgU0VDT05EID0gMTAwMDtcbiAgICAgICAgICAgIGNvbnN0IE1JTlVURSA9IDYwICogU0VDT05EO1xuICAgICAgICAgICAgY29uc3QgSE9VUiA9IDYwICogTUlOVVRFO1xuICAgICAgICAgICAgY29uc3QgREFZID0gMjQgKiBIT1VSO1xuXG4gICAgICAgICAgICBjb25zdCBwYWRaZXJvID0gKG51bSkgPT4gKG51bSA8IDEwID8gYDAke251bX1gIDogbnVtKTtcblxuICAgICAgICAgICAgY29uc3QgZm9ybWF0VGltZSA9IChkaXN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBwYWRaZXJvKE1hdGguZmxvb3IoZGlzdGFuY2UgLyBEQVkpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IHBhZFplcm8oTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBEQVkpIC8gSE9VUikpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBwYWRaZXJvKE1hdGguZmxvb3IoKGRpc3RhbmNlICUgSE9VUikgLyBNSU5VVEUpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gcGFkWmVybyhNYXRoLmZsb29yKChkaXN0YW5jZSAlIE1JTlVURSkgLyBTRUNPTkQpKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNvdW50ZG93blwiPjxzcGFuIGNsYXNzPVwiZGF5c1wiPiR7ZGF5c308L3NwYW4+IDxwPkRheTwvcD48L2Rpdj4gXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZG93blwiPjxzcGFuIGNsYXNzPVwiaG91cnNcIj4ke2hvdXJzfTwvc3Bhbj4gPHA+SG91cjwvcD4gPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZG93blwiPjxzcGFuIGNsYXNzPVwibWludXRlc1wiPiR7bWludXRlc308L3NwYW4+IDxwPk1pbjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRkb3duXCI+PHNwYW4gY2xhc3M9XCJzZWNvbmRzXCI+JHtzZWNvbmRzfTwvc3Bhbj4gPHA+U2VjPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVUaW1lciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBsZXQgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKCcyMDI0LTEyLTA1VDIzOjU5OjAwJykuZ2V0VGltZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JmX29mZmVyc190aW1lJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZl9vZmZlcnNfdGltZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdiZl9vZmZlcnNfdGltZScpO1xuICAgICAgICAgICAgICAgICAgICBiYW5uZXIucmVtb3ZlKCk7IFxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHgpOyBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRpbWVyLmh0bWwoZm9ybWF0VGltZShkaXN0YW5jZSkpO1xuXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnLCBjb3VudERvd25EYXRlKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHggPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XG4gICAgICAgICAgICB1cGRhdGVUaW1lcigpOyBcbiAgICAgICAgfVxuICAgIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vY29tcG9uZW50cy9wcmljaW5nXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lclwiO1xuXG4oZnVuY3Rpb24gKCQpIHtcbiAgICBjb25zdCBhcHAgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vSW5pdCBUZXN0aW1vbmlhbCBTbGlkZXJcbiAgICAgICAgICAgIGFwcC5pbml0VGVzdGltb25pYWxTbGlkZXIoKTtcblxuICAgICAgICAgICAgLy9Jbml0IEZ1biBGYWN0IENvdW50ZXJcbiAgICAgICAgICAgIGFwcC5pbml0RnVuRmFjdENvdW50ZXIoKTtcblxuICAgICAgICAgICAgLy9Jbml0IHNjcm9sbGluZyBoZWFkZXJcbiAgICAgICAgICAgIGFwcC5pbml0Rml4ZEhlYWRlcigpO1xuXG4gICAgICAgICAgICAvL0hhbmRsZSBjb250YWN0IGZvcm0gdGFic1xuICAgICAgICAgICAgJChcIi5jb250YWN0LWZvcm0gLnRhYi1pdGVtXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZUNvbnRhY3RGb3JtKTtcbiAgICAgICAgICAgIC8vSGFuZGxlIG1vZGFsIHZpZGVvXG4gICAgICAgICAgICAvLyAkKFwiI29wZW4tbW9kYWxcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlTW9kYWxWaWRlbyk7XG4gICAgICAgICAgICAvLyAkKFwiLm1vZGFsLWJ0bi1jbG9zZVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVNb2RhbFZpZGVvQ2xvc2UpO1xuXG4gICAgICAgICAgICAvL0hhbmRsZSBwb3B1cCBpbWdcbiAgICAgICAgICAgIGFwcC5oYW5kbGVQb3B1cGltZygpO1xuXG5cbiAgICAgICAgICAgIC8vSGFuZGxlIHRvIHRvcCBidXR0b25cbiAgICAgICAgICAgICQoXCIudG8tdG9wXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZVRvVG9wKTtcblxuICAgICAgICAgICAgLy9oYW5kbGUgcHJpY2luZyBpdGVtIGNsaWNrXG4gICAgICAgICAgICAkKFwiLml0ZW0tcHJpY2VcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlUHJpY2luZ0l0ZW0pO1xuXG4gICAgICAgICAgICAvL0hhbmRsZSBJbWFnZSBDb21wYXJlIG9uIFJlYWRlciBNb2RlIHBhZ2VcbiAgICAgICAgICAgIGFwcC5pbml0SW1hZ2VDb21wYXJlKCk7XG5cbiAgICAgICAgICAgIC8vQ2hhbmdlIERyYWN1bGEgSGVybyBJbWFnZVxuICAgICAgICAgICAgYXBwLmNoYW5nZURyYWN1bGFIZXJvSW1hZ2UoKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIEFmZmlsaWF0ZSBGb3JtXG4gICAgICAgICAgICAkKFwiI2FmZmlsaWF0ZS1yZWdpc3Rlci1mb3JtXCIpLm9uKFwic3VibWl0XCIsIGFwcC5oYW5kbGVBZmZpbGlhdGVGb3JtKTtcblxuICAgICAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5vbihcImNoYW5nZVwiLCBhcHAuaGFuZGxlUHJvZHVjdENoYW5nZSk7XG4gICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikub24oXCJjaGFuZ2VcIiwgYXBwLmhhbmRsZU1ldGhvZENoYW5nZSk7XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBTZWFyY2hcbiAgICAgICAgICAgICQoXCIuc2VhcmNoLWJ0blwiKS5vbihcImNsaWNrXCIsIGFwcC5vcGVuU2VhcmNoKTtcbiAgICAgICAgICAgICQoXCIuY2VuY2VsLWJ0blwiKS5vbihcImNsaWNrXCIsIGFwcC5jYW5jZWxTZWFyY2gpO1xuXG4gICAgICAgICAgICBhcHAuaGFuZGxlQ2hhbmdlRG90VGV4dCgpO1xuXG4gICAgICAgIH0sXG5cbiAgICAgICAgb3BlblNlYXJjaDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICQoXCIuc2VhcmNoLWZvcm1cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgICAgICQoXCIuc2VhcmNoLWZpZWxkXCIpLmZvY3VzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FuY2VsU2VhcmNoOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgJChcIi5zZWFyY2gtZm9ybVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0VGVzdGltb25pYWxTbGlkZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIEhvbWUgdGVzdGltb25pYWwgc2xpZGVyXG4gICAgICAgICAgICAkKFwiLnNpbmdsZS10ZXN0aW1vbmlhbC1pdGVtc1wiKS5zbGljayh7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAyMDAwLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRQYWRkaW5nOiBcIjMwcHhcIixcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiLnJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIi5sZWZ0XCIsXG4gICAgICAgICAgICAgICAgLy8gYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vbXVsdGltZWRpYSBwbGF5ZXIgaGVybyBzbGlkZXJcbiAgICAgICAgICAgICQoXCIuaGVyby1pbWFnZS1tYWluXCIpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDIwMDAsXG4gICAgICAgICAgICAgICAgY29udGVudFBhZGRpbmc6IFwiMzBweFwiLFxuICAgICAgICAgICAgICAgIC8vIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vZ29vZ2xlIGRyaXZlXG4gICAgICAgICAgICAkKFwiLnRlc3RpbW9uaWFsLWl0ZW1zXCIpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiLnJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIi5sZWZ0XCIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vdGVzdGltb25pYWwtaXRlbXMtY2Y3XG4gICAgICAgICAgICAkKFwiLnRlc3RpbW9uaWFsLWl0ZW1zLWNmN1wiKS5zbGljayh7XG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIi5yaWdodFwiLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL3ByZXZpZXcgZWFjZjctdGVzdGltb25pYWwtaXRlbXNcbiAgICAgICAgICAgICQoXCIuZWFjZjctdGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCIuZWFjZjctcmlnaHRcIixcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiLmVhY2Y3LWxlZnRcIixcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9hYm91dCBzbGlkZXJcbiAgICAgICAgICAgICQoXCIuc2xpZGVyLW1haW5cIikuc2xpY2soe1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIi51cFwiLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCIuZG93blwiLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKFwiLmNvbXBhdC1zbGlkZXJcIikuc2xpY2soe1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMzk5Ljk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vZHJhY3VsYSBzbGlkZXJcbiAgICAgICAgICAgICQoXCIuZHJhY3VsYS1zbGlkZXJcIikuc2xpY2soe1xuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0RnVuRmFjdENvdW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoXCIuY291bnRlclwiKS5jb3VudGVyVXAoe1xuICAgICAgICAgICAgICAgIGRlbGF5OiAxNixcbiAgICAgICAgICAgICAgICB0aW1lOiAxNTAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy9zY3JvbGxpbmcgaGVhZGVyIGpzXG4gICAgICAgIGluaXRGaXhkSGVhZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICBjb25zdCBmaXhlZGhlYWRlciA9ICQoJy5zaXRlLWhlYWRlcicpO1xuXG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFNjcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA+IGxhc3RTY3JvbGxUb3AgfHwgY3VycmVudFNjcm9sbCA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2Nyb2xsIGRvd25cbiAgICAgICAgICAgICAgICAgICAgZml4ZWRoZWFkZXIucmVtb3ZlQ2xhc3MoJ2ZpeGVkLWhlYWRlcicpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2Nyb2xsIHVwXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkaGVhZGVyLmFkZENsYXNzKCdmaXhlZC1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsYXN0U2Nyb2xsVG9wID0gY3VycmVudFNjcm9sbCA8PSAwID8gMCA6IGN1cnJlbnRTY3JvbGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYW5kbGVDaGFuZ2VEb3RUZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcuc2xpY2stZG90cyBsaTpudGgtY2hpbGQoMSkgYnV0dG9uJykudGV4dCgnQXVkaW8gUGxheWVyJyk7XG4gICAgICAgICAgICAkKCcuc2xpY2stZG90cyBsaTpudGgtY2hpbGQoMikgYnV0dG9uJykudGV4dCgnVmlkZW8gUGxheWVyJyk7XG4gICAgICAgICAgICAkKCcuc2xpY2stZG90cyBsaTpudGgtY2hpbGQoMykgYnV0dG9uJykudGV4dCgnUG9kY2FzdCBQbGF5ZXInKTtcbiAgICAgICAgfSxcblxuXG4gICAgICAgIC8vSGFuZGxlIHBvcHVwIGltZyBqc1xuICAgICAgICAvLyBoYW5kbGVQb3B1cGltZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgJCgnLnNpbmdsZSBhcnRpY2xlIGltZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICAgICB2YXIgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcblxuICAgICAgICAvLyAgICAgICAgICQubWFnbmlmaWNQb3B1cC5vcGVuKHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNyYzogc3JjXG4gICAgICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgIC8vICAgICAgICAgICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IHRydWUsXG4gICAgICAgIC8vICAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1pbWctbW9iaWxlJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZlcnRpY2FsRml0OiB0cnVlXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9LFxuXG4gICAgICAgIC8vSGFuZGxlIHBvcHVwIGltZyBqc1xuICAgICAgICBoYW5kbGVQb3B1cGltZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLnNpbmdsZSBhcnRpY2xlIGltZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcbiAgICAgICAgICAgICAgICBsaXR5KHNyYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy9IYW5kbGUgcG9wdXAgaW1nIGpzIGVuZCBcblxuICAgICAgICBoYW5kbGVDb250YWN0Rm9ybTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJChcIi5jb250YWN0LWZvcm0gLnRhYi1pdGVtXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgJChcIi5jb250YWN0LWZvcm0td3JhcFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICQoYC5jb250YWN0LWZvcm0td3JhcC5mb3JtLSR7JCh0aGlzKS5kYXRhKFwidGFyZ2V0XCIpfWApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB9LFxuXG5cbiAgICAgICAgaGFuZGxlVG9Ub3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgXCJmYXN0XCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhbmRsZVByaWNpbmdJdGVtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKFwiLml0ZW0tcHJpY2VcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRJbWFnZUNvbXBhcmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoXCIucmVhZGVyLW1vZGUtaW1hZ2UtY29tcGFyZVwiKS50d2VudHl0d2VudHkoe1xuICAgICAgICAgICAgICAgIC8vICBIb3cgbXVjaCBvZiB0aGUgYmVmb3JlIGltYWdlIGlzIHZpc2libGUgd2hlbiB0aGUgcGFnZSBsb2Fkc1xuICAgICAgICAgICAgICAgIGRlZmF1bHRfb2Zmc2V0X3BjdDogMC41LFxuXG4gICAgICAgICAgICAgICAgLy8gbGFiZWwgdGV4dFxuICAgICAgICAgICAgICAgIGJlZm9yZV9sYWJlbDogXCJHZW5lcmFsIFZpZXdcIixcbiAgICAgICAgICAgICAgICBhZnRlcl9sYWJlbDogXCJSZWFkZXIgTW9kZSBWaWV3XCIsXG5cbiAgICAgICAgICAgICAgICAvL292ZXJsYXlcbiAgICAgICAgICAgICAgICBub19vdmVybGF5OiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2hhbmdlRHJhY3VsYUhlcm9JbWFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSAkKFwiLmRyYWN1bGEtaGVyby1pbWFnZVwiKTtcblxuICAgICAgICAgICAgaWYgKCFpbWFnZS5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlU3JjID0gaW1hZ2UuYXR0cihcInNyY1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0RhcmsgPSBpbWFnZVNyYy5pbmNsdWRlcyhcImhlcm8tZGFya1wiKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5hdHRyKFxuICAgICAgICAgICAgICAgICAgICBcInNyY1wiLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNyYy5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEYXJrID8gXCJoZXJvLWRhcmtcIiA6IFwiaGVyby1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEYXJrID8gXCJoZXJvLWxpZ2h0XCIgOiBcImhlcm8tZGFya1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgJChcIi5tb2RlLWJ0blwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkKGAubW9kZS1idG4ubW9kZS0ke2lzRGFyayA/IFwibGlnaHRcIiA6IFwiZGFya1wifWApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlQWZmaWxpYXRlRm9ybTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyIGZhaWxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBQcm9kdWN0IHNlbGVjdGlvblxuICAgICAgICAgICAgbGV0IHByb2R1Y3RzID0gW107XG4gICAgICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddOmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIXByb2R1Y3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTWV0aG9kcyBTZWxlY3Rpb25cbiAgICAgICAgICAgIGxldCBtZXRob2RzID0gW107XG5cbiAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG1ldGhvZHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIW1ldGhvZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9ib290c3RyYXAgdmFsaWRhdGlvblxuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICQodGhpcykuZ2V0KDApO1xuXG4gICAgICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICQoZm9ybSkuYWRkQ2xhc3MoXCJ3YXMtdmFsaWRhdGVkXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWZhaWxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSAkKFwiI25hbWVcIikudmFsKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWwgPSAkKFwiI2VtYWlsXCIpLnZhbCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlbWFpbCA9ICQoXCIjcGVtYWlsXCIpLnZhbCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRvbWFpbiA9ICQoXCIjZG9tYWluXCIpLnZhbCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpc3RpY3MgPSAkKFwiI3N0YXRpc3RpY3NcIikudmFsKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbiA9ICQoXG4gICAgICAgICAgICAgICAgICAgIFwiI3Byb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICkudmFsKCk7XG5cbiAgICAgICAgICAgICAgICB3cC5hamF4LnNlbmQoXCJhZmZpbGlhdGVfcmVnaXN0ZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVtYWlsOiBwZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21haW46IGRvbWFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IG1ldGhvZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aXN0aWNzOiBzdGF0aXN0aWNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbjogcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNzdWJtaXRcIikuZmluZChcIi5mYS1zcGlubmVyXCIpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNhZmZpbGlhdGUtcmVnaXN0ZXItZm9ybVwiKS5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIubWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjc3VibWl0XCIpLmZpbmQoXCIuZmEtc3Bpbm5lclwiKS5hZGRDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBoYW5kbGVQcm9kdWN0Q2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJChcIltuYW1lPSdwcm9kdWN0W10nXTpjaGVja2VkXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlTWV0aG9kQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJChcIltuYW1lPSdtZXRob2RbXSddOmNoZWNrZWRcIikubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gaGFuZGxlTW9kYWxWaWRlbzogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gYGA7XG4gICAgICAgIC8vICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gJChcIi5oZXJvLWhvdy1idXR0XCIpO1xuICAgICAgICAvLyAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmQobW9kYWxDb250ZW50KTtcblxuXG4gICAgICAgIC8vIH0sXG5cbiAgICAgICAgLy8gaGFuZGxlTW9kYWxWaWRlb0Nsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gJChcIi5oZXJvLWhvdy1idXR0XCIpLmNsb3Nlc3QoJyNzdGF0aWNCYWNrZHJvcCcpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGFyZ2V0RWxlbWVudCk7XG4gICAgICAgIC8vICAgICB0YXJnZXRFbGVtZW50LmVtcHR5KCk7XG5cbiAgICAgICAgLy8gfSxcblxuICAgIH07XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWxpZ2h0Ym94XScsIGxpdHkpO1xuICAgIC8vbW9iaWxlIG1lbnUgY2xvc2UganNcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0ICRtZW51ID0gJCgnLm1vYmlsZS1tZW51Jyk7XG4gICAgICAgIGNvbnN0ICRjbG9zZUJ0biA9ICQoJyNjbG9zZV9idG4nKTtcbiAgICAgICAgY29uc3QgJHRvZ2dsZU1lbnVCdG4gPSAkKCcjbWVudS10b2dnbGUnKTtcbiAgICAgICAgJHRvZ2dsZU1lbnVCdG4uY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJG1lbnUuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoISRtZW51LmlzKGUudGFyZ2V0KSAmJiAkbWVudS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCAmJiAhJHRvZ2dsZU1lbnVCdG4uaXMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgJG1lbnUucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICRjbG9zZUJ0bi5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkbWVudS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG5cbiAgICAvLyBlYWNmNyBwcmV2aWV3IGpzIHN0YXJ0XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBIYW5kbGUgU2hvdyBDb2RlIGJ1dHRvbiBjbGlja1xuICAgICAgICAkKFwiLnNob3ctYnV0dG9uc1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuZGF0YShcImluZGV4XCIpOyAvLyBHZXQgdGhlIGluZGV4IGZyb20gdGhlIGRhdGEgYXR0cmlidXRlXG4gICAgICAgICAgICB2YXIgJGZvcm1BcmVhID0gJCgnLmZvcm0tYXJlYVtkYXRhLWluZGV4PVwiJyArIGluZGV4ICsgJ1wiXScpO1xuICAgICAgICAgICAgdmFyICRmb3JtQ29kZUNvbnRhaW5lciA9ICRmb3JtQXJlYS5maW5kKFwiLmZvcm0tY29kZVwiKTtcbiAgICAgICAgICAgIHZhciAkZWFjZjdGb3JtID0gJGZvcm1BcmVhLmZpbmQoXCIuZWFjZjctZm9ybVwiKTtcbiAgICAgICAgICAgIHZhciAkY29weUJ1dHRvbiA9ICRmb3JtQXJlYS5maW5kKFwiLmNvcHktYnV0dG9uc1wiKTtcbiAgICAgICAgICAgIHZhciAkc2hvd0J1dHRvbiA9ICQodGhpcyk7IC8vIEN1cnJlbnQgU2hvdyBDb2RlIGJ1dHRvblxuXG4gICAgICAgICAgICAvLyBUb2dnbGUgdmlzaWJpbGl0eSBvZiB0aGUgZm9ybSBjb2RlIGFuZCBhc3NvY2lhdGVkIGVsZW1lbnRzXG4gICAgICAgICAgICBpZiAoJGZvcm1Db2RlQ29udGFpbmVyLmlzKFwiOnZpc2libGVcIikpIHtcbiAgICAgICAgICAgICAgICAkZm9ybUNvZGVDb250YWluZXIuaGlkZSgpO1xuICAgICAgICAgICAgICAgICRlYWNmN0Zvcm0uc2hvdygpO1xuICAgICAgICAgICAgICAgICRjb3B5QnV0dG9uLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkc2hvd0J1dHRvbi5odG1sKCc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNvZGVcIj48L2k+IFNob3cgQ29kZScpOyAvLyBDaGFuZ2UgdGV4dCB0byBTaG93IENvZGVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGZvcm1Db2RlQ29udGFpbmVyLnNob3coKTtcbiAgICAgICAgICAgICAgICAkZWFjZjdGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkY29weUJ1dHRvbi5zaG93KCk7XG4gICAgICAgICAgICAgICAgJHNob3dCdXR0b24uaHRtbCgnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jb2RlXCI+PC9pPiBIaWRlIENvZGUnKTsgLy8gQ2hhbmdlIHRleHQgdG8gSGlkZSBDb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEhhbmRsZSBDb3B5IENvZGUgYnV0dG9uIGNsaWNrXG4gICAgICAgICQoXCIuY29weS1idXR0b25zXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5kYXRhKFwiaW5kZXhcIik7IC8vIEdldCB0aGUgaW5kZXggZnJvbSB0aGUgZGF0YSBhdHRyaWJ1dGVcbiAgICAgICAgICAgIHZhciAkZm9ybUFyZWEgPSAkKCcuZm9ybS1hcmVhW2RhdGEtaW5kZXg9XCInICsgaW5kZXggKyAnXCJdJyk7XG4gICAgICAgICAgICB2YXIgY29kZVRleHQgPSAkZm9ybUFyZWEuZmluZChcIi5mb3JtLWNvZGVcIikudGV4dCgpLnRyaW0oKTtcblxuICAgICAgICAgICAgY29weVRvQ2xpcGJvYXJkKGNvZGVUZXh0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSGFuZGxlIGNvZGUgY29udGVudCBjbGljayB0byBjb3B5IGFuZCBzZWxlY3QgYWxsXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuZm9ybS1jb2RlIGNvZGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvZGVUZXh0ID0gJCh0aGlzKS50ZXh0KCkudHJpbSgpO1xuXG4gICAgICAgICAgICAvLyBTZWxlY3QgYWxsIHRleHQgaW4gdGhlIGNvZGUgYmxvY2tcbiAgICAgICAgICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcyk7XG4gICAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcblxuICAgICAgICAgICAgLy8gQ29weSB0aGUgY29kZSB0byB0aGUgY2xpcGJvYXJkXG4gICAgICAgICAgICBjb3B5VG9DbGlwYm9hcmQoY29kZVRleHQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb3B5IHRvIGNsaXBib2FyZCBmdW5jdGlvblxuICAgICAgICBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQodGV4dCkge1xuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5jbGlwYm9hcmQpIHtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkZvcm0gY29kZSBjb3BpZWQgdG8gY2xpcGJvYXJkIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY29weSBjb2RlOiBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrIGZvciB1bnN1cHBvcnRlZCBDbGlwYm9hcmQgQVBJXG4gICAgICAgICAgICAgICAgdmFyIHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICAgICAgICAgIHRleHRBcmVhLnZhbHVlID0gdGV4dDtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgICAgICAgICAgICAgICB0ZXh0QXJlYS5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3VjY2Vzc2Z1bCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3NmdWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRm9ybSBjb2RlIGNvcGllZCB0byBjbGlwYm9hcmQhXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJDb3B5IGZhaWxlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJVbmFibGUgdG8gY29weSB0ZXh0LlwiKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBlYWNmNyBwcmV2aWV3IGpzIGVuZFxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcbn0pKGpRdWVyeSk7XG5cblxuLy8gbGV0ICRpdGVtcyA9ICQoJy5zbGlkZXItbWFpbiAuc2xpZGVyLWl0ZW0gLml0ZW0nKTtcbi8vIGxldCAkbmV4dCA9ICQoJyNuZXh0Jyk7XG4vLyBsZXQgJHByZXYgPSAkKCcjcHJldicpO1xuXG4vLyBsZXQgYWN0aXZlID0gMztcbi8vIGxldCBhdXRvU2xpZGVJbnRlcnZhbDtcblxuLy8gZnVuY3Rpb24gbG9hZFNob3coKSB7XG4vLyAgICAgbGV0IHN0dCA9IDA7XG5cbi8vICAgICAvLyBTZXR0aW5nIHN0eWxlIGZvciB0aGUgYWN0aXZlIGl0ZW1cbi8vICAgICAkaXRlbXMuZXEoYWN0aXZlKS5jc3Moe1xuLy8gICAgICAgICB0cmFuc2Zvcm06ICdub25lJyxcbi8vICAgICAgICAgekluZGV4OiAxLFxuLy8gICAgICAgICBmaWx0ZXI6ICdub25lJyxcbi8vICAgICAgICAgb3BhY2l0eTogMVxuLy8gICAgIH0pO1xuXG4vLyAgICAgLy8gRm9yIGl0ZW1zIGFmdGVyIHRoZSBhY3RpdmUgaXRlbVxuLy8gICAgIGZvciAobGV0IGkgPSBhY3RpdmUgKyAxOyBpIDwgJGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgIHN0dCsrO1xuLy8gICAgICAgICAkaXRlbXMuZXEoaSkuY3NzKHtcbi8vICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHsxMjAgKiBzdHR9cHgpIHNjYWxlKCR7MSAtIDAuMiAqIHN0dH0pIHBlcnNwZWN0aXZlKDE2cHgpIHJvdGF0ZVkoLTFkZWcpYCxcbi8vICAgICAgICAgICAgIHpJbmRleDogLXN0dCxcbi8vICAgICAgICAgICAgIGZpbHRlcjogJ2JsdXIoNXB4KScsXG4vLyAgICAgICAgICAgICBvcGFjaXR5OiBzdHQgPiAyID8gMCA6IDAuNlxuLy8gICAgICAgICB9KTtcbi8vICAgICB9XG5cbi8vICAgICAvLyBSZXNldCBgc3R0YCBmb3IgaXRlbXMgYmVmb3JlIHRoZSBhY3RpdmUgaXRlbVxuLy8gICAgIHN0dCA9IDA7XG4vLyAgICAgZm9yIChsZXQgaSA9IGFjdGl2ZSAtIDE7IGkgPj0gMDsgaS0tKSB7XG4vLyAgICAgICAgIHN0dCsrO1xuLy8gICAgICAgICAkaXRlbXMuZXEoaSkuY3NzKHtcbi8vICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHstMTIwICogc3R0fXB4KSBzY2FsZSgkezEgLSAwLjIgKiBzdHR9KSBwZXJzcGVjdGl2ZSgxNnB4KSByb3RhdGVZKDFkZWcpYCxcbi8vICAgICAgICAgICAgIHpJbmRleDogLXN0dCxcbi8vICAgICAgICAgICAgIGZpbHRlcjogJ2JsdXIoNXB4KScsXG4vLyAgICAgICAgICAgICBvcGFjaXR5OiBzdHQgPiAyID8gMCA6IDAuNlxuLy8gICAgICAgICB9KTtcbi8vICAgICB9XG4vLyB9XG4vLyBsb2FkU2hvdygpO1xuXG4vLyAkbmV4dC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbi8vICAgICBzdG9wQXV0b1NsaWRlKCk7XG4vLyAgICAgYWN0aXZlID0gYWN0aXZlICsgMSA8ICRpdGVtcy5sZW5ndGggPyBhY3RpdmUgKyAxIDogMDtcbi8vICAgICBsb2FkU2hvdygpO1xuLy8gICAgIHN0YXJ0QXV0b1NsaWRlKCk7XG4vLyB9KTtcblxuLy8gJHByZXYub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4vLyAgICAgc3RvcEF1dG9TbGlkZSgpO1xuLy8gICAgIGFjdGl2ZSA9IGFjdGl2ZSAtIDEgPj0gMCA/IGFjdGl2ZSAtIDEgOiAkaXRlbXMubGVuZ3RoIC0gMTtcbi8vICAgICBsb2FkU2hvdygpO1xuLy8gICAgIHN0YXJ0QXV0b1NsaWRlKCk7XG4vLyB9KTtcblxuLy8gLy8gQXV0byBzbGlkZSBmdW5jdGlvblxuLy8gZnVuY3Rpb24gc3RhcnRBdXRvU2xpZGUoKSB7XG4vLyAgICAgYXV0b1NsaWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbi8vICAgICAgICAgYWN0aXZlID0gYWN0aXZlICsgMSA8ICRpdGVtcy5sZW5ndGggPyBhY3RpdmUgKyAxIDogMDtcbi8vICAgICAgICAgbG9hZFNob3coKTtcbi8vICAgICB9LCAzMDAwKTtcbi8vIH1cblxuLy8gLy8gU3RvcCBhdXRvIHNsaWRlIG9uIHVzZXIgaW50ZXJhY3Rpb25cbi8vIGZ1bmN0aW9uIHN0b3BBdXRvU2xpZGUoKSB7XG4vLyAgICAgY2xlYXJJbnRlcnZhbChhdXRvU2xpZGVJbnRlcnZhbCk7XG4vLyB9XG5cbi8vIC8vIFN0YXJ0IGF1dG8tc2xpZGUgd2hlbiB0aGUgcGFnZSBsb2Fkc1xuLy8gc3RhcnRBdXRvU2xpZGUoKTtcblxuIl0sIm5hbWVzIjpbIiQiLCJhcHAiLCJpbml0Iiwib24iLCJoYW5kbGVTd2l0Y2hlciIsImhhbmRsZUxpY2Vuc2VTd2l0Y2hlciIsImUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaGFzQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsImxpY2Vuc2UiLCJkYXRhIiwiY29uY2F0IiwiZG9jdW1lbnQiLCJyZWFkeSIsImpRdWVyeSIsImJhbm5lciIsInJlbW92ZSIsImNvdW50ZG93biIsImZpbmQiLCJ0aW1lciIsImxlbmd0aCIsIlNFQ09ORCIsIk1JTlVURSIsIkhPVVIiLCJEQVkiLCJwYWRaZXJvIiwibnVtIiwiZm9ybWF0VGltZSIsImRpc3RhbmNlIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJ1cGRhdGVUaW1lciIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiY291bnREb3duRGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiY2xlYXJJbnRlcnZhbCIsIngiLCJodG1sIiwic2V0SXRlbSIsInNldEludGVydmFsIiwiaW5pdFRlc3RpbW9uaWFsU2xpZGVyIiwiaW5pdEZ1bkZhY3RDb3VudGVyIiwiaW5pdEZpeGRIZWFkZXIiLCJoYW5kbGVDb250YWN0Rm9ybSIsImhhbmRsZVBvcHVwaW1nIiwiaGFuZGxlVG9Ub3AiLCJoYW5kbGVQcmljaW5nSXRlbSIsImluaXRJbWFnZUNvbXBhcmUiLCJjaGFuZ2VEcmFjdWxhSGVyb0ltYWdlIiwiaGFuZGxlQWZmaWxpYXRlRm9ybSIsImhhbmRsZVByb2R1Y3RDaGFuZ2UiLCJoYW5kbGVNZXRob2RDaGFuZ2UiLCJvcGVuU2VhcmNoIiwiY2FuY2VsU2VhcmNoIiwiaGFuZGxlQ2hhbmdlRG90VGV4dCIsImZvY3VzIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXJyb3dzIiwiYXV0b3BsYXlTcGVlZCIsInNwZWVkIiwiY29udGVudFBhZGRpbmciLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJkb3RzIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwidmVydGljYWwiLCJjb3VudGVyVXAiLCJkZWxheSIsInRpbWUiLCJsYXN0U2Nyb2xsVG9wIiwiZml4ZWRoZWFkZXIiLCJ3aW5kb3ciLCJzY3JvbGwiLCJjdXJyZW50U2Nyb2xsIiwic2Nyb2xsVG9wIiwiY2xpY2siLCJzcmMiLCJhdHRyIiwibGl0eSIsImFuaW1hdGUiLCJ0d2VudHl0d2VudHkiLCJkZWZhdWx0X29mZnNldF9wY3QiLCJiZWZvcmVfbGFiZWwiLCJhZnRlcl9sYWJlbCIsIm5vX292ZXJsYXkiLCJpbWFnZSIsImltYWdlU3JjIiwiaXNEYXJrIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwiZmFpbGVkIiwicHJvZHVjdHMiLCJlYWNoIiwicHVzaCIsInZhbCIsIm1ldGhvZHMiLCJmb3JtIiwiZ2V0IiwiY2hlY2tWYWxpZGl0eSIsIm5hbWUiLCJlbWFpbCIsInBlbWFpbCIsImRvbWFpbiIsInN0YXRpc3RpY3MiLCJwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uIiwid3AiLCJhamF4Iiwic2VuZCIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwiaGlkZSIsInNob3ciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjb21wbGV0ZSIsIiRtZW51IiwiJGNsb3NlQnRuIiwiJHRvZ2dsZU1lbnVCdG4iLCJpcyIsInRhcmdldCIsImhhcyIsImluZGV4IiwiJGZvcm1BcmVhIiwiJGZvcm1Db2RlQ29udGFpbmVyIiwiJGVhY2Y3Rm9ybSIsIiRjb3B5QnV0dG9uIiwiJHNob3dCdXR0b24iLCJjb2RlVGV4dCIsInRyaW0iLCJjb3B5VG9DbGlwYm9hcmQiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0aGVuIiwiYWxlcnQiLCJlcnIiLCJ0ZXh0QXJlYSIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==