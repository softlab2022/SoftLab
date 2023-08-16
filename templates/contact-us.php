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
    'technical-support' => [
        'title' => 'Technical Support',
        'icon'  => 'fa-solid fa-headset',
    ],
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
                    <h2>Contact Us</h2>
                    <p>Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all of them.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="contact" class="contact-form">
    <div class="container">
        <div class="row">
            <div class="col-md-12 me-auto">
                <div class="contact-main">
                    <div class="row">

                        <div class="col-lg-2 form-tabs col-md-3 me-auto">
                            <?php foreach ($tabs as $key => $tab) { ?>
                                <div class="tab-item text-center <?php echo $key == 'pre-sales' ? 'active' : ''; ?>" data-target="<?php echo $key; ?>">
                                    <i class="<?php echo $tab['icon']; ?>"></i>
                                    <span><?php echo $tab['title']; ?></span>
                                </div>
                            <?php } ?>
                        </div>

                        <div class="col-md-9 content-form-tab">

                            <div class="contact-form-wrap form-pre-sales active">
                                <?php echo do_shortcode('[fluentform id="3"]'); ?>
                            </div>
                            <div class="contact-form-wrap form-technical-support">
                                <?php echo do_shortcode('[fluentform id="5"]'); ?>
                            </div>
                            <div class="contact-form-wrap form-others">
                                <?php echo do_shortcode('[fluentform id="6"]'); ?>
                            </div>
                        </div>

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

                <h3 class="contact-details-title">Fast and Easy to reach out us</h3>
                <?php if (wp_is_mobile()) { ?>
                    <div class="contact-frame-img-mobile">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/contact/contact-frame.png" alt="Illustration">
                    </div>
                <?php } ?>
                <p class="contact-details-description">Your thoughtful suggestions and sincere feedback is important
                    to us. Please, feel free to let us
                    know anything you have in your mind.</p>
                <div class="con-info d-flex justify-content-start align-items-center">
                    <div class="info-icon">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div class="info-content">
                        <h5>Our Location</h5>
                        <address>Flat-A, 4th floor, Holding-1336, Kosai Potti Goli, Shalgaria, Pabna 6600,
                            Bangladesh
                        </address>
                    </div>
                </div>

                <div class="con-info d-flex justify-content-start align-items-center">
                    <div class="info-icon">
                        <i class="fa-solid fa-phone-volume"></i>
                    </div>
                    <div class="info-content">
                        <h5>Phone Number</h5>
                        <a href="tel:+8801741-920985">+8801741-920985</a>
                    </div>
                </div>

                <div class="con-info d-flex justify-content-start align-items-center">
                    <div class="info-icon">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div class="info-content">
                        <h5>Email Address</h5>
                        <a href="mailto:contact@softlabbd.com">contact@softlabbd.com</a>
                    </div>
                </div>
            </div>

          

        </div>
    </div>
</section>


<?php
get_footer();
