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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLENBQ1Y7TUFDRUMsVUFBVSxFQUFFLE9BRGQ7TUFFRUMsUUFBUSxFQUFFO1FBQ1JaLE1BQU0sRUFBRSxLQURBO1FBRVJPLFVBQVUsRUFBRSxLQUZKO1FBR1JDLGFBQWEsRUFBRSxNQUhQO1FBSVJYLFlBQVksRUFBRTtNQUpOO0lBRlosQ0FEVSxFQVVWO01BQ0VjLFVBQVUsRUFBRSxNQURkO01BRUVDLFFBQVEsRUFBRTtRQUNSWixNQUFNLEVBQUUsS0FEQTtRQUVSTyxVQUFVLEVBQUUsS0FGSjtRQUdSQyxhQUFhLEVBQUUsTUFIUDtRQUlSWCxZQUFZLEVBQUU7TUFKTjtJQUZaLENBVlUsRUFtQlY7TUFDRWMsVUFBVSxFQUFFLE1BRGQ7TUFFRUMsUUFBUSxFQUFFO1FBQ1JaLE1BQU0sRUFBRSxLQURBO1FBRVJPLFVBQVUsRUFBRSxLQUZKO1FBR1JDLGFBQWEsRUFBRSxNQUhQO1FBSVJYLFlBQVksRUFBRTtNQUpOO0lBRlosQ0FuQlU7RUFWZ0IsQ0FBOUI7QUF3Q0QsQ0FyV0QsRUFxV0c5RCxNQXJXSCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3N0aWNreS1iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24gKCQpIHtcclxuICAgIGNvbnN0IGFwcCA9IHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vSGFuZGxlIHByaWNpbmcgc3dpdGNoZXJcclxuICAgICAgICAgICAgJCgnLnByaWNpbmctc3dpdGNoZXInKS5vbignY2xpY2snLCBhcHAuaGFuZGxlU3dpdGNoZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlIGxpY2Vuc2Ugc3dpdGNoZXJcclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5vbignY2xpY2snLCBhcHAuaGFuZGxlTGljZW5zZVN3aXRjaGVyKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnYW5udWFsIGxpZmV0aW1lJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICdhbm51YWwnIDogJ2xpZmV0aW1lJyk7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUxpY2Vuc2VTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZScpLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGljZW5zZSA9ICQodGhpcykuZGF0YSgnbGljZW5zZScpO1xyXG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdsaWNlbnNlLTEgbGljZW5zZS01IGxpY2Vuc2UtMTAwJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhgbGljZW5zZS0ke2xpY2Vuc2V9YCk7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShhcHAuaW5pdCk7XHJcblxyXG59KShqUXVlcnkpOyIsIjsoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBiYW5uZXIgPSAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXInKTtcclxuXHJcbiAgICAgICAgLy9DbG9zZSBiYW5uZXJcclxuICAgICAgICAkKCcuYmFubmVyLWNsb3NlJywgYmFubmVyKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGJhbm5lci5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9CYW5uZXIgY291bnRkb3duXHJcbiAgICAgICAgY29uc3QgY291bnRkb3duID0gJCgnLmJhbm5lci1jb3VudGRvd24nLCBiYW5uZXIpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVyID0gJCgnLnRpbWVyJywgYmFubmVyKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZG93bi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDI0ICogNjAgKiA2MCAqIDEwMDAgKyAyICogNjAgKiA2MCAqIDEwMDApLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGxldCBjb3VudERvd25EYXRlID0gbmV3IERhdGUoZGF0ZVRpbWUpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgdGhlcmUgaXMgYSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lJykpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgeCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBjb3VudERvd25EYXRlIC0gbm93O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVyLmh0bWwoYDxzcGFuIGNsYXNzPVwiZGF5c1wiPiR7ZGF5c31kPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhvdXJzXCI+JHtob3Vyc31oPC9zcGFuPiA8c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIj4ke21pbnV0ZXN9bTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzZWNvbmRzXCI+JHtzZWNvbmRzfXM8L3NwYW4+YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXIudGV4dChcIkVYUElSRURcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RpbWUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL3NhdmUgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGltZScsIGNvdW50RG93bkRhdGUpO1xyXG5cclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG59KShqUXVlcnkpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvcHJpY2luZ1wiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lclwiO1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgY29uc3QgYXBwID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICBhcHAuaW5pdFRlc3RpbW9uaWFsU2xpZGVyKCk7XHJcbiAgICAgIGFwcC5pbml0RnVuRmFjdENvdW50ZXIoKTtcclxuXHJcbiAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVDb250YWN0Rm9ybSk7XHJcbiAgICAgICQoXCIudG8tdG9wXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZVRvVG9wKTtcclxuXHJcbiAgICAgIC8vaGFuZGxlIHByaWNpbmcgaXRlbSBjbGlja1xyXG4gICAgICAkKFwiLml0ZW0tcHJpY2VcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlUHJpY2luZ0l0ZW0pO1xyXG5cclxuICAgICAgYXBwLmluaXRJbWFnZUNvbXBhcmUoKTtcclxuXHJcbiAgICAgIGFwcC5jaGFuZ2VEcmFjdWxhSGVyb0ltYWdlKCk7XHJcblxyXG4gICAgICAvL3Byb2R1Y3QgY2hlY2tcclxuICAgICAgY29uc3QgZXZhbGlkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2UtdmFsaWRhdGUnKTtcclxuICAgICAgY29uc3QgZW1haWx0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1lbWFpbF0nKTtcclxuICAgICAgLy9lbWFpbCBjaGVja1xyXG5cclxuICAgICAgICBjb25zdCBlbWFpbENoZWNrID0oZW1haWwpPT57XHJcbiAgICAgICAgICBsZXQgcGF0ZXJucz0vXlthLXowLTlfXFwuXXsxLH1AW2Etel17Mix9XFwuW2Etel17Miw1fSQvO1xyXG5cclxuICAgICAgICAgIHJldHVybiBwYXRlcm5zLnRlc3QoZW1haWwpO1xyXG4gICAgICAgIH1cclxuICAgICAvL2VtYWlsIHZhbGlkYXRpb25cclxuXHJcbiAgICAgIGVtYWlsdHlwZS5vbmtleXVwPShlKT0+e1xyXG4gICAgICAgIGxldCBlbWFpbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVtYWlsQ2hlY2soZW1haWwpKTtcclxuICAgICAgICBpZihlbWFpbENoZWNrKGVtYWlsKSl7XHJcbiAgICAgICAgICAgIGV2YWxpZGF0ZS50ZXh0Q29udGVudD0nYSB2YWxpZCBlbWFpbCBhZGRyZXNzJztcclxuICAgICAgICAgICAgZXZhbGlkYXRlLmNsYXNzTmFtZT0ndGV4dC1pbmZvJztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZXZhbGlkYXRlLnRleHRDb250ZW50PSdwbGVhc2UgRW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJztcclxuICAgICAgICAgICAgZXZhbGlkYXRlLmNsYXNzTmFtZT0ndGV4dC1kYW5nZXInO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgdmFyIGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5lZWRzLXZhbGlkYXRpb24nKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coc29mdGxhYi5hamF4X3VybCk7XHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZvcm1zKS5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtKSB7XHJcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgIGlmICghZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuXHJcbiAgICAgIC8vICAgdmFyIG5hbWUgPSAkKFwiI25hbWVcIikudmFsKCk7XHJcbiAgICAgIC8vICAgdmFyIGVtYWlsID0gJChcIiNlbWFpbFwiKS52YWwoKTtcclxuICAgICAgLy8gICB2YXIgcGVtYWlsID0gJChcIiNwZW1haWxcIikudmFsKCk7XHJcbiAgICAgIC8vICAgdmFyIHdlYnNpdGUgPSAkKFwiI3dlYnNpdGVcIikudmFsKCk7XHJcbiAgICAgIC8vICAgdmFyIHNpdGUgPSAkKFwiI3NpdGVcIikudmFsKCk7XHJcbiAgICAgIC8vICAgdmFyIG1lZGlhID0gJChcIiNtZWRpYVwiKS52YWwoKTtcclxuICAgICAgLy8gICB2YXIgYXBwID0gJChcIiNhcHBcIikudmFsKCk7XHJcbiAgICAgIC8vICAgdmFyIGdvb2dsZWRyaXZlID0gJChcIiNnb29nbGUtZHJpdmVcIikudmFsKCk7XHJcbiAgICAgIC8vICAgdmFyIHJhZGlvcGxheWVyID0gJChcIiNyYWRpby1wbGF5ZXJcIikudmFsKCk7XHJcbiAgICAgIC8vICAvLyB2YXIgc29jaWFsc2l0ZSA9ICQoXCIjc29jaWFsc2l0ZVwiKS52YWwoKTtcclxuICAgICAgLy8gICB2YXIgYWdyZWUgPSAkKFwiI2FncmVlXCIpLnZhbCgpO1xyXG5cclxuICAgICAgLy8gICAkKFwiI3N1Ym1pdFwiKS52YWwoXCJMb2FkaW5nLi4uXCIpO1xyXG4gICAgICAvLyAgICQucG9zdChcclxuICAgICAgLy8gICAgIHNvZnRsYWIuYWpheF91cmwsXHJcbiAgICAgIC8vICAgICB7XHJcbiAgICAgIC8vICAgICAgIGFjdGlvbjogXCJhZmZpbGlhdGVfcmVnaXN0ZXJcIixcclxuICAgICAgLy8gICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgLy8gICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAvLyAgICAgICBwZW1haWw6IHBlbWFpbCxcclxuICAgICAgLy8gICAgICAgZ29vZ2xlZHJpdmU6Z29vZ2xlZHJpdmUsXHJcbiAgICAgIC8vICAgICAgIHJhZGlvcGxheWVyOnJhZGlvcGxheWVyLFxyXG4gICAgICAvLyAgICAgICB3ZWJzaXRlOiB3ZWJzaXRlLFxyXG4gICAgICAvLyAgICAgICBzaXRlOiBzaXRlLFxyXG4gICAgICAvLyAgICAgICBtZWRpYTogbWVkaWEsXHJcbiAgICAgIC8vICAgICAgIGFwcDogYXBwLFxyXG4gICAgICAvLyAgICAgICBzb2NpYWxzaXRlOiBzb2NpYWxzaXRlLFxyXG4gICAgICAvLyAgICAgICBhZ3JlZTogYWdyZWUsXHJcbiAgICAgIC8vICAgICB9LFxyXG4gICAgICAvLyAgIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAvLyAgICAgICAkKFwiI3N1Ym1pdFwiKS52YWwoXCJSZWdpc3RlclwiKTtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICApO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3dhcy12YWxpZGF0ZWQnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgXHJcbiAgICBcclxuICAgIH0sXHJcbiAgICBcclxuXHJcbiAgICBpbml0VGVzdGltb25pYWxTbGlkZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gSG9tZSB0ZXN0aW1vbmlhbCBzbGlkZXJcclxuICAgICAgJChcIi5zaW5nbGUtdGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICBzcGVlZDogMjAwMCxcclxuICAgICAgICBjb250ZW50UGFkZGluZzogXCIzMHB4XCIsXHJcbiAgICAgICAgbmV4dEFycm93OiBcIi5yaWdodFwiLFxyXG4gICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vZ29vZ2xlIGRyaXZlXHJcbiAgICAgICQoXCIudGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xyXG4gICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgIG5leHRBcnJvdzogXCIucmlnaHRcIixcclxuICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG4gICAgICAvL2Fib3V0IHNsaWRlclxyXG4gICAgICAkKFwiLnNsaWRlci1tYWluXCIpLnNsaWNrKHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgIG5leHRBcnJvdzogXCIudXBcIixcclxuICAgICAgICBwcmV2QXJyb3c6IFwiLmRvd25cIixcclxuICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIGNlbnRlclBhZGRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJChcIi5jb21wYXQtc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTM5OS45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG4gICAgICAvL2RyYWN1bGEgc2xpZGVyXHJcbiAgICAgICQoXCIuZHJhY3VsYS1zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0RnVuRmFjdENvdW50ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIi5jb3VudGVyXCIpLmNvdW50ZXJVcCh7XHJcbiAgICAgICAgZGVsYXk6IDE2LFxyXG4gICAgICAgIHRpbWU6IDE1MDAsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVDb250YWN0Rm9ybTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLmNvbnRhY3QtZm9ybSAudGFiLWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAkKFwiLmNvbnRhY3QtZm9ybS13cmFwXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKGAuY29udGFjdC1mb3JtLXdyYXAuZm9ybS0keyQodGhpcykuZGF0YShcInRhcmdldFwiKX1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlVG9Ub3A6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCBcImZhc3RcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZVByaWNpbmdJdGVtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIuaXRlbS1wcmljZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdEltYWdlQ29tcGFyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLnJlYWRlci1tb2RlLWltYWdlLWNvbXBhcmVcIikudHdlbnR5dHdlbnR5KHtcclxuICAgICAgICAvLyAgSG93IG11Y2ggb2YgdGhlIGJlZm9yZSBpbWFnZSBpcyB2aXNpYmxlIHdoZW4gdGhlIHBhZ2UgbG9hZHNcclxuICAgICAgICBkZWZhdWx0X29mZnNldF9wY3Q6IDAuNSxcclxuXHJcbiAgICAgICAgLy8gbGFiZWwgdGV4dFxyXG4gICAgICAgIGJlZm9yZV9sYWJlbDogXCJHZW5lcmFsIFZpZXdcIixcclxuICAgICAgICBhZnRlcl9sYWJlbDogXCJSZWFkZXIgTW9kZSBWaWV3XCIsXHJcblxyXG4gICAgICAgIC8vb3ZlcmxheVxyXG4gICAgICAgIG5vX292ZXJsYXk6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBjaGFuZ2VEcmFjdWxhSGVyb0ltYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGltYWdlID0gJChcIi5kcmFjdWxhLWhlcm8taW1hZ2VcIik7XHJcblxyXG4gICAgICBpZighaW1hZ2UubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VTcmMgPSBpbWFnZS5hdHRyKFwic3JjXCIpO1xyXG4gICAgICAgIGNvbnN0IGlzRGFyayA9IGltYWdlU3JjLmluY2x1ZGVzKFwiaGVyby1kYXJrXCIpO1xyXG4gICAgICAgIGltYWdlLmF0dHIoXHJcbiAgICAgICAgICBcInNyY1wiLFxyXG4gICAgICAgICAgaW1hZ2VTcmMucmVwbGFjZShcclxuICAgICAgICAgICAgaXNEYXJrID8gXCJoZXJvLWRhcmtcIiA6IFwiaGVyby1saWdodFwiLFxyXG4gICAgICAgICAgICBpc0RhcmsgPyBcImhlcm8tbGlnaHRcIiA6IFwiaGVyby1kYXJrXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAkKFwiLm1vZGUtYnRuXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoYC5tb2RlLWJ0bi5tb2RlLSR7aXNEYXJrID8gXCJsaWdodFwiIDogXCJkYXJrXCJ9YCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICAkKGRvY3VtZW50KS5yZWFkeShhcHAuaW5pdCk7XHJcbiAgXHJcblxyXG5cclxuICAkKFwiLnZlcnRpY2FsLWNlbnRlci00XCIpLnNsaWNrKHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgdmVydGljYWw6IGZhbHNlLFxyXG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgcHJldkFycm93OlxyXG4gICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PHNwYW4gYXJpYS1sYWJlbD1cIlByZXZpb3VzXCI+4oC5PC9zcGFuPjwvYnV0dG9uPicsXHJcbiAgICBuZXh0QXJyb3c6XHJcbiAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj48c3BhbiBhcmlhLWxhYmVsPVwiTmV4dFwiPuKAujwvc3Bhbj48L2J1dHRvbj4nLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcbiJdLCJuYW1lcyI6WyIkIiwiYXBwIiwiaW5pdCIsIm9uIiwiaGFuZGxlU3dpdGNoZXIiLCJoYW5kbGVMaWNlbnNlU3dpdGNoZXIiLCJlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwidG9nZ2xlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJsaWNlbnNlIiwiZGF0YSIsImRvY3VtZW50IiwicmVhZHkiLCJqUXVlcnkiLCJiYW5uZXIiLCJyZW1vdmUiLCJjb3VudGRvd24iLCJ0aW1lciIsImxlbmd0aCIsImRhdGVUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0b0lTT1N0cmluZyIsImNvdW50RG93bkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwieCIsInNldEludGVydmFsIiwibm93IiwiZGlzdGFuY2UiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImh0bWwiLCJjbGVhckludGVydmFsIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJpbml0VGVzdGltb25pYWxTbGlkZXIiLCJpbml0RnVuRmFjdENvdW50ZXIiLCJoYW5kbGVDb250YWN0Rm9ybSIsImhhbmRsZVRvVG9wIiwiaGFuZGxlUHJpY2luZ0l0ZW0iLCJpbml0SW1hZ2VDb21wYXJlIiwiY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSIsImV2YWxpZGF0ZSIsImdldEVsZW1lbnRCeUlkIiwiZW1haWx0eXBlIiwicXVlcnlTZWxlY3RvciIsImVtYWlsQ2hlY2siLCJlbWFpbCIsInBhdGVybnMiLCJ0ZXN0Iiwib25rZXl1cCIsInRhcmdldCIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJjbGFzc05hbWUiLCJmb3JtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImZvckVhY2giLCJmb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2hlY2tWYWxpZGl0eSIsInN0b3BQcm9wYWdhdGlvbiIsImNsYXNzTGlzdCIsImFkZCIsInNsaWNrIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImFycm93cyIsImF1dG9wbGF5U3BlZWQiLCJzcGVlZCIsImNvbnRlbnRQYWRkaW5nIiwibmV4dEFycm93IiwicHJldkFycm93IiwiYWRhcHRpdmVIZWlnaHQiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImRvdHMiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwidmVydGljYWwiLCJjb3VudGVyVXAiLCJkZWxheSIsInRpbWUiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidHdlbnR5dHdlbnR5IiwiZGVmYXVsdF9vZmZzZXRfcGN0IiwiYmVmb3JlX2xhYmVsIiwiYWZ0ZXJfbGFiZWwiLCJub19vdmVybGF5IiwiaW1hZ2UiLCJpbWFnZVNyYyIsImF0dHIiLCJpc0RhcmsiLCJpbmNsdWRlcyIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9