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
    var banner = $('#header-sticky-banne, #halloween-offers, #black-friday-offers ');

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
        var countDownDate = new Date('2025-11-04T23:59:00').getTime();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxpQkFBaUIsRUFBRWlHLElBQUksQ0FBQztFQUNwRDs7RUFFQTtFQUNBcEcsQ0FBQyxDQUFDZ0IsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQ2hCLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDO0FBQy9CLENBQUMsRUFBRWdCLE1BQU0sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3N0aWNreS1iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24gKCQpIHtcclxuICAgIGNvbnN0IGFwcCA9IHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vSGFuZGxlIHByaWNpbmcgc3dpdGNoZXJcclxuICAgICAgICAgICAgJCgnLnByaWNpbmctc3dpdGNoZXInKS5vbignY2xpY2snLCBhcHAuaGFuZGxlU3dpdGNoZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlIGxpY2Vuc2Ugc3dpdGNoZXJcclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5vbignY2xpY2snLCBhcHAuaGFuZGxlTGljZW5zZVN3aXRjaGVyKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnYW5udWFsIGxpZmV0aW1lJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICdhbm51YWwnIDogJ2xpZmV0aW1lJyk7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUxpY2Vuc2VTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZScpLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGljZW5zZSA9ICQodGhpcykuZGF0YSgnbGljZW5zZScpO1xyXG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdsaWNlbnNlLTEgbGljZW5zZS0yIGxpY2Vuc2UtNSBsaWNlbnNlLTEwMCBsaWNlbnNlLXVubGltaXRlZCAnKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGBsaWNlbnNlLSR7bGljZW5zZX1gKTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxuXHJcbn0pKGpRdWVyeSk7IiwiLy8gOyhmdW5jdGlvbiAoJCkge1xyXG4vLyAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgIGNvbnN0IGJhbm5lciA9ICQoJyNoZWFkZXItc3RpY2t5LWJhbm5lciwgI2hhbGxvd2Vlbi1vZmZlcnMsICNibGFjay1mcmlkYXktb2ZmZXJzJyk7XHJcblxyXG4vLyAgICAgICAgIC8vIENsb3NlIGJhbm5lclxyXG4vLyAgICAgICAgIGJhbm5lci5vbignY2xpY2snLCAnLmJhbm5lci1jbG9zZScsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICAgJCgnI2hlYWRlci1zdGlja3ktYmFubmVyJykucmVtb3ZlKCk7XHJcbi8vICAgICAgICAgfSk7XHJcblxyXG4vLyAgICAgICAgIC8vIEJhbm5lciBjb3VudGRvd25cclxuLy8gICAgICAgICBjb25zdCBjb3VudGRvd24gPSBiYW5uZXIuZmluZCgnLmJhbm5lci1jb3VudGRvd24nKTtcclxuLy8gICAgICAgICBjb25zdCB0aW1lciA9IGJhbm5lci5maW5kKCcudGltZXInKTtcclxuXHJcbi8vICAgICAgICAgaWYgKGNvdW50ZG93bi5sZW5ndGgpIHtcclxuLy8gICAgICAgICAgICAgY29uc3QgU0VDT05EID0gMTAwMDtcclxuLy8gICAgICAgICAgICAgY29uc3QgTUlOVVRFID0gNjAgKiBTRUNPTkQ7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IEhPVVIgPSA2MCAqIE1JTlVURTtcclxuLy8gICAgICAgICAgICAgY29uc3QgREFZID0gMjQgKiBIT1VSO1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgZm9ybWF0VGltZSA9IChkaXN0YW5jZSkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyBEQVkpO1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlIERBWSkgLyBIT1VSKTtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlIEhPVVIpIC8gTUlOVVRFKTtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlIE1JTlVURSkgLyBTRUNPTkQpO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCJkYXlzXCI+JHtkYXlzfWQ8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaG91cnNcIj4ke2hvdXJzfWg8L3NwYW4+IDxzcGFuIGNsYXNzPVwibWludXRlc1wiPiR7bWludXRlc31tPC9zcGFuPiA8c3BhbiBjbGFzcz1cInNlY29uZHNcIj4ke3NlY29uZHN9czwvc3Bhbj5gO1xyXG4vLyAgICAgICAgICAgICB9O1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgdXBkYXRlVGltZXIgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuLy8gICAgICAgICAgICAgICAgIC8vbGV0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDguNSAqIERBWTtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBjb3VudERvd25EYXRlID0gbmV3IERhdGUoJzIwMjQtMTItMDVUMjM6NTk6MDAnKS5nZXRUaW1lKCk7XHJcblxyXG5cclxuLy8gICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbi8vICAgICAgICAgICAgICAgICBpZiAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZl9vZmZlcnNfdGltZScpKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZl9vZmZlcnNfdGltZScpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcclxuXHJcbi8vICAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIHRpbWVcclxuLy8gICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYmZfb2ZmZXJzX3RpbWUnKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgdGltZXIuaHRtbChmb3JtYXRUaW1lKGRpc3RhbmNlKSk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLy8gU2F2ZSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuLy8gICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiZl9vZmZlcnNfdGltZScsIGNvdW50RG93bkRhdGUpO1xyXG4vLyAgICAgICAgICAgICB9O1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgeCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcclxuLy8gICAgICAgICAgICAgdXBkYXRlVGltZXIoKTsgLy8gQ2FsbCBpbW1lZGlhdGVseSwgZG9u4oCZdCB3YWl0IGZvciB0aGUgZmlyc3QgaW50ZXJ2YWwgdG8gZXhlY3V0ZVxyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KTtcclxuXHJcbi8vIH0pKGpRdWVyeSk7XHJcblxyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYmFubmVyID0gJCgnI2hlYWRlci1zdGlja3ktYmFubmUsICNoYWxsb3dlZW4tb2ZmZXJzLCAjYmxhY2stZnJpZGF5LW9mZmVycyAnKTtcclxuXHJcbiAgICAgICAgLy8gQ2xvc2UgYmFubmVyXHJcbiAgICAgICAgYmFubmVyLm9uKCdjbGljaycsICcuYmFubmVyLWNsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXInKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQmFubmVyIGNvdW50ZG93blxyXG4gICAgICAgIGNvbnN0IGNvdW50ZG93biA9IGJhbm5lci5maW5kKCcuYmFubmVyLWNvdW50ZG93bicpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVyID0gYmFubmVyLmZpbmQoJy50aW1lcicpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBTRUNPTkQgPSAxMDAwO1xyXG4gICAgICAgICAgICBjb25zdCBNSU5VVEUgPSA2MCAqIFNFQ09ORDtcclxuICAgICAgICAgICAgY29uc3QgSE9VUiA9IDYwICogTUlOVVRFO1xyXG4gICAgICAgICAgICBjb25zdCBEQVkgPSAyNCAqIEhPVVI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYWRaZXJvID0gKG51bSkgPT4gKG51bSA8IDEwID8gYDAke251bX1gIDogbnVtKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdFRpbWUgPSAoZGlzdGFuY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBwYWRaZXJvKE1hdGguZmxvb3IoZGlzdGFuY2UgLyBEQVkpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gcGFkWmVybyhNYXRoLmZsb29yKChkaXN0YW5jZSAlIERBWSkgLyBIT1VSKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gcGFkWmVybyhNYXRoLmZsb29yKChkaXN0YW5jZSAlIEhPVVIpIC8gTUlOVVRFKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gcGFkWmVybyhNYXRoLmZsb29yKChkaXN0YW5jZSAlIE1JTlVURSkgLyBTRUNPTkQpKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj48c3BhbiBjbGFzcz1cImRheXNcIj4ke2RheXN9IGQ8L3NwYW4+PC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZG93blwiPjxzcGFuIGNsYXNzPVwiaG91cnNcIj4ke2hvdXJzfSBoPC9zcGFuPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj48c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIj4ke21pbnV0ZXN9IG08L3NwYW4+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZG93blwiPjxzcGFuIGNsYXNzPVwic2Vjb25kc1wiPiR7c2Vjb25kc30gczwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlVGltZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb3VudERvd25EYXRlID0gbmV3IERhdGUoJzIwMjUtMTEtMDRUMjM6NTk6MDAnKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2JmX29mZmVyc190aW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFubmVyLnJlbW92ZSgpOyBcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHgpOyBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZXIuaHRtbChmb3JtYXRUaW1lKGRpc3RhbmNlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiZl9vZmZlcnNfdGltZScsIGNvdW50RG93bkRhdGUpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcclxuICAgICAgICAgICAgdXBkYXRlVGltZXIoKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KShqUXVlcnkpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9jb21wb25lbnRzL3ByaWNpbmdcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3N0aWNreS1iYW5uZXJcIjtcclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG4gICAgY29uc3QgYXBwID0ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9Jbml0IFRlc3RpbW9uaWFsIFNsaWRlclxyXG4gICAgICAgICAgICBhcHAuaW5pdFRlc3RpbW9uaWFsU2xpZGVyKCk7XHJcblxyXG4gICAgICAgICAgICAvL0luaXQgRnVuIEZhY3QgQ291bnRlclxyXG4gICAgICAgICAgICBhcHAuaW5pdEZ1bkZhY3RDb3VudGVyKCk7XHJcblxyXG4gICAgICAgICAgICAvL0luaXQgc2Nyb2xsaW5nIGhlYWRlclxyXG4gICAgICAgICAgICBhcHAuaW5pdEZpeGRIZWFkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vSGFuZGxlIGNvbnRhY3QgZm9ybSB0YWJzXHJcbiAgICAgICAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVDb250YWN0Rm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvL0hhbmRsZSBwb3B1cCBpbWdcclxuICAgICAgICAgICAgYXBwLmhhbmRsZVBvcHVwaW1nKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy9IYW5kbGUgdG8gdG9wIGJ1dHRvblxyXG4gICAgICAgICAgICAkKFwiLnRvLXRvcFwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVUb1RvcCk7XHJcblxyXG4gICAgICAgICAgICAvL2hhbmRsZSBwcmljaW5nIGl0ZW0gY2xpY2tcclxuICAgICAgICAgICAgJChcIi5pdGVtLXByaWNlXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZVByaWNpbmdJdGVtKTtcclxuXHJcbiAgICAgICAgICAgIC8vSGFuZGxlIEltYWdlIENvbXBhcmUgb24gUmVhZGVyIE1vZGUgcGFnZVxyXG4gICAgICAgICAgICBhcHAuaW5pdEltYWdlQ29tcGFyZSgpO1xyXG5cclxuICAgICAgICAgICAgLy9DaGFuZ2UgRHJhY3VsYSBIZXJvIEltYWdlXHJcbiAgICAgICAgICAgIGFwcC5jaGFuZ2VEcmFjdWxhSGVyb0ltYWdlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgQWZmaWxpYXRlIEZvcm1cclxuICAgICAgICAgICAgJChcIiNhZmZpbGlhdGUtcmVnaXN0ZXItZm9ybVwiKS5vbihcInN1Ym1pdFwiLCBhcHAuaGFuZGxlQWZmaWxpYXRlRm9ybSk7XHJcblxyXG4gICAgICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLm9uKFwiY2hhbmdlXCIsIGFwcC5oYW5kbGVQcm9kdWN0Q2hhbmdlKTtcclxuICAgICAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLm9uKFwiY2hhbmdlXCIsIGFwcC5oYW5kbGVNZXRob2RDaGFuZ2UpO1xyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlIFNlYXJjaFxyXG4gICAgICAgICAgICAkKFwiLnNlYXJjaC1idG5cIikub24oXCJjbGlja1wiLCBhcHAub3BlblNlYXJjaCk7XHJcbiAgICAgICAgICAgICQoXCIuY2VuY2VsLWJ0blwiKS5vbihcImNsaWNrXCIsIGFwcC5jYW5jZWxTZWFyY2gpO1xyXG5cclxuICAgICAgICAgICAgYXBwLmhhbmRsZUNoYW5nZURvdFRleHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBtb2JpbGUgbWVudSBjbG9zZVxyXG4gICAgICAgICAgICBhcHAuaGFuZGxlTW9iaWxlTWVudUNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBoYW5kbGUgY29udGFjdCBmb3JtIDcgcHJldmlld1xyXG4gICAgICAgICAgICBhcHAuaGFuZGxlQ29udGFjdEZvcm03UHJldmlldygpO1xyXG5cclxuICAgICAgICAgICAgLy8gaGFuZGxlIGNvb2tpZSBjb25zZW50XHJcbiAgICAgICAgICAgIGFwcC5oYW5kbGVDb29raWVDb25zZW50KCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb3BlblNlYXJjaDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJChcIi5zZWFyY2gtZm9ybVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIuc2VhcmNoLWZpZWxkXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2FuY2VsU2VhcmNoOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKFwiLnNlYXJjaC1mb3JtXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXRUZXN0aW1vbmlhbFNsaWRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL211bHRpbWVkaWEgcGxheWVyIGhlcm8gc2xpZGVyXHJcbiAgICAgICAgICAgICQoXCIuaGVyby1pbWFnZS1tYWluXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRQYWRkaW5nOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgIC8vIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vZ29vZ2xlIGRyaXZlXHJcbiAgICAgICAgICAgICQoXCIudGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiLnJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAvL3Rlc3RpbW9uaWFsLWl0ZW1zLWNmN1xyXG4gICAgICAgICAgICAkKFwiLnRlc3RpbW9uaWFsLWl0ZW1zLWNmN1wiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCIucmlnaHRcIixcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9wcmV2aWV3IGVhY2Y3LXRlc3RpbW9uaWFsLWl0ZW1zXHJcbiAgICAgICAgICAgICQoXCIuZWFjZjctdGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiLmVhY2Y3LXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiLmVhY2Y3LWxlZnRcIixcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vYWJvdXQgc2xpZGVyXHJcbiAgICAgICAgICAgICQoXCIuc2xpZGVyLW1haW5cIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCIudXBcIixcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCIuZG93blwiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoXCIuY29tcGF0LXNsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMzk5Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9kcmFjdWxhIHNsaWRlclxyXG4gICAgICAgICAgICAkKFwiLmRyYWN1bGEtc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5pdEZ1bkZhY3RDb3VudGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIuY291bnRlclwiKS5jb3VudGVyVXAoe1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDE2LFxyXG4gICAgICAgICAgICAgICAgdGltZTogMTUwMCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy9zY3JvbGxpbmcgaGVhZGVyIGpzXHJcbiAgICAgICAgaW5pdEZpeGRIZWFkZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBmaXhlZGhlYWRlciA9ICQoJy5zaXRlLWhlYWRlcicpO1xyXG5cclxuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFNjcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGwgPiBsYXN0U2Nyb2xsVG9wIHx8IGN1cnJlbnRTY3JvbGwgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2Nyb2xsIGRvd25cclxuICAgICAgICAgICAgICAgICAgICBmaXhlZGhlYWRlci5yZW1vdmVDbGFzcygnZml4ZWQtaGVhZGVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTY3JvbGwgdXBcclxuICAgICAgICAgICAgICAgICAgICBmaXhlZGhlYWRlci5hZGRDbGFzcygnZml4ZWQtaGVhZGVyJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGFzdFNjcm9sbFRvcCA9IGN1cnJlbnRTY3JvbGwgPD0gMCA/IDAgOiBjdXJyZW50U2Nyb2xsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVDaGFuZ2VEb3RUZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5zbGljay1kb3RzIGxpOm50aC1jaGlsZCgxKSBidXR0b24nKS50ZXh0KCdBdWRpbyBQbGF5ZXInKTtcclxuICAgICAgICAgICAgJCgnLnNsaWNrLWRvdHMgbGk6bnRoLWNoaWxkKDIpIGJ1dHRvbicpLnRleHQoJ1ZpZGVvIFBsYXllcicpO1xyXG4gICAgICAgICAgICAkKCcuc2xpY2stZG90cyBsaTpudGgtY2hpbGQoMykgYnV0dG9uJykudGV4dCgnUG9kY2FzdCBQbGF5ZXInKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvL0hhbmRsZSBwb3B1cCBpbWcganNcclxuICAgICAgICBoYW5kbGVQb3B1cGltZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcuc2luZ2xlIGFydGljbGUgaW1nJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNyYyA9ICQodGhpcykuYXR0cignc3JjJyk7XHJcbiAgICAgICAgICAgICAgICBsaXR5KHNyYyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy9IYW5kbGUgcG9wdXAgaW1nIGpzIGVuZCBcclxuXHJcbiAgICAgICAgaGFuZGxlQ29udGFjdEZvcm06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIi5jb250YWN0LWZvcm0gLnRhYi1pdGVtXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAgICAgJChcIi5jb250YWN0LWZvcm0td3JhcFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChgLmNvbnRhY3QtZm9ybS13cmFwLmZvcm0tJHskKHRoaXMpLmRhdGEoXCJ0YXJnZXRcIil9YCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlVG9Ub3A6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCBcImZhc3RcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlUHJpY2luZ0l0ZW06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIi5pdGVtLXByaWNlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXRJbWFnZUNvbXBhcmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gSW1hZ2UgQ29tcGFyZVxyXG4gICAgICAgICAgICBpZiAoISQoXCIucmVhZGVyLW1vZGUtaW1hZ2UtY29tcGFyZVwiKS5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICQoXCIucmVhZGVyLW1vZGUtaW1hZ2UtY29tcGFyZVwiKS50d2VudHl0d2VudHkoe1xyXG4gICAgICAgICAgICAgICAgLy8gIEhvdyBtdWNoIG9mIHRoZSBiZWZvcmUgaW1hZ2UgaXMgdmlzaWJsZSB3aGVuIHRoZSBwYWdlIGxvYWRzXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0X29mZnNldF9wY3Q6IDAuNSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsYWJlbCB0ZXh0XHJcbiAgICAgICAgICAgICAgICBiZWZvcmVfbGFiZWw6IFwiR2VuZXJhbCBWaWV3XCIsXHJcbiAgICAgICAgICAgICAgICBhZnRlcl9sYWJlbDogXCJSZWFkZXIgTW9kZSBWaWV3XCIsXHJcblxyXG4gICAgICAgICAgICAgICAgLy9vdmVybGF5XHJcbiAgICAgICAgICAgICAgICBub19vdmVybGF5OiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjaGFuZ2VEcmFjdWxhSGVyb0ltYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gJChcIi5kcmFjdWxhLWhlcm8taW1hZ2VcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWltYWdlLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VTcmMgPSBpbWFnZS5hdHRyKFwic3JjXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNEYXJrID0gaW1hZ2VTcmMuaW5jbHVkZXMoXCJoZXJvLWRhcmtcIik7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5hdHRyKFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3JjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmMucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEYXJrID8gXCJoZXJvLWRhcmtcIiA6IFwiaGVyby1saWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0RhcmsgPyBcImhlcm8tbGlnaHRcIiA6IFwiaGVyby1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIubW9kZS1idG5cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAkKGAubW9kZS1idG4ubW9kZS0ke2lzRGFyayA/IFwibGlnaHRcIiA6IFwiZGFya1wifWApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVBZmZpbGlhdGVGb3JtOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZmFpbGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyBQcm9kdWN0IHNlbGVjdGlvblxyXG4gICAgICAgICAgICBsZXQgcHJvZHVjdHMgPSBbXTtcclxuICAgICAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXByb2R1Y3RzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBNZXRob2RzIFNlbGVjdGlvblxyXG4gICAgICAgICAgICBsZXQgbWV0aG9kcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddOmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2RzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFtZXRob2RzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9ib290c3RyYXAgdmFsaWRhdGlvblxyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gJCh0aGlzKS5nZXQoMCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICQoZm9ybSkuYWRkQ2xhc3MoXCJ3YXMtdmFsaWRhdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWZhaWxlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9ICQoXCIjbmFtZVwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gJChcIiNlbWFpbFwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBlbWFpbCA9ICQoXCIjcGVtYWlsXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZG9tYWluID0gJChcIiNkb21haW5cIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0aXN0aWNzID0gJChcIiNzdGF0aXN0aWNzXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbiA9ICQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCIjcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICApLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdwLmFqYXguc2VuZChcImFmZmlsaWF0ZV9yZWdpc3RlclwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlbWFpbDogcGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21haW46IGRvbWFpbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2RzOiBtZXRob2RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aXN0aWNzOiBzdGF0aXN0aWNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uOiBwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3N1Ym1pdFwiKS5maW5kKFwiLmZhLXNwaW5uZXJcIikucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2FmZmlsaWF0ZS1yZWdpc3Rlci1mb3JtXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIubWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjc3VibWl0XCIpLmZpbmQoXCIuZmEtc3Bpbm5lclwiKS5hZGRDbGFzcyhcImQtbm9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVQcm9kdWN0Q2hhbmdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J3Byb2R1Y3RbXSddOmNoZWNrZWRcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZU1ldGhvZENoYW5nZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJChcIltuYW1lPSdtZXRob2RbXSddOmNoZWNrZWRcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVNb2JpbGVNZW51Q2xvc2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgJG1lbnUgPSAkKCcubW9iaWxlLW1lbnUnKTtcclxuICAgICAgICAgICAgY29uc3QgJGNsb3NlQnRuID0gJCgnI2Nsb3NlX2J0bicpO1xyXG4gICAgICAgICAgICBjb25zdCAkdG9nZ2xlTWVudUJ0biA9ICQoJyNtZW51LXRvZ2dsZScpO1xyXG4gICAgICAgICAgICAkdG9nZ2xlTWVudUJ0bi5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkbWVudS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghJG1lbnUuaXMoZS50YXJnZXQpICYmICRtZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwICYmICEkdG9nZ2xlTWVudUJ0bi5pcyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbWVudS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJGNsb3NlQnRuLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICRtZW51LnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUNvbnRhY3RGb3JtN1ByZXZpZXc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gSGFuZGxlIFNob3cgQ29kZSBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgY29uc3QgJHNob3dCdXR0b25zID0gJChcIi5zaG93LWJ1dHRvbnNcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoJHNob3dCdXR0b25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5zaG93LWJ1dHRvbnNcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5kYXRhKFwiaW5kZXhcIik7IC8vIEdldCB0aGUgaW5kZXggZnJvbSB0aGUgZGF0YSBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJGZvcm1BcmVhID0gJCgnLmZvcm0tYXJlYVtkYXRhLWluZGV4PVwiJyArIGluZGV4ICsgJ1wiXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkZm9ybUNvZGVDb250YWluZXIgPSAkZm9ybUFyZWEuZmluZChcIi5mb3JtLWNvZGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRlYWNmN0Zvcm0gPSAkZm9ybUFyZWEuZmluZChcIi5lYWNmNy1mb3JtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkY29weUJ1dHRvbiA9ICRmb3JtQXJlYS5maW5kKFwiLmNvcHktYnV0dG9uc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJHNob3dCdXR0b24gPSAkKHRoaXMpOyAvLyBDdXJyZW50IFNob3cgQ29kZSBidXR0b25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIHZpc2liaWxpdHkgb2YgdGhlIGZvcm0gY29kZSBhbmQgYXNzb2NpYXRlZCBlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkZm9ybUNvZGVDb250YWluZXIuaXMoXCI6dmlzaWJsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZm9ybUNvZGVDb250YWluZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZWFjZjdGb3JtLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGNvcHlCdXR0b24uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2hvd0J1dHRvbi5odG1sKCc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNvZGVcIj48L2k+IFNob3cgQ29kZScpOyAvLyBDaGFuZ2UgdGV4dCB0byBTaG93IENvZGVcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZm9ybUNvZGVDb250YWluZXIuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZWFjZjdGb3JtLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGNvcHlCdXR0b24uc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2hvd0J1dHRvbi5odG1sKCc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNvZGVcIj48L2k+IEhpZGUgQ29kZScpOyAvLyBDaGFuZ2UgdGV4dCB0byBIaWRlIENvZGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlIENvcHkgQ29kZSBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgJChcIi5jb3B5LWJ1dHRvbnNcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmRhdGEoXCJpbmRleFwiKTsgLy8gR2V0IHRoZSBpbmRleCBmcm9tIHRoZSBkYXRhIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAgICAgdmFyICRmb3JtQXJlYSA9ICQoJy5mb3JtLWFyZWFbZGF0YS1pbmRleD1cIicgKyBpbmRleCArICdcIl0nKTtcclxuICAgICAgICAgICAgICAgIHZhciBjb2RlVGV4dCA9ICRmb3JtQXJlYS5maW5kKFwiLmZvcm0tY29kZVwiKS50ZXh0KCkudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvcHlUb0NsaXBib2FyZChjb2RlVGV4dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlIGNvZGUgY29udGVudCBjbGljayB0byBjb3B5IGFuZCBzZWxlY3QgYWxsXHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuZm9ybS1jb2RlIGNvZGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvZGVUZXh0ID0gJCh0aGlzKS50ZXh0KCkudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNlbGVjdCBhbGwgdGV4dCBpbiB0aGUgY29kZSBibG9ja1xyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENvcHkgdGhlIGNvZGUgdG8gdGhlIGNsaXBib2FyZFxyXG4gICAgICAgICAgICAgICAgY29weVRvQ2xpcGJvYXJkKGNvZGVUZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBDb3B5IHRvIGNsaXBib2FyZCBmdW5jdGlvblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQodGV4dCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5jbGlwYm9hcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkZvcm0gY29kZSBjb3BpZWQgdG8gY2xpcGJvYXJkIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY29weSBjb2RlOiBcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrIGZvciB1bnN1cHBvcnRlZCBDbGlwYm9hcmQgQVBJXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBcmVhLnZhbHVlID0gdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QXJlYS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3VjY2Vzc2Z1bCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3NmdWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRm9ybSBjb2RlIGNvcGllZCB0byBjbGlwYm9hcmQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJDb3B5IGZhaWxlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJVbmFibGUgdG8gY29weSB0ZXh0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVDb29raWVDb25zZW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRjb29raWVCYXIgPSAkKFwiLmZvb3Rlci1jb29raWUtYXJlYVwiKTtcclxuICAgICAgICAgICAgY29uc3QgJGFjY2VwdEJ0biA9ICQoXCIuY29va2llLWFjY2VwdFwiKTtcclxuICAgICAgICAgICAgY29uc3QgJGRlY2xpbmVCdG4gPSAkKFwiLmNvb2tpZS1kZWNsaW5lXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gLS0tIEhlbHBlciBmdW5jdGlvbnMgLS0tXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgZGF5cykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cGlyZXMgPSBcImV4cGlyZXM9XCIgKyBkLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIFwiO1wiICsgZXhwaXJlcyArIFwiO3BhdGg9L1wiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY25hbWUgPSBuYW1lICsgXCI9XCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWNvZGVkQ29va2llID0gZGVjb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmNvb2tpZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYSA9IGRlY29kZWRDb29raWUuc3BsaXQoJzsnKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYyA9IGNhW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gJyAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMuaW5kZXhPZihjbmFtZSkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKGNuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAtLS0gQ2hlY2sgaWYgY29va2llIGFscmVhZHkgc2V0IC0tLVxyXG4gICAgICAgICAgICBjb25zdCBjb29raWVDb25zZW50ID0gZ2V0Q29va2llKFwiY29va2llQ29uc2VudFwiKTtcclxuICAgICAgICAgICAgaWYgKGNvb2tpZUNvbnNlbnQgPT09IFwiYWNjZXB0ZWRcIiB8fCBjb29raWVDb25zZW50ID09PSBcImRlY2xpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIEFscmVhZHkgY2hvc2VuIOKGkiBoaWRlXHJcbiAgICAgICAgICAgICAgICAkY29va2llQmFyLmhpZGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFNob3cgYWZ0ZXIgc2Nyb2xsXHJcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjb29raWVCYXIuYWRkQ2xhc3MoXCJzZmMtc2hvd1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkY29va2llQmFyLnJlbW92ZUNsYXNzKFwic2ZjLXNob3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFjY2VwdCBidXR0b24g4oaSIHNldCBjb29raWUgZm9yIDMwIGRheXNcclxuICAgICAgICAgICAgJGFjY2VwdEJ0bi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNldENvb2tpZShcImNvb2tpZUNvbnNlbnRcIiwgXCJhY2NlcHRlZFwiLCAzMCk7XHJcbiAgICAgICAgICAgICAgICAkY29va2llQmFyLmhpZGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBEZWNsaW5lIGJ1dHRvbiDihpIgc2V0IGNvb2tpZSBmb3IgMzAgZGF5c1xyXG4gICAgICAgICAgICAkZGVjbGluZUJ0bi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNldENvb2tpZShcImNvb2tpZUNvbnNlbnRcIiwgXCJkZWNsaW5lZFwiLCAzMCk7XHJcbiAgICAgICAgICAgICAgICAkY29va2llQmFyLmhpZGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoJCgnW2RhdGEtbGlnaHRib3hdJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1saWdodGJveF0nLCBsaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlYWNmNyBwcmV2aWV3IGpzIGVuZFxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoYXBwLmluaXQpO1xyXG59KShqUXVlcnkpO1xyXG5cclxuIl0sIm5hbWVzIjpbIiQiLCJhcHAiLCJpbml0Iiwib24iLCJoYW5kbGVTd2l0Y2hlciIsImhhbmRsZUxpY2Vuc2VTd2l0Y2hlciIsImUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaGFzQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsImxpY2Vuc2UiLCJkYXRhIiwiY29uY2F0IiwiZG9jdW1lbnQiLCJyZWFkeSIsImpRdWVyeSIsImJhbm5lciIsInJlbW92ZSIsImNvdW50ZG93biIsImZpbmQiLCJ0aW1lciIsImxlbmd0aCIsIlNFQ09ORCIsIk1JTlVURSIsIkhPVVIiLCJEQVkiLCJwYWRaZXJvIiwibnVtIiwiZm9ybWF0VGltZSIsImRpc3RhbmNlIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJ1cGRhdGVUaW1lciIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiY291bnREb3duRGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiY2xlYXJJbnRlcnZhbCIsIngiLCJodG1sIiwic2V0SXRlbSIsInNldEludGVydmFsIiwiaW5pdFRlc3RpbW9uaWFsU2xpZGVyIiwiaW5pdEZ1bkZhY3RDb3VudGVyIiwiaW5pdEZpeGRIZWFkZXIiLCJoYW5kbGVDb250YWN0Rm9ybSIsImhhbmRsZVBvcHVwaW1nIiwiaGFuZGxlVG9Ub3AiLCJoYW5kbGVQcmljaW5nSXRlbSIsImluaXRJbWFnZUNvbXBhcmUiLCJjaGFuZ2VEcmFjdWxhSGVyb0ltYWdlIiwiaGFuZGxlQWZmaWxpYXRlRm9ybSIsImhhbmRsZVByb2R1Y3RDaGFuZ2UiLCJoYW5kbGVNZXRob2RDaGFuZ2UiLCJvcGVuU2VhcmNoIiwiY2FuY2VsU2VhcmNoIiwiaGFuZGxlQ2hhbmdlRG90VGV4dCIsImhhbmRsZU1vYmlsZU1lbnVDbG9zZSIsImhhbmRsZUNvbnRhY3RGb3JtN1ByZXZpZXciLCJoYW5kbGVDb29raWVDb25zZW50IiwiZm9jdXMiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhcnJvd3MiLCJkb3RzIiwiYXV0b3BsYXlTcGVlZCIsInNwZWVkIiwiY29udGVudFBhZGRpbmciLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ2ZXJ0aWNhbCIsImNvdW50ZXJVcCIsImRlbGF5IiwidGltZSIsImxhc3RTY3JvbGxUb3AiLCJmaXhlZGhlYWRlciIsIndpbmRvdyIsInNjcm9sbCIsImN1cnJlbnRTY3JvbGwiLCJzY3JvbGxUb3AiLCJjbGljayIsInNyYyIsImF0dHIiLCJsaXR5IiwiYW5pbWF0ZSIsInR3ZW50eXR3ZW50eSIsImRlZmF1bHRfb2Zmc2V0X3BjdCIsImJlZm9yZV9sYWJlbCIsImFmdGVyX2xhYmVsIiwibm9fb3ZlcmxheSIsImltYWdlIiwiaW1hZ2VTcmMiLCJpc0RhcmsiLCJpbmNsdWRlcyIsInJlcGxhY2UiLCJmYWlsZWQiLCJwcm9kdWN0cyIsImVhY2giLCJwdXNoIiwidmFsIiwibWV0aG9kcyIsImZvcm0iLCJnZXQiLCJjaGVja1ZhbGlkaXR5IiwibmFtZSIsImVtYWlsIiwicGVtYWlsIiwiZG9tYWluIiwic3RhdGlzdGljcyIsInByb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb24iLCJ3cCIsImFqYXgiLCJzZW5kIiwiYmVmb3JlU2VuZCIsInN1Y2Nlc3MiLCJoaWRlIiwic2hvdyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNvbXBsZXRlIiwiJG1lbnUiLCIkY2xvc2VCdG4iLCIkdG9nZ2xlTWVudUJ0biIsImlzIiwidGFyZ2V0IiwiaGFzIiwiJHNob3dCdXR0b25zIiwiaW5kZXgiLCIkZm9ybUFyZWEiLCIkZm9ybUNvZGVDb250YWluZXIiLCIkZWFjZjdGb3JtIiwiJGNvcHlCdXR0b24iLCIkc2hvd0J1dHRvbiIsImNvZGVUZXh0IiwidHJpbSIsImNvcHlUb0NsaXBib2FyZCIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRoZW4iLCJhbGVydCIsImVyciIsInRleHRBcmVhIiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwiYm9keSIsImFwcGVuZENoaWxkIiwic2VsZWN0Iiwic3VjY2Vzc2Z1bCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlQ2hpbGQiLCIkY29va2llQmFyIiwiJGFjY2VwdEJ0biIsIiRkZWNsaW5lQnRuIiwic2V0Q29va2llIiwiZCIsInNldFRpbWUiLCJleHBpcmVzIiwidG9VVENTdHJpbmciLCJjb29raWUiLCJnZXRDb29raWUiLCJjbmFtZSIsImRlY29kZWRDb29raWUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjYSIsInNwbGl0IiwiaSIsImMiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiY29va2llQ29uc2VudCJdLCJzb3VyY2VSb290IjoiIn0=