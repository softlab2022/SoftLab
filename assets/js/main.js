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
    var banner = $('#header-sticky-banner, #halloween-offers, #black-friday-offers');

    // Close banner
    banner.on('click', '.banner-close', function () {
      $('#header-sticky-banner').remove();
    });

    // Banner countdown
    var countdown = banner.find('.banner-countdown');
    var timer = banner.find('.timer');
    if (countdown.length) {
      var SECOND = 1000;
      var MINUTE = 60 * SECOND;
      var HOUR = 60 * MINUTE;
      var DAY = 24 * HOUR;
      var formatTime = function formatTime(distance) {
        var days = Math.floor(distance / DAY);
        var hours = Math.floor(distance % DAY / HOUR);
        var minutes = Math.floor(distance % HOUR / MINUTE);
        var seconds = Math.floor(distance % MINUTE / SECOND);
        return "<span class=\"days\">".concat(days, "d</span> <span class=\"hours\">").concat(hours, "h</span> <span class=\"minutes\">").concat(minutes, "m</span> <span class=\"seconds\">").concat(seconds, "s</span>");
      };
      var updateTimer = function updateTimer() {
        var now = new Date().getTime();
        //let countDownDate = new Date().getTime() + 8.5 * DAY;
        var countDownDate = new Date('2023-12-05T23:59:00').getTime();

        // Check if there is a time in local storage
        if (localStorage.getItem('bf_offers_time')) {
          countDownDate = localStorage.getItem('bf_offers_time');
        }
        var distance = countDownDate - now;
        if (distance < 0) {
          // Reset the time
          localStorage.removeItem('bf_offers_time');
          return;
        }
        timer.html(formatTime(distance));

        // Save time in local storage
        localStorage.setItem('bf_offers_time', countDownDate);
      };
      var x = setInterval(updateTimer, 1000);
      updateTimer(); // Call immediately, don’t wait for the first interval to execute
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

      //Init scrolling header
      app.initFixdHeader();

      //Handle contact form tabs
      $(".contact-form .tab-item").on("click", app.handleContactForm);

      //Handle popup img 
      $(".single img").on("click", app.handlePopupimg);

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
    //scrolling header js
    initFixdHeader: function initFixdHeader() {
      var lastScrollTop = 0;
      var fixedheader = $('.site-header');
      $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > lastScrollTop || currentScroll < 5) {
          // Scroll down
          fixedheader.removeClass('fixed-header');
        } else {
          // Scroll up
          fixedheader.addClass('fixed-header');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      });
    },
    //Handle popup img js
    handlePopupimg: function handlePopupimg() {
      $('.single img').click(function () {
        var src = $(this).attr('src');
        $.magnificPopup.open({
          items: {
            src: src
          },
          type: 'image',
          closeOnContentClick: true,
          mainClass: 'mfp-img-mobile',
          image: {
            verticalFit: true
          }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTtZQUNkekksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDc0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDZCxRQUFRLENBQUMsUUFBUSxDQUFDO1VBQ3JEO1FBQ0YsQ0FBQyxDQUFDO01BQ0o7SUFDRixDQUFDO0lBRURtRCxtQkFBbUIsRUFBRSxTQUFBQSxvQkFBQSxFQUFZO01BQy9CLElBQUkzRCxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQ3dCLE1BQU0sRUFBRTtRQUMxQ3hCLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDNkYsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7TUFDakQsQ0FBQyxNQUFNO1FBQ0w3RixDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQzZGLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BQ2hEO0lBQ0YsQ0FBQztJQUVEakMsa0JBQWtCLEVBQUUsU0FBQUEsbUJBQUEsRUFBWTtNQUM5QixJQUFJNUQsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUN3QixNQUFNLEVBQUU7UUFDekN4QixDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQzZGLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO01BQ2hELENBQUMsTUFBTTtRQUNMN0YsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM2RixJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztNQUMvQztJQUNGO0VBSUYsQ0FBQztFQUdEN0YsQ0FBQyxDQUFDZ0IsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQ2hCLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDO0FBQzdCLENBQUMsRUFBRWdCLE1BQU0sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3N0aWNreS1iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24gKCQpIHtcclxuICAgIGNvbnN0IGFwcCA9IHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vSGFuZGxlIHByaWNpbmcgc3dpdGNoZXJcclxuICAgICAgICAgICAgJCgnLnByaWNpbmctc3dpdGNoZXInKS5vbignY2xpY2snLCBhcHAuaGFuZGxlU3dpdGNoZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlIGxpY2Vuc2Ugc3dpdGNoZXJcclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5vbignY2xpY2snLCBhcHAuaGFuZGxlTGljZW5zZVN3aXRjaGVyKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnYW5udWFsIGxpZmV0aW1lJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICdhbm51YWwnIDogJ2xpZmV0aW1lJyk7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUxpY2Vuc2VTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZScpLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGljZW5zZSA9ICQodGhpcykuZGF0YSgnbGljZW5zZScpO1xyXG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdsaWNlbnNlLTEgbGljZW5zZS01IGxpY2Vuc2UtMTAwJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhgbGljZW5zZS0ke2xpY2Vuc2V9YCk7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShhcHAuaW5pdCk7XHJcblxyXG59KShqUXVlcnkpOyIsIjsoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBiYW5uZXIgPSAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXIsICNoYWxsb3dlZW4tb2ZmZXJzLCAjYmxhY2stZnJpZGF5LW9mZmVycycpO1xyXG5cclxuICAgICAgICAvLyBDbG9zZSBiYW5uZXJcclxuICAgICAgICBiYW5uZXIub24oJ2NsaWNrJywgJy5iYW5uZXItY2xvc2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJyNoZWFkZXItc3RpY2t5LWJhbm5lcicpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBCYW5uZXIgY291bnRkb3duXHJcbiAgICAgICAgY29uc3QgY291bnRkb3duID0gYmFubmVyLmZpbmQoJy5iYW5uZXItY291bnRkb3duJyk7XHJcbiAgICAgICAgY29uc3QgdGltZXIgPSBiYW5uZXIuZmluZCgnLnRpbWVyJyk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudGRvd24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFNFQ09ORCA9IDEwMDA7XHJcbiAgICAgICAgICAgIGNvbnN0IE1JTlVURSA9IDYwICogU0VDT05EO1xyXG4gICAgICAgICAgICBjb25zdCBIT1VSID0gNjAgKiBNSU5VVEU7XHJcbiAgICAgICAgICAgIGNvbnN0IERBWSA9IDI0ICogSE9VUjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdFRpbWUgPSAoZGlzdGFuY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gREFZKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBEQVkpIC8gSE9VUik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBIT1VSKSAvIE1JTlVURSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBNSU5VVEUpIC8gU0VDT05EKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiZGF5c1wiPiR7ZGF5c31kPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhvdXJzXCI+JHtob3Vyc31oPC9zcGFuPiA8c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIj4ke21pbnV0ZXN9bTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzZWNvbmRzXCI+JHtzZWNvbmRzfXM8L3NwYW4+YDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVRpbWVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAvL2xldCBjb3VudERvd25EYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyA4LjUgKiBEQVk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKCcyMDIzLTEyLTA1VDIzOjU5OjAwJykuZ2V0VGltZSgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZl9vZmZlcnNfdGltZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZl9vZmZlcnNfdGltZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIHRpbWVcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYmZfb2ZmZXJzX3RpbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZXIuaHRtbChmb3JtYXRUaW1lKGRpc3RhbmNlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiZl9vZmZlcnNfdGltZScsIGNvdW50RG93bkRhdGUpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcclxuICAgICAgICAgICAgdXBkYXRlVGltZXIoKTsgLy8gQ2FsbCBpbW1lZGlhdGVseSwgZG9u4oCZdCB3YWl0IGZvciB0aGUgZmlyc3QgaW50ZXJ2YWwgdG8gZXhlY3V0ZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pKGpRdWVyeSk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvcHJpY2luZ1wiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lclwiO1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgY29uc3QgYXBwID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAvL0luaXQgVGVzdGltb25pYWwgU2xpZGVyXHJcbiAgICAgIGFwcC5pbml0VGVzdGltb25pYWxTbGlkZXIoKTtcclxuXHJcbiAgICAgIC8vSW5pdCBGdW4gRmFjdCBDb3VudGVyXHJcbiAgICAgIGFwcC5pbml0RnVuRmFjdENvdW50ZXIoKTtcclxuXHJcbiAgICAgIC8vSW5pdCBzY3JvbGxpbmcgaGVhZGVyXHJcbiAgICAgIGFwcC5pbml0Rml4ZEhlYWRlcigpO1xyXG5cclxuICAgICAgLy9IYW5kbGUgY29udGFjdCBmb3JtIHRhYnNcclxuICAgICAgJChcIi5jb250YWN0LWZvcm0gLnRhYi1pdGVtXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZUNvbnRhY3RGb3JtKTtcclxuXHJcbiAgICAgIC8vSGFuZGxlIHBvcHVwIGltZyBcclxuICAgICAgJChcIi5zaW5nbGUgaW1nXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZVBvcHVwaW1nKTtcclxuXHJcblxyXG4gICAgICAvL0hhbmRsZSB0byB0b3AgYnV0dG9uXHJcbiAgICAgICQoXCIudG8tdG9wXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZVRvVG9wKTtcclxuXHJcbiAgICAgIC8vaGFuZGxlIHByaWNpbmcgaXRlbSBjbGlja1xyXG4gICAgICAkKFwiLml0ZW0tcHJpY2VcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlUHJpY2luZ0l0ZW0pO1xyXG5cclxuICAgICAgLy9IYW5kbGUgSW1hZ2UgQ29tcGFyZSBvbiBSZWFkZXIgTW9kZSBwYWdlXHJcbiAgICAgIGFwcC5pbml0SW1hZ2VDb21wYXJlKCk7XHJcblxyXG4gICAgICAvL0NoYW5nZSBEcmFjdWxhIEhlcm8gSW1hZ2VcclxuICAgICAgYXBwLmNoYW5nZURyYWN1bGFIZXJvSW1hZ2UoKTtcclxuXHJcbiAgICAgIC8vIEhhbmRsZSBBZmZpbGlhdGUgRm9ybVxyXG4gICAgICAkKFwiI2FmZmlsaWF0ZS1yZWdpc3Rlci1mb3JtXCIpLm9uKFwic3VibWl0XCIsIGFwcC5oYW5kbGVBZmZpbGlhdGVGb3JtKTtcclxuXHJcbiAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikub24oXCJjaGFuZ2VcIiwgYXBwLmhhbmRsZVByb2R1Y3RDaGFuZ2UpO1xyXG4gICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikub24oXCJjaGFuZ2VcIiwgYXBwLmhhbmRsZU1ldGhvZENoYW5nZSk7XHJcblxyXG4gICAgICAvLyBIYW5kbGUgU2VhcmNoXHJcbiAgICAgICQoXCIuc2VhcmNoLWJ0blwiKS5vbihcImNsaWNrXCIsIGFwcC5vcGVuU2VhcmNoKTtcclxuICAgICAgJChcIi5jZW5jZWwtYnRuXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmNhbmNlbFNlYXJjaCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvcGVuU2VhcmNoOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAkKFwiLnNlYXJjaC1mb3JtXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgJChcIi5zZWFyY2gtZmllbGRcIikuZm9jdXMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2FuY2VsU2VhcmNoOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAkKFwiLnNlYXJjaC1mb3JtXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0VGVzdGltb25pYWxTbGlkZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gSG9tZSB0ZXN0aW1vbmlhbCBzbGlkZXJcclxuICAgICAgJChcIi5zaW5nbGUtdGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICBzcGVlZDogMjAwMCxcclxuICAgICAgICBjb250ZW50UGFkZGluZzogXCIzMHB4XCIsXHJcbiAgICAgICAgbmV4dEFycm93OiBcIi5yaWdodFwiLFxyXG4gICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vZ29vZ2xlIGRyaXZlXHJcbiAgICAgICQoXCIudGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xyXG4gICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgIG5leHRBcnJvdzogXCIucmlnaHRcIixcclxuICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG4gICAgICAvL2Fib3V0IHNsaWRlclxyXG4gICAgICAkKFwiLnNsaWRlci1tYWluXCIpLnNsaWNrKHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgIG5leHRBcnJvdzogXCIudXBcIixcclxuICAgICAgICBwcmV2QXJyb3c6IFwiLmRvd25cIixcclxuICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIGNlbnRlclBhZGRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJChcIi5jb21wYXQtc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTM5OS45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG4gICAgICAvL2RyYWN1bGEgc2xpZGVyXHJcbiAgICAgICQoXCIuZHJhY3VsYS1zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0RnVuRmFjdENvdW50ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIi5jb3VudGVyXCIpLmNvdW50ZXJVcCh7XHJcbiAgICAgICAgZGVsYXk6IDE2LFxyXG4gICAgICAgIHRpbWU6IDE1MDAsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL3Njcm9sbGluZyBoZWFkZXIganNcclxuICAgIGluaXRGaXhkSGVhZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuICAgICAgY29uc3QgZml4ZWRoZWFkZXIgPSAkKCcuc2l0ZS1oZWFkZXInKTtcclxuXHJcbiAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50U2Nyb2xsID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGwgPiBsYXN0U2Nyb2xsVG9wIHx8IGN1cnJlbnRTY3JvbGwgPCA1KSB7XHJcbiAgICAgICAgICAvLyBTY3JvbGwgZG93blxyXG4gICAgICAgICAgZml4ZWRoZWFkZXIucmVtb3ZlQ2xhc3MoJ2ZpeGVkLWhlYWRlcicpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gU2Nyb2xsIHVwXHJcbiAgICAgICAgICBmaXhlZGhlYWRlci5hZGRDbGFzcygnZml4ZWQtaGVhZGVyJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYXN0U2Nyb2xsVG9wID0gY3VycmVudFNjcm9sbCA8PSAwID8gMCA6IGN1cnJlbnRTY3JvbGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcblxyXG5cclxuICAgIC8vSGFuZGxlIHBvcHVwIGltZyBqc1xyXG4gICAgaGFuZGxlUG9wdXBpbWc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCgnLnNpbmdsZSBpbWcnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNyYyA9ICQodGhpcykuYXR0cignc3JjJyk7XHJcblxyXG4gICAgICAgICQubWFnbmlmaWNQb3B1cC5vcGVuKHtcclxuICAgICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgIHNyYzogc3JjXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcclxuICAgICAgICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IHRydWUsXHJcbiAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtaW1nLW1vYmlsZScsXHJcbiAgICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbEZpdDogdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG5cclxuXHJcbiAgICBoYW5kbGVDb250YWN0Rm9ybTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLmNvbnRhY3QtZm9ybSAudGFiLWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAkKFwiLmNvbnRhY3QtZm9ybS13cmFwXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKGAuY29udGFjdC1mb3JtLXdyYXAuZm9ybS0keyQodGhpcykuZGF0YShcInRhcmdldFwiKX1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIGhhbmRsZVRvVG9wOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgXCJmYXN0XCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVQcmljaW5nSXRlbTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLml0ZW0tcHJpY2VcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRJbWFnZUNvbXBhcmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIi5yZWFkZXItbW9kZS1pbWFnZS1jb21wYXJlXCIpLnR3ZW50eXR3ZW50eSh7XHJcbiAgICAgICAgLy8gIEhvdyBtdWNoIG9mIHRoZSBiZWZvcmUgaW1hZ2UgaXMgdmlzaWJsZSB3aGVuIHRoZSBwYWdlIGxvYWRzXHJcbiAgICAgICAgZGVmYXVsdF9vZmZzZXRfcGN0OiAwLjUsXHJcblxyXG4gICAgICAgIC8vIGxhYmVsIHRleHRcclxuICAgICAgICBiZWZvcmVfbGFiZWw6IFwiR2VuZXJhbCBWaWV3XCIsXHJcbiAgICAgICAgYWZ0ZXJfbGFiZWw6IFwiUmVhZGVyIE1vZGUgVmlld1wiLFxyXG5cclxuICAgICAgICAvL292ZXJsYXlcclxuICAgICAgICBub19vdmVybGF5OiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgY2hhbmdlRHJhY3VsYUhlcm9JbWFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBpbWFnZSA9ICQoXCIuZHJhY3VsYS1oZXJvLWltYWdlXCIpO1xyXG5cclxuICAgICAgaWYgKCFpbWFnZS5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBjb25zdCBpbWFnZVNyYyA9IGltYWdlLmF0dHIoXCJzcmNcIik7XHJcbiAgICAgICAgY29uc3QgaXNEYXJrID0gaW1hZ2VTcmMuaW5jbHVkZXMoXCJoZXJvLWRhcmtcIik7XHJcbiAgICAgICAgaW1hZ2UuYXR0cihcclxuICAgICAgICAgIFwic3JjXCIsXHJcbiAgICAgICAgICBpbWFnZVNyYy5yZXBsYWNlKFxyXG4gICAgICAgICAgICBpc0RhcmsgPyBcImhlcm8tZGFya1wiIDogXCJoZXJvLWxpZ2h0XCIsXHJcbiAgICAgICAgICAgIGlzRGFyayA/IFwiaGVyby1saWdodFwiIDogXCJoZXJvLWRhcmtcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgICQoXCIubW9kZS1idG5cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChgLm1vZGUtYnRuLm1vZGUtJHtpc0RhcmsgPyBcImxpZ2h0XCIgOiBcImRhcmtcIn1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZUFmZmlsaWF0ZUZvcm06IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIHZhciBmYWlsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIC8vIFByb2R1Y3Qgc2VsZWN0aW9uXHJcbiAgICAgIGxldCBwcm9kdWN0cyA9IFtdO1xyXG4gICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddOmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcHJvZHVjdHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXByb2R1Y3RzLmxlbmd0aCkge1xyXG4gICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICAgIGZhaWxlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBNZXRob2RzIFNlbGVjdGlvblxyXG4gICAgICBsZXQgbWV0aG9kcyA9IFtdO1xyXG5cclxuICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddOmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWV0aG9kcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghbWV0aG9kcy5sZW5ndGgpIHtcclxuICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICAgIGZhaWxlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vYm9vdHN0cmFwIHZhbGlkYXRpb25cclxuICAgICAgY29uc3QgZm9ybSA9ICQodGhpcykuZ2V0KDApO1xyXG5cclxuICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xyXG4gICAgICAgIGZhaWxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICQoZm9ybSkuYWRkQ2xhc3MoXCJ3YXMtdmFsaWRhdGVkXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWZhaWxlZCkge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSAkKFwiI25hbWVcIikudmFsKCk7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSAkKFwiI2VtYWlsXCIpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHBlbWFpbCA9ICQoXCIjcGVtYWlsXCIpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IGRvbWFpbiA9ICQoXCIjZG9tYWluXCIpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHN0YXRpc3RpY3MgPSAkKFwiI3N0YXRpc3RpY3NcIikudmFsKCk7XHJcbiAgICAgICAgY29uc3QgcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbiA9ICQoXHJcbiAgICAgICAgICBcIiNwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uXCJcclxuICAgICAgICApLnZhbCgpO1xyXG5cclxuICAgICAgICB3cC5hamF4LnNlbmQoXCJhZmZpbGlhdGVfcmVnaXN0ZXJcIiwge1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgIHBlbWFpbDogcGVtYWlsLFxyXG4gICAgICAgICAgICBkb21haW46IGRvbWFpbixcclxuICAgICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLFxyXG4gICAgICAgICAgICBtZXRob2RzOiBtZXRob2RzLFxyXG4gICAgICAgICAgICBzdGF0aXN0aWNzOiBzdGF0aXN0aWNzLFxyXG4gICAgICAgICAgICBwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uOiBwcm9tb3Rpb25fbWV0aG9kX2Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcclxuICAgICAgICAgICAgJChcIiNzdWJtaXRcIikuZmluZChcIi5mYS1zcGlubmVyXCIpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICQoXCIjYWZmaWxpYXRlLXJlZ2lzdGVyLWZvcm1cIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgJChcIi5tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiI3N1Ym1pdFwiKS5maW5kKFwiLmZhLXNwaW5uZXJcIikuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZVByb2R1Y3RDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCQoXCJbbmFtZT0ncHJvZHVjdFtdJ106Y2hlY2tlZFwiKS5sZW5ndGgpIHtcclxuICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlTWV0aG9kQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICgkKFwiW25hbWU9J21ldGhvZFtdJ106Y2hlY2tlZFwiKS5sZW5ndGgpIHtcclxuICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG4gIH07XHJcblxyXG5cclxuICAkKGRvY3VtZW50KS5yZWFkeShhcHAuaW5pdCk7XHJcbn0pKGpRdWVyeSk7XHJcblxyXG4iXSwibmFtZXMiOlsiJCIsImFwcCIsImluaXQiLCJvbiIsImhhbmRsZVN3aXRjaGVyIiwiaGFuZGxlTGljZW5zZVN3aXRjaGVyIiwiZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsInRvZ2dsZUNsYXNzIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwibGljZW5zZSIsImRhdGEiLCJjb25jYXQiLCJkb2N1bWVudCIsInJlYWR5IiwialF1ZXJ5IiwiYmFubmVyIiwicmVtb3ZlIiwiY291bnRkb3duIiwiZmluZCIsInRpbWVyIiwibGVuZ3RoIiwiU0VDT05EIiwiTUlOVVRFIiwiSE9VUiIsIkRBWSIsImZvcm1hdFRpbWUiLCJkaXN0YW5jZSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidXBkYXRlVGltZXIiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImNvdW50RG93bkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImh0bWwiLCJzZXRJdGVtIiwieCIsInNldEludGVydmFsIiwiaW5pdFRlc3RpbW9uaWFsU2xpZGVyIiwiaW5pdEZ1bkZhY3RDb3VudGVyIiwiaW5pdEZpeGRIZWFkZXIiLCJoYW5kbGVDb250YWN0Rm9ybSIsImhhbmRsZVBvcHVwaW1nIiwiaGFuZGxlVG9Ub3AiLCJoYW5kbGVQcmljaW5nSXRlbSIsImluaXRJbWFnZUNvbXBhcmUiLCJjaGFuZ2VEcmFjdWxhSGVyb0ltYWdlIiwiaGFuZGxlQWZmaWxpYXRlRm9ybSIsImhhbmRsZVByb2R1Y3RDaGFuZ2UiLCJoYW5kbGVNZXRob2RDaGFuZ2UiLCJvcGVuU2VhcmNoIiwiY2FuY2VsU2VhcmNoIiwiZm9jdXMiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhcnJvd3MiLCJhdXRvcGxheVNwZWVkIiwic3BlZWQiLCJjb250ZW50UGFkZGluZyIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsImFkYXB0aXZlSGVpZ2h0IiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJkb3RzIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInZlcnRpY2FsIiwiY291bnRlclVwIiwiZGVsYXkiLCJ0aW1lIiwibGFzdFNjcm9sbFRvcCIsImZpeGVkaGVhZGVyIiwid2luZG93Iiwic2Nyb2xsIiwiY3VycmVudFNjcm9sbCIsInNjcm9sbFRvcCIsImNsaWNrIiwic3JjIiwiYXR0ciIsIm1hZ25pZmljUG9wdXAiLCJvcGVuIiwiaXRlbXMiLCJ0eXBlIiwiY2xvc2VPbkNvbnRlbnRDbGljayIsIm1haW5DbGFzcyIsImltYWdlIiwidmVydGljYWxGaXQiLCJhbmltYXRlIiwidHdlbnR5dHdlbnR5IiwiZGVmYXVsdF9vZmZzZXRfcGN0IiwiYmVmb3JlX2xhYmVsIiwiYWZ0ZXJfbGFiZWwiLCJub19vdmVybGF5IiwiaW1hZ2VTcmMiLCJpc0RhcmsiLCJpbmNsdWRlcyIsInJlcGxhY2UiLCJmYWlsZWQiLCJwcm9kdWN0cyIsImVhY2giLCJwdXNoIiwidmFsIiwibWV0aG9kcyIsImZvcm0iLCJnZXQiLCJjaGVja1ZhbGlkaXR5IiwibmFtZSIsImVtYWlsIiwicGVtYWlsIiwiZG9tYWluIiwic3RhdGlzdGljcyIsInByb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb24iLCJ3cCIsImFqYXgiLCJzZW5kIiwiYmVmb3JlU2VuZCIsInN1Y2Nlc3MiLCJoaWRlIiwic2hvdyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNvbXBsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==