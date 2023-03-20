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
      app.initTestimonialSlider();
      app.initFunFactCounter();
      $(".contact-form .tab-item").on("click", app.handleContactForm);
      $(".to-top").on("click", app.handleToTop); //handle pricing item click

      $(".item-price").on("click", app.handlePricingItem);
      app.initImageCompare();
      app.changeDraculaHeroImage(); //product check

      var evalidate = document.getElementById('e-validate');
      var emailtype = document.querySelector('input[name=email]'); //email check

      var emailCheck = function emailCheck(email) {
        var paterns = /^[a-z0-9_\.]{1,}@[a-z]{2,}\.[a-z]{2,5}$/;
        return paterns.test(email);
      }; //email validation


      emailtype.onkeyup = function (e) {
        var email = e.target.value; // console.log(emailCheck(email));

        if (emailCheck(email)) {
          evalidate.textContent = 'a valid email address';
          evalidate.className = 'text-info';
        } else {
          evalidate.textContent = 'please Enter a valid email address';
          evalidate.className = 'text-danger';
        }
      };

      var forms = document.querySelectorAll('.needs-validation'); // console.log(softlab.ajax_url);

      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            //   var name = $("#name").val();
            //   var email = $("#email").val();
            //   var pemail = $("#pemail").val();
            //   var website = $("#website").val();
            //   var site = $("#site").val();
            //   var media = $("#media").val();
            //   var app = $("#app").val();
            //   var googledrive = $("#google-drive").val();
            //   var radioplayer = $("#radio-player").val();
            //  // var socialsite = $("#socialsite").val();
            //   var agree = $("#agree").val();
            //   $("#submit").val("Loading...");
            //   $.post(
            //     softlab.ajax_url,
            //     {
            //       action: "affiliate_register",
            //       name: name,
            //       email: email,
            //       pemail: pemail,
            //       googledrive:googledrive,
            //       radioplayer:radioplayer,
            //       website: website,
            //       site: site,
            //       media: media,
            //       app: app,
            //       socialsite: socialsite,
            //       agree: agree,
            //     },
            //   function (data) {
            //       console.log(data);
            //       $("#submit").val("Register");
            //     }
            //   );
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add('was-validated');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLENBQ1Y7TUFDRUMsVUFBVSxFQUFFLE9BRGQ7TUFFRUMsUUFBUSxFQUFFO1FBQ1JaLE1BQU0sRUFBRSxLQURBO1FBRVJPLFVBQVUsRUFBRSxLQUZKO1FBR1JDLGFBQWEsRUFBRSxNQUhQO1FBSVJYLFlBQVksRUFBRTtNQUpOO0lBRlosQ0FEVSxFQVVWO01BQ0VjLFVBQVUsRUFBRSxNQURkO01BRUVDLFFBQVEsRUFBRTtRQUNSWixNQUFNLEVBQUUsS0FEQTtRQUVSTyxVQUFVLEVBQUUsS0FGSjtRQUdSQyxhQUFhLEVBQUUsTUFIUDtRQUlSWCxZQUFZLEVBQUU7TUFKTjtJQUZaLENBVlUsRUFtQlY7TUFDRWMsVUFBVSxFQUFFLE1BRGQ7TUFFRUMsUUFBUSxFQUFFO1FBQ1JaLE1BQU0sRUFBRSxLQURBO1FBRVJPLFVBQVUsRUFBRSxLQUZKO1FBR1JDLGFBQWEsRUFBRSxNQUhQO1FBSVJYLFlBQVksRUFBRTtNQUpOO0lBRlosQ0FuQlU7RUFWZ0IsQ0FBOUI7QUF3Q0QsQ0FyV0QsRUFxV0c5RCxNQXJXSCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3N0aWNreS1iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24gKCQpIHtcbiAgICBjb25zdCBhcHAgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vSGFuZGxlIHByaWNpbmcgc3dpdGNoZXJcbiAgICAgICAgICAgICQoJy5wcmljaW5nLXN3aXRjaGVyJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZVN3aXRjaGVyKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIGxpY2Vuc2Ugc3dpdGNoZXJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZUxpY2Vuc2VTd2l0Y2hlcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdhbm51YWwgbGlmZXRpbWUnKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICdhbm51YWwnIDogJ2xpZmV0aW1lJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYW5kbGVMaWNlbnNlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGUnKS50ZXh0KCQodGhpcykudGV4dCgpKTtcblxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgY29uc3QgbGljZW5zZSA9ICQodGhpcykuZGF0YSgnbGljZW5zZScpO1xuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnbGljZW5zZS0xIGxpY2Vuc2UtNSBsaWNlbnNlLTEwMCcpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGBsaWNlbnNlLSR7bGljZW5zZX1gKTtcblxuICAgICAgICB9LFxuXG5cbiAgICB9XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShhcHAuaW5pdCk7XG5cbn0pKGpRdWVyeSk7IiwiOyhmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBiYW5uZXIgPSAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXInKTtcblxuICAgICAgICAvL0Nsb3NlIGJhbm5lclxuICAgICAgICAkKCcuYmFubmVyLWNsb3NlJywgYmFubmVyKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBiYW5uZXIucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vQmFubmVyIGNvdW50ZG93blxuICAgICAgICBjb25zdCBjb3VudGRvd24gPSAkKCcuYmFubmVyLWNvdW50ZG93bicsIGJhbm5lcik7XG4gICAgICAgIGNvbnN0IHRpbWVyID0gJCgnLnRpbWVyJywgYmFubmVyKTtcblxuICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDI0ICogNjAgKiA2MCAqIDEwMDAgKyAyICogNjAgKiA2MCAqIDEwMDApLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICBsZXQgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKGRhdGVUaW1lKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgICAgIC8vY2hlY2sgaWYgdGhlcmUgaXMgYSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZScpKSB7XG4gICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lJyk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgY29uc3QgeCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgICAgIHRpbWVyLmh0bWwoYDxzcGFuIGNsYXNzPVwiZGF5c1wiPiR7ZGF5c31kPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhvdXJzXCI+JHtob3Vyc31oPC9zcGFuPiA8c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIj4ke21pbnV0ZXN9bTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzZWNvbmRzXCI+JHtzZWNvbmRzfXM8L3NwYW4+YCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoeCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVyLnRleHQoXCJFWFBJUkVEXCIpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGltZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vc2F2ZSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGltZScsIGNvdW50RG93bkRhdGUpO1xuXG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG59KShqUXVlcnkpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvcHJpY2luZ1wiO1xuaW1wb3J0IFwiLi9jb21wb25lbnRzL3N0aWNreS1iYW5uZXJcIjtcblxuKGZ1bmN0aW9uICgkKSB7XG4gIGNvbnN0IGFwcCA9IHtcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHAuaW5pdFRlc3RpbW9uaWFsU2xpZGVyKCk7XG4gICAgICBhcHAuaW5pdEZ1bkZhY3RDb3VudGVyKCk7XG5cbiAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVDb250YWN0Rm9ybSk7XG4gICAgICAkKFwiLnRvLXRvcFwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVUb1RvcCk7XG5cbiAgICAgIC8vaGFuZGxlIHByaWNpbmcgaXRlbSBjbGlja1xuICAgICAgJChcIi5pdGVtLXByaWNlXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZVByaWNpbmdJdGVtKTtcblxuICAgICAgYXBwLmluaXRJbWFnZUNvbXBhcmUoKTtcblxuICAgICAgYXBwLmNoYW5nZURyYWN1bGFIZXJvSW1hZ2UoKTtcblxuICAgICAgLy9wcm9kdWN0IGNoZWNrXG4gICAgICBjb25zdCBldmFsaWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZS12YWxpZGF0ZScpO1xuICAgICAgY29uc3QgZW1haWx0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1lbWFpbF0nKTtcbiAgICAgIC8vZW1haWwgY2hlY2tcblxuICAgICAgICBjb25zdCBlbWFpbENoZWNrID0oZW1haWwpPT57XG4gICAgICAgICAgbGV0IHBhdGVybnM9L15bYS16MC05X1xcLl17MSx9QFthLXpdezIsfVxcLlthLXpdezIsNX0kLztcblxuICAgICAgICAgIHJldHVybiBwYXRlcm5zLnRlc3QoZW1haWwpO1xuICAgICAgICB9XG4gICAgIC8vZW1haWwgdmFsaWRhdGlvblxuXG4gICAgICBlbWFpbHR5cGUub25rZXl1cD0oZSk9PntcbiAgICAgICAgbGV0IGVtYWlsID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVtYWlsQ2hlY2soZW1haWwpKTtcbiAgICAgICAgaWYoZW1haWxDaGVjayhlbWFpbCkpe1xuICAgICAgICAgICAgZXZhbGlkYXRlLnRleHRDb250ZW50PSdhIHZhbGlkIGVtYWlsIGFkZHJlc3MnO1xuICAgICAgICAgICAgZXZhbGlkYXRlLmNsYXNzTmFtZT0ndGV4dC1pbmZvJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBldmFsaWRhdGUudGV4dENvbnRlbnQ9J3BsZWFzZSBFbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnO1xuICAgICAgICAgICAgZXZhbGlkYXRlLmNsYXNzTmFtZT0ndGV4dC1kYW5nZXInO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuXG5cbiAgICAgIHZhciBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZWVkcy12YWxpZGF0aW9uJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzb2Z0bGFiLmFqYXhfdXJsKTtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZvcm1zKS5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCFmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuXG4gICAgICAvLyAgIHZhciBuYW1lID0gJChcIiNuYW1lXCIpLnZhbCgpO1xuICAgICAgLy8gICB2YXIgZW1haWwgPSAkKFwiI2VtYWlsXCIpLnZhbCgpO1xuICAgICAgLy8gICB2YXIgcGVtYWlsID0gJChcIiNwZW1haWxcIikudmFsKCk7XG4gICAgICAvLyAgIHZhciB3ZWJzaXRlID0gJChcIiN3ZWJzaXRlXCIpLnZhbCgpO1xuICAgICAgLy8gICB2YXIgc2l0ZSA9ICQoXCIjc2l0ZVwiKS52YWwoKTtcbiAgICAgIC8vICAgdmFyIG1lZGlhID0gJChcIiNtZWRpYVwiKS52YWwoKTtcbiAgICAgIC8vICAgdmFyIGFwcCA9ICQoXCIjYXBwXCIpLnZhbCgpO1xuICAgICAgLy8gICB2YXIgZ29vZ2xlZHJpdmUgPSAkKFwiI2dvb2dsZS1kcml2ZVwiKS52YWwoKTtcbiAgICAgIC8vICAgdmFyIHJhZGlvcGxheWVyID0gJChcIiNyYWRpby1wbGF5ZXJcIikudmFsKCk7XG4gICAgICAvLyAgLy8gdmFyIHNvY2lhbHNpdGUgPSAkKFwiI3NvY2lhbHNpdGVcIikudmFsKCk7XG4gICAgICAvLyAgIHZhciBhZ3JlZSA9ICQoXCIjYWdyZWVcIikudmFsKCk7XG5cbiAgICAgIC8vICAgJChcIiNzdWJtaXRcIikudmFsKFwiTG9hZGluZy4uLlwiKTtcbiAgICAgIC8vICAgJC5wb3N0KFxuICAgICAgLy8gICAgIHNvZnRsYWIuYWpheF91cmwsXG4gICAgICAvLyAgICAge1xuICAgICAgLy8gICAgICAgYWN0aW9uOiBcImFmZmlsaWF0ZV9yZWdpc3RlclwiLFxuICAgICAgLy8gICAgICAgbmFtZTogbmFtZSxcbiAgICAgIC8vICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIC8vICAgICAgIHBlbWFpbDogcGVtYWlsLFxuICAgICAgLy8gICAgICAgZ29vZ2xlZHJpdmU6Z29vZ2xlZHJpdmUsXG4gICAgICAvLyAgICAgICByYWRpb3BsYXllcjpyYWRpb3BsYXllcixcbiAgICAgIC8vICAgICAgIHdlYnNpdGU6IHdlYnNpdGUsXG4gICAgICAvLyAgICAgICBzaXRlOiBzaXRlLFxuICAgICAgLy8gICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgLy8gICAgICAgYXBwOiBhcHAsXG4gICAgICAvLyAgICAgICBzb2NpYWxzaXRlOiBzb2NpYWxzaXRlLFxuICAgICAgLy8gICAgICAgYWdyZWU6IGFncmVlLFxuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIC8vICAgICAgICQoXCIjc3VibWl0XCIpLnZhbChcIlJlZ2lzdGVyXCIpO1xuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgKTtcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnd2FzLXZhbGlkYXRlZCcpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIFxuICAgICAgXG4gICAgXG4gICAgfSxcbiAgICBcblxuICAgIGluaXRUZXN0aW1vbmlhbFNsaWRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gSG9tZSB0ZXN0aW1vbmlhbCBzbGlkZXJcbiAgICAgICQoXCIuc2luZ2xlLXRlc3RpbW9uaWFsLWl0ZW1zXCIpLnNsaWNrKHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgICAgc3BlZWQ6IDIwMDAsXG4gICAgICAgIGNvbnRlbnRQYWRkaW5nOiBcIjMwcHhcIixcbiAgICAgICAgbmV4dEFycm93OiBcIi5yaWdodFwiLFxuICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICB9KTtcblxuICAgICAgLy9nb29nbGUgZHJpdmVcbiAgICAgICQoXCIudGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xuICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgICAgbmV4dEFycm93OiBcIi5yaWdodFwiLFxuICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuICAgICAgLy9hYm91dCBzbGlkZXJcbiAgICAgICQoXCIuc2xpZGVyLW1haW5cIikuc2xpY2soe1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBuZXh0QXJyb3c6IFwiLnVwXCIsXG4gICAgICAgIHByZXZBcnJvdzogXCIuZG93blwiLFxuICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICB9KTtcblxuICAgICAgJChcIi5jb21wYXQtc2xpZGVyXCIpLnNsaWNrKHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMzk5Ljk4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSk7XG4gICAgICAvL2RyYWN1bGEgc2xpZGVyXG4gICAgICAkKFwiLmRyYWN1bGEtc2xpZGVyXCIpLnNsaWNrKHtcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5pdEZ1bkZhY3RDb3VudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKFwiLmNvdW50ZXJcIikuY291bnRlclVwKHtcbiAgICAgICAgZGVsYXk6IDE2LFxuICAgICAgICB0aW1lOiAxNTAwLFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGhhbmRsZUNvbnRhY3RGb3JtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKFwiLmNvbnRhY3QtZm9ybSAudGFiLWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXG4gICAgICAkKFwiLmNvbnRhY3QtZm9ybS13cmFwXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgJChgLmNvbnRhY3QtZm9ybS13cmFwLmZvcm0tJHskKHRoaXMpLmRhdGEoXCJ0YXJnZXRcIil9YCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSxcblxuICAgIGhhbmRsZVRvVG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIFwiZmFzdFwiKTtcbiAgICB9LFxuXG4gICAgaGFuZGxlUHJpY2luZ0l0ZW06IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoXCIuaXRlbS1wcmljZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSxcblxuICAgIGluaXRJbWFnZUNvbXBhcmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoXCIucmVhZGVyLW1vZGUtaW1hZ2UtY29tcGFyZVwiKS50d2VudHl0d2VudHkoe1xuICAgICAgICAvLyAgSG93IG11Y2ggb2YgdGhlIGJlZm9yZSBpbWFnZSBpcyB2aXNpYmxlIHdoZW4gdGhlIHBhZ2UgbG9hZHNcbiAgICAgICAgZGVmYXVsdF9vZmZzZXRfcGN0OiAwLjUsXG5cbiAgICAgICAgLy8gbGFiZWwgdGV4dFxuICAgICAgICBiZWZvcmVfbGFiZWw6IFwiR2VuZXJhbCBWaWV3XCIsXG4gICAgICAgIGFmdGVyX2xhYmVsOiBcIlJlYWRlciBNb2RlIFZpZXdcIixcblxuICAgICAgICAvL292ZXJsYXlcbiAgICAgICAgbm9fb3ZlcmxheTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjaGFuZ2VEcmFjdWxhSGVyb0ltYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBpbWFnZSA9ICQoXCIuZHJhY3VsYS1oZXJvLWltYWdlXCIpO1xuXG4gICAgICBpZighaW1hZ2UubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2VTcmMgPSBpbWFnZS5hdHRyKFwic3JjXCIpO1xuICAgICAgICBjb25zdCBpc0RhcmsgPSBpbWFnZVNyYy5pbmNsdWRlcyhcImhlcm8tZGFya1wiKTtcbiAgICAgICAgaW1hZ2UuYXR0cihcbiAgICAgICAgICBcInNyY1wiLFxuICAgICAgICAgIGltYWdlU3JjLnJlcGxhY2UoXG4gICAgICAgICAgICBpc0RhcmsgPyBcImhlcm8tZGFya1wiIDogXCJoZXJvLWxpZ2h0XCIsXG4gICAgICAgICAgICBpc0RhcmsgPyBcImhlcm8tbGlnaHRcIiA6IFwiaGVyby1kYXJrXCJcbiAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgJChcIi5tb2RlLWJ0blwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgJChgLm1vZGUtYnRuLm1vZGUtJHtpc0RhcmsgPyBcImxpZ2h0XCIgOiBcImRhcmtcIn1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0sXG4gIH07XG5cbiAgJChkb2N1bWVudCkucmVhZHkoYXBwLmluaXQpO1xuICBcblxuXG4gICQoXCIudmVydGljYWwtY2VudGVyLTRcIikuc2xpY2soe1xuICAgIGRvdHM6IGZhbHNlLFxuICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICBwcmV2QXJyb3c6XG4gICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PHNwYW4gYXJpYS1sYWJlbD1cIlByZXZpb3VzXCI+4oC5PC9zcGFuPjwvYnV0dG9uPicsXG4gICAgbmV4dEFycm93OlxuICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPjxzcGFuIGFyaWEtbGFiZWw9XCJOZXh0XCI+4oC6PC9zcGFuPjwvYnV0dG9uPicsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9KTtcbn0pKGpRdWVyeSk7XG4iXSwibmFtZXMiOlsiJCIsImFwcCIsImluaXQiLCJvbiIsImhhbmRsZVN3aXRjaGVyIiwiaGFuZGxlTGljZW5zZVN3aXRjaGVyIiwiZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsInRvZ2dsZUNsYXNzIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwibGljZW5zZSIsImRhdGEiLCJkb2N1bWVudCIsInJlYWR5IiwialF1ZXJ5IiwiYmFubmVyIiwicmVtb3ZlIiwiY291bnRkb3duIiwidGltZXIiLCJsZW5ndGgiLCJkYXRlVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidG9JU09TdHJpbmciLCJjb3VudERvd25EYXRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIngiLCJzZXRJbnRlcnZhbCIsIm5vdyIsImRpc3RhbmNlIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJodG1sIiwiY2xlYXJJbnRlcnZhbCIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwiaW5pdFRlc3RpbW9uaWFsU2xpZGVyIiwiaW5pdEZ1bkZhY3RDb3VudGVyIiwiaGFuZGxlQ29udGFjdEZvcm0iLCJoYW5kbGVUb1RvcCIsImhhbmRsZVByaWNpbmdJdGVtIiwiaW5pdEltYWdlQ29tcGFyZSIsImNoYW5nZURyYWN1bGFIZXJvSW1hZ2UiLCJldmFsaWRhdGUiLCJnZXRFbGVtZW50QnlJZCIsImVtYWlsdHlwZSIsInF1ZXJ5U2VsZWN0b3IiLCJlbWFpbENoZWNrIiwiZW1haWwiLCJwYXRlcm5zIiwidGVzdCIsIm9ua2V5dXAiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHRDb250ZW50IiwiY2xhc3NOYW1lIiwiZm9ybXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJmb3JFYWNoIiwiZm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNoZWNrVmFsaWRpdHkiLCJzdG9wUHJvcGFnYXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhcnJvd3MiLCJhdXRvcGxheVNwZWVkIiwic3BlZWQiLCJjb250ZW50UGFkZGluZyIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsImFkYXB0aXZlSGVpZ2h0IiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJkb3RzIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInZlcnRpY2FsIiwiY291bnRlclVwIiwiZGVsYXkiLCJ0aW1lIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInR3ZW50eXR3ZW50eSIsImRlZmF1bHRfb2Zmc2V0X3BjdCIsImJlZm9yZV9sYWJlbCIsImFmdGVyX2xhYmVsIiwibm9fb3ZlcmxheSIsImltYWdlIiwiaW1hZ2VTcmMiLCJhdHRyIiwiaXNEYXJrIiwiaW5jbHVkZXMiLCJyZXBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==