<section class="google-drive-cta">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="cta-content text-center text-lg-start">
                    <h3>Ready to Integrate the Google Drive in Your website?</h3>
                    <p>Best Google Drive cloud solution plugin for WordPress to integrate your Google Drive files
                        directly into your WordPress Website.</p>
                </div>
            </div>

            <div class="col-lg-5 text-center text-lg-end">
                <div class="cta-actions mt-5 mt-lg-0">
                    <a href="https://demo.softlabbd.com/?product=integrate-google-drive" class="bt">Try Live Demo</a>
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

        // Function to handle intersection changes
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === ctaSection && entry.isIntersecting) {
                    document.body.classList.add('active-bg');
                    document.querySelector(targetSelector).style.opacity = 0;
                    footerSection.style.opacity = 0;
                } else if (entry.target === ctaSection && !entry.isIntersecting) {
                    document.body.classList.remove('active-bg');
                    document.querySelector(targetSelector).style.opacity = 1;
                    footerSection.style.opacity = 1;
                }

                if (entry.target === footerSection && entry.isIntersecting) {
                    document.body.classList.remove('active-bg');
                    document.querySelector(targetSelector).style.opacity = 1;
                    footerSection.style.opacity = 1;
                } else if (entry.target === footerSection && entry.isIntersecting) {
                    document.body.classList.add('active-bg');
                    document.querySelector(targetSelector).style.opacity = 0;
                    footerSection.style.opacity = 0;
                }
            });
        }, {
            rootMargin: '0% 0px -10% 0px',
            threshold: 0.5
        });

        if (ctaSection) observer.observe(ctaSection);
        if (footerSection) observer.observe(footerSection);
    });
</script>
<?php
?>
