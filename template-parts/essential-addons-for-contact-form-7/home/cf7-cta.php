<section class="cf7-cta">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="cta-content text-center text-lg-start">
                    <h3>Ready to Contact Form 7 Extended in Your website?</h3>
                    <p>Best Contact Form 7 Extended plugin for WordPress to integrate, embed, download, browse, search, share your Google Drive </p>
                </div>
            </div>

            <div class="col-lg-5 text-center text-lg-end">
                <div class="cta-actions mt-5 mt-lg-0">
                    <a href="" class="bt1">Try Live Demo</a>
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

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.target === ctaSection && entry.isIntersecting) {
                        document.body.classList.add('active-bg');
                        document.querySelector('<?php echo $toggleElement; ?>').style.opacity = 0;
                        footerSection.style.opacity = 0;
                    } else if (entry.target === ctaSection && !entry.isIntersecting) {
                        document.body.classList.remove('active-bg');
                        document.querySelector('<?php echo $toggleElement; ?>').style.opacity = 1;
                        footerSection.style.opacity = 1;
                    }

                    if (entry.target === footerSection && entry.isIntersecting) {
                        document.body.classList.remove('active-bg');
                        document.querySelector('<?php echo $toggleElement; ?>').style.opacity = 1;
                        footerSection.style.opacity = 1;
                    } else if (entry.target === footerSection && entry.isIntersecting) {
                        document.body.classList.add('active-bg');
                        document.querySelector('<?php echo $toggleElement; ?>').style.opacity = 0;
                        footerSection.style.opacity = 0;
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
