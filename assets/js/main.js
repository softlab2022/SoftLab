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

      // handle contact form 7 preview
      app.handleContactForm7PreviewTemplates();

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
      var fixedheader = $(".site-header");
      $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > lastScrollTop || currentScroll < 5) {
          // Scroll down
          fixedheader.removeClass("fixed-header");
        } else {
          // Scroll up
          fixedheader.addClass("fixed-header");
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      });
    },
    handleChangeDotText: function handleChangeDotText() {
      $(".slick-dots li:nth-child(1) button").text("Audio Player");
      $(".slick-dots li:nth-child(2) button").text("Video Player");
      $(".slick-dots li:nth-child(3) button").text("Podcast Player");
    },
    //Handle popup img js
    handlePopupimg: function handlePopupimg() {
      $(".single article img").click(function () {
        var src = $(this).attr("src");
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
      var $menu = $(".mobile-menu");
      var $closeBtn = $("#close_btn");
      var $toggleMenuBtn = $("#menu-toggle");
      $toggleMenuBtn.click(function () {
        $menu.addClass("show");
      });
      $(document).click(function (e) {
        if (!$menu.is(e.target) && $menu.has(e.target).length === 0 && !$toggleMenuBtn.is(e.target)) {
          $menu.removeClass("show");
        }
      });
      $closeBtn.click(function () {
        $menu.removeClass("show");
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
    handleContactForm7PreviewTemplates: function handleContactForm7PreviewTemplates() {
      // Handle Show Code button click
      var $showButtons = $(".templates-show-buttons");
      if ($showButtons.length) {
        $(".templates-show-buttons").on("click", function () {
          var index = $(this).data("index"); // Get the index from the data attribute
          var $formArea = $('.form-area[data-index="' + index + '"]');
          var $formCodeContainer = $formArea.find(".templates-form-code");
          var $eacf7Form = $formArea.find(".templates-eacf7-form");
          var $copyButton = $formArea.find(".templates-copy-buttons");
          var $showButton = $(this); // Current Show Code button

          // Toggle visibility of the form code and associated elements
          if ($formCodeContainer.is(":visible")) {
            $formCodeContainer.hide();
            $eacf7Form.show();
            $copyButton.hide();
            $showButton.show().html('<i class="fa-solid fa-code"></i> Show Code');
          } else {
            $formCodeContainer.show();
            $eacf7Form.hide();
            $copyButton.show();
            $showButton.html('<i class="fa-solid fa-code"></i> Hide Code');

            // Re-highlight the code when showing
            if (typeof hljs !== "undefined") {
              setTimeout(function () {
                $formCodeContainer.find("pre code").each(function () {
                  hljs.highlightElement(this);
                });
              }, 100);
            }
          }
        });
      }

      // Handle Copy Code button click
      $(".templates-copy-buttons").on("click", function () {
        var index = $(this).data("index");
        var $formArea = $('.form-area[data-index="' + index + '"]');
        var codeText = $formArea.find(".templates-form-code pre code").text().trim();
        if (!codeText) {
          codeText = $formArea.find(".templates-form-code").text().trim();
        }
        copyToClipboard(codeText, $(this));
      });

      // Handle code content click to copy and select all
      $(document).on("click", ".templates-form-code code", function () {
        var codeText = $(this).text().trim();

        // Select all text in the code block
        var range = document.createRange();
        range.selectNodeContents(this);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        // Copy the code to the clipboard
        copyToClipboard(codeText, $(this).closest(".form-area").find(".templates-copy-buttons"));
      });

      // Copy to clipboard function with visual feedback
      function copyToClipboard(text, $copyButton) {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(function () {
            // Visual feedback instead of alert
            if ($copyButton && $copyButton.length) {
              var originalHtml = $copyButton.html();
              $copyButton.html('<i class="fa-solid fa-check"></i> Copy Successfully');
              $copyButton.css({
                "background-color": "#28a745",
                color: "#fff"
              });

              // Re-highlight the code
              if (typeof hljs !== "undefined") {
                var $formArea = $copyButton.closest(".form-area");
                var $codeElement = $formArea.find(".form-code pre code");
                if ($codeElement.length) {
                  hljs.highlightElement($codeElement[0]);
                }
              }

              // Reset button after 2 seconds
              setTimeout(function () {
                $copyButton.html(originalHtml);
                $copyButton.css({
                  "background-color": "",
                  color: ""
                });
              }, 2000);
            } else {
              alert("Form code copied to clipboard!");
            }
          })["catch"](function (err) {
            console.error("Failed to copy code: ", err);
            // Fallback method
            fallbackCopyToClipboard(text, $copyButton);
          });
        } else {
          // Use fallback method
          fallbackCopyToClipboard(text, $copyButton);
        }
      }

      // Fallback copy function
      function fallbackCopyToClipboard(text, $copyButton) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          var successful = document.execCommand("copy");
          if (successful) {
            // Visual feedback
            if ($copyButton && $copyButton.length) {
              var originalHtml = $copyButton.html();
              $copyButton.html('<i class="fa-solid fa-check"></i> Copied!');
              $copyButton.css({
                "background-color": "#28a745",
                color: "#fff"
              });

              // Reset button after 2 seconds
              setTimeout(function () {
                $copyButton.html(originalHtml);
                $copyButton.css({
                  "background-color": "",
                  color: ""
                });
              }, 2000);
            } else {
              alert("Form code copied to clipboard!");
            }
          } else {
            alert("Copy failed. Please try again or select text and copy manually.");
          }
        } catch (err) {
          console.error("Unable to copy text: ", err);
          alert("Unable to copy text. Please select the text and copy manually (Ctrl+C).");
        } finally {
          document.body.removeChild(textArea);
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
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === " ") {
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
  if ($("[data-lightbox]").length > 0) {
    $(document).on("click", "[data-lightbox]", lity);
  }

  // eacf7 preview js end
  $(document).ready(app.init);
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxpQkFBaUIsQ0FBQyxDQUFDd0IsTUFBTSxHQUFHLENBQUMsRUFBRTtJQUNuQ3hCLENBQUMsQ0FBQ2dCLFFBQVEsQ0FBQyxDQUFDYixFQUFFLENBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFa0csSUFBSSxDQUFDO0VBQ2xEOztFQUVBO0VBQ0FyRyxDQUFDLENBQUNnQixRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDaEIsR0FBRyxDQUFDQyxJQUFJLENBQUM7QUFDN0IsQ0FBQyxFQUFFZ0IsTUFBTSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL2NvbXBvbmVudHMvcHJpY2luZy5qcyIsIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lci5qcyIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiOyhmdW5jdGlvbiAoJCkge1xyXG4gICAgY29uc3QgYXBwID0ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9IYW5kbGUgcHJpY2luZyBzd2l0Y2hlclxyXG4gICAgICAgICAgICAkKCcucHJpY2luZy1zd2l0Y2hlcicpLm9uKCdjbGljaycsIGFwcC5oYW5kbGVTd2l0Y2hlcik7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgbGljZW5zZSBzd2l0Y2hlclxyXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24taXRlbScpLm9uKCdjbGljaycsIGFwcC5oYW5kbGVMaWNlbnNlU3dpdGNoZXIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVN3aXRjaGVyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdhbm51YWwgbGlmZXRpbWUnKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpID8gJ2FubnVhbCcgOiAnbGlmZXRpbWUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlTGljZW5zZVN3aXRjaGVyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlJykudGV4dCgkKHRoaXMpLnRleHQoKSk7XHJcblxyXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24taXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaWNlbnNlID0gJCh0aGlzKS5kYXRhKCdsaWNlbnNlJyk7XHJcbiAgICAgICAgICAgICQoJy5wcmljZS10ZXh0JykucmVtb3ZlQ2xhc3MoJ2xpY2Vuc2UtMSBsaWNlbnNlLTIgbGljZW5zZS01IGxpY2Vuc2UtMTAwIGxpY2Vuc2UtdW5saW1pdGVkICcpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoYGxpY2Vuc2UtJHtsaWNlbnNlfWApO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoYXBwLmluaXQpO1xyXG5cclxufSkoalF1ZXJ5KTsiLCIvLyA7KGZ1bmN0aW9uICgkKSB7XHJcbi8vICAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgY29uc3QgYmFubmVyID0gJCgnI2hlYWRlci1zdGlja3ktYmFubmVyLCAjaGFsbG93ZWVuLW9mZmVycywgI2JsYWNrLWZyaWRheS1vZmZlcnMnKTtcclxuXHJcbi8vICAgICAgICAgLy8gQ2xvc2UgYmFubmVyXHJcbi8vICAgICAgICAgYmFubmVyLm9uKCdjbGljaycsICcuYmFubmVyLWNsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgICAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXInKS5yZW1vdmUoKTtcclxuLy8gICAgICAgICB9KTtcclxuXHJcbi8vICAgICAgICAgLy8gQmFubmVyIGNvdW50ZG93blxyXG4vLyAgICAgICAgIGNvbnN0IGNvdW50ZG93biA9IGJhbm5lci5maW5kKCcuYmFubmVyLWNvdW50ZG93bicpO1xyXG4vLyAgICAgICAgIGNvbnN0IHRpbWVyID0gYmFubmVyLmZpbmQoJy50aW1lcicpO1xyXG5cclxuLy8gICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xyXG4vLyAgICAgICAgICAgICBjb25zdCBTRUNPTkQgPSAxMDAwO1xyXG4vLyAgICAgICAgICAgICBjb25zdCBNSU5VVEUgPSA2MCAqIFNFQ09ORDtcclxuLy8gICAgICAgICAgICAgY29uc3QgSE9VUiA9IDYwICogTUlOVVRFO1xyXG4vLyAgICAgICAgICAgICBjb25zdCBEQVkgPSAyNCAqIEhPVVI7XHJcblxyXG4vLyAgICAgICAgICAgICBjb25zdCBmb3JtYXRUaW1lID0gKGRpc3RhbmNlKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvIERBWSk7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgREFZKSAvIEhPVVIpO1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgSE9VUikgLyBNSU5VVEUpO1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgTUlOVVRFKSAvIFNFQ09ORCk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cImRheXNcIj4ke2RheXN9ZDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJob3Vyc1wiPiR7aG91cnN9aDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJtaW51dGVzXCI+JHttaW51dGVzfW08L3NwYW4+IDxzcGFuIGNsYXNzPVwic2Vjb25kc1wiPiR7c2Vjb25kc31zPC9zcGFuPmA7XHJcbi8vICAgICAgICAgICAgIH07XHJcblxyXG4vLyAgICAgICAgICAgICBjb25zdCB1cGRhdGVUaW1lciA9ICgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4vLyAgICAgICAgICAgICAgICAgLy9sZXQgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgOC41ICogREFZO1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSgnMjAyNC0xMi0wNVQyMzo1OTowMCcpLmdldFRpbWUoKTtcclxuXHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuLy8gICAgICAgICAgICAgICAgIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JmX29mZmVyc190aW1lJykpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb3VudERvd25EYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JmX29mZmVyc190aW1lJyk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBjb3VudERvd25EYXRlIC0gbm93O1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgdGltZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdiZl9vZmZlcnNfdGltZScpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICB0aW1lci5odG1sKGZvcm1hdFRpbWUoZGlzdGFuY2UpKTtcclxuXHJcbi8vICAgICAgICAgICAgICAgICAvLyBTYXZlIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxyXG4vLyAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JmX29mZmVyc190aW1lJywgY291bnREb3duRGF0ZSk7XHJcbi8vICAgICAgICAgICAgIH07XHJcblxyXG4vLyAgICAgICAgICAgICBjb25zdCB4ID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZXIsIDEwMDApO1xyXG4vLyAgICAgICAgICAgICB1cGRhdGVUaW1lcigpOyAvLyBDYWxsIGltbWVkaWF0ZWx5LCBkb27igJl0IHdhaXQgZm9yIHRoZSBmaXJzdCBpbnRlcnZhbCB0byBleGVjdXRlXHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gfSkoalF1ZXJ5KTtcclxuXHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBiYW5uZXIgPSAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXIsICNoYWxsb3dlZW4tb2ZmZXJzLCAjYmxhY2stZnJpZGF5LW9mZmVycyAnKTtcclxuXHJcbiAgICAgICAgLy8gQ2xvc2UgYmFubmVyXHJcbiAgICAgICAgYmFubmVyLm9uKCdjbGljaycsICcuYmFubmVyLWNsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXInKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQmFubmVyIGNvdW50ZG93blxyXG4gICAgICAgIGNvbnN0IGNvdW50ZG93biA9IGJhbm5lci5maW5kKCcuYmFubmVyLWNvdW50ZG93bicpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVyID0gYmFubmVyLmZpbmQoJy50aW1lcicpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBTRUNPTkQgPSAxMDAwO1xyXG4gICAgICAgICAgICBjb25zdCBNSU5VVEUgPSA2MCAqIFNFQ09ORDtcclxuICAgICAgICAgICAgY29uc3QgSE9VUiA9IDYwICogTUlOVVRFO1xyXG4gICAgICAgICAgICBjb25zdCBEQVkgPSAyNCAqIEhPVVI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYWRaZXJvID0gKG51bSkgPT4gKG51bSA8IDEwID8gYDAke251bX1gIDogbnVtKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdFRpbWUgPSAoZGlzdGFuY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBwYWRaZXJvKE1hdGguZmxvb3IoZGlzdGFuY2UgLyBEQVkpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gcGFkWmVybyhNYXRoLmZsb29yKChkaXN0YW5jZSAlIERBWSkgLyBIT1VSKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gcGFkWmVybyhNYXRoLmZsb29yKChkaXN0YW5jZSAlIEhPVVIpIC8gTUlOVVRFKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gcGFkWmVybyhNYXRoLmZsb29yKChkaXN0YW5jZSAlIE1JTlVURSkgLyBTRUNPTkQpKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj48c3BhbiBjbGFzcz1cImRheXNcIj4ke2RheXN9IGQ8L3NwYW4+PC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZG93blwiPjxzcGFuIGNsYXNzPVwiaG91cnNcIj4ke2hvdXJzfSBoPC9zcGFuPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj48c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIj4ke21pbnV0ZXN9IG08L3NwYW4+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZG93blwiPjxzcGFuIGNsYXNzPVwic2Vjb25kc1wiPiR7c2Vjb25kc30gczwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlVGltZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb3VudERvd25EYXRlID0gbmV3IERhdGUoJzIwMjUtMTItMTBUMjM6NTk6MDAnKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2JmX29mZmVyc190aW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFubmVyLnJlbW92ZSgpOyBcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHgpOyBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZXIuaHRtbChmb3JtYXRUaW1lKGRpc3RhbmNlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiZl9vZmZlcnNfdGltZScsIGNvdW50RG93bkRhdGUpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcclxuICAgICAgICAgICAgdXBkYXRlVGltZXIoKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KShqUXVlcnkpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9jb21wb25lbnRzL3ByaWNpbmdcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3N0aWNreS1iYW5uZXJcIjtcclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG4gIGNvbnN0IGFwcCA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy9Jbml0IFRlc3RpbW9uaWFsIFNsaWRlclxyXG4gICAgICBhcHAuaW5pdFRlc3RpbW9uaWFsU2xpZGVyKCk7XHJcblxyXG4gICAgICAvL0luaXQgRnVuIEZhY3QgQ291bnRlclxyXG4gICAgICBhcHAuaW5pdEZ1bkZhY3RDb3VudGVyKCk7XHJcblxyXG4gICAgICAvL0luaXQgc2Nyb2xsaW5nIGhlYWRlclxyXG4gICAgICBhcHAuaW5pdEZpeGRIZWFkZXIoKTtcclxuXHJcbiAgICAgIC8vSGFuZGxlIGNvbnRhY3QgZm9ybSB0YWJzXHJcbiAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVDb250YWN0Rm9ybSk7XHJcblxyXG4gICAgICAvL0hhbmRsZSBwb3B1cCBpbWdcclxuICAgICAgYXBwLmhhbmRsZVBvcHVwaW1nKCk7XHJcblxyXG4gICAgICAvL0hhbmRsZSB0byB0b3AgYnV0dG9uXHJcbiAgICAgICQoXCIudG8tdG9wXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZVRvVG9wKTtcclxuXHJcbiAgICAgIC8vaGFuZGxlIHByaWNpbmcgaXRlbSBjbGlja1xyXG4gICAgICAkKFwiLml0ZW0tcHJpY2VcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlUHJpY2luZ0l0ZW0pO1xyXG5cclxuICAgICAgLy9IYW5kbGUgSW1hZ2UgQ29tcGFyZSBvbiBSZWFkZXIgTW9kZSBwYWdlXHJcbiAgICAgIGFwcC5pbml0SW1hZ2VDb21wYXJlKCk7XHJcblxyXG4gICAgICAvL0NoYW5nZSBEcmFjdWxhIEhlcm8gSW1hZ2VcclxuICAgICAgYXBwLmNoYW5nZURyYWN1bGFIZXJvSW1hZ2UoKTtcclxuXHJcbiAgICAgIC8vIEhhbmRsZSBBZmZpbGlhdGUgRm9ybVxyXG4gICAgICAkKFwiI2FmZmlsaWF0ZS1yZWdpc3Rlci1mb3JtXCIpLm9uKFwic3VibWl0XCIsIGFwcC5oYW5kbGVBZmZpbGlhdGVGb3JtKTtcclxuXHJcbiAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikub24oXCJjaGFuZ2VcIiwgYXBwLmhhbmRsZVByb2R1Y3RDaGFuZ2UpO1xyXG4gICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikub24oXCJjaGFuZ2VcIiwgYXBwLmhhbmRsZU1ldGhvZENoYW5nZSk7XHJcblxyXG4gICAgICAvLyBIYW5kbGUgU2VhcmNoXHJcbiAgICAgICQoXCIuc2VhcmNoLWJ0blwiKS5vbihcImNsaWNrXCIsIGFwcC5vcGVuU2VhcmNoKTtcclxuICAgICAgJChcIi5jZW5jZWwtYnRuXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmNhbmNlbFNlYXJjaCk7XHJcblxyXG4gICAgICBhcHAuaGFuZGxlQ2hhbmdlRG90VGV4dCgpO1xyXG5cclxuICAgICAgLy8gSGFuZGxlIG1vYmlsZSBtZW51IGNsb3NlXHJcbiAgICAgIGFwcC5oYW5kbGVNb2JpbGVNZW51Q2xvc2UoKTtcclxuXHJcbiAgICAgIC8vIGhhbmRsZSBjb250YWN0IGZvcm0gNyBwcmV2aWV3XHJcbiAgICAgIGFwcC5oYW5kbGVDb250YWN0Rm9ybTdQcmV2aWV3KCk7XHJcblxyXG4gICAgICAvLyBoYW5kbGUgY29udGFjdCBmb3JtIDcgcHJldmlld1xyXG4gICAgICBhcHAuaGFuZGxlQ29udGFjdEZvcm03UHJldmlld1RlbXBsYXRlcygpO1xyXG5cclxuICAgICAgLy8gaGFuZGxlIGNvb2tpZSBjb25zZW50XHJcbiAgICAgIGFwcC5oYW5kbGVDb29raWVDb25zZW50KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5TZWFyY2g6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICQoXCIuc2VhcmNoLWZvcm1cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAkKFwiLnNlYXJjaC1maWVsZFwiKS5mb2N1cygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjYW5jZWxTZWFyY2g6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICQoXCIuc2VhcmNoLWZvcm1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRUZXN0aW1vbmlhbFNsaWRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAvL211bHRpbWVkaWEgcGxheWVyIGhlcm8gc2xpZGVyXHJcbiAgICAgICQoXCIuaGVyby1pbWFnZS1tYWluXCIpLnNsaWNrKHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgc3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgY29udGVudFBhZGRpbmc6IFwiMzBweFwiLFxyXG4gICAgICAgIC8vIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vZ29vZ2xlIGRyaXZlXHJcbiAgICAgICQoXCIudGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xyXG4gICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgIG5leHRBcnJvdzogXCIucmlnaHRcIixcclxuICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy90ZXN0aW1vbmlhbC1pdGVtcy1jZjdcclxuICAgICAgJChcIi50ZXN0aW1vbmlhbC1pdGVtcy1jZjdcIikuc2xpY2soe1xyXG4gICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgIG5leHRBcnJvdzogXCIucmlnaHRcIixcclxuICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy9wcmV2aWV3IGVhY2Y3LXRlc3RpbW9uaWFsLWl0ZW1zXHJcbiAgICAgICQoXCIuZWFjZjctdGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xyXG4gICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgIG5leHRBcnJvdzogXCIuZWFjZjctcmlnaHRcIixcclxuICAgICAgICBwcmV2QXJyb3c6IFwiLmVhY2Y3LWxlZnRcIixcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy9hYm91dCBzbGlkZXJcclxuICAgICAgJChcIi5zbGlkZXItbWFpblwiKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICBuZXh0QXJyb3c6IFwiLnVwXCIsXHJcbiAgICAgICAgcHJldkFycm93OiBcIi5kb3duXCIsXHJcbiAgICAgICAgdmVydGljYWw6IHRydWUsXHJcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJQYWRkaW5nOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICQoXCIuY29tcGF0LXNsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzOTkuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KTtcclxuICAgICAgLy9kcmFjdWxhIHNsaWRlclxyXG4gICAgICAkKFwiLmRyYWN1bGEtc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdEZ1bkZhY3RDb3VudGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIuY291bnRlclwiKS5jb3VudGVyVXAoe1xyXG4gICAgICAgIGRlbGF5OiAxNixcclxuICAgICAgICB0aW1lOiAxNTAwLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy9zY3JvbGxpbmcgaGVhZGVyIGpzXHJcbiAgICBpbml0Rml4ZEhlYWRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcbiAgICAgIGNvbnN0IGZpeGVkaGVhZGVyID0gJChcIi5zaXRlLWhlYWRlclwiKTtcclxuXHJcbiAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50U2Nyb2xsID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGwgPiBsYXN0U2Nyb2xsVG9wIHx8IGN1cnJlbnRTY3JvbGwgPCA1KSB7XHJcbiAgICAgICAgICAvLyBTY3JvbGwgZG93blxyXG4gICAgICAgICAgZml4ZWRoZWFkZXIucmVtb3ZlQ2xhc3MoXCJmaXhlZC1oZWFkZXJcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFNjcm9sbCB1cFxyXG4gICAgICAgICAgZml4ZWRoZWFkZXIuYWRkQ2xhc3MoXCJmaXhlZC1oZWFkZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYXN0U2Nyb2xsVG9wID0gY3VycmVudFNjcm9sbCA8PSAwID8gMCA6IGN1cnJlbnRTY3JvbGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVDaGFuZ2VEb3RUZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIuc2xpY2stZG90cyBsaTpudGgtY2hpbGQoMSkgYnV0dG9uXCIpLnRleHQoXCJBdWRpbyBQbGF5ZXJcIik7XHJcbiAgICAgICQoXCIuc2xpY2stZG90cyBsaTpudGgtY2hpbGQoMikgYnV0dG9uXCIpLnRleHQoXCJWaWRlbyBQbGF5ZXJcIik7XHJcbiAgICAgICQoXCIuc2xpY2stZG90cyBsaTpudGgtY2hpbGQoMykgYnV0dG9uXCIpLnRleHQoXCJQb2RjYXN0IFBsYXllclwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy9IYW5kbGUgcG9wdXAgaW1nIGpzXHJcbiAgICBoYW5kbGVQb3B1cGltZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLnNpbmdsZSBhcnRpY2xlIGltZ1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNyYyA9ICQodGhpcykuYXR0cihcInNyY1wiKTtcclxuICAgICAgICBsaXR5KHNyYyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8vSGFuZGxlIHBvcHVwIGltZyBqcyBlbmRcclxuXHJcbiAgICBoYW5kbGVDb250YWN0Rm9ybTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLmNvbnRhY3QtZm9ybSAudGFiLWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAkKFwiLmNvbnRhY3QtZm9ybS13cmFwXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKGAuY29udGFjdC1mb3JtLXdyYXAuZm9ybS0keyQodGhpcykuZGF0YShcInRhcmdldFwiKX1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlVG9Ub3A6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCBcImZhc3RcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZVByaWNpbmdJdGVtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIuaXRlbS1wcmljZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdEltYWdlQ29tcGFyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyBJbWFnZSBDb21wYXJlXHJcbiAgICAgIGlmICghJChcIi5yZWFkZXItbW9kZS1pbWFnZS1jb21wYXJlXCIpLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgJChcIi5yZWFkZXItbW9kZS1pbWFnZS1jb21wYXJlXCIpLnR3ZW50eXR3ZW50eSh7XHJcbiAgICAgICAgLy8gIEhvdyBtdWNoIG9mIHRoZSBiZWZvcmUgaW1hZ2UgaXMgdmlzaWJsZSB3aGVuIHRoZSBwYWdlIGxvYWRzXHJcbiAgICAgICAgZGVmYXVsdF9vZmZzZXRfcGN0OiAwLjUsXHJcblxyXG4gICAgICAgIC8vIGxhYmVsIHRleHRcclxuICAgICAgICBiZWZvcmVfbGFiZWw6IFwiR2VuZXJhbCBWaWV3XCIsXHJcbiAgICAgICAgYWZ0ZXJfbGFiZWw6IFwiUmVhZGVyIE1vZGUgVmlld1wiLFxyXG5cclxuICAgICAgICAvL292ZXJsYXlcclxuICAgICAgICBub19vdmVybGF5OiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgY2hhbmdlRHJhY3VsYUhlcm9JbWFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBpbWFnZSA9ICQoXCIuZHJhY3VsYS1oZXJvLWltYWdlXCIpO1xyXG5cclxuICAgICAgaWYgKCFpbWFnZS5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBjb25zdCBpbWFnZVNyYyA9IGltYWdlLmF0dHIoXCJzcmNcIik7XHJcbiAgICAgICAgY29uc3QgaXNEYXJrID0gaW1hZ2VTcmMuaW5jbHVkZXMoXCJoZXJvLWRhcmtcIik7XHJcbiAgICAgICAgaW1hZ2UuYXR0cihcclxuICAgICAgICAgIFwic3JjXCIsXHJcbiAgICAgICAgICBpbWFnZVNyYy5yZXBsYWNlKFxyXG4gICAgICAgICAgICBpc0RhcmsgPyBcImhlcm8tZGFya1wiIDogXCJoZXJvLWxpZ2h0XCIsXHJcbiAgICAgICAgICAgIGlzRGFyayA/IFwiaGVyby1saWdodFwiIDogXCJoZXJvLWRhcmtcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgICQoXCIubW9kZS1idG5cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChgLm1vZGUtYnRuLm1vZGUtJHtpc0RhcmsgPyBcImxpZ2h0XCIgOiBcImRhcmtcIn1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZUFmZmlsaWF0ZUZvcm06IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIHZhciBmYWlsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIC8vIFByb2R1Y3Qgc2VsZWN0aW9uXHJcbiAgICAgIGxldCBwcm9kdWN0cyA9IFtdO1xyXG4gICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddOmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcHJvZHVjdHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXByb2R1Y3RzLmxlbmd0aCkge1xyXG4gICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICAgIGZhaWxlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBNZXRob2RzIFNlbGVjdGlvblxyXG4gICAgICBsZXQgbWV0aG9kcyA9IFtdO1xyXG5cclxuICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddOmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWV0aG9kcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghbWV0aG9kcy5sZW5ndGgpIHtcclxuICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICAgIGZhaWxlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vYm9vdHN0cmFwIHZhbGlkYXRpb25cclxuICAgICAgY29uc3QgZm9ybSA9ICQodGhpcykuZ2V0KDApO1xyXG5cclxuICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xyXG4gICAgICAgIGZhaWxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICQoZm9ybSkuYWRkQ2xhc3MoXCJ3YXMtdmFsaWRhdGVkXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWZhaWxlZCkge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSAkKFwiI25hbWVcIikudmFsKCk7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSAkKFwiI2VtYWlsXCIpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHBlbWFpbCA9ICQoXCIjcGVtYWlsXCIpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IGRvbWFpbiA9ICQoXCIjZG9tYWluXCIpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHN0YXRpc3RpY3MgPSAkKFwiI3N0YXRpc3RpY3NcIikudmFsKCk7XHJcbiAgICAgICAgY29uc3QgcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbiA9ICQoXHJcbiAgICAgICAgICBcIiNwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uXCJcclxuICAgICAgICApLnZhbCgpO1xyXG5cclxuICAgICAgICB3cC5hamF4LnNlbmQoXCJhZmZpbGlhdGVfcmVnaXN0ZXJcIiwge1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgIHBlbWFpbDogcGVtYWlsLFxyXG4gICAgICAgICAgICBkb21haW46IGRvbWFpbixcclxuICAgICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLFxyXG4gICAgICAgICAgICBtZXRob2RzOiBtZXRob2RzLFxyXG4gICAgICAgICAgICBzdGF0aXN0aWNzOiBzdGF0aXN0aWNzLFxyXG4gICAgICAgICAgICBwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uOiBwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcclxuICAgICAgICAgICAgJChcIiNzdWJtaXRcIikuZmluZChcIi5mYS1zcGlubmVyXCIpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICQoXCIjYWZmaWxpYXRlLXJlZ2lzdGVyLWZvcm1cIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgJChcIi5tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiI3N1Ym1pdFwiKS5maW5kKFwiLmZhLXNwaW5uZXJcIikuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZVByb2R1Y3RDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCQoXCJbbmFtZT0ncHJvZHVjdFtdJ106Y2hlY2tlZFwiKS5sZW5ndGgpIHtcclxuICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlTWV0aG9kQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICgkKFwiW25hbWU9J21ldGhvZFtdJ106Y2hlY2tlZFwiKS5sZW5ndGgpIHtcclxuICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZU1vYmlsZU1lbnVDbG9zZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCAkbWVudSA9ICQoXCIubW9iaWxlLW1lbnVcIik7XHJcbiAgICAgIGNvbnN0ICRjbG9zZUJ0biA9ICQoXCIjY2xvc2VfYnRuXCIpO1xyXG4gICAgICBjb25zdCAkdG9nZ2xlTWVudUJ0biA9ICQoXCIjbWVudS10b2dnbGVcIik7XHJcbiAgICAgICR0b2dnbGVNZW51QnRuLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkbWVudS5hZGRDbGFzcyhcInNob3dcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICEkbWVudS5pcyhlLnRhcmdldCkgJiZcclxuICAgICAgICAgICRtZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICAhJHRvZ2dsZU1lbnVCdG4uaXMoZS50YXJnZXQpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAkbWVudS5yZW1vdmVDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgJGNsb3NlQnRuLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkbWVudS5yZW1vdmVDbGFzcyhcInNob3dcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVDb250YWN0Rm9ybTdQcmV2aWV3OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIEhhbmRsZSBTaG93IENvZGUgYnV0dG9uIGNsaWNrXHJcbiAgICAgIGNvbnN0ICRzaG93QnV0dG9ucyA9ICQoXCIuc2hvdy1idXR0b25zXCIpO1xyXG5cclxuICAgICAgaWYgKCRzaG93QnV0dG9ucy5sZW5ndGgpIHtcclxuICAgICAgICAkKFwiLnNob3ctYnV0dG9uc1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuZGF0YShcImluZGV4XCIpOyAvLyBHZXQgdGhlIGluZGV4IGZyb20gdGhlIGRhdGEgYXR0cmlidXRlXHJcbiAgICAgICAgICB2YXIgJGZvcm1BcmVhID0gJCgnLmZvcm0tYXJlYVtkYXRhLWluZGV4PVwiJyArIGluZGV4ICsgJ1wiXScpO1xyXG4gICAgICAgICAgdmFyICRmb3JtQ29kZUNvbnRhaW5lciA9ICRmb3JtQXJlYS5maW5kKFwiLmZvcm0tY29kZVwiKTtcclxuICAgICAgICAgIHZhciAkZWFjZjdGb3JtID0gJGZvcm1BcmVhLmZpbmQoXCIuZWFjZjctZm9ybVwiKTtcclxuICAgICAgICAgIHZhciAkY29weUJ1dHRvbiA9ICRmb3JtQXJlYS5maW5kKFwiLmNvcHktYnV0dG9uc1wiKTtcclxuICAgICAgICAgIHZhciAkc2hvd0J1dHRvbiA9ICQodGhpcyk7IC8vIEN1cnJlbnQgU2hvdyBDb2RlIGJ1dHRvblxyXG5cclxuICAgICAgICAgIC8vIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIHRoZSBmb3JtIGNvZGUgYW5kIGFzc29jaWF0ZWQgZWxlbWVudHNcclxuICAgICAgICAgIGlmICgkZm9ybUNvZGVDb250YWluZXIuaXMoXCI6dmlzaWJsZVwiKSkge1xyXG4gICAgICAgICAgICAkZm9ybUNvZGVDb250YWluZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAkZWFjZjdGb3JtLnNob3coKTtcclxuICAgICAgICAgICAgJGNvcHlCdXR0b24uaGlkZSgpO1xyXG4gICAgICAgICAgICAkc2hvd0J1dHRvbi5odG1sKCc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNvZGVcIj48L2k+IFNob3cgQ29kZScpOyAvLyBDaGFuZ2UgdGV4dCB0byBTaG93IENvZGVcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRmb3JtQ29kZUNvbnRhaW5lci5zaG93KCk7XHJcbiAgICAgICAgICAgICRlYWNmN0Zvcm0uaGlkZSgpO1xyXG4gICAgICAgICAgICAkY29weUJ1dHRvbi5zaG93KCk7XHJcbiAgICAgICAgICAgICRzaG93QnV0dG9uLmh0bWwoJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtY29kZVwiPjwvaT4gSGlkZSBDb2RlJyk7IC8vIENoYW5nZSB0ZXh0IHRvIEhpZGUgQ29kZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBIYW5kbGUgQ29weSBDb2RlIGJ1dHRvbiBjbGlja1xyXG4gICAgICAkKFwiLmNvcHktYnV0dG9uc1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmRhdGEoXCJpbmRleFwiKTsgLy8gR2V0IHRoZSBpbmRleCBmcm9tIHRoZSBkYXRhIGF0dHJpYnV0ZVxyXG4gICAgICAgIHZhciAkZm9ybUFyZWEgPSAkKCcuZm9ybS1hcmVhW2RhdGEtaW5kZXg9XCInICsgaW5kZXggKyAnXCJdJyk7XHJcbiAgICAgICAgdmFyIGNvZGVUZXh0ID0gJGZvcm1BcmVhLmZpbmQoXCIuZm9ybS1jb2RlXCIpLnRleHQoKS50cmltKCk7XHJcblxyXG4gICAgICAgIGNvcHlUb0NsaXBib2FyZChjb2RlVGV4dCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gSGFuZGxlIGNvZGUgY29udGVudCBjbGljayB0byBjb3B5IGFuZCBzZWxlY3QgYWxsXHJcbiAgICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuZm9ybS1jb2RlIGNvZGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjb2RlVGV4dCA9ICQodGhpcykudGV4dCgpLnRyaW0oKTtcclxuXHJcbiAgICAgICAgLy8gU2VsZWN0IGFsbCB0ZXh0IGluIHRoZSBjb2RlIGJsb2NrXHJcbiAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcyk7XHJcbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICAgICAgLy8gQ29weSB0aGUgY29kZSB0byB0aGUgY2xpcGJvYXJkXHJcbiAgICAgICAgY29weVRvQ2xpcGJvYXJkKGNvZGVUZXh0KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBDb3B5IHRvIGNsaXBib2FyZCBmdW5jdGlvblxyXG4gICAgICBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQodGV4dCkge1xyXG4gICAgICAgIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XHJcbiAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkXHJcbiAgICAgICAgICAgIC53cml0ZVRleHQodGV4dClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KFwiRm9ybSBjb2RlIGNvcGllZCB0byBjbGlwYm9hcmQhXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY29weSBjb2RlOiBcIiwgZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIEZhbGxiYWNrIGZvciB1bnN1cHBvcnRlZCBDbGlwYm9hcmQgQVBJXHJcbiAgICAgICAgICB2YXIgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICAgICAgICB0ZXh0QXJlYS52YWx1ZSA9IHRleHQ7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcclxuICAgICAgICAgIHRleHRBcmVhLnNlbGVjdCgpO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHN1Y2Nlc3NmdWwgPSBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzZnVsKSB7XHJcbiAgICAgICAgICAgICAgYWxlcnQoXCJGb3JtIGNvZGUgY29waWVkIHRvIGNsaXBib2FyZCFcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgYWxlcnQoXCJDb3B5IGZhaWxlZC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydChcIlVuYWJsZSB0byBjb3B5IHRleHQuXCIpO1xyXG4gICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0QXJlYSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZUNvbnRhY3RGb3JtN1ByZXZpZXdUZW1wbGF0ZXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gSGFuZGxlIFNob3cgQ29kZSBidXR0b24gY2xpY2tcclxuICAgICAgY29uc3QgJHNob3dCdXR0b25zID0gJChcIi50ZW1wbGF0ZXMtc2hvdy1idXR0b25zXCIpO1xyXG5cclxuICAgICAgaWYgKCRzaG93QnV0dG9ucy5sZW5ndGgpIHtcclxuICAgICAgICAkKFwiLnRlbXBsYXRlcy1zaG93LWJ1dHRvbnNcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmRhdGEoXCJpbmRleFwiKTsgLy8gR2V0IHRoZSBpbmRleCBmcm9tIHRoZSBkYXRhIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgdmFyICRmb3JtQXJlYSA9ICQoJy5mb3JtLWFyZWFbZGF0YS1pbmRleD1cIicgKyBpbmRleCArICdcIl0nKTtcclxuICAgICAgICAgIHZhciAkZm9ybUNvZGVDb250YWluZXIgPSAkZm9ybUFyZWEuZmluZChcIi50ZW1wbGF0ZXMtZm9ybS1jb2RlXCIpO1xyXG4gICAgICAgICAgdmFyICRlYWNmN0Zvcm0gPSAkZm9ybUFyZWEuZmluZChcIi50ZW1wbGF0ZXMtZWFjZjctZm9ybVwiKTtcclxuICAgICAgICAgIHZhciAkY29weUJ1dHRvbiA9ICRmb3JtQXJlYS5maW5kKFwiLnRlbXBsYXRlcy1jb3B5LWJ1dHRvbnNcIik7XHJcbiAgICAgICAgICB2YXIgJHNob3dCdXR0b24gPSAkKHRoaXMpOyAvLyBDdXJyZW50IFNob3cgQ29kZSBidXR0b25cclxuXHJcbiAgICAgICAgICAvLyBUb2dnbGUgdmlzaWJpbGl0eSBvZiB0aGUgZm9ybSBjb2RlIGFuZCBhc3NvY2lhdGVkIGVsZW1lbnRzXHJcbiAgICAgICAgICBpZiAoJGZvcm1Db2RlQ29udGFpbmVyLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgJGZvcm1Db2RlQ29udGFpbmVyLmhpZGUoKTtcclxuICAgICAgICAgICAgJGVhY2Y3Rm9ybS5zaG93KCk7XHJcbiAgICAgICAgICAgICRjb3B5QnV0dG9uLmhpZGUoKTtcclxuICAgICAgICAgICAgJHNob3dCdXR0b25cclxuICAgICAgICAgICAgICAuc2hvdygpXHJcbiAgICAgICAgICAgICAgLmh0bWwoJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtY29kZVwiPjwvaT4gU2hvdyBDb2RlJyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZm9ybUNvZGVDb250YWluZXIuc2hvdygpO1xyXG4gICAgICAgICAgICAkZWFjZjdGb3JtLmhpZGUoKTtcclxuICAgICAgICAgICAgJGNvcHlCdXR0b24uc2hvdygpO1xyXG4gICAgICAgICAgICAkc2hvd0J1dHRvbi5odG1sKCc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNvZGVcIj48L2k+IEhpZGUgQ29kZScpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmUtaGlnaGxpZ2h0IHRoZSBjb2RlIHdoZW4gc2hvd2luZ1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGhsanMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICRmb3JtQ29kZUNvbnRhaW5lci5maW5kKFwicHJlIGNvZGVcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgIGhsanMuaGlnaGxpZ2h0RWxlbWVudCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gSGFuZGxlIENvcHkgQ29kZSBidXR0b24gY2xpY2tcclxuICAgICAgJChcIi50ZW1wbGF0ZXMtY29weS1idXR0b25zXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuZGF0YShcImluZGV4XCIpOyBcclxuICAgICAgICB2YXIgJGZvcm1BcmVhID0gJCgnLmZvcm0tYXJlYVtkYXRhLWluZGV4PVwiJyArIGluZGV4ICsgJ1wiXScpO1xyXG4gICAgICAgIHZhciBjb2RlVGV4dCA9ICRmb3JtQXJlYS5maW5kKFwiLnRlbXBsYXRlcy1mb3JtLWNvZGUgcHJlIGNvZGVcIikudGV4dCgpLnRyaW0oKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb2RlVGV4dCkge1xyXG4gICAgICAgICAgY29kZVRleHQgPSAkZm9ybUFyZWEuZmluZChcIi50ZW1wbGF0ZXMtZm9ybS1jb2RlXCIpLnRleHQoKS50cmltKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb3B5VG9DbGlwYm9hcmQoY29kZVRleHQsICQodGhpcykpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEhhbmRsZSBjb2RlIGNvbnRlbnQgY2xpY2sgdG8gY29weSBhbmQgc2VsZWN0IGFsbFxyXG4gICAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLnRlbXBsYXRlcy1mb3JtLWNvZGUgY29kZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNvZGVUZXh0ID0gJCh0aGlzKS50ZXh0KCkudHJpbSgpO1xyXG5cclxuICAgICAgICAvLyBTZWxlY3QgYWxsIHRleHQgaW4gdGhlIGNvZGUgYmxvY2tcclxuICAgICAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aGlzKTtcclxuICAgICAgICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG5cclxuICAgICAgICAvLyBDb3B5IHRoZSBjb2RlIHRvIHRoZSBjbGlwYm9hcmRcclxuICAgICAgICBjb3B5VG9DbGlwYm9hcmQoXHJcbiAgICAgICAgICBjb2RlVGV4dCxcclxuICAgICAgICAgICQodGhpcykuY2xvc2VzdChcIi5mb3JtLWFyZWFcIikuZmluZChcIi50ZW1wbGF0ZXMtY29weS1idXR0b25zXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBDb3B5IHRvIGNsaXBib2FyZCBmdW5jdGlvbiB3aXRoIHZpc3VhbCBmZWVkYmFja1xyXG4gICAgICBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQodGV4dCwgJGNvcHlCdXR0b24pIHtcclxuICAgICAgICBpZiAobmF2aWdhdG9yLmNsaXBib2FyZCkge1xyXG4gICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZFxyXG4gICAgICAgICAgICAud3JpdGVUZXh0KHRleHQpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAvLyBWaXN1YWwgZmVlZGJhY2sgaW5zdGVhZCBvZiBhbGVydFxyXG4gICAgICAgICAgICAgIGlmICgkY29weUJ1dHRvbiAmJiAkY29weUJ1dHRvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbEh0bWwgPSAkY29weUJ1dHRvbi5odG1sKCk7XHJcbiAgICAgICAgICAgICAgICAkY29weUJ1dHRvbi5odG1sKCc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZWNrXCI+PC9pPiBDb3B5IFN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICAgICAgJGNvcHlCdXR0b24uY3NzKHtcclxuICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzI4YTc0NVwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZS1oaWdobGlnaHQgdGhlIGNvZGVcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaGxqcyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgJGZvcm1BcmVhID0gJGNvcHlCdXR0b24uY2xvc2VzdChcIi5mb3JtLWFyZWFcIik7XHJcbiAgICAgICAgICAgICAgICAgIHZhciAkY29kZUVsZW1lbnQgPSAkZm9ybUFyZWEuZmluZChcIi5mb3JtLWNvZGUgcHJlIGNvZGVcIik7XHJcbiAgICAgICAgICAgICAgICAgIGlmICgkY29kZUVsZW1lbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGxqcy5oaWdobGlnaHRFbGVtZW50KCRjb2RlRWxlbWVudFswXSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZXNldCBidXR0b24gYWZ0ZXIgMiBzZWNvbmRzXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgJGNvcHlCdXR0b24uaHRtbChvcmlnaW5hbEh0bWwpO1xyXG4gICAgICAgICAgICAgICAgICAkY29weUJ1dHRvbi5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkZvcm0gY29kZSBjb3BpZWQgdG8gY2xpcGJvYXJkIVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjb3B5IGNvZGU6IFwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgIC8vIEZhbGxiYWNrIG1ldGhvZFxyXG4gICAgICAgICAgICAgIGZhbGxiYWNrQ29weVRvQ2xpcGJvYXJkKHRleHQsICRjb3B5QnV0dG9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFVzZSBmYWxsYmFjayBtZXRob2RcclxuICAgICAgICAgIGZhbGxiYWNrQ29weVRvQ2xpcGJvYXJkKHRleHQsICRjb3B5QnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEZhbGxiYWNrIGNvcHkgZnVuY3Rpb25cclxuICAgICAgZnVuY3Rpb24gZmFsbGJhY2tDb3B5VG9DbGlwYm9hcmQodGV4dCwgJGNvcHlCdXR0b24pIHtcclxuICAgICAgICB2YXIgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICAgICAgdGV4dEFyZWEudmFsdWUgPSB0ZXh0O1xyXG4gICAgICAgIHRleHRBcmVhLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgICAgIHRleHRBcmVhLnN0eWxlLmxlZnQgPSBcIi05OTk5OTlweFwiO1xyXG4gICAgICAgIHRleHRBcmVhLnN0eWxlLnRvcCA9IFwiLTk5OTk5OXB4XCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XHJcbiAgICAgICAgdGV4dEFyZWEuZm9jdXMoKTtcclxuICAgICAgICB0ZXh0QXJlYS5zZWxlY3QoKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHZhciBzdWNjZXNzZnVsID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gICAgICAgICAgaWYgKHN1Y2Nlc3NmdWwpIHtcclxuICAgICAgICAgICAgLy8gVmlzdWFsIGZlZWRiYWNrXHJcbiAgICAgICAgICAgIGlmICgkY29weUJ1dHRvbiAmJiAkY29weUJ1dHRvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxIdG1sID0gJGNvcHlCdXR0b24uaHRtbCgpO1xyXG4gICAgICAgICAgICAgICRjb3B5QnV0dG9uLmh0bWwoJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2hlY2tcIj48L2k+IENvcGllZCEnKTtcclxuICAgICAgICAgICAgICAkY29weUJ1dHRvbi5jc3Moe1xyXG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzI4YTc0NVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAvLyBSZXNldCBidXR0b24gYWZ0ZXIgMiBzZWNvbmRzXHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkY29weUJ1dHRvbi5odG1sKG9yaWdpbmFsSHRtbCk7XHJcbiAgICAgICAgICAgICAgICAkY29weUJ1dHRvbi5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBhbGVydChcIkZvcm0gY29kZSBjb3BpZWQgdG8gY2xpcGJvYXJkIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgXCJDb3B5IGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2FpbiBvciBzZWxlY3QgdGV4dCBhbmQgY29weSBtYW51YWxseS5cIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBjb3B5IHRleHQ6IFwiLCBlcnIpO1xyXG4gICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgIFwiVW5hYmxlIHRvIGNvcHkgdGV4dC4gUGxlYXNlIHNlbGVjdCB0aGUgdGV4dCBhbmQgY29weSBtYW51YWxseSAoQ3RybCtDKS5cIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0QXJlYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZUNvb2tpZUNvbnNlbnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgJGNvb2tpZUJhciA9ICQoXCIuZm9vdGVyLWNvb2tpZS1hcmVhXCIpO1xyXG4gICAgICBjb25zdCAkYWNjZXB0QnRuID0gJChcIi5jb29raWUtYWNjZXB0XCIpO1xyXG4gICAgICBjb25zdCAkZGVjbGluZUJ0biA9ICQoXCIuY29va2llLWRlY2xpbmVcIik7XHJcblxyXG4gICAgICAvLyAtLS0gSGVscGVyIGZ1bmN0aW9ucyAtLS1cclxuICAgICAgZnVuY3Rpb24gc2V0Q29va2llKG5hbWUsIHZhbHVlLCBkYXlzKSB7XHJcbiAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgIGNvbnN0IGV4cGlyZXMgPSBcImV4cGlyZXM9XCIgKyBkLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWUgKyBcIjtcIiArIGV4cGlyZXMgKyBcIjtwYXRoPS9cIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpIHtcclxuICAgICAgICBjb25zdCBjbmFtZSA9IG5hbWUgKyBcIj1cIjtcclxuICAgICAgICBjb25zdCBkZWNvZGVkQ29va2llID0gZGVjb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmNvb2tpZSk7XHJcbiAgICAgICAgY29uc3QgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KFwiO1wiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgYyA9IGNhW2ldO1xyXG4gICAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSBcIiBcIikge1xyXG4gICAgICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoYy5pbmRleE9mKGNuYW1lKSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcoY25hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAtLS0gQ2hlY2sgaWYgY29va2llIGFscmVhZHkgc2V0IC0tLVxyXG4gICAgICBjb25zdCBjb29raWVDb25zZW50ID0gZ2V0Q29va2llKFwiY29va2llQ29uc2VudFwiKTtcclxuICAgICAgaWYgKGNvb2tpZUNvbnNlbnQgPT09IFwiYWNjZXB0ZWRcIiB8fCBjb29raWVDb25zZW50ID09PSBcImRlY2xpbmVkXCIpIHtcclxuICAgICAgICAvLyBBbHJlYWR5IGNob3NlbiDihpIgaGlkZVxyXG4gICAgICAgICRjb29raWVCYXIuaGlkZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFNob3cgYWZ0ZXIgc2Nyb2xsXHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMjAwKSB7XHJcbiAgICAgICAgICAgICRjb29raWVCYXIuYWRkQ2xhc3MoXCJzZmMtc2hvd1wiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRjb29raWVCYXIucmVtb3ZlQ2xhc3MoXCJzZmMtc2hvd1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQWNjZXB0IGJ1dHRvbiDihpIgc2V0IGNvb2tpZSBmb3IgMzAgZGF5c1xyXG4gICAgICAkYWNjZXB0QnRuLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNldENvb2tpZShcImNvb2tpZUNvbnNlbnRcIiwgXCJhY2NlcHRlZFwiLCAzMCk7XHJcbiAgICAgICAgJGNvb2tpZUJhci5oaWRlKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gRGVjbGluZSBidXR0b24g4oaSIHNldCBjb29raWUgZm9yIDMwIGRheXNcclxuICAgICAgJGRlY2xpbmVCdG4ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0Q29va2llKFwiY29va2llQ29uc2VudFwiLCBcImRlY2xpbmVkXCIsIDMwKTtcclxuICAgICAgICAkY29va2llQmFyLmhpZGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGlmICgkKFwiW2RhdGEtbGlnaHRib3hdXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJbZGF0YS1saWdodGJveF1cIiwgbGl0eSk7XHJcbiAgfVxyXG5cclxuICAvLyBlYWNmNyBwcmV2aWV3IGpzIGVuZFxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxufSkoalF1ZXJ5KTtcclxuIl0sIm5hbWVzIjpbIiQiLCJhcHAiLCJpbml0Iiwib24iLCJoYW5kbGVTd2l0Y2hlciIsImhhbmRsZUxpY2Vuc2VTd2l0Y2hlciIsImUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaGFzQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsImxpY2Vuc2UiLCJkYXRhIiwiY29uY2F0IiwiZG9jdW1lbnQiLCJyZWFkeSIsImpRdWVyeSIsImJhbm5lciIsInJlbW92ZSIsImNvdW50ZG93biIsImZpbmQiLCJ0aW1lciIsImxlbmd0aCIsIlNFQ09ORCIsIk1JTlVURSIsIkhPVVIiLCJEQVkiLCJwYWRaZXJvIiwibnVtIiwiZm9ybWF0VGltZSIsImRpc3RhbmNlIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJ1cGRhdGVUaW1lciIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiY291bnREb3duRGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiY2xlYXJJbnRlcnZhbCIsIngiLCJodG1sIiwic2V0SXRlbSIsInNldEludGVydmFsIiwiaW5pdFRlc3RpbW9uaWFsU2xpZGVyIiwiaW5pdEZ1bkZhY3RDb3VudGVyIiwiaW5pdEZpeGRIZWFkZXIiLCJoYW5kbGVDb250YWN0Rm9ybSIsImhhbmRsZVBvcHVwaW1nIiwiaGFuZGxlVG9Ub3AiLCJoYW5kbGVQcmljaW5nSXRlbSIsImluaXRJbWFnZUNvbXBhcmUiLCJjaGFuZ2VEcmFjdWxhSGVyb0ltYWdlIiwiaGFuZGxlQWZmaWxpYXRlRm9ybSIsImhhbmRsZVByb2R1Y3RDaGFuZ2UiLCJoYW5kbGVNZXRob2RDaGFuZ2UiLCJvcGVuU2VhcmNoIiwiY2FuY2VsU2VhcmNoIiwiaGFuZGxlQ2hhbmdlRG90VGV4dCIsImhhbmRsZU1vYmlsZU1lbnVDbG9zZSIsImhhbmRsZUNvbnRhY3RGb3JtN1ByZXZpZXciLCJoYW5kbGVDb250YWN0Rm9ybTdQcmV2aWV3VGVtcGxhdGVzIiwiaGFuZGxlQ29va2llQ29uc2VudCIsImZvY3VzIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXJyb3dzIiwiZG90cyIsImF1dG9wbGF5U3BlZWQiLCJzcGVlZCIsImNvbnRlbnRQYWRkaW5nIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwidmVydGljYWwiLCJjb3VudGVyVXAiLCJkZWxheSIsInRpbWUiLCJsYXN0U2Nyb2xsVG9wIiwiZml4ZWRoZWFkZXIiLCJ3aW5kb3ciLCJzY3JvbGwiLCJjdXJyZW50U2Nyb2xsIiwic2Nyb2xsVG9wIiwiY2xpY2siLCJzcmMiLCJhdHRyIiwibGl0eSIsImFuaW1hdGUiLCJ0d2VudHl0d2VudHkiLCJkZWZhdWx0X29mZnNldF9wY3QiLCJiZWZvcmVfbGFiZWwiLCJhZnRlcl9sYWJlbCIsIm5vX292ZXJsYXkiLCJpbWFnZSIsImltYWdlU3JjIiwiaXNEYXJrIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwiZmFpbGVkIiwicHJvZHVjdHMiLCJlYWNoIiwicHVzaCIsInZhbCIsIm1ldGhvZHMiLCJmb3JtIiwiZ2V0IiwiY2hlY2tWYWxpZGl0eSIsIm5hbWUiLCJlbWFpbCIsInBlbWFpbCIsImRvbWFpbiIsInN0YXRpc3RpY3MiLCJwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uIiwid3AiLCJhamF4Iiwic2VuZCIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwiaGlkZSIsInNob3ciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjb21wbGV0ZSIsIiRtZW51IiwiJGNsb3NlQnRuIiwiJHRvZ2dsZU1lbnVCdG4iLCJpcyIsInRhcmdldCIsImhhcyIsIiRzaG93QnV0dG9ucyIsImluZGV4IiwiJGZvcm1BcmVhIiwiJGZvcm1Db2RlQ29udGFpbmVyIiwiJGVhY2Y3Rm9ybSIsIiRjb3B5QnV0dG9uIiwiJHNob3dCdXR0b24iLCJjb2RlVGV4dCIsInRyaW0iLCJjb3B5VG9DbGlwYm9hcmQiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0aGVuIiwiYWxlcnQiLCJlcnIiLCJ0ZXh0QXJlYSIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIiwiaGxqcyIsInNldFRpbWVvdXQiLCJoaWdobGlnaHRFbGVtZW50IiwiY2xvc2VzdCIsIm9yaWdpbmFsSHRtbCIsImNzcyIsImNvbG9yIiwiJGNvZGVFbGVtZW50IiwiZmFsbGJhY2tDb3B5VG9DbGlwYm9hcmQiLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsIiRjb29raWVCYXIiLCIkYWNjZXB0QnRuIiwiJGRlY2xpbmVCdG4iLCJzZXRDb29raWUiLCJkIiwic2V0VGltZSIsImV4cGlyZXMiLCJ0b1VUQ1N0cmluZyIsImNvb2tpZSIsImdldENvb2tpZSIsImNuYW1lIiwiZGVjb2RlZENvb2tpZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNhIiwic3BsaXQiLCJpIiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJjb29raWVDb25zZW50Il0sInNvdXJjZVJvb3QiOiIifQ==