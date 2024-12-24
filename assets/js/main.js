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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN5SixXQUFXLENBQUMsTUFBTSxDQUFDO1VBQzdDLElBQUlELFVBQVUsRUFBRTtZQUNaUixLQUFLLENBQUMsZ0NBQWdDLENBQUM7VUFDM0MsQ0FBQyxNQUFNO1lBQ0hBLEtBQUssQ0FBQyxjQUFjLENBQUM7VUFDekI7UUFDSixDQUFDLENBQUMsT0FBT0MsR0FBRyxFQUFFO1VBQ1ZELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztRQUNqQyxDQUFDLFNBQVM7VUFDTmhKLFFBQVEsQ0FBQ3FKLElBQUksQ0FBQ0ssV0FBVyxDQUFDUixRQUFRLENBQUM7UUFDdkM7TUFDSjtJQUNKO0VBQ0osQ0FBQyxDQUFDO0VBQ0Q7RUFDRGxLLENBQUMsQ0FBQ2dCLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUNoQixHQUFHLENBQUNDLElBQUksQ0FBQztBQUMvQixDQUFDLEVBQUVnQixNQUFNLENBQUM7O0FBR1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL2NvbXBvbmVudHMvcHJpY2luZy5qcyIsIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lci5qcyIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiOyhmdW5jdGlvbiAoJCkge1xyXG4gICAgY29uc3QgYXBwID0ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9IYW5kbGUgcHJpY2luZyBzd2l0Y2hlclxyXG4gICAgICAgICAgICAkKCcucHJpY2luZy1zd2l0Y2hlcicpLm9uKCdjbGljaycsIGFwcC5oYW5kbGVTd2l0Y2hlcik7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgbGljZW5zZSBzd2l0Y2hlclxyXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24taXRlbScpLm9uKCdjbGljaycsIGFwcC5oYW5kbGVMaWNlbnNlU3dpdGNoZXIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVN3aXRjaGVyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdhbm51YWwgbGlmZXRpbWUnKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpID8gJ2FubnVhbCcgOiAnbGlmZXRpbWUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlTGljZW5zZVN3aXRjaGVyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlJykudGV4dCgkKHRoaXMpLnRleHQoKSk7XHJcblxyXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24taXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaWNlbnNlID0gJCh0aGlzKS5kYXRhKCdsaWNlbnNlJyk7XHJcbiAgICAgICAgICAgICQoJy5wcmljZS10ZXh0JykucmVtb3ZlQ2xhc3MoJ2xpY2Vuc2UtMSBsaWNlbnNlLTIgbGljZW5zZS01IGxpY2Vuc2UtMTAwIGxpY2Vuc2UtdW5saW1pdGVkICcpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoYGxpY2Vuc2UtJHtsaWNlbnNlfWApO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoYXBwLmluaXQpO1xyXG5cclxufSkoalF1ZXJ5KTsiLCIvLyA7KGZ1bmN0aW9uICgkKSB7XHJcbi8vICAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgY29uc3QgYmFubmVyID0gJCgnI2hlYWRlci1zdGlja3ktYmFubmVyLCAjaGFsbG93ZWVuLW9mZmVycywgI2JsYWNrLWZyaWRheS1vZmZlcnMnKTtcclxuXHJcbi8vICAgICAgICAgLy8gQ2xvc2UgYmFubmVyXHJcbi8vICAgICAgICAgYmFubmVyLm9uKCdjbGljaycsICcuYmFubmVyLWNsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgICAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXInKS5yZW1vdmUoKTtcclxuLy8gICAgICAgICB9KTtcclxuXHJcbi8vICAgICAgICAgLy8gQmFubmVyIGNvdW50ZG93blxyXG4vLyAgICAgICAgIGNvbnN0IGNvdW50ZG93biA9IGJhbm5lci5maW5kKCcuYmFubmVyLWNvdW50ZG93bicpO1xyXG4vLyAgICAgICAgIGNvbnN0IHRpbWVyID0gYmFubmVyLmZpbmQoJy50aW1lcicpO1xyXG5cclxuLy8gICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xyXG4vLyAgICAgICAgICAgICBjb25zdCBTRUNPTkQgPSAxMDAwO1xyXG4vLyAgICAgICAgICAgICBjb25zdCBNSU5VVEUgPSA2MCAqIFNFQ09ORDtcclxuLy8gICAgICAgICAgICAgY29uc3QgSE9VUiA9IDYwICogTUlOVVRFO1xyXG4vLyAgICAgICAgICAgICBjb25zdCBEQVkgPSAyNCAqIEhPVVI7XHJcblxyXG4vLyAgICAgICAgICAgICBjb25zdCBmb3JtYXRUaW1lID0gKGRpc3RhbmNlKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvIERBWSk7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgREFZKSAvIEhPVVIpO1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgSE9VUikgLyBNSU5VVEUpO1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgTUlOVVRFKSAvIFNFQ09ORCk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cImRheXNcIj4ke2RheXN9ZDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJob3Vyc1wiPiR7aG91cnN9aDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJtaW51dGVzXCI+JHttaW51dGVzfW08L3NwYW4+IDxzcGFuIGNsYXNzPVwic2Vjb25kc1wiPiR7c2Vjb25kc31zPC9zcGFuPmA7XHJcbi8vICAgICAgICAgICAgIH07XHJcblxyXG4vLyAgICAgICAgICAgICBjb25zdCB1cGRhdGVUaW1lciA9ICgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4vLyAgICAgICAgICAgICAgICAgLy9sZXQgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgOC41ICogREFZO1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSgnMjAyNC0xMi0wNVQyMzo1OTowMCcpLmdldFRpbWUoKTtcclxuXHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuLy8gICAgICAgICAgICAgICAgIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JmX29mZmVyc190aW1lJykpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb3VudERvd25EYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JmX29mZmVyc190aW1lJyk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBjb3VudERvd25EYXRlIC0gbm93O1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgdGltZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdiZl9vZmZlcnNfdGltZScpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICB0aW1lci5odG1sKGZvcm1hdFRpbWUoZGlzdGFuY2UpKTtcclxuXHJcbi8vICAgICAgICAgICAgICAgICAvLyBTYXZlIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxyXG4vLyAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JmX29mZmVyc190aW1lJywgY291bnREb3duRGF0ZSk7XHJcbi8vICAgICAgICAgICAgIH07XHJcblxyXG4vLyAgICAgICAgICAgICBjb25zdCB4ID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZXIsIDEwMDApO1xyXG4vLyAgICAgICAgICAgICB1cGRhdGVUaW1lcigpOyAvLyBDYWxsIGltbWVkaWF0ZWx5LCBkb27igJl0IHdhaXQgZm9yIHRoZSBmaXJzdCBpbnRlcnZhbCB0byBleGVjdXRlXHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gfSkoalF1ZXJ5KTtcclxuXHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBiYW5uZXIgPSAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXIsICNoYWxsb3dlZW4tb2ZmZXJzLCAjYmxhY2stZnJpZGF5LW9mZmVycycpO1xyXG5cclxuICAgICAgICAvLyBDbG9zZSBiYW5uZXJcclxuICAgICAgICBiYW5uZXIub24oJ2NsaWNrJywgJy5iYW5uZXItY2xvc2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJyNoZWFkZXItc3RpY2t5LWJhbm5lcicpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBCYW5uZXIgY291bnRkb3duXHJcbiAgICAgICAgY29uc3QgY291bnRkb3duID0gYmFubmVyLmZpbmQoJy5iYW5uZXItY291bnRkb3duJyk7XHJcbiAgICAgICAgY29uc3QgdGltZXIgPSBiYW5uZXIuZmluZCgnLnRpbWVyJyk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudGRvd24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFNFQ09ORCA9IDEwMDA7XHJcbiAgICAgICAgICAgIGNvbnN0IE1JTlVURSA9IDYwICogU0VDT05EO1xyXG4gICAgICAgICAgICBjb25zdCBIT1VSID0gNjAgKiBNSU5VVEU7XHJcbiAgICAgICAgICAgIGNvbnN0IERBWSA9IDI0ICogSE9VUjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBhZFplcm8gPSAobnVtKSA9PiAobnVtIDwgMTAgPyBgMCR7bnVtfWAgOiBudW0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZm9ybWF0VGltZSA9IChkaXN0YW5jZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IHBhZFplcm8oTWF0aC5mbG9vcihkaXN0YW5jZSAvIERBWSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBwYWRaZXJvKE1hdGguZmxvb3IoKGRpc3RhbmNlICUgREFZKSAvIEhPVVIpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBwYWRaZXJvKE1hdGguZmxvb3IoKGRpc3RhbmNlICUgSE9VUikgLyBNSU5VVEUpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBwYWRaZXJvKE1hdGguZmxvb3IoKGRpc3RhbmNlICUgTUlOVVRFKSAvIFNFQ09ORCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNvdW50ZG93blwiPjxzcGFuIGNsYXNzPVwiZGF5c1wiPiR7ZGF5c308L3NwYW4+IDxwPkRheTwvcD48L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRkb3duXCI+PHNwYW4gY2xhc3M9XCJob3Vyc1wiPiR7aG91cnN9PC9zcGFuPiA8cD5Ib3VyPC9wPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj48c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIj4ke21pbnV0ZXN9PC9zcGFuPiA8cD5NaW48L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRkb3duXCI+PHNwYW4gY2xhc3M9XCJzZWNvbmRzXCI+JHtzZWNvbmRzfTwvc3Bhbj4gPHA+U2VjPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVRpbWVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKCcyMDI0LTEyLTA1VDIzOjU5OjAwJykuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JmX29mZmVyc190aW1lJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudERvd25EYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JmX29mZmVyc190aW1lJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdiZl9vZmZlcnNfdGltZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhbm5lci5yZW1vdmUoKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh4KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVyLmh0bWwoZm9ybWF0VGltZShkaXN0YW5jZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnLCBjb3VudERvd25EYXRlKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVyKCk7IFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSkoalF1ZXJ5KTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vY29tcG9uZW50cy9wcmljaW5nXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9zdGlja3ktYmFubmVyXCI7XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICAgIGNvbnN0IGFwcCA9IHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vSW5pdCBUZXN0aW1vbmlhbCBTbGlkZXJcclxuICAgICAgICAgICAgYXBwLmluaXRUZXN0aW1vbmlhbFNsaWRlcigpO1xyXG5cclxuICAgICAgICAgICAgLy9Jbml0IEZ1biBGYWN0IENvdW50ZXJcclxuICAgICAgICAgICAgYXBwLmluaXRGdW5GYWN0Q291bnRlcigpO1xyXG5cclxuICAgICAgICAgICAgLy9Jbml0IHNjcm9sbGluZyBoZWFkZXJcclxuICAgICAgICAgICAgYXBwLmluaXRGaXhkSGVhZGVyKCk7XHJcblxyXG4gICAgICAgICAgICAvL0hhbmRsZSBjb250YWN0IGZvcm0gdGFic1xyXG4gICAgICAgICAgICAkKFwiLmNvbnRhY3QtZm9ybSAudGFiLWl0ZW1cIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlQ29udGFjdEZvcm0pO1xyXG4gICAgICAgICAgICAvL0hhbmRsZSBtb2RhbCB2aWRlb1xyXG4gICAgICAgICAgICAvLyAkKFwiI29wZW4tbW9kYWxcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlTW9kYWxWaWRlbyk7XHJcbiAgICAgICAgICAgIC8vICQoXCIubW9kYWwtYnRuLWNsb3NlXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZU1vZGFsVmlkZW9DbG9zZSk7XHJcblxyXG4gICAgICAgICAgICAvL0hhbmRsZSBwb3B1cCBpbWdcclxuICAgICAgICAgICAgYXBwLmhhbmRsZVBvcHVwaW1nKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy9IYW5kbGUgdG8gdG9wIGJ1dHRvblxyXG4gICAgICAgICAgICAkKFwiLnRvLXRvcFwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVUb1RvcCk7XHJcblxyXG4gICAgICAgICAgICAvL2hhbmRsZSBwcmljaW5nIGl0ZW0gY2xpY2tcclxuICAgICAgICAgICAgJChcIi5pdGVtLXByaWNlXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZVByaWNpbmdJdGVtKTtcclxuXHJcbiAgICAgICAgICAgIC8vSGFuZGxlIEltYWdlIENvbXBhcmUgb24gUmVhZGVyIE1vZGUgcGFnZVxyXG4gICAgICAgICAgICBhcHAuaW5pdEltYWdlQ29tcGFyZSgpO1xyXG5cclxuICAgICAgICAgICAgLy9DaGFuZ2UgRHJhY3VsYSBIZXJvIEltYWdlXHJcbiAgICAgICAgICAgIGFwcC5jaGFuZ2VEcmFjdWxhSGVyb0ltYWdlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgQWZmaWxpYXRlIEZvcm1cclxuICAgICAgICAgICAgJChcIiNhZmZpbGlhdGUtcmVnaXN0ZXItZm9ybVwiKS5vbihcInN1Ym1pdFwiLCBhcHAuaGFuZGxlQWZmaWxpYXRlRm9ybSk7XHJcblxyXG4gICAgICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLm9uKFwiY2hhbmdlXCIsIGFwcC5oYW5kbGVQcm9kdWN0Q2hhbmdlKTtcclxuICAgICAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLm9uKFwiY2hhbmdlXCIsIGFwcC5oYW5kbGVNZXRob2RDaGFuZ2UpO1xyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlIFNlYXJjaFxyXG4gICAgICAgICAgICAkKFwiLnNlYXJjaC1idG5cIikub24oXCJjbGlja1wiLCBhcHAub3BlblNlYXJjaCk7XHJcbiAgICAgICAgICAgICQoXCIuY2VuY2VsLWJ0blwiKS5vbihcImNsaWNrXCIsIGFwcC5jYW5jZWxTZWFyY2gpO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvcGVuU2VhcmNoOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKFwiLnNlYXJjaC1mb3JtXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAgICAgJChcIi5zZWFyY2gtZmllbGRcIikuZm9jdXMoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjYW5jZWxTZWFyY2g6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQoXCIuc2VhcmNoLWZvcm1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5pdFRlc3RpbW9uaWFsU2xpZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIEhvbWUgdGVzdGltb25pYWwgc2xpZGVyXHJcbiAgICAgICAgICAgICQoXCIuc2luZ2xlLXRlc3RpbW9uaWFsLWl0ZW1zXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50UGFkZGluZzogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiLnJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcclxuICAgICAgICAgICAgICAgIC8vIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vZ29vZ2xlIGRyaXZlXHJcbiAgICAgICAgICAgICQoXCIudGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiLnJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vdGVzdGltb25pYWwtaXRlbXMtY2Y3XHJcbiAgICAgICAgICAgICQoXCIudGVzdGltb25pYWwtaXRlbXMtY2Y3XCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIi5yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIi5sZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL3ByZXZpZXcgZWFjZjctdGVzdGltb25pYWwtaXRlbXNcclxuICAgICAgICAgICAgJChcIi5lYWNmNy10ZXN0aW1vbmlhbC1pdGVtc1wiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCIuZWFjZjctcmlnaHRcIixcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCIuZWFjZjctbGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9hYm91dCBzbGlkZXJcclxuICAgICAgICAgICAgJChcIi5zbGlkZXItbWFpblwiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIi51cFwiLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIi5kb3duXCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJChcIi5jb21wYXQtc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2RyYWN1bGEgc2xpZGVyXHJcbiAgICAgICAgICAgICQoXCIuZHJhY3VsYS1zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0RnVuRmFjdENvdW50ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIi5jb3VudGVyXCIpLmNvdW50ZXJVcCh7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMTYsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiAxNTAwLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvL3Njcm9sbGluZyBoZWFkZXIganNcclxuICAgICAgICBpbml0Rml4ZEhlYWRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpeGVkaGVhZGVyID0gJCgnLnNpdGUtaGVhZGVyJyk7XHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U2Nyb2xsID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA+IGxhc3RTY3JvbGxUb3AgfHwgY3VycmVudFNjcm9sbCA8IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTY3JvbGwgZG93blxyXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkaGVhZGVyLnJlbW92ZUNsYXNzKCdmaXhlZC1oZWFkZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNjcm9sbCB1cFxyXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkaGVhZGVyLmFkZENsYXNzKCdmaXhlZC1oZWFkZXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsYXN0U2Nyb2xsVG9wID0gY3VycmVudFNjcm9sbCA8PSAwID8gMCA6IGN1cnJlbnRTY3JvbGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvL0hhbmRsZSBwb3B1cCBpbWcganNcclxuICAgICAgICAvLyBoYW5kbGVQb3B1cGltZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICAkKCcuc2luZ2xlIGFydGljbGUgaW1nJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIHNyYyA9ICQodGhpcykuYXR0cignc3JjJyk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgJC5tYWduaWZpY1BvcHVwLm9wZW4oe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNyYzogc3JjXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IHRydWUsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLWltZy1tb2JpbGUnLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZlcnRpY2FsRml0OiB0cnVlXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgIC8vSGFuZGxlIHBvcHVwIGltZyBqc1xyXG4gICAgICAgIGhhbmRsZVBvcHVwaW1nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5zaW5nbGUgYXJ0aWNsZSBpbWcnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcclxuICAgICAgICAgICAgICAgIGxpdHkoc3JjKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL0hhbmRsZSBwb3B1cCBpbWcganMgZW5kIFxyXG5cclxuICAgICAgICBoYW5kbGVDb250YWN0Rm9ybTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLmNvbnRhY3QtZm9ybSAudGFiLWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICAkKFwiLmNvbnRhY3QtZm9ybS13cmFwXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKGAuY29udGFjdC1mb3JtLXdyYXAuZm9ybS0keyQodGhpcykuZGF0YShcInRhcmdldFwiKX1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgaGFuZGxlVG9Ub3A6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCBcImZhc3RcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlUHJpY2luZ0l0ZW06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIi5pdGVtLXByaWNlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXRJbWFnZUNvbXBhcmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIi5yZWFkZXItbW9kZS1pbWFnZS1jb21wYXJlXCIpLnR3ZW50eXR3ZW50eSh7XHJcbiAgICAgICAgICAgICAgICAvLyAgSG93IG11Y2ggb2YgdGhlIGJlZm9yZSBpbWFnZSBpcyB2aXNpYmxlIHdoZW4gdGhlIHBhZ2UgbG9hZHNcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRfb2Zmc2V0X3BjdDogMC41LFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxhYmVsIHRleHRcclxuICAgICAgICAgICAgICAgIGJlZm9yZV9sYWJlbDogXCJHZW5lcmFsIFZpZXdcIixcclxuICAgICAgICAgICAgICAgIGFmdGVyX2xhYmVsOiBcIlJlYWRlciBNb2RlIFZpZXdcIixcclxuXHJcbiAgICAgICAgICAgICAgICAvL292ZXJsYXlcclxuICAgICAgICAgICAgICAgIG5vX292ZXJsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNoYW5nZURyYWN1bGFIZXJvSW1hZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSAkKFwiLmRyYWN1bGEtaGVyby1pbWFnZVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaW1hZ2UubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVNyYyA9IGltYWdlLmF0dHIoXCJzcmNcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0RhcmsgPSBpbWFnZVNyYy5pbmNsdWRlcyhcImhlcm8tZGFya1wiKTtcclxuICAgICAgICAgICAgICAgIGltYWdlLmF0dHIoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNyYy5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0RhcmsgPyBcImhlcm8tZGFya1wiIDogXCJoZXJvLWxpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGFyayA/IFwiaGVyby1saWdodFwiIDogXCJoZXJvLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5tb2RlLWJ0blwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICQoYC5tb2RlLWJ0bi5tb2RlLSR7aXNEYXJrID8gXCJsaWdodFwiIDogXCJkYXJrXCJ9YCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUFmZmlsaWF0ZUZvcm06IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmYWlsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByb2R1Y3Qgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIGxldCBwcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddOmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcHJvZHVjdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE1ldGhvZHMgU2VsZWN0aW9uXHJcbiAgICAgICAgICAgIGxldCBtZXRob2RzID0gW107XHJcblxyXG4gICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ106Y2hlY2tlZFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1ldGhvZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2Jvb3RzdHJhcCB2YWxpZGF0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkKHRoaXMpLmdldCgwKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgJChmb3JtKS5hZGRDbGFzcyhcIndhcy12YWxpZGF0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZmFpbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gJChcIiNuYW1lXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWwgPSAkKFwiI2VtYWlsXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVtYWlsID0gJChcIiNwZW1haWxcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb21haW4gPSAkKFwiI2RvbWFpblwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpc3RpY3MgPSAkKFwiI3N0YXRpc3RpY3NcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uID0gJChcclxuICAgICAgICAgICAgICAgICAgICBcIiNwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICkudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgd3AuYWpheC5zZW5kKFwiYWZmaWxpYXRlX3JlZ2lzdGVyXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVtYWlsOiBwZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpbjogZG9tYWluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IG1ldGhvZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpc3RpY3M6IHN0YXRpc3RpY3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb246IHByb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjc3VibWl0XCIpLmZpbmQoXCIuZmEtc3Bpbm5lclwiKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjYWZmaWxpYXRlLXJlZ2lzdGVyLWZvcm1cIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNzdWJtaXRcIikuZmluZChcIi5mYS1zcGlubmVyXCIpLmFkZENsYXNzKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVByb2R1Y3RDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0ncHJvZHVjdFtdJ106Y2hlY2tlZFwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlTWV0aG9kQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J21ldGhvZFtdJ106Y2hlY2tlZFwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIGhhbmRsZU1vZGFsVmlkZW86IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gYGA7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSAkKFwiLmhlcm8taG93LWJ1dHRcIik7XHJcbiAgICAgICAgLy8gICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kKG1vZGFsQ29udGVudCk7XHJcblxyXG5cclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICAvLyBoYW5kbGVNb2RhbFZpZGVvQ2xvc2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9ICQoXCIuaGVyby1ob3ctYnV0dFwiKS5jbG9zZXN0KCcjc3RhdGljQmFja2Ryb3AnKTtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGFyZ2V0RWxlbWVudCk7XHJcbiAgICAgICAgLy8gICAgIHRhcmdldEVsZW1lbnQuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgLy8gfSxcclxuXHJcbiAgICB9O1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWxpZ2h0Ym94XScsIGxpdHkpO1xyXG4gICAgLy9tb2JpbGUgbWVudSBjbG9zZSBqc1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0ICRtZW51ID0gJCgnLm1vYmlsZS1tZW51Jyk7XHJcbiAgICAgICAgY29uc3QgJGNsb3NlQnRuID0gJCgnI2Nsb3NlX2J0bicpO1xyXG4gICAgICAgIGNvbnN0ICR0b2dnbGVNZW51QnRuID0gJCgnI21lbnUtdG9nZ2xlJyk7XHJcbiAgICAgICAgJHRvZ2dsZU1lbnVCdG4uY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkbWVudS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICghJG1lbnUuaXMoZS50YXJnZXQpICYmICRtZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwICYmICEkdG9nZ2xlTWVudUJ0bi5pcyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICRtZW51LnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkY2xvc2VCdG4uY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkbWVudS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZWFjZjcgcHJldmlldyBqcyBzdGFydFxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEhhbmRsZSBTaG93IENvZGUgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgJChcIi5zaG93LWJ1dHRvbnNcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuZGF0YShcImluZGV4XCIpOyAvLyBHZXQgdGhlIGluZGV4IGZyb20gdGhlIGRhdGEgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIHZhciAkZm9ybUFyZWEgPSAkKCcuZm9ybS1hcmVhW2RhdGEtaW5kZXg9XCInICsgaW5kZXggKyAnXCJdJyk7XHJcbiAgICAgICAgICAgIHZhciAkZm9ybUNvZGVDb250YWluZXIgPSAkZm9ybUFyZWEuZmluZChcIi5mb3JtLWNvZGVcIik7XHJcbiAgICAgICAgICAgIHZhciAkZWFjZjdGb3JtID0gJGZvcm1BcmVhLmZpbmQoXCIuZWFjZjctZm9ybVwiKTtcclxuICAgICAgICAgICAgdmFyICRjb3B5QnV0dG9uID0gJGZvcm1BcmVhLmZpbmQoXCIuY29weS1idXR0b25zXCIpO1xyXG4gICAgICAgICAgICB2YXIgJHNob3dCdXR0b24gPSAkKHRoaXMpOyAvLyBDdXJyZW50IFNob3cgQ29kZSBidXR0b25cclxuICAgIFxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgdmlzaWJpbGl0eSBvZiB0aGUgZm9ybSBjb2RlIGFuZCBhc3NvY2lhdGVkIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIGlmICgkZm9ybUNvZGVDb250YWluZXIuaXMoXCI6dmlzaWJsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgJGZvcm1Db2RlQ29udGFpbmVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICRlYWNmN0Zvcm0uc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJGNvcHlCdXR0b24uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJHNob3dCdXR0b24uaHRtbCgnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jb2RlXCI+PC9pPiBTaG93IENvZGUnKTsgLy8gQ2hhbmdlIHRleHQgdG8gU2hvdyBDb2RlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkZm9ybUNvZGVDb250YWluZXIuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJGVhY2Y3Rm9ybS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkY29weUJ1dHRvbi5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkc2hvd0J1dHRvbi5odG1sKCc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNvZGVcIj48L2k+IEhpZGUgQ29kZScpOyAvLyBDaGFuZ2UgdGV4dCB0byBIaWRlIENvZGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgLy8gSGFuZGxlIENvcHkgQ29kZSBidXR0b24gY2xpY2tcclxuICAgICAgICAkKFwiLmNvcHktYnV0dG9uc1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5kYXRhKFwiaW5kZXhcIik7IC8vIEdldCB0aGUgaW5kZXggZnJvbSB0aGUgZGF0YSBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgdmFyICRmb3JtQXJlYSA9ICQoJy5mb3JtLWFyZWFbZGF0YS1pbmRleD1cIicgKyBpbmRleCArICdcIl0nKTtcclxuICAgICAgICAgICAgdmFyIGNvZGVUZXh0ID0gJGZvcm1BcmVhLmZpbmQoXCIuZm9ybS1jb2RlXCIpLnRleHQoKS50cmltKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgY29weVRvQ2xpcGJvYXJkKGNvZGVUZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIC8vIEhhbmRsZSBjb2RlIGNvbnRlbnQgY2xpY2sgdG8gY29weSBhbmQgc2VsZWN0IGFsbFxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuZm9ybS1jb2RlIGNvZGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY29kZVRleHQgPSAkKHRoaXMpLnRleHQoKS50cmltKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gU2VsZWN0IGFsbCB0ZXh0IGluIHRoZSBjb2RlIGJsb2NrXHJcbiAgICAgICAgICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIENvcHkgdGhlIGNvZGUgdG8gdGhlIGNsaXBib2FyZFxyXG4gICAgICAgICAgICBjb3B5VG9DbGlwYm9hcmQoY29kZVRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQ29weSB0byBjbGlwYm9hcmQgZnVuY3Rpb25cclxuICAgICAgICBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQodGV4dCkge1xyXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLmNsaXBib2FyZCkge1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRm9ybSBjb2RlIGNvcGllZCB0byBjbGlwYm9hcmQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjb3B5IGNvZGU6IFwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sgZm9yIHVuc3VwcG9ydGVkIENsaXBib2FyZCBBUElcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgICAgICAgICAgICAgIHRleHRBcmVhLnZhbHVlID0gdGV4dDtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xyXG4gICAgICAgICAgICAgICAgdGV4dEFyZWEuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdWNjZXNzZnVsID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzZnVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRm9ybSBjb2RlIGNvcGllZCB0byBjbGlwYm9hcmQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQ29weSBmYWlsZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5hYmxlIHRvIGNvcHkgdGV4dC5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dEFyZWEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAgLy8gZWFjZjcgcHJldmlldyBqcyBlbmRcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxufSkoalF1ZXJ5KTtcclxuXHJcblxyXG4vLyBsZXQgJGl0ZW1zID0gJCgnLnNsaWRlci1tYWluIC5zbGlkZXItaXRlbSAuaXRlbScpO1xyXG4vLyBsZXQgJG5leHQgPSAkKCcjbmV4dCcpO1xyXG4vLyBsZXQgJHByZXYgPSAkKCcjcHJldicpO1xyXG5cclxuLy8gbGV0IGFjdGl2ZSA9IDM7XHJcbi8vIGxldCBhdXRvU2xpZGVJbnRlcnZhbDtcclxuXHJcbi8vIGZ1bmN0aW9uIGxvYWRTaG93KCkge1xyXG4vLyAgICAgbGV0IHN0dCA9IDA7XHJcblxyXG4vLyAgICAgLy8gU2V0dGluZyBzdHlsZSBmb3IgdGhlIGFjdGl2ZSBpdGVtXHJcbi8vICAgICAkaXRlbXMuZXEoYWN0aXZlKS5jc3Moe1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogJ25vbmUnLFxyXG4vLyAgICAgICAgIHpJbmRleDogMSxcclxuLy8gICAgICAgICBmaWx0ZXI6ICdub25lJyxcclxuLy8gICAgICAgICBvcGFjaXR5OiAxXHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICAvLyBGb3IgaXRlbXMgYWZ0ZXIgdGhlIGFjdGl2ZSBpdGVtXHJcbi8vICAgICBmb3IgKGxldCBpID0gYWN0aXZlICsgMTsgaSA8ICRpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgIHN0dCsrO1xyXG4vLyAgICAgICAgICRpdGVtcy5lcShpKS5jc3Moe1xyXG4vLyAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7MTIwICogc3R0fXB4KSBzY2FsZSgkezEgLSAwLjIgKiBzdHR9KSBwZXJzcGVjdGl2ZSgxNnB4KSByb3RhdGVZKC0xZGVnKWAsXHJcbi8vICAgICAgICAgICAgIHpJbmRleDogLXN0dCxcclxuLy8gICAgICAgICAgICAgZmlsdGVyOiAnYmx1cig1cHgpJyxcclxuLy8gICAgICAgICAgICAgb3BhY2l0eTogc3R0ID4gMiA/IDAgOiAwLjZcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAvLyBSZXNldCBgc3R0YCBmb3IgaXRlbXMgYmVmb3JlIHRoZSBhY3RpdmUgaXRlbVxyXG4vLyAgICAgc3R0ID0gMDtcclxuLy8gICAgIGZvciAobGV0IGkgPSBhY3RpdmUgLSAxOyBpID49IDA7IGktLSkge1xyXG4vLyAgICAgICAgIHN0dCsrO1xyXG4vLyAgICAgICAgICRpdGVtcy5lcShpKS5jc3Moe1xyXG4vLyAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7LTEyMCAqIHN0dH1weCkgc2NhbGUoJHsxIC0gMC4yICogc3R0fSkgcGVyc3BlY3RpdmUoMTZweCkgcm90YXRlWSgxZGVnKWAsXHJcbi8vICAgICAgICAgICAgIHpJbmRleDogLXN0dCxcclxuLy8gICAgICAgICAgICAgZmlsdGVyOiAnYmx1cig1cHgpJyxcclxuLy8gICAgICAgICAgICAgb3BhY2l0eTogc3R0ID4gMiA/IDAgOiAwLjZcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBsb2FkU2hvdygpO1xyXG5cclxuLy8gJG5leHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgICBzdG9wQXV0b1NsaWRlKCk7XHJcbi8vICAgICBhY3RpdmUgPSBhY3RpdmUgKyAxIDwgJGl0ZW1zLmxlbmd0aCA/IGFjdGl2ZSArIDEgOiAwO1xyXG4vLyAgICAgbG9hZFNob3coKTtcclxuLy8gICAgIHN0YXJ0QXV0b1NsaWRlKCk7XHJcbi8vIH0pO1xyXG5cclxuLy8gJHByZXYub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgICBzdG9wQXV0b1NsaWRlKCk7XHJcbi8vICAgICBhY3RpdmUgPSBhY3RpdmUgLSAxID49IDAgPyBhY3RpdmUgLSAxIDogJGl0ZW1zLmxlbmd0aCAtIDE7XHJcbi8vICAgICBsb2FkU2hvdygpO1xyXG4vLyAgICAgc3RhcnRBdXRvU2xpZGUoKTtcclxuLy8gfSk7XHJcblxyXG4vLyAvLyBBdXRvIHNsaWRlIGZ1bmN0aW9uXHJcbi8vIGZ1bmN0aW9uIHN0YXJ0QXV0b1NsaWRlKCkge1xyXG4vLyAgICAgYXV0b1NsaWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICBhY3RpdmUgPSBhY3RpdmUgKyAxIDwgJGl0ZW1zLmxlbmd0aCA/IGFjdGl2ZSArIDEgOiAwO1xyXG4vLyAgICAgICAgIGxvYWRTaG93KCk7XHJcbi8vICAgICB9LCAzMDAwKTtcclxuLy8gfVxyXG5cclxuLy8gLy8gU3RvcCBhdXRvIHNsaWRlIG9uIHVzZXIgaW50ZXJhY3Rpb25cclxuLy8gZnVuY3Rpb24gc3RvcEF1dG9TbGlkZSgpIHtcclxuLy8gICAgIGNsZWFySW50ZXJ2YWwoYXV0b1NsaWRlSW50ZXJ2YWwpO1xyXG4vLyB9XHJcblxyXG4vLyAvLyBTdGFydCBhdXRvLXNsaWRlIHdoZW4gdGhlIHBhZ2UgbG9hZHNcclxuLy8gc3RhcnRBdXRvU2xpZGUoKTtcclxuXHJcbiJdLCJuYW1lcyI6WyIkIiwiYXBwIiwiaW5pdCIsIm9uIiwiaGFuZGxlU3dpdGNoZXIiLCJoYW5kbGVMaWNlbnNlU3dpdGNoZXIiLCJlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwidG9nZ2xlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJsaWNlbnNlIiwiZGF0YSIsImNvbmNhdCIsImRvY3VtZW50IiwicmVhZHkiLCJqUXVlcnkiLCJiYW5uZXIiLCJyZW1vdmUiLCJjb3VudGRvd24iLCJmaW5kIiwidGltZXIiLCJsZW5ndGgiLCJTRUNPTkQiLCJNSU5VVEUiLCJIT1VSIiwiREFZIiwicGFkWmVybyIsIm51bSIsImZvcm1hdFRpbWUiLCJkaXN0YW5jZSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidXBkYXRlVGltZXIiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImNvdW50RG93bkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImNsZWFySW50ZXJ2YWwiLCJ4IiwiaHRtbCIsInNldEl0ZW0iLCJzZXRJbnRlcnZhbCIsImluaXRUZXN0aW1vbmlhbFNsaWRlciIsImluaXRGdW5GYWN0Q291bnRlciIsImluaXRGaXhkSGVhZGVyIiwiaGFuZGxlQ29udGFjdEZvcm0iLCJoYW5kbGVQb3B1cGltZyIsImhhbmRsZVRvVG9wIiwiaGFuZGxlUHJpY2luZ0l0ZW0iLCJpbml0SW1hZ2VDb21wYXJlIiwiY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSIsImhhbmRsZUFmZmlsaWF0ZUZvcm0iLCJoYW5kbGVQcm9kdWN0Q2hhbmdlIiwiaGFuZGxlTWV0aG9kQ2hhbmdlIiwib3BlblNlYXJjaCIsImNhbmNlbFNlYXJjaCIsImZvY3VzIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXJyb3dzIiwiYXV0b3BsYXlTcGVlZCIsInNwZWVkIiwiY29udGVudFBhZGRpbmciLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImRvdHMiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwidmVydGljYWwiLCJjb3VudGVyVXAiLCJkZWxheSIsInRpbWUiLCJsYXN0U2Nyb2xsVG9wIiwiZml4ZWRoZWFkZXIiLCJ3aW5kb3ciLCJzY3JvbGwiLCJjdXJyZW50U2Nyb2xsIiwic2Nyb2xsVG9wIiwiY2xpY2siLCJzcmMiLCJhdHRyIiwibGl0eSIsImFuaW1hdGUiLCJ0d2VudHl0d2VudHkiLCJkZWZhdWx0X29mZnNldF9wY3QiLCJiZWZvcmVfbGFiZWwiLCJhZnRlcl9sYWJlbCIsIm5vX292ZXJsYXkiLCJpbWFnZSIsImltYWdlU3JjIiwiaXNEYXJrIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwiZmFpbGVkIiwicHJvZHVjdHMiLCJlYWNoIiwicHVzaCIsInZhbCIsIm1ldGhvZHMiLCJmb3JtIiwiZ2V0IiwiY2hlY2tWYWxpZGl0eSIsIm5hbWUiLCJlbWFpbCIsInBlbWFpbCIsImRvbWFpbiIsInN0YXRpc3RpY3MiLCJwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uIiwid3AiLCJhamF4Iiwic2VuZCIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwiaGlkZSIsInNob3ciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjb21wbGV0ZSIsIiRtZW51IiwiJGNsb3NlQnRuIiwiJHRvZ2dsZU1lbnVCdG4iLCJpcyIsInRhcmdldCIsImhhcyIsImluZGV4IiwiJGZvcm1BcmVhIiwiJGZvcm1Db2RlQ29udGFpbmVyIiwiJGVhY2Y3Rm9ybSIsIiRjb3B5QnV0dG9uIiwiJHNob3dCdXR0b24iLCJjb2RlVGV4dCIsInRyaW0iLCJjb3B5VG9DbGlwYm9hcmQiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0aGVuIiwiYWxlcnQiLCJlcnIiLCJ0ZXh0QXJlYSIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==