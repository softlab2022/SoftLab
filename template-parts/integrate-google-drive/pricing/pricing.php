<?php

$free_features = [
    'Gallery Module',
	'Embed Documents Module',
	'Download Links Module',
	'View Links Module',
	'Shortcode Builder',
	'Inline Preview',
	'Classic Editor Integrations',
	'Gutenberg Integrations',
	'Elementor Integrations',
    'Contact Form 7 Integrations',
	'Link Own Google App',
	'Full-Text Search',
	'Zip Download',
	'On Demand Assets Loading',
	'Responsive Design',
	'Multi-Language Support',
	'Share Files',
	'Custom CSS',
	'Export/ Import Data',
	'File Browser Preloader - 2 FREE',
	'Rename, Move, Copy Files & Folders',
	'Exclude Files by Names & Extensions',
	'Multiple File Download',
	'Allow others to use plugin by user roles',
	'Direct File View Link for All Users & Admins',
];

$pro_features = [
	'All Free Features',
	'File Browser Module',
	'File Uploader Module',
	
	'Slider Carousel Module',
	'Media Player Module',
	'File Search Module',
	'Add Multiple Google Drive Accounts',
	'WooCommerce Integration',
	'Easy Digital Downloads Integration',
    'Gravity Forms Integration',
    'Fluent Forms Integration',
    'Formidable Forms Integration',
    'Elementor Form Integration',
    'MetForm Integration',
    
    'WP Forms Integration',
    'Ninja Forms Integration',
    'User Private Files',
    'Automatic Private Folders',
    'Statistics & Email Report',
    'Email Notifications',
    '18+ File Browser Preloaders',
    'Appearance Color Customizations',
    'Gallery Lightbox Preview',
    'Module Size Customization',
    'Auto Synchronize Cloud Files',
];

?>

<section id="pricing-hero">
    <div class="container">
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
						<?php foreach ( $free_features as $feature ) { ?>
                            <div class="feature-item">
                                <i class="fa-solid fa-check"></i>
                                <span><?php echo $feature; ?></span>
                            </div>
						<?php } ?>
                    </div>

                    <a href="https://wordpress.org/plugins/integrate-google-drive" class="btn buy-btn">Download Free</a>

                </div>
            </div>

            <div class="col-lg-5 col-md-6 me-auto">
                <div class="price-table table-pro">
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
                                    <li>
                                        <a class="dropdown-item" href="#" data-license="100">100 Sites License</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="price-text annual license-1">

                            <div class="offer-price annual single">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$78 </p>
                                    <span class="price-dis">50%OFF</span>
                                </div>
                                
                            </div>
                            <div class="offer-price annual five">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$258 </p>
                                    <span class="price-dis">50%OFF</span>
                                </div>
                                
                            </div>
                            <div class="offer-price annual hundred">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$518 </p>
                                    <span class="price-dis">50%OFF</span>
                                </div>
                                
                            </div>

                            <span class="price-value annual single">39</span>
                            <span class="price-value annual five">129</span>
                            <span class="price-value annual hundred">259</span>

                            <div class="offer-price lifetime single">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$198 </p>
                                    <span class="price-dis">50%OFF</span>
                                </div>
                                
                            </div>
                            <div class="offer-price lifetime five">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$458 </p>
                                    <span class="price-dis">50%OFF</span>
                                </div>
                                
                            </div>
                            <div class="offer-price lifetime hundred">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$998 </p>
                                    <span class="price-dis">50%OFF</span>
                                </div>
                                
                            </div>

                            <span class="price-value lifetime single">99</span>
                            <span class="price-value lifetime five">229</span>
                            <span class="price-value lifetime hundred">499</span>

                            <span class="price-suffix annual">/ Per year</span>
                            <span class="price-suffix lifetime">/ Billed once</span>
                        </div>

                        <span class="support-text">Priority Email Support</span>
                    </div>

                    <div class="price-features align-items-center">
						<?php foreach ( $pro_features as $feature ) { ?>
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
    ;(function ($) {
        $(document).on('ready', function () {
            var handler = FS.Checkout.configure({
                plugin_id: '9618',
                plan_id: '16186',
                public_key: 'pk_eb27e7eaa4f2692b385aec28288f2',
                image: "<?php echo get_template_directory_uri(); ?>/assets/images/products/integrate-google-drive.png",
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

