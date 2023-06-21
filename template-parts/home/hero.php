<section class="hero-area">
    <div class="container">
        <div class="row align-items-center">

            <div class="col-lg-6 col-md-6">
                <div class="hero-content">
                    <h1>We Build Awesome Solutions for WordPress</h1>

					<?php if ( wp_is_mobile() ) { ?>
                        <div class="hero-image-mobile text-center mb-5">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/hero-image1.png"
                                 alt="" class="img-fluid w-75 w-md-100 ">
                        </div>
					<?php } ?>

                    <p>
                        We Develop Identical & Creative Products to Make WordPress Better, Faster, and Easier. Over 10K+
                        Happy Customers Who Exhibited Business to Next-Level from Our Products.
                    </p>
                    <a href="/products" class="btn btn-primary view-products-btn"> <span></span> View Products</a>

                </div>
            </div>

            <div class="col-lg-6 col-md-6">
                <div class="hero-image text-center text-md-end mt-5 mt-md-0">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/hero-image1.png" alt=""
                         class="img-fluid w-75 w-md-100 ">
                </div>

            </div>

        </div>

    </div>
</section>