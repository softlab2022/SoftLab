/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
(function ($) {
  $(document).ready(function () {
    //Testimonial Slider
    $('.testimonial-item').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 3000,
      speed: 2000,
      nextArrow: '.right',
      prevArrow: '.left'
    });
    $('.think-main-items').slick({
      centerMode: false,
      centerPadding: '60px',
      slidesToShow: 3,
      dots: true,
      arrows: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }, {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }]
    });
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLENBQUMsVUFBVUEsQ0FBVixFQUFhO0VBRVZBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtJQUMxQjtJQUNBRixDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkcsS0FBdkIsQ0FBNkI7TUFDekJDLFlBQVksRUFBRSxDQURXO01BRXpCQyxjQUFjLEVBQUUsQ0FGUztNQUd6QkMsUUFBUSxFQUFFLElBSGU7TUFJekJDLE1BQU0sRUFBRSxJQUppQjtNQUt6QkMsYUFBYSxFQUFFLElBTFU7TUFNekJDLEtBQUssRUFBRSxJQU5rQjtNQU96QkMsU0FBUyxFQUFFLFFBUGM7TUFRekJDLFNBQVMsRUFBRTtJQVJjLENBQTdCO0lBV0FYLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCRyxLQUF2QixDQUE2QjtNQUN6QlMsVUFBVSxFQUFFLEtBRGE7TUFFekJDLGFBQWEsRUFBRSxNQUZVO01BR3pCVCxZQUFZLEVBQUUsQ0FIVztNQUl6QlUsSUFBSSxFQUFFLElBSm1CO01BS3pCUCxNQUFNLEVBQUUsS0FMaUI7TUFNekJRLFVBQVUsRUFBRSxDQUNSO1FBQ0lDLFVBQVUsRUFBRSxHQURoQjtRQUVJQyxRQUFRLEVBQUU7VUFDTlYsTUFBTSxFQUFFLEtBREY7VUFFTkssVUFBVSxFQUFFLElBRk47VUFHTkMsYUFBYSxFQUFFLE1BSFQ7VUFJTlQsWUFBWSxFQUFFO1FBSlI7TUFGZCxDQURRLEVBVVI7UUFDSVksVUFBVSxFQUFFLEdBRGhCO1FBRUlDLFFBQVEsRUFBRTtVQUNOVixNQUFNLEVBQUUsS0FERjtVQUVOSyxVQUFVLEVBQUUsSUFGTjtVQUdOQyxhQUFhLEVBQUUsTUFIVDtVQUlOVCxZQUFZLEVBQUU7UUFKUjtNQUZkLENBVlE7SUFOYSxDQUE3QjtJQTJCQUosQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFja0IsU0FBZCxDQUF3QjtNQUNwQkMsS0FBSyxFQUFFLEVBRGE7TUFFcEJDLElBQUksRUFBRTtJQUZjLENBQXhCO0VBSUgsQ0E1Q0Q7QUFnREgsQ0FsREQsRUFrREdDLE1BbERILEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2Z0bGFiLy4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vVGVzdGltb25pYWwgU2xpZGVyXHJcbiAgICAgICAgJCgnLnRlc3RpbW9uaWFsLWl0ZW0nKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgIHNwZWVkOiAyMDAwLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcucmlnaHQnLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcubGVmdCcsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy50aGluay1tYWluLWl0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzYwcHgnLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSAgfSk7XHJcblxyXG4gICAgICAgICQoJy5jb3VudGVyJykuY291bnRlclVwKHtcclxuICAgICAgICAgICAgZGVsYXk6IDEwLFxyXG4gICAgICAgICAgICB0aW1lOiAxMDAwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgXHJcblxyXG59KShqUXVlcnkpOyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNsaWNrIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImFycm93cyIsImF1dG9wbGF5U3BlZWQiLCJzcGVlZCIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiZG90cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJjb3VudGVyVXAiLCJkZWxheSIsInRpbWUiLCJqUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9