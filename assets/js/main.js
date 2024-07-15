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
      $('.price-text').removeClass('license-1 license-5 license-100').addClass("license-".concat(license));
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

;
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
      var formatTime = function formatTime(distance) {
        var days = Math.floor(distance / DAY);
        var hours = Math.floor(distance % DAY / HOUR);
        var minutes = Math.floor(distance % HOUR / MINUTE);
        var seconds = Math.floor(distance % MINUTE / SECOND);
        return "<span class=\"days\">".concat(days, "d</span> <span class=\"hours\">").concat(hours, "h</span> <span class=\"minutes\">").concat(minutes, "m</span> <span class=\"seconds\">").concat(seconds, "s</span>");
      };
      var updateTimer = function updateTimer() {
        var now = new Date().getTime();
        //let countDownDate = new Date().getTime() + 8.5 * DAY;
        var countDownDate = new Date('2023-12-05T23:59:00').getTime();

        // Check if there is a time in local storage
        if (localStorage.getItem('bf_offers_time')) {
          countDownDate = localStorage.getItem('bf_offers_time');
        }
        var distance = countDownDate - now;
        if (distance < 0) {
          // Reset the time
          localStorage.removeItem('bf_offers_time');
          return;
        }
        timer.html(formatTime(distance));

        // Save time in local storage
        localStorage.setItem('bf_offers_time', countDownDate);
      };
      var x = setInterval(updateTimer, 1000);
      updateTimer(); // Call immediately, don’t wait for the first interval to execute
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
      $("#open-modal").on("click", app.handleModalVideo);
      $(".modal-btn-close").on("click", app.handleModalVideoClose);

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
        prevArrow: ".left",
        adaptiveHeight: true
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
    handlePopupimg: function handlePopupimg() {
      $('.single article img').click(function () {
        var src = $(this).attr('src');
        $.magnificPopup.open({
          items: {
            src: src
          },
          type: 'image',
          closeOnContentClick: true,
          mainClass: 'mfp-img-mobile',
          image: {
            verticalFit: true
          }
        });
      });
    },
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
    },
    handleModalVideo: function handleModalVideo() {
      var modalContent = "";
      var targetElement = $(".hero-how-butt");
      targetElement.append(modalContent);
    },
    handleModalVideoClose: function handleModalVideoClose() {
      var targetElement = $(".hero-how-butt").closest('#staticBackdrop');
      console.log(targetElement);
      targetElement.empty();
    }
  };
  $(document).ready(app.init);
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7RUFFRGhKLENBQUMsQ0FBQ2dCLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUNoQixHQUFHLENBQUNDLElBQUksQ0FBQztBQUMvQixDQUFDLEVBQUVnQixNQUFNLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvZnRsYWIvLi9zcmMvanMvY29tcG9uZW50cy9wcmljaW5nLmpzIiwid2VicGFjazovL3NvZnRsYWIvLi9zcmMvanMvY29tcG9uZW50cy9zdGlja3ktYmFubmVyLmpzIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NvZnRsYWIvLi9zcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBjb25zdCBhcHAgPSB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL0hhbmRsZSBwcmljaW5nIHN3aXRjaGVyXHJcbiAgICAgICAgICAgICQoJy5wcmljaW5nLXN3aXRjaGVyJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZVN3aXRjaGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBsaWNlbnNlIHN3aXRjaGVyXHJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZUxpY2Vuc2VTd2l0Y2hlcik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQoJy5wcmljZS10ZXh0JykucmVtb3ZlQ2xhc3MoJ2FubnVhbCBsaWZldGltZScpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykgPyAnYW5udWFsJyA6ICdsaWZldGltZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVMaWNlbnNlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGUnKS50ZXh0KCQodGhpcykudGV4dCgpKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpY2Vuc2UgPSAkKHRoaXMpLmRhdGEoJ2xpY2Vuc2UnKTtcclxuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnbGljZW5zZS0xIGxpY2Vuc2UtNSBsaWNlbnNlLTEwMCcpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoYGxpY2Vuc2UtJHtsaWNlbnNlfWApO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoYXBwLmluaXQpO1xyXG5cclxufSkoalF1ZXJ5KTsiLCI7KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYmFubmVyID0gJCgnI2hlYWRlci1zdGlja3ktYmFubmVyLCAjaGFsbG93ZWVuLW9mZmVycywgI2JsYWNrLWZyaWRheS1vZmZlcnMnKTtcclxuXHJcbiAgICAgICAgLy8gQ2xvc2UgYmFubmVyXHJcbiAgICAgICAgYmFubmVyLm9uKCdjbGljaycsICcuYmFubmVyLWNsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXInKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQmFubmVyIGNvdW50ZG93blxyXG4gICAgICAgIGNvbnN0IGNvdW50ZG93biA9IGJhbm5lci5maW5kKCcuYmFubmVyLWNvdW50ZG93bicpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVyID0gYmFubmVyLmZpbmQoJy50aW1lcicpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBTRUNPTkQgPSAxMDAwO1xyXG4gICAgICAgICAgICBjb25zdCBNSU5VVEUgPSA2MCAqIFNFQ09ORDtcclxuICAgICAgICAgICAgY29uc3QgSE9VUiA9IDYwICogTUlOVVRFO1xyXG4gICAgICAgICAgICBjb25zdCBEQVkgPSAyNCAqIEhPVVI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXRUaW1lID0gKGRpc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvIERBWSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgREFZKSAvIEhPVVIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgSE9VUikgLyBNSU5VVEUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgTUlOVVRFKSAvIFNFQ09ORCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cImRheXNcIj4ke2RheXN9ZDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJob3Vyc1wiPiR7aG91cnN9aDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJtaW51dGVzXCI+JHttaW51dGVzfW08L3NwYW4+IDxzcGFuIGNsYXNzPVwic2Vjb25kc1wiPiR7c2Vjb25kc31zPC9zcGFuPmA7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVUaW1lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgLy9sZXQgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgOC41ICogREFZO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSgnMjAyMy0xMi0wNVQyMzo1OTowMCcpLmdldFRpbWUoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2JmX29mZmVyc190aW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVyLmh0bWwoZm9ybWF0VGltZShkaXN0YW5jZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnLCBjb3VudERvd25EYXRlKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVyKCk7IC8vIENhbGwgaW1tZWRpYXRlbHksIGRvbuKAmXQgd2FpdCBmb3IgdGhlIGZpcnN0IGludGVydmFsIHRvIGV4ZWN1dGVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KShqUXVlcnkpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9jb21wb25lbnRzL3ByaWNpbmdcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3N0aWNreS1iYW5uZXJcIjtcclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG4gICAgY29uc3QgYXBwID0ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9Jbml0IFRlc3RpbW9uaWFsIFNsaWRlclxyXG4gICAgICAgICAgICBhcHAuaW5pdFRlc3RpbW9uaWFsU2xpZGVyKCk7XHJcblxyXG4gICAgICAgICAgICAvL0luaXQgRnVuIEZhY3QgQ291bnRlclxyXG4gICAgICAgICAgICBhcHAuaW5pdEZ1bkZhY3RDb3VudGVyKCk7XHJcblxyXG4gICAgICAgICAgICAvL0luaXQgc2Nyb2xsaW5nIGhlYWRlclxyXG4gICAgICAgICAgICBhcHAuaW5pdEZpeGRIZWFkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vSGFuZGxlIGNvbnRhY3QgZm9ybSB0YWJzXHJcbiAgICAgICAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVDb250YWN0Rm9ybSk7XHJcbiAgICAgICAgICAgIC8vSGFuZGxlIG1vZGFsIHZpZGVvXHJcbiAgICAgICAgICAgICQoXCIjb3Blbi1tb2RhbFwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVNb2RhbFZpZGVvKTtcclxuICAgICAgICAgICAgJChcIi5tb2RhbC1idG4tY2xvc2VcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlTW9kYWxWaWRlb0Nsb3NlKTtcclxuXHJcbiAgICAgICAgICAgIC8vSGFuZGxlIHBvcHVwIGltZ1xyXG4gICAgICAgICAgICBhcHAuaGFuZGxlUG9wdXBpbWcoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvL0hhbmRsZSB0byB0b3AgYnV0dG9uXHJcbiAgICAgICAgICAgICQoXCIudG8tdG9wXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZVRvVG9wKTtcclxuXHJcbiAgICAgICAgICAgIC8vaGFuZGxlIHByaWNpbmcgaXRlbSBjbGlja1xyXG4gICAgICAgICAgICAkKFwiLml0ZW0tcHJpY2VcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlUHJpY2luZ0l0ZW0pO1xyXG5cclxuICAgICAgICAgICAgLy9IYW5kbGUgSW1hZ2UgQ29tcGFyZSBvbiBSZWFkZXIgTW9kZSBwYWdlXHJcbiAgICAgICAgICAgIGFwcC5pbml0SW1hZ2VDb21wYXJlKCk7XHJcblxyXG4gICAgICAgICAgICAvL0NoYW5nZSBEcmFjdWxhIEhlcm8gSW1hZ2VcclxuICAgICAgICAgICAgYXBwLmNoYW5nZURyYWN1bGFIZXJvSW1hZ2UoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBBZmZpbGlhdGUgRm9ybVxyXG4gICAgICAgICAgICAkKFwiI2FmZmlsaWF0ZS1yZWdpc3Rlci1mb3JtXCIpLm9uKFwic3VibWl0XCIsIGFwcC5oYW5kbGVBZmZpbGlhdGVGb3JtKTtcclxuXHJcbiAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikub24oXCJjaGFuZ2VcIiwgYXBwLmhhbmRsZVByb2R1Y3RDaGFuZ2UpO1xyXG4gICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikub24oXCJjaGFuZ2VcIiwgYXBwLmhhbmRsZU1ldGhvZENoYW5nZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgU2VhcmNoXHJcbiAgICAgICAgICAgICQoXCIuc2VhcmNoLWJ0blwiKS5vbihcImNsaWNrXCIsIGFwcC5vcGVuU2VhcmNoKTtcclxuICAgICAgICAgICAgJChcIi5jZW5jZWwtYnRuXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmNhbmNlbFNlYXJjaCk7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9wZW5TZWFyY2g6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQoXCIuc2VhcmNoLWZvcm1cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICAkKFwiLnNlYXJjaC1maWVsZFwiKS5mb2N1cygpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNhbmNlbFNlYXJjaDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJChcIi5zZWFyY2gtZm9ybVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0VGVzdGltb25pYWxTbGlkZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gSG9tZSB0ZXN0aW1vbmlhbCBzbGlkZXJcclxuICAgICAgICAgICAgJChcIi5zaW5nbGUtdGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRQYWRkaW5nOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCIucmlnaHRcIixcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9nb29nbGUgZHJpdmVcclxuICAgICAgICAgICAgJChcIi50ZXN0aW1vbmlhbC1pdGVtc1wiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCIucmlnaHRcIixcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy90ZXN0aW1vbmlhbC1pdGVtcy1jZjdcclxuICAgICAgICAgICAgJChcIi50ZXN0aW1vbmlhbC1pdGVtcy1jZjdcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiLnJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9hYm91dCBzbGlkZXJcclxuICAgICAgICAgICAgJChcIi5zbGlkZXItbWFpblwiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIi51cFwiLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIi5kb3duXCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJChcIi5jb21wYXQtc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2RyYWN1bGEgc2xpZGVyXHJcbiAgICAgICAgICAgICQoXCIuZHJhY3VsYS1zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0RnVuRmFjdENvdW50ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIi5jb3VudGVyXCIpLmNvdW50ZXJVcCh7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMTYsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiAxNTAwLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvL3Njcm9sbGluZyBoZWFkZXIganNcclxuICAgICAgICBpbml0Rml4ZEhlYWRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpeGVkaGVhZGVyID0gJCgnLnNpdGUtaGVhZGVyJyk7XHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U2Nyb2xsID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA+IGxhc3RTY3JvbGxUb3AgfHwgY3VycmVudFNjcm9sbCA8IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTY3JvbGwgZG93blxyXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkaGVhZGVyLnJlbW92ZUNsYXNzKCdmaXhlZC1oZWFkZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNjcm9sbCB1cFxyXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkaGVhZGVyLmFkZENsYXNzKCdmaXhlZC1oZWFkZXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsYXN0U2Nyb2xsVG9wID0gY3VycmVudFNjcm9sbCA8PSAwID8gMCA6IGN1cnJlbnRTY3JvbGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvL0hhbmRsZSBwb3B1cCBpbWcganNcclxuICAgICAgICBoYW5kbGVQb3B1cGltZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcuc2luZ2xlIGFydGljbGUgaW1nJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNyYyA9ICQodGhpcykuYXR0cignc3JjJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogc3JjXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLWltZy1tb2JpbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsRml0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICBoYW5kbGVDb250YWN0Rm9ybTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLmNvbnRhY3QtZm9ybSAudGFiLWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICAkKFwiLmNvbnRhY3QtZm9ybS13cmFwXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKGAuY29udGFjdC1mb3JtLXdyYXAuZm9ybS0keyQodGhpcykuZGF0YShcInRhcmdldFwiKX1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgaGFuZGxlVG9Ub3A6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCBcImZhc3RcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlUHJpY2luZ0l0ZW06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIi5pdGVtLXByaWNlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXRJbWFnZUNvbXBhcmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIi5yZWFkZXItbW9kZS1pbWFnZS1jb21wYXJlXCIpLnR3ZW50eXR3ZW50eSh7XHJcbiAgICAgICAgICAgICAgICAvLyAgSG93IG11Y2ggb2YgdGhlIGJlZm9yZSBpbWFnZSBpcyB2aXNpYmxlIHdoZW4gdGhlIHBhZ2UgbG9hZHNcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRfb2Zmc2V0X3BjdDogMC41LFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxhYmVsIHRleHRcclxuICAgICAgICAgICAgICAgIGJlZm9yZV9sYWJlbDogXCJHZW5lcmFsIFZpZXdcIixcclxuICAgICAgICAgICAgICAgIGFmdGVyX2xhYmVsOiBcIlJlYWRlciBNb2RlIFZpZXdcIixcclxuXHJcbiAgICAgICAgICAgICAgICAvL292ZXJsYXlcclxuICAgICAgICAgICAgICAgIG5vX292ZXJsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNoYW5nZURyYWN1bGFIZXJvSW1hZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSAkKFwiLmRyYWN1bGEtaGVyby1pbWFnZVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaW1hZ2UubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVNyYyA9IGltYWdlLmF0dHIoXCJzcmNcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0RhcmsgPSBpbWFnZVNyYy5pbmNsdWRlcyhcImhlcm8tZGFya1wiKTtcclxuICAgICAgICAgICAgICAgIGltYWdlLmF0dHIoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNyYy5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0RhcmsgPyBcImhlcm8tZGFya1wiIDogXCJoZXJvLWxpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGFyayA/IFwiaGVyby1saWdodFwiIDogXCJoZXJvLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5tb2RlLWJ0blwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICQoYC5tb2RlLWJ0bi5tb2RlLSR7aXNEYXJrID8gXCJsaWdodFwiIDogXCJkYXJrXCJ9YCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUFmZmlsaWF0ZUZvcm06IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmYWlsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByb2R1Y3Qgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIGxldCBwcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddOmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcHJvZHVjdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE1ldGhvZHMgU2VsZWN0aW9uXHJcbiAgICAgICAgICAgIGxldCBtZXRob2RzID0gW107XHJcblxyXG4gICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ106Y2hlY2tlZFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1ldGhvZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2Jvb3RzdHJhcCB2YWxpZGF0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkKHRoaXMpLmdldCgwKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgJChmb3JtKS5hZGRDbGFzcyhcIndhcy12YWxpZGF0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZmFpbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gJChcIiNuYW1lXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWwgPSAkKFwiI2VtYWlsXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVtYWlsID0gJChcIiNwZW1haWxcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb21haW4gPSAkKFwiI2RvbWFpblwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpc3RpY3MgPSAkKFwiI3N0YXRpc3RpY3NcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uID0gJChcclxuICAgICAgICAgICAgICAgICAgICBcIiNwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICkudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgd3AuYWpheC5zZW5kKFwiYWZmaWxpYXRlX3JlZ2lzdGVyXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVtYWlsOiBwZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpbjogZG9tYWluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IG1ldGhvZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpc3RpY3M6IHN0YXRpc3RpY3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb246IHByb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjc3VibWl0XCIpLmZpbmQoXCIuZmEtc3Bpbm5lclwiKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjYWZmaWxpYXRlLXJlZ2lzdGVyLWZvcm1cIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNzdWJtaXRcIikuZmluZChcIi5mYS1zcGlubmVyXCIpLmFkZENsYXNzKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVByb2R1Y3RDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0ncHJvZHVjdFtdJ106Y2hlY2tlZFwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlTWV0aG9kQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J21ldGhvZFtdJ106Y2hlY2tlZFwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZU1vZGFsVmlkZW86IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gYGA7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSAkKFwiLmhlcm8taG93LWJ1dHRcIik7XHJcbiAgICAgICAgICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kKG1vZGFsQ29udGVudCk7XHJcblxyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVNb2RhbFZpZGVvQ2xvc2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9ICQoXCIuaGVyby1ob3ctYnV0dFwiKS5jbG9zZXN0KCcjc3RhdGljQmFja2Ryb3AnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIHRhcmdldEVsZW1lbnQuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG5cclxuICAgIH07XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoYXBwLmluaXQpO1xyXG59KShqUXVlcnkpO1xyXG5cclxuIl0sIm5hbWVzIjpbIiQiLCJhcHAiLCJpbml0Iiwib24iLCJoYW5kbGVTd2l0Y2hlciIsImhhbmRsZUxpY2Vuc2VTd2l0Y2hlciIsImUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaGFzQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsImxpY2Vuc2UiLCJkYXRhIiwiY29uY2F0IiwiZG9jdW1lbnQiLCJyZWFkeSIsImpRdWVyeSIsImJhbm5lciIsInJlbW92ZSIsImNvdW50ZG93biIsImZpbmQiLCJ0aW1lciIsImxlbmd0aCIsIlNFQ09ORCIsIk1JTlVURSIsIkhPVVIiLCJEQVkiLCJmb3JtYXRUaW1lIiwiZGlzdGFuY2UiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInVwZGF0ZVRpbWVyIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJjb3VudERvd25EYXRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJodG1sIiwic2V0SXRlbSIsIngiLCJzZXRJbnRlcnZhbCIsImluaXRUZXN0aW1vbmlhbFNsaWRlciIsImluaXRGdW5GYWN0Q291bnRlciIsImluaXRGaXhkSGVhZGVyIiwiaGFuZGxlQ29udGFjdEZvcm0iLCJoYW5kbGVNb2RhbFZpZGVvIiwiaGFuZGxlTW9kYWxWaWRlb0Nsb3NlIiwiaGFuZGxlUG9wdXBpbWciLCJoYW5kbGVUb1RvcCIsImhhbmRsZVByaWNpbmdJdGVtIiwiaW5pdEltYWdlQ29tcGFyZSIsImNoYW5nZURyYWN1bGFIZXJvSW1hZ2UiLCJoYW5kbGVBZmZpbGlhdGVGb3JtIiwiaGFuZGxlUHJvZHVjdENoYW5nZSIsImhhbmRsZU1ldGhvZENoYW5nZSIsIm9wZW5TZWFyY2giLCJjYW5jZWxTZWFyY2giLCJmb2N1cyIsInNsaWNrIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImFycm93cyIsImF1dG9wbGF5U3BlZWQiLCJzcGVlZCIsImNvbnRlbnRQYWRkaW5nIiwibmV4dEFycm93IiwicHJldkFycm93IiwiYWRhcHRpdmVIZWlnaHQiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImRvdHMiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwidmVydGljYWwiLCJjb3VudGVyVXAiLCJkZWxheSIsInRpbWUiLCJsYXN0U2Nyb2xsVG9wIiwiZml4ZWRoZWFkZXIiLCJ3aW5kb3ciLCJzY3JvbGwiLCJjdXJyZW50U2Nyb2xsIiwic2Nyb2xsVG9wIiwiY2xpY2siLCJzcmMiLCJhdHRyIiwibWFnbmlmaWNQb3B1cCIsIm9wZW4iLCJpdGVtcyIsInR5cGUiLCJjbG9zZU9uQ29udGVudENsaWNrIiwibWFpbkNsYXNzIiwiaW1hZ2UiLCJ2ZXJ0aWNhbEZpdCIsImFuaW1hdGUiLCJ0d2VudHl0d2VudHkiLCJkZWZhdWx0X29mZnNldF9wY3QiLCJiZWZvcmVfbGFiZWwiLCJhZnRlcl9sYWJlbCIsIm5vX292ZXJsYXkiLCJpbWFnZVNyYyIsImlzRGFyayIsImluY2x1ZGVzIiwicmVwbGFjZSIsImZhaWxlZCIsInByb2R1Y3RzIiwiZWFjaCIsInB1c2giLCJ2YWwiLCJtZXRob2RzIiwiZm9ybSIsImdldCIsImNoZWNrVmFsaWRpdHkiLCJuYW1lIiwiZW1haWwiLCJwZW1haWwiLCJkb21haW4iLCJzdGF0aXN0aWNzIiwicHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbiIsIndwIiwiYWpheCIsInNlbmQiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsImhpZGUiLCJzaG93IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY29tcGxldGUiLCJtb2RhbENvbnRlbnQiLCJ0YXJnZXRFbGVtZW50IiwiYXBwZW5kIiwiY2xvc2VzdCIsImVtcHR5Il0sInNvdXJjZVJvb3QiOiIifQ==