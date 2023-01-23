<section class="wp-radio-addon-pricing user-frontend-pricing">
    <div class="container">

        <div class="row">
            <div class="col-lg-5 m-auto">
                <div class="plan-head text-center">
                <span>Pricing plan</span>
                    <div class="imgs">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/wp-radio/home/image-2.png" alt="image-2">
                    </div>
                    
                    <h2>Simple Pricing, Unbeatable Value</h2>
                    <p>Join 1000+ User's Happy Community</p>
                </div>
            </div>
        </div>

        <div class="pricing-wrap">
            <div class="pricing-box annual">

                <div class="pricing-header text-center">
                    
                    <h3 class="plan-pric">ANNUALLY</h3>
                    <div class="imgs2">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/wp-radio/home/image-2.png" alt="image-2">
                    </div>
                    <p>BILLED ANNUALLY</p>
                </div>

                <div class="item-price active">
                    <div class="dot"></div>
                    <span>Single Site License - $29.99/ Year</span>
                </div>
                <div class="item-price">
                    <div class="dot"></div>
                    <span>Up to 5 Site Licenses - $59.99/ Year</span>
                </div>
                <div class="item-price ">
                    <div class="dot"></div>
                    <span>Up to 100 Site Licenses - $129.99/ Year</span>
                </div>

                <div class="buy-btn text-center">
                    <a href="#">Buy now</a>
                </div>
            </div>
            <div class="pricing-box lifetime">

                <div class="pricing-header text-center">
                    <h3 class="plan-pric">Lifetime</h3>
                    <div class="imgs2">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/wp-radio/home/image-2.png" alt="image-2">
                    </div>
                    
                    <p>BILLED ONCE</p>
                </div>

                <div class="item-price">
                    <div class="dot"></div>
                    <span>Single Site License - $59.99/ Year</span>
                </div>
                <div class="item-price">
                    <div class="dot"></div>
                    <span>Up to 5 Site Licenses - $129.99/ Year</span>
                </div>
                <div class="item-price ">
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
                plugin_id: '4907',
                plan_id: '8106',
                public_key: 'pk_bef0527f73d6c3a11a9bd4f5cd644',
                image: "<?php echo get_template_directory_uri(); ?>/assets/images/wp-radio/home/addons/wp-radio-user-frontend.png"
            });

            $('.buy-btn').on('click', function (e) {
                e.preventDefault();

                handler.open({
                    name: 'WP Radio User Frontend',
                    licenses: 1,
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