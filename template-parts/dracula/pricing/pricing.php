<?php

$basic_features = [
    'AI-Powered Color Generator',
    'Frontend Dark Mode',
    'Admin Dashboard Dark Mode',
    'Default Dark Mode',
    'Auto Match OS-Theme',
    'Floating Dark Mode Toggle Button',
    'Display Toggle Button in Menu',
    'Color Adjustments',
    'Classic Editor & Block Editor Compatibility',
    'Toggle Button Size Customization',
    'Toggle Button Position Customization',
    'Gutenberg Dark Mode Toggle Block',
    'Elementor Dark Mode Toggle Widget',
];

$pro_features = [
    'All Free Features',
    'From Dark to Light',
    'Custom Toggle Button Builder',
    'Dark Mode Live Edit Widget',
    'Page-Specific Dark Mode ',
    '24+ Color Presets',
    '14+ Toggle Switch Styles',
    'Reading Mode <span class="new">New⚡</span>',
    'Image & Video Replacement',
    'Performance Mode ',
    'Dark Mode Based Typography',
    'Exclude Posts/Pages',
    'Excludes Elements',
    'Draggable Switch',
    'Usage Analytics',
    'Page Transition Animation',
    'Toggle Switch Attention Effect',
];

// $elite_features = [

//     'All Pro Features',
//     'Live Dark Mode Edit Widget',
//     'Page Wise Dark Mode',
//     'Custom Toggle Button Builder',
//     '14+ Dark Mode Toggle Button Styles',
//     'Dashboard Dark Mode for Specific User Roles',
//     'Usage Analytics & Email Report (Coming Soon)',
//     'Dark Mode Page Transition Animation (coming soon)',
// ];


?>


<!-- <section id="pricing-hero">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5 col-md-6 ms-auto">
                <h3>Be the First to Experience the Revolutionary
                    <span>Dark Mode</span> Plugin for <span class="pre-word">WordPress</span>
                </h3>
            </div>

            <div class="col-lg-5 col-md-6 me-auto">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/pricing/early-bird.png"
                     class="img-fluid">
            </div>
        </div>
    </div>
</section> -->

<section id="pricing">
    <div class="container">

        <!-- <div class="row">
            <div class="col-lg-4 m-auto">
                <div class="section-headeing text-center">
                    <p>Sun's Out, Savings In</p>
                    <!-- <h1>Unbeatable Summer <span>Deals!</span> </h1> --
                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/home/offers/summer-deals-withe.png" alt="ssummer-deals-withe">
                </div>
                <div class="offers-img text-center">
                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/home/offers/offer-img.png" alt="offer-img">
                </div>
            </div>
        </div> -->

        <div class="row">
            <div class="col-lg-9 m-auto">
                <div class="hero-content text-center">
                    <h1>Simple And Flexible Pricing</h1>
                    <p>The Most Powerful WordPress Dark Mode Plugin, Without the High Costs</p>
                </div>
            </div>
        </div>

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
            <div class="col-lg-5 m-auto">
                <div class="dracula-site text-center">
                    <div class="site">
                        <div class="dropdown license-dropdown">
                            <button class="btn-dr dropdown-toggle" type="button" id="license-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Single Site License
                            </button>

                            <ul class="dropdown-menu" aria-labelledby="license-dropdown">
                                <li>
                                    <a class="dropdown-item active" href="#" data-license="1">Single Site License</a>
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
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">

                <div class="price-tables annual">

                    <div class="row">

                        <!-- Basic -->
                        <div class="col-lg-5 col-md-6 ms-auto">
                            <div class="price-table price-table__personal">
                                <div class="pricing-head">

                                    <span class="pricing-head-title">Basic</span>

                                    <div class="price-text basic">

                                        <span class="price-value annual single">FREE</span>
                                        <span class="price-suffix annual">/ forever</span>
                                        <span class="support-text">Basic Features to Start and Test</span>

                                    </div>
                                </div>

                                <div class="price-features align-items-center">

                                    <?php foreach ($basic_features as $feature) { ?>
                                        <div class="feature-item">
                                            <i class="fa-solid fa-check"></i>
                                            <span><?php echo $feature; ?></span>
                                        </div>
                                    <?php } ?>
                                </div>

                                <a href="https://wordpress.org/plugins/dracula-dark-mode/" class=" buy-btn buy-btn-free">Download Now</a>
                            </div>
                        </div>

                        <!-- PROFESSIONAL -->
                        <div class="col-lg-5 col-md-6 me-auto">
                            <div class="price-table price-table__professional">
                                <div class="pricing-head">
                                    <!-- <span class="pricing-head-title">PRO</span> -->
                                    <div class="pricing_head_professional d-flex justify-content-between align-items-center">
                                        <span class="pricing-head-title">PRO</span>
                                        <h5>popular <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/pricing/fire.png" class="img-fluid"></h5>
                                    </div>

                                    <div class="price-text annual professional license-1">

                                        <!-- Regular Price -->
                                        <div class="offer-price annual single">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$37</p>
                                                <span class="price-dis">30%OFF</span>
                                            </div>

                                        </div>
                                        <div class="offer-price annual five">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$63</p>
                                                <span class="price-dis">30%OFF</span>
                                            </div>

                                        </div>
                                        <div class="offer-price annual hundred">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$167</p>
                                                <span class="price-dis">30%OFF</span>
                                            </div>

                                        </div>

                                        <!-- Sale Price -->
                                        <span class="price-value annual single">29</span>
                                        <span class="price-value annual five">49</span>
                                        <span class="price-value annual hundred">129</span>

                                        <!-- Regular Price -->
                                        <div class="offer-price lifetime single">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$63</p>
                                                <span class="price-dis">30%OFF</span>
                                            </div>

                                        </div>
                                        <div class="offer-price lifetime five">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$167</p>
                                                <span class="price-dis">30%OFF</span>
                                            </div>

                                        </div>
                                        <div class="offer-price lifetime hundred">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$388</p>
                                                <span class="price-dis">30%OFF</span>
                                            </div>

                                        </div>

                                        <!-- Sale Price -->
                                        <span class="price-value lifetime single">49</span>
                                        <span class="price-value lifetime five">129</span>
                                        <span class="price-value lifetime hundred">299</span>

                                        <span class="price-suffix annual">/ Year</span>
                                        <span class="price-suffix lifetime">/ Billed once</span>
                                        <span class="support-text">Advanced Features with More Flexibility</span>
                                    </div>
                                </div>

                                <div class="price-features align-items-center">
                                    <?php foreach ($pro_features as $feature) { ?>
                                        <div class="feature-item">
                                            <i class="fa-solid fa-check"></i>
                                            <span><?php echo $feature; ?></span>
                                        </div>
                                    <?php } ?>
                                </div>

                                <a href="#" class=" buy-btn buy-btn-pro">Purchase Now</a>
                            </div>
                        </div>

                        <!-- ELITE -
                        <div class="col-lg-4 col-md-6">
                            <div class="price-table price-table__elite">
                                <div class="pricing-head">
                                    <div class="pricing_head_professional d-flex justify-content-between align-items-center">
                                        <span class="professional-title">ELITE</span>
                                        <h5>popular <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/pricing/fire.png" class="img-fluid"></h5>
                                    </div>

                                    <div class="price-text annual elite license-1">

                                        <!-- Regular Price 
                                        <div class="offer-price annual single">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$84</p>
                                                <span class="price-dis">70%OFF</span>
                                            </div>

                                        </div>
                                        <div class="offer-price annual five">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$196</p>
                                                <span class="price-dis">75%OFF</span>
                                            </div>

                                        </div>
                                        <div class="offer-price annual hundred">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$495</p>
                                                <span class="price-dis">80%OFF</span>
                                            </div>

                                        </div>

                                        <!-- Sale Price 
                                        <span class="price-value annual single">25</span>
                                        <span class="price-value annual five">49</span>
                                        <span class="price-value annual hundred">99</span>


                                        <!-- Regular Price 
                                        <div class="offer-price lifetime single">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$196</p>
                                                <span class="price-dis">75%OFF</span>
                                            </div>

                                        </div>
                                        <div class="offer-price lifetime five">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$495</p>
                                                <span class="price-dis">80%OFF</span>
                                            </div>

                                        </div>
                                        <div class="offer-price lifetime hundred">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$1327</p>
                                                <span class="price-dis">85%OFF</span>
                                            </div>

                                        </div>

                                        <!-- Sale Price 
                                        <span class="price-value lifetime single">49</span>
                                        <span class="price-value lifetime five">99</span>
                                        <span class="price-value lifetime hundred">199</span>

                                        <span class="price-suffix annual">/ Year</span>
                                        <span class="price-suffix lifetime ">/ Billed once</span>
                                        <span class="support-text">Most Comprehensive Set of Features</span>
                                    </div>

                                </div>

                                <div class="price-features align-items-center">

                                    
                                </div>

                                <a href="#" class=" buy-btn buy-btn-elite">Purchase Now</a>
                            </div>
                        </div> -->

                    </div>

                </div>
            </div>

        </div>
    </div>
</section>

<script>
    ;
    (function($) {
        $(document).on('ready', function() {

            //Handle PRO Button
            $('.buy-btn-pro').on('click', function(e) {
                e.preventDefault();

                var handler = FS.Checkout.configure({
                    plugin_id: '11821',
                    plan_id: '20144',
                    public_key: 'pk_ccbb1ab247a8d4b30a84b68c27ecf',
                    image: "<?php echo get_template_directory_uri(); ?>/assets/images/products/dracula-dark-mode.png",
                });

                handler.open({
                    name: 'Dracula Dark Mode',
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

            //Handle Elite Button
            $('.buy-btn-elite').on('click', function(e) {
                e.preventDefault();

                var handler = FS.Checkout.configure({
                    plugin_id: '11821',
                    plan_id: '20145',
                    public_key: 'pk_ccbb1ab247a8d4b30a84b68c27ecf',
                    image: "<?php echo get_template_directory_uri(); ?>/assets/images/products/dracula-dark-mode.png",
                });

                handler.open({
                    name: 'Dracula Dark Mode',
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