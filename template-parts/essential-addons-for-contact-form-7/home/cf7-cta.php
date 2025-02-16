<section class="cf7-cta">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="cta-content text-center text-lg-start">
                    <h3>Supercharge Your Contact Form 7 Functionality</h3>
                    <p>Essential Addons for Contact Form 7, adds powerful fields, features and customization options to make your form more creative</p>
                </div>
            </div>

            <div class="col-lg-5 text-center text-lg-end">
                <div class="cta-actions mt-5 mt-lg-0">
                    <a href="https://wordpress.org/plugins/essential-addons-for-contact-form-7/" class="bt1">Try Live Demo</a>
                    <a href="/essential-addons-for-contact-form-7-pricing/" class="bt">Buy Now</a>
                </div>
            </div>

        </div>
    </div>
</section>


<?php
$current_slug = basename(get_permalink());

function setupObserver($ctaSelector, $footerSelector, $toggleElement) {
?>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const ctaSection = document.querySelector('<?php echo $ctaSelector; ?>');
            const footerSection = document.querySelector('<?php echo $footerSelector; ?>');
            const toggleElement = document.querySelector('<?php echo $toggleElement; ?>');
            let lastScrollTop = window.scrollY;

            if (!ctaSection || !footerSection || !toggleElement) return;

            const observer = new IntersectionObserver((entries) => {
                const scrollTop = window.scrollY;
                const scrollingUp = scrollTop < lastScrollTop;
                lastScrollTop = scrollTop;

                entries.forEach(entry => {
                    if (entry.target === ctaSection) {
                        if (entry.isIntersecting) {
                            document.body.classList.add('active-bg');
                            toggleElement?.style.setProperty('opacity', 0);
                            footerSection?.style.setProperty('opacity', 0);
                        } else {
                            document.body.classList.remove('active-bg');
                            toggleElement?.style.setProperty('opacity', 1);
                            footerSection?.style.setProperty('opacity', 1);
                        }
                    }

                    if (entry.target === footerSection) {
                        if (entry.isIntersecting) {
                            document.body.classList.remove('active-bg');
                            toggleElement?.style.setProperty('opacity', 1);
                            footerSection?.style.setProperty('opacity', 1);
                        } else if (!entry.isIntersecting && scrollingUp) {
                            document.body.classList.add('active-bg');
                            toggleElement?.style.setProperty('opacity', 0);
                            footerSection?.style.setProperty('opacity', 0);
                        }
                    }
                });
            }, {
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.5
            });

            observer.observe(ctaSection);
            observer.observe(footerSection);
        });
    </script>
<?php
}

switch ($current_slug) {
    case 'essential-addons-for-contact-form-7':
        setupObserver('.cf7-cta', 'footer', '#cf7-faq');
        break;

    case 'essential-addons-for-contact-form-7-features':
        setupObserver('.cf7-cta', 'footer', '.feature-submission-id');
        break;

    case 'essential-addons-for-contact-form-7-pricing':
        setupObserver('.cf7-cta', 'footer', '#cf7-faq');
        break;

    default:
        break;
}
?>
