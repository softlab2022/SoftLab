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

      $("#submit.bk").on("click", function (e) {
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

        //     if(!name || !username || !pemail || !aemail || !website || !site ){
        //         $('.msg').html('All fields are required');
        //      }else{
        //        $('.msg').html('thenks you very much');
        //    }

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
          e.target.reset();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVEUixDQUFDLENBQUNnQixRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDaEIsR0FBRyxDQUFDQyxJQUFJLENBQUM7RUFJM0JGLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDcUUsS0FBSyxDQUFDO0lBQzVCYSxJQUFJLEVBQUUsS0FBSztJQUNYSSxRQUFRLEVBQUUsS0FBSztJQUNmTixVQUFVLEVBQUUsSUFBSTtJQUNoQlYsWUFBWSxFQUFFLENBQUM7SUFDZkMsY0FBYyxFQUFFLENBQUM7SUFDakJPLFNBQVMsRUFDUCx3RkFBd0Y7SUFDMUZELFNBQVMsRUFDUCxvRkFBb0Y7SUFDdEZNLFVBQVUsRUFBRSxDQUNWO01BQ0VDLFVBQVUsRUFBRSxPQUFPO01BQ25CQyxRQUFRLEVBQUU7UUFDUlosTUFBTSxFQUFFLEtBQUs7UUFDYk8sVUFBVSxFQUFFLEtBQUs7UUFDakJDLGFBQWEsRUFBRSxNQUFNO1FBQ3JCWCxZQUFZLEVBQUU7TUFDaEI7SUFDRixDQUFDLEVBQ0Q7TUFDRWMsVUFBVSxFQUFFLE1BQU07TUFDbEJDLFFBQVEsRUFBRTtRQUNSWixNQUFNLEVBQUUsS0FBSztRQUNiTyxVQUFVLEVBQUUsS0FBSztRQUNqQkMsYUFBYSxFQUFFLE1BQU07UUFDckJYLFlBQVksRUFBRTtNQUNoQjtJQUNGLENBQUMsRUFDRDtNQUNFYyxVQUFVLEVBQUUsTUFBTTtNQUNsQkMsUUFBUSxFQUFFO1FBQ1JaLE1BQU0sRUFBRSxLQUFLO1FBQ2JPLFVBQVUsRUFBRSxLQUFLO1FBQ2pCQyxhQUFhLEVBQUUsTUFBTTtRQUNyQlgsWUFBWSxFQUFFO01BQ2hCO0lBQ0YsQ0FBQztFQUVMLENBQUMsQ0FBQztBQUNKLENBQUMsRUFBRXBELE1BQU0sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3N0aWNreS1iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24gKCQpIHtcclxuICAgIGNvbnN0IGFwcCA9IHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vSGFuZGxlIHByaWNpbmcgc3dpdGNoZXJcclxuICAgICAgICAgICAgJCgnLnByaWNpbmctc3dpdGNoZXInKS5vbignY2xpY2snLCBhcHAuaGFuZGxlU3dpdGNoZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlIGxpY2Vuc2Ugc3dpdGNoZXJcclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5vbignY2xpY2snLCBhcHAuaGFuZGxlTGljZW5zZVN3aXRjaGVyKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnYW5udWFsIGxpZmV0aW1lJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICdhbm51YWwnIDogJ2xpZmV0aW1lJyk7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUxpY2Vuc2VTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZScpLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGljZW5zZSA9ICQodGhpcykuZGF0YSgnbGljZW5zZScpO1xyXG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdsaWNlbnNlLTEgbGljZW5zZS01IGxpY2Vuc2UtMTAwJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhgbGljZW5zZS0ke2xpY2Vuc2V9YCk7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShhcHAuaW5pdCk7XHJcblxyXG59KShqUXVlcnkpOyIsIjsoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBiYW5uZXIgPSAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXInKTtcclxuXHJcbiAgICAgICAgLy9DbG9zZSBiYW5uZXJcclxuICAgICAgICAkKCcuYmFubmVyLWNsb3NlJywgYmFubmVyKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGJhbm5lci5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9CYW5uZXIgY291bnRkb3duXHJcbiAgICAgICAgY29uc3QgY291bnRkb3duID0gJCgnLmJhbm5lci1jb3VudGRvd24nLCBiYW5uZXIpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVyID0gJCgnLnRpbWVyJywgYmFubmVyKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZG93bi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDI0ICogNjAgKiA2MCAqIDEwMDAgKyAyICogNjAgKiA2MCAqIDEwMDApLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGxldCBjb3VudERvd25EYXRlID0gbmV3IERhdGUoZGF0ZVRpbWUpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgdGhlcmUgaXMgYSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lJykpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgeCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBjb3VudERvd25EYXRlIC0gbm93O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVyLmh0bWwoYDxzcGFuIGNsYXNzPVwiZGF5c1wiPiR7ZGF5c31kPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhvdXJzXCI+JHtob3Vyc31oPC9zcGFuPiA8c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIj4ke21pbnV0ZXN9bTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzZWNvbmRzXCI+JHtzZWNvbmRzfXM8L3NwYW4+YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXIudGV4dChcIkVYUElSRURcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RpbWUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL3NhdmUgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGltZScsIGNvdW50RG93bkRhdGUpO1xyXG5cclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG59KShqUXVlcnkpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvcHJpY2luZ1wiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lclwiO1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgY29uc3QgYXBwID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICBhcHAuaW5pdFRlc3RpbW9uaWFsU2xpZGVyKCk7XHJcbiAgICAgIGFwcC5pbml0RnVuRmFjdENvdW50ZXIoKTtcclxuXHJcbiAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVDb250YWN0Rm9ybSk7XHJcbiAgICAgICQoXCIudG8tdG9wXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZVRvVG9wKTtcclxuXHJcbiAgICAgIC8vaGFuZGxlIHByaWNpbmcgaXRlbSBjbGlja1xyXG4gICAgICAkKFwiLml0ZW0tcHJpY2VcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlUHJpY2luZ0l0ZW0pO1xyXG5cclxuICAgICAgYXBwLmluaXRJbWFnZUNvbXBhcmUoKTtcclxuXHJcbiAgICAgIGFwcC5jaGFuZ2VEcmFjdWxhSGVyb0ltYWdlKCk7XHJcblxyXG4gICAgICAvLyBkYXRhIHNlbmQgdG8gc2VydmVyXHJcblxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzb2Z0bGFiLmFqYXhfdXJsKTtcclxuICBcclxuICAgICAgJChcIiNzdWJtaXQuYmtcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyIG5hbWUgPSAkKFwiI25hbWVcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIGVtYWlsID0gJChcIiNlbWFpbFwiKS52YWwoKTtcclxuICAgICAgICB2YXIgcGVtYWlsID0gJChcIiNwZW1haWxcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIHdlYnNpdGUgPSAkKFwiI3dlYnNpdGVcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIHNpdGUgPSAkKFwiI3NpdGVcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIG1lZGlhID0gJChcIiNtZWRpYVwiKS52YWwoKTtcclxuICAgICAgICB2YXIgYXBwID0gJChcIiNhcHBcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIHNvY2lhbHNpdGUgPSAkKFwiI3NvY2lhbHNpdGVcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIGFncmVlID0gJChcIiNhZ3JlZVwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgLy8gICAgIGlmKCFuYW1lIHx8ICF1c2VybmFtZSB8fCAhcGVtYWlsIHx8ICFhZW1haWwgfHwgIXdlYnNpdGUgfHwgIXNpdGUgKXtcclxuICAgICAgICAvLyAgICAgICAgICQoJy5tc2cnKS5odG1sKCdBbGwgZmllbGRzIGFyZSByZXF1aXJlZCcpO1xyXG4gICAgICAgIC8vICAgICAgfWVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICQoJy5tc2cnKS5odG1sKCd0aGVua3MgeW91IHZlcnkgbXVjaCcpO1xyXG4gICAgICAgIC8vICAgIH1cclxuICAgICAgXHJcblxyXG5cclxuICAgICAgICAkKFwiI3N1Ym1pdFwiKS52YWwoXCJMb2FkaW5nLi4uXCIpO1xyXG5cclxuICAgICAgICAkLnBvc3QoXHJcbiAgICAgICAgICBzb2Z0bGFiLmFqYXhfdXJsLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBhY3Rpb246IFwiYWZmaWxpYXRlX3JlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgcGVtYWlsOiBwZW1haWwsXHJcbiAgICAgICAgICAgIHdlYnNpdGU6IHdlYnNpdGUsXHJcbiAgICAgICAgICAgIHNpdGU6IHNpdGUsXHJcbiAgICAgICAgICAgIG1lZGlhOiBtZWRpYSxcclxuICAgICAgICAgICAgYXBwOiBhcHAsXHJcbiAgICAgICAgICAgIHNvY2lhbHNpdGU6IHNvY2lhbHNpdGUsXHJcbiAgICAgICAgICAgIGFncmVlOiBhZ3JlZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICQoXCIjc3VibWl0XCIpLnZhbChcIlJlZ2lzdGVyXCIpO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5yZXNldCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICB9LFxyXG4gICAgXHJcblxyXG4gICAgaW5pdFRlc3RpbW9uaWFsU2xpZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIEhvbWUgdGVzdGltb25pYWwgc2xpZGVyXHJcbiAgICAgICQoXCIuc2luZ2xlLXRlc3RpbW9uaWFsLWl0ZW1zXCIpLnNsaWNrKHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgc3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgY29udGVudFBhZGRpbmc6IFwiMzBweFwiLFxyXG4gICAgICAgIG5leHRBcnJvdzogXCIucmlnaHRcIixcclxuICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcclxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvL2dvb2dsZSBkcml2ZVxyXG4gICAgICAkKFwiLnRlc3RpbW9uaWFsLWl0ZW1zXCIpLnNsaWNrKHtcclxuICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICBuZXh0QXJyb3c6IFwiLnJpZ2h0XCIsXHJcbiAgICAgICAgcHJldkFycm93OiBcIi5sZWZ0XCIsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KTtcclxuICAgICAgLy9hYm91dCBzbGlkZXJcclxuICAgICAgJChcIi5zbGlkZXItbWFpblwiKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICBuZXh0QXJyb3c6IFwiLnVwXCIsXHJcbiAgICAgICAgcHJldkFycm93OiBcIi5kb3duXCIsXHJcbiAgICAgICAgdmVydGljYWw6IHRydWUsXHJcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJQYWRkaW5nOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICQoXCIuY29tcGF0LXNsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzOTkuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KTtcclxuICAgICAgLy9kcmFjdWxhIHNsaWRlclxyXG4gICAgICAkKFwiLmRyYWN1bGEtc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdEZ1bkZhY3RDb3VudGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIuY291bnRlclwiKS5jb3VudGVyVXAoe1xyXG4gICAgICAgIGRlbGF5OiAxNixcclxuICAgICAgICB0aW1lOiAxNTAwLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlQ29udGFjdEZvcm06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIi5jb250YWN0LWZvcm0gLnRhYi1pdGVtXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgJChcIi5jb250YWN0LWZvcm0td3JhcFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgJChgLmNvbnRhY3QtZm9ybS13cmFwLmZvcm0tJHskKHRoaXMpLmRhdGEoXCJ0YXJnZXRcIil9YCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZVRvVG9wOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgXCJmYXN0XCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVQcmljaW5nSXRlbTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLml0ZW0tcHJpY2VcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRJbWFnZUNvbXBhcmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIi5yZWFkZXItbW9kZS1pbWFnZS1jb21wYXJlXCIpLnR3ZW50eXR3ZW50eSh7XHJcbiAgICAgICAgLy8gIEhvdyBtdWNoIG9mIHRoZSBiZWZvcmUgaW1hZ2UgaXMgdmlzaWJsZSB3aGVuIHRoZSBwYWdlIGxvYWRzXHJcbiAgICAgICAgZGVmYXVsdF9vZmZzZXRfcGN0OiAwLjUsXHJcblxyXG4gICAgICAgIC8vIGxhYmVsIHRleHRcclxuICAgICAgICBiZWZvcmVfbGFiZWw6IFwiR2VuZXJhbCBWaWV3XCIsXHJcbiAgICAgICAgYWZ0ZXJfbGFiZWw6IFwiUmVhZGVyIE1vZGUgVmlld1wiLFxyXG5cclxuICAgICAgICAvL292ZXJsYXlcclxuICAgICAgICBub19vdmVybGF5OiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgY2hhbmdlRHJhY3VsYUhlcm9JbWFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBpbWFnZSA9ICQoXCIuZHJhY3VsYS1oZXJvLWltYWdlXCIpO1xyXG5cclxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGltYWdlU3JjID0gaW1hZ2UuYXR0cihcInNyY1wiKTtcclxuICAgICAgICBjb25zdCBpc0RhcmsgPSBpbWFnZVNyYy5pbmNsdWRlcyhcImhlcm8tZGFya1wiKTtcclxuICAgICAgICBpbWFnZS5hdHRyKFxyXG4gICAgICAgICAgXCJzcmNcIixcclxuICAgICAgICAgIGltYWdlU3JjLnJlcGxhY2UoXHJcbiAgICAgICAgICAgIGlzRGFyayA/IFwiaGVyby1kYXJrXCIgOiBcImhlcm8tbGlnaHRcIixcclxuICAgICAgICAgICAgaXNEYXJrID8gXCJoZXJvLWxpZ2h0XCIgOiBcImhlcm8tZGFya1wiXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgJChcIi5tb2RlLWJ0blwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKGAubW9kZS1idG4ubW9kZS0ke2lzRGFyayA/IFwibGlnaHRcIiA6IFwiZGFya1wifWApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgJChkb2N1bWVudCkucmVhZHkoYXBwLmluaXQpO1xyXG4gIFxyXG5cclxuXHJcbiAgJChcIi52ZXJ0aWNhbC1jZW50ZXItNFwiKS5zbGljayh7XHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIHZlcnRpY2FsOiBmYWxzZSxcclxuICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgIHByZXZBcnJvdzpcclxuICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjxzcGFuIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiPuKAuTwvc3Bhbj48L2J1dHRvbj4nLFxyXG4gICAgbmV4dEFycm93OlxyXG4gICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PHNwYW4gYXJpYS1sYWJlbD1cIk5leHRcIj7igLo8L3NwYW4+PC9idXR0b24+JyxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0pO1xyXG59KShqUXVlcnkpO1xyXG4iXSwibmFtZXMiOlsiJCIsImFwcCIsImluaXQiLCJvbiIsImhhbmRsZVN3aXRjaGVyIiwiaGFuZGxlTGljZW5zZVN3aXRjaGVyIiwiZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsInRvZ2dsZUNsYXNzIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwibGljZW5zZSIsImRhdGEiLCJjb25jYXQiLCJkb2N1bWVudCIsInJlYWR5IiwialF1ZXJ5IiwiYmFubmVyIiwicmVtb3ZlIiwiY291bnRkb3duIiwidGltZXIiLCJsZW5ndGgiLCJkYXRlVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidG9JU09TdHJpbmciLCJjb3VudERvd25EYXRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIngiLCJzZXRJbnRlcnZhbCIsIm5vdyIsImRpc3RhbmNlIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJodG1sIiwiY2xlYXJJbnRlcnZhbCIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwiaW5pdFRlc3RpbW9uaWFsU2xpZGVyIiwiaW5pdEZ1bkZhY3RDb3VudGVyIiwiaGFuZGxlQ29udGFjdEZvcm0iLCJoYW5kbGVUb1RvcCIsImhhbmRsZVByaWNpbmdJdGVtIiwiaW5pdEltYWdlQ29tcGFyZSIsImNoYW5nZURyYWN1bGFIZXJvSW1hZ2UiLCJuYW1lIiwidmFsIiwiZW1haWwiLCJwZW1haWwiLCJ3ZWJzaXRlIiwic2l0ZSIsIm1lZGlhIiwic29jaWFsc2l0ZSIsImFncmVlIiwicG9zdCIsInNvZnRsYWIiLCJhamF4X3VybCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJyZXNldCIsInNsaWNrIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImFycm93cyIsImF1dG9wbGF5U3BlZWQiLCJzcGVlZCIsImNvbnRlbnRQYWRkaW5nIiwibmV4dEFycm93IiwicHJldkFycm93IiwiYWRhcHRpdmVIZWlnaHQiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImRvdHMiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwidmVydGljYWwiLCJjb3VudGVyVXAiLCJkZWxheSIsInRpbWUiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidHdlbnR5dHdlbnR5IiwiZGVmYXVsdF9vZmZzZXRfcGN0IiwiYmVmb3JlX2xhYmVsIiwiYWZ0ZXJfbGFiZWwiLCJub19vdmVybGF5IiwiaW1hZ2UiLCJpbWFnZVNyYyIsImF0dHIiLCJpc0RhcmsiLCJpbmNsdWRlcyIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9