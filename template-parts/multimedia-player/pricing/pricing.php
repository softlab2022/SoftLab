<?php
// Free Features
$free_features = [
    'All Free Features',
    'All-in-One Multimedia Player for Audio, video & Podcast',
    'Supports Multiple Sources',
    'Multiple Player Skins',
    'Advanced Playback Controls',
    'Customize Appearance & Typography',
    'Statistics',

];

// pro Features
$pro_features = [
    'All Free Features',
    'All-in-One Multimedia Player for Audio, video & Podcast',
    'Supports Multiple Sources',
    'Multiple Player Skins',
    'Advanced Playback Controls',
    'Customize Appearance & Typography',
    'Statistics',

];
$free_integrations = [
    'All Free Features',
    'All-in-One Multimedia Player for Audio, video & Podcast',
    'Supports Multiple Sources',
    'Multiple Player Skins',
    'Advanced Playback Controls',
    'Customize Appearance & Typography',
    'Statistics',

];

// Free Fields
$free_fields = [
    'All Free Features',
    'All-in-One Multimedia Player for Audio, video & Podcast',
    'Supports Multiple Sources',
    'Multiple Player Skins',
    'Advanced Playback Controls',
    'Customize Appearance & Typography',
    'Statistics',
];
// Pro Fields
$pro_fields = [
    'All Free Features',
    'All-in-One Multimedia Player for Audio, video & Podcast',
    'Supports Multiple Sources',
    'Multiple Player Skins',
    'Advanced Playback Controls',
    'Customize Appearance & Typography',
    'Statistics',
    // 'Hidden Field <span class="coming-soon">Coming Soon <img class="img-fluid" src="' .  get_template_directory_uri() . '/assets/images/fire.svg" alt="fire"></span>',

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
            </div>
        </div>

        <div class="pricing-container">
            <!-- 1 license card -->
            <div class="pricing-card card-blue ">

                <h3>Personal</h3>
                <p>Perfect for individuals</p>
                <div class="price-text annual license-1">

                    <div class="offer-price annual single">
                        <div class="price-offer d-flex justify-content-center align-items-center">
                            <p class="price-off">$50 </p>
                            <span class="price-dis">30%OFF</span>
                        </div>

                    </div>


                    <span class="price-value annual single">39</span>

                    <div class="offer-price lifetime single">
                        <div class="price-offer d-flex justify-content-center align-items-center">
                            <p class="price-off">$167 </p>
                            <span class="price-dis">30%OFF</span>
                        </div>

                    </div>


                    <span class="price-value lifetime single">129</span>

                    <span class="price-suffix annual">/ Per year</span>
                    <span class="price-suffix lifetime">/ Billed once</span>
                </div>

                <div class="plan-name " data-license="1">Single-site license</div>

                <?php foreach ($free_features as $feature) { ?>
                    <div class="feature-item">
                        <i class="fa-solid fa-check"></i>
                        <span><?php echo $feature; ?></span>
                    </div>
                <?php } ?>
                <div class="pricing-btn">
                    <a href="#features" class="features-btn">See All Features <i class="fa-solid fa-arrow-right"></i></a>
                    <a href="#" class="buy-btn-pro buy-btn-single btn-blue">Get Started</a>
                </div>
            </div>
            <!-- two license card -->
            <div class="pricing-card card-orange">
                <h3>Essentials</h3>
                <p>Great for small teams</p>
                <div class="price-text annual license-2">

                    <div class="offer-price annual two">
                        <div class="price-offer d-flex justify-content-center align-items-center">
                            <p class="price-off">$76 </p>
                            <span class="price-dis">30%OFF</span>
                        </div>

                    </div>

                    <span class="price-value annual two">59</span>

                    <div class="offer-price lifetime two">
                        <div class="price-offer d-flex justify-content-center align-items-center">
                            <p class="price-off">$232</p>
                            <span class="price-dis">30%OFF</span>
                        </div>

                    </div>

                    <span class="price-value lifetime two">179</span>

                    <span class="price-suffix annual">/ Per year</span>
                    <span class="price-suffix lifetime">/ Billed once</span>
                </div>

                <div class="plan-name " data-license="2">2-sites license</div>
                <?php foreach ($free_fields as $feature) { ?>
                    <div class="feature-item">
                        <i class="fa-solid fa-check"></i>
                        <span><?php echo $feature; ?></span>
                    </div>
                <?php } ?>
                <div class="pricing-btn">
                    <a href="#features" class="features-btn">See All Features <i class="fa-solid fa-arrow-right"></i></a>
                    <a href="#" class="buy-btn-pro buy-btn-two btn-orange">Get Started</a>
                </div>
            </div>
            <!-- five license card -->
            <div class="crad-profesion">
                <div class="card-profe text-center">
                    <h3>Most Popular</h3>
                </div>

                <div class="pricing-card card-green">

                    <h3>Professional</h3>
                    <p>Built for agencies</p>
                    <div class="price-text annual license-5">


                        <div class="offer-price annual five">
                            <div class="price-offer d-flex justify-content-center align-items-center">
                                <p class="price-off">$128 </p>
                                <span class="price-dis">30%OFF</span>
                            </div>

                        </div>

                        <span class="price-value annual five">99</span>

                        <div class="offer-price lifetime five">
                            <div class="price-offer d-flex justify-content-center align-items-center">
                                <p class="price-off">$258 </p>
                                <span class="price-dis">30%OFF</span>
                            </div>

                        </div>

                        <span class="price-value lifetime five">199</span>

                        <span class="price-suffix annual">/ Per year</span>
                        <span class="price-suffix lifetime">/ Billed once</span>
                    </div>

                    <div class="plan-name " data-license="5">5-sites license</div>
                    <?php foreach ($free_integrations as $feature) { ?>
                        <div class="feature-item">
                            <i class="fa-solid fa-check"></i>
                            <span><?php echo $feature; ?></span>
                        </div>
                    <?php } ?>
                    <div class="pricing-btn">
                        <a href="#features" class="features-btn">See All Features <i class="fa-solid fa-arrow-right"></i></a>
                        <a href="#" class="buy-btn-pro buy-btn-five btn-green">Get Started</a>
                    </div>
                </div>
            </div>
            <!-- hundred license card -->
            <div class="pricing-card card-pink">
                <h3>Business</h3>
                <p>Powerful for enterprises</p>
                <div class="price-text annual license-100">

                    <div class="offer-price annual hundred">
                        <div class="price-offer d-flex justify-content-center align-items-center">
                            <p class="price-off">$258 </p>
                            <span class="price-dis">30%OFF</span>
                        </div>

                    </div>

                    <span class="price-value annual hundred">199</span>
                    <div class="offer-price lifetime hundred">
                        <div class="price-offer d-flex justify-content-center align-items-center">
                            <p class="price-off">$518 </p>
                            <span class="price-dis">30%OFF</span>
                        </div>

                    </div>
                    <span class="price-value lifetime hundred">399</span>

                    <span class="price-suffix annual">/ Per year</span>
                    <span class="price-suffix lifetime">/ Billed once</span>
                </div>

                <div class="plan-name " data-license="100">100-sites license</div>
                <?php foreach ($pro_features as $feature) { ?>
                    <div class="feature-item">
                        <i class="fa-solid fa-check"></i>
                        <span><?php echo $feature; ?></span>
                    </div>
                <?php } ?>
                <div class="pricing-btn">
                    <a href="#features" class="features-btn">See All Features <i class="fa-solid fa-arrow-right"></i></a>
                    <a href="#" class="buy-btn-pro buy-btn-hundred btn-pink">Get Started</a>
                </div>
            </div>
            <!-- unlimited license card -->
            <div class="pricing-card card-sky-blue">
                <h3>Enterprise</h3>
                <p>Limitless growth</p>
                <div class="price-text annual license-unlimited">

                    <div class="offer-price annual unlimited">
                        <div class="price-offer d-flex justify-content-center align-items-center">
                            <p class="price-off">$388 </p>
                            <span class="price-dis">30%OFF</span>
                        </div>

                    </div>

                    <span class="price-value annual unlimited ">299</span>

                    <div class="offer-price lifetime unlimited ">
                        <div class="price-offer d-flex justify-content-center align-items-center">
                            <p class="price-off">$648 </p>
                            <span class="price-dis">30%OFF</span>
                        </div>

                    </div>

                    <span class="price-value lifetime unlimited">499</span>

                    <span class="price-suffix annual">/ Per year</span>
                    <span class="price-suffix lifetime">/ Billed once</span>
                </div>

                <div class="plan-name " data-license="unlimited">Unlimited-sites license</div>
                <?php foreach ($pro_fields as $feature) { ?>
                    <div class="feature-item">
                        <i class="fa-solid fa-check"></i>
                        <span><?php echo $feature; ?></span>
                    </div>
                <?php } ?>
                <div class="pricing-btn">
                    <a href="#features" class="features-btn">See All Features <i class="fa-solid fa-arrow-right"></i></a>
                    <a href="#" class="buy-btn-pro buy-btn-unlimited btn-sky-blue">Get Started</a>
                </div>
            </div>
        </div>
    </div>
</section>
<script>
    (function($) {
        $(document).on('ready', function() {
            const productIcon = "<?php echo get_template_directory_uri(); ?>/assets/images/products/logo.png";
            var handler = FS.Checkout.configure({
                plugin_id: '19544',
                plan_id: '32371',
                public_key: 'pk_748528da58fc7c9adc04c7db011a1',
                image: productIcon,
            });

            // Handle all buy button clicks dynamically
            $('.buy-btn-pro').on('click', function(e) {
                e.preventDefault();

                var $card = $(this).closest('.pricing-card');
                var license = $card.find('[data-license]').attr('data-license');
                var planName = $card.find('h3').text();

                // assign product info
                const productInfo = {
                    productIcon: productIcon,
                    planName: planName,
                    productName: "Soft Multimedia Player",
                    docs: "https://softlabbd.com/docs-category/soft-multimedia-player/",
                    video: "https://www.youtube.com/watch?v=JKbMmM2-WUU&list=PLaR5hjDXnXZz2XWNB482rgT4RiAaQEkim",
                    productDescription: "Multimedia Player – Play Audio, Video & Podcasts Easily in WordPress",
                };
                handler.open({
                    name: planName,
                    licenses: license,
                    purchaseCompleted: function(response) {
                        setTimeout(function() {
                            // assign productInfo to response
                            response.productInfo = productInfo;

                            // data 
                            const data = window.btoa(JSON.stringify(response));

                            // redirect
                            window.location.href = "<?php echo site_url('/thank-you'); ?>?data=" + data;
                        }, 2000);
                    },
                    success: function(response) {
                        // console.log("Purchase Successful:", response);
                    }
                });
            });
        });
    })(jQuery);
</script>

<!-- <script>
    ;
    (function($) {
        $(document).on('ready', function() {
            var handler = FS.Checkout.configure({
                plugin_id: '17606',
                plan_id: '29293',
                public_key: 'pk_2bab7a91a4885a97121c0b576b886',
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
</script> -->