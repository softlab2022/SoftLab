<section class="hero-area">
    <div class="container">
        <div class="row align-items-center">

            <div class="col-lg-6 col-md-6">
                <div class="hero-content">
                    <div class="vector-star">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/vector-star.png" alt="vector-star" class="img-fluid">
                    </div>
                    <h1 class="hedding-title">
                        <?php _e('We Build Awesome <span>Solutions</span> for WordPress', 'softlab')?>
                    </h1>


                    <?php if (wp_is_mobile()) { ?>
                        <div class="hero-image-mobile text-center mb-5">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/hero-image-new1.png" alt="" class="img-fluid w-75 w-md-100 autoRatio">
                            <div class="hero-img-rocket">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/hero-image-rocket.png" alt="" class="img-fluid w-35 autoRatio">
                            </div>
                        </div>
                    <?php } ?>

                    <p class="hedding-description">
                        <?php _e('We Develop Identical & Creative Solutions to Make WordPress Better, Faster, and Easier. Join over 30,000 Happy Customers Who Took Their Business to the Next Level with Our Solutions.', 'softlab'); ?>
                    </p>
                    <a href="/products" class="btn btn-primary view-products-btn"> <?php _e('View Products', 'softlab'); ?> <svg data-prefix="fas" data-icon="grid-2" role="img" viewBox="0 0 448 512" aria-hidden="true" class="svg-inline--fa fa-grid-2 ">
                            <path fill="currentColor" d="M192 80c0-26.5-21.5-48-48-48L48 32C21.5 32 0 53.5 0 80l0 96c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-96zm0 256c0-26.5-21.5-48-48-48l-96 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-96zM256 80l0 96c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-96 0c-26.5 0-48 21.5-48 48zM448 336c0-26.5-21.5-48-48-48l-96 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-96z" class=""></path>
                        </svg></a>
                    <div class="vector-squer">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/vector-squer.png" alt="vector-squer" class="img-fluid">
                    </div>
                </div>
            </div>

            <div class="col-lg-6 col-md-6">
                <div class="hero-image text-center text-md-end mt-5 mt-md-0">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/hero-image-new1.png" alt="" class="img-fluid w-75 w-md-100 autoRatio">
                    <div class="hero-img-rocket">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/hero-image-rocket.png" alt="" class="img-fluid w-35 autoRatio">
                    </div>

                </div>
                <div class="vector-round">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/vector-round.png" alt="vector-round" class="img-fluid">
                </div>
            </div>

        </div>

    </div>
</section>