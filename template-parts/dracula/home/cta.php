<section id="cta-dracula">
    <div class="container cta-dracula">
        <div class="row">
            <div class="col-lg-7 m-auto">
                <div class="section-head text-center">
                    <h3>Ready to Boost Your Website Accessibility?</h3>
                    <p> <span> Dracula Dark Mode </span>is the perfect solution for anyone looking to enhance their website accessibility by integrating dark mode to their website. Upgrade your website today and experience the ultimate dark mode experience with Dracula Dark Mode.</p>
                    <div class="cta-button">
                        <a href="https://demo.softlabbd.com/?product=dracula-dark-mode" class="free-btn">Try Live Demo</a>
                        <a href="/dracula-dark-mode-pricing/" class="view-pricing">Get PRO</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<?php
$current_slug = basename(get_permalink());


switch ($current_slug) {
    case 'dracula-dark-mode':

?>
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                const ctaSection = document.querySelector('#cta-dracula');
                const footerSection = document.querySelector('footer');

                // Function to handle intersection changes
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.target === ctaSection && entry.isIntersecting) {
                            document.body.classList.add('active-bg');
                            document.querySelector('#compatibility').style.opacity = 0;
                            document.querySelector('footer').style.opacity = 0;
                        } else if (entry.target === ctaSection && !entry.isIntersecting) {
                            document.body.classList.remove('active-bg');
                            document.querySelector('#compatibility').style.opacity = 1;
                            document.querySelector('footer').style.opacity = 1;
                        }

                        if (entry.target === footerSection && entry.isIntersecting) {
                            document.body.classList.remove('active-bg');
                            // document.querySelector('footer').style.visibility = "visibile";
                            document.querySelector('#compatibility').style.opacity = 1;
                            document.querySelector('footer').style.opacity = 1;
                        } else if (entry.target === footerSection && entry.isIntersecting) {
                            document.body.classList.add('active-bg');
                            // document.querySelector('footer').style.visibility = "visibile";
                            document.querySelector('#compatibility').style.opacity = 0;
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

    case 'dracula-dark-mode-pricing':
    ?>
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                const ctaSection = document.querySelector('#cta-dracula');
                const footerSection = document.querySelector('footer');

                // Function to handle intersection changes
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.target === ctaSection && entry.isIntersecting) {
                            document.body.classList.add('active-bg');
                            document.querySelector('#testimonial').style.opacity = 0;
                            document.querySelector('footer').style.opacity = 0;
                        } else if (entry.target === ctaSection && !entry.isIntersecting) {
                            document.body.classList.remove('active-bg');
                            document.querySelector('#testimonial').style.opacity = 1;
                            document.querySelector('footer').style.opacity = 1;
                        }

                        if (entry.target === footerSection && entry.isIntersecting) {
                            document.body.classList.remove('active-bg');
                            // document.querySelector('footer').style.visibility = "visibile";
                            document.querySelector('#testimonial').style.opacity = 1;
                            document.querySelector('footer').style.opacity = 1;
                        } else if (entry.target === footerSection && entry.isIntersecting) {
                            document.body.classList.add('active-bg');
                            // document.querySelector('footer').style.visibility = "visibile";
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
