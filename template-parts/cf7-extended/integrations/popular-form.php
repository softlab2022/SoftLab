<?php

$features = [
    'google-drive' => [
        'title'       => 'Google Drive',
        'description' => 'The Google Drive integration for the Contact Form 7 Extended plugin adds an upload field toContact Form 7. This allows users to upload filesdirectly to a connected Google Drive account.',
        'video'        => '<iframe src="https://www.youtube.com/embed/UIRswwNcIY0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    ],

    'mailchimp' => [
        'title'       => 'Mailchimp',
        'description' => 'The Mailchimp integration for the Contact Form 7 Extended plugin enables website admins to store specific data from Contact Form 7 submissions directly in Mailchimp.',
        'video'        => '<iframe src="https://www.youtube.com/embed/D687aswuMW8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    ],

    'telegram' => [
        'title'       => 'Telegram',
        'description' => 'The Telegram integration for the Contact Form 7 Extended plugin forwards form submission data to a specific Telegram account allocated by the admin.',
        'video'        => '<iframe src="https://www.youtube.com/embed/zweGYyzWSHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    ],

    'webhooks' => [
        'title'       => 'Webhooks',
        'description' => 'The Webhooks integration for the Contact Form 7 Extended plugin allows you to send form submission data to a specified URL via a webhook. This enables real-time data transfer to other applications or services.',
        'video'        => '<iframe src="https://www.youtube.com/embed/ZHdPFeWG3FI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    ],
    'zapier' => [
        'title'       => 'Zapier',
        'description' => 'The Zapier integration for the Contact Form 7 Extended plugin transfers form data to an allocated Zapier account upon form submission.',
        'video'        => '<iframe src="https://www.youtube.com/embed/ZHdPFeWG3FI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    ],

    

];

?>




<section id="popular-form">
    <div class="container">
        <!----===== hero area =====------>

        <div class="row vector-area">
            <div class="col-lg-7 m-auto">
                <div class="section-head  text-center">
                    <h2 class="heading-text">Popular form <span>Integrations</span></h2>
                    <p class="heading-description">Do you want more flexibility than the Upload Box can provide? Use a popular form integration allowing you the create the perfect form!</p>
                </div>
            </div>
            <div class="vector-crcel-right">
                <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/plugin-integrations/vector-2.png" alt="vector-2">
            </div>
        </div>
        <!----===== Contact Form 7, Ninja Forms, WP Forms =====------>

        <div class="row justify-content-center feat-shadw">

            <div class="col-lg-2 col-3 col-md-2">
                <a href="#feature-google-drive">
                    <div class="popular-form-area text-center">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/integrations/google-drive.png" alt="Google Drive">
                        <div class="popular-form-area-text text-center">
                            <span class="popular-form-text">
                                Google Drive
                            </span>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-lg-2 col-3 col-md-2">
                <a href="#feature-mailchimp">
                    <div class="popular-form-area text-center">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/integrations/mailchimp.png" alt="mailchimp">
                        <div class="popular-form-area-text text-center">
                            <span class="popular-form-text">
                                Mailchimp
                            </span>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-lg-2 col-3 col-md-2">
                <a href="#feature-telegram">
                    <div class="popular-form-area text-center">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/integrations/telegram.png" alt="telegram">
                        <div class="popular-form-area-text text-center">
                            <span class="popular-form-text">
                                Telegram
                            </span>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-lg-2 col-3 col-md-2">
                <a href="#feature-webhooks">
                    <div class="popular-form-area text-center">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/integrations/webhooks.png" alt="Webhooks">
                        <div class="popular-form-area-text text-center">
                            <span class="popular-form-text">
                                Webhooks
                            </span>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-lg-2 col-3 col-md-2">
                <a href="#feature-zapier">
                    <div class="popular-form-area text-center">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/integrations/zapier.png" alt="Zapier">
                        <div class="popular-form-area-text text-center">
                            <span class="popular-form-text">
                                Zapier
                            </span>
                        </div>
                    </div>
                </a>
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
            <div id="feature-<?php echo $key; ?>" class="row popular-form-feature align-items-center feature-<?php echo $key; ?> <?php echo !$is_odd ? 'flex-row-reverse' : '' ?>">

                <div class="<?php echo $image_class; ?>">
                    <div class="feature-item-img">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/integrations/<?php echo $key; ?>-illustration.png" alt="<?php echo $feature['title']; ?>">

                        <!-- <div class="feature-video">
                            <?php
                            if (!wp_is_mobile()) {
                                echo $feature['video'];
                            }
                            ?>
                        </div> -->

                    </div>
                </div>

                <div class="<?php echo $content_class; ?>">
                    <div class="feature-item-content text-center text-md-start">


                        <img class="img-fluid feature-icon" src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/integrations/<?php echo $key; ?>-icon.png" alt="<?php echo $feature['title']; ?>">

                        <h3 class="feature-title"><?php echo $feature['title']; ?></h3>
                        <p class="feature-description"><?php echo $feature['description']; ?></p>

                        <?php
                        if (wp_is_mobile()) {
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