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

      app.changeDraculaHeroImage();
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
    }
  };
  $(document).ready(app.init); //video js for radio player ads

  new VenoBox({
    selector: '.my-video-links'
  });
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07UUFDZCxJQUFNaUQsUUFBUSxHQUFHRCxLQUFLLENBQUNFLElBQU4sQ0FBVyxLQUFYLENBQWpCO1FBQ0EsSUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLFFBQVQsQ0FBa0IsV0FBbEIsQ0FBZjtRQUNBSixLQUFLLENBQUNFLElBQU4sQ0FDSSxLQURKLEVBRUlELFFBQVEsQ0FBQ0ksT0FBVCxDQUNJRixNQUFNLEdBQUcsV0FBSCxHQUFpQixZQUQzQixFQUVJQSxNQUFNLEdBQUcsWUFBSCxHQUFrQixXQUY1QixDQUZKO1FBUUFsRixDQUFDLENBQUMsV0FBRCxDQUFELENBQWVPLFdBQWYsQ0FBMkIsUUFBM0I7UUFDQVAsQ0FBQywwQkFBbUJrRixNQUFNLEdBQUcsT0FBSCxHQUFhLE1BQXRDLEVBQUQsQ0FBaUQxRSxRQUFqRCxDQUEwRCxRQUExRDtNQUNILENBYlUsRUFhUixJQWJRLENBQVg7SUFjSDtFQWpQTyxDQUFaO0VBc1BBUixDQUFDLENBQUNlLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCZixHQUFHLENBQUNDLElBQXRCLEVBdlBVLENBeVBWOztFQUNBLElBQUltRixPQUFKLENBQVk7SUFDUkMsUUFBUSxFQUFFO0VBREYsQ0FBWjtBQUlILENBOVBELEVBOFBHckUsTUE5UEgsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3NvZnRsYWIvLi9zcmMvanMvY29tcG9uZW50cy9wcmljaW5nLmpzIiwid2VicGFjazovL3NvZnRsYWIvLi9zcmMvanMvY29tcG9uZW50cy9zdGlja3ktYmFubmVyLmpzIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NvZnRsYWIvLi9zcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBjb25zdCBhcHAgPSB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL0hhbmRsZSBwcmljaW5nIHN3aXRjaGVyXHJcbiAgICAgICAgICAgICQoJy5wcmljaW5nLXN3aXRjaGVyJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZVN3aXRjaGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBsaWNlbnNlIHN3aXRjaGVyXHJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZUxpY2Vuc2VTd2l0Y2hlcik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQoJy5wcmljZS10ZXh0JykucmVtb3ZlQ2xhc3MoJ2FubnVhbCBsaWZldGltZScpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykgPyAnYW5udWFsJyA6ICdsaWZldGltZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVMaWNlbnNlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGUnKS50ZXh0KCQodGhpcykudGV4dCgpKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpY2Vuc2UgPSAkKHRoaXMpLmRhdGEoJ2xpY2Vuc2UnKTtcclxuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnbGljZW5zZS0xIGxpY2Vuc2UtNSBsaWNlbnNlLTEwMCcpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoYGxpY2Vuc2UtJHtsaWNlbnNlfWApO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoYXBwLmluaXQpO1xyXG5cclxufSkoalF1ZXJ5KTsiLCI7KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYmFubmVyID0gJCgnI2hlYWRlci1zdGlja3ktYmFubmVyJyk7XHJcblxyXG4gICAgICAgIC8vQ2xvc2UgYmFubmVyXHJcbiAgICAgICAgJCgnLmJhbm5lci1jbG9zZScsIGJhbm5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBiYW5uZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vQmFubmVyIGNvdW50ZG93blxyXG4gICAgICAgIGNvbnN0IGNvdW50ZG93biA9ICQoJy5iYW5uZXItY291bnRkb3duJywgYmFubmVyKTtcclxuICAgICAgICBjb25zdCB0aW1lciA9ICQoJy50aW1lcicsIGJhbm5lcik7XHJcblxyXG4gICAgICAgIGlmIChjb3VudGRvd24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAyNCAqIDYwICogNjAgKiAxMDAwICsgMiAqIDYwICogNjAgKiAxMDAwKS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgICAgICBsZXQgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKGRhdGVUaW1lKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICAvL2NoZWNrIGlmIHRoZXJlIGlzIGEgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZScpKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudERvd25EYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lci5odG1sKGA8c3BhbiBjbGFzcz1cImRheXNcIj4ke2RheXN9ZDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJob3Vyc1wiPiR7aG91cnN9aDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJtaW51dGVzXCI+JHttaW51dGVzfW08L3NwYW4+IDxzcGFuIGNsYXNzPVwic2Vjb25kc1wiPiR7c2Vjb25kc31zPC9zcGFuPmApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVyLnRleHQoXCJFWFBJUkVEXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0aW1lJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9zYXZlIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RpbWUnLCBjb3VudERvd25EYXRlKTtcclxuXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxufSkoalF1ZXJ5KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9jb21wb25lbnRzL3ByaWNpbmdcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3N0aWNreS1iYW5uZXJcIjtcclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG4gICAgY29uc3QgYXBwID0ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIC8vSW5pdCBUZXN0aW1vbmlhbCBTbGlkZXJcclxuICAgICAgICAgICAgYXBwLmluaXRUZXN0aW1vbmlhbFNsaWRlcigpO1xyXG5cclxuICAgICAgICAgICAgLy9Jbml0IEZ1biBGYWN0IENvdW50ZXJcclxuICAgICAgICAgICAgYXBwLmluaXRGdW5GYWN0Q291bnRlcigpO1xyXG5cclxuICAgICAgICAgICAgLy9IYW5kbGUgY29udGFjdCBmb3JtIHRhYnNcclxuICAgICAgICAgICAgJChcIi5jb250YWN0LWZvcm0gLnRhYi1pdGVtXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZUNvbnRhY3RGb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vSGFuZGxlIHRvIHRvcCBidXR0b25cclxuICAgICAgICAgICAgJChcIi50by10b3BcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlVG9Ub3ApO1xyXG5cclxuICAgICAgICAgICAgLy9oYW5kbGUgcHJpY2luZyBpdGVtIGNsaWNrXHJcbiAgICAgICAgICAgICQoXCIuaXRlbS1wcmljZVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVQcmljaW5nSXRlbSk7XHJcblxyXG4gICAgICAgICAgICAvL0hhbmRsZSBJbWFnZSBDb21wYXJlIG9uIFJlYWRlciBNb2RlIHBhZ2VcclxuICAgICAgICAgICAgYXBwLmluaXRJbWFnZUNvbXBhcmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vQ2hhbmdlIERyYWN1bGEgSGVybyBJbWFnZVxyXG4gICAgICAgICAgICBhcHAuY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSgpO1xyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICBpbml0VGVzdGltb25pYWxTbGlkZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gSG9tZSB0ZXN0aW1vbmlhbCBzbGlkZXJcclxuICAgICAgICAgICAgJChcIi5zaW5nbGUtdGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRQYWRkaW5nOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCIucmlnaHRcIixcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9nb29nbGUgZHJpdmVcclxuICAgICAgICAgICAgJChcIi50ZXN0aW1vbmlhbC1pdGVtc1wiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCIucmlnaHRcIixcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2Fib3V0IHNsaWRlclxyXG4gICAgICAgICAgICAkKFwiLnNsaWRlci1tYWluXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiLnVwXCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiLmRvd25cIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKFwiLmNvbXBhdC1zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTM5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vZHJhY3VsYSBzbGlkZXJcclxuICAgICAgICAgICAgJChcIi5kcmFjdWxhLXNsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXRGdW5GYWN0Q291bnRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLmNvdW50ZXJcIikuY291bnRlclVwKHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAxNixcclxuICAgICAgICAgICAgICAgIHRpbWU6IDE1MDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUNvbnRhY3RGb3JtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIuY29udGFjdC1mb3JtLXdyYXBcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoYC5jb250YWN0LWZvcm0td3JhcC5mb3JtLSR7JCh0aGlzKS5kYXRhKFwidGFyZ2V0XCIpfWApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVRvVG9wOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIFwiZmFzdFwiKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVQcmljaW5nSXRlbTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLml0ZW0tcHJpY2VcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5pdEltYWdlQ29tcGFyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLnJlYWRlci1tb2RlLWltYWdlLWNvbXBhcmVcIikudHdlbnR5dHdlbnR5KHtcclxuICAgICAgICAgICAgICAgIC8vICBIb3cgbXVjaCBvZiB0aGUgYmVmb3JlIGltYWdlIGlzIHZpc2libGUgd2hlbiB0aGUgcGFnZSBsb2Fkc1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdF9vZmZzZXRfcGN0OiAwLjUsXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbGFiZWwgdGV4dFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlX2xhYmVsOiBcIkdlbmVyYWwgVmlld1wiLFxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJfbGFiZWw6IFwiUmVhZGVyIE1vZGUgVmlld1wiLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vb3ZlcmxheVxyXG4gICAgICAgICAgICAgICAgbm9fb3ZlcmxheTogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2hhbmdlRHJhY3VsYUhlcm9JbWFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9ICQoXCIuZHJhY3VsYS1oZXJvLWltYWdlXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpbWFnZS5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlU3JjID0gaW1hZ2UuYXR0cihcInNyY1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzRGFyayA9IGltYWdlU3JjLmluY2x1ZGVzKFwiaGVyby1kYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuYXR0cihcclxuICAgICAgICAgICAgICAgICAgICBcInNyY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGFyayA/IFwiaGVyby1kYXJrXCIgOiBcImhlcm8tbGlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEYXJrID8gXCJoZXJvLWxpZ2h0XCIgOiBcImhlcm8tZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiLm1vZGUtYnRuXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgJChgLm1vZGUtYnRuLm1vZGUtJHtpc0RhcmsgPyBcImxpZ2h0XCIgOiBcImRhcmtcIn1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShhcHAuaW5pdCk7XHJcbiAgICBcclxuICAgIC8vdmlkZW8ganMgZm9yIHJhZGlvIHBsYXllciBhZHNcclxuICAgIG5ldyBWZW5vQm94KHtcclxuICAgICAgICBzZWxlY3RvcjogJy5teS12aWRlby1saW5rcycsXHJcbiAgICB9KTtcclxuXHJcbn0pKGpRdWVyeSk7XHJcbiJdLCJuYW1lcyI6WyIkIiwiYXBwIiwiaW5pdCIsIm9uIiwiaGFuZGxlU3dpdGNoZXIiLCJoYW5kbGVMaWNlbnNlU3dpdGNoZXIiLCJlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwidG9nZ2xlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJsaWNlbnNlIiwiZGF0YSIsImRvY3VtZW50IiwicmVhZHkiLCJqUXVlcnkiLCJiYW5uZXIiLCJyZW1vdmUiLCJjb3VudGRvd24iLCJ0aW1lciIsImxlbmd0aCIsImRhdGVUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0b0lTT1N0cmluZyIsImNvdW50RG93bkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwieCIsInNldEludGVydmFsIiwibm93IiwiZGlzdGFuY2UiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImh0bWwiLCJjbGVhckludGVydmFsIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJpbml0VGVzdGltb25pYWxTbGlkZXIiLCJpbml0RnVuRmFjdENvdW50ZXIiLCJoYW5kbGVDb250YWN0Rm9ybSIsImhhbmRsZVRvVG9wIiwiaGFuZGxlUHJpY2luZ0l0ZW0iLCJpbml0SW1hZ2VDb21wYXJlIiwiY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSIsInNsaWNrIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImFycm93cyIsImF1dG9wbGF5U3BlZWQiLCJzcGVlZCIsImNvbnRlbnRQYWRkaW5nIiwibmV4dEFycm93IiwicHJldkFycm93IiwiYWRhcHRpdmVIZWlnaHQiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImRvdHMiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwidmVydGljYWwiLCJjb3VudGVyVXAiLCJkZWxheSIsInRpbWUiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidHdlbnR5dHdlbnR5IiwiZGVmYXVsdF9vZmZzZXRfcGN0IiwiYmVmb3JlX2xhYmVsIiwiYWZ0ZXJfbGFiZWwiLCJub19vdmVybGF5IiwiaW1hZ2UiLCJpbWFnZVNyYyIsImF0dHIiLCJpc0RhcmsiLCJpbmNsdWRlcyIsInJlcGxhY2UiLCJWZW5vQm94Iiwic2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9