<?php

$free_features = [
	'Reader Mode layout',
	'Estimated Reading Time',
	'Reading Progress Bar',
	'Specific Posts Types',
	'Multiple Display Positions',
	'Print Optimized',
	'Auto Scroll',
	'Light/Dark Mode Theme',
	'Full Screen Mode',
	'Table of Contents',
];

$pro_features = [
	'All Free Features',
	'Text-to-Speech (TTS)',
	'Translation',
	'Multiple Display options',
	'Multiple Button Layouts',
	'Custom Button Text',
	'Custom Button Colors',
	'Custom Button Image Icon',
	'Custom CSS',
];

?>

<section id="pricing-hero">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7 m-auto">

                <div class="hero-content text-center">
                    <h2>We Offer Numerous Pocket-Friendly Price Distribution</h2>
                    <p>Join Our 1,000+ Happy Users Community</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="pricing">
    <div class="container">
        
        <div class="row">
            <div class="col-md-12">

                <div class="pricing-switcher">

                    <span class="switch-text annual">Annual</span>
                    <span class="switch"></span>
                    <span class="switch-text lifetime">Lifetime</span>

                </div>

            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="price-tables annual">

                    <div class="row">
                        <div class="col-lg-5 ms-auto">
                            <!-- FREE -->
                            <div class="price-table price-table__free">
                                <div class="pricing-head text-center">
                                <div class="pricing-head text-center">
                                    <span class="pricing-head-title">FREE</span>
                                    <span class="pricing-head-description">Started with Basics</span>
                                    <div class="price-text">
                                        <span class="price-value free">00</span>
                                    </div>
                                    <span class="support-text">No Support</span>
                                </div>

                                    <span class="plan-desc">Most basic Plan to Test its Features & Performance</span>
                                </div>

                                <div class="price-features align-items-center">
                                    <?php foreach ( $free_features as $feature ) { ?>
                                        <div class="feature-item">
                                            <i class="fa-solid fa-check"></i>
                                            <span><?php echo $feature; ?></span>
                                        </div>
                                    <?php } ?>
                                </div>

                                <a href="https://wordpress.org/plugins/radio-player/" class="btn buy-btn buy-btn-free">Download
                                    Free</a>
                            </div>
                        </div>

                        <div class="col-lg-5 me-auto">
                            <!-- PROFESSIONAL -->
                            <div class="price-table price-table__professional">
                                <div class="pricing-head text-center">
                                <span class="pricing-head-title">PRO</span>
                                <span class="pricing-head-description">Most Popular Package</span>

                                <div class="site">
                                    <div class="dropdown license-dropdown">
                                        <button class="btn-pr dropdown-toggle" type="button" id="license-dropdown"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            Single Site License
                                        </button>

                                        <ul class="dropdown-menu" aria-labelledby="license-dropdown">
                                            <li>
                                                <a class="dropdown-item active" href="#" data-license="1">Single Site
                                                    License</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#" data-license="5">5 Sites License</a>
                                            </li>
                                            <!-- <li>
                                                <a class="dropdown-item" href="#" data-license="100">100 Sites License</a>
                                            </li> -->
                                        </ul>
                                    </div>
                                </div>

                                <div class="price-text annual license-1">
                                    <span class="price-value annual single">29</span>
                                    <span class="price-value annual five">69</span>
                                    <!-- <span class="price-value annual hundred">259</span> -->

                                    <span class="price-value lifetime single">99</span>
                                    <span class="price-value lifetime five">199</span>
                                    <!-- <span class="price-value lifetime hundred">599</span> -->

                                    <span class="price-suffix annual">/ Per year</span>
                                    <span class="price-suffix lifetime">/ Billed once</span>
                                </div>

                                <span class="support-text">Priority Email Support</span>

                                    <span class="plan-desc">Multiple website integrations with premium features <strong>(smart choice)</strong></span>
                                </div>

                                <div class="price-features align-items-center">

                                    <div class="feature-item">
                                        <i class="fa-solid fa-check"></i>
                                        <span>Everything in Personal</span>
                                    </div>
                                    <div class="feature-item">
                                        <i class="fa-solid fa-check"></i>
                                        <span>5 Sites License</span>
                                    </div>

                                    <?php foreach ( $pro_features as $feature ) { ?>
                                        <div class="feature-item">
                                            <i class="fa-solid fa-check"></i>
                                            <span><?php echo $feature; ?></span>
                                        </div>
                                    <?php } ?>
                                </div>

                                <a href="#" class=" buy-btn buy-btn-professional">Buy Now</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
</section>

<script>
    ;(function ($) {
        $(document).on('ready', function () {
            var handler = FS.Checkout.configure({
                plugin_id: '11298',
                plan_id: '19191',
                public_key: 'pk_80967cef60b446d3ea06c0210771f',
                image: "<?php echo get_template_directory_uri(); ?>/assets/images/products/reader-mode.png",
            });

            $('.buy-btn-professional').on('click', function (e) {
                e.preventDefault();

                handler.open({
                    name: 'Reader Mode',
                    licenses: $('.license-dropdown .dropdown-item.active').data('license'),

                    // You can consume the response for after purchase logic.
                    purchaseCompleted: function (response) {
                        // The logic here will be executed immediately after the purchase confirmation.                                // alert(response.user.email);
                    },

                    success: function (response) {
                        // The logic here will be executed after the customer closes the checkout, after a successful purchase.                                // alert(response.user.email);
                    }
                });
            });
        });
    })(jQuery);
</script>

