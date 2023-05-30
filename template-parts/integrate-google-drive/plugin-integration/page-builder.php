<?php

    $features = [
        'classic-editor' => [
            'title'       => 'Classic Editor',
            'description' => 'The Integrate Google Drive WordPress plugin is compatible with the Classic Editor page builder, allowing users to easily and conveniently manage and insert Google Drive files into their posts and pages without leaving the editor.',
            'video'        => '<iframe  src="https://www.youtube.com/embed/E1RmiLFJ1wg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        ],
        'gutenberg' => [
            'title'       => 'Gutenberg',
            'description' => 'With the integration of Gutenberg compatibility, users can now easily add and manage these files and folders within the Gutenberg block editor, providing a streamlined and user-friendly experience. This integration allows users to easily create and manage content without having to switch between different platforms or interfaces.',
            'video'        => '<iframe  src="https://www.youtube.com/embed/H8tHWCmyJno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        ],
        'elementor' => [
            'title'       => 'Elementor Website Builder',
            'description' => 'With the added compatibility for the Elementor website builder, users can easily incorporate Google Drive files and folders into their Elementor-designed pages and posts. This integration offers a convenient way to share and display content from Google Drive directly on your website.',
            'video'        => '<iframe  src="https://www.youtube.com/embed/DnbvXdWv8Q0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',

        ],
        'divi' => [
            'title'       => 'Divi Page Builder',
            'description' => 'Add Google Drive modules, embed documents and insert  file view links and download links using the Google Drive  Gutenberg editor blocks',
            'video'        => '<iframe src="https://www.youtube.com/embed/Iz_Md-oiRhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',

        ],

    ];

?>


<section id="page-builder">
    <div class="container">

        <!----===== Hero arae =====------>

        <div class="row vector-area">
            <div class="col-lg-7 m-auto">
                <div class="section-head text-center">
                    <h2 class="heading-text">Popular Page Builders Integration</h2>
                    <p class="heading-description">Integrate Google Drive is designed to work seamlessly with widely used page builders like Classic Editor, Gutenberg, and Elementor.</p>
                </div>
            </div>
            <div class="vector-crcel-left">
                <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/plugin-integrations/vector-1.png" alt="vector-1">
            </div>
        </div>
        <!----===== Classic Editor, Gutenberg, Elementor =====------>

        <div class="row feat-shadw">

            <div class="col-lg-2 col-4 col-md-4 ms-auto">
                <a href="#feature-classic-editor">
                    <div class="page-builder-area text-center">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/plugin-integrations/page-builder/classic-editor.png" alt="classic-editor">
                        <div class="page-builder-area-text text-center">
                            <span class="page-builder-text">
                                Classic Editor
                            </span>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-lg-2 col-4 col-md-4">
                <a href="#feature-gutenberg">
                    <div class="page-builder-area text-center">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/plugin-integrations/page-builder/gutenberg.png" alt="gutenberg">
                        <div class="page-builder-area-text text-center">
                            <span class="page-builder-text">
                                Gutenberg
                            </span>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-lg-2 col-4 col-md-4">
                <a href="#feature-elementor">
                    <div class="page-builder-area text-center">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/plugin-integrations/page-builder/elementor.png" alt="elementor">
                        <div class="page-builder-area-text text-center">
                            <span class="page-builder-text">
                                Elementor
                            </span>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-lg-2 col-4 col-md-4 me-auto">
                <a href="#feature-divi">
                    <div class="page-builder-area text-center">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/plugin-integrations/page-builder/divi.png" alt="divi">
                        <div class="page-builder-area-text text-center">
                            <span class="page-builder-text">
                                Divi Page Builder
                            </span>
                        </div>
                    </div>
                </a>
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
            <div id="feature-<?php echo $key; ?>" class="row page-builder-feature align-items-center feature-<?php echo $key; ?> <?php echo !$is_odd ? 'flex-row-reverse' : '' ?>">

                <div class="<?php echo $image_class; ?>">
                    <div class="feature-item-img">
                        <div class="feature-video">

                            <?php
                            if (!wp_is_mobile()) {
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
                        if (wp_is_mobile()) {
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