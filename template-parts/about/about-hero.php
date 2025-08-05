<section class="about-hero-area">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-6">
                <div class="about-hero-content">
                    <h3><?php _e('Who <span>We Are</span>', 'softlab'); ?></h3>
                    <?php if (wp_is_mobile()) { ?>
                        <div class="about-hero-image-mobile">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/about/about-head-img.png" alt="" class="img-fluid">
                        </div>
                    <?php } ?>
                    <p class="head-descrption">
                        <?php _e('A team is like a family, you work together day-in and day-out to touch the lives and businesses of others. For this, you need a common understanding and values.
                        We like to provide Clean, Simple & Affordable Premium WordPress Plugins for You to Become the Next Big Thing in Your Website', 'softlab'); ?>

                        <i class="fa-solid fa-feather-pointed"></i>
                    </p>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
            
                    <div class="about-hero-image text-end">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/about/about-head-img.png" alt="" class="img-fluid">
                    </div>
           
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-6">
              
                    <div class="about-hero-image text-start">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/about/our-goal-image.png" alt="" class="img-fluid">
                    </div>
               
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="about-hero-content our-goal">
                    <h3><?php _e('Our <span>Goal</span>', 'softlab'); ?></h3>
                    <?php if (wp_is_mobile()) { ?>
                        <div class="feature-item-img-mobile">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/about/our-goal-image.png" alt="" class="img-fluid">
                        </div>
                    <?php } ?>
                    <p>
                        <?php _e('We make WordPress effortless for everyone, especially non-coders! At SoftLab, we build useful & creative WordPress solutions that simplify website management, helping users create, scale, and succeed—without the hassle.', 'softlab'); ?>
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>