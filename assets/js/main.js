/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
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
        arrows: false,
        responsive: [{
          breakpoint: 992,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        }, {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBd0I7UUFBQ0MsU0FBUyxFQUFFO01BQVosQ0FBeEIsRUFBd0MsTUFBeEM7SUFDSCxDQWxGTztJQW9GUnhCLGlCQUFpQixFQUFFLDZCQUFZO01BQzNCUixDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCNEIsV0FBakIsQ0FBNkIsUUFBN0I7TUFDQTVCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTZCLFFBQVIsQ0FBaUIsUUFBakI7SUFDSDtFQXZGTyxDQUFaO0VBMEZBN0IsQ0FBQyxDQUFDaUMsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0JqQyxHQUFHLENBQUNDLElBQXRCO0FBR0gsQ0EvRkQsRUErRkdpQyxNQS9GSCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGxhYi8uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoJCkge1xuXG4gICAgY29uc3QgYXBwID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhcHAuaW5pdFRlc3RpbW9uaWFsU2xpZGVyKCk7XG4gICAgICAgICAgICBhcHAuaW5pdEZ1bkZhY3RDb3VudGVyKCk7XG5cbiAgICAgICAgICAgICQoJy5jb250YWN0LWZvcm0gLnRhYi1pdGVtJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZUNvbnRhY3RGb3JtKTtcbiAgICAgICAgICAgICQoJy50by10b3AnKS5vbignY2xpY2snLCBhcHAuaGFuZGxlVG9Ub3ApO1xuXG4gICAgICAgICAgICAvL2hhbmRsZSBwcmljaW5nIGl0ZW0gY2xpY2tcbiAgICAgICAgICAgICQoJy5pdGVtLXByaWNlJykub24oJ2NsaWNrJywgYXBwLmhhbmRsZVByaWNpbmdJdGVtKVxuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRUZXN0aW1vbmlhbFNsaWRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvLyBIb21lIHRlc3RpbW9uaWFsIHNsaWRlclxuICAgICAgICAgICAgJCgnLnNpbmdsZS10ZXN0aW1vbmlhbC1pdGVtcycpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDIwMDAsXG4gICAgICAgICAgICAgICAgY29udGVudFBhZGRpbmc6ICczMHB4JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICcucmlnaHQnLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJy5sZWZ0JyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcudGVzdGltb25pYWwtaXRlbXMnKS5zbGljayh7XG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzYwcHgnLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdEZ1bkZhY3RDb3VudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcuY291bnRlcicpLmNvdW50ZXJVcCh7XG4gICAgICAgICAgICAgICAgZGVsYXk6IDE2LFxuICAgICAgICAgICAgICAgIHRpbWU6IDE1MDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhbmRsZUNvbnRhY3RGb3JtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcuY29udGFjdC1mb3JtIC50YWItaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAkKCcuY29udGFjdC1mb3JtLXdyYXAnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKGAuY29udGFjdC1mb3JtLXdyYXAuZm9ybS0keyQodGhpcykuZGF0YSgndGFyZ2V0Jyl9YCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhbmRsZVRvVG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgJ2Zhc3QnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYW5kbGVQcmljaW5nSXRlbTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLml0ZW0tcHJpY2UnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcblxuXG59KShqUXVlcnkpOyJdLCJuYW1lcyI6WyIkIiwiYXBwIiwiaW5pdCIsImluaXRUZXN0aW1vbmlhbFNsaWRlciIsImluaXRGdW5GYWN0Q291bnRlciIsIm9uIiwiaGFuZGxlQ29udGFjdEZvcm0iLCJoYW5kbGVUb1RvcCIsImhhbmRsZVByaWNpbmdJdGVtIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXJyb3dzIiwiYXV0b3BsYXlTcGVlZCIsInNwZWVkIiwiY29udGVudFBhZGRpbmciLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImRvdHMiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiY291bnRlclVwIiwiZGVsYXkiLCJ0aW1lIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImRhdGEiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiZG9jdW1lbnQiLCJyZWFkeSIsImpRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=