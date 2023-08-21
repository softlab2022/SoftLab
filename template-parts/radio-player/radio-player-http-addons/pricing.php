<section class="radio-player-addon-pricing ads-player-pricing" id="addon-pricing">
    <div class="container">

        <div class="row">
            <div class="col-lg-5 m-auto">
                <div class="plan-head text-center">
                    <div class="imgs">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/https-addon/log-blue.png" alt="log-blue">
                    </div>
                    <span>Pricing plan</span>
                    <h2>Flexible Pricing Plans to Meet Your Needs</h2>
                    <p>Choose the Plan that Works Best for You and Your Station</p>
                </div>
            </div>
        </div>

        <div class="pricing-wrap">
            <div class="pricing-box annual">

                <div class="pricing-header text-center">
                    <div class="imgs">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/https-addon/log-blue.png" alt="image-1">
                    </div>
                    <h3>Monthly</h3>
                    <p>BILLED Monthly</p>
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
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/https-addon/log2.png" alt="log2">
                    </div>
                    <h3>ANNUALLY</h3>
                    <p>BILLED ANNUALLY</p>
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
    ;
    (function($) {
        $(document).on('ready', function() {
            var handler = FS.Checkout.configure({
                plugin_id:  '13399',
                plan_id:    '22441',
                public_key: 'pk_275e57f1c8c993f99609755dddfc9',
                image: "<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/addons/http-stream.png"
            });

            $('.buy-btn').on('click', function(e) {
                e.preventDefault();

                handler.open({
                    name: 'Radio Player Http Stream Player',
                    licenses: $('.item-price.active').data('license'),
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