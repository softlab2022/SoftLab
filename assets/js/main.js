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
            //console.log(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxDQUFELENBQXVCdUYsSUFBdkIsQ0FBNEIsVUFBNUIsRUFBd0MsS0FBeEM7TUFDRCxDQUZELE1BRU87UUFDTHZGLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCdUYsSUFBdkIsQ0FBNEIsVUFBNUIsRUFBd0MsSUFBeEM7TUFDRDtJQUNGO0VBcFdTLENBQVo7RUEwV0F2RixDQUFDLENBQUNlLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCZixHQUFHLENBQUNDLElBQXRCO0FBQ0QsQ0E1V0QsRUE0V0dlLE1BNVdILEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL2NvbXBvbmVudHMvcHJpY2luZy5qcyIsIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lci5qcyIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiOyhmdW5jdGlvbiAoJCkge1xuICAgIGNvbnN0IGFwcCA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9IYW5kbGUgcHJpY2luZyBzd2l0Y2hlclxuICAgICAgICAgICAgJCgnLnByaWNpbmctc3dpdGNoZXInKS5vbignY2xpY2snLCBhcHAuaGFuZGxlU3dpdGNoZXIpO1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgbGljZW5zZSBzd2l0Y2hlclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5vbignY2xpY2snLCBhcHAuaGFuZGxlTGljZW5zZVN3aXRjaGVyKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYW5kbGVTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICQoJy5wcmljZS10ZXh0JykucmVtb3ZlQ2xhc3MoJ2FubnVhbCBsaWZldGltZScpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpID8gJ2FubnVhbCcgOiAnbGlmZXRpbWUnKTtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhbmRsZUxpY2Vuc2VTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZScpLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xuXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24taXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBjb25zdCBsaWNlbnNlID0gJCh0aGlzKS5kYXRhKCdsaWNlbnNlJyk7XG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdsaWNlbnNlLTEgbGljZW5zZS01IGxpY2Vuc2UtMTAwJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoYGxpY2Vuc2UtJHtsaWNlbnNlfWApO1xuXG4gICAgICAgIH0sXG5cblxuICAgIH1cblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcblxufSkoalF1ZXJ5KTsiLCI7KGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGJhbm5lciA9ICQoJyNoZWFkZXItc3RpY2t5LWJhbm5lcicpO1xuXG4gICAgICAgIC8vQ2xvc2UgYmFubmVyXG4gICAgICAgICQoJy5iYW5uZXItY2xvc2UnLCBiYW5uZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGJhbm5lci5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9CYW5uZXIgY291bnRkb3duXG4gICAgICAgIGNvbnN0IGNvdW50ZG93biA9ICQoJy5iYW5uZXItY291bnRkb3duJywgYmFubmVyKTtcbiAgICAgICAgY29uc3QgdGltZXIgPSAkKCcudGltZXInLCBiYW5uZXIpO1xuXG4gICAgICAgIGlmIChjb3VudGRvd24ubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMjQgKiA2MCAqIDYwICogMTAwMCArIDIgKiA2MCAqIDYwICogMTAwMCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgIGxldCBjb3VudERvd25EYXRlID0gbmV3IERhdGUoZGF0ZVRpbWUpLmdldFRpbWUoKTtcblxuICAgICAgICAgICAgLy9jaGVjayBpZiB0aGVyZSBpcyBhIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lJykpIHtcbiAgICAgICAgICAgICAgICBjb3VudERvd25EYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWUnKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBjb25zdCB4ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICAgICAgICAgICAgdGltZXIuaHRtbChgPHNwYW4gY2xhc3M9XCJkYXlzXCI+JHtkYXlzfWQ8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaG91cnNcIj4ke2hvdXJzfWg8L3NwYW4+IDxzcGFuIGNsYXNzPVwibWludXRlc1wiPiR7bWludXRlc31tPC9zcGFuPiA8c3BhbiBjbGFzcz1cInNlY29uZHNcIj4ke3NlY29uZHN9czwvc3Bhbj5gKTtcblxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh4KTtcbiAgICAgICAgICAgICAgICAgICAgdGltZXIudGV4dChcIkVYUElSRURcIik7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0aW1lJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9zYXZlIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aW1lJywgY291bnREb3duRGF0ZSk7XG5cbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG5cbiAgICB9KTtcbn0pKGpRdWVyeSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vY29tcG9uZW50cy9wcmljaW5nXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lclwiO1xuXG4oZnVuY3Rpb24gKCQpIHtcbiAgY29uc3QgYXBwID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vSW5pdCBUZXN0aW1vbmlhbCBTbGlkZXJcbiAgICAgIGFwcC5pbml0VGVzdGltb25pYWxTbGlkZXIoKTtcblxuICAgICAgLy9Jbml0IEZ1biBGYWN0IENvdW50ZXJcbiAgICAgIGFwcC5pbml0RnVuRmFjdENvdW50ZXIoKTtcblxuICAgICAgLy9IYW5kbGUgY29udGFjdCBmb3JtIHRhYnNcbiAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVDb250YWN0Rm9ybSk7XG5cblxuICAgICAgLy9IYW5kbGUgdG8gdG9wIGJ1dHRvblxuICAgICAgJChcIi50by10b3BcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlVG9Ub3ApO1xuXG4gICAgICAvL2hhbmRsZSBwcmljaW5nIGl0ZW0gY2xpY2tcbiAgICAgICQoXCIuaXRlbS1wcmljZVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVQcmljaW5nSXRlbSk7XG5cbiAgICAgIC8vSGFuZGxlIEltYWdlIENvbXBhcmUgb24gUmVhZGVyIE1vZGUgcGFnZVxuICAgICAgYXBwLmluaXRJbWFnZUNvbXBhcmUoKTtcblxuICAgICAgLy9DaGFuZ2UgRHJhY3VsYSBIZXJvIEltYWdlXG4gICAgICBhcHAuY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSgpO1xuXG4gICAgICAvLyBIYW5kbGUgQWZmaWxpYXRlIEZvcm1cbiAgICAgICQoXCIjYWZmaWxpYXRlLXJlZ2lzdGVyLWZvcm1cIikub24oXCJzdWJtaXRcIiwgYXBwLmhhbmRsZUFmZmlsaWF0ZUZvcm0pO1xuXG4gICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLm9uKFwiY2hhbmdlXCIsIGFwcC5oYW5kbGVQcm9kdWN0Q2hhbmdlKTtcbiAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5vbihcImNoYW5nZVwiLCBhcHAuaGFuZGxlTWV0aG9kQ2hhbmdlKTtcblxuICAgICAgLy8gSGFuZGxlIFNlYXJjaFxuICAgICAgJChcIi5zZWFyY2gtYnRuXCIpLm9uKFwiY2xpY2tcIiwgYXBwLm9wZW5TZWFyY2gpO1xuICAgICAgJChcIi5jZW5jZWwtYnRuXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmNhbmNlbFNlYXJjaCk7XG5cbiAgICB9LFxuXG4gICAgb3BlblNlYXJjaDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICQoXCIuc2VhcmNoLWZvcm1cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAgICQoXCIuc2VhcmNoLWZpZWxkXCIpLmZvY3VzKCk7XG4gICAgfSxcblxuICAgIGNhbmNlbFNlYXJjaDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICQoXCIuc2VhcmNoLWZvcm1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSxcblxuICAgIGluaXRUZXN0aW1vbmlhbFNsaWRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gSG9tZSB0ZXN0aW1vbmlhbCBzbGlkZXJcbiAgICAgICQoXCIuc2luZ2xlLXRlc3RpbW9uaWFsLWl0ZW1zXCIpLnNsaWNrKHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgICAgc3BlZWQ6IDIwMDAsXG4gICAgICAgIGNvbnRlbnRQYWRkaW5nOiBcIjMwcHhcIixcbiAgICAgICAgbmV4dEFycm93OiBcIi5yaWdodFwiLFxuICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICB9KTtcblxuICAgICAgLy9nb29nbGUgZHJpdmVcbiAgICAgICQoXCIudGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xuICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgICAgbmV4dEFycm93OiBcIi5yaWdodFwiLFxuICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuICAgICAgLy9hYm91dCBzbGlkZXJcbiAgICAgICQoXCIuc2xpZGVyLW1haW5cIikuc2xpY2soe1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBuZXh0QXJyb3c6IFwiLnVwXCIsXG4gICAgICAgIHByZXZBcnJvdzogXCIuZG93blwiLFxuICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICB9KTtcblxuICAgICAgJChcIi5jb21wYXQtc2xpZGVyXCIpLnNsaWNrKHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMzk5Ljk4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSk7XG4gICAgICAvL2RyYWN1bGEgc2xpZGVyXG4gICAgICAkKFwiLmRyYWN1bGEtc2xpZGVyXCIpLnNsaWNrKHtcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5pdEZ1bkZhY3RDb3VudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKFwiLmNvdW50ZXJcIikuY291bnRlclVwKHtcbiAgICAgICAgZGVsYXk6IDE2LFxuICAgICAgICB0aW1lOiAxNTAwLFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGhhbmRsZUNvbnRhY3RGb3JtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKFwiLmNvbnRhY3QtZm9ybSAudGFiLWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXG4gICAgICAkKFwiLmNvbnRhY3QtZm9ybS13cmFwXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgJChgLmNvbnRhY3QtZm9ybS13cmFwLmZvcm0tJHskKHRoaXMpLmRhdGEoXCJ0YXJnZXRcIil9YCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSxcblxuXG4gICAgaGFuZGxlVG9Ub3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgXCJmYXN0XCIpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVQcmljaW5nSXRlbTogZnVuY3Rpb24gKCkge1xuICAgICAgJChcIi5pdGVtLXByaWNlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9LFxuXG4gICAgaW5pdEltYWdlQ29tcGFyZTogZnVuY3Rpb24gKCkge1xuICAgICAgJChcIi5yZWFkZXItbW9kZS1pbWFnZS1jb21wYXJlXCIpLnR3ZW50eXR3ZW50eSh7XG4gICAgICAgIC8vICBIb3cgbXVjaCBvZiB0aGUgYmVmb3JlIGltYWdlIGlzIHZpc2libGUgd2hlbiB0aGUgcGFnZSBsb2Fkc1xuICAgICAgICBkZWZhdWx0X29mZnNldF9wY3Q6IDAuNSxcblxuICAgICAgICAvLyBsYWJlbCB0ZXh0XG4gICAgICAgIGJlZm9yZV9sYWJlbDogXCJHZW5lcmFsIFZpZXdcIixcbiAgICAgICAgYWZ0ZXJfbGFiZWw6IFwiUmVhZGVyIE1vZGUgVmlld1wiLFxuXG4gICAgICAgIC8vb3ZlcmxheVxuICAgICAgICBub19vdmVybGF5OiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNoYW5nZURyYWN1bGFIZXJvSW1hZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGltYWdlID0gJChcIi5kcmFjdWxhLWhlcm8taW1hZ2VcIik7XG5cbiAgICAgIGlmICghaW1hZ2UubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2VTcmMgPSBpbWFnZS5hdHRyKFwic3JjXCIpO1xuICAgICAgICBjb25zdCBpc0RhcmsgPSBpbWFnZVNyYy5pbmNsdWRlcyhcImhlcm8tZGFya1wiKTtcbiAgICAgICAgaW1hZ2UuYXR0cihcbiAgICAgICAgICBcInNyY1wiLFxuICAgICAgICAgIGltYWdlU3JjLnJlcGxhY2UoXG4gICAgICAgICAgICBpc0RhcmsgPyBcImhlcm8tZGFya1wiIDogXCJoZXJvLWxpZ2h0XCIsXG4gICAgICAgICAgICBpc0RhcmsgPyBcImhlcm8tbGlnaHRcIiA6IFwiaGVyby1kYXJrXCJcbiAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgJChcIi5tb2RlLWJ0blwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgJChgLm1vZGUtYnRuLm1vZGUtJHtpc0RhcmsgPyBcImxpZ2h0XCIgOiBcImRhcmtcIn1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0sXG5cbiAgICBoYW5kbGVBZmZpbGlhdGVGb3JtOiBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB2YXIgZmFpbGVkID0gZmFsc2U7XG5cbiAgICAgIC8vIFByb2R1Y3Qgc2VsZWN0aW9uXG4gICAgICBsZXQgcHJvZHVjdHMgPSBbXTtcbiAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ106Y2hlY2tlZFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcHJvZHVjdHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXByb2R1Y3RzLmxlbmd0aCkge1xuICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCB0cnVlKTtcbiAgICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgLy8gTWV0aG9kcyBTZWxlY3Rpb25cbiAgICAgIGxldCBtZXRob2RzID0gW107XG5cbiAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXRob2RzLnB1c2goJCh0aGlzKS52YWwoKSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFtZXRob2RzLmxlbmd0aCkge1xuICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xuICAgICAgICBmYWlsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIC8vYm9vdHN0cmFwIHZhbGlkYXRpb25cbiAgICAgIGNvbnN0IGZvcm0gPSAkKHRoaXMpLmdldCgwKTtcblxuICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xuICAgICAgICBmYWlsZWQgPSB0cnVlO1xuXG4gICAgICAgICQoZm9ybSkuYWRkQ2xhc3MoXCJ3YXMtdmFsaWRhdGVkXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZhaWxlZCkge1xuICAgICAgICBjb25zdCBuYW1lID0gJChcIiNuYW1lXCIpLnZhbCgpO1xuICAgICAgICBjb25zdCBlbWFpbCA9ICQoXCIjZW1haWxcIikudmFsKCk7XG4gICAgICAgIGNvbnN0IHBlbWFpbCA9ICQoXCIjcGVtYWlsXCIpLnZhbCgpO1xuICAgICAgICBjb25zdCBkb21haW4gPSAkKFwiI2RvbWFpblwiKS52YWwoKTtcbiAgICAgICAgY29uc3Qgc3RhdGlzdGljcyA9ICQoXCIjc3RhdGlzdGljc1wiKS52YWwoKTtcbiAgICAgICAgY29uc3QgcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbiA9ICQoXG4gICAgICAgICAgXCIjcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvblwiXG4gICAgICAgICkudmFsKCk7XG5cbiAgICAgICAgd3AuYWpheC5zZW5kKFwiYWZmaWxpYXRlX3JlZ2lzdGVyXCIsIHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgcGVtYWlsOiBwZW1haWwsXG4gICAgICAgICAgICBkb21haW46IGRvbWFpbixcbiAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cyxcbiAgICAgICAgICAgIG1ldGhvZHM6IG1ldGhvZHMsXG4gICAgICAgICAgICBzdGF0aXN0aWNzOiBzdGF0aXN0aWNzLFxuICAgICAgICAgICAgcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbjogcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcbiAgICAgICAgICAgICQoXCIjc3VibWl0XCIpLmZpbmQoXCIuZmEtc3Bpbm5lclwiKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgJChcIiNhZmZpbGlhdGUtcmVnaXN0ZXItZm9ybVwiKS5oaWRlKCk7XG5cbiAgICAgICAgICAgICQoXCIubWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgJChcIiNzdWJtaXRcIikuZmluZChcIi5mYS1zcGlubmVyXCIpLmFkZENsYXNzKFwiZC1ub25lXCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVQcm9kdWN0Q2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJChcIltuYW1lPSdwcm9kdWN0W10nXTpjaGVja2VkXCIpLmxlbmd0aCkge1xuICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlTWV0aG9kQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJChcIltuYW1lPSdtZXRob2RbXSddOmNoZWNrZWRcIikubGVuZ3RoKSB7XG4gICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG5cblxuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcbn0pKGpRdWVyeSk7XG5cbiJdLCJuYW1lcyI6WyIkIiwiYXBwIiwiaW5pdCIsIm9uIiwiaGFuZGxlU3dpdGNoZXIiLCJoYW5kbGVMaWNlbnNlU3dpdGNoZXIiLCJlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwidG9nZ2xlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJsaWNlbnNlIiwiZGF0YSIsImRvY3VtZW50IiwicmVhZHkiLCJqUXVlcnkiLCJiYW5uZXIiLCJyZW1vdmUiLCJjb3VudGRvd24iLCJ0aW1lciIsImxlbmd0aCIsImRhdGVUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0b0lTT1N0cmluZyIsImNvdW50RG93bkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwieCIsInNldEludGVydmFsIiwibm93IiwiZGlzdGFuY2UiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImh0bWwiLCJjbGVhckludGVydmFsIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJpbml0VGVzdGltb25pYWxTbGlkZXIiLCJpbml0RnVuRmFjdENvdW50ZXIiLCJoYW5kbGVDb250YWN0Rm9ybSIsImhhbmRsZVRvVG9wIiwiaGFuZGxlUHJpY2luZ0l0ZW0iLCJpbml0SW1hZ2VDb21wYXJlIiwiY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSIsImhhbmRsZUFmZmlsaWF0ZUZvcm0iLCJoYW5kbGVQcm9kdWN0Q2hhbmdlIiwiaGFuZGxlTWV0aG9kQ2hhbmdlIiwib3BlblNlYXJjaCIsImNhbmNlbFNlYXJjaCIsImZvY3VzIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXJyb3dzIiwiYXV0b3BsYXlTcGVlZCIsInNwZWVkIiwiY29udGVudFBhZGRpbmciLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJhZGFwdGl2ZUhlaWdodCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiZG90cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ2ZXJ0aWNhbCIsImNvdW50ZXJVcCIsImRlbGF5IiwidGltZSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ0d2VudHl0d2VudHkiLCJkZWZhdWx0X29mZnNldF9wY3QiLCJiZWZvcmVfbGFiZWwiLCJhZnRlcl9sYWJlbCIsIm5vX292ZXJsYXkiLCJpbWFnZSIsImltYWdlU3JjIiwiYXR0ciIsImlzRGFyayIsImluY2x1ZGVzIiwicmVwbGFjZSIsImZhaWxlZCIsInByb2R1Y3RzIiwiZWFjaCIsInB1c2giLCJ2YWwiLCJtZXRob2RzIiwiZm9ybSIsImdldCIsImNoZWNrVmFsaWRpdHkiLCJuYW1lIiwiZW1haWwiLCJwZW1haWwiLCJkb21haW4iLCJzdGF0aXN0aWNzIiwicHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbiIsIndwIiwiYWpheCIsInNlbmQiLCJiZWZvcmVTZW5kIiwiZmluZCIsInN1Y2Nlc3MiLCJoaWRlIiwic2hvdyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNvbXBsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==