<?php
// Free Features
$free_features = [
    // 'AI Form Generator',
    // 'Column Layout',
    // 'Conditional Logic',
    // 'Database Entries',
    // 'Form Styler',
    'Mailchimp Integration',
    // 'Multi Step Form',
    'Telegram',
    'Zapier',

    'Pabbly',
    'Webhook',
    'Pre-populate Field',
    // 'PDF Generate',
    'Redirection',
    // 'Submission ID',
];

// pro Features
$pro_features = [
    'All Free Features',
    'AI Form Generator',
    'Column Layout',
    'Booking/Appointment Form',
    'Conditional Logic',
    'Database Entries',
    'Form Styler',
    'Multi Step Form',
    'PDF Generate',
    'Redirection(Tag Support)',
    'Submission ID',
    'WooCommerce Checkout <span class="coming-soon">Coming Soon <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/fire.svg" alt="fire"></span>',
    'Post Submission Actions',
    'Action Hook <span class="coming-soon">Coming Soon <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/fire.svg" alt="fire"></span>',
    'Popup Form',
    'User Registration <span class="coming-soon">Coming Soon <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/fire.svg" alt="fire"></span>',
    'Entry Restrictions <span class="coming-soon">Coming Soon <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/fire.svg" alt="fire"></span>',

    'Save Form Progress <span class="coming-soon">Coming Soon <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/fire.svg" alt="fire"></span>',
    // 'Media Library Integration <span class="new">New⚡</span>',
];

// Free Fields
$free_fields = [

    'Country List',
    // 'Digital Signature',
    'Dynamic Text',
    // 'Range Slider',
    // 'Star Rating',
    // 'WooCommerce Product Dropdown',
    'Custom HTML',
    // 'Date Time',
    'Honeypot',
    'Phone',
    'Section Break',
    'Submission ID',
];
// Pro Fields
$pro_fields = [

    'Digital Signature',
    'Range Slider',
    'Star Rating',
    'WooCommerce Product Dropdown',
    'Repeater Field <span class="coming-soon">Coming Soon <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/fire.svg" alt="fire"> </span>',
    'Address',
    'Date Time',

    'Hidden Field <span class="coming-soon">Coming Soon <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/fire.svg" alt="fire"></span>',
    'Leads Info',
    'Mask Input',
    'Math Captcha',
    'Rich Text Editor',
    'Shortcode',
    'Color Picker',
];

// Free Integrations
$free_integrations = [

    'Mailchimp Integrations',
    'Telegram Integrations',
    'Webhooks Integrations',
    'Pabbly Integrations',
];

// Pro Integrations
$pro_integrations = [

    'Google Drive Integrations',
    'WhatsApp Integrations',
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
                    <h3 class="free-title" >Free Features</h3>
                        <?php foreach ($free_features as $feature) { ?>
                            <div class="feature-item">
                                <i class="fa-solid fa-check"></i>
                                <span><?php echo $feature; ?></span>
                            </div>
                        <?php } ?>
                    </div>
                    <div class="price-features align-items-center">
                        <h3 class="free-title" >Free Fields</h3>
                        <?php foreach ($free_fields as $feature) { ?>
                            <div class="feature-item">
                                <i class="fa-solid fa-check"></i>
                                <span><?php echo $feature; ?></span>
                            </div>
                        <?php } ?>
                    </div>
                    <div class="price-features align-items-center">
                        <h3 class="free-title" >Free Integrations</h3>
                        <?php foreach ($free_integrations as $feature) { ?>
                            <div class="feature-item">
                                <i class="fa-solid fa-check"></i>
                                <span><?php echo $feature; ?></span>
                            </div>
                        <?php } ?>
                    </div>

                    <a href="" class="btn buy-btn">Download Free</a>

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
                                    <p class="price-off">$37 </p>
                                    <span class="price-dis">30%OFF</span>
                                </div>

                            </div>
                            <div class="offer-price annual five">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$128 </p>
                                    <span class="price-dis">30%OFF</span>
                                </div>

                            </div>
                            <div class="offer-price annual hundred">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$258 </p>
                                    <span class="price-dis">30%OFF</span>
                                </div>

                            </div>
                            <div class="offer-price annual unlimited">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$388 </p>
                                    <span class="price-dis">30%OFF</span>
                                </div>

                            </div>

                            <span class="price-value annual single">29</span>
                            <span class="price-value annual five">99</span>
                            <span class="price-value annual hundred">199</span>
                            <span class="price-value annual unlimited ">299</span>

                            <div class="offer-price lifetime single">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$128 </p>
                                    <span class="price-dis">30%OFF</span>
                                </div>

                            </div>
                            <div class="offer-price lifetime five">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$258 </p>
                                    <span class="price-dis">30%OFF</span>
                                </div>

                            </div>
                            <div class="offer-price lifetime hundred">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$518 </p>
                                    <span class="price-dis">30%OFF</span>
                                </div>

                            </div>
                            <div class="offer-price lifetime unlimited ">
                                <div class="price-offer d-flex justify-content-center align-items-center">
                                    <p class="price-off">$648 </p>
                                    <span class="price-dis">30%OFF</span>
                                </div>

                            </div>

                            <span class="price-value lifetime single">99</span>
                            <span class="price-value lifetime five">199</span>
                            <span class="price-value lifetime hundred">399</span>
                            <span class="price-value lifetime unlimited">499</span>

                            <span class="price-suffix annual">/ Per year</span>
                            <span class="price-suffix lifetime">/ Billed once</span>
                        </div>

                        <span class="support-text">Priority Email Support</span>
                    </div>

                    <div class="price-features align-items-center">
                    <h3 class="pro-title" >Pro Features</h3>
                        <?php foreach ($pro_features as $feature) { ?>
                            <div class="feature-item">
                                <i class="fa-solid fa-check"></i>
                                <span><?php echo $feature; ?></span>
                            </div>
                        <?php } ?>
                    </div>
                    <div class="price-features align-items-center">
                        <h3 class="pro-title" >Pro Fields</h3>
                        <?php foreach ($pro_fields as $feature) { ?>
                            <div class="feature-item">
                                <i class="fa-solid fa-check"></i>
                                <span><?php echo $feature; ?></span>
                            </div>
                        <?php } ?>
                    </div>
                    <div class="price-features align-items-center">
                        <h3 class="pro-title" >Pro Integrations</h3>
                        <?php foreach ($pro_integrations as $feature) { ?>
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
                plugin_id: '16650',
                plan_id: '27778',
                public_key: 'pk_a223a352b97599f958e06405bad79',
                image: "<?php echo get_template_directory_uri(); ?>/assets/images/products/cf7-logo.png",
            });

            $('.buy-btn-pro').on('click', function(e) {
                e.preventDefault();

                handler.open({
                    name: 'Essential Addons for Contact Form 7',
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