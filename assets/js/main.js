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
  }

  // Get the x position of the users mouse, relative to the button itself
  var x = Math.abs(item.getBoundingClientRect().x - e.clientX);
  // Get the y position relative to the button
  var y = Math.abs(item.getBoundingClientRect().y - e.clientY);

  // Calculate half the width and height
  var halfWidth = item.getBoundingClientRect().width / 2;
  var halfHeight = item.getBoundingClientRect().height / 2;

  // Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
  // Changing these numbers will change the depth of the effect.
  var calcAngleX = (x - halfWidth) / 6;
  var calcAngleY = (y - halfHeight) / 4;

  // Set the items transform CSS property
  item.style.transform = "rotateY(".concat(calcAngleX, "deg) rotateX(").concat(calcAngleY, "deg) scale(1.15)");

  // And set its container's perspective.
  parent.style.perspective = "".concat(halfWidth * 2, "px");
  item.style.perspective = "".concat(halfWidth * 3, "px");
  if (parent.getAttribute('data-custom-perspective') !== null) {
    parent.style.perspective = "".concat(parent.getAttribute('data-custom-perspective'));
  }

  // Reapply this to the shadow, with different dividers
  var calcShadowX = (x - halfWidth) / 3;
  var calcShadowY = (y - halfHeight) / 3;

  // Add a filter shadow - this is more performant to animate than a regular box shadow.
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
});

// // create account js
$('.message a').click(function () {
  $('form').animate({
    height: "toggle",
    opacity: "toggle"
  }, "slow");
});

// // FILTER js !
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
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/button */ "./src/js/components/button.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_button__WEBPACK_IMPORTED_MODULE_2__);



;
(function ($) {
  var app = {
    init: function init() {
      app.initTestimonialSlider();
      app.initFunFactCounter();
      $('.contact-form .tab-item').on('click', app.handleContactForm);
      $('.to-top').on('click', app.handleToTop);

      //handle pricing item click
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssQ0FBQztRQUNsQyxJQUFNMEUsTUFBTSxHQUFHRCxRQUFRLENBQUNFLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDN0NILEtBQUssQ0FBQ3hFLElBQUksQ0FBQyxLQUFLLEVBQUV5RSxRQUFRLENBQUNHLE9BQU8sQ0FBQ0YsTUFBTSxHQUFHLFdBQVcsR0FBRyxZQUFZLEVBQUVBLE1BQU0sR0FBRyxZQUFZLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFFN0cvRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNXLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDcENYLENBQUMsMEJBQW1CK0UsTUFBTSxHQUFHLE9BQU8sR0FBRyxNQUFNLEVBQUcsQ0FBQ25FLFFBQVEsQ0FBQyxRQUFRLENBQUM7TUFFdkUsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUNaO0VBQ0osQ0FBQztFQUdEWixDQUFDLENBQUNMLFFBQVEsQ0FBQyxDQUFDdUIsS0FBSyxDQUFDWCxHQUFHLENBQUNDLElBQUksQ0FBQztBQUcvQixDQUFDLEVBQUVXLE1BQU0sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9jb21wb25lbnRzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL2NvbXBvbmVudHMvcHJpY2luZy5qcyIsIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lci5qcyIsIndlYnBhY2s6Ly9zb2Z0bGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc29mdGxhYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NvZnRsYWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGNhbGN1bGF0ZUFuZ2xlID0gZnVuY3Rpb24oZSwgaXRlbSwgcGFyZW50KSB7XHJcbiAgICBsZXQgZHJvcFNoYWRvd0NvbG9yID0gYHJnYmEoMCwgMCwgMCwgMC4zKWBcclxuICAgIGlmKHBhcmVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyLWNvbG9yJykgIT09IG51bGwpIHtcclxuICAgICAgICBkcm9wU2hhZG93Q29sb3IgPSBwYXJlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlci1jb2xvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCB0aGUgeCBwb3NpdGlvbiBvZiB0aGUgdXNlcnMgbW91c2UsIHJlbGF0aXZlIHRvIHRoZSBidXR0b24gaXRzZWxmXHJcbiAgICBsZXQgeCA9IE1hdGguYWJzKGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCAtIGUuY2xpZW50WCk7XHJcbiAgICAvLyBHZXQgdGhlIHkgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGJ1dHRvblxyXG4gICAgbGV0IHkgPSBNYXRoLmFicyhpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgLSBlLmNsaWVudFkpO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBoYWxmIHRoZSB3aWR0aCBhbmQgaGVpZ2h0XHJcbiAgICBsZXQgaGFsZldpZHRoICA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLyAyO1xyXG4gICAgbGV0IGhhbGZIZWlnaHQgPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAvIDI7XHJcblxyXG4gICAgLy8gVXNlIHRoaXMgdG8gY3JlYXRlIGFuIGFuZ2xlLiBJIGhhdmUgZGl2aWRlZCBieSA2IGFuZCA0IHJlc3BlY3RpdmVseSBzbyB0aGUgZWZmZWN0IGxvb2tzIGdvb2QuXHJcbiAgICAvLyBDaGFuZ2luZyB0aGVzZSBudW1iZXJzIHdpbGwgY2hhbmdlIHRoZSBkZXB0aCBvZiB0aGUgZWZmZWN0LlxyXG4gICAgbGV0IGNhbGNBbmdsZVggPSAoeCAtIGhhbGZXaWR0aCkgLyA2O1xyXG4gICAgbGV0IGNhbGNBbmdsZVkgPSAoeSAtIGhhbGZIZWlnaHQpIC8gNDtcclxuXHJcbiAgICAvLyBTZXQgdGhlIGl0ZW1zIHRyYW5zZm9ybSBDU1MgcHJvcGVydHlcclxuICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHtjYWxjQW5nbGVYfWRlZykgcm90YXRlWCgke2NhbGNBbmdsZVl9ZGVnKSBzY2FsZSgxLjE1KWA7XHJcbiAgICBcclxuICAgIC8vIEFuZCBzZXQgaXRzIGNvbnRhaW5lcidzIHBlcnNwZWN0aXZlLlxyXG4gICAgcGFyZW50LnN0eWxlLnBlcnNwZWN0aXZlID0gYCR7aGFsZldpZHRoICogMn1weGBcclxuICAgIGl0ZW0uc3R5bGUucGVyc3BlY3RpdmUgPSBgJHtoYWxmV2lkdGggKiAzfXB4YFxyXG5cclxuICAgIGlmKHBhcmVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3VzdG9tLXBlcnNwZWN0aXZlJykgIT09IG51bGwpIHtcclxuICAgICAgICBwYXJlbnQuc3R5bGUucGVyc3BlY3RpdmUgPSBgJHtwYXJlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWN1c3RvbS1wZXJzcGVjdGl2ZScpfWBcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWFwcGx5IHRoaXMgdG8gdGhlIHNoYWRvdywgd2l0aCBkaWZmZXJlbnQgZGl2aWRlcnNcclxuICAgIGxldCBjYWxjU2hhZG93WCA9ICh4IC0gaGFsZldpZHRoKSAvIDM7XHJcbiAgICBsZXQgY2FsY1NoYWRvd1kgPSAoeSAtIGhhbGZIZWlnaHQpIC8gMztcclxuICAgIFxyXG4gICAgLy8gQWRkIGEgZmlsdGVyIHNoYWRvdyAtIHRoaXMgaXMgbW9yZSBwZXJmb3JtYW50IHRvIGFuaW1hdGUgdGhhbiBhIHJlZ3VsYXIgYm94IHNoYWRvdy5cclxuICAgIGl0ZW0uc3R5bGUuZmlsdGVyID0gYGRyb3Atc2hhZG93KCR7LWNhbGNTaGFkb3dYfXB4ICR7Y2FsY1NoYWRvd1l9cHggMTVweCAke2Ryb3BTaGFkb3dDb2xvcn0pYDtcclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbicpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGNhbGN1bGF0ZUFuZ2xlKGUsIHRoaXMucXVlcnlTZWxlY3Rvcignc3BhbicpLCB0aGlzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGNhbGN1bGF0ZUFuZ2xlKGUsIHRoaXMucXVlcnlTZWxlY3Rvcignc3BhbicpLCB0aGlzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgZHJvcFNoYWRvd0NvbG9yID0gYHJnYmEoMCwgMCwgMCwgMC4zKWBcclxuICAgICAgICBpZihpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1maWx0ZXItY29sb3InKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkcm9wU2hhZG93Q29sb3IgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1maWx0ZXItY29sb3InKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWSgwZGVnKSByb3RhdGVYKDBkZWcpIHNjYWxlKDEpYDtcclxuICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5zdHlsZS5maWx0ZXIgPSBgZHJvcC1zaGFkb3coMCAxMHB4IDE1cHggJHtkcm9wU2hhZG93Q29sb3J9KWA7XHJcbiAgICB9KTtcclxufSlcclxuXHJcblxyXG4vLyAvLyBjcmVhdGUgYWNjb3VudCBqc1xyXG4kKCcubWVzc2FnZSBhJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQoJ2Zvcm0nKS5hbmltYXRlKHtoZWlnaHQ6IFwidG9nZ2xlXCIsIG9wYWNpdHk6IFwidG9nZ2xlXCJ9LCBcInNsb3dcIik7XHJcbn0pO1xyXG5cclxuLy8gLy8gRklMVEVSIGpzICFcclxuLy8gY29uc3QgZWx0cyA9IHtcclxuLy8gICAgIHRleHQxOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQxXCIpLFxyXG4vLyAgICAgdGV4dDI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dDJcIilcclxuLy8gfTtcclxuXHJcblxyXG4vLyBjb25zdCB0ZXh0cyA9IFtcclxuLy8gICAgIFwiV2VcIixcclxuLy8gICAgIFwiQnVpbGRcIixcclxuLy8gICAgIFwiQXdlc29tZVwiLFxyXG4vLyAgICAgXCJTb2x1dGlvbnNcIixcclxuLy8gICAgIFwiZm9yXCIsXHJcbi8vICAgICBcIldvcmRQcmVzc1wiLFxyXG4vLyAgICAgXCJieSBTT0ZUTEFCXCJcclxuLy8gXTtcclxuXHJcbi8vIC8vIENvbnRyb2xzIHRoZSBzcGVlZCBvZiBtb3JwaGluZy5cclxuLy8gY29uc3QgbW9ycGhUaW1lID0gMTtcclxuLy8gY29uc3QgY29vbGRvd25UaW1lID0gMC4yNTtcclxuXHJcbi8vIGxldCB0ZXh0SW5kZXggPSB0ZXh0cy5sZW5ndGggLSAxO1xyXG4vLyBsZXQgdGltZSA9IG5ldyBEYXRlKCk7XHJcbi8vIGxldCBtb3JwaCA9IDA7XHJcbi8vIGxldCBjb29sZG93biA9IGNvb2xkb3duVGltZTtcclxuXHJcbi8vIGVsdHMudGV4dDEudGV4dENvbnRlbnQgPSB0ZXh0c1t0ZXh0SW5kZXggJSB0ZXh0cy5sZW5ndGhdO1xyXG4vLyBlbHRzLnRleHQyLnRleHRDb250ZW50ID0gdGV4dHNbKHRleHRJbmRleCArIDEpICUgdGV4dHMubGVuZ3RoXTtcclxuXHJcbi8vIGZ1bmN0aW9uIGRvTW9ycGgoKSB7XHJcbi8vICAgICBtb3JwaCAtPSBjb29sZG93bjtcclxuLy8gICAgIGNvb2xkb3duID0gMDtcclxuICAgIFxyXG4vLyAgICAgbGV0IGZyYWN0aW9uID0gbW9ycGggLyBtb3JwaFRpbWU7XHJcbiAgICBcclxuLy8gICAgIGlmIChmcmFjdGlvbiA+IDEpIHtcclxuLy8gICAgIGNvb2xkb3duID0gY29vbGRvd25UaW1lO1xyXG4vLyAgICAgZnJhY3Rpb24gPSAxO1xyXG4vLyAgICAgfVxyXG4gICAgXHJcbi8vICAgICBzZXRNb3JwaChmcmFjdGlvbik7XHJcbi8vIH1cclxuXHJcbi8vIC8vIEEgbG90IG9mIHRoZSBtYWdpYyBoYXBwZW5zIGhlcmUsIHRoaXMgaXMgd2hhdCBhcHBsaWVzIHRoZSBibHVyIGZpbHRlciB0byB0aGUgdGV4dC5cclxuLy8gZnVuY3Rpb24gc2V0TW9ycGgoZnJhY3Rpb24pIHtcclxuLy8gICAgIC8vIGZyYWN0aW9uID0gTWF0aC5jb3MoZnJhY3Rpb24gKiBNYXRoLlBJKSAvIC0yICsgLjU7XHJcbiAgICBcclxuLy8gICAgIGVsdHMudGV4dDIuc3R5bGUuZmlsdGVyID0gYGJsdXIoJHtNYXRoLm1pbig4IC8gZnJhY3Rpb24gLSA4LCAxMDApfXB4KWA7XHJcbi8vICAgICBlbHRzLnRleHQyLnN0eWxlLm9wYWNpdHkgPSBgJHtNYXRoLnBvdyhmcmFjdGlvbiwgMC40KSAqIDEwMH0lYDtcclxuICAgIFxyXG4vLyAgICAgZnJhY3Rpb24gPSAxIC0gZnJhY3Rpb247XHJcbi8vICAgICBlbHRzLnRleHQxLnN0eWxlLmZpbHRlciA9IGBibHVyKCR7TWF0aC5taW4oOCAvIGZyYWN0aW9uIC0gOCwgMTAwKX1weClgO1xyXG4vLyAgICAgZWx0cy50ZXh0MS5zdHlsZS5vcGFjaXR5ID0gYCR7TWF0aC5wb3coZnJhY3Rpb24sIDAuNCkgKiAxMDB9JWA7XHJcbiAgICBcclxuLy8gICAgIGVsdHMudGV4dDEudGV4dENvbnRlbnQgPSB0ZXh0c1t0ZXh0SW5kZXggJSB0ZXh0cy5sZW5ndGhdO1xyXG4vLyAgICAgZWx0cy50ZXh0Mi50ZXh0Q29udGVudCA9IHRleHRzWyh0ZXh0SW5kZXggKyAxKSAlIHRleHRzLmxlbmd0aF07XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGRvQ29vbGRvd24oKSB7XHJcbi8vICAgICBtb3JwaCA9IDA7XHJcbiAgICBcclxuLy8gICAgIGVsdHMudGV4dDIuc3R5bGUuZmlsdGVyID0gXCJcIjtcclxuLy8gICAgIGVsdHMudGV4dDIuc3R5bGUub3BhY2l0eSA9IFwiMTAwJVwiO1xyXG4gICAgXHJcbi8vICAgICBlbHRzLnRleHQxLnN0eWxlLmZpbHRlciA9IFwiXCI7XHJcbi8vICAgICBlbHRzLnRleHQxLnN0eWxlLm9wYWNpdHkgPSBcIjAlXCI7XHJcbi8vIH1cclxuXHJcbi8vIC8vIEFuaW1hdGlvbiBsb29wLCB3aGljaCBpcyBjYWxsZWQgZXZlcnkgZnJhbWUuXHJcbi8vIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XHJcbi8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICBcclxuLy8gICAgIGxldCBuZXdUaW1lID0gbmV3IERhdGUoKTtcclxuLy8gICAgIGxldCBzaG91bGRJbmNyZW1lbnRJbmRleCA9IGNvb2xkb3duID4gMDtcclxuLy8gICAgIGxldCBkdCA9IChuZXdUaW1lIC0gdGltZSkgLyAxNTAwO1xyXG4vLyAgICAgdGltZSA9IG5ld1RpbWU7XHJcbiAgICBcclxuLy8gICAgIGNvb2xkb3duIC09IGR0O1xyXG4gICAgXHJcbi8vICAgICBpZiAoY29vbGRvd24gPD0gMCkge1xyXG4vLyAgICAgaWYgKHNob3VsZEluY3JlbWVudEluZGV4KSB7XHJcbi8vICAgICAgICAgdGV4dEluZGV4Kys7XHJcbi8vICAgICB9XHJcbiAgICBcclxuLy8gICAgIGRvTW9ycGgoKTtcclxuLy8gICAgIH0gXHJcbi8vICAgICBlbHNlIHtcclxuLy8gICAgIGRvQ29vbGRvd24oKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLy8gU3RhcnQgdGhlIGFuaW1hdGlvbi5cclxuLy8gYW5pbWF0ZSgpO1xyXG5cclxuJCgnW2RhdGEtdGV4dF0nKS5vbigna2V5dXAnLCBmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5hdHRyKCdkYXRhLXRleHQnLCAkKHRoaXMpLnRleHQoKSk7XHJcbiAgfSk7IiwiOyhmdW5jdGlvbiAoJCkge1xyXG4gICAgY29uc3QgYXBwID0ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9IYW5kbGUgcHJpY2luZyBzd2l0Y2hlclxyXG4gICAgICAgICAgICAkKCcucHJpY2luZy1zd2l0Y2hlcicpLm9uKCdjbGljaycsIGFwcC5oYW5kbGVTd2l0Y2hlcik7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgbGljZW5zZSBzd2l0Y2hlclxyXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24taXRlbScpLm9uKCdjbGljaycsIGFwcC5oYW5kbGVMaWNlbnNlU3dpdGNoZXIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVN3aXRjaGVyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKCcucHJpY2UtdGV4dCcpLnJlbW92ZUNsYXNzKCdhbm51YWwgbGlmZXRpbWUnKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpID8gJ2FubnVhbCcgOiAnbGlmZXRpbWUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlTGljZW5zZVN3aXRjaGVyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlJykudGV4dCgkKHRoaXMpLnRleHQoKSk7XHJcblxyXG4gICAgICAgICAgICAkKCcubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24taXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaWNlbnNlID0gJCh0aGlzKS5kYXRhKCdsaWNlbnNlJyk7XHJcbiAgICAgICAgICAgICQoJy5wcmljZS10ZXh0JykucmVtb3ZlQ2xhc3MoJ2xpY2Vuc2UtMSBsaWNlbnNlLTUgbGljZW5zZS0xMDAnKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGBsaWNlbnNlLSR7bGljZW5zZX1gKTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxuXHJcbn0pKGpRdWVyeSk7IiwiOyhmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGJhbm5lciA9ICQoJyNoZWFkZXItc3RpY2t5LWJhbm5lcicpO1xyXG5cclxuICAgICAgICAvL0Nsb3NlIGJhbm5lclxyXG4gICAgICAgICQoJy5iYW5uZXItY2xvc2UnLCBiYW5uZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYmFubmVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL0Jhbm5lciBjb3VudGRvd25cclxuICAgICAgICBjb25zdCBjb3VudGRvd24gPSAkKCcuYmFubmVyLWNvdW50ZG93bicsIGJhbm5lcik7XHJcbiAgICAgICAgY29uc3QgdGltZXIgPSAkKCcudGltZXInLCBiYW5uZXIpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMjQgKiA2MCAqIDYwICogMTAwMCArIDIgKiA2MCAqIDYwICogMTAwMCkudG9JU09TdHJpbmcoKTtcclxuICAgICAgICAgICAgbGV0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShkYXRlVGltZSkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICAgICAgLy9jaGVjayBpZiB0aGVyZSBpcyBhIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWUnKSkge1xyXG4gICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCB4ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZXIuaHRtbChgPHNwYW4gY2xhc3M9XCJkYXlzXCI+JHtkYXlzfWQ8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaG91cnNcIj4ke2hvdXJzfWg8L3NwYW4+IDxzcGFuIGNsYXNzPVwibWludXRlc1wiPiR7bWludXRlc31tPC9zcGFuPiA8c3BhbiBjbGFzcz1cInNlY29uZHNcIj4ke3NlY29uZHN9czwvc3Bhbj5gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh4KTtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lci50ZXh0KFwiRVhQSVJFRFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL3NhdmUgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGltZScsIGNvdW50RG93bkRhdGUpO1xyXG5cclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG59KShqUXVlcnkpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9wcmljaW5nJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2J1dHRvbic7XHJcblxyXG47KGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gICAgY29uc3QgYXBwID0ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYXBwLmluaXRUZXN0aW1vbmlhbFNsaWRlcigpO1xyXG4gICAgICAgICAgICBhcHAuaW5pdEZ1bkZhY3RDb3VudGVyKCk7XHJcblxyXG4gICAgICAgICAgICAkKCcuY29udGFjdC1mb3JtIC50YWItaXRlbScpLm9uKCdjbGljaycsIGFwcC5oYW5kbGVDb250YWN0Rm9ybSk7XHJcbiAgICAgICAgICAgICQoJy50by10b3AnKS5vbignY2xpY2snLCBhcHAuaGFuZGxlVG9Ub3ApO1xyXG5cclxuICAgICAgICAgICAgLy9oYW5kbGUgcHJpY2luZyBpdGVtIGNsaWNrXHJcbiAgICAgICAgICAgICQoJy5pdGVtLXByaWNlJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZVByaWNpbmdJdGVtKVxyXG5cclxuICAgICAgICAgICAgYXBwLmluaXRJbWFnZUNvbXBhcmUoKTtcclxuXHJcbiAgICAgICAgICAgIGFwcC5jaGFuZ2VEcmFjdWxhSGVyb0ltYWdlKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5pdFRlc3RpbW9uaWFsU2xpZGVyOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBIb21lIHRlc3RpbW9uaWFsIHNsaWRlclxyXG4gICAgICAgICAgICAkKCcuc2luZ2xlLXRlc3RpbW9uaWFsLWl0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRQYWRkaW5nOiAnMzBweCcsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICcucmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnLmxlZnQnLFxyXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCgnLnRlc3RpbW9uaWFsLWl0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNjBweCcsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnLnJpZ2h0JyxcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJy5sZWZ0JyxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLW1haW4nKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnLnVwJyxcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJy5kb3duJyxcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoJy5jb21wYXQtc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTM5OS45OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuZHJhY3VsYS1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzYwcHgnLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTkuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcuOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXRGdW5GYWN0Q291bnRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcuY291bnRlcicpLmNvdW50ZXJVcCh7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMTYsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiAxNTAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUNvbnRhY3RGb3JtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5jb250YWN0LWZvcm0gLnRhYi1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5jb250YWN0LWZvcm0td3JhcCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJChgLmNvbnRhY3QtZm9ybS13cmFwLmZvcm0tJHskKHRoaXMpLmRhdGEoJ3RhcmdldCcpfWApLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVUb1RvcDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgJ2Zhc3QnKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYW5kbGVQcmljaW5nSXRlbTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcuaXRlbS1wcmljZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5pdEltYWdlQ29tcGFyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLnJlYWRlci1tb2RlLWltYWdlLWNvbXBhcmVcIikudHdlbnR5dHdlbnR5KHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgSG93IG11Y2ggb2YgdGhlIGJlZm9yZSBpbWFnZSBpcyB2aXNpYmxlIHdoZW4gdGhlIHBhZ2UgbG9hZHNcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRfb2Zmc2V0X3BjdDogMC41LFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxhYmVsIHRleHRcclxuICAgICAgICAgICAgICAgIGJlZm9yZV9sYWJlbDogJ0dlbmVyYWwgVmlldycsXHJcbiAgICAgICAgICAgICAgICBhZnRlcl9sYWJlbDogJ1JlYWRlciBNb2RlIFZpZXcnLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vb3ZlcmxheVxyXG4gICAgICAgICAgICAgICAgbm9fb3ZlcmxheTogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNoYW5nZURyYWN1bGFIZXJvSW1hZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSAkKCcuZHJhY3VsYS1oZXJvLWltYWdlJyk7XHJcblxyXG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVNyYyA9IGltYWdlLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNEYXJrID0gaW1hZ2VTcmMuaW5jbHVkZXMoJ2hlcm8tZGFyaycpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuYXR0cignc3JjJywgaW1hZ2VTcmMucmVwbGFjZShpc0RhcmsgPyAnaGVyby1kYXJrJyA6ICdoZXJvLWxpZ2h0JywgaXNEYXJrID8gJ2hlcm8tbGlnaHQnIDogJ2hlcm8tZGFyaycpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcubW9kZS1idG4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKGAubW9kZS1idG4ubW9kZS0ke2lzRGFyayA/ICdsaWdodCcgOiAnZGFyayd9YCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShhcHAuaW5pdCk7XHJcblxyXG5cclxufSkoalF1ZXJ5KTsiXSwibmFtZXMiOlsiY2FsY3VsYXRlQW5nbGUiLCJlIiwiaXRlbSIsInBhcmVudCIsImRyb3BTaGFkb3dDb2xvciIsImdldEF0dHJpYnV0ZSIsIngiLCJNYXRoIiwiYWJzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsInkiLCJjbGllbnRZIiwiaGFsZldpZHRoIiwid2lkdGgiLCJoYWxmSGVpZ2h0IiwiaGVpZ2h0IiwiY2FsY0FuZ2xlWCIsImNhbGNBbmdsZVkiLCJzdHlsZSIsInRyYW5zZm9ybSIsInBlcnNwZWN0aXZlIiwiY2FsY1NoYWRvd1giLCJjYWxjU2hhZG93WSIsImZpbHRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwicXVlcnlTZWxlY3RvciIsIiQiLCJjbGljayIsImFuaW1hdGUiLCJvcGFjaXR5Iiwib24iLCJhdHRyIiwidGV4dCIsImFwcCIsImluaXQiLCJoYW5kbGVTd2l0Y2hlciIsImhhbmRsZUxpY2Vuc2VTd2l0Y2hlciIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsInRvZ2dsZUNsYXNzIiwicHJldmVudERlZmF1bHQiLCJsaWNlbnNlIiwiZGF0YSIsInJlYWR5IiwialF1ZXJ5IiwiYmFubmVyIiwicmVtb3ZlIiwiY291bnRkb3duIiwidGltZXIiLCJsZW5ndGgiLCJkYXRlVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidG9JU09TdHJpbmciLCJjb3VudERvd25EYXRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEludGVydmFsIiwibm93IiwiZGlzdGFuY2UiLCJkYXlzIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiaHRtbCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJdGVtIiwiaW5pdFRlc3RpbW9uaWFsU2xpZGVyIiwiaW5pdEZ1bkZhY3RDb3VudGVyIiwiaGFuZGxlQ29udGFjdEZvcm0iLCJoYW5kbGVUb1RvcCIsImhhbmRsZVByaWNpbmdJdGVtIiwiaW5pdEltYWdlQ29tcGFyZSIsImNoYW5nZURyYWN1bGFIZXJvSW1hZ2UiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhcnJvd3MiLCJhdXRvcGxheVNwZWVkIiwic3BlZWQiLCJjb250ZW50UGFkZGluZyIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsImFkYXB0aXZlSGVpZ2h0IiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJkb3RzIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInZlcnRpY2FsIiwiY291bnRlclVwIiwiZGVsYXkiLCJ0aW1lIiwic2Nyb2xsVG9wIiwidHdlbnR5dHdlbnR5IiwiZGVmYXVsdF9vZmZzZXRfcGN0IiwiYmVmb3JlX2xhYmVsIiwiYWZ0ZXJfbGFiZWwiLCJub19vdmVybGF5IiwiaW1hZ2UiLCJpbWFnZVNyYyIsImlzRGFyayIsImluY2x1ZGVzIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=