<?php

$personal_features = [
	'Use on 1 site',
	'All Floating Switch',
	'All Color Preset',
	'All Features Included',
	'1 Year Priority Support',
];

$pro_features = [
    'Use on 10 site',
	'All Floating Switch',
	'All Color Preset',
	'All Features Included',
	'1 Year Priority Support',
];
$agency_features = [
    'Use on 100 site',
	'All Floating Switch',
	'All Color Preset',
	'All Features Included',
	'1 Year Priority Support',
];

?>


<section id="pricing-hero">
    <div class="container">
        <div class="row align-items-center">

            <div class="col-lg-5 col-md-6 ms-auto">
                <div class="hero-content">
                    <h1>Be the First to Experience the Revolutionary Dracula <span>Dark Mode</span> Plugin for <span class="pre-word">WordPress</span> .</h1>
                </div>
            </div>

            <div class="col-lg-5 col-md-6 me-auto">
                <div class="hero-content">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/pricing/early-bird.png" alt="" class="img-fluid">

                </div>
            </div>

        </div>
    </div>
</section>

<section id="pricing">
    <div class="container">
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
            <div class="col-lg-12">
                
                <div class="price-tables annual">
  
                    <div class="row">
                         <!-- PERSONAL -->
                        <div class="col-lg-4 col-md-6">
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

                                    <?php foreach ( $personal_features as $feature ) { ?>
                                        <div class="feature-item">
                                            <i class="fa-solid fa-check"></i>
                                            <span><?php echo $feature; ?></span>
                                        </div>
                                    <?php } ?>
                                </div>

                                <a href="https://wordpress.org/plugins/integrate-google-drive" class=" buy-btn buy-btn-free">Download Now</a>
                            </div>
                        </div>

                        <!-- PROFESSIONAL -->
                        <div class="col-lg-4 col-md-6">
                            <div class="price-table price-table__professional">
                                <div class="pricing-head">
                                    <div class="pricing_head_professional d-flex justify-content-between align-items-center">
                                        <span class="professional-title">PROFESSIONAL</span>
                                        <h5>popular <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/pricing/fire.png" alt="" class="img-fluid"></h5>
                                    </div>
                                    

                                    <div class="price-text annual professional license-1">

                                        <span class="price-value annual single">27.99</span>
                                        <span class="price-value lifetime single">47.99</span>

                                        <span class="price-suffix annual">/ Billed once</span>
                                        <span class="price-suffix lifetime">/ Year</span>
                                        <span class="support-text">Advanced Features with More Flexibility</span>
                                    </div>
                                </div>

                                <div class="price-features align-items-center">
                                    <!-- <div class="feature-item">
                                        <i class="fa-solid fa-check"></i>
                                        <span>Use On 10 Site</span>
                                    </div> -->

                                    <?php foreach ( $pro_features as $feature ) { ?>
                                        <div class="feature-item">
                                            <i class="fa-solid fa-check"></i>
                                            <span><?php echo $feature; ?></span>
                                        </div>
                                    <?php } ?>
                                </div>

                                <a href="#" class=" buy-btn buy-btn-pro">Purchase Now</a>
                            </div>
                        </div>

                        <!-- ELITE -->
                        <div class="col-lg-4 col-md-6">
                            <div class="price-table price-table__business">
                                <div class="pricing-head">

                                    <span class="pricing-head-title">ELITE</span>

                                    <div class="price-text annual personal license-1">

                                        <span class="price-value annual single">47.99</span>
                                        <span class="price-value lifetime single">67.99</span>

                                        <span class="price-suffix annual">/ Billed once</span>
                                        <span class="price-suffix lifetime ">/ Year</span>

                                        <span class="support-text">Most Comprehensive Set of Features</span>
                                    </div>
                                </div>

                                <div class="price-features align-items-center">

                                    <?php foreach ( $agency_features as $feature ) { ?>
                                        <div class="feature-item">
                                            <i class="fa-solid fa-check"></i>
                                            <span><?php echo $feature; ?></span>
                                        </div>
                                    <?php } ?>
                                </div>

                                <a href="#" class=" buy-btn buy-btn-elite">Purchase Now</a>
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
                plugin_id: '11821',
                plan_id: '20144',
                public_key: 'pk_ccbb1ab247a8d4b30a84b68c27ecf',
                image: "<?php echo get_template_directory_uri(); ?>/assets/images/products/dracula-dark-mode.png",
            });

            $('.buy-btn-pro').on('click', function (e) {
                e.preventDefault();

                handler.open({
                    name: 'Dracula Dark Mode',
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

<script>
    ;(function ($) {
        $(document).on('ready', function () {
            var handler = FS.Checkout.configure({
                plugin_id: '11821',
                plan_id: '20145',
                public_key: 'pk_ccbb1ab247a8d4b30a84b68c27ecf',
                image: "<?php echo get_template_directory_uri(); ?>/assets/images/products/dracula-dark-mode.png",
            });

            $('.buy-btn-elite').on('click', function (e) {
                e.preventDefault();

                handler.open({
                    name: 'Dracula Dark Mode',
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
