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
            <div class="col-lg-7 m-auto">

                <div class="hero-content text-center">
                    <h1>Simple And Flexible Pricing</h1>
                    <p>The Most Powerful WordPress Dark Mode Plugin, Without the High Costs</p>
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
                         <!-- PERSONAL -->
                        <div class="col-lg-4">
                            <div class="price-table price-table__personal">
                                <div class="pricing-head">

                                    <span class="pricing-head-title">PERSONAL</span>

                                    <div class="price-text annual personal license-1">

                                        <span class="price-value annual single">14.99</span>
                                        <span class="price-value lifetime single">23.99</span>

                                        <span class="price-suffix annual">/ Year</span>
                                        <span class="price-suffix lifetime">/ Billed once</span>

                                        <span class="support-text">Priority Email Support</span>
                                    
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

                                <a href="#" class=" buy-btn buy-btn-personal">Purchase Now</a>
                            </div>
                        </div>

                        <!-- PROFESSIONAL -->
                        <div class="col-lg-4">
                            <div class="price-table price-table__professional">
                                <div class="pricing-head">
                                    <div class="pricing_head_professional d-flex justify-content-between align-items-center">
                                        <span class="professional-title">PROFESSIONAL</span>
                                        <h5>popular <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/pricing/fire.png" alt="" class="img-fluid"></h5>
                                    </div>
                                    

                                    <div class="price-text annual professional license-1">

                                        <span class="price-value annual single">27.99</span>
                                        <span class="price-value lifetime single">47.99</span>

                                        <span class="price-suffix annual">/ Year</span>
                                        <span class="price-suffix lifetime">/ Billed once</span>
                                        <span class="support-text">Priority Email Support</span>
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

                                <a href="#" class=" buy-btn buy-btn-professional">Purchase Now</a>
                            </div>
                        </div>

                        <!-- ELITE -->
                        <div class="col-lg-4">
                            <div class="price-table price-table__business">
                                <div class="pricing-head">

                                    <span class="pricing-head-title">ELITE</span>

                                    <div class="price-text annual personal license-1">

                                        <span class="price-value annual single">47.99</span>
                                        <span class="price-value lifetime single">67.99</span>

                                        <span class="price-suffix annual">/ Year</span>
                                        <span class="price-suffix lifetime">/ Billed once</span>

                                        <span class="support-text">Priority Email Support</span>
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

                                <a href="#" class=" buy-btn buy-btn-business">Purchase Now</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
</section>
