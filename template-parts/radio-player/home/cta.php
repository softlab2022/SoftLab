<section id="cta">
    <div class="container">
        <div class="row flex-column flex-xl-row align-items-center">
            <div class="col-12 col-xl-7 m-auto">
                <div class="cta-content text-center text-xl-start">
                    <h3>Start Playing Your Online Radio Station Now</h3>
                    <p class="mt-3">Try out the best Radio Player plugin in the market for unstoppable radio
                        streaming.</p>
                </div>
            </div>

            <div class="col-12 col-xl-5 ms-auto mt-md-4">
                <div class="cta-actions text-center">
                    <a href="https://demo.softlabbd.com/?product=radio-player" class="btn bt">Try Live Demo</a>
                    <a href="/radio-player-pricing" class="btn bt1">Get Started</a>
                </div>
            </div>
        </div>
    </div>
</section>


<?php
$current_slug = basename(get_permalink());


switch ($current_slug) {
    case 'radio-player':

?>
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                const ctaSection = document.querySelector('#cta');
                const footerSection = document.querySelector('footer');

                // Function to handle intersection changes
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.target === ctaSection && entry.isIntersecting) {
                            document.body.classList.add('active-bg');
                            document.querySelector('#radio-addon').style.opacity = 0;
                            // document.querySelector('#testimonial').style.opacity = 0;
                            document.querySelector('footer').style.opacity = 0;
                        } else if (entry.target === ctaSection && !entry.isIntersecting) {
                            document.body.classList.remove('active-bg');
                            document.querySelector('#radio-addon').style.opacity = 1;
                            // document.querySelector('#testimonial').style.opacity = 1;
                            document.querySelector('footer').style.opacity = 1;
                        }

                        if (entry.target === footerSection && entry.isIntersecting) {
                            document.body.classList.remove('active-bg');
                            // document.querySelector('footer').style.visibility = "visibile";
                            document.querySelector('#radio-addon').style.opacity = 1;
                            // document.querySelector('#testimonial').style.opacity = 1;
                            document.querySelector('footer').style.opacity = 1;
                        } else if (entry.target === footerSection && entry.isIntersecting) {
                            document.body.classList.add('active-bg');
                            // document.querySelector('footer').style.visibility = "visibile";
                            document.querySelector('#radio-addon').style.opacity = 0;
                            // document.querySelector('#testimonial').style.opacity = 0;
                            document.querySelector('footer').style.opacity = 0;
                        }
                    });
                }, {
                    rootMargin: '0px 0px -10% 0px',
                    threshold: 0.5
                });

                if (ctaSection) observer.observe(ctaSection);
                if (footerSection) observer.observe(footerSection);
            });
        </script>
    <?php
        break;

    case 'radio-player-pricing':
    ?>
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                const ctaSection = document.querySelector('#cta');
                const footerSection = document.querySelector('footer');

                // Function to handle intersection changes
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.target === ctaSection && entry.isIntersecting) {
                            document.body.classList.add('active-bg');
                            // document.querySelector('#radio-addon').style.opacity = 0;
                            document.querySelector('#testimonial').style.opacity = 0;
                            document.querySelector('footer').style.opacity = 0;
                        } else if (entry.target === ctaSection && !entry.isIntersecting) {
                            document.body.classList.remove('active-bg');
                            // document.querySelector('#radio-addon').style.opacity = 1;
                            document.querySelector('#testimonial').style.opacity = 1;
                            document.querySelector('footer').style.opacity = 1;
                        }

                        if (entry.target === footerSection && entry.isIntersecting) {
                            document.body.classList.remove('active-bg');
                            // document.querySelector('footer').style.visibility = "visibile";
                            // document.querySelector('#radio-addon').style.opacity = 1;
                            document.querySelector('#testimonial').style.opacity = 1;
                            document.querySelector('footer').style.opacity = 1;
                        } else if (entry.target === footerSection && entry.isIntersecting) {
                            document.body.classList.add('active-bg');
                            // document.querySelector('footer').style.visibility = "visibile";
                            // document.querySelector('#radio-addon').style.opacity = 0;
                            document.querySelector('#testimonial').style.opacity = 0;
                            document.querySelector('footer').style.opacity = 0;
                        }
                    });
                }, {
                    rootMargin: '0px 0px -10% 0px',
                    threshold: 0.5
                });

                if (ctaSection) observer.observe(ctaSection);
                if (footerSection) observer.observe(footerSection);
            });
        </script>
<?php
        break;

    default:
        break;
}

?>
