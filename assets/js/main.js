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
    var banner = $('#header-sticky-banner');

    //Close banner
    $('.banner-close', banner).on('click', function () {
      banner.remove();
    });

    //Banner countdown
    var countdown = $('.banner-countdown', banner);
    var timer = $('.timer', banner);
    if (countdown.length) {
      var dateTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString();
      var countDownDate = new Date(dateTime).getTime();

      //check if there is a time in local storage
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
        }

        //save time in local storage
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
      app.initTestimonialSlider();
      app.initFunFactCounter();
      $(".contact-form .tab-item").on("click", app.handleContactForm);
      $(".to-top").on("click", app.handleToTop);

      //handle pricing item click
      $(".item-price").on("click", app.handlePricingItem);
      app.initImageCompare();
      app.changeDraculaHeroImage();

      // data send to server

      // console.log(softlab.ajax_url);

      $("#submit").on("click", function (e) {
        e.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var pemail = $("#pemail").val();
        var website = $("#website").val();
        var site = $("#site").val();
        var media = $("#media").val();
        var app = $("#app").val();
        var socialsite = $("#socialsite").val();
        var agree = $("#agree").val();
        if (!name || !username || !pemail || !email || !website || !site || !media || !app || !socialsite || !agree) {
          $('.msg').html('All fields are required');
          return true;
        } else {
          $('.msg').html('thenks you very much');
        }
        $("#submit").val("Loading...");
        $.post(softlab.ajax_url, {
          action: "affiliate_register",
          name: name,
          email: email,
          pemail: pemail,
          website: website,
          site: site,
          media: media,
          app: app,
          socialsite: socialsite,
          agree: agree
        }, function (data) {
          console.log(data);
          $("#submit").val("Register");
        });
      });
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
      setInterval(function () {
        var imageSrc = image.attr("src");
        var isDark = imageSrc.includes("hero-dark");
        image.attr("src", imageSrc.replace(isDark ? "hero-dark" : "hero-light", isDark ? "hero-light" : "hero-dark"));
        $(".mode-btn").removeClass("active");
        $(".mode-btn.mode-".concat(isDark ? "light" : "dark")).addClass("active");
      }, 2000);
    }
  };
  $(document).ready(app.init);
  $(".vertical-center-4").slick({
    dots: false,
    vertical: false,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: '<button type="button" class="slick-prev"><span aria-label="Previous">‹</span></button>',
    nextArrow: '<button type="button" class="slick-next"><span aria-label="Next">›</span></button>',
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
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SztRQUNqQkMsYUFBYSxFQUFFLE1BQU07UUFDckJYLFlBQVksRUFBRTtNQUNoQjtJQUNGLENBQUM7RUFFTCxDQUFDLENBQUM7QUFDSixDQUFDLEVBQUVuRCxNQUFNLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvZnRsYWIvLi9zcmMvanMvY29tcG9uZW50cy9wcmljaW5nLmpzIiwid2VicGFjazovL3NvZnRsYWIvLi9zcmMvanMvY29tcG9uZW50cy9zdGlja3ktYmFubmVyLmpzIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NvZnRsYWIvLi9zcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBjb25zdCBhcHAgPSB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL0hhbmRsZSBwcmljaW5nIHN3aXRjaGVyXHJcbiAgICAgICAgICAgICQoJy5wcmljaW5nLXN3aXRjaGVyJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZVN3aXRjaGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBsaWNlbnNlIHN3aXRjaGVyXHJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZUxpY2Vuc2VTd2l0Y2hlcik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQoJy5wcmljZS10ZXh0JykucmVtb3ZlQ2xhc3MoJ2FubnVhbCBsaWZldGltZScpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykgPyAnYW5udWFsJyA6ICdsaWZldGltZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVMaWNlbnNlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGUnKS50ZXh0KCQodGhpcykudGV4dCgpKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpY2Vuc2UgPSAkKHRoaXMpLmRhdGEoJ2xpY2Vuc2UnKTtcclxuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnbGljZW5zZS0xIGxpY2Vuc2UtNSBsaWNlbnNlLTEwMCcpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoYGxpY2Vuc2UtJHtsaWNlbnNlfWApO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoYXBwLmluaXQpO1xyXG5cclxufSkoalF1ZXJ5KTsiLCI7KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYmFubmVyID0gJCgnI2hlYWRlci1zdGlja3ktYmFubmVyJyk7XHJcblxyXG4gICAgICAgIC8vQ2xvc2UgYmFubmVyXHJcbiAgICAgICAgJCgnLmJhbm5lci1jbG9zZScsIGJhbm5lcikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBiYW5uZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vQmFubmVyIGNvdW50ZG93blxyXG4gICAgICAgIGNvbnN0IGNvdW50ZG93biA9ICQoJy5iYW5uZXItY291bnRkb3duJywgYmFubmVyKTtcclxuICAgICAgICBjb25zdCB0aW1lciA9ICQoJy50aW1lcicsIGJhbm5lcik7XHJcblxyXG4gICAgICAgIGlmIChjb3VudGRvd24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAyNCAqIDYwICogNjAgKiAxMDAwICsgMiAqIDYwICogNjAgKiAxMDAwKS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgICAgICBsZXQgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKGRhdGVUaW1lKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICAvL2NoZWNrIGlmIHRoZXJlIGlzIGEgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZScpKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudERvd25EYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lci5odG1sKGA8c3BhbiBjbGFzcz1cImRheXNcIj4ke2RheXN9ZDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJob3Vyc1wiPiR7aG91cnN9aDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJtaW51dGVzXCI+JHttaW51dGVzfW08L3NwYW4+IDxzcGFuIGNsYXNzPVwic2Vjb25kc1wiPiR7c2Vjb25kc31zPC9zcGFuPmApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVyLnRleHQoXCJFWFBJUkVEXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0aW1lJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9zYXZlIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RpbWUnLCBjb3VudERvd25EYXRlKTtcclxuXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxufSkoalF1ZXJ5KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9jb21wb25lbnRzL3ByaWNpbmdcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3N0aWNreS1iYW5uZXJcIjtcclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG4gIGNvbnN0IGFwcCA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgYXBwLmluaXRUZXN0aW1vbmlhbFNsaWRlcigpO1xyXG4gICAgICBhcHAuaW5pdEZ1bkZhY3RDb3VudGVyKCk7XHJcblxyXG4gICAgICAkKFwiLmNvbnRhY3QtZm9ybSAudGFiLWl0ZW1cIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlQ29udGFjdEZvcm0pO1xyXG4gICAgICAkKFwiLnRvLXRvcFwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVUb1RvcCk7XHJcblxyXG4gICAgICAvL2hhbmRsZSBwcmljaW5nIGl0ZW0gY2xpY2tcclxuICAgICAgJChcIi5pdGVtLXByaWNlXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZVByaWNpbmdJdGVtKTtcclxuXHJcbiAgICAgIGFwcC5pbml0SW1hZ2VDb21wYXJlKCk7XHJcblxyXG4gICAgICBhcHAuY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSgpO1xyXG5cclxuICAgICAgLy8gZGF0YSBzZW5kIHRvIHNlcnZlclxyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2coc29mdGxhYi5hamF4X3VybCk7XHJcbiAgXHJcbiAgICAgICQoXCIjc3VibWl0XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciBuYW1lID0gJChcIiNuYW1lXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciBlbWFpbCA9ICQoXCIjZW1haWxcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIHBlbWFpbCA9ICQoXCIjcGVtYWlsXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciB3ZWJzaXRlID0gJChcIiN3ZWJzaXRlXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciBzaXRlID0gJChcIiNzaXRlXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciBtZWRpYSA9ICQoXCIjbWVkaWFcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIGFwcCA9ICQoXCIjYXBwXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciBzb2NpYWxzaXRlID0gJChcIiNzb2NpYWxzaXRlXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciBhZ3JlZSA9ICQoXCIjYWdyZWVcIikudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBpZighbmFtZSB8fCAhdXNlcm5hbWUgfHwgIXBlbWFpbCB8fCAhZW1haWwgfHwgIXdlYnNpdGUgfHwgIXNpdGUgfHwgIW1lZGlhIHx8ICFhcHAgfHwgIXNvY2lhbHNpdGUgfHwgIWFncmVlKXtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcubXNnJykuaHRtbCgnQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgJCgnLm1zZycpLmh0bWwoJ3RoZW5rcyB5b3UgdmVyeSBtdWNoJyk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICBcclxuXHJcblxyXG4gICAgICAgICQoXCIjc3VibWl0XCIpLnZhbChcIkxvYWRpbmcuLi5cIik7XHJcblxyXG4gICAgICAgICQucG9zdChcclxuICAgICAgICAgIHNvZnRsYWIuYWpheF91cmwsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogXCJhZmZpbGlhdGVfcmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICBwZW1haWw6IHBlbWFpbCxcclxuICAgICAgICAgICAgd2Vic2l0ZTogd2Vic2l0ZSxcclxuICAgICAgICAgICAgc2l0ZTogc2l0ZSxcclxuICAgICAgICAgICAgbWVkaWE6IG1lZGlhLFxyXG4gICAgICAgICAgICBhcHA6IGFwcCxcclxuICAgICAgICAgICAgc29jaWFsc2l0ZTogc29jaWFsc2l0ZSxcclxuICAgICAgICAgICAgYWdyZWU6IGFncmVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgJChcIiNzdWJtaXRcIikudmFsKFwiUmVnaXN0ZXJcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgIH0sXHJcbiAgICBcclxuXHJcbiAgICBpbml0VGVzdGltb25pYWxTbGlkZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gSG9tZSB0ZXN0aW1vbmlhbCBzbGlkZXJcclxuICAgICAgJChcIi5zaW5nbGUtdGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICBzcGVlZDogMjAwMCxcclxuICAgICAgICBjb250ZW50UGFkZGluZzogXCIzMHB4XCIsXHJcbiAgICAgICAgbmV4dEFycm93OiBcIi5yaWdodFwiLFxyXG4gICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vZ29vZ2xlIGRyaXZlXHJcbiAgICAgICQoXCIudGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xyXG4gICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgIG5leHRBcnJvdzogXCIucmlnaHRcIixcclxuICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG4gICAgICAvL2Fib3V0IHNsaWRlclxyXG4gICAgICAkKFwiLnNsaWRlci1tYWluXCIpLnNsaWNrKHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgIG5leHRBcnJvdzogXCIudXBcIixcclxuICAgICAgICBwcmV2QXJyb3c6IFwiLmRvd25cIixcclxuICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIGNlbnRlclBhZGRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJChcIi5jb21wYXQtc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTM5OS45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG4gICAgICAvL2RyYWN1bGEgc2xpZGVyXHJcbiAgICAgICQoXCIuZHJhY3VsYS1zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0RnVuRmFjdENvdW50ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIi5jb3VudGVyXCIpLmNvdW50ZXJVcCh7XHJcbiAgICAgICAgZGVsYXk6IDE2LFxyXG4gICAgICAgIHRpbWU6IDE1MDAsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVDb250YWN0Rm9ybTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLmNvbnRhY3QtZm9ybSAudGFiLWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAkKFwiLmNvbnRhY3QtZm9ybS13cmFwXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKGAuY29udGFjdC1mb3JtLXdyYXAuZm9ybS0keyQodGhpcykuZGF0YShcInRhcmdldFwiKX1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlVG9Ub3A6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCBcImZhc3RcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZVByaWNpbmdJdGVtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIuaXRlbS1wcmljZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdEltYWdlQ29tcGFyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLnJlYWRlci1tb2RlLWltYWdlLWNvbXBhcmVcIikudHdlbnR5dHdlbnR5KHtcclxuICAgICAgICAvLyAgSG93IG11Y2ggb2YgdGhlIGJlZm9yZSBpbWFnZSBpcyB2aXNpYmxlIHdoZW4gdGhlIHBhZ2UgbG9hZHNcclxuICAgICAgICBkZWZhdWx0X29mZnNldF9wY3Q6IDAuNSxcclxuXHJcbiAgICAgICAgLy8gbGFiZWwgdGV4dFxyXG4gICAgICAgIGJlZm9yZV9sYWJlbDogXCJHZW5lcmFsIFZpZXdcIixcclxuICAgICAgICBhZnRlcl9sYWJlbDogXCJSZWFkZXIgTW9kZSBWaWV3XCIsXHJcblxyXG4gICAgICAgIC8vb3ZlcmxheVxyXG4gICAgICAgIG5vX292ZXJsYXk6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBjaGFuZ2VEcmFjdWxhSGVyb0ltYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGltYWdlID0gJChcIi5kcmFjdWxhLWhlcm8taW1hZ2VcIik7XHJcblxyXG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VTcmMgPSBpbWFnZS5hdHRyKFwic3JjXCIpO1xyXG4gICAgICAgIGNvbnN0IGlzRGFyayA9IGltYWdlU3JjLmluY2x1ZGVzKFwiaGVyby1kYXJrXCIpO1xyXG4gICAgICAgIGltYWdlLmF0dHIoXHJcbiAgICAgICAgICBcInNyY1wiLFxyXG4gICAgICAgICAgaW1hZ2VTcmMucmVwbGFjZShcclxuICAgICAgICAgICAgaXNEYXJrID8gXCJoZXJvLWRhcmtcIiA6IFwiaGVyby1saWdodFwiLFxyXG4gICAgICAgICAgICBpc0RhcmsgPyBcImhlcm8tbGlnaHRcIiA6IFwiaGVyby1kYXJrXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAkKFwiLm1vZGUtYnRuXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoYC5tb2RlLWJ0bi5tb2RlLSR7aXNEYXJrID8gXCJsaWdodFwiIDogXCJkYXJrXCJ9YCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICAkKGRvY3VtZW50KS5yZWFkeShhcHAuaW5pdCk7XHJcbiAgXHJcblxyXG5cclxuICAkKFwiLnZlcnRpY2FsLWNlbnRlci00XCIpLnNsaWNrKHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgdmVydGljYWw6IGZhbHNlLFxyXG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgcHJldkFycm93OlxyXG4gICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PHNwYW4gYXJpYS1sYWJlbD1cIlByZXZpb3VzXCI+4oC5PC9zcGFuPjwvYnV0dG9uPicsXHJcbiAgICBuZXh0QXJyb3c6XHJcbiAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj48c3BhbiBhcmlhLWxhYmVsPVwiTmV4dFwiPuKAujwvc3Bhbj48L2J1dHRvbj4nLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcbiJdLCJuYW1lcyI6WyIkIiwiYXBwIiwiaW5pdCIsIm9uIiwiaGFuZGxlU3dpdGNoZXIiLCJoYW5kbGVMaWNlbnNlU3dpdGNoZXIiLCJlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwidG9nZ2xlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJsaWNlbnNlIiwiZGF0YSIsImNvbmNhdCIsImRvY3VtZW50IiwicmVhZHkiLCJqUXVlcnkiLCJiYW5uZXIiLCJyZW1vdmUiLCJjb3VudGRvd24iLCJ0aW1lciIsImxlbmd0aCIsImRhdGVUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0b0lTT1N0cmluZyIsImNvdW50RG93bkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwieCIsInNldEludGVydmFsIiwibm93IiwiZGlzdGFuY2UiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImh0bWwiLCJjbGVhckludGVydmFsIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJpbml0VGVzdGltb25pYWxTbGlkZXIiLCJpbml0RnVuRmFjdENvdW50ZXIiLCJoYW5kbGVDb250YWN0Rm9ybSIsImhhbmRsZVRvVG9wIiwiaGFuZGxlUHJpY2luZ0l0ZW0iLCJpbml0SW1hZ2VDb21wYXJlIiwiY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSIsIm5hbWUiLCJ2YWwiLCJlbWFpbCIsInBlbWFpbCIsIndlYnNpdGUiLCJzaXRlIiwibWVkaWEiLCJzb2NpYWxzaXRlIiwiYWdyZWUiLCJ1c2VybmFtZSIsInBvc3QiLCJzb2Z0bGFiIiwiYWpheF91cmwiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXJyb3dzIiwiYXV0b3BsYXlTcGVlZCIsInNwZWVkIiwiY29udGVudFBhZGRpbmciLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJhZGFwdGl2ZUhlaWdodCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiZG90cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ2ZXJ0aWNhbCIsImNvdW50ZXJVcCIsImRlbGF5IiwidGltZSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ0d2VudHl0d2VudHkiLCJkZWZhdWx0X29mZnNldF9wY3QiLCJiZWZvcmVfbGFiZWwiLCJhZnRlcl9sYWJlbCIsIm5vX292ZXJsYXkiLCJpbWFnZSIsImltYWdlU3JjIiwiYXR0ciIsImlzRGFyayIsImluY2x1ZGVzIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=