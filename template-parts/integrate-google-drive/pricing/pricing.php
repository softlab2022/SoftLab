<?php

$free_features = [
	'Shortcode Builder',
	'Gallery Module <span class="hot">Hot <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/google-drive/features/fire.svg" alt="fire"></span>',
    'Embed Documents Module',
    'Download Links Module',
    'File View Links Module',
    'Classic Editor Integration',
	'Gutenberg Integration',
	'Elementor Integration',
	'Divi Integration',
	'Contact Form 7 Integration <span class="hot">Hot <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/google-drive/features/fire.svg" alt="fire"></span>',
	'Inline Preview',
	'Gallery Lightbox Preview',
    'On Demand Assets Loading',
    'Responsive Design',
    'Multi-Language Support',
    'File Sharing',
    'Custom CSS',
    'Export/ Import Data',
    'Allow others to use plugin by user roles',
];

$pro_features = [
    'All Free Features',
    'File Browser Module <span class="hot">Hot <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/google-drive/features/fire.svg" alt="fire"></span>',
    'File Uploader Module <span class="hot">Hot <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/google-drive/features/fire.svg" alt="fire"></span>',
    'Slider Carousel Module',
    'Media Player Module <span class="hot">Hot <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/google-drive/features/fire.svg" alt="fire"></span>',
    'File Search Module',
    'Import to Media Library',
	'Media Library <span class="hot">Hot <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/google-drive/features/fire.svg" alt="fire"></span>',
    'Add Multiple Google Drive Accounts',
    'Media Library Integration <span class="new">New⚡</span>',
    'WooCommerce Integration <span class="hot">Hot <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/google-drive/features/fire.svg" alt="fire"></span>',
    'Easy Digital Downloads Integration',
    'Tutor LMS Integration <span class="hot">Hot <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/google-drive/features/fire.svg" alt="fire"></span>',
    'Gravity Forms Integration <span class="hot">Hot <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/google-drive/features/fire.svg" alt="fire"></span>',
    'Fluent Forms Integration <span class="hot">Hot <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/google-drive/features/fire.svg" alt="fire"></span>',
    'Formidable Forms Integration',
    'Elementor Form Integration <span class="hot">Hot <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/google-drive/features/fire.svg" alt="fire"></span>',
    'MetForm Integration',
    'WPForms Integration',
    'Ninja Forms Integration <span class="hot">Hot <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/google-drive/features/fire.svg" alt="fire"></span>',
    'User Private Folders <span class="hot">Hot <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/google-drive/features/fire.svg" alt="fire"></span>',
    'Statistics & Email Report',
    'Email Notifications',
    'Appearance Color Customizations',
    'Auto Synchronize Cloud Files',
	'Usage Limit Control <span class="new">New⚡</span>',
];

?>

<section id="pricing-hero">
    <div class="container">

        <!-- <div class="row">
            <div class="col-lg-4 m-auto">
                <div class="section-headeing text-center">
                    <p>Sun's Out, Savings In</p>
                    <!-- <h1>Unbeatable Summer <span>Deals!</span> </h1> 
                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/home/offers/summer-deals.png" alt="summer-deals">
                </div>
                <div class="offers-img text-center">
                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/home/offers/offer-img.png" alt="offer-img">
                </div>
            </div>
        </div> -->

        <div class="row align-items-center">
            <div class="col-lg-6 m-auto">
                <div class="hero-content text-center">
                    <h2>Simple Pricing, Unbeatable Value</h2>
                    <p>Join 10000+ User's Happy Community</p>
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
                                        <a class="dropdown-item" href="#" data-license="2">2 Site
                                            License</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#" data-license="5">5 Sites License</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#" data-license="100">100 Sites License</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#" data-license="unlimited">Unlimited Sites License</a>
                                    </li>
                                </ul>
                            </div>
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

                    <a href="https://wordpress.org/plugins/integrate-google-drive" class="btn buy-btn">Download Free</a>

                </div>
            </div>

            <div class="col-lg-5 col-md-6 me-auto">
                <div class="price-table table-pro">
                    <div class="pricing-head text-center">
                        <span class="pricing-head-title">PRO</span>
                        <span class="pricing-head-description">Most Popular Package</span>

                        

                        <div class="price-text annual license-1">

                            <div class="offer-price annual single">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$50 </p>
                                    <span class="price-dis">30%OFF</span>
                                </div>

                            </div>
                            <div class="offer-price annual two">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$76 </p>
                                    <span class="price-dis">30%OFF</span>
                                </div>

                            </div>
                            <div class="offer-price annual five">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$167 </p>
                                    <span class="price-dis">30%OFF</span>
                                </div>

                            </div>
                            <div class="offer-price annual hundred">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$323 </p>
                                    <span class="price-dis">30%OFF</span>
                                </div>

                            </div>
                            <div class="offer-price annual unlimited">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$518 </p>
                                    <span class="price-dis">30%OFF</span>
                                </div>

                            </div>

                            <span class="price-value annual single">39</span>
                            <span class="price-value annual two">59</span>
                            <span class="price-value annual five">129</span>
                            <span class="price-value annual hundred">249</span>
                            <span class="price-value annual unlimited">399</span>

                            <div class="offer-price lifetime single">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$167 </p>
                                    <span class="price-dis">30%OFF</span>
                                </div>

                            </div>
                            <div class="offer-price lifetime two">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$232 </p>
                                    <span class="price-dis">30%OFF</span>
                                </div>

                            </div>
                            <div class="offer-price lifetime five">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$323 </p>
                                    <span class="price-dis">30%OFF</span>
                                </div>

                            </div>
                            <div class="offer-price lifetime hundred">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$648 </p>
                                    <span class="price-dis">30%OFF</span>
                                </div>

                            </div>
                            <div class="offer-price lifetime unlimited">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$908 </p>
                                    <span class="price-dis">30%OFF</span>
                                </div>

                            </div>

                            <span class="price-value lifetime single">129</span>
                            <span class="price-value lifetime two">179</span>
                            <span class="price-value lifetime five">249</span>
                            <span class="price-value lifetime hundred">499</span>
                            <span class="price-value lifetime unlimited ">699</span>

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
                plugin_id: '9618',
                plan_id: '16186',
                public_key: 'pk_eb27e7eaa4f2692b385aec28288f2',
                image: "<?php echo get_template_directory_uri(); ?>/assets/images/products/integrate-google-drive-new.png",
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