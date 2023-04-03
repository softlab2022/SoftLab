<?php

$features = [
    'classic-editor' => [
        'title'       => 'Classic Editor',
        'description' => 'Add Google Drive module, embed documentsand insert file view links and download links using the  Google Drive button on the classic editor.',
        'video'        => '<iframe  src="https://www.youtube.com/embed/E1RmiLFJ1wg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    ],
    'gutenberg' => [
        'title'       => 'Gutenberg',
        'description' => 'Add Google Drive module, embed documentsand insert file view links and download links using the  Google Drive button on the classic editor.',
        'video'        => '<iframe  src="https://www.youtube.com/embed/H8tHWCmyJno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    ],
    'elementor' => [
        'title'       => 'Elementor Website Builder',
        'description' => 'Add Google Drive module, embed documentsand insert file view links and download links using the  Google Drive button on the classic editor.',
        'video'        => '<iframe  src="https://www.youtube.com/embed/DnbvXdWv8Q0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',

    ],

];

?>




<section id="page-builder">
    <div class="container">

        <!----===== Hero arae =====------>

        <div class="row vector-area">
            <div class="col-lg-7 m-auto">
                <div class="section-head text-center">
                    <h2 class="heading-text">Page Builders</h2>
                    <p class="heading-description">Use your favorite Page Builder to add the plugin to your WordPress pages. The Shortcode
                        Builder is available in most cases via 'Text' block or via its own block.</p>
                </div>
            </div>
            <div class="vector-crcel-left">
                <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/plugin-integrations/vector-1.png" alt="vector-1">
            </div>
        </div>
        <!----===== Classic Editor, Gutenberg, Elementor =====------>

        <div class="row feat-shadw">

            <div class="col-lg-2 col-4 col-md-4 ms-auto">
                <div class="page-builder-area text-center">
                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/plugin-integrations/page-builder/classic-editor.png" alt="classic-editor">
                    <div class="page-builder-area-text text-center">
                        <span class="page-builder-text">
                            Classic Editor
                        </span>
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-4 col-md-4">
                <div class="page-builder-area text-center">
                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/plugin-integrations/page-builder/gutenberg.png" alt="gutenberg">
                    <div class="page-builder-area-text text-center">
                        <span class="page-builder-text">
                            Gutenberg
                        </span>
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-4 col-md-4 me-auto">
                <div class="page-builder-area text-center">
                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/plugin-integrations/page-builder/elementor.png" alt="elementor">
                    <div class="page-builder-area-text text-center">
                        <span class="page-builder-text">
                            Elementor
                        </span>
                    </div>
                </div>
            </div>

        </div>

        <!---==== page builder feature area ====---->
        <?php
            $i = 0;
            foreach ($features as $key => $feature) {
                $is_odd         = $i % 2 == 0;

                //$image_class   = $is_odd ? 'col-md-7' : 'col-md-5';
                //$content_class = $is_odd ? 'col-md-5' : 'col-md-7';

                $image_class   =  'col-md-7';
                $content_class = 'col-md-5';

        ?>
            <div class="row page-builder-feature align-items-center feature-<?php echo $key; ?> <?php echo !$is_odd ? 'flex-row-reverse' : '' ?>">

                <div class="<?php echo $image_class; ?>">
                    <div class="feature-item-img">
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


                        <img class="img-fluid feature-icon" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/plugin-integrations/page-builder/<?php echo $key; ?>-icon.png" alt="<?php echo $feature['title']; ?>">

                        <h3 class="feature-title"><?php echo $feature['title']; ?></h3>
                        <p class="feature-description"><?php echo $feature['description']; ?></p>

                        <?php
                            if ( wp_is_mobile() ) {
                                echo $feature['video'];
                            }
                        ?>

                        <a href="https://demo.softlabbd.com/?product=integrate-google-drive" class="feature-demo-btn">Try Live Demo</a>

                    </div>
                </div>
            </div>
        <?php
            $i++;
        } ?>


    </div>
</section>