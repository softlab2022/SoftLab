<section id="pricing" class="wp-radio-addon-pricing ads-player-pricing">
    <div class="container">

        <div class="row">
            <div class="col-lg-5 m-auto">
                <div class="plan-head text-center">
                    <div class="imgs">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/wp-radio/home/image-1.png" alt="image-1">
                    </div>
                    <span>Pricing plan</span>
                    <h2>Simple Pricing, Unbeatable Value</h2>
                    <p>Join 1000+ User's Happy Community</p>
                </div>
            </div>
        </div>

        <div class="pricing-wrap">
            <div class="pricing-box annual">

                <div class="pricing-header text-center">
                    <div class="imgs">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/wp-radio/home/image-1.png" alt="image-1">
                    </div>
                    <h3>ANNUALLY</h3>
                    <p>BILLED ANNUALLY</p>
                </div>

                <div class="item-price active" data-license="1">
                    <div class="dot"></div>
                    <span>Single Site License - $29.99/ Year</span>
                </div>

                <div class="item-price" data-license="5">
                    <div class="dot"></div>
                    <span>Up to 5 Site Licenses - $59.99/ Year</span>
                </div>

                <div class="item-price" data-license="100">
                    <div class="dot"></div>
                    <span>Up to 100 Site Licenses - $129.99/ Year</span>
                </div>

                <div class="buy-btn text-center">
                    <a href="#">Buy now</a>
                </div>
            </div>
            <div class="pricing-box lifetime">

                <div class="pricing-header text-center">
                    <div class="imgs">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/wp-radio/home/image-1.png" alt="image-1">
                    </div>
                    <h3>Lifetime</h3>
                    <p>BILLED ONCE</p>
                </div>

                <div class="item-price" data-license="1">
                    <div class="dot"></div>
                    <span>Single Site License - $59.99/ Year</span>
                </div>
                <div class="item-price" data-license="5">
                    <div class="dot"></div>
                    <span>Up to 5 Site Licenses - $129.99/ Year</span>
                </div>
                <div class="item-price " data-license="100">
                    <div class="dot"></div>
                    <span>Up to 100 Site Licenses - $229.99/ Year</span>
                </div>

                <div class="buy-btn text-center">
                    <a href="#">Buy now</a>
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
                plugin_id: '8169',
                plan_id: '13793',
                public_key: 'pk_6ea92a3dcb76493cc509e826040c2',
                image: "<?php echo get_template_directory_uri(); ?>/assets/images/wp-radio/home/addons/wp-radio-ads-player.png"
            });

            $('.buy-btn').on('click', function (e) {
                e.preventDefault();

                handler.open({
                    name: 'WP Radio Ads Player',
                    licenses: $('.item-price.active').data('license'),
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