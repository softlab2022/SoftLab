/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/button.js":
/*!*************************************!*\
  !*** ./src/js/components/button.js ***!
  \*************************************/
/***/ (() => {

var calculateAngle = function calculateAngle(e, item, parent) {
  var dropShadowColor = "rgba(0, 0, 0, 0.3)";

  if (parent.getAttribute('data-filter-color') !== null) {
    dropShadowColor = parent.getAttribute('data-filter-color');
  } // Get the x position of the users mouse, relative to the button itself


  var x = Math.abs(item.getBoundingClientRect().x - e.clientX); // Get the y position relative to the button

  var y = Math.abs(item.getBoundingClientRect().y - e.clientY); // Calculate half the width and height

  var halfWidth = item.getBoundingClientRect().width / 2;
  var halfHeight = item.getBoundingClientRect().height / 2; // Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
  // Changing these numbers will change the depth of the effect.

  var calcAngleX = (x - halfWidth) / 6;
  var calcAngleY = (y - halfHeight) / 4; // Set the items transform CSS property

  item.style.transform = "rotateY(".concat(calcAngleX, "deg) rotateX(").concat(calcAngleY, "deg) scale(1.15)"); // And set its container's perspective.

  parent.style.perspective = "".concat(halfWidth * 2, "px");
  item.style.perspective = "".concat(halfWidth * 3, "px");

  if (parent.getAttribute('data-custom-perspective') !== null) {
    parent.style.perspective = "".concat(parent.getAttribute('data-custom-perspective'));
  } // Reapply this to the shadow, with different dividers


  var calcShadowX = (x - halfWidth) / 3;
  var calcShadowY = (y - halfHeight) / 3; // Add a filter shadow - this is more performant to animate than a regular box shadow.

  item.style.filter = "drop-shadow(".concat(-calcShadowX, "px ").concat(calcShadowY, "px 15px ").concat(dropShadowColor, ")");
};

document.querySelectorAll('.button').forEach(function (item) {
  item.addEventListener('mouseenter', function (e) {
    calculateAngle(e, this.querySelector('span'), this);
  });
  item.addEventListener('mousemove', function (e) {
    calculateAngle(e, this.querySelector('span'), this);
  });
  item.addEventListener('mouseleave', function (e) {
    var dropShadowColor = "rgba(0, 0, 0, 0.3)";

    if (item.getAttribute('data-filter-color') !== null) {
      dropShadowColor = item.getAttribute('data-filter-color');
    }

    item.querySelector('span').style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    item.querySelector('span').style.filter = "drop-shadow(0 10px 15px ".concat(dropShadowColor, ")");
  });
}); // // create account js

$('.message a').click(function () {
  $('form').animate({
    height: "toggle",
    opacity: "toggle"
  }, "slow");
}); // // FILTER js !
// const elts = {
//     text1: document.getElementById("text1"),
//     text2: document.getElementById("text2")
// };
// const texts = [
//     "We",
//     "Build",
//     "Awesome",
//     "Solutions",
//     "for",
//     "WordPress",
//     "by SOFTLAB"
// ];
// // Controls the speed of morphing.
// const morphTime = 1;
// const cooldownTime = 0.25;
// let textIndex = texts.length - 1;
// let time = new Date();
// let morph = 0;
// let cooldown = cooldownTime;
// elts.text1.textContent = texts[textIndex % texts.length];
// elts.text2.textContent = texts[(textIndex + 1) % texts.length];
// function doMorph() {
//     morph -= cooldown;
//     cooldown = 0;
//     let fraction = morph / morphTime;
//     if (fraction > 1) {
//     cooldown = cooldownTime;
//     fraction = 1;
//     }
//     setMorph(fraction);
// }
// // A lot of the magic happens here, this is what applies the blur filter to the text.
// function setMorph(fraction) {
//     // fraction = Math.cos(fraction * Math.PI) / -2 + .5;
//     elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
//     elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
//     fraction = 1 - fraction;
//     elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
//     elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
//     elts.text1.textContent = texts[textIndex % texts.length];
//     elts.text2.textContent = texts[(textIndex + 1) % texts.length];
// }
// function doCooldown() {
//     morph = 0;
//     elts.text2.style.filter = "";
//     elts.text2.style.opacity = "100%";
//     elts.text1.style.filter = "";
//     elts.text1.style.opacity = "0%";
// }
// // Animation loop, which is called every frame.
// function animate() {
//     requestAnimationFrame(animate);
//     let newTime = new Date();
//     let shouldIncrementIndex = cooldown > 0;
//     let dt = (newTime - time) / 1500;
//     time = newTime;
//     cooldown -= dt;
//     if (cooldown <= 0) {
//     if (shouldIncrementIndex) {
//         textIndex++;
//     }
//     doMorph();
//     } 
//     else {
//     doCooldown();
//     }
// }
// // Start the animation.
// animate();

$('[data-text]').on('keyup', function () {
  $(this).attr('data-text', $(this).text());
});

/***/ }),

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
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/button */ "./src/js/components/button.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_button__WEBPACK_IMPORTED_MODULE_2__);



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
      app.changeDraculaHeroImage();
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
    },
    changeDraculaHeroImage: function changeDraculaHeroImage() {
      var image = $('.dracula-hero-image');
      setInterval(function () {
        var imageSrc = image.attr('src');
        var isDark = imageSrc.includes('hero-dark');
        image.attr('src', imageSrc.replace(isDark ? 'hero-dark' : 'hero-light', isDark ? 'hero-light' : 'hero-dark'));
        $('.mode-btn').removeClass('active');
        $(".mode-btn.mode-".concat(isDark ? 'light' : 'dark')).addClass('active');
      }, 2000);
    }
  };
  $(document).ready(app.init);
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkYsTUFBTSxHQUFHLFdBQUgsR0FBaUIsWUFBeEMsRUFBc0RBLE1BQU0sR0FBRyxZQUFILEdBQWtCLFdBQTlFLENBQWxCO1FBRUEvRSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVXLFdBQWYsQ0FBMkIsUUFBM0I7UUFDQVgsQ0FBQywwQkFBbUIrRSxNQUFNLEdBQUcsT0FBSCxHQUFhLE1BQXRDLEVBQUQsQ0FBaURuRSxRQUFqRCxDQUEwRCxRQUExRDtNQUVILENBUlUsRUFRUixJQVJRLENBQVg7SUFTSDtFQTlOTyxDQUFaO0VBa09BWixDQUFDLENBQUNMLFFBQUQsQ0FBRCxDQUFZdUIsS0FBWixDQUFrQlgsR0FBRyxDQUFDQyxJQUF0QjtBQUdILENBdk9BLEVBdU9FVyxNQXZPRixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL2NvbXBvbmVudHMvcHJpY2luZy5qcyIsIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lci5qcyIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGNhbGN1bGF0ZUFuZ2xlID0gZnVuY3Rpb24oZSwgaXRlbSwgcGFyZW50KSB7XG4gICAgbGV0IGRyb3BTaGFkb3dDb2xvciA9IGByZ2JhKDAsIDAsIDAsIDAuMylgXG4gICAgaWYocGFyZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1maWx0ZXItY29sb3InKSAhPT0gbnVsbCkge1xuICAgICAgICBkcm9wU2hhZG93Q29sb3IgPSBwYXJlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlci1jb2xvcicpO1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgeCBwb3NpdGlvbiBvZiB0aGUgdXNlcnMgbW91c2UsIHJlbGF0aXZlIHRvIHRoZSBidXR0b24gaXRzZWxmXG4gICAgbGV0IHggPSBNYXRoLmFicyhpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnggLSBlLmNsaWVudFgpO1xuICAgIC8vIEdldCB0aGUgeSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgYnV0dG9uXG4gICAgbGV0IHkgPSBNYXRoLmFicyhpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgLSBlLmNsaWVudFkpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGhhbGYgdGhlIHdpZHRoIGFuZCBoZWlnaHRcbiAgICBsZXQgaGFsZldpZHRoICA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLyAyO1xuICAgIGxldCBoYWxmSGVpZ2h0ID0gaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLyAyO1xuXG4gICAgLy8gVXNlIHRoaXMgdG8gY3JlYXRlIGFuIGFuZ2xlLiBJIGhhdmUgZGl2aWRlZCBieSA2IGFuZCA0IHJlc3BlY3RpdmVseSBzbyB0aGUgZWZmZWN0IGxvb2tzIGdvb2QuXG4gICAgLy8gQ2hhbmdpbmcgdGhlc2UgbnVtYmVycyB3aWxsIGNoYW5nZSB0aGUgZGVwdGggb2YgdGhlIGVmZmVjdC5cbiAgICBsZXQgY2FsY0FuZ2xlWCA9ICh4IC0gaGFsZldpZHRoKSAvIDY7XG4gICAgbGV0IGNhbGNBbmdsZVkgPSAoeSAtIGhhbGZIZWlnaHQpIC8gNDtcblxuICAgIC8vIFNldCB0aGUgaXRlbXMgdHJhbnNmb3JtIENTUyBwcm9wZXJ0eVxuICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHtjYWxjQW5nbGVYfWRlZykgcm90YXRlWCgke2NhbGNBbmdsZVl9ZGVnKSBzY2FsZSgxLjE1KWA7XG4gICAgXG4gICAgLy8gQW5kIHNldCBpdHMgY29udGFpbmVyJ3MgcGVyc3BlY3RpdmUuXG4gICAgcGFyZW50LnN0eWxlLnBlcnNwZWN0aXZlID0gYCR7aGFsZldpZHRoICogMn1weGBcbiAgICBpdGVtLnN0eWxlLnBlcnNwZWN0aXZlID0gYCR7aGFsZldpZHRoICogM31weGBcblxuICAgIGlmKHBhcmVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3VzdG9tLXBlcnNwZWN0aXZlJykgIT09IG51bGwpIHtcbiAgICAgICAgcGFyZW50LnN0eWxlLnBlcnNwZWN0aXZlID0gYCR7cGFyZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jdXN0b20tcGVyc3BlY3RpdmUnKX1gXG4gICAgfVxuXG4gICAgLy8gUmVhcHBseSB0aGlzIHRvIHRoZSBzaGFkb3csIHdpdGggZGlmZmVyZW50IGRpdmlkZXJzXG4gICAgbGV0IGNhbGNTaGFkb3dYID0gKHggLSBoYWxmV2lkdGgpIC8gMztcbiAgICBsZXQgY2FsY1NoYWRvd1kgPSAoeSAtIGhhbGZIZWlnaHQpIC8gMztcbiAgICBcbiAgICAvLyBBZGQgYSBmaWx0ZXIgc2hhZG93IC0gdGhpcyBpcyBtb3JlIHBlcmZvcm1hbnQgdG8gYW5pbWF0ZSB0aGFuIGEgcmVndWxhciBib3ggc2hhZG93LlxuICAgIGl0ZW0uc3R5bGUuZmlsdGVyID0gYGRyb3Atc2hhZG93KCR7LWNhbGNTaGFkb3dYfXB4ICR7Y2FsY1NoYWRvd1l9cHggMTVweCAke2Ryb3BTaGFkb3dDb2xvcn0pYDtcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbicpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY2FsY3VsYXRlQW5nbGUoZSwgdGhpcy5xdWVyeVNlbGVjdG9yKCdzcGFuJyksIHRoaXMpO1xuICAgIH0pO1xuXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNhbGN1bGF0ZUFuZ2xlKGUsIHRoaXMucXVlcnlTZWxlY3Rvcignc3BhbicpLCB0aGlzKTtcbiAgICB9KTtcblxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgbGV0IGRyb3BTaGFkb3dDb2xvciA9IGByZ2JhKDAsIDAsIDAsIDAuMylgXG4gICAgICAgIGlmKGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlci1jb2xvcicpICE9PSBudWxsKSB7XG4gICAgICAgICAgICBkcm9wU2hhZG93Q29sb3IgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1maWx0ZXItY29sb3InKVxuICAgICAgICB9XG4gICAgICAgIGl0ZW0ucXVlcnlTZWxlY3Rvcignc3BhbicpLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMGRlZykgc2NhbGUoMSlgO1xuICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5zdHlsZS5maWx0ZXIgPSBgZHJvcC1zaGFkb3coMCAxMHB4IDE1cHggJHtkcm9wU2hhZG93Q29sb3J9KWA7XG4gICAgfSk7XG59KVxuXG5cbi8vIC8vIGNyZWF0ZSBhY2NvdW50IGpzXG4kKCcubWVzc2FnZSBhJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAkKCdmb3JtJykuYW5pbWF0ZSh7aGVpZ2h0OiBcInRvZ2dsZVwiLCBvcGFjaXR5OiBcInRvZ2dsZVwifSwgXCJzbG93XCIpO1xufSk7XG5cbi8vIC8vIEZJTFRFUiBqcyAhXG4vLyBjb25zdCBlbHRzID0ge1xuLy8gICAgIHRleHQxOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQxXCIpLFxuLy8gICAgIHRleHQyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQyXCIpXG4vLyB9O1xuXG5cbi8vIGNvbnN0IHRleHRzID0gW1xuLy8gICAgIFwiV2VcIixcbi8vICAgICBcIkJ1aWxkXCIsXG4vLyAgICAgXCJBd2Vzb21lXCIsXG4vLyAgICAgXCJTb2x1dGlvbnNcIixcbi8vICAgICBcImZvclwiLFxuLy8gICAgIFwiV29yZFByZXNzXCIsXG4vLyAgICAgXCJieSBTT0ZUTEFCXCJcbi8vIF07XG5cbi8vIC8vIENvbnRyb2xzIHRoZSBzcGVlZCBvZiBtb3JwaGluZy5cbi8vIGNvbnN0IG1vcnBoVGltZSA9IDE7XG4vLyBjb25zdCBjb29sZG93blRpbWUgPSAwLjI1O1xuXG4vLyBsZXQgdGV4dEluZGV4ID0gdGV4dHMubGVuZ3RoIC0gMTtcbi8vIGxldCB0aW1lID0gbmV3IERhdGUoKTtcbi8vIGxldCBtb3JwaCA9IDA7XG4vLyBsZXQgY29vbGRvd24gPSBjb29sZG93blRpbWU7XG5cbi8vIGVsdHMudGV4dDEudGV4dENvbnRlbnQgPSB0ZXh0c1t0ZXh0SW5kZXggJSB0ZXh0cy5sZW5ndGhdO1xuLy8gZWx0cy50ZXh0Mi50ZXh0Q29udGVudCA9IHRleHRzWyh0ZXh0SW5kZXggKyAxKSAlIHRleHRzLmxlbmd0aF07XG5cbi8vIGZ1bmN0aW9uIGRvTW9ycGgoKSB7XG4vLyAgICAgbW9ycGggLT0gY29vbGRvd247XG4vLyAgICAgY29vbGRvd24gPSAwO1xuICAgIFxuLy8gICAgIGxldCBmcmFjdGlvbiA9IG1vcnBoIC8gbW9ycGhUaW1lO1xuICAgIFxuLy8gICAgIGlmIChmcmFjdGlvbiA+IDEpIHtcbi8vICAgICBjb29sZG93biA9IGNvb2xkb3duVGltZTtcbi8vICAgICBmcmFjdGlvbiA9IDE7XG4vLyAgICAgfVxuICAgIFxuLy8gICAgIHNldE1vcnBoKGZyYWN0aW9uKTtcbi8vIH1cblxuLy8gLy8gQSBsb3Qgb2YgdGhlIG1hZ2ljIGhhcHBlbnMgaGVyZSwgdGhpcyBpcyB3aGF0IGFwcGxpZXMgdGhlIGJsdXIgZmlsdGVyIHRvIHRoZSB0ZXh0LlxuLy8gZnVuY3Rpb24gc2V0TW9ycGgoZnJhY3Rpb24pIHtcbi8vICAgICAvLyBmcmFjdGlvbiA9IE1hdGguY29zKGZyYWN0aW9uICogTWF0aC5QSSkgLyAtMiArIC41O1xuICAgIFxuLy8gICAgIGVsdHMudGV4dDIuc3R5bGUuZmlsdGVyID0gYGJsdXIoJHtNYXRoLm1pbig4IC8gZnJhY3Rpb24gLSA4LCAxMDApfXB4KWA7XG4vLyAgICAgZWx0cy50ZXh0Mi5zdHlsZS5vcGFjaXR5ID0gYCR7TWF0aC5wb3coZnJhY3Rpb24sIDAuNCkgKiAxMDB9JWA7XG4gICAgXG4vLyAgICAgZnJhY3Rpb24gPSAxIC0gZnJhY3Rpb247XG4vLyAgICAgZWx0cy50ZXh0MS5zdHlsZS5maWx0ZXIgPSBgYmx1cigke01hdGgubWluKDggLyBmcmFjdGlvbiAtIDgsIDEwMCl9cHgpYDtcbi8vICAgICBlbHRzLnRleHQxLnN0eWxlLm9wYWNpdHkgPSBgJHtNYXRoLnBvdyhmcmFjdGlvbiwgMC40KSAqIDEwMH0lYDtcbiAgICBcbi8vICAgICBlbHRzLnRleHQxLnRleHRDb250ZW50ID0gdGV4dHNbdGV4dEluZGV4ICUgdGV4dHMubGVuZ3RoXTtcbi8vICAgICBlbHRzLnRleHQyLnRleHRDb250ZW50ID0gdGV4dHNbKHRleHRJbmRleCArIDEpICUgdGV4dHMubGVuZ3RoXTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZG9Db29sZG93bigpIHtcbi8vICAgICBtb3JwaCA9IDA7XG4gICAgXG4vLyAgICAgZWx0cy50ZXh0Mi5zdHlsZS5maWx0ZXIgPSBcIlwiO1xuLy8gICAgIGVsdHMudGV4dDIuc3R5bGUub3BhY2l0eSA9IFwiMTAwJVwiO1xuICAgIFxuLy8gICAgIGVsdHMudGV4dDEuc3R5bGUuZmlsdGVyID0gXCJcIjtcbi8vICAgICBlbHRzLnRleHQxLnN0eWxlLm9wYWNpdHkgPSBcIjAlXCI7XG4vLyB9XG5cbi8vIC8vIEFuaW1hdGlvbiBsb29wLCB3aGljaCBpcyBjYWxsZWQgZXZlcnkgZnJhbWUuXG4vLyBmdW5jdGlvbiBhbmltYXRlKCkge1xuLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICBcbi8vICAgICBsZXQgbmV3VGltZSA9IG5ldyBEYXRlKCk7XG4vLyAgICAgbGV0IHNob3VsZEluY3JlbWVudEluZGV4ID0gY29vbGRvd24gPiAwO1xuLy8gICAgIGxldCBkdCA9IChuZXdUaW1lIC0gdGltZSkgLyAxNTAwO1xuLy8gICAgIHRpbWUgPSBuZXdUaW1lO1xuICAgIFxuLy8gICAgIGNvb2xkb3duIC09IGR0O1xuICAgIFxuLy8gICAgIGlmIChjb29sZG93biA8PSAwKSB7XG4vLyAgICAgaWYgKHNob3VsZEluY3JlbWVudEluZGV4KSB7XG4vLyAgICAgICAgIHRleHRJbmRleCsrO1xuLy8gICAgIH1cbiAgICBcbi8vICAgICBkb01vcnBoKCk7XG4vLyAgICAgfSBcbi8vICAgICBlbHNlIHtcbi8vICAgICBkb0Nvb2xkb3duKCk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAvLyBTdGFydCB0aGUgYW5pbWF0aW9uLlxuLy8gYW5pbWF0ZSgpO1xuXG4kKCdbZGF0YS10ZXh0XScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCl7XG4gICAgJCh0aGlzKS5hdHRyKCdkYXRhLXRleHQnLCAkKHRoaXMpLnRleHQoKSk7XG4gIH0pOyIsIjsoZnVuY3Rpb24gKCQpIHtcbiAgICBjb25zdCBhcHAgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vSGFuZGxlIHByaWNpbmcgc3dpdGNoZXJcbiAgICAgICAgICAgICQoJy5wcmljaW5nLXN3aXRjaGVyJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZVN3aXRjaGVyKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIGxpY2Vuc2Ugc3dpdGNoZXJcbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZUxpY2Vuc2VTd2l0Y2hlcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdhbm51YWwgbGlmZXRpbWUnKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSA/ICdhbm51YWwnIDogJ2xpZmV0aW1lJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYW5kbGVMaWNlbnNlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoJy5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGUnKS50ZXh0KCQodGhpcykudGV4dCgpKTtcblxuICAgICAgICAgICAgJCgnLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgY29uc3QgbGljZW5zZSA9ICQodGhpcykuZGF0YSgnbGljZW5zZScpO1xuICAgICAgICAgICAgJCgnLnByaWNlLXRleHQnKS5yZW1vdmVDbGFzcygnbGljZW5zZS0xIGxpY2Vuc2UtNSBsaWNlbnNlLTEwMCcpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGBsaWNlbnNlLSR7bGljZW5zZX1gKTtcblxuICAgICAgICB9LFxuXG5cbiAgICB9XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShhcHAuaW5pdCk7XG5cbn0pKGpRdWVyeSk7IiwiOyhmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBiYW5uZXIgPSAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXInKTtcblxuICAgICAgICAvL0Nsb3NlIGJhbm5lclxuICAgICAgICAkKCcuYmFubmVyLWNsb3NlJywgYmFubmVyKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBiYW5uZXIucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vQmFubmVyIGNvdW50ZG93blxuICAgICAgICBjb25zdCBjb3VudGRvd24gPSAkKCcuYmFubmVyLWNvdW50ZG93bicsIGJhbm5lcik7XG4gICAgICAgIGNvbnN0IHRpbWVyID0gJCgnLnRpbWVyJywgYmFubmVyKTtcblxuICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDI0ICogNjAgKiA2MCAqIDEwMDAgKyAyICogNjAgKiA2MCAqIDEwMDApLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICBsZXQgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKGRhdGVUaW1lKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgICAgIC8vY2hlY2sgaWYgdGhlcmUgaXMgYSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZScpKSB7XG4gICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lJyk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgY29uc3QgeCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgICAgIHRpbWVyLmh0bWwoYDxzcGFuIGNsYXNzPVwiZGF5c1wiPiR7ZGF5c31kPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhvdXJzXCI+JHtob3Vyc31oPC9zcGFuPiA8c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIj4ke21pbnV0ZXN9bTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzZWNvbmRzXCI+JHtzZWNvbmRzfXM8L3NwYW4+YCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoeCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVyLnRleHQoXCJFWFBJUkVEXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vc2F2ZSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGltZScsIGNvdW50RG93bkRhdGUpO1xuXG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG59KShqUXVlcnkpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9wcmljaW5nJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3N0aWNreS1iYW5uZXInO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYnV0dG9uJztcblxuOyhmdW5jdGlvbiAoJCkge1xuXG4gICAgY29uc3QgYXBwID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhcHAuaW5pdFRlc3RpbW9uaWFsU2xpZGVyKCk7XG4gICAgICAgICAgICBhcHAuaW5pdEZ1bkZhY3RDb3VudGVyKCk7XG5cbiAgICAgICAgICAgICQoJy5jb250YWN0LWZvcm0gLnRhYi1pdGVtJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZUNvbnRhY3RGb3JtKTtcbiAgICAgICAgICAgICQoJy50by10b3AnKS5vbignY2xpY2snLCBhcHAuaGFuZGxlVG9Ub3ApO1xuXG4gICAgICAgICAgICAvL2hhbmRsZSBwcmljaW5nIGl0ZW0gY2xpY2tcbiAgICAgICAgICAgICQoJy5pdGVtLXByaWNlJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZVByaWNpbmdJdGVtKVxuXG4gICAgICAgICAgICBhcHAuaW5pdEltYWdlQ29tcGFyZSgpO1xuXG4gICAgICAgICAgICBhcHAuY2hhbmdlRHJhY3VsYUhlcm9JbWFnZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRUZXN0aW1vbmlhbFNsaWRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvLyBIb21lIHRlc3RpbW9uaWFsIHNsaWRlclxuICAgICAgICAgICAgJCgnLnNpbmdsZS10ZXN0aW1vbmlhbC1pdGVtcycpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDIwMDAsXG4gICAgICAgICAgICAgICAgY29udGVudFBhZGRpbmc6ICczMHB4JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICcucmlnaHQnLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJy5sZWZ0JyxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcudGVzdGltb25pYWwtaXRlbXMnKS5zbGljayh7XG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzYwcHgnLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICcucmlnaHQnLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJy5sZWZ0JyxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5zbGlkZXItbWFpbicpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJy51cCcsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnLmRvd24nLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnLmNvbXBhdC1zbGlkZXInKS5zbGljayh7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzOTkuOTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5Ljk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLjk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3Ljk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuZHJhY3VsYS1zbGlkZXInKS5zbGljayh7XG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNjBweCcsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBpbml0RnVuRmFjdENvdW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJy5jb3VudGVyJykuY291bnRlclVwKHtcbiAgICAgICAgICAgICAgICBkZWxheTogMTYsXG4gICAgICAgICAgICAgICAgdGltZTogMTUwMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlQ29udGFjdEZvcm06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJy5jb250YWN0LWZvcm0gLnRhYi1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICQoJy5jb250YWN0LWZvcm0td3JhcCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICQoYC5jb250YWN0LWZvcm0td3JhcC5mb3JtLSR7JCh0aGlzKS5kYXRhKCd0YXJnZXQnKX1gKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlVG9Ub3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCAnZmFzdCcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhbmRsZVByaWNpbmdJdGVtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcuaXRlbS1wcmljZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRJbWFnZUNvbXBhcmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoXCIucmVhZGVyLW1vZGUtaW1hZ2UtY29tcGFyZVwiKS50d2VudHl0d2VudHkoe1xuXG4gICAgICAgICAgICAgICAgLy8gIEhvdyBtdWNoIG9mIHRoZSBiZWZvcmUgaW1hZ2UgaXMgdmlzaWJsZSB3aGVuIHRoZSBwYWdlIGxvYWRzXG4gICAgICAgICAgICAgICAgZGVmYXVsdF9vZmZzZXRfcGN0OiAwLjUsXG5cbiAgICAgICAgICAgICAgICAvLyBsYWJlbCB0ZXh0XG4gICAgICAgICAgICAgICAgYmVmb3JlX2xhYmVsOiAnR2VuZXJhbCBWaWV3JyxcbiAgICAgICAgICAgICAgICBhZnRlcl9sYWJlbDogJ1JlYWRlciBNb2RlIFZpZXcnLFxuXG4gICAgICAgICAgICAgICAgLy9vdmVybGF5XG4gICAgICAgICAgICAgICAgbm9fb3ZlcmxheTogdHJ1ZSxcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuXG4gICAgICAgIGNoYW5nZURyYWN1bGFIZXJvSW1hZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gJCgnLmRyYWN1bGEtaGVyby1pbWFnZScpO1xuXG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VTcmMgPSBpbWFnZS5hdHRyKCdzcmMnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0RhcmsgPSBpbWFnZVNyYy5pbmNsdWRlcygnaGVyby1kYXJrJyk7XG4gICAgICAgICAgICAgICAgaW1hZ2UuYXR0cignc3JjJywgaW1hZ2VTcmMucmVwbGFjZShpc0RhcmsgPyAnaGVyby1kYXJrJyA6ICdoZXJvLWxpZ2h0JywgaXNEYXJrID8gJ2hlcm8tbGlnaHQnIDogJ2hlcm8tZGFyaycpKTtcblxuICAgICAgICAgICAgICAgICQoJy5tb2RlLWJ0bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKGAubW9kZS1idG4ubW9kZS0ke2lzRGFyayA/ICdsaWdodCcgOiAnZGFyayd9YCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgJChkb2N1bWVudCkucmVhZHkoYXBwLmluaXQpO1xuXG5cbn0pKGpRdWVyeSk7Il0sIm5hbWVzIjpbImNhbGN1bGF0ZUFuZ2xlIiwiZSIsIml0ZW0iLCJwYXJlbnQiLCJkcm9wU2hhZG93Q29sb3IiLCJnZXRBdHRyaWJ1dGUiLCJ4IiwiTWF0aCIsImFicyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsImhhbGZXaWR0aCIsIndpZHRoIiwiaGFsZkhlaWdodCIsImhlaWdodCIsImNhbGNBbmdsZVgiLCJjYWxjQW5nbGVZIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJwZXJzcGVjdGl2ZSIsImNhbGNTaGFkb3dYIiwiY2FsY1NoYWRvd1kiLCJmaWx0ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInF1ZXJ5U2VsZWN0b3IiLCIkIiwiY2xpY2siLCJhbmltYXRlIiwib3BhY2l0eSIsIm9uIiwiYXR0ciIsInRleHQiLCJhcHAiLCJpbml0IiwiaGFuZGxlU3dpdGNoZXIiLCJoYW5kbGVMaWNlbnNlU3dpdGNoZXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaGFzQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsInByZXZlbnREZWZhdWx0IiwibGljZW5zZSIsImRhdGEiLCJyZWFkeSIsImpRdWVyeSIsImJhbm5lciIsInJlbW92ZSIsImNvdW50ZG93biIsInRpbWVyIiwibGVuZ3RoIiwiZGF0ZVRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRvSVNPU3RyaW5nIiwiY291bnREb3duRGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJbnRlcnZhbCIsIm5vdyIsImRpc3RhbmNlIiwiZGF5cyIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImh0bWwiLCJjbGVhckludGVydmFsIiwic2V0SXRlbSIsImluaXRUZXN0aW1vbmlhbFNsaWRlciIsImluaXRGdW5GYWN0Q291bnRlciIsImhhbmRsZUNvbnRhY3RGb3JtIiwiaGFuZGxlVG9Ub3AiLCJoYW5kbGVQcmljaW5nSXRlbSIsImluaXRJbWFnZUNvbXBhcmUiLCJjaGFuZ2VEcmFjdWxhSGVyb0ltYWdlIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXJyb3dzIiwiYXV0b3BsYXlTcGVlZCIsInNwZWVkIiwiY29udGVudFBhZGRpbmciLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJhZGFwdGl2ZUhlaWdodCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiZG90cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ2ZXJ0aWNhbCIsImNvdW50ZXJVcCIsImRlbGF5IiwidGltZSIsInNjcm9sbFRvcCIsInR3ZW50eXR3ZW50eSIsImRlZmF1bHRfb2Zmc2V0X3BjdCIsImJlZm9yZV9sYWJlbCIsImFmdGVyX2xhYmVsIiwibm9fb3ZlcmxheSIsImltYWdlIiwiaW1hZ2VTcmMiLCJpc0RhcmsiLCJpbmNsdWRlcyIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9