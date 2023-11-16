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
      $('.pricing-switcher').on('click', app.handleSwitcher); // Handle license switcher

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
    var banner = $('#header-sticky-banner, #halloween-offers, #black-friday-offers'); // Close banner

    banner.on('click', '.banner-close', function () {
      $('#header-sticky-banner').remove();
    }); // Banner countdown

    var countdown = banner.find('.banner-countdown');
    var timer = banner.find('.timer');

    if (countdown.length) {
      var updateTimer = function updateTimer() {
        var now = new Date().getTime();
        var countDownDate = new Date().getTime() + 96 * 60 * 60 * 1000; // Check if there is a time in local storage

        if (localStorage.getItem('softlab_offers_time')) {
          countDownDate = localStorage.getItem('softlab_offers_time');
        }

        var distance = countDownDate - now;

        if (distance < 0) {
          // Reset the time
          localStorage.removeItem('softlab_offers_time');
          return;
        }

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(distance % (1000 * 60) / 1000);
        timer.html("<span class=\"days\">".concat(days, "d</span> <span class=\"hours\">").concat(hours, "h</span> <span class=\"minutes\">").concat(minutes, "m</span> <span class=\"seconds\">").concat(seconds, "s</span>")); // Save time in local storage

        localStorage.setItem('softlab_offers_time', countDownDate);
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
      app.initTestimonialSlider(); //Init Fun Fact Counter

      app.initFunFactCounter(); //Handle contact form tabs

      $(".contact-form .tab-item").on("click", app.handleContactForm); //Handle to top button

      $(".to-top").on("click", app.handleToTop); //handle pricing item click

      $(".item-price").on("click", app.handlePricingItem); //Handle Image Compare on Reader Mode page

      app.initImageCompare(); //Change Dracula Hero Image

      app.changeDraculaHeroImage(); // Handle Affiliate Form

      $("#affiliate-register-form").on("submit", app.handleAffiliateForm);
      $("[name='product[]']").on("change", app.handleProductChange);
      $("[name='method[]']").on("change", app.handleMethodChange); // Handle Search

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
      }); //google drive

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
      }); //about slider

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
      }); //dracula slider

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
      var failed = false; // Product selection

      var products = [];
      $("[name='product[]']:checked").each(function () {
        products.push($(this).val());
      });

      if (!products.length) {
        $("[name='product[]']").attr("required", true);
        failed = true;
      } else {
        $("[name='product[]']").attr("required", false);
      } // Methods Selection


      var methods = [];
      $("[name='method[]']:checked").each(function () {
        methods.push($(this).val());
      });

      if (!methods.length) {
        $("[name='method[]']").attr("required", true);
        failed = true;
      } else {
        $("[name='method[]']").attr("required", false);
      } //bootstrap validation


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
  };
  $(document).ready(app.init);
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RjtFQW5XUyxDQUFaO0VBeVdBdEYsQ0FBQyxDQUFDZSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQmYsR0FBRyxDQUFDQyxJQUF0QjtBQUNELENBM1dELEVBMldHZSxNQTNXSCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3N0aWNreS1iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24gKCQpIHtcbiAgICBjb25zdCBhcHAgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vSGFuZGxlIHByaWNpbmcgc3dpdGNoZXJcbiAgICAgICAgICAgICQoJy5wcmljaW5nLXN3aXRjaGVyJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZVN3aXRjaGVyKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIGxpY2Vuc2Ugc3dpdGNoZXJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZUxpY2Vuc2VTd2l0Y2hlcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdhbm51YWwgbGlmZXRpbWUnKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICdhbm51YWwnIDogJ2xpZmV0aW1lJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYW5kbGVMaWNlbnNlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGUnKS50ZXh0KCQodGhpcykudGV4dCgpKTtcblxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgY29uc3QgbGljZW5zZSA9ICQodGhpcykuZGF0YSgnbGljZW5zZScpO1xuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnbGljZW5zZS0xIGxpY2Vuc2UtNSBsaWNlbnNlLTEwMCcpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGBsaWNlbnNlLSR7bGljZW5zZX1gKTtcblxuICAgICAgICB9LFxuXG5cbiAgICB9XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShhcHAuaW5pdCk7XG5cbn0pKGpRdWVyeSk7IiwiOyhmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBiYW5uZXIgPSAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXIsICNoYWxsb3dlZW4tb2ZmZXJzLCAjYmxhY2stZnJpZGF5LW9mZmVycycpO1xuXG4gICAgICAgIC8vIENsb3NlIGJhbm5lclxuICAgICAgICBiYW5uZXIub24oJ2NsaWNrJywgJy5iYW5uZXItY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXInKS5yZW1vdmUoKVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCYW5uZXIgY291bnRkb3duXG4gICAgICAgIGNvbnN0IGNvdW50ZG93biA9IGJhbm5lci5maW5kKCcuYmFubmVyLWNvdW50ZG93bicpO1xuICAgICAgICBjb25zdCB0aW1lciA9IGJhbm5lci5maW5kKCcudGltZXInKTtcblxuICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlVGltZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDk2ICogNjAgKiA2MCAqIDEwMDA7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29mdGxhYl9vZmZlcnNfdGltZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29mdGxhYl9vZmZlcnNfdGltZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcblxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIHRpbWVcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3NvZnRsYWJfb2ZmZXJzX3RpbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICAgICAgICAgICAgdGltZXIuaHRtbChgPHNwYW4gY2xhc3M9XCJkYXlzXCI+JHtkYXlzfWQ8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaG91cnNcIj4ke2hvdXJzfWg8L3NwYW4+IDxzcGFuIGNsYXNzPVwibWludXRlc1wiPiR7bWludXRlc31tPC9zcGFuPiA8c3BhbiBjbGFzcz1cInNlY29uZHNcIj4ke3NlY29uZHN9czwvc3Bhbj5gKTtcblxuICAgICAgICAgICAgICAgIC8vIFNhdmUgdGltZSBpbiBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NvZnRsYWJfb2ZmZXJzX3RpbWUnLCBjb3VudERvd25EYXRlKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHggPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XG4gICAgICAgICAgICB1cGRhdGVUaW1lcigpOyAvLyBDYWxsIGltbWVkaWF0ZWx5LCBkb27igJl0IHdhaXQgZm9yIHRoZSBmaXJzdCBpbnRlcnZhbCB0byBleGVjdXRlXG4gICAgICAgIH1cbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9jb21wb25lbnRzL3ByaWNpbmdcIjtcbmltcG9ydCBcIi4vY29tcG9uZW50cy9zdGlja3ktYmFubmVyXCI7XG5cbihmdW5jdGlvbiAoJCkge1xuICBjb25zdCBhcHAgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgLy9Jbml0IFRlc3RpbW9uaWFsIFNsaWRlclxuICAgICAgYXBwLmluaXRUZXN0aW1vbmlhbFNsaWRlcigpO1xuXG4gICAgICAvL0luaXQgRnVuIEZhY3QgQ291bnRlclxuICAgICAgYXBwLmluaXRGdW5GYWN0Q291bnRlcigpO1xuXG4gICAgICAvL0hhbmRsZSBjb250YWN0IGZvcm0gdGFic1xuICAgICAgJChcIi5jb250YWN0LWZvcm0gLnRhYi1pdGVtXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZUNvbnRhY3RGb3JtKTtcblxuXG4gICAgICAvL0hhbmRsZSB0byB0b3AgYnV0dG9uXG4gICAgICAkKFwiLnRvLXRvcFwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVUb1RvcCk7XG5cbiAgICAgIC8vaGFuZGxlIHByaWNpbmcgaXRlbSBjbGlja1xuICAgICAgJChcIi5pdGVtLXByaWNlXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZVByaWNpbmdJdGVtKTtcblxuICAgICAgLy9IYW5kbGUgSW1hZ2UgQ29tcGFyZSBvbiBSZWFkZXIgTW9kZSBwYWdlXG4gICAgICBhcHAuaW5pdEltYWdlQ29tcGFyZSgpO1xuXG4gICAgICAvL0NoYW5nZSBEcmFjdWxhIEhlcm8gSW1hZ2VcbiAgICAgIGFwcC5jaGFuZ2VEcmFjdWxhSGVyb0ltYWdlKCk7XG5cbiAgICAgIC8vIEhhbmRsZSBBZmZpbGlhdGUgRm9ybVxuICAgICAgJChcIiNhZmZpbGlhdGUtcmVnaXN0ZXItZm9ybVwiKS5vbihcInN1Ym1pdFwiLCBhcHAuaGFuZGxlQWZmaWxpYXRlRm9ybSk7XG5cbiAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikub24oXCJjaGFuZ2VcIiwgYXBwLmhhbmRsZVByb2R1Y3RDaGFuZ2UpO1xuICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLm9uKFwiY2hhbmdlXCIsIGFwcC5oYW5kbGVNZXRob2RDaGFuZ2UpO1xuXG4gICAgICAvLyBIYW5kbGUgU2VhcmNoXG4gICAgICAkKFwiLnNlYXJjaC1idG5cIikub24oXCJjbGlja1wiLCBhcHAub3BlblNlYXJjaCk7XG4gICAgICAkKFwiLmNlbmNlbC1idG5cIikub24oXCJjbGlja1wiLCBhcHAuY2FuY2VsU2VhcmNoKTtcblxuICAgIH0sXG5cbiAgICBvcGVuU2VhcmNoOiBmdW5jdGlvbiAoZSkge1xuICAgICAgJChcIi5zZWFyY2gtZm9ybVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgJChcIi5zZWFyY2gtZmllbGRcIikuZm9jdXMoKTtcbiAgICB9LFxuXG4gICAgY2FuY2VsU2VhcmNoOiBmdW5jdGlvbiAoZSkge1xuICAgICAgJChcIi5zZWFyY2gtZm9ybVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9LFxuXG4gICAgaW5pdFRlc3RpbW9uaWFsU2xpZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBIb21lIHRlc3RpbW9uaWFsIHNsaWRlclxuICAgICAgJChcIi5zaW5nbGUtdGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgICAgICBzcGVlZDogMjAwMCxcbiAgICAgICAgY29udGVudFBhZGRpbmc6IFwiMzBweFwiLFxuICAgICAgICBuZXh0QXJyb3c6IFwiLnJpZ2h0XCIsXG4gICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgIH0pO1xuXG4gICAgICAvL2dvb2dsZSBkcml2ZVxuICAgICAgJChcIi50ZXN0aW1vbmlhbC1pdGVtc1wiKS5zbGljayh7XG4gICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgICAgICBuZXh0QXJyb3c6IFwiLnJpZ2h0XCIsXG4gICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSk7XG4gICAgICAvL2Fib3V0IHNsaWRlclxuICAgICAgJChcIi5zbGlkZXItbWFpblwiKS5zbGljayh7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgIG5leHRBcnJvdzogXCIudXBcIixcbiAgICAgICAgcHJldkFycm93OiBcIi5kb3duXCIsXG4gICAgICAgIHZlcnRpY2FsOiB0cnVlLFxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICBjZW50ZXJQYWRkaW5nOiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAgIH0pO1xuXG4gICAgICAkKFwiLmNvbXBhdC1zbGlkZXJcIikuc2xpY2soe1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzOTkuOTgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KTtcbiAgICAgIC8vZHJhY3VsYSBzbGlkZXJcbiAgICAgICQoXCIuZHJhY3VsYS1zbGlkZXJcIikuc2xpY2soe1xuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcbiAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBpbml0RnVuRmFjdENvdW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoXCIuY291bnRlclwiKS5jb3VudGVyVXAoe1xuICAgICAgICBkZWxheTogMTYsXG4gICAgICAgIHRpbWU6IDE1MDAsXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgaGFuZGxlQ29udGFjdEZvcm06IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAgICQoXCIuY29udGFjdC1mb3JtLXdyYXBcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAkKGAuY29udGFjdC1mb3JtLXdyYXAuZm9ybS0keyQodGhpcykuZGF0YShcInRhcmdldFwiKX1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9LFxuXG5cbiAgICBoYW5kbGVUb1RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCBcImZhc3RcIik7XG4gICAgfSxcblxuICAgIGhhbmRsZVByaWNpbmdJdGVtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKFwiLml0ZW0tcHJpY2VcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH0sXG5cbiAgICBpbml0SW1hZ2VDb21wYXJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKFwiLnJlYWRlci1tb2RlLWltYWdlLWNvbXBhcmVcIikudHdlbnR5dHdlbnR5KHtcbiAgICAgICAgLy8gIEhvdyBtdWNoIG9mIHRoZSBiZWZvcmUgaW1hZ2UgaXMgdmlzaWJsZSB3aGVuIHRoZSBwYWdlIGxvYWRzXG4gICAgICAgIGRlZmF1bHRfb2Zmc2V0X3BjdDogMC41LFxuXG4gICAgICAgIC8vIGxhYmVsIHRleHRcbiAgICAgICAgYmVmb3JlX2xhYmVsOiBcIkdlbmVyYWwgVmlld1wiLFxuICAgICAgICBhZnRlcl9sYWJlbDogXCJSZWFkZXIgTW9kZSBWaWV3XCIsXG5cbiAgICAgICAgLy9vdmVybGF5XG4gICAgICAgIG5vX292ZXJsYXk6IHRydWUsXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgY2hhbmdlRHJhY3VsYUhlcm9JbWFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgaW1hZ2UgPSAkKFwiLmRyYWN1bGEtaGVyby1pbWFnZVwiKTtcblxuICAgICAgaWYgKCFpbWFnZS5sZW5ndGgpIHJldHVybjtcblxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbWFnZVNyYyA9IGltYWdlLmF0dHIoXCJzcmNcIik7XG4gICAgICAgIGNvbnN0IGlzRGFyayA9IGltYWdlU3JjLmluY2x1ZGVzKFwiaGVyby1kYXJrXCIpO1xuICAgICAgICBpbWFnZS5hdHRyKFxuICAgICAgICAgIFwic3JjXCIsXG4gICAgICAgICAgaW1hZ2VTcmMucmVwbGFjZShcbiAgICAgICAgICAgIGlzRGFyayA/IFwiaGVyby1kYXJrXCIgOiBcImhlcm8tbGlnaHRcIixcbiAgICAgICAgICAgIGlzRGFyayA/IFwiaGVyby1saWdodFwiIDogXCJoZXJvLWRhcmtcIlxuICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICAkKFwiLm1vZGUtYnRuXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAkKGAubW9kZS1idG4ubW9kZS0ke2lzRGFyayA/IFwibGlnaHRcIiA6IFwiZGFya1wifWApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSxcblxuICAgIGhhbmRsZUFmZmlsaWF0ZUZvcm06IGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHZhciBmYWlsZWQgPSBmYWxzZTtcblxuICAgICAgLy8gUHJvZHVjdCBzZWxlY3Rpb25cbiAgICAgIGxldCBwcm9kdWN0cyA9IFtdO1xuICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBwcm9kdWN0cy5wdXNoKCQodGhpcykudmFsKCkpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghcHJvZHVjdHMubGVuZ3RoKSB7XG4gICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xuICAgICAgICBmYWlsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICAvLyBNZXRob2RzIFNlbGVjdGlvblxuICAgICAgbGV0IG1ldGhvZHMgPSBbXTtcblxuICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddOmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1ldGhvZHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIW1ldGhvZHMubGVuZ3RoKSB7XG4gICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XG4gICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgLy9ib290c3RyYXAgdmFsaWRhdGlvblxuICAgICAgY29uc3QgZm9ybSA9ICQodGhpcykuZ2V0KDApO1xuXG4gICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlKSB7XG4gICAgICAgIGZhaWxlZCA9IHRydWU7XG5cbiAgICAgICAgJChmb3JtKS5hZGRDbGFzcyhcIndhcy12YWxpZGF0ZWRcIik7XG4gICAgICB9XG5cbiAgICAgIGlmICghZmFpbGVkKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSAkKFwiI25hbWVcIikudmFsKCk7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gJChcIiNlbWFpbFwiKS52YWwoKTtcbiAgICAgICAgY29uc3QgcGVtYWlsID0gJChcIiNwZW1haWxcIikudmFsKCk7XG4gICAgICAgIGNvbnN0IGRvbWFpbiA9ICQoXCIjZG9tYWluXCIpLnZhbCgpO1xuICAgICAgICBjb25zdCBzdGF0aXN0aWNzID0gJChcIiNzdGF0aXN0aWNzXCIpLnZhbCgpO1xuICAgICAgICBjb25zdCBwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uID0gJChcbiAgICAgICAgICBcIiNwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgKS52YWwoKTtcblxuICAgICAgICB3cC5hamF4LnNlbmQoXCJhZmZpbGlhdGVfcmVnaXN0ZXJcIiwge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICBwZW1haWw6IHBlbWFpbCxcbiAgICAgICAgICAgIGRvbWFpbjogZG9tYWluLFxuICAgICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLFxuICAgICAgICAgICAgbWV0aG9kczogbWV0aG9kcyxcbiAgICAgICAgICAgIHN0YXRpc3RpY3M6IHN0YXRpc3RpY3MsXG4gICAgICAgICAgICBwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uOiBwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xuICAgICAgICAgICAgJChcIiNzdWJtaXRcIikuZmluZChcIi5mYS1zcGlubmVyXCIpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICQoXCIjYWZmaWxpYXRlLXJlZ2lzdGVyLWZvcm1cIikuaGlkZSgpO1xuXG4gICAgICAgICAgICAkKFwiLm1lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICQoXCIjc3VibWl0XCIpLmZpbmQoXCIuZmEtc3Bpbm5lclwiKS5hZGRDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlUHJvZHVjdENoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQoXCJbbmFtZT0ncHJvZHVjdFtdJ106Y2hlY2tlZFwiKS5sZW5ndGgpIHtcbiAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZU1ldGhvZENoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQoXCJbbmFtZT0nbWV0aG9kW10nXTpjaGVja2VkXCIpLmxlbmd0aCkge1xuICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcblxuXG5cblxuICAkKGRvY3VtZW50KS5yZWFkeShhcHAuaW5pdCk7XG59KShqUXVlcnkpO1xuXG4iXSwibmFtZXMiOlsiJCIsImFwcCIsImluaXQiLCJvbiIsImhhbmRsZVN3aXRjaGVyIiwiaGFuZGxlTGljZW5zZVN3aXRjaGVyIiwiZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsInRvZ2dsZUNsYXNzIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwibGljZW5zZSIsImRhdGEiLCJkb2N1bWVudCIsInJlYWR5IiwialF1ZXJ5IiwiYmFubmVyIiwicmVtb3ZlIiwiY291bnRkb3duIiwiZmluZCIsInRpbWVyIiwibGVuZ3RoIiwidXBkYXRlVGltZXIiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImNvdW50RG93bkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGlzdGFuY2UiLCJyZW1vdmVJdGVtIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJodG1sIiwic2V0SXRlbSIsIngiLCJzZXRJbnRlcnZhbCIsImluaXRUZXN0aW1vbmlhbFNsaWRlciIsImluaXRGdW5GYWN0Q291bnRlciIsImhhbmRsZUNvbnRhY3RGb3JtIiwiaGFuZGxlVG9Ub3AiLCJoYW5kbGVQcmljaW5nSXRlbSIsImluaXRJbWFnZUNvbXBhcmUiLCJjaGFuZ2VEcmFjdWxhSGVyb0ltYWdlIiwiaGFuZGxlQWZmaWxpYXRlRm9ybSIsImhhbmRsZVByb2R1Y3RDaGFuZ2UiLCJoYW5kbGVNZXRob2RDaGFuZ2UiLCJvcGVuU2VhcmNoIiwiY2FuY2VsU2VhcmNoIiwiZm9jdXMiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhcnJvd3MiLCJhdXRvcGxheVNwZWVkIiwic3BlZWQiLCJjb250ZW50UGFkZGluZyIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsImFkYXB0aXZlSGVpZ2h0IiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJkb3RzIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInZlcnRpY2FsIiwiY291bnRlclVwIiwiZGVsYXkiLCJ0aW1lIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInR3ZW50eXR3ZW50eSIsImRlZmF1bHRfb2Zmc2V0X3BjdCIsImJlZm9yZV9sYWJlbCIsImFmdGVyX2xhYmVsIiwibm9fb3ZlcmxheSIsImltYWdlIiwiaW1hZ2VTcmMiLCJhdHRyIiwiaXNEYXJrIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwiZmFpbGVkIiwicHJvZHVjdHMiLCJlYWNoIiwicHVzaCIsInZhbCIsIm1ldGhvZHMiLCJmb3JtIiwiZ2V0IiwiY2hlY2tWYWxpZGl0eSIsIm5hbWUiLCJlbWFpbCIsInBlbWFpbCIsImRvbWFpbiIsInN0YXRpc3RpY3MiLCJwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uIiwid3AiLCJhamF4Iiwic2VuZCIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwiaGlkZSIsInNob3ciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjb21wbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=