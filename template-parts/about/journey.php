<?php

$journeys = [
    'radio-player' => [
        'name'       => __('Radio Player', 'softlab'),
        'year'       => __('2020', 'softlab'),
        'description' => __('A simple, easy to use, user-friendly and fully customizable web radio player.', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/about/footer-radio.png',
        'line_image'       => get_template_directory_uri() . '/assets/images/about/line2.png',
    ],
    'integrate-google-drive' => [
        'name'       => __('Integrate Google Drive', 'softlab'),
        'year'       => __('2021', 'softlab'),
        'description' => __('Integrate Google Drive – is the best and easy-to-use Google Drive cloud solution.', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/about/j-icon3.png',
        'line_image'       => get_template_directory_uri() . '/assets/images/about/line3.png',
    ],
    'dracula-dark-mode' => [
        'name'       => __('Dracula Dark Mode', 'softlab'),
        'year'       => __('2023', 'softlab'),
        'description' => __('Dracula Dark Mode – The Revolutionary Dark Mode Plugin For WordPress', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/about/dracula-dark-mode.png',
        'line_image'       => get_template_directory_uri() . '/assets/images/about/line1.png',
    ],
    'essential-addons-for-contact-form-7' => [
        'name'       => __('Essential Addons for Contact Form 7', 'softlab'),
        'year'       => __('2024', 'softlab'),
        'description' => __('Redefine Your Contact Form 7 with Advanced Fields & Features', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/about/essential-addons-for-contact-form-7.png',
        'line_image'       => get_template_directory_uri() . '/assets/images/about/line1.png',
    ],
    // 'soft-accordion' => [
    //     'name'       => __('Soft Accordion', 'softlab'),
    //     'year'       => __('2025', 'softlab'),
    //     'description' => __('Create stylish, responsive & interactive FAQ accordion for WordPress website', 'softlab'),
    //     'image'       => get_template_directory_uri() . '/assets/images/about/soft-accordion.png',
    //     'line_image'       => get_template_directory_uri() . '/assets/images/about/line1.png',
    // ],
    'soft-multimedia-player' => [
        'name'       => __('Multimedia Player', 'softlab'),
        'year'       => __('2025', 'softlab'),
        'description' => __('Most useful & Flexible audio, video, and podcast player for WordPress', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/products/soft-multimedia-player.png',
        'line_image'       => get_template_directory_uri() . '/assets/images/about/line1.png',
    ],

];

?>


<section id="journey">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4 m-auto">
                <div class="journey-head ">
                    <h2><?php _e('Our <span>journey</span> so far', 'softlab'); ?></h2>
                    <p><?php _e('As we start a new chapter this 2021, we are glad to share with you the result of our journey to
                        provide you with the most qualitative wordpress solution to boost anykind website.', 'softlab'); ?></p>
                </div>
            </div>

            <div class="col-lg-7 col-md-8 slider-icon">
                <i class="fa-solid fa-chevron-up up"></i>
                <i class="fa-solid fa-chevron-down down"></i>
                <div class="slider-main ">
                    <?php foreach ($journeys as $key => $journey) { ?>
                        <div class="slider-item">
                            <div class="row">
                                <div class="col-lg-12 d-flex justify-content-start align-items-center">
                                    <div class="slider-img">

                                        <img class="img-fluid" src="<?php echo $journey['line_image']; ?>" alt="<?php echo $journey['name']; ?>">

                                    </div>
                                    <div class="slider-content d-flex align-items-center">
                                        <div class="products-img">
                                            <a href="/<?php echo $key; ?>">
                                                <img class="img-fluid" src="<?php echo $journey['image']; ?>" alt="<?php echo $journey['name']; ?>">
                                            </a>
                                        </div>
                                        <div class="products-content">
                                            <div class="text-item d-flex justify-content-between">
                                                <a href="/<?php echo $key; ?>"><?php echo $journey['name']; ?></a>
                                                <h5><?php echo $journey['year']; ?></h5>
                                            </div>
                                            <p><?php echo $journey['description']; ?></p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>

                </div>
            </div>
        </div>
    </div>
</section>