import "./components/pricing";
import "./components/sticky-banner";

(function ($) {
  const app = {
    init: function () {
      app.initTestimonialSlider();
      app.initFunFactCounter();

      $(".contact-form .tab-item").on("click", app.handleContactForm);
      $(".to-top").on("click", app.handleToTop);

      //handle pricing item click
      $(".item-price").on("click", app.handlePricingItem);

      app.initImageCompare();

      app.changeDraculaHeroImage();

      //product check
      const evalidate = document.getElementById('e-validate');
      const emailtype = document.querySelector('input[name=email]');
      //email check

        const emailCheck =(email)=>{
          let paterns=/^[a-z0-9_\.]{1,}@[a-z]{2,}\.[a-z]{2,5}$/;

          return paterns.test(email);
        }
     //email validation

      emailtype.onkeyup=(e)=>{
        let email = e.target.value;
        // console.log(emailCheck(email));
        if(emailCheck(email)){
            evalidate.textContent='a valid email address';
            evalidate.className='text-info';
        }else{
            evalidate.textContent='please Enter a valid email address';
            evalidate.className='text-danger';
        }

      }



      var forms = document.querySelectorAll('.needs-validation');
      // console.log(softlab.ajax_url);
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {

      //   var name = $("#name").val();
      //   var email = $("#email").val();
      //   var pemail = $("#pemail").val();
      //   var website = $("#website").val();
      //   var site = $("#site").val();
      //   var media = $("#media").val();
      //   var app = $("#app").val();
      //   var googledrive = $("#google-drive").val();
      //   var radioplayer = $("#radio-player").val();
      //  // var socialsite = $("#socialsite").val();
      //   var agree = $("#agree").val();

      //   $("#submit").val("Loading...");
      //   $.post(
      //     softlab.ajax_url,
      //     {
      //       action: "affiliate_register",
      //       name: name,
      //       email: email,
      //       pemail: pemail,
      //       googledrive:googledrive,
      //       radioplayer:radioplayer,
      //       website: website,
      //       site: site,
      //       media: media,
      //       app: app,
      //       socialsite: socialsite,
      //       agree: agree,
      //     },
      //   function (data) {
      //       console.log(data);
      //       $("#submit").val("Register");
      //     }
      //   );
          
          
            event.preventDefault();
            event.stopPropagation();
          }
  
          form.classList.add('was-validated')
        });
      });
  
      
    
    },
    

    initTestimonialSlider: function () {
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
        adaptiveHeight: true,
      });

      //google drive
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
        responsive: [
          {
            breakpoint: 1199.98,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 991.98,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767.98,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
      });
      //about slider
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
        autoplaySpeed: 2000,
      });

      $(".compat-slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1399.98,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1199.98,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 991.98,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767.98,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 2,
            },
          },
        ],
      });
      //dracula slider
      $(".dracula-slider").slick({
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 4,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1199.98,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 991.98,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767.98,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
      });
    },

    initFunFactCounter: function () {
      $(".counter").counterUp({
        delay: 16,
        time: 1500,
      });
    },

    handleContactForm: function () {
      $(".contact-form .tab-item").removeClass("active");
      $(this).addClass("active");

      $(".contact-form-wrap").removeClass("active");
      $(`.contact-form-wrap.form-${$(this).data("target")}`).addClass("active");
    },

    handleToTop: function () {
      $("html, body").animate({ scrollTop: 0 }, "fast");
    },

    handlePricingItem: function () {
      $(".item-price").removeClass("active");
      $(this).addClass("active");
    },

    initImageCompare: function () {
      $(".reader-mode-image-compare").twentytwenty({
        //  How much of the before image is visible when the page loads
        default_offset_pct: 0.5,

        // label text
        before_label: "General View",
        after_label: "Reader Mode View",

        //overlay
        no_overlay: true,
      });
    },

    changeDraculaHeroImage: function () {
      const image = $(".dracula-hero-image");

      setInterval(() => {
        const imageSrc = image.attr("src");
        const isDark = imageSrc.includes("hero-dark");
        image.attr(
          "src",
          imageSrc.replace(
            isDark ? "hero-dark" : "hero-light",
            isDark ? "hero-light" : "hero-dark"
          )
        );

        $(".mode-btn").removeClass("active");
        $(`.mode-btn.mode-${isDark ? "light" : "dark"}`).addClass("active");
      }, 2000);
    },
  };

  $(document).ready(app.init);
  


  $(".vertical-center-4").slick({
    dots: false,
    vertical: false,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow:
      '<button type="button" class="slick-prev"><span aria-label="Previous">‹</span></button>',
    nextArrow:
      '<button type="button" class="slick-next"><span aria-label="Next">›</span></button>',
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991.98,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
})(jQuery);
