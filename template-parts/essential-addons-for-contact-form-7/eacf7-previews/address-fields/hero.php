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
                            <?php
                            if (is_singular('page')) {
                                $meta_value = get_post_meta(get_the_ID(), 'sl_meta_field_url', true);
                                if (!empty($meta_value)) {
                            ?>
                                    <a class="my-btn-primary ripple" href="<?php echo esc_url($meta_value); ?>" data-lity>
                                        <i class="fa fa-play"></i>
                                    </a>
                                <?php
                                } else {
                                ?>
                                    <a class="my-btn-primary ripple no-video" href="javascript:void(0);">
                                        <i class="fa fa-play"></i>
                                    </a>
                            <?php
                                }
                            }
                            ?>
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
                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/preview/hero-image.png" alt="hero-image">
                    <?php
                    if (is_singular('page')) {
                        $meta_value = get_post_meta(get_the_ID(), 'sl_meta_field_url', true);
                        if (!empty($meta_value)) {
                    ?>
                            <a class="my-btn-primary ripple" href="<?php echo esc_url($meta_value); ?>" data-lity>
                                <i class="fa fa-play"></i>
                            </a>
                        <?php
                        } else {
                        ?>
                            <a class="my-btn-primary ripple no-video" href="javascript:void(0);">
                                <i class="fa fa-play"></i>
                            </a>
                    <?php
                        }
                    }
                    ?>
                </div>

            </div>
        </div>
    </div>

</section>


<!-- Modal for "Video Not Found" -->
<div id="videoNotFoundModal" class="modal" style="display: none;">
    <div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-content-area">
            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/preview/video-not-found-illus.png" alt="video-not-found-illus">
            <p>No Video Found!</p>
        </div>
    </div>
</div>


<script>
    document.addEventListener('DOMContentLoaded', function() {
        const noVideoButtons = document.querySelectorAll('.no-video');
        const modal = document.getElementById('videoNotFoundModal');
        const closeModal = modal.querySelector('.close');

        noVideoButtons.forEach(button => {
            button.addEventListener('click', function() {
                modal.style.display = 'block';
            });
        });

        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
</script>