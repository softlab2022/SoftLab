<section class="eacf7-address-fields-hero-area">
    <div class="hero-title-image">
        <img class="img-fluid vector-left" src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/preview/vector-left.png" alt="icon1">

        <img class="img-fluid vector-right" src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/preview/vector-right.png" alt="icon2">
    </div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 m-auto">
                <div class="eacf7-extended-hero-content ">

                    <h1><?php echo get_the_title(); ?></h1>

                    <?php if (wp_is_mobile()) { ?>
                        <div class="header-img-mobile">
                            <img class="img-fluid " src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/preview/hero-image.png" alt="hero-image">
                            <a class="my-btn-primary ripple" href="<?php
                                if (is_singular('page')) {
                                    $meta_value = get_post_meta(get_the_ID(), 'sl_meta_field_url', true);
                                    if (!empty($meta_value)) {
                                        echo esc_url($meta_value);
                                    }
                                }
                                ?>" data-lity><i class="fa fa-play"></i>
                            </a>
                        </div>
                    <?php } ?>

                    <p><?php echo get_the_excerpt(); ?></p>

                    <a href="<?php
                                if (is_singular('page')) {
                                    $meta_value = get_post_meta(get_the_ID(), 'sl_meta_field_documentation_link', true);

                                    if (!empty($meta_value)) {
                                        echo esc_html($meta_value);
                                    }
                                }
                                ?>" class="get1"><i class="fa-solid fa-file"></i> Documentation</a>
                    <a href="/essential-addons-for-contact-form-7-pricing/" class="get"><i class="fa-solid fa-crown"></i> Get Pro</a>
                </div>
            </div>
            <div class="col-lg-5 col-md-6 ms-auto">
                <div class="header-img">
                    <img class="img-fluid " src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/preview/hero-image.png" alt="hero-image">
                    <a class="my-btn-primary ripple" href="<?php
                                                            if (is_singular('page')) {
                                                                $meta_value = get_post_meta(get_the_ID(), 'sl_meta_field_url', true);
                                                                if (!empty($meta_value)) {
                                                                    echo esc_url($meta_value);
                                                                }
                                                            }
                                                            ?>" data-lity><i class="fa fa-play"></i></a>

                </div>
            </div>
        </div>
    </div>

</section>