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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBQyxDQUFDLFVBQVVBLENBQVYsRUFBYTtFQUNYLElBQU1DLEdBQUcsR0FBRztJQUNSQyxJQUFJLEVBQUUsZ0JBQVk7TUFDZDtNQUNBRixDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkcsRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUNGLEdBQUcsQ0FBQ0csY0FBdkMsRUFGYyxDQUlkOztNQUNBSixDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQ0csRUFBdEMsQ0FBeUMsT0FBekMsRUFBa0RGLEdBQUcsQ0FBQ0kscUJBQXREO0lBQ0gsQ0FQTztJQVNSRCxjQUFjLEVBQUUsd0JBQVVFLENBQVYsRUFBYTtNQUN6Qk4sQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQk8sV0FBakIsQ0FBNkIsaUJBQTdCLEVBQ0tDLFFBREwsQ0FDY1IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUyxRQUFSLENBQWlCLFFBQWpCLElBQTZCLFFBQTdCLEdBQXdDLFVBRHREO01BRUFULENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsV0FBUixDQUFvQixRQUFwQjtJQUNILENBYk87SUFlUkwscUJBQXFCLEVBQUUsK0JBQVVDLENBQVYsRUFBYTtNQUNoQ0EsQ0FBQyxDQUFDSyxjQUFGO01BRUFYLENBQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDWSxJQUF4QyxDQUE2Q1osQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRWSxJQUFSLEVBQTdDO01BRUFaLENBQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDTyxXQUF0QyxDQUFrRCxRQUFsRDtNQUNBUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLFFBQVIsQ0FBaUIsUUFBakI7TUFFQSxJQUFNSyxPQUFPLEdBQUdiLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWMsSUFBUixDQUFhLFNBQWIsQ0FBaEI7TUFDQWQsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQk8sV0FBakIsQ0FBNkIsaUNBQTdCLEVBQ0tDLFFBREwsbUJBQ3lCSyxPQUR6QjtJQUdIO0VBM0JPLENBQVo7RUFnQ0FiLENBQUMsQ0FBQ2UsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0JmLEdBQUcsQ0FBQ0MsSUFBdEI7QUFFSCxDQW5DQSxFQW1DRWUsTUFuQ0Y7Ozs7Ozs7Ozs7QUNBRDs7QUFBQyxDQUFDLFVBQVVqQixDQUFWLEVBQWE7RUFDWDs7RUFFQUEsQ0FBQyxDQUFDZSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0lBQzFCLElBQU1FLE1BQU0sR0FBR2xCLENBQUMsQ0FBQyx1QkFBRCxDQUFoQixDQUQwQixDQUcxQjs7SUFDQUEsQ0FBQyxDQUFDLGVBQUQsRUFBa0JrQixNQUFsQixDQUFELENBQTJCZixFQUEzQixDQUE4QixPQUE5QixFQUF1QyxZQUFZO01BQy9DZSxNQUFNLENBQUNDLE1BQVA7SUFDSCxDQUZELEVBSjBCLENBUTFCOztJQUNBLElBQU1DLFNBQVMsR0FBR3BCLENBQUMsQ0FBQyxtQkFBRCxFQUFzQmtCLE1BQXRCLENBQW5CO0lBQ0EsSUFBTUcsS0FBSyxHQUFHckIsQ0FBQyxDQUFDLFFBQUQsRUFBV2tCLE1BQVgsQ0FBZjs7SUFFQSxJQUFJRSxTQUFTLENBQUNFLE1BQWQsRUFBc0I7TUFDbEIsSUFBTUMsUUFBUSxHQUFHLElBQUlDLElBQUosQ0FBUyxJQUFJQSxJQUFKLEdBQVdDLE9BQVgsS0FBdUIsS0FBSyxFQUFMLEdBQVUsRUFBVixHQUFlLElBQXRDLEdBQTZDLElBQUksRUFBSixHQUFTLEVBQVQsR0FBYyxJQUFwRSxFQUEwRUMsV0FBMUUsRUFBakI7TUFDQSxJQUFJQyxhQUFhLEdBQUcsSUFBSUgsSUFBSixDQUFTRCxRQUFULEVBQW1CRSxPQUFuQixFQUFwQixDQUZrQixDQUlsQjs7TUFDQSxJQUFJRyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBSixFQUFrQztRQUM5QkYsYUFBYSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBaEI7TUFDSDs7TUFHRCxJQUFNQyxDQUFDLEdBQUdDLFdBQVcsQ0FBQyxZQUFZO1FBQzlCLElBQU1DLEdBQUcsR0FBRyxJQUFJUixJQUFKLEdBQVdDLE9BQVgsRUFBWjtRQUNBLElBQU1RLFFBQVEsR0FBR04sYUFBYSxHQUFHSyxHQUFqQztRQUVBLElBQU1FLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFFBQVEsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQW5CLENBQWI7UUFDQSxJQUFNSSxLQUFLLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFZSCxRQUFRLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFULElBQXNDLE9BQU8sRUFBUCxHQUFZLEVBQWxELENBQVgsQ0FBZDtRQUNBLElBQU1LLE9BQU8sR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVlILFFBQVEsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUFULElBQWlDLE9BQU8sRUFBeEMsQ0FBWCxDQUFoQjtRQUNBLElBQU1NLE9BQU8sR0FBR0osSUFBSSxDQUFDQyxLQUFMLENBQVlILFFBQVEsSUFBSSxPQUFPLEVBQVgsQ0FBVCxHQUEyQixJQUF0QyxDQUFoQjtRQUVBWixLQUFLLENBQUNtQixJQUFOLGdDQUFpQ04sSUFBakMsNENBQXFFRyxLQUFyRSw4Q0FBNEdDLE9BQTVHLDhDQUFxSkMsT0FBcko7O1FBRUEsSUFBSU4sUUFBUSxHQUFHLENBQWYsRUFBa0I7VUFDZFEsYUFBYSxDQUFDWCxDQUFELENBQWI7VUFDQVQsS0FBSyxDQUFDVCxJQUFOLENBQVcsU0FBWDtVQUNBZ0IsWUFBWSxDQUFDYyxVQUFiLENBQXdCLE1BQXhCO1FBQ0gsQ0FmNkIsQ0FpQjlCOzs7UUFDQWQsWUFBWSxDQUFDZSxPQUFiLENBQXFCLE1BQXJCLEVBQTZCaEIsYUFBN0I7TUFFSCxDQXBCb0IsRUFvQmxCLElBcEJrQixDQUFyQjtJQXFCSDtFQUVKLENBN0NEO0FBOENILENBakRBLEVBaURFVixNQWpERjs7Ozs7O1VDQUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBLENBQUMsVUFBVWpCLENBQVYsRUFBYTtFQUNaLElBQU1DLEdBQUcsR0FBRztJQUNWQyxJQUFJLEVBQUUsZ0JBQVk7TUFDaEI7TUFDQUQsR0FBRyxDQUFDMkMscUJBQUosR0FGZ0IsQ0FJaEI7O01BQ0EzQyxHQUFHLENBQUM0QyxrQkFBSixHQUxnQixDQU9oQjs7TUFDQTdDLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCRyxFQUE3QixDQUFnQyxPQUFoQyxFQUF5Q0YsR0FBRyxDQUFDNkMsaUJBQTdDLEVBUmdCLENBVWhCOztNQUNBOUMsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhRyxFQUFiLENBQWdCLE9BQWhCLEVBQXlCRixHQUFHLENBQUM4QyxXQUE3QixFQVhnQixDQWFoQjs7TUFDQS9DLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJHLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCRixHQUFHLENBQUMrQyxpQkFBakMsRUFkZ0IsQ0FnQmhCOztNQUNBL0MsR0FBRyxDQUFDZ0QsZ0JBQUosR0FqQmdCLENBbUJoQjs7TUFDQWhELEdBQUcsQ0FBQ2lELHNCQUFKLEdBcEJnQixDQXNCaEI7O01BQ0FsRCxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QkcsRUFBOUIsQ0FBaUMsUUFBakMsRUFBMkNGLEdBQUcsQ0FBQ2tELG1CQUEvQztNQUVBbkQsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JHLEVBQXhCLENBQTJCLFFBQTNCLEVBQXFDRixHQUFHLENBQUNtRCxtQkFBekM7TUFDQXBELENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCRyxFQUF2QixDQUEwQixRQUExQixFQUFvQ0YsR0FBRyxDQUFDb0Qsa0JBQXhDLEVBMUJnQixDQTRCaEI7O01BQ0FyRCxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCRyxFQUFqQixDQUFvQixPQUFwQixFQUE2QkYsR0FBRyxDQUFDcUQsVUFBakM7TUFDQXRELENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJHLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCRixHQUFHLENBQUNzRCxZQUFqQztJQUVELENBakNTO0lBbUNWRCxVQUFVLEVBQUUsb0JBQVVoRCxDQUFWLEVBQWE7TUFDdkJOLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JRLFFBQWxCLENBQTJCLFFBQTNCO01BRUFSLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJ3RCxLQUFuQjtJQUNELENBdkNTO0lBeUNWRCxZQUFZLEVBQUUsc0JBQVVqRCxDQUFWLEVBQWE7TUFDekJOLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JPLFdBQWxCLENBQThCLFFBQTlCO0lBQ0QsQ0EzQ1M7SUE2Q1ZxQyxxQkFBcUIsRUFBRSxpQ0FBWTtNQUNqQztNQUNBNUMsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0J5RCxLQUEvQixDQUFxQztRQUNuQ0MsWUFBWSxFQUFFLENBRHFCO1FBRW5DQyxjQUFjLEVBQUUsQ0FGbUI7UUFHbkNDLFFBQVEsRUFBRSxJQUh5QjtRQUluQ0MsTUFBTSxFQUFFLElBSjJCO1FBS25DQyxhQUFhLEVBQUUsSUFMb0I7UUFNbkNDLEtBQUssRUFBRSxJQU40QjtRQU9uQ0MsY0FBYyxFQUFFLE1BUG1CO1FBUW5DQyxTQUFTLEVBQUUsUUFSd0I7UUFTbkNDLFNBQVMsRUFBRSxPQVR3QjtRQVVuQ0MsY0FBYyxFQUFFO01BVm1CLENBQXJDLEVBRmlDLENBZWpDOztNQUNBbkUsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0J5RCxLQUF4QixDQUE4QjtRQUM1QlcsVUFBVSxFQUFFLEtBRGdCO1FBRTVCQyxhQUFhLEVBQUUsTUFGYTtRQUc1QlgsWUFBWSxFQUFFLENBSGM7UUFJNUJZLElBQUksRUFBRSxJQUpzQjtRQUs1QlYsUUFBUSxFQUFFLElBTGtCO1FBTTVCQyxNQUFNLEVBQUUsSUFOb0I7UUFPNUJDLGFBQWEsRUFBRSxJQVBhO1FBUTVCRyxTQUFTLEVBQUUsUUFSaUI7UUFTNUJDLFNBQVMsRUFBRSxPQVRpQjtRQVU1QkssVUFBVSxFQUFFLENBQ1Y7VUFDRUMsVUFBVSxFQUFFLE9BRGQ7VUFFRUMsUUFBUSxFQUFFO1lBQ1JaLE1BQU0sRUFBRSxLQURBO1lBRVJPLFVBQVUsRUFBRSxLQUZKO1lBR1JDLGFBQWEsRUFBRSxNQUhQO1lBSVJYLFlBQVksRUFBRTtVQUpOO1FBRlosQ0FEVSxFQVVWO1VBQ0VjLFVBQVUsRUFBRSxNQURkO1VBRUVDLFFBQVEsRUFBRTtZQUNSWixNQUFNLEVBQUUsS0FEQTtZQUVSTyxVQUFVLEVBQUUsS0FGSjtZQUdSQyxhQUFhLEVBQUUsTUFIUDtZQUlSWCxZQUFZLEVBQUU7VUFKTjtRQUZaLENBVlUsRUFtQlY7VUFDRWMsVUFBVSxFQUFFLE1BRGQ7VUFFRUMsUUFBUSxFQUFFO1lBQ1JaLE1BQU0sRUFBRSxLQURBO1lBRVJPLFVBQVUsRUFBRSxLQUZKO1lBR1JDLGFBQWEsRUFBRSxNQUhQO1lBSVJYLFlBQVksRUFBRTtVQUpOO1FBRlosQ0FuQlU7TUFWZ0IsQ0FBOUIsRUFoQmlDLENBd0RqQzs7TUFDQTFELENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0J5RCxLQUFsQixDQUF3QjtRQUN0QkMsWUFBWSxFQUFFLENBRFE7UUFFdEJDLGNBQWMsRUFBRSxDQUZNO1FBR3RCQyxRQUFRLEVBQUUsSUFIWTtRQUl0QkMsTUFBTSxFQUFFLElBSmM7UUFLdEJJLFNBQVMsRUFBRSxLQUxXO1FBTXRCQyxTQUFTLEVBQUUsT0FOVztRQU90QlEsUUFBUSxFQUFFLElBUFk7UUFRdEJOLFVBQVUsRUFBRSxJQVJVO1FBU3RCQyxhQUFhLEVBQUUsS0FUTztRQVV0QlAsYUFBYSxFQUFFO01BVk8sQ0FBeEI7TUFhQTlELENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CeUQsS0FBcEIsQ0FBMEI7UUFDeEJDLFlBQVksRUFBRSxDQURVO1FBRXhCQyxjQUFjLEVBQUUsQ0FGUTtRQUd4QkMsUUFBUSxFQUFFLElBSGM7UUFJeEJDLE1BQU0sRUFBRSxLQUpnQjtRQUt4QkMsYUFBYSxFQUFFLElBTFM7UUFNeEJTLFVBQVUsRUFBRSxDQUNWO1VBQ0VDLFVBQVUsRUFBRSxPQURkO1VBRUVDLFFBQVEsRUFBRTtZQUNSWixNQUFNLEVBQUUsS0FEQTtZQUVSTyxVQUFVLEVBQUUsS0FGSjtZQUdSQyxhQUFhLEVBQUUsTUFIUDtZQUlSWCxZQUFZLEVBQUU7VUFKTjtRQUZaLENBRFUsRUFVVjtVQUNFYyxVQUFVLEVBQUUsT0FEZDtVQUVFQyxRQUFRLEVBQUU7WUFDUlosTUFBTSxFQUFFLEtBREE7WUFFUk8sVUFBVSxFQUFFLEtBRko7WUFHUkMsYUFBYSxFQUFFLE1BSFA7WUFJUlgsWUFBWSxFQUFFO1VBSk47UUFGWixDQVZVLEVBbUJWO1VBQ0VjLFVBQVUsRUFBRSxNQURkO1VBRUVDLFFBQVEsRUFBRTtZQUNSWixNQUFNLEVBQUUsS0FEQTtZQUVSTyxVQUFVLEVBQUUsS0FGSjtZQUdSQyxhQUFhLEVBQUUsTUFIUDtZQUlSWCxZQUFZLEVBQUU7VUFKTjtRQUZaLENBbkJVLEVBNEJWO1VBQ0VjLFVBQVUsRUFBRSxNQURkO1VBRUVDLFFBQVEsRUFBRTtZQUNSWixNQUFNLEVBQUUsS0FEQTtZQUVSTyxVQUFVLEVBQUUsS0FGSjtZQUdSQyxhQUFhLEVBQUUsTUFIUDtZQUlSWCxZQUFZLEVBQUU7VUFKTjtRQUZaLENBNUJVO01BTlksQ0FBMUIsRUF0RWlDLENBbUhqQzs7TUFDQTFELENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCeUQsS0FBckIsQ0FBMkI7UUFDekJXLFVBQVUsRUFBRSxJQURhO1FBRXpCQyxhQUFhLEVBQUUsTUFGVTtRQUd6QlgsWUFBWSxFQUFFLENBSFc7UUFJekJFLFFBQVEsRUFBRSxJQUplO1FBS3pCQyxNQUFNLEVBQUUsS0FMaUI7UUFNekJDLGFBQWEsRUFBRSxJQU5VO1FBT3pCUyxVQUFVLEVBQUUsQ0FDVjtVQUNFQyxVQUFVLEVBQUUsT0FEZDtVQUVFQyxRQUFRLEVBQUU7WUFDUlosTUFBTSxFQUFFLEtBREE7WUFFUk8sVUFBVSxFQUFFLEtBRko7WUFHUkMsYUFBYSxFQUFFLE1BSFA7WUFJUlgsWUFBWSxFQUFFO1VBSk47UUFGWixDQURVLEVBVVY7VUFDRWMsVUFBVSxFQUFFLE1BRGQ7VUFFRUMsUUFBUSxFQUFFO1lBQ1JaLE1BQU0sRUFBRSxLQURBO1lBRVJPLFVBQVUsRUFBRSxLQUZKO1lBR1JDLGFBQWEsRUFBRSxNQUhQO1lBSVJYLFlBQVksRUFBRTtVQUpOO1FBRlosQ0FWVSxFQW1CVjtVQUNFYyxVQUFVLEVBQUUsTUFEZDtVQUVFQyxRQUFRLEVBQUU7WUFDUlosTUFBTSxFQUFFLEtBREE7WUFFUk8sVUFBVSxFQUFFLEtBRko7WUFHUkMsYUFBYSxFQUFFLE1BSFA7WUFJUlgsWUFBWSxFQUFFO1VBSk47UUFGWixDQW5CVTtNQVBhLENBQTNCO0lBcUNELENBdE1TO0lBd01WYixrQkFBa0IsRUFBRSw4QkFBWTtNQUM5QjdDLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYzJFLFNBQWQsQ0FBd0I7UUFDdEJDLEtBQUssRUFBRSxFQURlO1FBRXRCQyxJQUFJLEVBQUU7TUFGZ0IsQ0FBeEI7SUFJRCxDQTdNUztJQStNVi9CLGlCQUFpQixFQUFFLDZCQUFZO01BQzdCOUMsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJPLFdBQTdCLENBQXlDLFFBQXpDO01BQ0FQLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsUUFBUixDQUFpQixRQUFqQjtNQUVBUixDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3Qk8sV0FBeEIsQ0FBb0MsUUFBcEM7TUFDQVAsQ0FBQyxtQ0FBNEJBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWMsSUFBUixDQUFhLFFBQWIsQ0FBNUIsRUFBRCxDQUF1RE4sUUFBdkQsQ0FBZ0UsUUFBaEU7SUFDRCxDQXJOUztJQXVOVnVDLFdBQVcsRUFBRSx1QkFBWTtNQUN2Qi9DLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0I4RSxPQUFoQixDQUF3QjtRQUFFQyxTQUFTLEVBQUU7TUFBYixDQUF4QixFQUEwQyxNQUExQztJQUNELENBek5TO0lBMk5WL0IsaUJBQWlCLEVBQUUsNkJBQVk7TUFDN0JoRCxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCTyxXQUFqQixDQUE2QixRQUE3QjtNQUNBUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLFFBQVIsQ0FBaUIsUUFBakI7SUFDRCxDQTlOUztJQWdPVnlDLGdCQUFnQixFQUFFLDRCQUFZO01BQzVCakQsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NnRixZQUFoQyxDQUE2QztRQUMzQztRQUNBQyxrQkFBa0IsRUFBRSxHQUZ1QjtRQUkzQztRQUNBQyxZQUFZLEVBQUUsY0FMNkI7UUFNM0NDLFdBQVcsRUFBRSxrQkFOOEI7UUFRM0M7UUFDQUMsVUFBVSxFQUFFO01BVCtCLENBQTdDO0lBV0QsQ0E1T1M7SUE4T1ZsQyxzQkFBc0IsRUFBRSxrQ0FBWTtNQUNsQyxJQUFNbUMsS0FBSyxHQUFHckYsQ0FBQyxDQUFDLHFCQUFELENBQWY7TUFFQSxJQUFJLENBQUNxRixLQUFLLENBQUMvRCxNQUFYLEVBQW1CO01BRW5CUyxXQUFXLENBQUMsWUFBTTtRQUNoQixJQUFNdUQsUUFBUSxHQUFHRCxLQUFLLENBQUNFLElBQU4sQ0FBVyxLQUFYLENBQWpCO1FBQ0EsSUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLFFBQVQsQ0FBa0IsV0FBbEIsQ0FBZjtRQUNBSixLQUFLLENBQUNFLElBQU4sQ0FDRSxLQURGLEVBRUVELFFBQVEsQ0FBQ0ksT0FBVCxDQUNFRixNQUFNLEdBQUcsV0FBSCxHQUFpQixZQUR6QixFQUVFQSxNQUFNLEdBQUcsWUFBSCxHQUFrQixXQUYxQixDQUZGO1FBUUF4RixDQUFDLENBQUMsV0FBRCxDQUFELENBQWVPLFdBQWYsQ0FBMkIsUUFBM0I7UUFDQVAsQ0FBQywwQkFBbUJ3RixNQUFNLEdBQUcsT0FBSCxHQUFhLE1BQXRDLEVBQUQsQ0FBaURoRixRQUFqRCxDQUEwRCxRQUExRDtNQUNELENBYlUsRUFhUixJQWJRLENBQVg7SUFjRCxDQWpRUztJQW1RVjJDLG1CQUFtQixFQUFFLDZCQUFVN0MsQ0FBVixFQUFhO01BQ2hDQSxDQUFDLENBQUNLLGNBQUY7TUFFQSxJQUFJZ0YsTUFBTSxHQUFHLEtBQWIsQ0FIZ0MsQ0FLaEM7O01BQ0EsSUFBSUMsUUFBUSxHQUFHLEVBQWY7TUFDQTVGLENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDNkYsSUFBaEMsQ0FBcUMsWUFBWTtRQUMvQ0QsUUFBUSxDQUFDRSxJQUFULENBQWM5RixDQUFDLENBQUMsSUFBRCxDQUFELENBQVErRixHQUFSLEVBQWQ7TUFDRCxDQUZEOztNQUlBLElBQUksQ0FBQ0gsUUFBUSxDQUFDdEUsTUFBZCxFQUFzQjtRQUNwQnRCLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCdUYsSUFBeEIsQ0FBNkIsVUFBN0IsRUFBeUMsSUFBekM7UUFDQUksTUFBTSxHQUFHLElBQVQ7TUFDRCxDQUhELE1BR087UUFDTDNGLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCdUYsSUFBeEIsQ0FBNkIsVUFBN0IsRUFBeUMsS0FBekM7TUFDRCxDQWhCK0IsQ0FrQmhDOzs7TUFDQSxJQUFJUyxPQUFPLEdBQUcsRUFBZDtNQUVBaEcsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I2RixJQUEvQixDQUFvQyxZQUFZO1FBQzlDRyxPQUFPLENBQUNGLElBQVIsQ0FBYTlGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUStGLEdBQVIsRUFBYjtNQUNELENBRkQ7O01BSUEsSUFBSSxDQUFDQyxPQUFPLENBQUMxRSxNQUFiLEVBQXFCO1FBQ25CdEIsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJ1RixJQUF2QixDQUE0QixVQUE1QixFQUF3QyxJQUF4QztRQUNBSSxNQUFNLEdBQUcsSUFBVDtNQUNELENBSEQsTUFHTztRQUNMM0YsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJ1RixJQUF2QixDQUE0QixVQUE1QixFQUF3QyxLQUF4QztNQUNELENBOUIrQixDQWdDaEM7OztNQUNBLElBQU1VLElBQUksR0FBR2pHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWtHLEdBQVIsQ0FBWSxDQUFaLENBQWI7O01BRUEsSUFBSUQsSUFBSSxDQUFDRSxhQUFMLE9BQXlCLEtBQTdCLEVBQW9DO1FBQ2xDUixNQUFNLEdBQUcsSUFBVDtRQUVBM0YsQ0FBQyxDQUFDaUcsSUFBRCxDQUFELENBQVF6RixRQUFSLENBQWlCLGVBQWpCO01BQ0Q7O01BRUQsSUFBSSxDQUFDbUYsTUFBTCxFQUFhO1FBQ1gsSUFBTVMsSUFBSSxHQUFHcEcsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXK0YsR0FBWCxFQUFiO1FBQ0EsSUFBTU0sS0FBSyxHQUFHckcsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZK0YsR0FBWixFQUFkO1FBQ0EsSUFBTU8sTUFBTSxHQUFHdEcsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhK0YsR0FBYixFQUFmO1FBQ0EsSUFBTVEsTUFBTSxHQUFHdkcsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhK0YsR0FBYixFQUFmO1FBQ0EsSUFBTVMsVUFBVSxHQUFHeEcsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQitGLEdBQWpCLEVBQW5CO1FBQ0EsSUFBTVUsNEJBQTRCLEdBQUd6RyxDQUFDLENBQ3BDLCtCQURvQyxDQUFELENBRW5DK0YsR0FGbUMsRUFBckM7UUFJQVcsRUFBRSxDQUFDQyxJQUFILENBQVFDLElBQVIsQ0FBYSxvQkFBYixFQUFtQztVQUNqQzlGLElBQUksRUFBRTtZQUNKc0YsSUFBSSxFQUFFQSxJQURGO1lBRUpDLEtBQUssRUFBRUEsS0FGSDtZQUdKQyxNQUFNLEVBQUVBLE1BSEo7WUFJSkMsTUFBTSxFQUFFQSxNQUpKO1lBS0pYLFFBQVEsRUFBRUEsUUFMTjtZQU1KSSxPQUFPLEVBQUVBLE9BTkw7WUFPSlEsVUFBVSxFQUFFQSxVQVBSO1lBUUpDLDRCQUE0QixFQUFFQTtVQVIxQixDQUQyQjtVQVdqQ0ksVUFBVSxFQUFFLHNCQUFNO1lBQ2hCN0csQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhOEcsSUFBYixDQUFrQixhQUFsQixFQUFpQ3ZHLFdBQWpDLENBQTZDLFFBQTdDO1VBQ0QsQ0FiZ0M7VUFjakN3RyxPQUFPLEVBQUUsaUJBQUNqRyxJQUFELEVBQVU7WUFDakI7WUFDQWQsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJnSCxJQUE5QjtZQUVBaEgsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjaUgsSUFBZDtVQUNELENBbkJnQztVQW9CakNDLEtBQUssRUFBRSxlQUFDQSxNQUFELEVBQVc7WUFDaEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO1VBQ0QsQ0F0QmdDO1VBdUJqQ0csUUFBUSxFQUFFLG9CQUFNO1lBQ2RySCxDQUFDLENBQUMsU0FBRCxDQUFELENBQWE4RyxJQUFiLENBQWtCLGFBQWxCLEVBQWlDdEcsUUFBakMsQ0FBMEMsUUFBMUM7VUFDRDtRQXpCZ0MsQ0FBbkM7TUEyQkQ7SUFDRixDQWxWUztJQW9WVjRDLG1CQUFtQixFQUFFLCtCQUFZO01BQy9CLElBQUlwRCxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ3NCLE1BQXBDLEVBQTRDO1FBQzFDdEIsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0J1RixJQUF4QixDQUE2QixVQUE3QixFQUF5QyxLQUF6QztNQUNELENBRkQsTUFFTztRQUNMdkYsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0J1RixJQUF4QixDQUE2QixVQUE3QixFQUF5QyxJQUF6QztNQUNEO0lBQ0YsQ0ExVlM7SUE0VlZsQyxrQkFBa0IsRUFBRSw4QkFBWTtNQUM5QixJQUFJckQsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JzQixNQUFuQyxFQUEyQztRQUN6Q3RCLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCdUYsSUFBdkIsQ0FBNEIsVUFBNUIsRUFBd0MsS0FBeEM7TUFDRCxDQUZELE1BRU87UUFDTHZGLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCdUYsSUFBdkIsQ0FBNEIsVUFBNUIsRUFBd0MsSUFBeEM7TUFDRDtJQUNGO0VBbFdTLENBQVo7RUFxV0F2RixDQUFDLENBQUNlLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCZixHQUFHLENBQUNDLElBQXRCO0FBQ0QsQ0F2V0QsRUF1V0dlLE1BdldILEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL2NvbXBvbmVudHMvcHJpY2luZy5qcyIsIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lci5qcyIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiOyhmdW5jdGlvbiAoJCkge1xyXG4gICAgY29uc3QgYXBwID0ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9IYW5kbGUgcHJpY2luZyBzd2l0Y2hlclxyXG4gICAgICAgICAgICAkKCcucHJpY2luZy1zd2l0Y2hlcicpLm9uKCdjbGljaycsIGFwcC5oYW5kbGVTd2l0Y2hlcik7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgbGljZW5zZSBzd2l0Y2hlclxyXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24taXRlbScpLm9uKCdjbGljaycsIGFwcC5oYW5kbGVMaWNlbnNlU3dpdGNoZXIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVN3aXRjaGVyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdhbm51YWwgbGlmZXRpbWUnKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpID8gJ2FubnVhbCcgOiAnbGlmZXRpbWUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlTGljZW5zZVN3aXRjaGVyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlJykudGV4dCgkKHRoaXMpLnRleHQoKSk7XHJcblxyXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24taXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaWNlbnNlID0gJCh0aGlzKS5kYXRhKCdsaWNlbnNlJyk7XHJcbiAgICAgICAgICAgICQoJy5wcmljZS10ZXh0JykucmVtb3ZlQ2xhc3MoJ2xpY2Vuc2UtMSBsaWNlbnNlLTUgbGljZW5zZS0xMDAnKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGBsaWNlbnNlLSR7bGljZW5zZX1gKTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxuXHJcbn0pKGpRdWVyeSk7IiwiOyhmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGJhbm5lciA9ICQoJyNoZWFkZXItc3RpY2t5LWJhbm5lcicpO1xyXG5cclxuICAgICAgICAvL0Nsb3NlIGJhbm5lclxyXG4gICAgICAgICQoJy5iYW5uZXItY2xvc2UnLCBiYW5uZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYmFubmVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL0Jhbm5lciBjb3VudGRvd25cclxuICAgICAgICBjb25zdCBjb3VudGRvd24gPSAkKCcuYmFubmVyLWNvdW50ZG93bicsIGJhbm5lcik7XHJcbiAgICAgICAgY29uc3QgdGltZXIgPSAkKCcudGltZXInLCBiYW5uZXIpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMjQgKiA2MCAqIDYwICogMTAwMCArIDIgKiA2MCAqIDYwICogMTAwMCkudG9JU09TdHJpbmcoKTtcclxuICAgICAgICAgICAgbGV0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShkYXRlVGltZSkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICAgICAgLy9jaGVjayBpZiB0aGVyZSBpcyBhIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWUnKSkge1xyXG4gICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCB4ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZXIuaHRtbChgPHNwYW4gY2xhc3M9XCJkYXlzXCI+JHtkYXlzfWQ8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaG91cnNcIj4ke2hvdXJzfWg8L3NwYW4+IDxzcGFuIGNsYXNzPVwibWludXRlc1wiPiR7bWludXRlc31tPC9zcGFuPiA8c3BhbiBjbGFzcz1cInNlY29uZHNcIj4ke3NlY29uZHN9czwvc3Bhbj5gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh4KTtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lci50ZXh0KFwiRVhQSVJFRFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGltZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vc2F2ZSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aW1lJywgY291bnREb3duRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbn0pKGpRdWVyeSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vY29tcG9uZW50cy9wcmljaW5nXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9zdGlja3ktYmFubmVyXCI7XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICBjb25zdCBhcHAgPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vSW5pdCBUZXN0aW1vbmlhbCBTbGlkZXJcclxuICAgICAgYXBwLmluaXRUZXN0aW1vbmlhbFNsaWRlcigpO1xyXG5cclxuICAgICAgLy9Jbml0IEZ1biBGYWN0IENvdW50ZXJcclxuICAgICAgYXBwLmluaXRGdW5GYWN0Q291bnRlcigpO1xyXG5cclxuICAgICAgLy9IYW5kbGUgY29udGFjdCBmb3JtIHRhYnNcclxuICAgICAgJChcIi5jb250YWN0LWZvcm0gLnRhYi1pdGVtXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZUNvbnRhY3RGb3JtKTtcclxuXHJcbiAgICAgIC8vSGFuZGxlIHRvIHRvcCBidXR0b25cclxuICAgICAgJChcIi50by10b3BcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlVG9Ub3ApO1xyXG5cclxuICAgICAgLy9oYW5kbGUgcHJpY2luZyBpdGVtIGNsaWNrXHJcbiAgICAgICQoXCIuaXRlbS1wcmljZVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVQcmljaW5nSXRlbSk7XHJcblxyXG4gICAgICAvL0hhbmRsZSBJbWFnZSBDb21wYXJlIG9uIFJlYWRlciBNb2RlIHBhZ2VcclxuICAgICAgYXBwLmluaXRJbWFnZUNvbXBhcmUoKTtcclxuXHJcbiAgICAgIC8vQ2hhbmdlIERyYWN1bGEgSGVybyBJbWFnZVxyXG4gICAgICBhcHAuY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSgpO1xyXG5cclxuICAgICAgLy8gSGFuZGxlIEFmZmlsaWF0ZSBGb3JtXHJcbiAgICAgICQoXCIjYWZmaWxpYXRlLXJlZ2lzdGVyLWZvcm1cIikub24oXCJzdWJtaXRcIiwgYXBwLmhhbmRsZUFmZmlsaWF0ZUZvcm0pO1xyXG5cclxuICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5vbihcImNoYW5nZVwiLCBhcHAuaGFuZGxlUHJvZHVjdENoYW5nZSk7XHJcbiAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5vbihcImNoYW5nZVwiLCBhcHAuaGFuZGxlTWV0aG9kQ2hhbmdlKTtcclxuXHJcbiAgICAgIC8vIEhhbmRsZSBTZWFyY2hcclxuICAgICAgJChcIi5zZWFyY2gtYnRuXCIpLm9uKFwiY2xpY2tcIiwgYXBwLm9wZW5TZWFyY2gpO1xyXG4gICAgICAkKFwiLmNlbmNlbC1idG5cIikub24oXCJjbGlja1wiLCBhcHAuY2FuY2VsU2VhcmNoKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5TZWFyY2g6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICQoXCIuc2VhcmNoLWZvcm1cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAkKFwiLnNlYXJjaC1maWVsZFwiKS5mb2N1cygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjYW5jZWxTZWFyY2g6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICQoXCIuc2VhcmNoLWZvcm1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRUZXN0aW1vbmlhbFNsaWRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyBIb21lIHRlc3RpbW9uaWFsIHNsaWRlclxyXG4gICAgICAkKFwiLnNpbmdsZS10ZXN0aW1vbmlhbC1pdGVtc1wiKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgIHNwZWVkOiAyMDAwLFxyXG4gICAgICAgIGNvbnRlbnRQYWRkaW5nOiBcIjMwcHhcIixcclxuICAgICAgICBuZXh0QXJyb3c6IFwiLnJpZ2h0XCIsXHJcbiAgICAgICAgcHJldkFycm93OiBcIi5sZWZ0XCIsXHJcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy9nb29nbGUgZHJpdmVcclxuICAgICAgJChcIi50ZXN0aW1vbmlhbC1pdGVtc1wiKS5zbGljayh7XHJcbiAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgbmV4dEFycm93OiBcIi5yaWdodFwiLFxyXG4gICAgICAgIHByZXZBcnJvdzogXCIubGVmdFwiLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSk7XHJcbiAgICAgIC8vYWJvdXQgc2xpZGVyXHJcbiAgICAgICQoXCIuc2xpZGVyLW1haW5cIikuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgbmV4dEFycm93OiBcIi51cFwiLFxyXG4gICAgICAgIHByZXZBcnJvdzogXCIuZG93blwiLFxyXG4gICAgICAgIHZlcnRpY2FsOiB0cnVlLFxyXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgY2VudGVyUGFkZGluZzogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkKFwiLmNvbXBhdC1zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMzk5Ljk4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSk7XHJcbiAgICAgIC8vZHJhY3VsYSBzbGlkZXJcclxuICAgICAgJChcIi5kcmFjdWxhLXNsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRGdW5GYWN0Q291bnRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLmNvdW50ZXJcIikuY291bnRlclVwKHtcclxuICAgICAgICBkZWxheTogMTYsXHJcbiAgICAgICAgdGltZTogMTUwMCxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZUNvbnRhY3RGb3JtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIuY29udGFjdC1mb3JtIC50YWItaXRlbVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICQoXCIuY29udGFjdC1mb3JtLXdyYXBcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQoYC5jb250YWN0LWZvcm0td3JhcC5mb3JtLSR7JCh0aGlzKS5kYXRhKFwidGFyZ2V0XCIpfWApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVUb1RvcDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIFwiZmFzdFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlUHJpY2luZ0l0ZW06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIi5pdGVtLXByaWNlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0SW1hZ2VDb21wYXJlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIucmVhZGVyLW1vZGUtaW1hZ2UtY29tcGFyZVwiKS50d2VudHl0d2VudHkoe1xyXG4gICAgICAgIC8vICBIb3cgbXVjaCBvZiB0aGUgYmVmb3JlIGltYWdlIGlzIHZpc2libGUgd2hlbiB0aGUgcGFnZSBsb2Fkc1xyXG4gICAgICAgIGRlZmF1bHRfb2Zmc2V0X3BjdDogMC41LFxyXG5cclxuICAgICAgICAvLyBsYWJlbCB0ZXh0XHJcbiAgICAgICAgYmVmb3JlX2xhYmVsOiBcIkdlbmVyYWwgVmlld1wiLFxyXG4gICAgICAgIGFmdGVyX2xhYmVsOiBcIlJlYWRlciBNb2RlIFZpZXdcIixcclxuXHJcbiAgICAgICAgLy9vdmVybGF5XHJcbiAgICAgICAgbm9fb3ZlcmxheTogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNoYW5nZURyYWN1bGFIZXJvSW1hZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgaW1hZ2UgPSAkKFwiLmRyYWN1bGEtaGVyby1pbWFnZVwiKTtcclxuXHJcbiAgICAgIGlmICghaW1hZ2UubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VTcmMgPSBpbWFnZS5hdHRyKFwic3JjXCIpO1xyXG4gICAgICAgIGNvbnN0IGlzRGFyayA9IGltYWdlU3JjLmluY2x1ZGVzKFwiaGVyby1kYXJrXCIpO1xyXG4gICAgICAgIGltYWdlLmF0dHIoXHJcbiAgICAgICAgICBcInNyY1wiLFxyXG4gICAgICAgICAgaW1hZ2VTcmMucmVwbGFjZShcclxuICAgICAgICAgICAgaXNEYXJrID8gXCJoZXJvLWRhcmtcIiA6IFwiaGVyby1saWdodFwiLFxyXG4gICAgICAgICAgICBpc0RhcmsgPyBcImhlcm8tbGlnaHRcIiA6IFwiaGVyby1kYXJrXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAkKFwiLm1vZGUtYnRuXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoYC5tb2RlLWJ0bi5tb2RlLSR7aXNEYXJrID8gXCJsaWdodFwiIDogXCJkYXJrXCJ9YCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVBZmZpbGlhdGVGb3JtOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICB2YXIgZmFpbGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAvLyBQcm9kdWN0IHNlbGVjdGlvblxyXG4gICAgICBsZXQgcHJvZHVjdHMgPSBbXTtcclxuICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHByb2R1Y3RzLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFwcm9kdWN0cy5sZW5ndGgpIHtcclxuICAgICAgICAkKFwiW25hbWU9J3Byb2R1Y3RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCB0cnVlKTtcclxuICAgICAgICBmYWlsZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTWV0aG9kcyBTZWxlY3Rpb25cclxuICAgICAgbGV0IG1ldGhvZHMgPSBbXTtcclxuXHJcbiAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1ldGhvZHMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIW1ldGhvZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCB0cnVlKTtcclxuICAgICAgICBmYWlsZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCJbbmFtZT0nbWV0aG9kW10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL2Jvb3RzdHJhcCB2YWxpZGF0aW9uXHJcbiAgICAgIGNvbnN0IGZvcm0gPSAkKHRoaXMpLmdldCgwKTtcclxuXHJcbiAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBmYWlsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAkKGZvcm0pLmFkZENsYXNzKFwid2FzLXZhbGlkYXRlZFwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFmYWlsZWQpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gJChcIiNuYW1lXCIpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gJChcIiNlbWFpbFwiKS52YWwoKTtcclxuICAgICAgICBjb25zdCBwZW1haWwgPSAkKFwiI3BlbWFpbFwiKS52YWwoKTtcclxuICAgICAgICBjb25zdCBkb21haW4gPSAkKFwiI2RvbWFpblwiKS52YWwoKTtcclxuICAgICAgICBjb25zdCBzdGF0aXN0aWNzID0gJChcIiNzdGF0aXN0aWNzXCIpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHByb21vdGlvbl9tZXRob2RfZGVzY3JpcHRpb24gPSAkKFxyXG4gICAgICAgICAgXCIjcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgKS52YWwoKTtcclxuXHJcbiAgICAgICAgd3AuYWpheC5zZW5kKFwiYWZmaWxpYXRlX3JlZ2lzdGVyXCIsIHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICBwZW1haWw6IHBlbWFpbCxcclxuICAgICAgICAgICAgZG9tYWluOiBkb21haW4sXHJcbiAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cyxcclxuICAgICAgICAgICAgbWV0aG9kczogbWV0aG9kcyxcclxuICAgICAgICAgICAgc3RhdGlzdGljczogc3RhdGlzdGljcyxcclxuICAgICAgICAgICAgcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbjogcHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICQoXCIjc3VibWl0XCIpLmZpbmQoXCIuZmEtc3Bpbm5lclwiKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAkKFwiI2FmZmlsaWF0ZS1yZWdpc3Rlci1mb3JtXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIubWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgJChcIiNzdWJtaXRcIikuZmluZChcIi5mYS1zcGlubmVyXCIpLmFkZENsYXNzKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVQcm9kdWN0Q2hhbmdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICgkKFwiW25hbWU9J3Byb2R1Y3RbXSddOmNoZWNrZWRcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgJChcIltuYW1lPSdwcm9kdWN0W10nXVwiKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCJbbmFtZT0ncHJvZHVjdFtdJ11cIikuYXR0cihcInJlcXVpcmVkXCIsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZU1ldGhvZENoYW5nZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoJChcIltuYW1lPSdtZXRob2RbXSddOmNoZWNrZWRcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIltuYW1lPSdtZXRob2RbXSddXCIpLmF0dHIoXCJyZXF1aXJlZFwiLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICAkKGRvY3VtZW50KS5yZWFkeShhcHAuaW5pdCk7XHJcbn0pKGpRdWVyeSk7XHJcbiJdLCJuYW1lcyI6WyIkIiwiYXBwIiwiaW5pdCIsIm9uIiwiaGFuZGxlU3dpdGNoZXIiLCJoYW5kbGVMaWNlbnNlU3dpdGNoZXIiLCJlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwidG9nZ2xlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJsaWNlbnNlIiwiZGF0YSIsImRvY3VtZW50IiwicmVhZHkiLCJqUXVlcnkiLCJiYW5uZXIiLCJyZW1vdmUiLCJjb3VudGRvd24iLCJ0aW1lciIsImxlbmd0aCIsImRhdGVUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0b0lTT1N0cmluZyIsImNvdW50RG93bkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwieCIsInNldEludGVydmFsIiwibm93IiwiZGlzdGFuY2UiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImh0bWwiLCJjbGVhckludGVydmFsIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJpbml0VGVzdGltb25pYWxTbGlkZXIiLCJpbml0RnVuRmFjdENvdW50ZXIiLCJoYW5kbGVDb250YWN0Rm9ybSIsImhhbmRsZVRvVG9wIiwiaGFuZGxlUHJpY2luZ0l0ZW0iLCJpbml0SW1hZ2VDb21wYXJlIiwiY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSIsImhhbmRsZUFmZmlsaWF0ZUZvcm0iLCJoYW5kbGVQcm9kdWN0Q2hhbmdlIiwiaGFuZGxlTWV0aG9kQ2hhbmdlIiwib3BlblNlYXJjaCIsImNhbmNlbFNlYXJjaCIsImZvY3VzIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXJyb3dzIiwiYXV0b3BsYXlTcGVlZCIsInNwZWVkIiwiY29udGVudFBhZGRpbmciLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJhZGFwdGl2ZUhlaWdodCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiZG90cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ2ZXJ0aWNhbCIsImNvdW50ZXJVcCIsImRlbGF5IiwidGltZSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ0d2VudHl0d2VudHkiLCJkZWZhdWx0X29mZnNldF9wY3QiLCJiZWZvcmVfbGFiZWwiLCJhZnRlcl9sYWJlbCIsIm5vX292ZXJsYXkiLCJpbWFnZSIsImltYWdlU3JjIiwiYXR0ciIsImlzRGFyayIsImluY2x1ZGVzIiwicmVwbGFjZSIsImZhaWxlZCIsInByb2R1Y3RzIiwiZWFjaCIsInB1c2giLCJ2YWwiLCJtZXRob2RzIiwiZm9ybSIsImdldCIsImNoZWNrVmFsaWRpdHkiLCJuYW1lIiwiZW1haWwiLCJwZW1haWwiLCJkb21haW4iLCJzdGF0aXN0aWNzIiwicHJvbW90aW9uX21ldGhvZF9kZXNjcmlwdGlvbiIsIndwIiwiYWpheCIsInNlbmQiLCJiZWZvcmVTZW5kIiwiZmluZCIsInN1Y2Nlc3MiLCJoaWRlIiwic2hvdyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNvbXBsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==