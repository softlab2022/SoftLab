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
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLENBQUMsVUFBVUEsQ0FBVixFQUFhO0VBQ1ZBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtJQUMxQjtJQUNBRixDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkcsS0FBdkIsQ0FBNkI7TUFDekJDLFlBQVksRUFBRSxDQURXO01BRXpCQyxjQUFjLEVBQUUsQ0FGUztNQUd6QkMsUUFBUSxFQUFFLElBSGU7TUFJekJDLE1BQU0sRUFBRSxJQUppQjtNQUt6QkMsYUFBYSxFQUFFLElBTFU7TUFNekJDLEtBQUssRUFBRSxJQU5rQjtNQU96QkMsU0FBUyxFQUFFLFFBUGM7TUFRekJDLFNBQVMsRUFBRTtJQVJjLENBQTdCO0lBV0FYLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCRyxLQUF2QixDQUE2QjtNQUN6QlMsVUFBVSxFQUFFLEtBRGE7TUFFekJDLGFBQWEsRUFBRSxNQUZVO01BR3pCVCxZQUFZLEVBQUUsQ0FIVztNQUl6QlUsSUFBSSxFQUFFLElBSm1CO01BS3pCUCxNQUFNLEVBQUUsS0FMaUI7TUFNekJRLFVBQVUsRUFBRSxDQUNSO1FBQ0lDLFVBQVUsRUFBRSxHQURoQjtRQUVJQyxRQUFRLEVBQUU7VUFDTlYsTUFBTSxFQUFFLEtBREY7VUFFTkssVUFBVSxFQUFFLElBRk47VUFHTkMsYUFBYSxFQUFFLE1BSFQ7VUFJTlQsWUFBWSxFQUFFO1FBSlI7TUFGZCxDQURRLEVBVVI7UUFDSVksVUFBVSxFQUFFLEdBRGhCO1FBRUlDLFFBQVEsRUFBRTtVQUNOVixNQUFNLEVBQUUsS0FERjtVQUVOSyxVQUFVLEVBQUUsSUFGTjtVQUdOQyxhQUFhLEVBQUUsTUFIVDtVQUlOVCxZQUFZLEVBQUU7UUFKUjtNQUZkLENBVlE7SUFOYSxDQUE3QjtFQTJCSCxDQXhDRDtBQXlDSCxDQTFDRCxFQTBDR2MsTUExQ0gsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3NvZnRsYWIvLi9zcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCQpIHtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL1Rlc3RpbW9uaWFsIFNsaWRlclxyXG4gICAgICAgICQoJy50ZXN0aW1vbmlhbC1pdGVtJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgICAgICBzcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnLnJpZ2h0JyxcclxuICAgICAgICAgICAgcHJldkFycm93OiAnLmxlZnQnLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcudGhpbmstbWFpbi1pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc2MHB4JyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KShqUXVlcnkpOyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNsaWNrIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImFycm93cyIsImF1dG9wbGF5U3BlZWQiLCJzcGVlZCIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiZG90cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJqUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9