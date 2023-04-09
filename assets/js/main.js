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
      //Init Testimonial Slider
      app.initTestimonialSlider();

      //Init Fun Fact Counter
      app.initFunFactCounter();

      //Handle contact form tabs
      $(".contact-form .tab-item").on("click", app.handleContactForm);

      //Handle to top button
      $(".to-top").on("click", app.handleToTop);

      //handle pricing item click
      $(".item-price").on("click", app.handlePricingItem);

      //Handle Image Compare on Reader Mode page
      app.initImageCompare();

      //Change Dracula Hero Image
      app.changeDraculaHeroImage();

      // Handle Affiliate Form
      $("#affiliate-register-form").on("submit", app.handleAffiliateForm);
      $("[name='product[]']").on("change", app.handleProductChange);
      $("[name='method[]']").on("change", app.handleMethodChange);

      // Handle Search
      $('.search-btn').on('click', app.openSearch);
      $('.cencel-btn').on('click', app.cancelSearch);

      //   const searchField= document.querySelector(".search-field");
      //   const searchBox= document.querySelector(".search-box");
    },

    openSearch: function openSearch(e) {
      $('.search-form').addClass('active');
      //    if(searchField.value ==='') {
      //     searchBox.style.border='red';
      //    }
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
      var failed = false;

      // Product selection
      var products = [];
      $("[name='product[]']:checked").each(function () {
        products.push($(this).val());
      });
      if (!products.length) {
        $("[name='product[]']").attr("required", true);
        failed = true;
      } else {
        $("[name='product[]']").attr("required", false);
      }

      // Methods Selection
      var methods = [];
      $("[name='method[]']:checked").each(function () {
        methods.push($(this).val());
      });
      if (!methods.length) {
        $("[name='method[]']").attr("required", true);
        failed = true;
      } else {
        $("[name='method[]']").attr("required", false);
      }

      //bootstrap validation
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEIsQ0FBQyxDQUFDdUIsTUFBTSxFQUFFO1FBQ3hDdkIsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUN1RixJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztNQUNuRCxDQUFDLE1BQU07UUFDSHZGLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDdUYsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7TUFDbEQ7SUFDSixDQUFDO0lBRURqQyxrQkFBa0IsRUFBRSxTQUFBQSxtQkFBQSxFQUFZO01BQzVCLElBQUl0RCxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQ3VCLE1BQU0sRUFBRTtRQUN2Q3ZCLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDdUYsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7TUFDbEQsQ0FBQyxNQUFNO1FBQ0h2RixDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3VGLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BQ2pEO0lBQ0o7RUFFSixDQUFDO0VBRUR2RixDQUFDLENBQUNnQixRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDaEIsR0FBRyxDQUFDQyxJQUFJLENBQUM7QUFJL0IsQ0FBQyxFQUFFZ0IsTUFBTSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL2NvbXBvbmVudHMvcHJpY2luZy5qcyIsIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lci5qcyIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiOyhmdW5jdGlvbiAoJCkge1xyXG4gICAgY29uc3QgYXBwID0ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9IYW5kbGUgcHJpY2luZyBzd2l0Y2hlclxyXG4gICAgICAgICAgICAkKCcucHJpY2luZy1zd2l0Y2hlcicpLm9uKCdjbGljaycsIGFwcC5oYW5kbGVTd2l0Y2hlcik7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgbGljZW5zZSBzd2l0Y2hlclxyXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24taXRlbScpLm9uKCdjbGljaycsIGFwcC5oYW5kbGVMaWNlbnNlU3dpdGNoZXIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVN3aXRjaGVyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdhbm51YWwgbGlmZXRpbWUnKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpID8gJ2FubnVhbCcgOiAnbGlmZXRpbWUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlTGljZW5zZVN3aXRjaGVyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlJykudGV4dCgkKHRoaXMpLnRleHQoKSk7XHJcblxyXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24taXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaWNlbnNlID0gJCh0aGlzKS5kYXRhKCdsaWNlbnNlJyk7XHJcbiAgICAgICAgICAgICQoJy5wcmljZS10ZXh0JykucmVtb3ZlQ2xhc3MoJ2xpY2Vuc2UtMSBsaWNlbnNlLTUgbGljZW5zZS0xMDAnKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGBsaWNlbnNlLSR7bGljZW5zZX1gKTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxuXHJcbn0pKGpRdWVyeSk7IiwiOyhmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGJhbm5lciA9ICQoJyNoZWFkZXItc3RpY2t5LWJhbm5lcicpO1xyXG5cclxuICAgICAgICAvL0Nsb3NlIGJhbm5lclxyXG4gICAgICAgICQoJy5iYW5uZXItY2xvc2UnLCBiYW5uZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYmFubmVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL0Jhbm5lciBjb3VudGRvd25cclxuICAgICAgICBjb25zdCBjb3VudGRvd24gPSAkKCcuYmFubmVyLWNvdW50ZG93bicsIGJhbm5lcik7XHJcbiAgICAgICAgY29uc3QgdGltZXIgPSAkKCcudGltZXInLCBiYW5uZXIpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMjQgKiA2MCAqIDYwICogMTAwMCArIDIgKiA2MCAqIDYwICogMTAwMCkudG9JU09TdHJpbmcoKTtcclxuICAgICAgICAgICAgbGV0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShkYXRlVGltZSkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICAgICAgLy9jaGVjayBpZiB0aGVyZSBpcyBhIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWUnKSkge1xyXG4gICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCB4ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZXIuaHRtbChgPHNwYW4gY2xhc3M9XCJkYXlzXCI+JHtkYXlzfWQ8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaG91cnNcIj4ke2hvdXJzfWg8L3NwYW4+IDxzcGFuIGNsYXNzPVwibWludXRlc1wiPiR7bWludXRlc31tPC9zcGFuPiA8c3BhbiBjbGFzcz1cInNlY29uZHNcIj4ke3NlY29uZHN9czwvc3Bhbj5gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh4KTtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lci50ZXh0KFwiRVhQSVJFRFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGltZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vc2F2ZSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aW1lJywgY291bnREb3duRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbn0pKGpRdWVyeSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vY29tcG9uZW50cy9wcmljaW5nXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9zdGlja3ktYmFubmVyXCI7XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICAgIGNvbnN0IGFwcCA9IHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvL0luaXQgVGVzdGltb25pYWwgU2xpZGVyXHJcbiAgICAgICAgICAgIGFwcC5pbml0VGVzdGltb25pYWxTbGlkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vSW5pdCBGdW4gRmFjdCBDb3VudGVyXHJcbiAgICAgICAgICAgIGFwcC5pbml0RnVuRmFjdENvdW50ZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vSGFuZGxlIGNvbnRhY3QgZm9ybSB0YWJzXHJcbiAgICAgICAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVDb250YWN0Rm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvL0hhbmRsZSB0byB0b3AgYnV0dG9uXHJcbiAgICAgICAgICAgICQoXCIudG8tdG9wXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZVRvVG9wKTtcclxuXHJcbiAgICAgICAgICAgIC8vaGFuZGxlIHByaWNpbmcgaXRlbSBjbGlja1xyXG4gICAgICAgICAgICAkKFwiLml0ZW0tcHJpY2VcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlUHJpY2luZ0l0ZW0pO1xyXG5cclxuICAgICAgICAgICAgLy9IYW5kbGUgSW1hZ2UgQ29tcGFyZSBvbiBSZWFkZXIgTW9kZSBwYWdlXHJcbiAgICAgICAgICAgIGFwcC5pbml0SW1hZ2VDb21wYXJlKCk7XHJcblxyXG4gICAgICAgICAgICAvL0NoYW5nZSBEcmFjdWxhIEhlcm8gSW1hZ2VcclxuICAgICAgICAgICAgYXBwLmNoYW5nZURyYWN1bGFIZXJvSW1hZ2UoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBBZmZpbGlhdGUgRm9ybVxyXG4gICAgICAgICAgICAkKFwiI2FmZmlsaWF0ZS1yZWdpc3Rlci1mb3JtXCIpLm9uKFwic3VibWl0XCIsIGFwcC5oYW5kbGVBZmZpbGlhdGVGb3JtKTtcclxuXHJcbiAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikub24oXCJjaGFuZ2VcIiwgYXBwLmhhbmRsZVByb2R1Y3RDaGFuZ2UpO1xyXG4gICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikub24oXCJjaGFuZ2VcIiwgYXBwLmhhbmRsZU1ldGhvZENoYW5nZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgU2VhcmNoXHJcbiAgICAgICAgICAgICQoJy5zZWFyY2gtYnRuJykub24oJ2NsaWNrJywgYXBwLm9wZW5TZWFyY2gpO1xyXG4gICAgICAgICAgICAkKCcuY2VuY2VsLWJ0bicpLm9uKCdjbGljaycsIGFwcC5jYW5jZWxTZWFyY2gpO1xyXG5cclxuICAgICAgICAvLyAgIGNvbnN0IHNlYXJjaEZpZWxkPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1maWVsZFwiKTtcclxuICAgICAgICAvLyAgIGNvbnN0IHNlYXJjaEJveD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYm94XCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgb3BlblNlYXJjaDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCgnLnNlYXJjaC1mb3JtJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIC8vICAgIGlmKHNlYXJjaEZpZWxkLnZhbHVlID09PScnKSB7XHJcbiAgICAgICAgLy8gICAgIHNlYXJjaEJveC5zdHlsZS5ib3JkZXI9J3JlZCc7XHJcbiAgICAgICAgLy8gICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2FuY2VsU2VhcmNoOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKCcuc2VhcmNoLWZvcm0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICBcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0VGVzdGltb25pYWxTbGlkZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gSG9tZSB0ZXN0aW1vbmlhbCBzbGlkZXJcclxuICAgICAgICAgICAgJChcIi5zaW5nbGUtdGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRQYWRkaW5nOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCIucmlnaHRcIixcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9nb29nbGUgZHJpdmVcclxuICAgICAgICAgICAgJChcIi50ZXN0aW1vbmlhbC1pdGVtc1wiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCIucmlnaHRcIixcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2Fib3V0IHNsaWRlclxyXG4gICAgICAgICAgICAkKFwiLnNsaWRlci1tYWluXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiLnVwXCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiLmRvd25cIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKFwiLmNvbXBhdC1zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTM5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vZHJhY3VsYSBzbGlkZXJcclxuICAgICAgICAgICAgJChcIi5kcmFjdWxhLXNsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXRGdW5GYWN0Q291bnRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLmNvdW50ZXJcIikuY291bnRlclVwKHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAxNixcclxuICAgICAgICAgICAgICAgIHRpbWU6IDE1MDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUNvbnRhY3RGb3JtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIuY29udGFjdC1mb3JtLXdyYXBcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQoYC5jb250YWN0LWZvcm0td3JhcC5mb3JtLSR7JCh0aGlzKS5kYXRhKFwidGFyZ2V0XCIpfWApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVRvVG9wOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIFwiZmFzdFwiKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVQcmljaW5nSXRlbTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLml0ZW0tcHJpY2VcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5pdEltYWdlQ29tcGFyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLnJlYWRlci1tb2RlLWltYWdlLWNvbXBhcmVcIikudHdlbnR5dHdlbnR5KHtcclxuICAgICAgICAgICAgICAgIC8vICBIb3cgbXVjaCBvZiB0aGUgYmVmb3JlIGltYWdlIGlzIHZpc2libGUgd2hlbiB0aGUgcGFnZSBsb2Fkc1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdF9vZmZzZXRfcGN0OiAwLjUsXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbGFiZWwgdGV4dFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlX2xhYmVsOiBcIkdlbmVyYWwgVmlld1wiLFxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJfbGFiZWw6IFwiUmVhZGVyIE1vZGUgVmlld1wiLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vb3ZlcmxheVxyXG4gICAgICAgICAgICAgICAgbm9fb3ZlcmxheTogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2hhbmdlRHJhY3VsYUhlcm9JbWFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9ICQoXCIuZHJhY3VsYS1oZXJvLWltYWdlXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpbWFnZS5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlU3JjID0gaW1hZ2UuYXR0cihcInNyY1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzRGFyayA9IGltYWdlU3JjLmluY2x1ZGVzKFwiaGVyby1kYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuYXR0cihcclxuICAgICAgICAgICAgICAgICAgICBcInNyY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGFyayA/IFwiaGVyby1kYXJrXCIgOiBcImhlcm8tbGlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEYXJrID8gXCJoZXJvLWxpZ2h0XCIgOiBcImhlcm8tZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiLm1vZGUtYnRuXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgJChgLm1vZGUtYnRuLm1vZGUtJHtpc0RhcmsgPyBcImxpZ2h0XCIgOiBcImRhcmtcIn1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlQWZmaWxpYXRlRm9ybTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZhaWxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvZHVjdCBzZWxlY3Rpb25cclxuICAgICAgICAgICAgbGV0IHByb2R1Y3RzID0gW107XHJcbiAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ106Y2hlY2tlZFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwcm9kdWN0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTWV0aG9kcyBTZWxlY3Rpb25cclxuICAgICAgICAgICAgbGV0IG1ldGhvZHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbWV0aG9kcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vYm9vdHN0cmFwIHZhbGlkYXRpb25cclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICQodGhpcykuZ2V0KDApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGZvcm0pLmFkZENsYXNzKCd3YXMtdmFsaWRhdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoIWZhaWxlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9ICQoXCIjbmFtZVwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gJChcIiNlbWFpbFwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBlbWFpbCA9ICQoXCIjcGVtYWlsXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZG9tYWluID0gJChcIiNkb21haW5cIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0aXN0aWNzID0gJChcIiNzdGF0aXN0aWNzXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbiA9ICQoXCIjcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvblwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3cC5hamF4LnNlbmQoJ2FmZmlsaWF0ZV9yZWdpc3RlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVtYWlsOiBwZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpbjogZG9tYWluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IG1ldGhvZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpc3RpY3M6IHN0YXRpc3RpY3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb246IHByb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNzdWJtaXQnKS5maW5kKCcuZmEtc3Bpbm5lcicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNhZmZpbGlhdGUtcmVnaXN0ZXItZm9ybScpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5tZXNzYWdlJykuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3N1Ym1pdCcpLmZpbmQoJy5mYS1zcGlubmVyJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlUHJvZHVjdENoYW5nZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJChcIltuYW1lPSdwcm9kdWN0W10nXTpjaGVja2VkXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVNZXRob2RDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nbWV0aG9kW10nXTpjaGVja2VkXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9O1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxuICAgIFxyXG5cclxuXHJcbn0pKGpRdWVyeSk7XHJcbiJdLCJuYW1lcyI6WyIkIiwiYXBwIiwiaW5pdCIsIm9uIiwiaGFuZGxlU3dpdGNoZXIiLCJoYW5kbGVMaWNlbnNlU3dpdGNoZXIiLCJlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwidG9nZ2xlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJsaWNlbnNlIiwiZGF0YSIsImNvbmNhdCIsImRvY3VtZW50IiwicmVhZHkiLCJqUXVlcnkiLCJiYW5uZXIiLCJyZW1vdmUiLCJjb3VudGRvd24iLCJ0aW1lciIsImxlbmd0aCIsImRhdGVUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0b0lTT1N0cmluZyIsImNvdW50RG93bkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwieCIsInNldEludGVydmFsIiwibm93IiwiZGlzdGFuY2UiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImh0bWwiLCJjbGVhckludGVydmFsIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJpbml0VGVzdGltb25pYWxTbGlkZXIiLCJpbml0RnVuRmFjdENvdW50ZXIiLCJoYW5kbGVDb250YWN0Rm9ybSIsImhhbmRsZVRvVG9wIiwiaGFuZGxlUHJpY2luZ0l0ZW0iLCJpbml0SW1hZ2VDb21wYXJlIiwiY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSIsImhhbmRsZUFmZmlsaWF0ZUZvcm0iLCJoYW5kbGVQcm9kdWN0Q2hhbmdlIiwiaGFuZGxlTWV0aG9kQ2hhbmdlIiwib3BlblNlYXJjaCIsImNhbmNlbFNlYXJjaCIsInNsaWNrIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImFycm93cyIsImF1dG9wbGF5U3BlZWQiLCJzcGVlZCIsImNvbnRlbnRQYWRkaW5nIiwibmV4dEFycm93IiwicHJldkFycm93IiwiYWRhcHRpdmVIZWlnaHQiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImRvdHMiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwidmVydGljYWwiLCJjb3VudGVyVXAiLCJkZWxheSIsInRpbWUiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidHdlbnR5dHdlbnR5IiwiZGVmYXVsdF9vZmZzZXRfcGN0IiwiYmVmb3JlX2xhYmVsIiwiYWZ0ZXJfbGFiZWwiLCJub19vdmVybGF5IiwiaW1hZ2UiLCJpbWFnZVNyYyIsImF0dHIiLCJpc0RhcmsiLCJpbmNsdWRlcyIsInJlcGxhY2UiLCJmYWlsZWQiLCJwcm9kdWN0cyIsImVhY2giLCJwdXNoIiwidmFsIiwibWV0aG9kcyIsImZvcm0iLCJnZXQiLCJjaGVja1ZhbGlkaXR5IiwibmFtZSIsImVtYWlsIiwicGVtYWlsIiwiZG9tYWluIiwic3RhdGlzdGljcyIsInByb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb24iLCJ3cCIsImFqYXgiLCJzZW5kIiwiYmVmb3JlU2VuZCIsImZpbmQiLCJzdWNjZXNzIiwiaGlkZSIsInNob3ciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjb21wbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=