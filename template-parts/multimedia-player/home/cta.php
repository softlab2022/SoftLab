<section class="multimedia-player-cta">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="cta-content text-center text-lg-start">
                    <h3>Take Your Media Player Experience to the Next Level</h3>
                    <p>Multimedia Player brings your entertainment to the next level with its personalized audio, video, and podcast player streaming ability.</p>
                </div>
            </div>

            <div class="col-lg-5 text-center text-lg-end">
                <div class="cta-actions mt-5 mt-lg-0">
                    <a href="https://wordpress.org/plugins/soft-multimedia-player//" target="_blank" class="bt"><i class="fa-solid fa-download"></i> Download FREE</a>
                    <a href="/soft-multimedia-player/pricing/" class="bt1"><i class="fa-solid fa-crown"></i> Get PRO</a>
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
        const ctaSection = document.querySelector('.multimedia-player-cta');
        const footerSection = document.querySelector('footer');
        let lastScrollTop = window.scrollY;
        let targetSelector;

        switch ("<?php echo $current_slug; ?>") {
            case 'soft-multimedia-player':
            case 'soft-multimedia-player-pricing':
                targetSelector = '#faq';
                break;
            case 'soft-multimedia-player-skin':
                targetSelector = '#skins-main';
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
