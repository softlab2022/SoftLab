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


;

(function ($) {
  var app = {
    init: function init() {
      app.initTestimonialSlider();
      app.initFunFactCounter();
      $('.contact-form .tab-item').on('click', app.handleContactForm);
      $('.to-top').on('click', app.handleToTop); //handle pricing item click

      $('.item-price').on('click', app.handlePricingItem);
      app.initImageCompare();
      app.changeDraculaHeroImage();
    },
    initTestimonialSlider: function initTestimonialSlider() {
      // Home testimonial slider
      $('.single-testimonial-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 3000,
        speed: 2000,
        contentPadding: '30px',
        nextArrow: '.right',
        prevArrow: '.left',
        adaptiveHeight: true
      }); //google drive

      $('.testimonial-items').slick({
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 3000,
        nextArrow: '.right',
        prevArrow: '.left',
        responsive: [{
          breakpoint: 1199.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 3
          }
        }, {
          breakpoint: 991.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 2
          }
        }, {
          breakpoint: 767.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }]
      }); //about slider

      $('.slider-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        nextArrow: '.up',
        prevArrow: '.down',
        vertical: true,
        centerMode: true,
        centerPadding: false,
        autoplaySpeed: 2000
      });
      $('.compat-slider').slick({
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
            centerPadding: '40px',
            slidesToShow: 5
          }
        }, {
          breakpoint: 1199.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 4
          }
        }, {
          breakpoint: 991.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 3
          }
        }, {
          breakpoint: 767.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 2
          }
        }]
      }); //dracula slider

      $('.dracula-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [{
          breakpoint: 1199.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 3
          }
        }, {
          breakpoint: 991.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 2
          }
        }, {
          breakpoint: 767.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }]
      });
    },
    initFunFactCounter: function initFunFactCounter() {
      $('.counter').counterUp({
        delay: 16,
        time: 1500
      });
    },
    handleContactForm: function handleContactForm() {
      $('.contact-form .tab-item').removeClass('active');
      $(this).addClass('active');
      $('.contact-form-wrap').removeClass('active');
      $(".contact-form-wrap.form-".concat($(this).data('target'))).addClass('active');
    },
    handleToTop: function handleToTop() {
      $('html, body').animate({
        scrollTop: 0
      }, 'fast');
    },
    handlePricingItem: function handlePricingItem() {
      $('.item-price').removeClass('active');
      $(this).addClass('active');
    },
    initImageCompare: function initImageCompare() {
      $(".reader-mode-image-compare").twentytwenty({
        //  How much of the before image is visible when the page loads
        default_offset_pct: 0.5,
        // label text
        before_label: 'General View',
        after_label: 'Reader Mode View',
        //overlay
        no_overlay: true
      });
    },
    changeDraculaHeroImage: function changeDraculaHeroImage() {
      var image = $('.dracula-hero-image');
      setInterval(function () {
        var imageSrc = image.attr('src');
        var isDark = imageSrc.includes('hero-dark');
        image.attr('src', imageSrc.replace(isDark ? 'hero-dark' : 'hero-light', isDark ? 'hero-light' : 'hero-dark'));
        $('.mode-btn').removeClass('active');
        $(".mode-btn.mode-".concat(isDark ? 'light' : 'dark')).addClass('active');
      }, 2000);
    }
  };
  $(document).ready(app.init);
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQVcsS0FBWCxFQUFrQkQsUUFBUSxDQUFDSSxPQUFULENBQWlCRixNQUFNLEdBQUcsV0FBSCxHQUFpQixZQUF4QyxFQUFzREEsTUFBTSxHQUFHLFlBQUgsR0FBa0IsV0FBOUUsQ0FBbEI7UUFFQWpGLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZU8sV0FBZixDQUEyQixRQUEzQjtRQUNBUCxDQUFDLDBCQUFtQmlGLE1BQU0sR0FBRyxPQUFILEdBQWEsTUFBdEMsRUFBRCxDQUFpRHpFLFFBQWpELENBQTBELFFBQTFEO01BRUgsQ0FSVSxFQVFSLElBUlEsQ0FBWDtJQVNIO0VBak9PLENBQVo7RUFxT0FSLENBQUMsQ0FBQ2UsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0JmLEdBQUcsQ0FBQ0MsSUFBdEI7QUFHSCxDQTFPQSxFQTBPRWUsTUExT0YsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3NvZnRsYWIvLi9zcmMvanMvY29tcG9uZW50cy9wcmljaW5nLmpzIiwid2VicGFjazovL3NvZnRsYWIvLi9zcmMvanMvY29tcG9uZW50cy9zdGlja3ktYmFubmVyLmpzIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NvZnRsYWIvLi9zcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBjb25zdCBhcHAgPSB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL0hhbmRsZSBwcmljaW5nIHN3aXRjaGVyXHJcbiAgICAgICAgICAgICQoJy5wcmljaW5nLXN3aXRjaGVyJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZVN3aXRjaGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBsaWNlbnNlIHN3aXRjaGVyXHJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZUxpY2Vuc2VTd2l0Y2hlcik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQoJy5wcmljZS10ZXh0JykucmVtb3ZlQ2xhc3MoJ2FubnVhbCBsaWZldGltZScpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykgPyAnYW5udWFsJyA6ICdsaWZldGltZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVMaWNlbnNlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGUnKS50ZXh0KCQodGhpcykudGV4dCgpKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpY2Vuc2UgPSAkKHRoaXMpLmRhdGEoJ2xpY2Vuc2UnKTtcclxuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnbGljZW5zZS0xIGxpY2Vuc2UtNSBsaWNlbnNlLTEwMCcpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoYGxpY2Vuc2UtJHtsaWNlbnNlfWApO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoYXBwLmluaXQpO1xyXG5cclxufSkoalF1ZXJ5KTsiLCI7KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYmFubmVyID0gJCgnI2hlYWRlci1zdGlja3ktYmFubmVyJyk7XHJcblxyXG4gICAgICAgIC8vQ2xvc2UgYmFubmVyXHJcbiAgICAgICAgJCgnLmJhbm5lci1jbG9zZScsIGJhbm5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBiYW5uZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vQmFubmVyIGNvdW50ZG93blxyXG4gICAgICAgIGNvbnN0IGNvdW50ZG93biA9ICQoJy5iYW5uZXItY291bnRkb3duJywgYmFubmVyKTtcclxuICAgICAgICBjb25zdCB0aW1lciA9ICQoJy50aW1lcicsIGJhbm5lcik7XHJcblxyXG4gICAgICAgIGlmIChjb3VudGRvd24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAyNCAqIDYwICogNjAgKiAxMDAwICsgMiAqIDYwICogNjAgKiAxMDAwKS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgICAgICBsZXQgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKGRhdGVUaW1lKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICAvL2NoZWNrIGlmIHRoZXJlIGlzIGEgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZScpKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudERvd25EYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lci5odG1sKGA8c3BhbiBjbGFzcz1cImRheXNcIj4ke2RheXN9ZDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJob3Vyc1wiPiR7aG91cnN9aDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJtaW51dGVzXCI+JHttaW51dGVzfW08L3NwYW4+IDxzcGFuIGNsYXNzPVwic2Vjb25kc1wiPiR7c2Vjb25kc31zPC9zcGFuPmApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVyLnRleHQoXCJFWFBJUkVEXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vc2F2ZSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aW1lJywgY291bnREb3duRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbn0pKGpRdWVyeSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9jb21wb25lbnRzL3ByaWNpbmcnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zdGlja3ktYmFubmVyJztcclxuXHJcbjsoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICBjb25zdCBhcHAgPSB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhcHAuaW5pdFRlc3RpbW9uaWFsU2xpZGVyKCk7XHJcbiAgICAgICAgICAgIGFwcC5pbml0RnVuRmFjdENvdW50ZXIoKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5jb250YWN0LWZvcm0gLnRhYi1pdGVtJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZUNvbnRhY3RGb3JtKTtcclxuICAgICAgICAgICAgJCgnLnRvLXRvcCcpLm9uKCdjbGljaycsIGFwcC5oYW5kbGVUb1RvcCk7XHJcblxyXG4gICAgICAgICAgICAvL2hhbmRsZSBwcmljaW5nIGl0ZW0gY2xpY2tcclxuICAgICAgICAgICAgJCgnLml0ZW0tcHJpY2UnKS5vbignY2xpY2snLCBhcHAuaGFuZGxlUHJpY2luZ0l0ZW0pXHJcblxyXG4gICAgICAgICAgICBhcHAuaW5pdEltYWdlQ29tcGFyZSgpO1xyXG5cclxuICAgICAgICAgICAgYXBwLmNoYW5nZURyYWN1bGFIZXJvSW1hZ2UoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0VGVzdGltb25pYWxTbGlkZXI6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEhvbWUgdGVzdGltb25pYWwgc2xpZGVyXHJcbiAgICAgICAgICAgICQoJy5zaW5nbGUtdGVzdGltb25pYWwtaXRlbXMnKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICAgICAgICAgIHNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFBhZGRpbmc6ICczMHB4JyxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJy5yaWdodCcsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICcubGVmdCcsXHJcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vZ29vZ2xlIGRyaXZlXHJcbiAgICAgICAgICAgICQoJy50ZXN0aW1vbmlhbC1pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzYwcHgnLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJy5yaWdodCcsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICcubGVmdCcsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2Fib3V0IHNsaWRlclxyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLW1haW4nKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnLnVwJyxcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJy5kb3duJyxcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuY29tcGF0LXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2RyYWN1bGEgc2xpZGVyXHJcbiAgICAgICAgICAgICQoJy5kcmFjdWxhLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNjBweCcsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5pdEZ1bkZhY3RDb3VudGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5jb3VudGVyJykuY291bnRlclVwKHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAxNixcclxuICAgICAgICAgICAgICAgIHRpbWU6IDE1MDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlQ29udGFjdEZvcm06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLmNvbnRhY3QtZm9ybSAudGFiLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmNvbnRhY3QtZm9ybS13cmFwJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKGAuY29udGFjdC1mb3JtLXdyYXAuZm9ybS0keyQodGhpcykuZGF0YSgndGFyZ2V0Jyl9YCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVRvVG9wOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCAnZmFzdCcpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVByaWNpbmdJdGVtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5pdGVtLXByaWNlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0SW1hZ2VDb21wYXJlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIucmVhZGVyLW1vZGUtaW1hZ2UtY29tcGFyZVwiKS50d2VudHl0d2VudHkoe1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICBIb3cgbXVjaCBvZiB0aGUgYmVmb3JlIGltYWdlIGlzIHZpc2libGUgd2hlbiB0aGUgcGFnZSBsb2Fkc1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdF9vZmZzZXRfcGN0OiAwLjUsXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbGFiZWwgdGV4dFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlX2xhYmVsOiAnR2VuZXJhbCBWaWV3JyxcclxuICAgICAgICAgICAgICAgIGFmdGVyX2xhYmVsOiAnUmVhZGVyIE1vZGUgVmlldycsXHJcblxyXG4gICAgICAgICAgICAgICAgLy9vdmVybGF5XHJcbiAgICAgICAgICAgICAgICBub19vdmVybGF5OiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgY2hhbmdlRHJhY3VsYUhlcm9JbWFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9ICQoJy5kcmFjdWxhLWhlcm8taW1hZ2UnKTtcclxuXHJcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlU3JjID0gaW1hZ2UuYXR0cignc3JjJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0RhcmsgPSBpbWFnZVNyYy5pbmNsdWRlcygnaGVyby1kYXJrJyk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5hdHRyKCdzcmMnLCBpbWFnZVNyYy5yZXBsYWNlKGlzRGFyayA/ICdoZXJvLWRhcmsnIDogJ2hlcm8tbGlnaHQnLCBpc0RhcmsgPyAnaGVyby1saWdodCcgOiAnaGVyby1kYXJrJykpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJy5tb2RlLWJ0bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQoYC5tb2RlLWJ0bi5tb2RlLSR7aXNEYXJrID8gJ2xpZ2h0JyA6ICdkYXJrJ31gKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxuXHJcblxyXG59KShqUXVlcnkpOyJdLCJuYW1lcyI6WyIkIiwiYXBwIiwiaW5pdCIsIm9uIiwiaGFuZGxlU3dpdGNoZXIiLCJoYW5kbGVMaWNlbnNlU3dpdGNoZXIiLCJlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwidG9nZ2xlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJsaWNlbnNlIiwiZGF0YSIsImRvY3VtZW50IiwicmVhZHkiLCJqUXVlcnkiLCJiYW5uZXIiLCJyZW1vdmUiLCJjb3VudGRvd24iLCJ0aW1lciIsImxlbmd0aCIsImRhdGVUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0b0lTT1N0cmluZyIsImNvdW50RG93bkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwieCIsInNldEludGVydmFsIiwibm93IiwiZGlzdGFuY2UiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImh0bWwiLCJjbGVhckludGVydmFsIiwic2V0SXRlbSIsImluaXRUZXN0aW1vbmlhbFNsaWRlciIsImluaXRGdW5GYWN0Q291bnRlciIsImhhbmRsZUNvbnRhY3RGb3JtIiwiaGFuZGxlVG9Ub3AiLCJoYW5kbGVQcmljaW5nSXRlbSIsImluaXRJbWFnZUNvbXBhcmUiLCJjaGFuZ2VEcmFjdWxhSGVyb0ltYWdlIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXJyb3dzIiwiYXV0b3BsYXlTcGVlZCIsInNwZWVkIiwiY29udGVudFBhZGRpbmciLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJhZGFwdGl2ZUhlaWdodCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiZG90cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ2ZXJ0aWNhbCIsImNvdW50ZXJVcCIsImRlbGF5IiwidGltZSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ0d2VudHl0d2VudHkiLCJkZWZhdWx0X29mZnNldF9wY3QiLCJiZWZvcmVfbGFiZWwiLCJhZnRlcl9sYWJlbCIsIm5vX292ZXJsYXkiLCJpbWFnZSIsImltYWdlU3JjIiwiYXR0ciIsImlzRGFyayIsImluY2x1ZGVzIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=