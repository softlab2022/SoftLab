(()=>{var e={424:()=>{var e,t;e=jQuery,t={init:function(){e(".pricing-switcher").on("click",t.handleSwitcher),e(".license-dropdown .dropdown-item").on("click",t.handleLicenseSwitcher)},handleSwitcher:function(t){e(".price-text").removeClass("annual lifetime").addClass(e(this).hasClass("active")?"annual":"lifetime"),e(this).toggleClass("active")},handleLicenseSwitcher:function(t){t.preventDefault(),e(".license-dropdown .dropdown-toggle").text(e(this).text()),e(".license-dropdown .dropdown-item").removeClass("active"),e(this).addClass("active");var a=e(this).data("license");e(".price-text").removeClass("license-1 license-5 license-100").addClass("license-".concat(a))}},e(document).ready(t.init)},22:()=>{!function(e){"use strict";e(document).ready((function(){var t=e("#header-sticky-banner");e(".banner-close",t).on("click",(function(){t.remove()}));var a=e(".banner-countdown",t),o=e(".timer",t);if(a.length){var n=new Date((new Date).getTime()+864e5+72e5).toISOString(),r=new Date(n).getTime();localStorage.getItem("time")&&(r=localStorage.getItem("time"));var i=setInterval((function(){var e=(new Date).getTime(),t=r-e,a=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),s=Math.floor(t%36e5/6e4),c=Math.floor(t%6e4/1e3);o.html('<span class="days">'.concat(a,'d</span> <span class="hours">').concat(n,'h</span> <span class="minutes">').concat(s,'m</span> <span class="seconds">').concat(c,"s</span>")),t<0&&(clearInterval(i),o.text("EXPIRED")),localStorage.setItem("time",r)}),1e3)}}))}(jQuery)}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e,t;a(424),a(22);e=jQuery,t={init:function(){t.initTestimonialSlider(),t.initFunFactCounter(),e(".contact-form .tab-item").on("click",t.handleContactForm),e(".to-top").on("click",t.handleToTop),e(".item-price").on("click",t.handlePricingItem),t.initImageCompare(),t.changeDraculaHeroImage()},initTestimonialSlider:function(){e(".single-testimonial-items").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!0,autoplaySpeed:3e3,speed:2e3,contentPadding:"30px",nextArrow:".right",prevArrow:".left",adaptiveHeight:!0}),e(".testimonial-items").slick({centerMode:!1,centerPadding:"60px",slidesToShow:3,dots:!0,arrows:!0,nextArrow:".right",prevArrow:".left",responsive:[{breakpoint:1199.98,settings:{arrows:!1,centerMode:!1,centerPadding:"40px",slidesToShow:3}},{breakpoint:991.98,settings:{arrows:!1,centerMode:!1,centerPadding:"40px",slidesToShow:2}},{breakpoint:767.98,settings:{arrows:!1,centerMode:!1,centerPadding:"40px",slidesToShow:1}}]}),e(".slider-main").slick({slidesToShow:3,slidesToScroll:1,autoplay:!0,arrows:!0,nextArrow:".up",prevArrow:".down",vertical:!0,centerMode:!0,centerPadding:!1,autoplaySpeed:2e3}),e(".compat-slider").slick({slidesToShow:6,slidesToScroll:1,autoplay:!0,arrows:!1,autoplaySpeed:2e3,responsive:[{breakpoint:1399.98,settings:{arrows:!1,centerMode:!1,centerPadding:"40px",slidesToShow:5}},{breakpoint:1199.98,settings:{arrows:!1,centerMode:!1,centerPadding:"40px",slidesToShow:4}},{breakpoint:991.98,settings:{arrows:!1,centerMode:!1,centerPadding:"40px",slidesToShow:3}},{breakpoint:767.98,settings:{arrows:!1,centerMode:!1,centerPadding:"40px",slidesToShow:2}}]}),e(".dracula-slider").slick({centerMode:!0,centerPadding:"60px",slidesToShow:4,autoplay:!0,arrows:!1,autoplaySpeed:2e3,responsive:[{breakpoint:1199.98,settings:{arrows:!1,centerMode:!1,centerPadding:"40px",slidesToShow:3}},{breakpoint:991.98,settings:{arrows:!1,centerMode:!1,centerPadding:"40px",slidesToShow:2}},{breakpoint:767.98,settings:{arrows:!1,centerMode:!1,centerPadding:"40px",slidesToShow:1}}]})},initFunFactCounter:function(){e(".counter").counterUp({delay:16,time:1500})},handleContactForm:function(){e(".contact-form .tab-item").removeClass("active"),e(this).addClass("active"),e(".contact-form-wrap").removeClass("active"),e(".contact-form-wrap.form-".concat(e(this).data("target"))).addClass("active")},handleToTop:function(){e("html, body").animate({scrollTop:0},"fast")},handlePricingItem:function(){e(".item-price").removeClass("active"),e(this).addClass("active")},initImageCompare:function(){e(".reader-mode-image-compare").twentytwenty({default_offset_pct:.5,before_label:"General View",after_label:"Reader Mode View",no_overlay:!0})},changeDraculaHeroImage:function(){var t=e(".dracula-hero-image");setInterval((function(){var a=t.attr("src"),o=a.includes("hero-dark");t.attr("src",a.replace(o?"hero-dark":"hero-light",o?"hero-light":"hero-dark")),e(".mode-btn").removeClass("active"),e(".mode-btn.mode-".concat(o?"light":"dark")).addClass("active")}),2e3)}},e(document).ready(t.init)})()})();