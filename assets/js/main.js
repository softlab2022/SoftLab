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
      $('.price-text').removeClass('license-1 license-5').addClass("license-".concat(license));
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
        prevArrow: '.left'
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
          breakpoint: 1199,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 3
          }
        }, {
          breakpoint: 991,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 2
          }
        }, {
          breakpoint: 767,
          settings: {
            arrows: false,
            centerMode: true,
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
    }
  };
  $(document).ready(app.init);
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qm5CLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3VDLFNBQWQsQ0FBd0I7UUFDcEJDLEtBQUssRUFBRSxFQURhO1FBRXBCQyxJQUFJLEVBQUU7TUFGYyxDQUF4QjtJQUlILENBeEVPO0lBMEVSckIsaUJBQWlCLEVBQUUsNkJBQVk7TUFDM0JwQixDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2Qk8sV0FBN0IsQ0FBeUMsUUFBekM7TUFDQVAsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxRQUFSLENBQWlCLFFBQWpCO01BRUFSLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCTyxXQUF4QixDQUFvQyxRQUFwQztNQUNBUCxDQUFDLG1DQUE0QkEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYyxJQUFSLENBQWEsUUFBYixDQUE1QixFQUFELENBQXVETixRQUF2RCxDQUFnRSxRQUFoRTtJQUNILENBaEZPO0lBa0ZSYSxXQUFXLEVBQUUsdUJBQVk7TUFDckJyQixDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCMEMsT0FBaEIsQ0FBd0I7UUFBQ0MsU0FBUyxFQUFFO01BQVosQ0FBeEIsRUFBd0MsTUFBeEM7SUFDSCxDQXBGTztJQXNGUnJCLGlCQUFpQixFQUFFLDZCQUFZO01BQzNCdEIsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQk8sV0FBakIsQ0FBNkIsUUFBN0I7TUFDQVAsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxRQUFSLENBQWlCLFFBQWpCO0lBQ0g7RUF6Rk8sQ0FBWjtFQTRGQVIsQ0FBQyxDQUFDZSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQmYsR0FBRyxDQUFDQyxJQUF0QjtBQUdILENBakdBLEVBaUdFZSxNQWpHRixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24gKCQpIHtcclxuICAgIGNvbnN0IGFwcCA9IHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vSGFuZGxlIHByaWNpbmcgc3dpdGNoZXJcclxuICAgICAgICAgICAgJCgnLnByaWNpbmctc3dpdGNoZXInKS5vbignY2xpY2snLCBhcHAuaGFuZGxlU3dpdGNoZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlIGxpY2Vuc2Ugc3dpdGNoZXJcclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5vbignY2xpY2snLCBhcHAuaGFuZGxlTGljZW5zZVN3aXRjaGVyKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnYW5udWFsIGxpZmV0aW1lJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICdhbm51YWwnIDogJ2xpZmV0aW1lJyk7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUxpY2Vuc2VTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZScpLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGljZW5zZSA9ICQodGhpcykuZGF0YSgnbGljZW5zZScpO1xyXG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdsaWNlbnNlLTEgbGljZW5zZS01JylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhgbGljZW5zZS0ke2xpY2Vuc2V9YCk7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShhcHAuaW5pdCk7XHJcblxyXG59KShqUXVlcnkpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9wcmljaW5nJztcclxuXHJcbjsoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICBjb25zdCBhcHAgPSB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhcHAuaW5pdFRlc3RpbW9uaWFsU2xpZGVyKCk7XHJcbiAgICAgICAgICAgIGFwcC5pbml0RnVuRmFjdENvdW50ZXIoKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5jb250YWN0LWZvcm0gLnRhYi1pdGVtJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZUNvbnRhY3RGb3JtKTtcclxuICAgICAgICAgICAgJCgnLnRvLXRvcCcpLm9uKCdjbGljaycsIGFwcC5oYW5kbGVUb1RvcCk7XHJcblxyXG4gICAgICAgICAgICAvL2hhbmRsZSBwcmljaW5nIGl0ZW0gY2xpY2tcclxuICAgICAgICAgICAgJCgnLml0ZW0tcHJpY2UnKS5vbignY2xpY2snLCBhcHAuaGFuZGxlUHJpY2luZ0l0ZW0pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5pdFRlc3RpbW9uaWFsU2xpZGVyOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBIb21lIHRlc3RpbW9uaWFsIHNsaWRlclxyXG4gICAgICAgICAgICAkKCcuc2luZ2xlLXRlc3RpbW9uaWFsLWl0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRQYWRkaW5nOiAnMzBweCcsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICcucmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnLmxlZnQnLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJy50ZXN0aW1vbmlhbC1pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzYwcHgnLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJy5yaWdodCcsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICcubGVmdCcsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5pdEZ1bkZhY3RDb3VudGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5jb3VudGVyJykuY291bnRlclVwKHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAxNixcclxuICAgICAgICAgICAgICAgIHRpbWU6IDE1MDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlQ29udGFjdEZvcm06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLmNvbnRhY3QtZm9ybSAudGFiLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmNvbnRhY3QtZm9ybS13cmFwJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKGAuY29udGFjdC1mb3JtLXdyYXAuZm9ybS0keyQodGhpcykuZGF0YSgndGFyZ2V0Jyl9YCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVRvVG9wOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCAnZmFzdCcpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVByaWNpbmdJdGVtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5pdGVtLXByaWNlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoYXBwLmluaXQpO1xyXG5cclxuXHJcbn0pKGpRdWVyeSk7Il0sIm5hbWVzIjpbIiQiLCJhcHAiLCJpbml0Iiwib24iLCJoYW5kbGVTd2l0Y2hlciIsImhhbmRsZUxpY2Vuc2VTd2l0Y2hlciIsImUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaGFzQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsImxpY2Vuc2UiLCJkYXRhIiwiZG9jdW1lbnQiLCJyZWFkeSIsImpRdWVyeSIsImluaXRUZXN0aW1vbmlhbFNsaWRlciIsImluaXRGdW5GYWN0Q291bnRlciIsImhhbmRsZUNvbnRhY3RGb3JtIiwiaGFuZGxlVG9Ub3AiLCJoYW5kbGVQcmljaW5nSXRlbSIsInNsaWNrIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImFycm93cyIsImF1dG9wbGF5U3BlZWQiLCJzcGVlZCIsImNvbnRlbnRQYWRkaW5nIiwibmV4dEFycm93IiwicHJldkFycm93IiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJkb3RzIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImNvdW50ZXJVcCIsImRlbGF5IiwidGltZSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiXSwic291cmNlUm9vdCI6IiJ9