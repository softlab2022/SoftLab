<section class="cf7-cta">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="cta-content text-center text-lg-start">
                    <h3><?php _e('Supercharge Your Contact Form 7 Functionality', 'softlab'); ?></h3>
                    <p><?php _e('Essential Addons for Contact Form 7, adds powerful fields, features and customization options to make your form more creative', 'softlab'); ?></p>
                </div>
            </div>

            <div class="col-lg-5 text-center text-lg-end">
                <div class="cta-actions mt-5 mt-lg-0">
                    <!-- <a href="https://wordpress.org/plugins/essential-addons-for-contact-form-7/" class="bt1">Try Live Demo</a>
                    <a href="/essential-addons-for-contact-form-7-pricing/" class="bt">Buy Now</a> -->

                    <a href="https://wordpress.org/plugins/essential-addons-for-contact-form-7/" class="bt1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path fill="currentColor" d="M19.31 12.051c.381 0 .69.314.69.7v4.918c-.006.67-.127 1.2-.399 1.594c-.328.476-.908.692-1.747.737l-15.903-.002c-.646-.046-1.168-.302-1.507-.777c-.302-.423-.446-.95-.444-1.558V12.75c0-.386.309-.7.69-.7s.688.314.688.7v4.913c0 .333.065.572.182.736c.081.114.224.184.44.201l15.817.001c.42-.023.627-.1.655-.14c.084-.123.146-.393.15-.8V12.75c0-.386.308-.7.689-.7M9.99 0c.38 0 .69.313.69.7l-.001 10.869l3.062-3.079a.68.68 0 0 1 .975.004a.707.707 0 0 1-.004.99l-4.356 4.38a.68.68 0 0 1-.973-.003l-4.296-4.38a.707.707 0 0 1 .002-.99a.68.68 0 0 1 .975.002L9.3 11.794V.699C9.3.313 9.61 0 9.99 0" />
                        </svg> <?php _e('Download FREE', 'softlab'); ?></a>
                    <a href="/essential-addons-for-contact-form-7-pricing/" class="bt"><i class="fa-solid fa-crown"></i> <?php _e('Get PRO', 'softlab'); ?></a>
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
