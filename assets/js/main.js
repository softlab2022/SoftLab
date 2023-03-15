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

      //product check
      var evalidate = document.getElementById('e-validate');
      var emailtype = document.querySelector('input[name=email]');
      //email check

      var emailCheck = function emailCheck(email) {
        var paterns = /^[a-z0-9_\.]{1,}@[a-z]{2,}\.[a-z]{2,5}$/;
        return paterns.test(email);
      };
      //email validation

      emailtype.onkeyup = function (e) {
        var email = e.target.value;
        // console.log(emailCheck(email));
        if (emailCheck(email)) {
          evalidate.textContent = 'a valid email address';
          evalidate.className = 'text-info';
        } else {
          evalidate.textContent = 'please Enter a valid email address';
          evalidate.className = 'text-danger';
        }
      };
      var forms = document.querySelectorAll('.needs-validation');
      // console.log(softlab.ajax_url);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLG9CQUFvQixDQUFDLENBQUMrRSxLQUFLLENBQUM7SUFDNUJhLElBQUksRUFBRSxLQUFLO0lBQ1hJLFFBQVEsRUFBRSxLQUFLO0lBQ2ZOLFVBQVUsRUFBRSxJQUFJO0lBQ2hCVixZQUFZLEVBQUUsQ0FBQztJQUNmQyxjQUFjLEVBQUUsQ0FBQztJQUNqQk8sU0FBUyxFQUNQLHdGQUF3RjtJQUMxRkQsU0FBUyxFQUNQLG9GQUFvRjtJQUN0Rk0sVUFBVSxFQUFFLENBQ1Y7TUFDRUMsVUFBVSxFQUFFLE9BQU87TUFDbkJDLFFBQVEsRUFBRTtRQUNSWixNQUFNLEVBQUUsS0FBSztRQUNiTyxVQUFVLEVBQUUsS0FBSztRQUNqQkMsYUFBYSxFQUFFLE1BQU07UUFDckJYLFlBQVksRUFBRTtNQUNoQjtJQUNGLENBQUMsRUFDRDtNQUNFYyxVQUFVLEVBQUUsTUFBTTtNQUNsQkMsUUFBUSxFQUFFO1FBQ1JaLE1BQU0sRUFBRSxLQUFLO1FBQ2JPLFVBQVUsRUFBRSxLQUFLO1FBQ2pCQyxhQUFhLEVBQUUsTUFBTTtRQUNyQlgsWUFBWSxFQUFFO01BQ2hCO0lBQ0YsQ0FBQyxFQUNEO01BQ0VjLFVBQVUsRUFBRSxNQUFNO01BQ2xCQyxRQUFRLEVBQUU7UUFDUlosTUFBTSxFQUFFLEtBQUs7UUFDYk8sVUFBVSxFQUFFLEtBQUs7UUFDakJDLGFBQWEsRUFBRSxNQUFNO1FBQ3JCWCxZQUFZLEVBQUU7TUFDaEI7SUFDRixDQUFDO0VBRUwsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxFQUFFOUQsTUFBTSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL2NvbXBvbmVudHMvcHJpY2luZy5qcyIsIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lci5qcyIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiOyhmdW5jdGlvbiAoJCkge1xyXG4gICAgY29uc3QgYXBwID0ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9IYW5kbGUgcHJpY2luZyBzd2l0Y2hlclxyXG4gICAgICAgICAgICAkKCcucHJpY2luZy1zd2l0Y2hlcicpLm9uKCdjbGljaycsIGFwcC5oYW5kbGVTd2l0Y2hlcik7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgbGljZW5zZSBzd2l0Y2hlclxyXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24taXRlbScpLm9uKCdjbGljaycsIGFwcC5oYW5kbGVMaWNlbnNlU3dpdGNoZXIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVN3aXRjaGVyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdhbm51YWwgbGlmZXRpbWUnKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpID8gJ2FubnVhbCcgOiAnbGlmZXRpbWUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlTGljZW5zZVN3aXRjaGVyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlJykudGV4dCgkKHRoaXMpLnRleHQoKSk7XHJcblxyXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24taXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaWNlbnNlID0gJCh0aGlzKS5kYXRhKCdsaWNlbnNlJyk7XHJcbiAgICAgICAgICAgICQoJy5wcmljZS10ZXh0JykucmVtb3ZlQ2xhc3MoJ2xpY2Vuc2UtMSBsaWNlbnNlLTUgbGljZW5zZS0xMDAnKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGBsaWNlbnNlLSR7bGljZW5zZX1gKTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxuXHJcbn0pKGpRdWVyeSk7IiwiOyhmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGJhbm5lciA9ICQoJyNoZWFkZXItc3RpY2t5LWJhbm5lcicpO1xyXG5cclxuICAgICAgICAvL0Nsb3NlIGJhbm5lclxyXG4gICAgICAgICQoJy5iYW5uZXItY2xvc2UnLCBiYW5uZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYmFubmVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL0Jhbm5lciBjb3VudGRvd25cclxuICAgICAgICBjb25zdCBjb3VudGRvd24gPSAkKCcuYmFubmVyLWNvdW50ZG93bicsIGJhbm5lcik7XHJcbiAgICAgICAgY29uc3QgdGltZXIgPSAkKCcudGltZXInLCBiYW5uZXIpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMjQgKiA2MCAqIDYwICogMTAwMCArIDIgKiA2MCAqIDYwICogMTAwMCkudG9JU09TdHJpbmcoKTtcclxuICAgICAgICAgICAgbGV0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShkYXRlVGltZSkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICAgICAgLy9jaGVjayBpZiB0aGVyZSBpcyBhIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWUnKSkge1xyXG4gICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCB4ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZXIuaHRtbChgPHNwYW4gY2xhc3M9XCJkYXlzXCI+JHtkYXlzfWQ8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaG91cnNcIj4ke2hvdXJzfWg8L3NwYW4+IDxzcGFuIGNsYXNzPVwibWludXRlc1wiPiR7bWludXRlc31tPC9zcGFuPiA8c3BhbiBjbGFzcz1cInNlY29uZHNcIj4ke3NlY29uZHN9czwvc3Bhbj5gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh4KTtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lci50ZXh0KFwiRVhQSVJFRFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGltZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vc2F2ZSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aW1lJywgY291bnREb3duRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbn0pKGpRdWVyeSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vY29tcG9uZW50cy9wcmljaW5nXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9zdGlja3ktYmFubmVyXCI7XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICBjb25zdCBhcHAgPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGFwcC5pbml0VGVzdGltb25pYWxTbGlkZXIoKTtcclxuICAgICAgYXBwLmluaXRGdW5GYWN0Q291bnRlcigpO1xyXG5cclxuICAgICAgJChcIi5jb250YWN0LWZvcm0gLnRhYi1pdGVtXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZUNvbnRhY3RGb3JtKTtcclxuICAgICAgJChcIi50by10b3BcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlVG9Ub3ApO1xyXG5cclxuICAgICAgLy9oYW5kbGUgcHJpY2luZyBpdGVtIGNsaWNrXHJcbiAgICAgICQoXCIuaXRlbS1wcmljZVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVQcmljaW5nSXRlbSk7XHJcblxyXG4gICAgICBhcHAuaW5pdEltYWdlQ29tcGFyZSgpO1xyXG5cclxuICAgICAgYXBwLmNoYW5nZURyYWN1bGFIZXJvSW1hZ2UoKTtcclxuXHJcbiAgICAgIC8vcHJvZHVjdCBjaGVja1xyXG4gICAgICBjb25zdCBldmFsaWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZS12YWxpZGF0ZScpO1xyXG4gICAgICBjb25zdCBlbWFpbHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPWVtYWlsXScpO1xyXG4gICAgICAvL2VtYWlsIGNoZWNrXHJcblxyXG4gICAgICAgIGNvbnN0IGVtYWlsQ2hlY2sgPShlbWFpbCk9PntcclxuICAgICAgICAgIGxldCBwYXRlcm5zPS9eW2EtejAtOV9cXC5dezEsfUBbYS16XXsyLH1cXC5bYS16XXsyLDV9JC87XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHBhdGVybnMudGVzdChlbWFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgIC8vZW1haWwgdmFsaWRhdGlvblxyXG5cclxuICAgICAgZW1haWx0eXBlLm9ua2V5dXA9KGUpPT57XHJcbiAgICAgICAgbGV0IGVtYWlsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZW1haWxDaGVjayhlbWFpbCkpO1xyXG4gICAgICAgIGlmKGVtYWlsQ2hlY2soZW1haWwpKXtcclxuICAgICAgICAgICAgZXZhbGlkYXRlLnRleHRDb250ZW50PSdhIHZhbGlkIGVtYWlsIGFkZHJlc3MnO1xyXG4gICAgICAgICAgICBldmFsaWRhdGUuY2xhc3NOYW1lPSd0ZXh0LWluZm8nO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBldmFsaWRhdGUudGV4dENvbnRlbnQ9J3BsZWFzZSBFbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnO1xyXG4gICAgICAgICAgICBldmFsaWRhdGUuY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICB2YXIgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmVlZHMtdmFsaWRhdGlvbicpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzb2Z0bGFiLmFqYXhfdXJsKTtcclxuICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZm9ybXMpLmZvckVhY2goZnVuY3Rpb24gKGZvcm0pIHtcclxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgaWYgKCFmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG5cclxuICAgICAgLy8gICB2YXIgbmFtZSA9ICQoXCIjbmFtZVwiKS52YWwoKTtcclxuICAgICAgLy8gICB2YXIgZW1haWwgPSAkKFwiI2VtYWlsXCIpLnZhbCgpO1xyXG4gICAgICAvLyAgIHZhciBwZW1haWwgPSAkKFwiI3BlbWFpbFwiKS52YWwoKTtcclxuICAgICAgLy8gICB2YXIgd2Vic2l0ZSA9ICQoXCIjd2Vic2l0ZVwiKS52YWwoKTtcclxuICAgICAgLy8gICB2YXIgc2l0ZSA9ICQoXCIjc2l0ZVwiKS52YWwoKTtcclxuICAgICAgLy8gICB2YXIgbWVkaWEgPSAkKFwiI21lZGlhXCIpLnZhbCgpO1xyXG4gICAgICAvLyAgIHZhciBhcHAgPSAkKFwiI2FwcFwiKS52YWwoKTtcclxuICAgICAgLy8gICB2YXIgZ29vZ2xlZHJpdmUgPSAkKFwiI2dvb2dsZS1kcml2ZVwiKS52YWwoKTtcclxuICAgICAgLy8gICB2YXIgcmFkaW9wbGF5ZXIgPSAkKFwiI3JhZGlvLXBsYXllclwiKS52YWwoKTtcclxuICAgICAgLy8gIC8vIHZhciBzb2NpYWxzaXRlID0gJChcIiNzb2NpYWxzaXRlXCIpLnZhbCgpO1xyXG4gICAgICAvLyAgIHZhciBhZ3JlZSA9ICQoXCIjYWdyZWVcIikudmFsKCk7XHJcblxyXG4gICAgICAvLyAgICQoXCIjc3VibWl0XCIpLnZhbChcIkxvYWRpbmcuLi5cIik7XHJcbiAgICAgIC8vICAgJC5wb3N0KFxyXG4gICAgICAvLyAgICAgc29mdGxhYi5hamF4X3VybCxcclxuICAgICAgLy8gICAgIHtcclxuICAgICAgLy8gICAgICAgYWN0aW9uOiBcImFmZmlsaWF0ZV9yZWdpc3RlclwiLFxyXG4gICAgICAvLyAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAvLyAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIC8vICAgICAgIHBlbWFpbDogcGVtYWlsLFxyXG4gICAgICAvLyAgICAgICBnb29nbGVkcml2ZTpnb29nbGVkcml2ZSxcclxuICAgICAgLy8gICAgICAgcmFkaW9wbGF5ZXI6cmFkaW9wbGF5ZXIsXHJcbiAgICAgIC8vICAgICAgIHdlYnNpdGU6IHdlYnNpdGUsXHJcbiAgICAgIC8vICAgICAgIHNpdGU6IHNpdGUsXHJcbiAgICAgIC8vICAgICAgIG1lZGlhOiBtZWRpYSxcclxuICAgICAgLy8gICAgICAgYXBwOiBhcHAsXHJcbiAgICAgIC8vICAgICAgIHNvY2lhbHNpdGU6IHNvY2lhbHNpdGUsXHJcbiAgICAgIC8vICAgICAgIGFncmVlOiBhZ3JlZSxcclxuICAgICAgLy8gICAgIH0sXHJcbiAgICAgIC8vICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgLy8gICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIC8vICAgICAgICQoXCIjc3VibWl0XCIpLnZhbChcIlJlZ2lzdGVyXCIpO1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgICk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnd2FzLXZhbGlkYXRlZCcpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBcclxuICAgIFxyXG4gICAgfSxcclxuICAgIFxyXG5cclxuICAgIGluaXRUZXN0aW1vbmlhbFNsaWRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyBIb21lIHRlc3RpbW9uaWFsIHNsaWRlclxyXG4gICAgICAkKFwiLnNpbmdsZS10ZXN0aW1vbmlhbC1pdGVtc1wiKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgIHNwZWVkOiAyMDAwLFxyXG4gICAgICAgIGNvbnRlbnRQYWRkaW5nOiBcIjMwcHhcIixcclxuICAgICAgICBuZXh0QXJyb3c6IFwiLnJpZ2h0XCIsXHJcbiAgICAgICAgcHJldkFycm93OiBcIi5sZWZ0XCIsXHJcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy9nb29nbGUgZHJpdmVcclxuICAgICAgJChcIi50ZXN0aW1vbmlhbC1pdGVtc1wiKS5zbGljayh7XHJcbiAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgbmV4dEFycm93OiBcIi5yaWdodFwiLFxyXG4gICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSk7XHJcbiAgICAgIC8vYWJvdXQgc2xpZGVyXHJcbiAgICAgICQoXCIuc2xpZGVyLW1haW5cIikuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgbmV4dEFycm93OiBcIi51cFwiLFxyXG4gICAgICAgIHByZXZBcnJvdzogXCIuZG93blwiLFxyXG4gICAgICAgIHZlcnRpY2FsOiB0cnVlLFxyXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgY2VudGVyUGFkZGluZzogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkKFwiLmNvbXBhdC1zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMzk5Ljk4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSk7XHJcbiAgICAgIC8vZHJhY3VsYSBzbGlkZXJcclxuICAgICAgJChcIi5kcmFjdWxhLXNsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRGdW5GYWN0Q291bnRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLmNvdW50ZXJcIikuY291bnRlclVwKHtcclxuICAgICAgICBkZWxheTogMTYsXHJcbiAgICAgICAgdGltZTogMTUwMCxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZUNvbnRhY3RGb3JtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICQoXCIuY29udGFjdC1mb3JtLXdyYXBcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQoYC5jb250YWN0LWZvcm0td3JhcC5mb3JtLSR7JCh0aGlzKS5kYXRhKFwidGFyZ2V0XCIpfWApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVUb1RvcDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIFwiZmFzdFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlUHJpY2luZ0l0ZW06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIi5pdGVtLXByaWNlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0SW1hZ2VDb21wYXJlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIucmVhZGVyLW1vZGUtaW1hZ2UtY29tcGFyZVwiKS50d2VudHl0d2VudHkoe1xyXG4gICAgICAgIC8vICBIb3cgbXVjaCBvZiB0aGUgYmVmb3JlIGltYWdlIGlzIHZpc2libGUgd2hlbiB0aGUgcGFnZSBsb2Fkc1xyXG4gICAgICAgIGRlZmF1bHRfb2Zmc2V0X3BjdDogMC41LFxyXG5cclxuICAgICAgICAvLyBsYWJlbCB0ZXh0XHJcbiAgICAgICAgYmVmb3JlX2xhYmVsOiBcIkdlbmVyYWwgVmlld1wiLFxyXG4gICAgICAgIGFmdGVyX2xhYmVsOiBcIlJlYWRlciBNb2RlIFZpZXdcIixcclxuXHJcbiAgICAgICAgLy9vdmVybGF5XHJcbiAgICAgICAgbm9fb3ZlcmxheTogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNoYW5nZURyYWN1bGFIZXJvSW1hZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgaW1hZ2UgPSAkKFwiLmRyYWN1bGEtaGVyby1pbWFnZVwiKTtcclxuXHJcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBjb25zdCBpbWFnZVNyYyA9IGltYWdlLmF0dHIoXCJzcmNcIik7XHJcbiAgICAgICAgY29uc3QgaXNEYXJrID0gaW1hZ2VTcmMuaW5jbHVkZXMoXCJoZXJvLWRhcmtcIik7XHJcbiAgICAgICAgaW1hZ2UuYXR0cihcclxuICAgICAgICAgIFwic3JjXCIsXHJcbiAgICAgICAgICBpbWFnZVNyYy5yZXBsYWNlKFxyXG4gICAgICAgICAgICBpc0RhcmsgPyBcImhlcm8tZGFya1wiIDogXCJoZXJvLWxpZ2h0XCIsXHJcbiAgICAgICAgICAgIGlzRGFyayA/IFwiaGVyby1saWdodFwiIDogXCJoZXJvLWRhcmtcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgICQoXCIubW9kZS1idG5cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChgLm1vZGUtYnRuLm1vZGUtJHtpc0RhcmsgPyBcImxpZ2h0XCIgOiBcImRhcmtcIn1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxuICBcclxuXHJcblxyXG4gICQoXCIudmVydGljYWwtY2VudGVyLTRcIikuc2xpY2soe1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICB2ZXJ0aWNhbDogZmFsc2UsXHJcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICBwcmV2QXJyb3c6XHJcbiAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj48c3BhbiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIj7igLk8L3NwYW4+PC9idXR0b24+JyxcclxuICAgIG5leHRBcnJvdzpcclxuICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPjxzcGFuIGFyaWEtbGFiZWw9XCJOZXh0XCI+4oC6PC9zcGFuPjwvYnV0dG9uPicsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9KTtcclxufSkoalF1ZXJ5KTtcclxuIl0sIm5hbWVzIjpbIiQiLCJhcHAiLCJpbml0Iiwib24iLCJoYW5kbGVTd2l0Y2hlciIsImhhbmRsZUxpY2Vuc2VTd2l0Y2hlciIsImUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaGFzQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsImxpY2Vuc2UiLCJkYXRhIiwiY29uY2F0IiwiZG9jdW1lbnQiLCJyZWFkeSIsImpRdWVyeSIsImJhbm5lciIsInJlbW92ZSIsImNvdW50ZG93biIsInRpbWVyIiwibGVuZ3RoIiwiZGF0ZVRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRvSVNPU3RyaW5nIiwiY291bnREb3duRGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ4Iiwic2V0SW50ZXJ2YWwiLCJub3ciLCJkaXN0YW5jZSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiaHRtbCIsImNsZWFySW50ZXJ2YWwiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImluaXRUZXN0aW1vbmlhbFNsaWRlciIsImluaXRGdW5GYWN0Q291bnRlciIsImhhbmRsZUNvbnRhY3RGb3JtIiwiaGFuZGxlVG9Ub3AiLCJoYW5kbGVQcmljaW5nSXRlbSIsImluaXRJbWFnZUNvbXBhcmUiLCJjaGFuZ2VEcmFjdWxhSGVyb0ltYWdlIiwiZXZhbGlkYXRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJlbWFpbHR5cGUiLCJxdWVyeVNlbGVjdG9yIiwiZW1haWxDaGVjayIsImVtYWlsIiwicGF0ZXJucyIsInRlc3QiLCJvbmtleXVwIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXh0Q29udGVudCIsImNsYXNzTmFtZSIsImZvcm1zIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiZm9yRWFjaCIsImZvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjaGVja1ZhbGlkaXR5Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXJyb3dzIiwiYXV0b3BsYXlTcGVlZCIsInNwZWVkIiwiY29udGVudFBhZGRpbmciLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJhZGFwdGl2ZUhlaWdodCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiZG90cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ2ZXJ0aWNhbCIsImNvdW50ZXJVcCIsImRlbGF5IiwidGltZSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ0d2VudHl0d2VudHkiLCJkZWZhdWx0X29mZnNldF9wY3QiLCJiZWZvcmVfbGFiZWwiLCJhZnRlcl9sYWJlbCIsIm5vX292ZXJsYXkiLCJpbWFnZSIsImltYWdlU3JjIiwiYXR0ciIsImlzRGFyayIsImluY2x1ZGVzIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=