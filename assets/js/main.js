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

;

(function ($) {
  var app = {
    init: function init() {
      app.initTestimonialSlider();
      app.initFunFactCounter();
      $('.contact-form .tab-item').on('click', app.handleContactForm);
      $('.to-top').on('click', app.handleToTop); //handle pricing item click

      $('.item-price').on('click', app.handlePricingItem);
      app.initImageCompare();
    },
    initTestimonialSlider: function initTestimonialSlider() {
      // Home testimonial slider
      $('.single-testimonial-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 3000,
        speed: 2000,
        contentPadding: '30px',
        nextArrow: '.right',
        prevArrow: '.left',
        adaptiveHeight: true
      });
      $('.testimonial-items').slick({
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
        arrows: true,
        nextArrow: '.right',
        prevArrow: '.left',
        responsive: [{
          breakpoint: 1199.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 3
          }
        }, {
          breakpoint: 991.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 2
          }
        }, {
          breakpoint: 767.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }]
      });
      $('.slider-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        nextArrow: '.up',
        prevArrow: '.down',
        vertical: true,
        centerMode: true,
        centerPadding: false,
        autoplaySpeed: 2000
      });
      $('.compat-slider').slick({
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
            centerPadding: '40px',
            slidesToShow: 5
          }
        }, {
          breakpoint: 1199.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 4
          }
        }, {
          breakpoint: 991.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 3
          }
        }, {
          breakpoint: 767.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 2
          }
        }]
      });
      $('.dracula-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [{
          breakpoint: 1199.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 3
          }
        }, {
          breakpoint: 991.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 2
          }
        }, {
          breakpoint: 767.98,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }]
      });
    },
    initFunFactCounter: function initFunFactCounter() {
      $('.counter').counterUp({
        delay: 16,
        time: 1500
      });
    },
    handleContactForm: function handleContactForm() {
      $('.contact-form .tab-item').removeClass('active');
      $(this).addClass('active');
      $('.contact-form-wrap').removeClass('active');
      $(".contact-form-wrap.form-".concat($(this).data('target'))).addClass('active');
    },
    handleToTop: function handleToTop() {
      $('html, body').animate({
        scrollTop: 0
      }, 'fast');
    },
    handlePricingItem: function handlePricingItem() {
      $('.item-price').removeClass('active');
      $(this).addClass('active');
    },
    initImageCompare: function initImageCompare() {
      $(".reader-mode-image-compare").twentytwenty({
        //  How much of the before image is visible when the page loads
        default_offset_pct: 0.5,
        // label text
        before_label: 'General View',
        after_label: 'Reader Mode View',
        //overlay
        no_overlay: true
      });
    }
  };
  $(document).ready(app.init);
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL3NvZnRsYWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NvZnRsYWIvLi9zcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBjb25zdCBhcHAgPSB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL0hhbmRsZSBwcmljaW5nIHN3aXRjaGVyXHJcbiAgICAgICAgICAgICQoJy5wcmljaW5nLXN3aXRjaGVyJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZVN3aXRjaGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBsaWNlbnNlIHN3aXRjaGVyXHJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZUxpY2Vuc2VTd2l0Y2hlcik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQoJy5wcmljZS10ZXh0JykucmVtb3ZlQ2xhc3MoJ2FubnVhbCBsaWZldGltZScpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykgPyAnYW5udWFsJyA6ICdsaWZldGltZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVMaWNlbnNlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGUnKS50ZXh0KCQodGhpcykudGV4dCgpKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpY2Vuc2UgPSAkKHRoaXMpLmRhdGEoJ2xpY2Vuc2UnKTtcclxuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnbGljZW5zZS0xIGxpY2Vuc2UtNSBsaWNlbnNlLTEwMCcpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoYGxpY2Vuc2UtJHtsaWNlbnNlfWApO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoYXBwLmluaXQpO1xyXG5cclxufSkoalF1ZXJ5KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvcHJpY2luZyc7XHJcblxyXG47KGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gICAgY29uc3QgYXBwID0ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYXBwLmluaXRUZXN0aW1vbmlhbFNsaWRlcigpO1xyXG4gICAgICAgICAgICBhcHAuaW5pdEZ1bkZhY3RDb3VudGVyKCk7XHJcblxyXG4gICAgICAgICAgICAkKCcuY29udGFjdC1mb3JtIC50YWItaXRlbScpLm9uKCdjbGljaycsIGFwcC5oYW5kbGVDb250YWN0Rm9ybSk7XHJcbiAgICAgICAgICAgICQoJy50by10b3AnKS5vbignY2xpY2snLCBhcHAuaGFuZGxlVG9Ub3ApO1xyXG5cclxuICAgICAgICAgICAgLy9oYW5kbGUgcHJpY2luZyBpdGVtIGNsaWNrXHJcbiAgICAgICAgICAgICQoJy5pdGVtLXByaWNlJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZVByaWNpbmdJdGVtKVxyXG5cclxuICAgICAgICAgICAgYXBwLmluaXRJbWFnZUNvbXBhcmUoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0VGVzdGltb25pYWxTbGlkZXI6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEhvbWUgdGVzdGltb25pYWwgc2xpZGVyXHJcbiAgICAgICAgICAgICQoJy5zaW5nbGUtdGVzdGltb25pYWwtaXRlbXMnKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICAgICAgICAgIHNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFBhZGRpbmc6ICczMHB4JyxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJy5yaWdodCcsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICcubGVmdCcsXHJcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcudGVzdGltb25pYWwtaXRlbXMnKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc2MHB4JyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICcucmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnLmxlZnQnLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2Ny45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItbWFpbicpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzonLnVwJyxcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzonLmRvd24nLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCgnLmNvbXBhdC1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCgnLmRyYWN1bGEtc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc2MHB4JyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5pdEZ1bkZhY3RDb3VudGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5jb3VudGVyJykuY291bnRlclVwKHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAxNixcclxuICAgICAgICAgICAgICAgIHRpbWU6IDE1MDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlQ29udGFjdEZvcm06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLmNvbnRhY3QtZm9ybSAudGFiLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmNvbnRhY3QtZm9ybS13cmFwJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKGAuY29udGFjdC1mb3JtLXdyYXAuZm9ybS0keyQodGhpcykuZGF0YSgndGFyZ2V0Jyl9YCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVRvVG9wOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCAnZmFzdCcpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVByaWNpbmdJdGVtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5pdGVtLXByaWNlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0SW1hZ2VDb21wYXJlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIucmVhZGVyLW1vZGUtaW1hZ2UtY29tcGFyZVwiKS50d2VudHl0d2VudHkoe1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICBIb3cgbXVjaCBvZiB0aGUgYmVmb3JlIGltYWdlIGlzIHZpc2libGUgd2hlbiB0aGUgcGFnZSBsb2Fkc1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdF9vZmZzZXRfcGN0OiAwLjUsXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbGFiZWwgdGV4dFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlX2xhYmVsOiAnR2VuZXJhbCBWaWV3JyxcclxuICAgICAgICAgICAgICAgIGFmdGVyX2xhYmVsOiAnUmVhZGVyIE1vZGUgVmlldycsXHJcblxyXG4gICAgICAgICAgICAgICAgLy9vdmVybGF5XHJcbiAgICAgICAgICAgICAgICBub19vdmVybGF5OiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxuXHJcblxyXG59KShqUXVlcnkpOyJdLCJuYW1lcyI6WyIkIiwiYXBwIiwiaW5pdCIsIm9uIiwiaGFuZGxlU3dpdGNoZXIiLCJoYW5kbGVMaWNlbnNlU3dpdGNoZXIiLCJlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwidG9nZ2xlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJsaWNlbnNlIiwiZGF0YSIsImRvY3VtZW50IiwicmVhZHkiLCJqUXVlcnkiLCJpbml0VGVzdGltb25pYWxTbGlkZXIiLCJpbml0RnVuRmFjdENvdW50ZXIiLCJoYW5kbGVDb250YWN0Rm9ybSIsImhhbmRsZVRvVG9wIiwiaGFuZGxlUHJpY2luZ0l0ZW0iLCJpbml0SW1hZ2VDb21wYXJlIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXJyb3dzIiwiYXV0b3BsYXlTcGVlZCIsInNwZWVkIiwiY29udGVudFBhZGRpbmciLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJhZGFwdGl2ZUhlaWdodCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiZG90cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ2ZXJ0aWNhbCIsImNvdW50ZXJVcCIsImRlbGF5IiwidGltZSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ0d2VudHl0d2VudHkiLCJkZWZhdWx0X29mZnNldF9wY3QiLCJiZWZvcmVfbGFiZWwiLCJhZnRlcl9sYWJlbCIsIm5vX292ZXJsYXkiXSwic291cmNlUm9vdCI6IiJ9