<?php

$free_features = [
    'Shortcode Player',
    'Current Song Title',
    'MP3 + AAC + M3U8 Compatibility',
    'Add Unlimited Players',
    'Realtime Player Editing Preview',
    'Player Duplicator',
    'Multiple Player Instance',
    'Mobile Media Notification',
    'Gutenberg Editor Block',
    'Elementor Page Builder Widget',
    'Custom CSS',
    'Player Embed',
];

$pro_features = [
    'HTTP Stream Player',
    'Full-width Sticky Player',
    'Sticky Player on Specific Pages',
    'Multiple Stations in a Player',
    'Multiple Player Skins',
    'Stations Playlist',
    'Play Statistics',
    'Popup Player',
    'Size Customizations',
    'Color Customizations',
];

?>

<section id="pricing-hero">
    <div class="container">

        <div class="row">
            <div class="col-lg-4 m-auto">
                <div class="section-headeing text-center">
                    <p>Sun's Out, Savings In</p>
                    <!-- <h1>Unbeatable Summer <span>Deals!</span> </h1> -->
                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/home/offers/summer-deals.png" alt="summer-deals">
                </div>
                <div class="offers-img text-center">
                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/home/offers/offer-img.png" alt="offer-img">
                </div>
            </div>
        </div>

        <div class="row align-items-center">
            <div class="col-lg-6 m-auto">
                <div class="hero-content text-center">
                    <h2>Simple Pricing, Unbeatable Value</h2>
                    <p>Join 5000+ User's Happy Community</p>
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
            <div class="col-lg-5 col-md-6 ms-auto">
                <div class="price-table">

                    <div class="pricing-head text-center">
                        <span class="pricing-head-title">FREE</span>
                        <span class="pricing-head-description">Started with Basics</span>
                        <div class="price-text">
                            <span class="price-value free">00</span>
                        </div>
                        <span class="support-text">No Support</span>
                    </div>

                    <div class="price-features align-items-center">
                        <?php foreach ($free_features as $feature) { ?>
                            <div class="feature-item">
                                <i class="fa-solid fa-check"></i>
                                <span><?php echo $feature; ?></span>
                            </div>
                        <?php } ?>
                    </div>

                    <a href="https://wordpress.org/plugins/radio-player/" class="btn buy-btn">Download Free</a>

                </div>
            </div>

            <div class="col-lg-5 col-md-6 me-auto">
                <div class="price-table table-pro">
                    <div class="pricing-head text-center">
                        <span class="pricing-head-title">PRO</span>
                        <span class="pricing-head-description">Most Popular Package</span>

                        <div class="site">
                            <div class="dropdown license-dropdown">
                                <button class="btn-pr dropdown-toggle" type="button" id="license-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <li>
                                        <a class="dropdown-item" href="#" data-license="100">100 Sites License</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- <div class="price-text annual license-1">
                            <span class="price-value annual single">39</span>
                            <span class="price-value annual five">99</span>
                            <span class="price-value annual hundred">259</span>

                            <span class="price-value lifetime single">99</span>
                            <span class="price-value lifetime five">199</span>
                            <span class="price-value lifetime hundred">599</span>

                            <span class="price-suffix annual">/ Per year</span>
                            <span class="price-suffix lifetime">/ Billed once</span>
                        </div> -->

                        <div class="price-text annual license-1">

                            <div class="offer-price annual single">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$97 </p>
                                    <span class="price-dis">70%OFF</span>
                                </div>

                            </div>
                            <div class="offer-price annual five">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$316 </p>
                                    <span class="price-dis">75%OFF</span>
                                </div>

                            </div>
                            <div class="offer-price annual hundred">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$745 </p>
                                    <span class="price-dis">80%OFF</span>
                                </div>

                            </div>

                            <span class="price-value annual single">29</span>
                            <span class="price-value annual five">79</span>
                            <span class="price-value annual hundred">149</span>

                            <div class="offer-price lifetime single">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$316 </p>
                                    <span class="price-dis">75%OFF</span>
                                </div>

                            </div>
                            <div class="offer-price lifetime five">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$745 </p>
                                    <span class="price-dis">80%OFF</span>
                                </div>

                            </div>
                            <div class="offer-price lifetime hundred">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$1994 </p>
                                    <span class="price-dis">85%OFF</span>
                                </div>

                            </div>

                            <span class="price-value lifetime single">79</span>
                            <span class="price-value lifetime five">149</span>
                            <span class="price-value lifetime hundred">299</span>

                            <span class="price-suffix annual">/ Per year</span>
                            <span class="price-suffix lifetime">/ Billed once</span>
                        </div>

                        <span class="support-text">Priority Email Support</span>
                    </div>

                    <div class="price-features align-items-center">
                        <?php foreach ($pro_features as $feature) { ?>
                            <div class="feature-item">
                                <i class="fa-solid fa-check"></i>
                                <span><?php echo $feature; ?></span>
                            </div>
                        <?php } ?>
                    </div>

                    <a href="#" class="btn buy-btn buy-btn-pro">Buy Now</a>

                </div>
            </div>
        </div>
    </div>
</section>

<script>
    ;
    (function($) {
        $(document).on('ready', function() {
            var handler = FS.Checkout.configure({
                plugin_id: '8684',
                plan_id: '14508',
                public_key: 'pk_6175576896c0d8c125d31e42287ab',
                image: "<?php echo get_template_directory_uri(); ?>/assets/images/products/radio-player.png",
            });

            $('.buy-btn-pro').on('click', function(e) {
                e.preventDefault();

                handler.open({
                    name: 'Integrate Google Drive',
                    licenses: $('.license-dropdown .dropdown-item.active').data('license'),

                    // You can consume the response for after purchase logic.
                    purchaseCompleted: function(response) {
                        // The logic here will be executed immediately after the purchase confirmation.                                // alert(response.user.email);
                    },

                    success: function(response) {
                        // The logic here will be executed after the customer closes the checkout, after a successful purchase.                                // alert(response.user.email);
                    }
                });
            });
        });
    })(jQuery);
</script>