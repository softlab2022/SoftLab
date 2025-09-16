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
                        <?php _e('We\'re more than just a team to fulfill big dreams. With a common vision and a deep understanding of what businesses need, we build clean, simple, and affordable premium WordPress plugins to help you build smarter, grow faster, and become the next big thing online.', 'softlab'); ?>

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
                        <?php _e('Our goal is simple — to take the complexity out of WordPress. SoftLab builds tools that make WordPress easy for everyone — so you can stop worrying about the "how" and start focusing on the "wow."', 'softlab'); ?>
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>