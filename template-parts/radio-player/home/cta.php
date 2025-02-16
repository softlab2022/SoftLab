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
    document.addEventListener("DOMContentLoaded", function () {
        const ctaSection = document.querySelector('#cta');
        const footerSection = document.querySelector('footer');
        let lastScrollTop = window.scrollY;
        let targetSelector;

        switch ("<?php echo $current_slug; ?>") {
            case 'radio-player':
                targetSelector = '#radio-addon';
                break;
            case 'radio-player-pricing':
                targetSelector = '#testimonial';
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
        break;

    case 'radio-player-pricing':
    ?>
     <script>
    document.addEventListener("DOMContentLoaded", function () {
        const ctaSection = document.querySelector('#cta');
        const footerSection = document.querySelector('footer');
        let lastScrollTop = window.scrollY;
        let targetSelector;

        switch ("<?php echo $current_slug; ?>") {
            case 'radio-player':
                targetSelector = '#radio-addon';
                break;
            case 'radio-player-pricing':
                targetSelector = '#testimonial';
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
        break;

    default:
        break;
}

?>