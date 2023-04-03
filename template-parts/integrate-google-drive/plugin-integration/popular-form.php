<?php

$features = [
    'contact-form' => [
        'title'       => 'Contact Form 7',
        'description' => 'Allows you to upload your files directly to Google  Drive from your Contact Form 7 upload field.',
        'video'        => '<iframe src="https://www.youtube.com/embed/UIRswwNcIY0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    ],

    'ninja-form' => [
        'title'       => 'Ninja Forms',
        'description' => 'Allows you to upload your files directly to Google Drive from your Ninja Forms upload field.',
        'video'        => '<iframe src="https://www.youtube.com/embed/D687aswuMW8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    ],

    'wp-form' => [
        'title'       => 'WP Forms',
        'description' => 'Allows you to upload your files directly to Google  Drive from your WPForms upload field..',
        'video'        => '<iframe src="https://www.youtube.com/embed/zweGYyzWSHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    ],

    'gravity-form' => [
        'title'       => 'Gravity Forms',
        'description' => 'Allows you to upload your files directly to Google Drive from your Gravity Forms upload field.',
        'video'        => '<iframe src="https://www.youtube.com/embed/ZHdPFeWG3FI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    ],

    'fluent-form' => [
        'title'       => 'Fluent Forms',
        'description' => 'Allows you to upload your files directly to Google Drive from your Fluent Forms upload field.',
        'video'        => '<iframe src="https://www.youtube.com/embed/lE7i66t_7Wc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    ],

    'formidable-form' => [
        'title'       => 'Formidable Forms',
        'description' => 'Allows you to upload your files directly to Google Drive from your Fluent Forms upload field.',
        'video'        => '<iframe src="https://www.youtube.com/embed/BmqRNXnFTLo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    ],

];

?>




<section id="popular-form">
    <div class="container">
        <!----===== hero area =====------>

        <div class="row vector-area">
            <div class="col-lg-7 m-auto">
                <div class="section-head  text-center">
                    <h2 class="heading-text">Popular form integrations</h2>
                    <p class="heading-description">Do you want more flexibility than the Upload Box can provide? Use a popular form integration allowing you the create the perfect form!</p>
                </div>
            </div>
            <div class="vector-crcel-right">
                <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/plugin-integrations/vector-2.png" alt="vector-2">
            </div>
        </div>
        <!----===== Contact Form 7, Ninja Forms, WP Forms =====------>

        <div class="row feat-shadw">

            <div class="col-lg-2 col-4 col-md-4 ms-auto">
                <div class="popular-form-area text-center">
                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/plugin-integrations/popular-form/contact-form.png" alt="contact-form">
                    <div class="popular-form-area-text text-center">
                        <span class="popular-form-text">
                            Contact Form 7
                        </span>
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-4 col-md-4">
                <div class="popular-form-area text-center">
                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/plugin-integrations/popular-form/ninja-form.png" alt="ninja-form">
                    <div class="popular-form-area-text text-center">
                        <span class="popular-form-text">
                            Ninja Forms
                        </span>
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-4 col-md-4 me-auto">
                <div class="popular-form-area text-center">
                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/plugin-integrations/popular-form/wp-form.png" alt="wp-form">
                    <div class="popular-form-area-text text-center">
                        <span class="popular-form-text">
                            WP Forms
                        </span>
                    </div>
                </div>
            </div>

        </div>

        <!---==== popula form feature area ====---->
        <?php
        $i = 0;
        foreach ($features as $key => $feature) {
            $is_odd         = $i % 2 == 0;

            //$image_class   = $is_odd ? 'col-md-7' : 'col-md-5';
            //$content_class = $is_odd ? 'col-md-5' : 'col-md-7';

            $image_class   =  'col-md-7';
            $content_class = 'col-md-5';

        ?>
            <div class="row popular-form-feature align-items-center feature-<?php echo $key; ?> <?php echo !$is_odd ? 'flex-row-reverse' : '' ?>">

                <div class="<?php echo $image_class; ?>">
                    <div class="feature-item-img">
                        <!-- <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/plugin-integrations/popular-form/<?php echo $key; ?>-illustration.png" alt="<?php echo $feature['title']; ?>"> -->

                        <div class="feature-video">
                            <?php
                                if ( !wp_is_mobile() ) {
                                    echo $feature['video'];
                                }
                            ?>
                        </div>

                    </div>
                </div>

                <div class="<?php echo $content_class; ?>">
                    <div class="feature-item-content text-center text-md-start">


                        <img class="img-fluid feature-icon" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/plugin-integrations/popular-form/<?php echo $key; ?>-icon.png" alt="<?php echo $feature['title']; ?>">

                        <h3 class="feature-title"><?php echo $feature['title']; ?></h3>
                        <p class="feature-description"><?php echo $feature['description']; ?></p>

                        <?php
                            if ( wp_is_mobile() ) {
                                echo $feature['video'];
                            }
                        ?>

                        <a href="https://demo.softlabbd.com/?product=integrate-google-drive" class="feature-demo-btn">Try Live demo</a>

                    </div>
                </div>
            </div>
        <?php
            $i++;
        } ?>


    </div>
</section>