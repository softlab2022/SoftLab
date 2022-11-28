<?php

$free_features = [
	'Documents Embed',
	'File Browser',
	'Preview, Copy, Move, Delete',
	'Search Files',
	'Shortcode Builder',
	'Insert/ Generate Direct View Links',
	'Links Download Files',
];

$pro_features = [
	'All Free Features',
	'Fill Browser Module',
	'File Uploader Module',
	'Photo Gallery Module',
	'Audio and Video Player Module',
	'File Search Module',
	'Add Multiple Google Drive Accounts',
	'WooCommerce Integration',
	'Easy Digital Downloads Integration',
];

?>

<section id="pricing-hero" class="black-friday">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7 m-auto">

                <div class="hero-content text-center">
                    <img class="img-fluid black-friday-img"
                         src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/pricing/black-friday.png"
                         alt="Black Friday Offer">
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

                    <img class="switch-offer annual"
                         src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/pricing/50-off-bf.png"
                         alt="50% OFF">

                    <span class="switch-text annual">Annual</span>
                    <span class="switch"></span>
                    <span class="switch-text lifetime">Lifetime</span>

                    <img class="switch-offer lifetime"
                         src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/pricing/60-off-bf.png"
                         alt="60% OFF">
                </div>

            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="price-tables annual">

                    <!-- FREE -->
                    <div class="price-table price-table__free">
                        <div class="pricing-head text-center">
                            <span class="pricing-head-title">FREE</span>

                            <div class="price-text free">
                                <span class="price-value annual">Always Free</span>
                                <span class="price-value lifetime">Always Free</span>
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

                    <!-- PERSONAL -->
                    <div class="price-table price-table__personal">
                        <div class="pricing-head text-center">
                            <div class="offer-badge personal">
                                <div class="offer-value annual">30% OFF</div>
                                <div class="offer-value lifetime">35% OFF</div>
                            </div>

                            <span class="pricing-head-title">PERSONAL</span>

                            <div class="price-text personal">

                                <div class="regular-price">
                                    <span class="price-value annual">$45</span>
                                    <span class="price-value lifetime">$129</span>
                                </div>

                                <div class="offer-price">
                                    <span class="price-value annual">$35</span>
                                    <span class="price-value lifetime">$99</span>

                                    <span class="price-suffix annual">/ Year</span>
                                    <span class="price-suffix lifetime">/ Billed once
                                </div>
                            </div>

                            <span class="plan-desc">Applicable if you are running a single website</span>
                        </div>

                        <div class="price-features align-items-center">
                            <div class="feature-item">
                                <i class="fa-solid fa-check"></i>
                                <span>Everything in Free</span>
                            </div>
                            <div class="feature-item">
                                <i class="fa-solid fa-check"></i>
                                <span>1 Site License</span>
                            </div>

							<?php foreach ( $pro_features as $feature ) { ?>
                                <div class="feature-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span><?php echo $feature; ?></span>
                                </div>
							<?php } ?>
                        </div>

                        <a href="#" class=" buy-btn buy-btn-personal">Buy Now</a>
                    </div>

                    <!-- PROFESSIONAL -->
                    <div class="price-table price-table__professional">
                        <div class="pricing-head text-center">
                            <div class="offer-badge professional">
                                <div class="offer-value annual">40% OFF</div>
                                <div class="offer-value lifetime">45% OFF</div>
                            </div>

                            <span class="pricing-head-title">PROFESSIONAL</span>

                            <div class="price-text professional">

                                <div class="regular-price">
                                    <span class="price-value annual">$129</span>
                                    <span class="price-value lifetime">$259</span>
                                </div>

                                <div class="offer-price">
                                    <span class="price-value annual">$99</span>
                                    <span class="price-value lifetime">$199</span>

                                    <span class="price-suffix annual">/ Year</span>
                                    <span class="price-suffix lifetime">/ Billed once
                                </div>
                            </div>

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

                    <!-- BUSINESS -->
                    <div class="price-table price-table__business">
                        <div class="pricing-head text-center">
                            <div class="offer-badge personal">
                                <div class="offer-value annual">50% OFF</div>
                                <div class="offer-value lifetime">60% OFF</div>
                            </div>

                            <span class="pricing-head-title">BUSINESS</span>

                            <div class="price-text personal">

                                <div class="regular-price">
                                    <span class="price-value annual">$336</span>
                                    <span class="price-value lifetime">$1012</span>
                                </div>

                                <div class="offer-price">
                                    <span class="price-value annual">$259</span>
                                    <span class="price-value lifetime">$779</span>

                                    <span class="price-suffix annual">/ Year</span>
                                    <span class="price-suffix lifetime">/ Billed once
                                </div>
                            </div>

                            <span class="plan-desc">Unlimited website integrations with unmetered features</span>
                        </div>

                        <div class="price-features align-items-center">

                            <div class="feature-item">
                                <i class="fa-solid fa-check"></i>
                                <span>Everything in Professional</span>
                            </div>
                            <div class="feature-item">
                                <i class="fa-solid fa-check"></i>
                                <span>Unlimited Sites License</span>
                            </div>

							<?php foreach ( $pro_features as $feature ) { ?>
                                <div class="feature-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span><?php echo $feature; ?></span>
                                </div>
							<?php } ?>
                        </div>

                        <a href="#" class=" buy-btn buy-btn-business">Buy Now</a>
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
                plugin_id: '4227',
                plan_id: '6865',
                public_key: 'pk_6acab182f004d200ec631d063d6c4',
                image: "<?php echo get_template_directory_uri(); ?>/assets/images/products/wp-radio.png",
            });

            $('.buy-btn-pro').on('click', function (e) {
                e.preventDefault();

                handler.open({
                    name: 'Integrate Google Drive',
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

