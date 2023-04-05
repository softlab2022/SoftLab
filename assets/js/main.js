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
    var banner = $('#header-sticky-banner'); //Close banner

    $('.banner-close', banner).on('click', function () {
      banner.remove();
    }); //Banner countdown

    var countdown = $('.banner-countdown', banner);
    var timer = $('.timer', banner);

    if (countdown.length) {
      var dateTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString();
      var countDownDate = new Date(dateTime).getTime(); //check if there is a time in local storage

      if (localStorage.getItem('time')) {
        countDownDate = localStorage.getItem('time');
      }

      var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(distance % (1000 * 60) / 1000);
        timer.html("<span class=\"days\">".concat(days, "d</span> <span class=\"hours\">").concat(hours, "h</span> <span class=\"minutes\">").concat(minutes, "m</span> <span class=\"seconds\">").concat(seconds, "s</span>"));

        if (distance < 0) {
          clearInterval(x);
          timer.text("EXPIRED");
          localStorage.removeItem('time');
        } //save time in local storage


        localStorage.setItem('time', countDownDate);
      }, 1000);
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

      $('.search-btn').on('click', app.openSearch);
      $('.cencel-btn').on('click', app.cancelSearch);
    },
    openSearch: function openSearch(e) {
      $('.search-form').addClass('active');
    },
    cancelSearch: function cancelSearch(e) {
      $('.search-form').removeClass('active');
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
        $(form).addClass('was-validated');
      }

      if (!failed) {
        var name = $("#name").val();
        var email = $("#email").val();
        var pemail = $("#pemail").val();
        var domain = $("#domain").val();
        var statistics = $("#statistics").val();
        var promotion_method_description = $("#promotion_method_description").val();
        wp.ajax.send('affiliate_register', {
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
            $('#submit').find('.fa-spinner').removeClass('d-none');
          },
          success: function success(data) {
            //console.log(data);
            $('#affiliate-register-form').hide();
            $('.message').show();
          },
          error: function error(_error) {
            console.log(_error);
          },
          complete: function complete() {
            $('#submit').find('.fa-spinner').addClass('d-none');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQ0h0RixDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QnNGLElBQXZCLENBQTRCLFVBQTVCLEVBQXdDLElBQXhDO01BQ0g7SUFDSjtFQWpXTyxDQUFaO0VBcVdBdEYsQ0FBQyxDQUFDZSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQmYsR0FBRyxDQUFDQyxJQUF0QjtBQUlILENBMVdELEVBMFdHZSxNQTFXSCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3N0aWNreS1iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24gKCQpIHtcbiAgICBjb25zdCBhcHAgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vSGFuZGxlIHByaWNpbmcgc3dpdGNoZXJcbiAgICAgICAgICAgICQoJy5wcmljaW5nLXN3aXRjaGVyJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZVN3aXRjaGVyKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIGxpY2Vuc2Ugc3dpdGNoZXJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZUxpY2Vuc2VTd2l0Y2hlcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdhbm51YWwgbGlmZXRpbWUnKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICdhbm51YWwnIDogJ2xpZmV0aW1lJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYW5kbGVMaWNlbnNlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGUnKS50ZXh0KCQodGhpcykudGV4dCgpKTtcblxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgY29uc3QgbGljZW5zZSA9ICQodGhpcykuZGF0YSgnbGljZW5zZScpO1xuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnbGljZW5zZS0xIGxpY2Vuc2UtNSBsaWNlbnNlLTEwMCcpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGBsaWNlbnNlLSR7bGljZW5zZX1gKTtcblxuICAgICAgICB9LFxuXG5cbiAgICB9XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShhcHAuaW5pdCk7XG5cbn0pKGpRdWVyeSk7IiwiOyhmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBiYW5uZXIgPSAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXInKTtcblxuICAgICAgICAvL0Nsb3NlIGJhbm5lclxuICAgICAgICAkKCcuYmFubmVyLWNsb3NlJywgYmFubmVyKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBiYW5uZXIucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vQmFubmVyIGNvdW50ZG93blxuICAgICAgICBjb25zdCBjb3VudGRvd24gPSAkKCcuYmFubmVyLWNvdW50ZG93bicsIGJhbm5lcik7XG4gICAgICAgIGNvbnN0IHRpbWVyID0gJCgnLnRpbWVyJywgYmFubmVyKTtcblxuICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDI0ICogNjAgKiA2MCAqIDEwMDAgKyAyICogNjAgKiA2MCAqIDEwMDApLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICBsZXQgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKGRhdGVUaW1lKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgICAgIC8vY2hlY2sgaWYgdGhlcmUgaXMgYSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZScpKSB7XG4gICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lJyk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgY29uc3QgeCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgICAgIHRpbWVyLmh0bWwoYDxzcGFuIGNsYXNzPVwiZGF5c1wiPiR7ZGF5c31kPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhvdXJzXCI+JHtob3Vyc31oPC9zcGFuPiA8c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIj4ke21pbnV0ZXN9bTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzZWNvbmRzXCI+JHtzZWNvbmRzfXM8L3NwYW4+YCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoeCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVyLnRleHQoXCJFWFBJUkVEXCIpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGltZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vc2F2ZSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGltZScsIGNvdW50RG93bkRhdGUpO1xuXG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG59KShqUXVlcnkpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvcHJpY2luZ1wiO1xuaW1wb3J0IFwiLi9jb21wb25lbnRzL3N0aWNreS1iYW5uZXJcIjtcblxuKGZ1bmN0aW9uICgkKSB7XG4gICAgY29uc3QgYXBwID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8vSW5pdCBUZXN0aW1vbmlhbCBTbGlkZXJcbiAgICAgICAgICAgIGFwcC5pbml0VGVzdGltb25pYWxTbGlkZXIoKTtcblxuICAgICAgICAgICAgLy9Jbml0IEZ1biBGYWN0IENvdW50ZXJcbiAgICAgICAgICAgIGFwcC5pbml0RnVuRmFjdENvdW50ZXIoKTtcblxuICAgICAgICAgICAgLy9IYW5kbGUgY29udGFjdCBmb3JtIHRhYnNcbiAgICAgICAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVDb250YWN0Rm9ybSk7XG5cbiAgICAgICAgICAgIC8vSGFuZGxlIHRvIHRvcCBidXR0b25cbiAgICAgICAgICAgICQoXCIudG8tdG9wXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZVRvVG9wKTtcblxuICAgICAgICAgICAgLy9oYW5kbGUgcHJpY2luZyBpdGVtIGNsaWNrXG4gICAgICAgICAgICAkKFwiLml0ZW0tcHJpY2VcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlUHJpY2luZ0l0ZW0pO1xuXG4gICAgICAgICAgICAvL0hhbmRsZSBJbWFnZSBDb21wYXJlIG9uIFJlYWRlciBNb2RlIHBhZ2VcbiAgICAgICAgICAgIGFwcC5pbml0SW1hZ2VDb21wYXJlKCk7XG5cbiAgICAgICAgICAgIC8vQ2hhbmdlIERyYWN1bGEgSGVybyBJbWFnZVxuICAgICAgICAgICAgYXBwLmNoYW5nZURyYWN1bGFIZXJvSW1hZ2UoKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIEFmZmlsaWF0ZSBGb3JtXG4gICAgICAgICAgICAkKFwiI2FmZmlsaWF0ZS1yZWdpc3Rlci1mb3JtXCIpLm9uKFwic3VibWl0XCIsIGFwcC5oYW5kbGVBZmZpbGlhdGVGb3JtKTtcblxuICAgICAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5vbihcImNoYW5nZVwiLCBhcHAuaGFuZGxlUHJvZHVjdENoYW5nZSk7XG4gICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikub24oXCJjaGFuZ2VcIiwgYXBwLmhhbmRsZU1ldGhvZENoYW5nZSk7XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBTZWFyY2hcbiAgICAgICAgICAgICQoJy5zZWFyY2gtYnRuJykub24oJ2NsaWNrJywgYXBwLm9wZW5TZWFyY2gpO1xuICAgICAgICAgICAgJCgnLmNlbmNlbC1idG4nKS5vbignY2xpY2snLCBhcHAuY2FuY2VsU2VhcmNoKTtcblxuICAgICAgICB9LFxuXG4gICAgICAgIG9wZW5TZWFyY2g6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAkKCcuc2VhcmNoLWZvcm0nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FuY2VsU2VhcmNoOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgJCgnLnNlYXJjaC1mb3JtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRUZXN0aW1vbmlhbFNsaWRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gSG9tZSB0ZXN0aW1vbmlhbCBzbGlkZXJcbiAgICAgICAgICAgICQoXCIuc2luZ2xlLXRlc3RpbW9uaWFsLWl0ZW1zXCIpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDIwMDAsXG4gICAgICAgICAgICAgICAgY29udGVudFBhZGRpbmc6IFwiMzBweFwiLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCIucmlnaHRcIixcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL2dvb2dsZSBkcml2ZVxuICAgICAgICAgICAgJChcIi50ZXN0aW1vbmlhbC1pdGVtc1wiKS5zbGljayh7XG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIi5yaWdodFwiLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9hYm91dCBzbGlkZXJcbiAgICAgICAgICAgICQoXCIuc2xpZGVyLW1haW5cIikuc2xpY2soe1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIi51cFwiLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCIuZG93blwiLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKFwiLmNvbXBhdC1zbGlkZXJcIikuc2xpY2soe1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMzk5Ljk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vZHJhY3VsYSBzbGlkZXJcbiAgICAgICAgICAgICQoXCIuZHJhY3VsYS1zbGlkZXJcIikuc2xpY2soe1xuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0RnVuRmFjdENvdW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoXCIuY291bnRlclwiKS5jb3VudGVyVXAoe1xuICAgICAgICAgICAgICAgIGRlbGF5OiAxNixcbiAgICAgICAgICAgICAgICB0aW1lOiAxNTAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlQ29udGFjdEZvcm06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgICAgICQoXCIuY29udGFjdC1mb3JtLXdyYXBcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAkKGAuY29udGFjdC1mb3JtLXdyYXAuZm9ybS0keyQodGhpcykuZGF0YShcInRhcmdldFwiKX1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYW5kbGVUb1RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgXCJmYXN0XCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhbmRsZVByaWNpbmdJdGVtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKFwiLml0ZW0tcHJpY2VcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRJbWFnZUNvbXBhcmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoXCIucmVhZGVyLW1vZGUtaW1hZ2UtY29tcGFyZVwiKS50d2VudHl0d2VudHkoe1xuICAgICAgICAgICAgICAgIC8vICBIb3cgbXVjaCBvZiB0aGUgYmVmb3JlIGltYWdlIGlzIHZpc2libGUgd2hlbiB0aGUgcGFnZSBsb2Fkc1xuICAgICAgICAgICAgICAgIGRlZmF1bHRfb2Zmc2V0X3BjdDogMC41LFxuXG4gICAgICAgICAgICAgICAgLy8gbGFiZWwgdGV4dFxuICAgICAgICAgICAgICAgIGJlZm9yZV9sYWJlbDogXCJHZW5lcmFsIFZpZXdcIixcbiAgICAgICAgICAgICAgICBhZnRlcl9sYWJlbDogXCJSZWFkZXIgTW9kZSBWaWV3XCIsXG5cbiAgICAgICAgICAgICAgICAvL292ZXJsYXlcbiAgICAgICAgICAgICAgICBub19vdmVybGF5OiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2hhbmdlRHJhY3VsYUhlcm9JbWFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSAkKFwiLmRyYWN1bGEtaGVyby1pbWFnZVwiKTtcblxuICAgICAgICAgICAgaWYgKCFpbWFnZS5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlU3JjID0gaW1hZ2UuYXR0cihcInNyY1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0RhcmsgPSBpbWFnZVNyYy5pbmNsdWRlcyhcImhlcm8tZGFya1wiKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5hdHRyKFxuICAgICAgICAgICAgICAgICAgICBcInNyY1wiLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNyYy5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEYXJrID8gXCJoZXJvLWRhcmtcIiA6IFwiaGVyby1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEYXJrID8gXCJoZXJvLWxpZ2h0XCIgOiBcImhlcm8tZGFya1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgJChcIi5tb2RlLWJ0blwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkKGAubW9kZS1idG4ubW9kZS0ke2lzRGFyayA/IFwibGlnaHRcIiA6IFwiZGFya1wifWApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlQWZmaWxpYXRlRm9ybTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyIGZhaWxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBQcm9kdWN0IHNlbGVjdGlvblxuICAgICAgICAgICAgbGV0IHByb2R1Y3RzID0gW107XG4gICAgICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddOmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIXByb2R1Y3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTWV0aG9kcyBTZWxlY3Rpb25cbiAgICAgICAgICAgIGxldCBtZXRob2RzID0gW107XG5cbiAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG1ldGhvZHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIW1ldGhvZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9ib290c3RyYXAgdmFsaWRhdGlvblxuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICQodGhpcykuZ2V0KDApO1xuXG4gICAgICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICQoZm9ybSkuYWRkQ2xhc3MoJ3dhcy12YWxpZGF0ZWQnKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpZiAoIWZhaWxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSAkKFwiI25hbWVcIikudmFsKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWwgPSAkKFwiI2VtYWlsXCIpLnZhbCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlbWFpbCA9ICQoXCIjcGVtYWlsXCIpLnZhbCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRvbWFpbiA9ICQoXCIjZG9tYWluXCIpLnZhbCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpc3RpY3MgPSAkKFwiI3N0YXRpc3RpY3NcIikudmFsKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbiA9ICQoXCIjcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvblwiKS52YWwoKTtcblxuICAgICAgICAgICAgICAgIHdwLmFqYXguc2VuZCgnYWZmaWxpYXRlX3JlZ2lzdGVyJywge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVtYWlsOiBwZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21haW46IGRvbWFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IG1ldGhvZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aXN0aWNzOiBzdGF0aXN0aWNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbjogcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3N1Ym1pdCcpLmZpbmQoJy5mYS1zcGlubmVyJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNhZmZpbGlhdGUtcmVnaXN0ZXItZm9ybScpLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm1lc3NhZ2UnKS5zaG93KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3N1Ym1pdCcpLmZpbmQoJy5mYS1zcGlubmVyJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlUHJvZHVjdENoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0ncHJvZHVjdFtdJ106Y2hlY2tlZFwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGhhbmRsZU1ldGhvZENoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nbWV0aG9kW10nXTpjaGVja2VkXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgfTtcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcbiAgICBcblxuXG59KShqUXVlcnkpO1xuIl0sIm5hbWVzIjpbIiQiLCJhcHAiLCJpbml0Iiwib24iLCJoYW5kbGVTd2l0Y2hlciIsImhhbmRsZUxpY2Vuc2VTd2l0Y2hlciIsImUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaGFzQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsImxpY2Vuc2UiLCJkYXRhIiwiZG9jdW1lbnQiLCJyZWFkeSIsImpRdWVyeSIsImJhbm5lciIsInJlbW92ZSIsImNvdW50ZG93biIsInRpbWVyIiwibGVuZ3RoIiwiZGF0ZVRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRvSVNPU3RyaW5nIiwiY291bnREb3duRGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ4Iiwic2V0SW50ZXJ2YWwiLCJub3ciLCJkaXN0YW5jZSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiaHRtbCIsImNsZWFySW50ZXJ2YWwiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImluaXRUZXN0aW1vbmlhbFNsaWRlciIsImluaXRGdW5GYWN0Q291bnRlciIsImhhbmRsZUNvbnRhY3RGb3JtIiwiaGFuZGxlVG9Ub3AiLCJoYW5kbGVQcmljaW5nSXRlbSIsImluaXRJbWFnZUNvbXBhcmUiLCJjaGFuZ2VEcmFjdWxhSGVyb0ltYWdlIiwiaGFuZGxlQWZmaWxpYXRlRm9ybSIsImhhbmRsZVByb2R1Y3RDaGFuZ2UiLCJoYW5kbGVNZXRob2RDaGFuZ2UiLCJvcGVuU2VhcmNoIiwiY2FuY2VsU2VhcmNoIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXJyb3dzIiwiYXV0b3BsYXlTcGVlZCIsInNwZWVkIiwiY29udGVudFBhZGRpbmciLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJhZGFwdGl2ZUhlaWdodCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiZG90cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ2ZXJ0aWNhbCIsImNvdW50ZXJVcCIsImRlbGF5IiwidGltZSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ0d2VudHl0d2VudHkiLCJkZWZhdWx0X29mZnNldF9wY3QiLCJiZWZvcmVfbGFiZWwiLCJhZnRlcl9sYWJlbCIsIm5vX292ZXJsYXkiLCJpbWFnZSIsImltYWdlU3JjIiwiYXR0ciIsImlzRGFyayIsImluY2x1ZGVzIiwicmVwbGFjZSIsImZhaWxlZCIsInByb2R1Y3RzIiwiZWFjaCIsInB1c2giLCJ2YWwiLCJtZXRob2RzIiwiZm9ybSIsImdldCIsImNoZWNrVmFsaWRpdHkiLCJuYW1lIiwiZW1haWwiLCJwZW1haWwiLCJkb21haW4iLCJzdGF0aXN0aWNzIiwicHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbiIsIndwIiwiYWpheCIsInNlbmQiLCJiZWZvcmVTZW5kIiwiZmluZCIsInN1Y2Nlc3MiLCJoaWRlIiwic2hvdyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNvbXBsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==