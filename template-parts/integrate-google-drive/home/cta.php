<section class="google-drive-cta">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="cta-content text-center text-lg-start">
                    <h3>Ready to Integrate Google Drive into Your Website?</h3>
                    <p>Best Google Drive cloud solution plugin for WordPress to integrate your Google Drive files
                        directly into your WordPress Website.</p>
                </div>
            </div>

            <div class="col-lg-5 text-center text-lg-end">
                <div class="cta-actions mt-5 mt-lg-0">
                    <a href="https://softlabbd.com/demo-portal?product=integrate-google-drive" class="bt">Try Live Demo</a>
                    <a href="/integrate-google-drive-pricing" class="bt1">Buy Now</a>
                </div>
            </div>
        </div>
    </div>
</section>


<?php
$current_slug = basename(get_permalink());

?>
<script>
    document.addEventListener("DOMContentLoaded", function() {
        const ctaSection = document.querySelector('.google-drive-cta');
        const footerSection = document.querySelector('footer');
        let lastScrollTop = window.scrollY;
        let targetSelector;

        switch ("<?php echo $current_slug; ?>") {
            case 'integrate-google-drive':
            case 'integrate-google-drive-pricing':
                targetSelector = '.testimonial';
                break;
            case 'integrate-google-drive-integrations':
                targetSelector = '#ecommerce-plugins';
                break;
            default:
                return;
        }

        const targetElement = document.querySelector(targetSelector);

        // Function to handle intersection changes
        const observer = new IntersectionObserver((entries) => {
            const scrollTop = window.scrollY;
            const scrollingUp = scrollTop < lastScrollTop;
            lastScrollTop = scrollTop;

            entries.forEach(entry => {
                if (entry.target === ctaSection) {
                    if (entry.isIntersecting) {
                        document.body.classList.add('active-bg');
                        targetElement?.style.setProperty('opacity', 0);
                        footerSection?.style.setProperty('opacity', 0);
                    } else {
                        document.body.classList.remove('active-bg');
                        targetElement?.style.setProperty('opacity', 1);
                        footerSection?.style.setProperty('opacity', 1);
                    }
                }

                if (entry.target === footerSection) {
                    if (entry.isIntersecting) {
                        document.body.classList.remove('active-bg');
                        targetElement?.style.setProperty('opacity', 1);
                        footerSection?.style.setProperty('opacity', 1);
                    } else if (!entry.isIntersecting && scrollingUp) {
                        document.body.classList.add('active-bg');
                        targetElement?.style.setProperty('opacity', 0);
                        footerSection?.style.setProperty('opacity', 0);
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
?>
