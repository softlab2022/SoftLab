<section class="hero-area">
    <div class="container">
        <div class="row align-items-center">

            <div class="col-lg-6 col-md-6">
                <div class="hero-content">
                    <h1><?php _e('We Build Awesome Solutions for WordPress', 'softlab'); ?></h1>

                    <?php if (wp_is_mobile()) { ?>
                        <div class="hero-image-mobile text-center mb-5">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/hero-image-new1.png" alt="" class="img-fluid w-75 w-md-100 autoRatio">
                            <div class="hero-img-rocket">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/hero-image-rocket.png" alt="" class="img-fluid w-35 autoRatio">
                            </div>
                        </div>
                    <?php } ?>

                    <p>
                        <?php _e('We Develop Identical & Creative Products to Make WordPress Better, Faster, and Easier. Over 30K+
                        Happy Customers Who Exhibited Business to Next-Level from Our Products.', 'softlab'); ?>
                    </p>
                    <a href="/products" class="btn btn-primary view-products-btn"> <span></span> <?php _e('View Products', 'softlab'); ?></a>

                </div>
            </div>

            <div class="col-lg-6 col-md-6">
                <div class="hero-image text-center text-md-end mt-5 mt-md-0">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/hero-image-new1.png" alt="" class="img-fluid w-75 w-md-100 autoRatio">
                    <div class="hero-img-rocket">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/hero-image-rocket.png" alt="" class="img-fluid w-35 autoRatio">
                    </div>
                </div>

            </div>

        </div>

    </div>
</section>