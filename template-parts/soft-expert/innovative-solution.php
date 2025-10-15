
<!-- Innovative Solutions -->
<section id="innovative-solution">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="innovative-solution-heading text-center">
                    <h2>Innovative Solutions Made for You</h2>
                    <p>Whether it’s a plugin, integration, or advanced customization, we turn your vision into a reliable solution. Our top-notch developers are trusted by businesses worldwide </p>
                </div>
            </div>
            <div class="col-md-10 m-auto">
                <div class="soft-expert-form">
                    <h4>Submit Your Details</h4>
                    <?php
                    if (!empty(get_option('softexpert_contact_us_shortcode'))) {
                        echo do_shortcode(get_option('softexpert_contact_us_shortcode'));
                    } else {
                        echo 'no shortcode found';
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>