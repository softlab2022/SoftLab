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
    var banner = $('#header-sticky-banner, #halloween-offers, #black-friday-offers ');

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
        return "<div class=\"countdown\"><span class=\"days\">".concat(days, " d</span></div> \n                <div class=\"countdown\"><span class=\"hours\">").concat(hours, " h</span> </div>\n                <div class=\"countdown\"><span class=\"minutes\">").concat(minutes, " m</span> </div>\n                <div class=\"countdown\"><span class=\"seconds\">").concat(seconds, " s</span> \n                </div>");
      };
      var updateTimer = function updateTimer() {
        var now = new Date().getTime();
        var countDownDate = new Date('2025-12-10T23:59:00').getTime();

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

      // Handle mobile menu close
      app.handleMobileMenuClose();

      // handle contact form 7 preview
      app.handleContactForm7Preview();

      // handle cookie consent
      app.handleCookieConsent();
    },
    openSearch: function openSearch(e) {
      $(".search-form").addClass("active");
      $(".search-field").focus();
    },
    cancelSearch: function cancelSearch(e) {
      $(".search-form").removeClass("active");
    },
    initTestimonialSlider: function initTestimonialSlider() {
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
      // Image Compare
      if (!$(".reader-mode-image-compare").length) return;
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
    },
    handleMobileMenuClose: function handleMobileMenuClose() {
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
    },
    handleContactForm7Preview: function handleContactForm7Preview() {
      // Handle Show Code button click
      var $showButtons = $(".show-buttons");
      if ($showButtons.length) {
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
      }

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
    },
    handleCookieConsent: function handleCookieConsent() {
      var $cookieBar = $(".footer-cookie-area");
      var $acceptBtn = $(".cookie-accept");
      var $declineBtn = $(".cookie-decline");

      // --- Helper functions ---
      function setCookie(name, value, days) {
        var d = new Date();
        d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
      }
      function getCookie(name) {
        var cname = name + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
          }
        }
        return "";
      }

      // --- Check if cookie already set ---
      var cookieConsent = getCookie("cookieConsent");
      if (cookieConsent === "accepted" || cookieConsent === "declined") {
        // Already chosen → hide
        $cookieBar.hide();
      } else {
        // Show after scroll
        $(window).on("scroll", function () {
          if ($(this).scrollTop() > 200) {
            $cookieBar.addClass("sfc-show");
          } else {
            $cookieBar.removeClass("sfc-show");
          }
        });
      }

      // Accept button → set cookie for 30 days
      $acceptBtn.on("click", function () {
        setCookie("cookieConsent", "accepted", 30);
        $cookieBar.hide();
      });

      // Decline button → set cookie for 30 days
      $declineBtn.on("click", function () {
        setCookie("cookieConsent", "declined", 30);
        $cookieBar.hide();
      });
    }
  };
  if ($('[data-lightbox]').length > 0) {
    $(document).on('click', '[data-lightbox]', lity);
  }

  // eacf7 preview js end
  $(document).ready(app.init);
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxpQkFBaUIsRUFBRWlHLElBQUksQ0FBQztFQUNwRDs7RUFFQTtFQUNBcEcsQ0FBQyxDQUFDZ0IsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQ2hCLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDO0FBQy9CLENBQUMsRUFBRWdCLE1BQU0sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3N0aWNreS1iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24gKCQpIHtcclxuICAgIGNvbnN0IGFwcCA9IHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vSGFuZGxlIHByaWNpbmcgc3dpdGNoZXJcclxuICAgICAgICAgICAgJCgnLnByaWNpbmctc3dpdGNoZXInKS5vbignY2xpY2snLCBhcHAuaGFuZGxlU3dpdGNoZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlIGxpY2Vuc2Ugc3dpdGNoZXJcclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5vbignY2xpY2snLCBhcHAuaGFuZGxlTGljZW5zZVN3aXRjaGVyKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnYW5udWFsIGxpZmV0aW1lJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICdhbm51YWwnIDogJ2xpZmV0aW1lJyk7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUxpY2Vuc2VTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZScpLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGljZW5zZSA9ICQodGhpcykuZGF0YSgnbGljZW5zZScpO1xyXG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdsaWNlbnNlLTEgbGljZW5zZS0yIGxpY2Vuc2UtNSBsaWNlbnNlLTEwMCBsaWNlbnNlLXVubGltaXRlZCAnKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGBsaWNlbnNlLSR7bGljZW5zZX1gKTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxuXHJcbn0pKGpRdWVyeSk7IiwiLy8gOyhmdW5jdGlvbiAoJCkge1xyXG4vLyAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgIGNvbnN0IGJhbm5lciA9ICQoJyNoZWFkZXItc3RpY2t5LWJhbm5lciwgI2hhbGxvd2Vlbi1vZmZlcnMsICNibGFjay1mcmlkYXktb2ZmZXJzJyk7XHJcblxyXG4vLyAgICAgICAgIC8vIENsb3NlIGJhbm5lclxyXG4vLyAgICAgICAgIGJhbm5lci5vbignY2xpY2snLCAnLmJhbm5lci1jbG9zZScsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICAgJCgnI2hlYWRlci1zdGlja3ktYmFubmVyJykucmVtb3ZlKCk7XHJcbi8vICAgICAgICAgfSk7XHJcblxyXG4vLyAgICAgICAgIC8vIEJhbm5lciBjb3VudGRvd25cclxuLy8gICAgICAgICBjb25zdCBjb3VudGRvd24gPSBiYW5uZXIuZmluZCgnLmJhbm5lci1jb3VudGRvd24nKTtcclxuLy8gICAgICAgICBjb25zdCB0aW1lciA9IGJhbm5lci5maW5kKCcudGltZXInKTtcclxuXHJcbi8vICAgICAgICAgaWYgKGNvdW50ZG93bi5sZW5ndGgpIHtcclxuLy8gICAgICAgICAgICAgY29uc3QgU0VDT05EID0gMTAwMDtcclxuLy8gICAgICAgICAgICAgY29uc3QgTUlOVVRFID0gNjAgKiBTRUNPTkQ7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IEhPVVIgPSA2MCAqIE1JTlVURTtcclxuLy8gICAgICAgICAgICAgY29uc3QgREFZID0gMjQgKiBIT1VSO1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgZm9ybWF0VGltZSA9IChkaXN0YW5jZSkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyBEQVkpO1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlIERBWSkgLyBIT1VSKTtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlIEhPVVIpIC8gTUlOVVRFKTtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlIE1JTlVURSkgLyBTRUNPTkQpO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCJkYXlzXCI+JHtkYXlzfWQ8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaG91cnNcIj4ke2hvdXJzfWg8L3NwYW4+IDxzcGFuIGNsYXNzPVwibWludXRlc1wiPiR7bWludXRlc31tPC9zcGFuPiA8c3BhbiBjbGFzcz1cInNlY29uZHNcIj4ke3NlY29uZHN9czwvc3Bhbj5gO1xyXG4vLyAgICAgICAgICAgICB9O1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgdXBkYXRlVGltZXIgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuLy8gICAgICAgICAgICAgICAgIC8vbGV0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDguNSAqIERBWTtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBjb3VudERvd25EYXRlID0gbmV3IERhdGUoJzIwMjQtMTItMDVUMjM6NTk6MDAnKS5nZXRUaW1lKCk7XHJcblxyXG5cclxuLy8gICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbi8vICAgICAgICAgICAgICAgICBpZiAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZl9vZmZlcnNfdGltZScpKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZl9vZmZlcnNfdGltZScpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcclxuXHJcbi8vICAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIHRpbWVcclxuLy8gICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYmZfb2ZmZXJzX3RpbWUnKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgdGltZXIuaHRtbChmb3JtYXRUaW1lKGRpc3RhbmNlKSk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLy8gU2F2ZSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuLy8gICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiZl9vZmZlcnNfdGltZScsIGNvdW50RG93bkRhdGUpO1xyXG4vLyAgICAgICAgICAgICB9O1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgeCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcclxuLy8gICAgICAgICAgICAgdXBkYXRlVGltZXIoKTsgLy8gQ2FsbCBpbW1lZGlhdGVseSwgZG9u4oCZdCB3YWl0IGZvciB0aGUgZmlyc3QgaW50ZXJ2YWwgdG8gZXhlY3V0ZVxyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KTtcclxuXHJcbi8vIH0pKGpRdWVyeSk7XHJcblxyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYmFubmVyID0gJCgnI2hlYWRlci1zdGlja3ktYmFubmVyLCAjaGFsbG93ZWVuLW9mZmVycywgI2JsYWNrLWZyaWRheS1vZmZlcnMgJyk7XHJcblxyXG4gICAgICAgIC8vIENsb3NlIGJhbm5lclxyXG4gICAgICAgIGJhbm5lci5vbignY2xpY2snLCAnLmJhbm5lci1jbG9zZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnI2hlYWRlci1zdGlja3ktYmFubmVyJykucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEJhbm5lciBjb3VudGRvd25cclxuICAgICAgICBjb25zdCBjb3VudGRvd24gPSBiYW5uZXIuZmluZCgnLmJhbm5lci1jb3VudGRvd24nKTtcclxuICAgICAgICBjb25zdCB0aW1lciA9IGJhbm5lci5maW5kKCcudGltZXInKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZG93bi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgU0VDT05EID0gMTAwMDtcclxuICAgICAgICAgICAgY29uc3QgTUlOVVRFID0gNjAgKiBTRUNPTkQ7XHJcbiAgICAgICAgICAgIGNvbnN0IEhPVVIgPSA2MCAqIE1JTlVURTtcclxuICAgICAgICAgICAgY29uc3QgREFZID0gMjQgKiBIT1VSO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcGFkWmVybyA9IChudW0pID0+IChudW0gPCAxMCA/IGAwJHtudW19YCA6IG51bSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXRUaW1lID0gKGRpc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gcGFkWmVybyhNYXRoLmZsb29yKGRpc3RhbmNlIC8gREFZKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IHBhZFplcm8oTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBEQVkpIC8gSE9VUikpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IHBhZFplcm8oTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBIT1VSKSAvIE1JTlVURSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IHBhZFplcm8oTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBNSU5VVEUpIC8gU0VDT05EKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY291bnRkb3duXCI+PHNwYW4gY2xhc3M9XCJkYXlzXCI+JHtkYXlzfSBkPC9zcGFuPjwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj48c3BhbiBjbGFzcz1cImhvdXJzXCI+JHtob3Vyc30gaDwvc3Bhbj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRkb3duXCI+PHNwYW4gY2xhc3M9XCJtaW51dGVzXCI+JHttaW51dGVzfSBtPC9zcGFuPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj48c3BhbiBjbGFzcz1cInNlY29uZHNcIj4ke3NlY29uZHN9IHM8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVRpbWVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKCcyMDI1LTEyLTEwVDIzOjU5OjAwJykuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JmX29mZmVyc190aW1lJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudERvd25EYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JmX29mZmVyc190aW1lJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdiZl9vZmZlcnNfdGltZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhbm5lci5yZW1vdmUoKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh4KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVyLmh0bWwoZm9ybWF0VGltZShkaXN0YW5jZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnLCBjb3VudERvd25EYXRlKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVyKCk7IFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSkoalF1ZXJ5KTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vY29tcG9uZW50cy9wcmljaW5nXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9zdGlja3ktYmFubmVyXCI7XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICAgIGNvbnN0IGFwcCA9IHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vSW5pdCBUZXN0aW1vbmlhbCBTbGlkZXJcclxuICAgICAgICAgICAgYXBwLmluaXRUZXN0aW1vbmlhbFNsaWRlcigpO1xyXG5cclxuICAgICAgICAgICAgLy9Jbml0IEZ1biBGYWN0IENvdW50ZXJcclxuICAgICAgICAgICAgYXBwLmluaXRGdW5GYWN0Q291bnRlcigpO1xyXG5cclxuICAgICAgICAgICAgLy9Jbml0IHNjcm9sbGluZyBoZWFkZXJcclxuICAgICAgICAgICAgYXBwLmluaXRGaXhkSGVhZGVyKCk7XHJcblxyXG4gICAgICAgICAgICAvL0hhbmRsZSBjb250YWN0IGZvcm0gdGFic1xyXG4gICAgICAgICAgICAkKFwiLmNvbnRhY3QtZm9ybSAudGFiLWl0ZW1cIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlQ29udGFjdEZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy9IYW5kbGUgcG9wdXAgaW1nXHJcbiAgICAgICAgICAgIGFwcC5oYW5kbGVQb3B1cGltZygpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vSGFuZGxlIHRvIHRvcCBidXR0b25cclxuICAgICAgICAgICAgJChcIi50by10b3BcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlVG9Ub3ApO1xyXG5cclxuICAgICAgICAgICAgLy9oYW5kbGUgcHJpY2luZyBpdGVtIGNsaWNrXHJcbiAgICAgICAgICAgICQoXCIuaXRlbS1wcmljZVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVQcmljaW5nSXRlbSk7XHJcblxyXG4gICAgICAgICAgICAvL0hhbmRsZSBJbWFnZSBDb21wYXJlIG9uIFJlYWRlciBNb2RlIHBhZ2VcclxuICAgICAgICAgICAgYXBwLmluaXRJbWFnZUNvbXBhcmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vQ2hhbmdlIERyYWN1bGEgSGVybyBJbWFnZVxyXG4gICAgICAgICAgICBhcHAuY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlIEFmZmlsaWF0ZSBGb3JtXHJcbiAgICAgICAgICAgICQoXCIjYWZmaWxpYXRlLXJlZ2lzdGVyLWZvcm1cIikub24oXCJzdWJtaXRcIiwgYXBwLmhhbmRsZUFmZmlsaWF0ZUZvcm0pO1xyXG5cclxuICAgICAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5vbihcImNoYW5nZVwiLCBhcHAuaGFuZGxlUHJvZHVjdENoYW5nZSk7XHJcbiAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5vbihcImNoYW5nZVwiLCBhcHAuaGFuZGxlTWV0aG9kQ2hhbmdlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBTZWFyY2hcclxuICAgICAgICAgICAgJChcIi5zZWFyY2gtYnRuXCIpLm9uKFwiY2xpY2tcIiwgYXBwLm9wZW5TZWFyY2gpO1xyXG4gICAgICAgICAgICAkKFwiLmNlbmNlbC1idG5cIikub24oXCJjbGlja1wiLCBhcHAuY2FuY2VsU2VhcmNoKTtcclxuXHJcbiAgICAgICAgICAgIGFwcC5oYW5kbGVDaGFuZ2VEb3RUZXh0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgbW9iaWxlIG1lbnUgY2xvc2VcclxuICAgICAgICAgICAgYXBwLmhhbmRsZU1vYmlsZU1lbnVDbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gaGFuZGxlIGNvbnRhY3QgZm9ybSA3IHByZXZpZXdcclxuICAgICAgICAgICAgYXBwLmhhbmRsZUNvbnRhY3RGb3JtN1ByZXZpZXcoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSBjb29raWUgY29uc2VudFxyXG4gICAgICAgICAgICBhcHAuaGFuZGxlQ29va2llQ29uc2VudCgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9wZW5TZWFyY2g6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQoXCIuc2VhcmNoLWZvcm1cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICAkKFwiLnNlYXJjaC1maWVsZFwiKS5mb2N1cygpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNhbmNlbFNlYXJjaDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJChcIi5zZWFyY2gtZm9ybVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0VGVzdGltb25pYWxTbGlkZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9tdWx0aW1lZGlhIHBsYXllciBoZXJvIHNsaWRlclxyXG4gICAgICAgICAgICAkKFwiLmhlcm8taW1hZ2UtbWFpblwiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50UGFkZGluZzogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAvLyBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL2dvb2dsZSBkcml2ZVxyXG4gICAgICAgICAgICAkKFwiLnRlc3RpbW9uaWFsLWl0ZW1zXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIi5yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIi5sZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy90ZXN0aW1vbmlhbC1pdGVtcy1jZjdcclxuICAgICAgICAgICAgJChcIi50ZXN0aW1vbmlhbC1pdGVtcy1jZjdcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiLnJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vcHJldmlldyBlYWNmNy10ZXN0aW1vbmlhbC1pdGVtc1xyXG4gICAgICAgICAgICAkKFwiLmVhY2Y3LXRlc3RpbW9uaWFsLWl0ZW1zXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIi5lYWNmNy1yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIi5lYWNmNy1sZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL2Fib3V0IHNsaWRlclxyXG4gICAgICAgICAgICAkKFwiLnNsaWRlci1tYWluXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiLnVwXCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiLmRvd25cIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKFwiLmNvbXBhdC1zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTM5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vZHJhY3VsYSBzbGlkZXJcclxuICAgICAgICAgICAgJChcIi5kcmFjdWxhLXNsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXRGdW5GYWN0Q291bnRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLmNvdW50ZXJcIikuY291bnRlclVwKHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAxNixcclxuICAgICAgICAgICAgICAgIHRpbWU6IDE1MDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vc2Nyb2xsaW5nIGhlYWRlciBqc1xyXG4gICAgICAgIGluaXRGaXhkSGVhZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuICAgICAgICAgICAgY29uc3QgZml4ZWRoZWFkZXIgPSAkKCcuc2l0ZS1oZWFkZXInKTtcclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTY3JvbGwgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsID4gbGFzdFNjcm9sbFRvcCB8fCBjdXJyZW50U2Nyb2xsIDwgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNjcm9sbCBkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgZml4ZWRoZWFkZXIucmVtb3ZlQ2xhc3MoJ2ZpeGVkLWhlYWRlcicpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2Nyb2xsIHVwXHJcbiAgICAgICAgICAgICAgICAgICAgZml4ZWRoZWFkZXIuYWRkQ2xhc3MoJ2ZpeGVkLWhlYWRlcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSBjdXJyZW50U2Nyb2xsIDw9IDAgPyAwIDogY3VycmVudFNjcm9sbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlQ2hhbmdlRG90VGV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcuc2xpY2stZG90cyBsaTpudGgtY2hpbGQoMSkgYnV0dG9uJykudGV4dCgnQXVkaW8gUGxheWVyJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGljay1kb3RzIGxpOm50aC1jaGlsZCgyKSBidXR0b24nKS50ZXh0KCdWaWRlbyBQbGF5ZXInKTtcclxuICAgICAgICAgICAgJCgnLnNsaWNrLWRvdHMgbGk6bnRoLWNoaWxkKDMpIGJ1dHRvbicpLnRleHQoJ1BvZGNhc3QgUGxheWVyJyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy9IYW5kbGUgcG9wdXAgaW1nIGpzXHJcbiAgICAgICAgaGFuZGxlUG9wdXBpbWc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLnNpbmdsZSBhcnRpY2xlIGltZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgICAgICAgICAgbGl0eShzcmMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vSGFuZGxlIHBvcHVwIGltZyBqcyBlbmQgXHJcblxyXG4gICAgICAgIGhhbmRsZUNvbnRhY3RGb3JtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIuY29udGFjdC1mb3JtLXdyYXBcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoYC5jb250YWN0LWZvcm0td3JhcC5mb3JtLSR7JCh0aGlzKS5kYXRhKFwidGFyZ2V0XCIpfWApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVRvVG9wOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgXCJmYXN0XCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVByaWNpbmdJdGVtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIuaXRlbS1wcmljZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0SW1hZ2VDb21wYXJlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIEltYWdlIENvbXBhcmVcclxuICAgICAgICAgICAgaWYgKCEkKFwiLnJlYWRlci1tb2RlLWltYWdlLWNvbXBhcmVcIikubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAkKFwiLnJlYWRlci1tb2RlLWltYWdlLWNvbXBhcmVcIikudHdlbnR5dHdlbnR5KHtcclxuICAgICAgICAgICAgICAgIC8vICBIb3cgbXVjaCBvZiB0aGUgYmVmb3JlIGltYWdlIGlzIHZpc2libGUgd2hlbiB0aGUgcGFnZSBsb2Fkc1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdF9vZmZzZXRfcGN0OiAwLjUsXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbGFiZWwgdGV4dFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlX2xhYmVsOiBcIkdlbmVyYWwgVmlld1wiLFxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJfbGFiZWw6IFwiUmVhZGVyIE1vZGUgVmlld1wiLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vb3ZlcmxheVxyXG4gICAgICAgICAgICAgICAgbm9fb3ZlcmxheTogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2hhbmdlRHJhY3VsYUhlcm9JbWFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9ICQoXCIuZHJhY3VsYS1oZXJvLWltYWdlXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpbWFnZS5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlU3JjID0gaW1hZ2UuYXR0cihcInNyY1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzRGFyayA9IGltYWdlU3JjLmluY2x1ZGVzKFwiaGVyby1kYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuYXR0cihcclxuICAgICAgICAgICAgICAgICAgICBcInNyY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGFyayA/IFwiaGVyby1kYXJrXCIgOiBcImhlcm8tbGlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEYXJrID8gXCJoZXJvLWxpZ2h0XCIgOiBcImhlcm8tZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiLm1vZGUtYnRuXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgJChgLm1vZGUtYnRuLm1vZGUtJHtpc0RhcmsgPyBcImxpZ2h0XCIgOiBcImRhcmtcIn1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlQWZmaWxpYXRlRm9ybTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZhaWxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvZHVjdCBzZWxlY3Rpb25cclxuICAgICAgICAgICAgbGV0IHByb2R1Y3RzID0gW107XHJcbiAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ106Y2hlY2tlZFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwcm9kdWN0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTWV0aG9kcyBTZWxlY3Rpb25cclxuICAgICAgICAgICAgbGV0IG1ldGhvZHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbWV0aG9kcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vYm9vdHN0cmFwIHZhbGlkYXRpb25cclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICQodGhpcykuZ2V0KDApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGZvcm0pLmFkZENsYXNzKFwid2FzLXZhbGlkYXRlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFmYWlsZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSAkKFwiI25hbWVcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbWFpbCA9ICQoXCIjZW1haWxcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwZW1haWwgPSAkKFwiI3BlbWFpbFwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvbWFpbiA9ICQoXCIjZG9tYWluXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGlzdGljcyA9ICQoXCIjc3RhdGlzdGljc1wiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb24gPSAkKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiI3Byb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3cC5hamF4LnNlbmQoXCJhZmZpbGlhdGVfcmVnaXN0ZXJcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZW1haWw6IHBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluOiBkb21haW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kczogbWV0aG9kcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGlzdGljczogc3RhdGlzdGljcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbjogcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNzdWJtaXRcIikuZmluZChcIi5mYS1zcGlubmVyXCIpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNhZmZpbGlhdGUtcmVnaXN0ZXItZm9ybVwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLm1lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3N1Ym1pdFwiKS5maW5kKFwiLmZhLXNwaW5uZXJcIikuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlUHJvZHVjdENoYW5nZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJChcIltuYW1lPSdwcm9kdWN0W10nXTpjaGVja2VkXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVNZXRob2RDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nbWV0aG9kW10nXTpjaGVja2VkXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlTW9iaWxlTWVudUNsb3NlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRtZW51ID0gJCgnLm1vYmlsZS1tZW51Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRjbG9zZUJ0biA9ICQoJyNjbG9zZV9idG4nKTtcclxuICAgICAgICAgICAgY29uc3QgJHRvZ2dsZU1lbnVCdG4gPSAkKCcjbWVudS10b2dnbGUnKTtcclxuICAgICAgICAgICAgJHRvZ2dsZU1lbnVCdG4uY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJG1lbnUuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISRtZW51LmlzKGUudGFyZ2V0KSAmJiAkbWVudS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCAmJiAhJHRvZ2dsZU1lbnVCdG4uaXMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1lbnUucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICRjbG9zZUJ0bi5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkbWVudS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVDb250YWN0Rm9ybTdQcmV2aWV3OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBTaG93IENvZGUgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgIGNvbnN0ICRzaG93QnV0dG9ucyA9ICQoXCIuc2hvdy1idXR0b25zXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCRzaG93QnV0dG9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuc2hvdy1idXR0b25zXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuZGF0YShcImluZGV4XCIpOyAvLyBHZXQgdGhlIGluZGV4IGZyb20gdGhlIGRhdGEgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRmb3JtQXJlYSA9ICQoJy5mb3JtLWFyZWFbZGF0YS1pbmRleD1cIicgKyBpbmRleCArICdcIl0nKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJGZvcm1Db2RlQ29udGFpbmVyID0gJGZvcm1BcmVhLmZpbmQoXCIuZm9ybS1jb2RlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkZWFjZjdGb3JtID0gJGZvcm1BcmVhLmZpbmQoXCIuZWFjZjctZm9ybVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJGNvcHlCdXR0b24gPSAkZm9ybUFyZWEuZmluZChcIi5jb3B5LWJ1dHRvbnNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRzaG93QnV0dG9uID0gJCh0aGlzKTsgLy8gQ3VycmVudCBTaG93IENvZGUgYnV0dG9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIHRoZSBmb3JtIGNvZGUgYW5kIGFzc29jaWF0ZWQgZWxlbWVudHNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJGZvcm1Db2RlQ29udGFpbmVyLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGZvcm1Db2RlQ29udGFpbmVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGVhY2Y3Rm9ybS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjb3B5QnV0dG9uLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNob3dCdXR0b24uaHRtbCgnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jb2RlXCI+PC9pPiBTaG93IENvZGUnKTsgLy8gQ2hhbmdlIHRleHQgdG8gU2hvdyBDb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGZvcm1Db2RlQ29udGFpbmVyLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGVhY2Y3Rm9ybS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjb3B5QnV0dG9uLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNob3dCdXR0b24uaHRtbCgnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jb2RlXCI+PC9pPiBIaWRlIENvZGUnKTsgLy8gQ2hhbmdlIHRleHQgdG8gSGlkZSBDb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBDb3B5IENvZGUgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICQoXCIuY29weS1idXR0b25zXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5kYXRhKFwiaW5kZXhcIik7IC8vIEdldCB0aGUgaW5kZXggZnJvbSB0aGUgZGF0YSBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgICAgIHZhciAkZm9ybUFyZWEgPSAkKCcuZm9ybS1hcmVhW2RhdGEtaW5kZXg9XCInICsgaW5kZXggKyAnXCJdJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29kZVRleHQgPSAkZm9ybUFyZWEuZmluZChcIi5mb3JtLWNvZGVcIikudGV4dCgpLnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb3B5VG9DbGlwYm9hcmQoY29kZVRleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBjb2RlIGNvbnRlbnQgY2xpY2sgdG8gY29weSBhbmQgc2VsZWN0IGFsbFxyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmZvcm0tY29kZSBjb2RlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb2RlVGV4dCA9ICQodGhpcykudGV4dCgpLnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZWxlY3QgYWxsIHRleHQgaW4gdGhlIGNvZGUgYmxvY2tcclxuICAgICAgICAgICAgICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDb3B5IHRoZSBjb2RlIHRvIHRoZSBjbGlwYm9hcmRcclxuICAgICAgICAgICAgICAgIGNvcHlUb0NsaXBib2FyZChjb2RlVGV4dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29weSB0byBjbGlwYm9hcmQgZnVuY3Rpb25cclxuICAgICAgICAgICAgZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKHRleHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJGb3JtIGNvZGUgY29waWVkIHRvIGNsaXBib2FyZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNvcHkgY29kZTogXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGYWxsYmFjayBmb3IgdW5zdXBwb3J0ZWQgQ2xpcGJvYXJkIEFQSVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QXJlYS52YWx1ZSA9IHRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFyZWEuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3NmdWwgPSBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzZnVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkZvcm0gY29kZSBjb3BpZWQgdG8gY2xpcGJvYXJkIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQ29weSBmYWlsZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5hYmxlIHRvIGNvcHkgdGV4dC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0QXJlYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlQ29va2llQ29uc2VudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCAkY29va2llQmFyID0gJChcIi5mb290ZXItY29va2llLWFyZWFcIik7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhY2NlcHRCdG4gPSAkKFwiLmNvb2tpZS1hY2NlcHRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0ICRkZWNsaW5lQnRuID0gJChcIi5jb29raWUtZGVjbGluZVwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIC0tLSBIZWxwZXIgZnVuY3Rpb25zIC0tLVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRDb29raWUobmFtZSwgdmFsdWUsIGRheXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHBpcmVzID0gXCJleHBpcmVzPVwiICsgZC50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWUgKyBcIjtcIiArIGV4cGlyZXMgKyBcIjtwYXRoPS9cIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNuYW1lID0gbmFtZSArIFwiPVwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVjb2RlZENvb2tpZSA9IGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSBjYVtpXTtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT09ICcgJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjLmluZGV4T2YoY25hbWUpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhjbmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gLS0tIENoZWNrIGlmIGNvb2tpZSBhbHJlYWR5IHNldCAtLS1cclxuICAgICAgICAgICAgY29uc3QgY29va2llQ29uc2VudCA9IGdldENvb2tpZShcImNvb2tpZUNvbnNlbnRcIik7XHJcbiAgICAgICAgICAgIGlmIChjb29raWVDb25zZW50ID09PSBcImFjY2VwdGVkXCIgfHwgY29va2llQ29uc2VudCA9PT0gXCJkZWNsaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBbHJlYWR5IGNob3NlbiDihpIgaGlkZVxyXG4gICAgICAgICAgICAgICAgJGNvb2tpZUJhci5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTaG93IGFmdGVyIHNjcm9sbFxyXG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkY29va2llQmFyLmFkZENsYXNzKFwic2ZjLXNob3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGNvb2tpZUJhci5yZW1vdmVDbGFzcyhcInNmYy1zaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBY2NlcHQgYnV0dG9uIOKGkiBzZXQgY29va2llIGZvciAzMCBkYXlzXHJcbiAgICAgICAgICAgICRhY2NlcHRCdG4ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJjb29raWVDb25zZW50XCIsIFwiYWNjZXB0ZWRcIiwgMzApO1xyXG4gICAgICAgICAgICAgICAgJGNvb2tpZUJhci5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gRGVjbGluZSBidXR0b24g4oaSIHNldCBjb29raWUgZm9yIDMwIGRheXNcclxuICAgICAgICAgICAgJGRlY2xpbmVCdG4ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJjb29raWVDb25zZW50XCIsIFwiZGVjbGluZWRcIiwgMzApO1xyXG4gICAgICAgICAgICAgICAgJGNvb2tpZUJhci5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKCQoJ1tkYXRhLWxpZ2h0Ym94XScpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtbGlnaHRib3hdJywgbGl0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWFjZjcgcHJldmlldyBqcyBlbmRcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxufSkoalF1ZXJ5KTtcclxuXHJcbiJdLCJuYW1lcyI6WyIkIiwiYXBwIiwiaW5pdCIsIm9uIiwiaGFuZGxlU3dpdGNoZXIiLCJoYW5kbGVMaWNlbnNlU3dpdGNoZXIiLCJlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwidG9nZ2xlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJsaWNlbnNlIiwiZGF0YSIsImNvbmNhdCIsImRvY3VtZW50IiwicmVhZHkiLCJqUXVlcnkiLCJiYW5uZXIiLCJyZW1vdmUiLCJjb3VudGRvd24iLCJmaW5kIiwidGltZXIiLCJsZW5ndGgiLCJTRUNPTkQiLCJNSU5VVEUiLCJIT1VSIiwiREFZIiwicGFkWmVybyIsIm51bSIsImZvcm1hdFRpbWUiLCJkaXN0YW5jZSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidXBkYXRlVGltZXIiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImNvdW50RG93bkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImNsZWFySW50ZXJ2YWwiLCJ4IiwiaHRtbCIsInNldEl0ZW0iLCJzZXRJbnRlcnZhbCIsImluaXRUZXN0aW1vbmlhbFNsaWRlciIsImluaXRGdW5GYWN0Q291bnRlciIsImluaXRGaXhkSGVhZGVyIiwiaGFuZGxlQ29udGFjdEZvcm0iLCJoYW5kbGVQb3B1cGltZyIsImhhbmRsZVRvVG9wIiwiaGFuZGxlUHJpY2luZ0l0ZW0iLCJpbml0SW1hZ2VDb21wYXJlIiwiY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSIsImhhbmRsZUFmZmlsaWF0ZUZvcm0iLCJoYW5kbGVQcm9kdWN0Q2hhbmdlIiwiaGFuZGxlTWV0aG9kQ2hhbmdlIiwib3BlblNlYXJjaCIsImNhbmNlbFNlYXJjaCIsImhhbmRsZUNoYW5nZURvdFRleHQiLCJoYW5kbGVNb2JpbGVNZW51Q2xvc2UiLCJoYW5kbGVDb250YWN0Rm9ybTdQcmV2aWV3IiwiaGFuZGxlQ29va2llQ29uc2VudCIsImZvY3VzIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXJyb3dzIiwiZG90cyIsImF1dG9wbGF5U3BlZWQiLCJzcGVlZCIsImNvbnRlbnRQYWRkaW5nIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwidmVydGljYWwiLCJjb3VudGVyVXAiLCJkZWxheSIsInRpbWUiLCJsYXN0U2Nyb2xsVG9wIiwiZml4ZWRoZWFkZXIiLCJ3aW5kb3ciLCJzY3JvbGwiLCJjdXJyZW50U2Nyb2xsIiwic2Nyb2xsVG9wIiwiY2xpY2siLCJzcmMiLCJhdHRyIiwibGl0eSIsImFuaW1hdGUiLCJ0d2VudHl0d2VudHkiLCJkZWZhdWx0X29mZnNldF9wY3QiLCJiZWZvcmVfbGFiZWwiLCJhZnRlcl9sYWJlbCIsIm5vX292ZXJsYXkiLCJpbWFnZSIsImltYWdlU3JjIiwiaXNEYXJrIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwiZmFpbGVkIiwicHJvZHVjdHMiLCJlYWNoIiwicHVzaCIsInZhbCIsIm1ldGhvZHMiLCJmb3JtIiwiZ2V0IiwiY2hlY2tWYWxpZGl0eSIsIm5hbWUiLCJlbWFpbCIsInBlbWFpbCIsImRvbWFpbiIsInN0YXRpc3RpY3MiLCJwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uIiwid3AiLCJhamF4Iiwic2VuZCIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwiaGlkZSIsInNob3ciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjb21wbGV0ZSIsIiRtZW51IiwiJGNsb3NlQnRuIiwiJHRvZ2dsZU1lbnVCdG4iLCJpcyIsInRhcmdldCIsImhhcyIsIiRzaG93QnV0dG9ucyIsImluZGV4IiwiJGZvcm1BcmVhIiwiJGZvcm1Db2RlQ29udGFpbmVyIiwiJGVhY2Y3Rm9ybSIsIiRjb3B5QnV0dG9uIiwiJHNob3dCdXR0b24iLCJjb2RlVGV4dCIsInRyaW0iLCJjb3B5VG9DbGlwYm9hcmQiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0aGVuIiwiYWxlcnQiLCJlcnIiLCJ0ZXh0QXJlYSIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIiwiJGNvb2tpZUJhciIsIiRhY2NlcHRCdG4iLCIkZGVjbGluZUJ0biIsInNldENvb2tpZSIsImQiLCJzZXRUaW1lIiwiZXhwaXJlcyIsInRvVVRDU3RyaW5nIiwiY29va2llIiwiZ2V0Q29va2llIiwiY25hbWUiLCJkZWNvZGVkQ29va2llIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY2EiLCJzcGxpdCIsImkiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImNvb2tpZUNvbnNlbnQiXSwic291cmNlUm9vdCI6IiJ9