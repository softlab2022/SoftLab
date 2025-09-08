<?php

/**
 * Template Name: Contact Us Page
 *
 */

get_header();


$tabs = [
    'pre-sales'         => [
        'title' => 'Pre-Sales',
        'icon'  => 'fa-solid fa-cart-shopping',
    ],
    // 'technical-support' => [
    //     'title' => 'Technical Support',
    //     'icon'  => 'fa-solid fa-headset',
    // ],
    'others'            => [
        'title' => 'Others',
        'icon'  => 'fa-solid fa-question-circle',
    ],
];

?>

<section class="title-header">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7 m-auto">
                <div class="header-content text-center">
                    <h2><?php _e('Contact Us', 'softlab'); ?></h2>
                    <p><?php _e('Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all of them.', 'softlab'); ?></p>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="contact" class="contact-form">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="contact-main">
                    <div class="row">
                        <?php foreach ($tabs as $key => $tab) { ?>
                            <div class="col-6 col-lg-3 col-md-5">

                                <div class="tab-item text-center <?php echo $key == 'pre-sales' ? 'active' : ''; ?>" data-target="<?php echo $key; ?>">
                                    <i class="<?php echo $tab['icon']; ?>"></i>
                                    <span><?php echo $tab['title']; ?></span>
                                </div>

                            </div>
                        <?php } ?>
                        <div class="col-md-12 content-form-tab">

                            <div class="contact-form-wrap form-pre-sales active">
                                <?php //echo do_shortcode('[contact-form-7 id="b2a7bbc" title="Pre Sales"]'); 
                                ?>
                                <?php //echo do_shortcode('[contact-form-7 id="df79255" title="Pre Sales"]'); 
                                ?>

                                <?php
                                if (!empty(get_option('eacf7_shortcode_contact_us_pre_sales'))) {
                                    echo do_shortcode(get_option('eacf7_shortcode_contact_us_pre_sales'));
                                }
                                ?>

                            </div>
                            <div class="contact-form-wrap form-technical-support">
                                <?php echo do_shortcode('[fluentform id="5"]'); ?>
                            </div>
                            <div class="contact-form-wrap form-others">
                                <?php //echo do_shortcode('[contact-form-7 id="5a49c73" title="Others"]'); 
                                ?>
                                <?php //echo do_shortcode('[contact-form-7 id="723a52c" title="Others"]'); 
                                ?>

                                <?php
                                if (!empty(get_option('eacf7_shortcode_contact_us_others'))) {
                                    echo do_shortcode(get_option('eacf7_shortcode_contact_us_others'));
                                }
                                ?>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="col-lg-4 col-md-4">
                <div class="contact-sidebar text-center">
                    <h4><?php _e('I have a Technical Question', 'softlab'); ?></h4>
                    <a href="/support/" class="support-btn"><?php _e('Submit a Ticket', 'softlab'); ?></a>
                </div>

                <!-- Products -->
                <div class="sidebar-products-list">
                    <h4>Our Products</h4>
                    <?php
                    $products = [
                        'integrate-google-drive'              => 'Integrate Google Drive',
                        'radio-player'                        => 'Radio Player',
                        // 'wp-radio'                         => 'WP Radio',
                        'dracula-dark-mode'                   => 'Dracula Dark Mode',
                        'essential-addons-for-contact-form-7' => 'Essential Addons for Contact Form 7',
                        // 'soft-accordion'                      => 'Soft Accordion',
                        'soft-multimedia-player'                      => 'Multimedia Player',
                        // 'reader-mode'                      => 'Reader Mode',
                    ];
                    ?>

                    <div class="contact-menu-products">
                        <?php foreach ($products as $key => $title) { ?>
                            <a href="/<?php echo $key; ?>" class="product-<?php echo $key; ?>">
                                <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/products/<?php echo $key; ?>.png" alt="<?php echo $title; ?>">
                                <span><?php echo $title; ?></span>
                            </a>
                        <?php } ?>
                    </div>

                </div>


            </div>
        </div>
    </div>

</section>

<section id="contact-details" class="contact-details">
    <div class="container">
        <div class="row">
            <div class="col-lg-7  col-sm-6 f-img2 m-auto">
                <div class="contact-frame-img">
                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/contact/contact-frame.png" alt="Illustration">
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 m-auto">

                <h3 class="contact-details-title"><?php _e('Fast and Easy to reach out us', 'softlab'); ?></h3>
                <?php if (wp_is_mobile()) { ?>
                    <div class="contact-frame-img-mobile">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/contact/contact-frame.png" alt="Illustration">
                    </div>
                <?php } ?>
                <p class="contact-details-description"><?php _e('Your thoughtful suggestions and sincere feedback is important to us. Please, feel free to let us know anything you have in your mind.', 'softlab'); ?></p>
                <div class="con-info d-flex justify-content-start align-items-center">
                    <div class="info-icon">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div class="info-content">
                        <h5><?php _e('Our Location', 'softlab'); ?></h5>
                        <address><?php _e('Maktob More, Radhanagar, Pabna 6600, Bangladesh', 'softlab'); ?>
                        </address>
                    </div>
                </div>

                <div class="con-info d-flex justify-content-start align-items-center">
                    <div class="info-icon">
                        <i class="fa-solid fa-phone-volume"></i>
                    </div>
                    <div class="info-content">
                        <h5><?php _e('Phone Number', 'softlab'); ?></h5>
                        <a href="tel:+8801741-920985"><?php _e('+8801741-920985', 'softlab'); ?></a>
                    </div>
                </div>

                <div class="con-info d-flex justify-content-start align-items-center">
                    <div class="info-icon">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div class="info-content">
                        <h5><?php _e('Email Address', 'softlab'); ?></h5>
                        <a href="mailto:contact@softlabbd.com"><?php _e('contact@softlabbd.com', 'softlab'); ?></a>
                    </div>
                </div>
            </div>



        </div>
    </div>
</section>

<script>
    jQuery(document).ready(function($) {
        setTimeout(function() {
            $('.wpcf7 form').each(function() {
                const form = $(this);
                const responseElements = form.find('.wpcf7-response-output');
                if (responseElements.length > 1) {
                    responseElements.slice(1).remove();
                }
            });
        }, 100)
    });
</script>

<?php
get_footer();
