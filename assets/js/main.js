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
    var banner = $('#header-sticky-banner'); // Close banner

    banner.on('click', '.banner-close', function () {
      banner.remove();
    }); // Banner countdown

    var countdown = banner.find('.banner-countdown');
    var timer = banner.find('.timer');

    if (countdown.length) {
      var updateTimer = function updateTimer() {
        var now = new Date().getTime();
        var countDownDate = new Date().getTime() + 300 * 60 * 60 * 1000; // Check if there is a time in local storage

        if (localStorage.getItem('softlab_offers_time')) {
          countDownDate = localStorage.getItem('softlab_offers_time');
        }

        var distance = countDownDate - now;

        if (distance < 0) {
          // Reset the time
          localStorage.removeItem('softlab_offers_time');
          return;
        }

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(distance % (1000 * 60) / 1000);
        timer.html("<span class=\"days\">".concat(days, "d</span> <span class=\"hours\">").concat(hours, "h</span> <span class=\"minutes\">").concat(minutes, "m</span> <span class=\"seconds\">").concat(seconds, "s</span>")); // Save time in local storage

        localStorage.setItem('softlab_offers_time', countDownDate);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBQyxDQUFDLFVBQVVBLENBQVYsRUFBYTtFQUNYLElBQU1DLEdBQUcsR0FBRztJQUNSQyxJQUFJLEVBQUUsZ0JBQVk7TUFDZDtNQUNBRixDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkcsRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUNGLEdBQUcsQ0FBQ0csY0FBdkMsRUFGYyxDQUlkOztNQUNBSixDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQ0csRUFBdEMsQ0FBeUMsT0FBekMsRUFBa0RGLEdBQUcsQ0FBQ0kscUJBQXREO0lBQ0gsQ0FQTztJQVNSRCxjQUFjLEVBQUUsd0JBQVVFLENBQVYsRUFBYTtNQUN6Qk4sQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQk8sV0FBakIsQ0FBNkIsaUJBQTdCLEVBQ0tDLFFBREwsQ0FDY1IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUyxRQUFSLENBQWlCLFFBQWpCLElBQTZCLFFBQTdCLEdBQXdDLFVBRHREO01BRUFULENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsV0FBUixDQUFvQixRQUFwQjtJQUNILENBYk87SUFlUkwscUJBQXFCLEVBQUUsK0JBQVVDLENBQVYsRUFBYTtNQUNoQ0EsQ0FBQyxDQUFDSyxjQUFGO01BRUFYLENBQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDWSxJQUF4QyxDQUE2Q1osQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRWSxJQUFSLEVBQTdDO01BRUFaLENBQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDTyxXQUF0QyxDQUFrRCxRQUFsRDtNQUNBUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLFFBQVIsQ0FBaUIsUUFBakI7TUFFQSxJQUFNSyxPQUFPLEdBQUdiLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWMsSUFBUixDQUFhLFNBQWIsQ0FBaEI7TUFDQWQsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQk8sV0FBakIsQ0FBNkIsaUNBQTdCLEVBQ0tDLFFBREwsbUJBQ3lCSyxPQUR6QjtJQUdIO0VBM0JPLENBQVo7RUFnQ0FiLENBQUMsQ0FBQ2UsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0JmLEdBQUcsQ0FBQ0MsSUFBdEI7QUFFSCxDQW5DQSxFQW1DRWUsTUFuQ0Y7Ozs7Ozs7Ozs7QUNBRDs7QUFBQyxDQUFDLFVBQVVqQixDQUFWLEVBQWE7RUFDWDs7RUFFQUEsQ0FBQyxDQUFDZSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0lBQzFCLElBQU1FLE1BQU0sR0FBR2xCLENBQUMsQ0FBQyx1QkFBRCxDQUFoQixDQUQwQixDQUcxQjs7SUFDQWtCLE1BQU0sQ0FBQ2YsRUFBUCxDQUFVLE9BQVYsRUFBbUIsZUFBbkIsRUFBb0MsWUFBWTtNQUM1Q2UsTUFBTSxDQUFDQyxNQUFQO0lBQ0gsQ0FGRCxFQUowQixDQVExQjs7SUFDQSxJQUFNQyxTQUFTLEdBQUdGLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLG1CQUFaLENBQWxCO0lBQ0EsSUFBTUMsS0FBSyxHQUFHSixNQUFNLENBQUNHLElBQVAsQ0FBWSxRQUFaLENBQWQ7O0lBRUEsSUFBSUQsU0FBUyxDQUFDRyxNQUFkLEVBQXNCO01BQ2xCLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07UUFDdEIsSUFBTUMsR0FBRyxHQUFHLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFaO1FBQ0EsSUFBSUMsYUFBYSxHQUFHLElBQUlGLElBQUosR0FBV0MsT0FBWCxLQUF1QixNQUFNLEVBQU4sR0FBVyxFQUFYLEdBQWdCLElBQTNELENBRnNCLENBSXRCOztRQUNBLElBQUlFLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixxQkFBckIsQ0FBSixFQUFpRDtVQUM3Q0YsYUFBYSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIscUJBQXJCLENBQWhCO1FBQ0g7O1FBRUQsSUFBTUMsUUFBUSxHQUFHSCxhQUFhLEdBQUdILEdBQWpDOztRQUVBLElBQUlNLFFBQVEsR0FBRyxDQUFmLEVBQWtCO1VBQ2Q7VUFDQUYsWUFBWSxDQUFDRyxVQUFiLENBQXdCLHFCQUF4QjtVQUNBO1FBQ0g7O1FBRUQsSUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osUUFBUSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBbkIsQ0FBYjtRQUNBLElBQU1LLEtBQUssR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVlKLFFBQVEsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQVQsSUFBc0MsT0FBTyxFQUFQLEdBQVksRUFBbEQsQ0FBWCxDQUFkO1FBQ0EsSUFBTU0sT0FBTyxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBWUosUUFBUSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQVQsSUFBaUMsT0FBTyxFQUF4QyxDQUFYLENBQWhCO1FBQ0EsSUFBTU8sT0FBTyxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBWUosUUFBUSxJQUFJLE9BQU8sRUFBWCxDQUFULEdBQTJCLElBQXRDLENBQWhCO1FBRUFULEtBQUssQ0FBQ2lCLElBQU4sZ0NBQWlDTixJQUFqQyw0Q0FBcUVHLEtBQXJFLDhDQUE0R0MsT0FBNUcsOENBQXFKQyxPQUFySixlQXRCc0IsQ0F3QnRCOztRQUNBVCxZQUFZLENBQUNXLE9BQWIsQ0FBcUIscUJBQXJCLEVBQTRDWixhQUE1QztNQUNILENBMUJEOztNQTRCQSxJQUFNYSxDQUFDLEdBQUdDLFdBQVcsQ0FBQ2xCLFdBQUQsRUFBYyxJQUFkLENBQXJCO01BQ0FBLFdBQVcsR0E5Qk8sQ0E4Qkg7SUFDbEI7RUFDSixDQTVDRDtBQThDSCxDQWpEQSxFQWlERVAsTUFqREY7Ozs7OztVQ0FEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQSxDQUFDLFVBQVVqQixDQUFWLEVBQWE7RUFDWixJQUFNQyxHQUFHLEdBQUc7SUFDVkMsSUFBSSxFQUFFLGdCQUFZO01BQ2hCO01BQ0FELEdBQUcsQ0FBQzBDLHFCQUFKLEdBRmdCLENBSWhCOztNQUNBMUMsR0FBRyxDQUFDMkMsa0JBQUosR0FMZ0IsQ0FPaEI7O01BQ0E1QyxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkcsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBeUNGLEdBQUcsQ0FBQzRDLGlCQUE3QyxFQVJnQixDQVdoQjs7TUFDQTdDLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUcsRUFBYixDQUFnQixPQUFoQixFQUF5QkYsR0FBRyxDQUFDNkMsV0FBN0IsRUFaZ0IsQ0FjaEI7O01BQ0E5QyxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCRyxFQUFqQixDQUFvQixPQUFwQixFQUE2QkYsR0FBRyxDQUFDOEMsaUJBQWpDLEVBZmdCLENBaUJoQjs7TUFDQTlDLEdBQUcsQ0FBQytDLGdCQUFKLEdBbEJnQixDQW9CaEI7O01BQ0EvQyxHQUFHLENBQUNnRCxzQkFBSixHQXJCZ0IsQ0F1QmhCOztNQUNBakQsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJHLEVBQTlCLENBQWlDLFFBQWpDLEVBQTJDRixHQUFHLENBQUNpRCxtQkFBL0M7TUFFQWxELENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCRyxFQUF4QixDQUEyQixRQUEzQixFQUFxQ0YsR0FBRyxDQUFDa0QsbUJBQXpDO01BQ0FuRCxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkcsRUFBdkIsQ0FBMEIsUUFBMUIsRUFBb0NGLEdBQUcsQ0FBQ21ELGtCQUF4QyxFQTNCZ0IsQ0E2QmhCOztNQUNBcEQsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkcsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkJGLEdBQUcsQ0FBQ29ELFVBQWpDO01BQ0FyRCxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCRyxFQUFqQixDQUFvQixPQUFwQixFQUE2QkYsR0FBRyxDQUFDcUQsWUFBakM7SUFFRCxDQWxDUztJQW9DVkQsVUFBVSxFQUFFLG9CQUFVL0MsQ0FBVixFQUFhO01BQ3ZCTixDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCUSxRQUFsQixDQUEyQixRQUEzQjtNQUVBUixDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CdUQsS0FBbkI7SUFDRCxDQXhDUztJQTBDVkQsWUFBWSxFQUFFLHNCQUFVaEQsQ0FBVixFQUFhO01BQ3pCTixDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCTyxXQUFsQixDQUE4QixRQUE5QjtJQUNELENBNUNTO0lBOENWb0MscUJBQXFCLEVBQUUsaUNBQVk7TUFDakM7TUFDQTNDLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCd0QsS0FBL0IsQ0FBcUM7UUFDbkNDLFlBQVksRUFBRSxDQURxQjtRQUVuQ0MsY0FBYyxFQUFFLENBRm1CO1FBR25DQyxRQUFRLEVBQUUsSUFIeUI7UUFJbkNDLE1BQU0sRUFBRSxJQUoyQjtRQUtuQ0MsYUFBYSxFQUFFLElBTG9CO1FBTW5DQyxLQUFLLEVBQUUsSUFONEI7UUFPbkNDLGNBQWMsRUFBRSxNQVBtQjtRQVFuQ0MsU0FBUyxFQUFFLFFBUndCO1FBU25DQyxTQUFTLEVBQUUsT0FUd0I7UUFVbkNDLGNBQWMsRUFBRTtNQVZtQixDQUFyQyxFQUZpQyxDQWVqQzs7TUFDQWxFLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCd0QsS0FBeEIsQ0FBOEI7UUFDNUJXLFVBQVUsRUFBRSxLQURnQjtRQUU1QkMsYUFBYSxFQUFFLE1BRmE7UUFHNUJYLFlBQVksRUFBRSxDQUhjO1FBSTVCWSxJQUFJLEVBQUUsSUFKc0I7UUFLNUJWLFFBQVEsRUFBRSxJQUxrQjtRQU01QkMsTUFBTSxFQUFFLElBTm9CO1FBTzVCQyxhQUFhLEVBQUUsSUFQYTtRQVE1QkcsU0FBUyxFQUFFLFFBUmlCO1FBUzVCQyxTQUFTLEVBQUUsT0FUaUI7UUFVNUJLLFVBQVUsRUFBRSxDQUNWO1VBQ0VDLFVBQVUsRUFBRSxPQURkO1VBRUVDLFFBQVEsRUFBRTtZQUNSWixNQUFNLEVBQUUsS0FEQTtZQUVSTyxVQUFVLEVBQUUsS0FGSjtZQUdSQyxhQUFhLEVBQUUsTUFIUDtZQUlSWCxZQUFZLEVBQUU7VUFKTjtRQUZaLENBRFUsRUFVVjtVQUNFYyxVQUFVLEVBQUUsTUFEZDtVQUVFQyxRQUFRLEVBQUU7WUFDUlosTUFBTSxFQUFFLEtBREE7WUFFUk8sVUFBVSxFQUFFLEtBRko7WUFHUkMsYUFBYSxFQUFFLE1BSFA7WUFJUlgsWUFBWSxFQUFFO1VBSk47UUFGWixDQVZVLEVBbUJWO1VBQ0VjLFVBQVUsRUFBRSxNQURkO1VBRUVDLFFBQVEsRUFBRTtZQUNSWixNQUFNLEVBQUUsS0FEQTtZQUVSTyxVQUFVLEVBQUUsS0FGSjtZQUdSQyxhQUFhLEVBQUUsTUFIUDtZQUlSWCxZQUFZLEVBQUU7VUFKTjtRQUZaLENBbkJVO01BVmdCLENBQTlCLEVBaEJpQyxDQXdEakM7O01BQ0F6RCxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCd0QsS0FBbEIsQ0FBd0I7UUFDdEJDLFlBQVksRUFBRSxDQURRO1FBRXRCQyxjQUFjLEVBQUUsQ0FGTTtRQUd0QkMsUUFBUSxFQUFFLElBSFk7UUFJdEJDLE1BQU0sRUFBRSxJQUpjO1FBS3RCSSxTQUFTLEVBQUUsS0FMVztRQU10QkMsU0FBUyxFQUFFLE9BTlc7UUFPdEJRLFFBQVEsRUFBRSxJQVBZO1FBUXRCTixVQUFVLEVBQUUsSUFSVTtRQVN0QkMsYUFBYSxFQUFFLEtBVE87UUFVdEJQLGFBQWEsRUFBRTtNQVZPLENBQXhCO01BYUE3RCxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQndELEtBQXBCLENBQTBCO1FBQ3hCQyxZQUFZLEVBQUUsQ0FEVTtRQUV4QkMsY0FBYyxFQUFFLENBRlE7UUFHeEJDLFFBQVEsRUFBRSxJQUhjO1FBSXhCQyxNQUFNLEVBQUUsS0FKZ0I7UUFLeEJDLGFBQWEsRUFBRSxJQUxTO1FBTXhCUyxVQUFVLEVBQUUsQ0FDVjtVQUNFQyxVQUFVLEVBQUUsT0FEZDtVQUVFQyxRQUFRLEVBQUU7WUFDUlosTUFBTSxFQUFFLEtBREE7WUFFUk8sVUFBVSxFQUFFLEtBRko7WUFHUkMsYUFBYSxFQUFFLE1BSFA7WUFJUlgsWUFBWSxFQUFFO1VBSk47UUFGWixDQURVLEVBVVY7VUFDRWMsVUFBVSxFQUFFLE9BRGQ7VUFFRUMsUUFBUSxFQUFFO1lBQ1JaLE1BQU0sRUFBRSxLQURBO1lBRVJPLFVBQVUsRUFBRSxLQUZKO1lBR1JDLGFBQWEsRUFBRSxNQUhQO1lBSVJYLFlBQVksRUFBRTtVQUpOO1FBRlosQ0FWVSxFQW1CVjtVQUNFYyxVQUFVLEVBQUUsTUFEZDtVQUVFQyxRQUFRLEVBQUU7WUFDUlosTUFBTSxFQUFFLEtBREE7WUFFUk8sVUFBVSxFQUFFLEtBRko7WUFHUkMsYUFBYSxFQUFFLE1BSFA7WUFJUlgsWUFBWSxFQUFFO1VBSk47UUFGWixDQW5CVSxFQTRCVjtVQUNFYyxVQUFVLEVBQUUsTUFEZDtVQUVFQyxRQUFRLEVBQUU7WUFDUlosTUFBTSxFQUFFLEtBREE7WUFFUk8sVUFBVSxFQUFFLEtBRko7WUFHUkMsYUFBYSxFQUFFLE1BSFA7WUFJUlgsWUFBWSxFQUFFO1VBSk47UUFGWixDQTVCVTtNQU5ZLENBQTFCLEVBdEVpQyxDQW1IakM7O01BQ0F6RCxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQndELEtBQXJCLENBQTJCO1FBQ3pCVyxVQUFVLEVBQUUsSUFEYTtRQUV6QkMsYUFBYSxFQUFFLE1BRlU7UUFHekJYLFlBQVksRUFBRSxDQUhXO1FBSXpCRSxRQUFRLEVBQUUsSUFKZTtRQUt6QkMsTUFBTSxFQUFFLEtBTGlCO1FBTXpCQyxhQUFhLEVBQUUsSUFOVTtRQU96QlMsVUFBVSxFQUFFLENBQ1Y7VUFDRUMsVUFBVSxFQUFFLE9BRGQ7VUFFRUMsUUFBUSxFQUFFO1lBQ1JaLE1BQU0sRUFBRSxLQURBO1lBRVJPLFVBQVUsRUFBRSxLQUZKO1lBR1JDLGFBQWEsRUFBRSxNQUhQO1lBSVJYLFlBQVksRUFBRTtVQUpOO1FBRlosQ0FEVSxFQVVWO1VBQ0VjLFVBQVUsRUFBRSxNQURkO1VBRUVDLFFBQVEsRUFBRTtZQUNSWixNQUFNLEVBQUUsS0FEQTtZQUVSTyxVQUFVLEVBQUUsS0FGSjtZQUdSQyxhQUFhLEVBQUUsTUFIUDtZQUlSWCxZQUFZLEVBQUU7VUFKTjtRQUZaLENBVlUsRUFtQlY7VUFDRWMsVUFBVSxFQUFFLE1BRGQ7VUFFRUMsUUFBUSxFQUFFO1lBQ1JaLE1BQU0sRUFBRSxLQURBO1lBRVJPLFVBQVUsRUFBRSxLQUZKO1lBR1JDLGFBQWEsRUFBRSxNQUhQO1lBSVJYLFlBQVksRUFBRTtVQUpOO1FBRlosQ0FuQlU7TUFQYSxDQUEzQjtJQXFDRCxDQXZNUztJQXlNVmIsa0JBQWtCLEVBQUUsOEJBQVk7TUFDOUI1QyxDQUFDLENBQUMsVUFBRCxDQUFELENBQWMwRSxTQUFkLENBQXdCO1FBQ3RCQyxLQUFLLEVBQUUsRUFEZTtRQUV0QkMsSUFBSSxFQUFFO01BRmdCLENBQXhCO0lBSUQsQ0E5TVM7SUFnTlYvQixpQkFBaUIsRUFBRSw2QkFBWTtNQUM3QjdDLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCTyxXQUE3QixDQUF5QyxRQUF6QztNQUNBUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLFFBQVIsQ0FBaUIsUUFBakI7TUFFQVIsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JPLFdBQXhCLENBQW9DLFFBQXBDO01BQ0FQLENBQUMsbUNBQTRCQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFjLElBQVIsQ0FBYSxRQUFiLENBQTVCLEVBQUQsQ0FBdUROLFFBQXZELENBQWdFLFFBQWhFO0lBQ0QsQ0F0TlM7SUF5TlZzQyxXQUFXLEVBQUUsdUJBQVk7TUFDdkI5QyxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCNkUsT0FBaEIsQ0FBd0I7UUFBRUMsU0FBUyxFQUFFO01BQWIsQ0FBeEIsRUFBMEMsTUFBMUM7SUFDRCxDQTNOUztJQTZOVi9CLGlCQUFpQixFQUFFLDZCQUFZO01BQzdCL0MsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQk8sV0FBakIsQ0FBNkIsUUFBN0I7TUFDQVAsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxRQUFSLENBQWlCLFFBQWpCO0lBQ0QsQ0FoT1M7SUFrT1Z3QyxnQkFBZ0IsRUFBRSw0QkFBWTtNQUM1QmhELENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDK0UsWUFBaEMsQ0FBNkM7UUFDM0M7UUFDQUMsa0JBQWtCLEVBQUUsR0FGdUI7UUFJM0M7UUFDQUMsWUFBWSxFQUFFLGNBTDZCO1FBTTNDQyxXQUFXLEVBQUUsa0JBTjhCO1FBUTNDO1FBQ0FDLFVBQVUsRUFBRTtNQVQrQixDQUE3QztJQVdELENBOU9TO0lBZ1BWbEMsc0JBQXNCLEVBQUUsa0NBQVk7TUFDbEMsSUFBTW1DLEtBQUssR0FBR3BGLENBQUMsQ0FBQyxxQkFBRCxDQUFmO01BRUEsSUFBSSxDQUFDb0YsS0FBSyxDQUFDN0QsTUFBWCxFQUFtQjtNQUVuQm1CLFdBQVcsQ0FBQyxZQUFNO1FBQ2hCLElBQU0yQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0UsSUFBTixDQUFXLEtBQVgsQ0FBakI7UUFDQSxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csUUFBVCxDQUFrQixXQUFsQixDQUFmO1FBQ0FKLEtBQUssQ0FBQ0UsSUFBTixDQUNFLEtBREYsRUFFRUQsUUFBUSxDQUFDSSxPQUFULENBQ0VGLE1BQU0sR0FBRyxXQUFILEdBQWlCLFlBRHpCLEVBRUVBLE1BQU0sR0FBRyxZQUFILEdBQWtCLFdBRjFCLENBRkY7UUFRQXZGLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZU8sV0FBZixDQUEyQixRQUEzQjtRQUNBUCxDQUFDLDBCQUFtQnVGLE1BQU0sR0FBRyxPQUFILEdBQWEsTUFBdEMsRUFBRCxDQUFpRC9FLFFBQWpELENBQTBELFFBQTFEO01BQ0QsQ0FiVSxFQWFSLElBYlEsQ0FBWDtJQWNELENBblFTO0lBcVFWMEMsbUJBQW1CLEVBQUUsNkJBQVU1QyxDQUFWLEVBQWE7TUFDaENBLENBQUMsQ0FBQ0ssY0FBRjtNQUVBLElBQUkrRSxNQUFNLEdBQUcsS0FBYixDQUhnQyxDQUtoQzs7TUFDQSxJQUFJQyxRQUFRLEdBQUcsRUFBZjtNQUNBM0YsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0M0RixJQUFoQyxDQUFxQyxZQUFZO1FBQy9DRCxRQUFRLENBQUNFLElBQVQsQ0FBYzdGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUThGLEdBQVIsRUFBZDtNQUNELENBRkQ7O01BSUEsSUFBSSxDQUFDSCxRQUFRLENBQUNwRSxNQUFkLEVBQXNCO1FBQ3BCdkIsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JzRixJQUF4QixDQUE2QixVQUE3QixFQUF5QyxJQUF6QztRQUNBSSxNQUFNLEdBQUcsSUFBVDtNQUNELENBSEQsTUFHTztRQUNMMUYsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JzRixJQUF4QixDQUE2QixVQUE3QixFQUF5QyxLQUF6QztNQUNELENBaEIrQixDQWtCaEM7OztNQUNBLElBQUlTLE9BQU8sR0FBRyxFQUFkO01BRUEvRixDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQjRGLElBQS9CLENBQW9DLFlBQVk7UUFDOUNHLE9BQU8sQ0FBQ0YsSUFBUixDQUFhN0YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFROEYsR0FBUixFQUFiO01BQ0QsQ0FGRDs7TUFJQSxJQUFJLENBQUNDLE9BQU8sQ0FBQ3hFLE1BQWIsRUFBcUI7UUFDbkJ2QixDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QnNGLElBQXZCLENBQTRCLFVBQTVCLEVBQXdDLElBQXhDO1FBQ0FJLE1BQU0sR0FBRyxJQUFUO01BQ0QsQ0FIRCxNQUdPO1FBQ0wxRixDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QnNGLElBQXZCLENBQTRCLFVBQTVCLEVBQXdDLEtBQXhDO01BQ0QsQ0E5QitCLENBZ0NoQzs7O01BQ0EsSUFBTVUsSUFBSSxHQUFHaEcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUcsR0FBUixDQUFZLENBQVosQ0FBYjs7TUFFQSxJQUFJRCxJQUFJLENBQUNFLGFBQUwsT0FBeUIsS0FBN0IsRUFBb0M7UUFDbENSLE1BQU0sR0FBRyxJQUFUO1FBRUExRixDQUFDLENBQUNnRyxJQUFELENBQUQsQ0FBUXhGLFFBQVIsQ0FBaUIsZUFBakI7TUFDRDs7TUFFRCxJQUFJLENBQUNrRixNQUFMLEVBQWE7UUFDWCxJQUFNUyxJQUFJLEdBQUduRyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVc4RixHQUFYLEVBQWI7UUFDQSxJQUFNTSxLQUFLLEdBQUdwRyxDQUFDLENBQUMsUUFBRCxDQUFELENBQVk4RixHQUFaLEVBQWQ7UUFDQSxJQUFNTyxNQUFNLEdBQUdyRyxDQUFDLENBQUMsU0FBRCxDQUFELENBQWE4RixHQUFiLEVBQWY7UUFDQSxJQUFNUSxNQUFNLEdBQUd0RyxDQUFDLENBQUMsU0FBRCxDQUFELENBQWE4RixHQUFiLEVBQWY7UUFDQSxJQUFNUyxVQUFVLEdBQUd2RyxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCOEYsR0FBakIsRUFBbkI7UUFDQSxJQUFNVSw0QkFBNEIsR0FBR3hHLENBQUMsQ0FDcEMsK0JBRG9DLENBQUQsQ0FFbkM4RixHQUZtQyxFQUFyQztRQUlBVyxFQUFFLENBQUNDLElBQUgsQ0FBUUMsSUFBUixDQUFhLG9CQUFiLEVBQW1DO1VBQ2pDN0YsSUFBSSxFQUFFO1lBQ0pxRixJQUFJLEVBQUVBLElBREY7WUFFSkMsS0FBSyxFQUFFQSxLQUZIO1lBR0pDLE1BQU0sRUFBRUEsTUFISjtZQUlKQyxNQUFNLEVBQUVBLE1BSko7WUFLSlgsUUFBUSxFQUFFQSxRQUxOO1lBTUpJLE9BQU8sRUFBRUEsT0FOTDtZQU9KUSxVQUFVLEVBQUVBLFVBUFI7WUFRSkMsNEJBQTRCLEVBQUVBO1VBUjFCLENBRDJCO1VBV2pDSSxVQUFVLEVBQUUsc0JBQU07WUFDaEI1RyxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFxQixJQUFiLENBQWtCLGFBQWxCLEVBQWlDZCxXQUFqQyxDQUE2QyxRQUE3QztVQUNELENBYmdDO1VBY2pDc0csT0FBTyxFQUFFLGlCQUFDL0YsSUFBRCxFQUFVO1lBQ2pCZCxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QjhHLElBQTlCO1lBRUE5RyxDQUFDLENBQUMsVUFBRCxDQUFELENBQWMrRyxJQUFkO1VBQ0QsQ0FsQmdDO1VBbUJqQ0MsS0FBSyxFQUFFLGVBQUNBLE1BQUQsRUFBVztZQUNoQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7VUFDRCxDQXJCZ0M7VUFzQmpDRyxRQUFRLEVBQUUsb0JBQU07WUFDZG5ILENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYXFCLElBQWIsQ0FBa0IsYUFBbEIsRUFBaUNiLFFBQWpDLENBQTBDLFFBQTFDO1VBQ0Q7UUF4QmdDLENBQW5DO01BMEJEO0lBQ0YsQ0FuVlM7SUFxVlYyQyxtQkFBbUIsRUFBRSwrQkFBWTtNQUMvQixJQUFJbkQsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0N1QixNQUFwQyxFQUE0QztRQUMxQ3ZCLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCc0YsSUFBeEIsQ0FBNkIsVUFBN0IsRUFBeUMsS0FBekM7TUFDRCxDQUZELE1BRU87UUFDTHRGLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCc0YsSUFBeEIsQ0FBNkIsVUFBN0IsRUFBeUMsSUFBekM7TUFDRDtJQUNGLENBM1ZTO0lBNlZWbEMsa0JBQWtCLEVBQUUsOEJBQVk7TUFDOUIsSUFBSXBELENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCdUIsTUFBbkMsRUFBMkM7UUFDekN2QixDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QnNGLElBQXZCLENBQTRCLFVBQTVCLEVBQXdDLEtBQXhDO01BQ0QsQ0FGRCxNQUVPO1FBQ0x0RixDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QnNGLElBQXZCLENBQTRCLFVBQTVCLEVBQXdDLElBQXhDO01BQ0Q7SUFDRjtFQW5XUyxDQUFaO0VBeVdBdEYsQ0FBQyxDQUFDZSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQmYsR0FBRyxDQUFDQyxJQUF0QjtBQUNELENBM1dELEVBMldHZSxNQTNXSCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3N0aWNreS1iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24gKCQpIHtcbiAgICBjb25zdCBhcHAgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vSGFuZGxlIHByaWNpbmcgc3dpdGNoZXJcbiAgICAgICAgICAgICQoJy5wcmljaW5nLXN3aXRjaGVyJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZVN3aXRjaGVyKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIGxpY2Vuc2Ugc3dpdGNoZXJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZUxpY2Vuc2VTd2l0Y2hlcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdhbm51YWwgbGlmZXRpbWUnKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICdhbm51YWwnIDogJ2xpZmV0aW1lJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYW5kbGVMaWNlbnNlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGUnKS50ZXh0KCQodGhpcykudGV4dCgpKTtcblxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgY29uc3QgbGljZW5zZSA9ICQodGhpcykuZGF0YSgnbGljZW5zZScpO1xuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnbGljZW5zZS0xIGxpY2Vuc2UtNSBsaWNlbnNlLTEwMCcpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGBsaWNlbnNlLSR7bGljZW5zZX1gKTtcblxuICAgICAgICB9LFxuXG5cbiAgICB9XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShhcHAuaW5pdCk7XG5cbn0pKGpRdWVyeSk7IiwiOyhmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBiYW5uZXIgPSAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXInKTtcblxuICAgICAgICAvLyBDbG9zZSBiYW5uZXJcbiAgICAgICAgYmFubmVyLm9uKCdjbGljaycsICcuYmFubmVyLWNsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYmFubmVyLnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCYW5uZXIgY291bnRkb3duXG4gICAgICAgIGNvbnN0IGNvdW50ZG93biA9IGJhbm5lci5maW5kKCcuYmFubmVyLWNvdW50ZG93bicpO1xuICAgICAgICBjb25zdCB0aW1lciA9IGJhbm5lci5maW5kKCcudGltZXInKTtcblxuICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlVGltZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDMwMCAqIDYwICogNjAgKiAxMDAwO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvZnRsYWJfb2ZmZXJzX3RpbWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudERvd25EYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvZnRsYWJfb2ZmZXJzX3RpbWUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSB0aW1lXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzb2Z0bGFiX29mZmVyc190aW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgICAgIHRpbWVyLmh0bWwoYDxzcGFuIGNsYXNzPVwiZGF5c1wiPiR7ZGF5c31kPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhvdXJzXCI+JHtob3Vyc31oPC9zcGFuPiA8c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIj4ke21pbnV0ZXN9bTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzZWNvbmRzXCI+JHtzZWNvbmRzfXM8L3NwYW4+YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzb2Z0bGFiX29mZmVyc190aW1lJywgY291bnREb3duRGF0ZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCB4ID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZXIsIDEwMDApO1xuICAgICAgICAgICAgdXBkYXRlVGltZXIoKTsgLy8gQ2FsbCBpbW1lZGlhdGVseSwgZG9u4oCZdCB3YWl0IGZvciB0aGUgZmlyc3QgaW50ZXJ2YWwgdG8gZXhlY3V0ZVxuICAgICAgICB9XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vY29tcG9uZW50cy9wcmljaW5nXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lclwiO1xuXG4oZnVuY3Rpb24gKCQpIHtcbiAgY29uc3QgYXBwID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vSW5pdCBUZXN0aW1vbmlhbCBTbGlkZXJcbiAgICAgIGFwcC5pbml0VGVzdGltb25pYWxTbGlkZXIoKTtcblxuICAgICAgLy9Jbml0IEZ1biBGYWN0IENvdW50ZXJcbiAgICAgIGFwcC5pbml0RnVuRmFjdENvdW50ZXIoKTtcblxuICAgICAgLy9IYW5kbGUgY29udGFjdCBmb3JtIHRhYnNcbiAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVDb250YWN0Rm9ybSk7XG5cblxuICAgICAgLy9IYW5kbGUgdG8gdG9wIGJ1dHRvblxuICAgICAgJChcIi50by10b3BcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlVG9Ub3ApO1xuXG4gICAgICAvL2hhbmRsZSBwcmljaW5nIGl0ZW0gY2xpY2tcbiAgICAgICQoXCIuaXRlbS1wcmljZVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVQcmljaW5nSXRlbSk7XG5cbiAgICAgIC8vSGFuZGxlIEltYWdlIENvbXBhcmUgb24gUmVhZGVyIE1vZGUgcGFnZVxuICAgICAgYXBwLmluaXRJbWFnZUNvbXBhcmUoKTtcblxuICAgICAgLy9DaGFuZ2UgRHJhY3VsYSBIZXJvIEltYWdlXG4gICAgICBhcHAuY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSgpO1xuXG4gICAgICAvLyBIYW5kbGUgQWZmaWxpYXRlIEZvcm1cbiAgICAgICQoXCIjYWZmaWxpYXRlLXJlZ2lzdGVyLWZvcm1cIikub24oXCJzdWJtaXRcIiwgYXBwLmhhbmRsZUFmZmlsaWF0ZUZvcm0pO1xuXG4gICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLm9uKFwiY2hhbmdlXCIsIGFwcC5oYW5kbGVQcm9kdWN0Q2hhbmdlKTtcbiAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5vbihcImNoYW5nZVwiLCBhcHAuaGFuZGxlTWV0aG9kQ2hhbmdlKTtcblxuICAgICAgLy8gSGFuZGxlIFNlYXJjaFxuICAgICAgJChcIi5zZWFyY2gtYnRuXCIpLm9uKFwiY2xpY2tcIiwgYXBwLm9wZW5TZWFyY2gpO1xuICAgICAgJChcIi5jZW5jZWwtYnRuXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmNhbmNlbFNlYXJjaCk7XG5cbiAgICB9LFxuXG4gICAgb3BlblNlYXJjaDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICQoXCIuc2VhcmNoLWZvcm1cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAgICQoXCIuc2VhcmNoLWZpZWxkXCIpLmZvY3VzKCk7XG4gICAgfSxcblxuICAgIGNhbmNlbFNlYXJjaDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICQoXCIuc2VhcmNoLWZvcm1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSxcblxuICAgIGluaXRUZXN0aW1vbmlhbFNsaWRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gSG9tZSB0ZXN0aW1vbmlhbCBzbGlkZXJcbiAgICAgICQoXCIuc2luZ2xlLXRlc3RpbW9uaWFsLWl0ZW1zXCIpLnNsaWNrKHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgICAgc3BlZWQ6IDIwMDAsXG4gICAgICAgIGNvbnRlbnRQYWRkaW5nOiBcIjMwcHhcIixcbiAgICAgICAgbmV4dEFycm93OiBcIi5yaWdodFwiLFxuICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICB9KTtcblxuICAgICAgLy9nb29nbGUgZHJpdmVcbiAgICAgICQoXCIudGVzdGltb25pYWwtaXRlbXNcIikuc2xpY2soe1xuICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgICAgbmV4dEFycm93OiBcIi5yaWdodFwiLFxuICAgICAgICBwcmV2QXJyb3c6IFwiLmxlZnRcIixcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuICAgICAgLy9hYm91dCBzbGlkZXJcbiAgICAgICQoXCIuc2xpZGVyLW1haW5cIikuc2xpY2soe1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBuZXh0QXJyb3c6IFwiLnVwXCIsXG4gICAgICAgIHByZXZBcnJvdzogXCIuZG93blwiLFxuICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICB9KTtcblxuICAgICAgJChcIi5jb21wYXQtc2xpZGVyXCIpLnNsaWNrKHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMzk5Ljk4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSk7XG4gICAgICAvL2RyYWN1bGEgc2xpZGVyXG4gICAgICAkKFwiLmRyYWN1bGEtc2xpZGVyXCIpLnNsaWNrKHtcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5pdEZ1bkZhY3RDb3VudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKFwiLmNvdW50ZXJcIikuY291bnRlclVwKHtcbiAgICAgICAgZGVsYXk6IDE2LFxuICAgICAgICB0aW1lOiAxNTAwLFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGhhbmRsZUNvbnRhY3RGb3JtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKFwiLmNvbnRhY3QtZm9ybSAudGFiLWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXG4gICAgICAkKFwiLmNvbnRhY3QtZm9ybS13cmFwXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgJChgLmNvbnRhY3QtZm9ybS13cmFwLmZvcm0tJHskKHRoaXMpLmRhdGEoXCJ0YXJnZXRcIil9YCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSxcblxuXG4gICAgaGFuZGxlVG9Ub3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgXCJmYXN0XCIpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVQcmljaW5nSXRlbTogZnVuY3Rpb24gKCkge1xuICAgICAgJChcIi5pdGVtLXByaWNlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9LFxuXG4gICAgaW5pdEltYWdlQ29tcGFyZTogZnVuY3Rpb24gKCkge1xuICAgICAgJChcIi5yZWFkZXItbW9kZS1pbWFnZS1jb21wYXJlXCIpLnR3ZW50eXR3ZW50eSh7XG4gICAgICAgIC8vICBIb3cgbXVjaCBvZiB0aGUgYmVmb3JlIGltYWdlIGlzIHZpc2libGUgd2hlbiB0aGUgcGFnZSBsb2Fkc1xuICAgICAgICBkZWZhdWx0X29mZnNldF9wY3Q6IDAuNSxcblxuICAgICAgICAvLyBsYWJlbCB0ZXh0XG4gICAgICAgIGJlZm9yZV9sYWJlbDogXCJHZW5lcmFsIFZpZXdcIixcbiAgICAgICAgYWZ0ZXJfbGFiZWw6IFwiUmVhZGVyIE1vZGUgVmlld1wiLFxuXG4gICAgICAgIC8vb3ZlcmxheVxuICAgICAgICBub19vdmVybGF5OiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNoYW5nZURyYWN1bGFIZXJvSW1hZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGltYWdlID0gJChcIi5kcmFjdWxhLWhlcm8taW1hZ2VcIik7XG5cbiAgICAgIGlmICghaW1hZ2UubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2VTcmMgPSBpbWFnZS5hdHRyKFwic3JjXCIpO1xuICAgICAgICBjb25zdCBpc0RhcmsgPSBpbWFnZVNyYy5pbmNsdWRlcyhcImhlcm8tZGFya1wiKTtcbiAgICAgICAgaW1hZ2UuYXR0cihcbiAgICAgICAgICBcInNyY1wiLFxuICAgICAgICAgIGltYWdlU3JjLnJlcGxhY2UoXG4gICAgICAgICAgICBpc0RhcmsgPyBcImhlcm8tZGFya1wiIDogXCJoZXJvLWxpZ2h0XCIsXG4gICAgICAgICAgICBpc0RhcmsgPyBcImhlcm8tbGlnaHRcIiA6IFwiaGVyby1kYXJrXCJcbiAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgJChcIi5tb2RlLWJ0blwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgJChgLm1vZGUtYnRuLm1vZGUtJHtpc0RhcmsgPyBcImxpZ2h0XCIgOiBcImRhcmtcIn1gKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0sXG5cbiAgICBoYW5kbGVBZmZpbGlhdGVGb3JtOiBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB2YXIgZmFpbGVkID0gZmFsc2U7XG5cbiAgICAgIC8vIFByb2R1Y3Qgc2VsZWN0aW9uXG4gICAgICBsZXQgcHJvZHVjdHMgPSBbXTtcbiAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ106Y2hlY2tlZFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcHJvZHVjdHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXByb2R1Y3RzLmxlbmd0aCkge1xuICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCB0cnVlKTtcbiAgICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgLy8gTWV0aG9kcyBTZWxlY3Rpb25cbiAgICAgIGxldCBtZXRob2RzID0gW107XG5cbiAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXRob2RzLnB1c2goJCh0aGlzKS52YWwoKSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFtZXRob2RzLmxlbmd0aCkge1xuICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xuICAgICAgICBmYWlsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIC8vYm9vdHN0cmFwIHZhbGlkYXRpb25cbiAgICAgIGNvbnN0IGZvcm0gPSAkKHRoaXMpLmdldCgwKTtcblxuICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xuICAgICAgICBmYWlsZWQgPSB0cnVlO1xuXG4gICAgICAgICQoZm9ybSkuYWRkQ2xhc3MoXCJ3YXMtdmFsaWRhdGVkXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZhaWxlZCkge1xuICAgICAgICBjb25zdCBuYW1lID0gJChcIiNuYW1lXCIpLnZhbCgpO1xuICAgICAgICBjb25zdCBlbWFpbCA9ICQoXCIjZW1haWxcIikudmFsKCk7XG4gICAgICAgIGNvbnN0IHBlbWFpbCA9ICQoXCIjcGVtYWlsXCIpLnZhbCgpO1xuICAgICAgICBjb25zdCBkb21haW4gPSAkKFwiI2RvbWFpblwiKS52YWwoKTtcbiAgICAgICAgY29uc3Qgc3RhdGlzdGljcyA9ICQoXCIjc3RhdGlzdGljc1wiKS52YWwoKTtcbiAgICAgICAgY29uc3QgcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbiA9ICQoXG4gICAgICAgICAgXCIjcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvblwiXG4gICAgICAgICkudmFsKCk7XG5cbiAgICAgICAgd3AuYWpheC5zZW5kKFwiYWZmaWxpYXRlX3JlZ2lzdGVyXCIsIHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgcGVtYWlsOiBwZW1haWwsXG4gICAgICAgICAgICBkb21haW46IGRvbWFpbixcbiAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cyxcbiAgICAgICAgICAgIG1ldGhvZHM6IG1ldGhvZHMsXG4gICAgICAgICAgICBzdGF0aXN0aWNzOiBzdGF0aXN0aWNzLFxuICAgICAgICAgICAgcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbjogcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcbiAgICAgICAgICAgICQoXCIjc3VibWl0XCIpLmZpbmQoXCIuZmEtc3Bpbm5lclwiKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAkKFwiI2FmZmlsaWF0ZS1yZWdpc3Rlci1mb3JtXCIpLmhpZGUoKTtcblxuICAgICAgICAgICAgJChcIi5tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAkKFwiI3N1Ym1pdFwiKS5maW5kKFwiLmZhLXNwaW5uZXJcIikuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZVByb2R1Y3RDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKFwiW25hbWU9J3Byb2R1Y3RbXSddOmNoZWNrZWRcIikubGVuZ3RoKSB7XG4gICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVNZXRob2RDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKFwiW25hbWU9J21ldGhvZFtdJ106Y2hlY2tlZFwiKS5sZW5ndGgpIHtcbiAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiW25hbWU9J21ldGhvZFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG5cblxuXG5cbiAgJChkb2N1bWVudCkucmVhZHkoYXBwLmluaXQpO1xufSkoalF1ZXJ5KTtcblxuIl0sIm5hbWVzIjpbIiQiLCJhcHAiLCJpbml0Iiwib24iLCJoYW5kbGVTd2l0Y2hlciIsImhhbmRsZUxpY2Vuc2VTd2l0Y2hlciIsImUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaGFzQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsImxpY2Vuc2UiLCJkYXRhIiwiZG9jdW1lbnQiLCJyZWFkeSIsImpRdWVyeSIsImJhbm5lciIsInJlbW92ZSIsImNvdW50ZG93biIsImZpbmQiLCJ0aW1lciIsImxlbmd0aCIsInVwZGF0ZVRpbWVyIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJjb3VudERvd25EYXRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRpc3RhbmNlIiwicmVtb3ZlSXRlbSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiaHRtbCIsInNldEl0ZW0iLCJ4Iiwic2V0SW50ZXJ2YWwiLCJpbml0VGVzdGltb25pYWxTbGlkZXIiLCJpbml0RnVuRmFjdENvdW50ZXIiLCJoYW5kbGVDb250YWN0Rm9ybSIsImhhbmRsZVRvVG9wIiwiaGFuZGxlUHJpY2luZ0l0ZW0iLCJpbml0SW1hZ2VDb21wYXJlIiwiY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSIsImhhbmRsZUFmZmlsaWF0ZUZvcm0iLCJoYW5kbGVQcm9kdWN0Q2hhbmdlIiwiaGFuZGxlTWV0aG9kQ2hhbmdlIiwib3BlblNlYXJjaCIsImNhbmNlbFNlYXJjaCIsImZvY3VzIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXJyb3dzIiwiYXV0b3BsYXlTcGVlZCIsInNwZWVkIiwiY29udGVudFBhZGRpbmciLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJhZGFwdGl2ZUhlaWdodCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiZG90cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ2ZXJ0aWNhbCIsImNvdW50ZXJVcCIsImRlbGF5IiwidGltZSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ0d2VudHl0d2VudHkiLCJkZWZhdWx0X29mZnNldF9wY3QiLCJiZWZvcmVfbGFiZWwiLCJhZnRlcl9sYWJlbCIsIm5vX292ZXJsYXkiLCJpbWFnZSIsImltYWdlU3JjIiwiYXR0ciIsImlzRGFyayIsImluY2x1ZGVzIiwicmVwbGFjZSIsImZhaWxlZCIsInByb2R1Y3RzIiwiZWFjaCIsInB1c2giLCJ2YWwiLCJtZXRob2RzIiwiZm9ybSIsImdldCIsImNoZWNrVmFsaWRpdHkiLCJuYW1lIiwiZW1haWwiLCJwZW1haWwiLCJkb21haW4iLCJzdGF0aXN0aWNzIiwicHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbiIsIndwIiwiYWpheCIsInNlbmQiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsImhpZGUiLCJzaG93IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY29tcGxldGUiXSwic291cmNlUm9vdCI6IiJ9