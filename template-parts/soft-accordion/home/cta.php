<section class="soft-accordion-cta">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="cta-content text-center text-lg-start">
                    <h3>Unlock Modern Look with Stylish Accordions</h3>
                    <p>Make your content stand out with a stylish, responsive accordion. Improve user interaction and keep visitors engaged with a simple, effective design. Try it today!</p>
                </div>
            </div>

            <div class="col-lg-5 text-center text-lg-end">
                <div class="cta-actions mt-5 mt-lg-0">
                    <a href="https://demo.softlabbd.com/?product=soft-accordion" class="bt1">Try Live Demo</a>
                    <a href="/soft-accordion-pricing/" class="bt">Buy Now</a>
                </div>
            </div>


        </div>
    </div>
</section>


<?php
$current_slug = basename(get_permalink());


switch ($current_slug) {
    case 'soft-accordion':

?>
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                const ctaSection = document.querySelector('.soft-accordion-cta');
                const footerSection = document.querySelector('footer');
                let lastScrollTop = window.scrollY;

                // Function to handle intersection changes
                const observer = new IntersectionObserver((entries) => {
                    const scrollTop = window.scrollY;
                    const scrollingUp = scrollTop < lastScrollTop;
                    lastScrollTop = scrollTop;

                    entries.forEach(entry => {
                        if (entry.target === ctaSection) {
                            if (entry.isIntersecting) {
                                document.body.classList.add('active-bg');
                                document.querySelector('#ex-feature')?.style.setProperty('opacity', 0);
                                document.querySelector('footer')?.style.setProperty('opacity', 0);
                            } else {
                                document.body.classList.remove('active-bg');
                                document.querySelector('#ex-feature')?.style.setProperty('opacity', 1);
                                document.querySelector('footer')?.style.setProperty('opacity', 1);
                            }
                        }

                        if (entry.target === footerSection) {
                            if (entry.isIntersecting) {
                                document.body.classList.remove('active-bg');
                                document.querySelector('#ex-feature')?.style.setProperty('opacity', 1);
                                document.querySelector('footer')?.style.setProperty('opacity', 1);
                            } else if (!entry.isIntersecting && scrollingUp) {
                                document.body.classList.add('active-bg');
                                document.querySelector('#ex-feature')?.style.setProperty('opacity', 0);
                                document.querySelector('footer')?.style.setProperty('opacity', 0);
                            }
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

    case 'soft-accordion-pricing':
    ?>
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                const ctaSection = document.querySelector('.soft-accordion-cta');
                const footerSection = document.querySelector('footer');
                let lastScrollTop = window.scrollY;

                // Function to handle intersection changes
                const observer = new IntersectionObserver((entries) => {
                    const scrollTop = window.scrollY;
                    const scrollingUp = scrollTop < lastScrollTop;
                    lastScrollTop = scrollTop;

                    entries.forEach(entry => {
                        if (entry.target === ctaSection) {
                            if (entry.isIntersecting) {
                                document.body.classList.add('active-bg');
                                document.querySelector('#faq-accordion')?.style.setProperty('opacity', 0);
                                document.querySelector('footer')?.style.setProperty('opacity', 0);
                            } else {
                                document.body.classList.remove('active-bg');
                                document.querySelector('#faq-accordion')?.style.setProperty('opacity', 1);
                                document.querySelector('footer')?.style.setProperty('opacity', 1);
                            }
                        }

                        if (entry.target === footerSection) {
                            if (entry.isIntersecting) {
                                document.body.classList.remove('active-bg');
                                document.querySelector('#faq-accordion')?.style.setProperty('opacity', 1);
                                document.querySelector('footer')?.style.setProperty('opacity', 1);
                            } else if (!entry.isIntersecting && scrollingUp) {
                                document.body.classList.add('active-bg');
                                document.querySelector('#faq-accordion')?.style.setProperty('opacity', 0);
                                document.querySelector('footer')?.style.setProperty('opacity', 0);
                            }
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