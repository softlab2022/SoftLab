<?php
$howtouses = [
     
    'download-install' => [
        'title'       => 'Download & Install',
        'description' => 'Download the plugin from WordPress repository and install it via admin dashboard',
    ],
    'link-google-account' => [
        'title'       => 'Link Google Account',
        'description' => 'After activating the plugin, link your Google account to access Google Drive files',
    ],
    'manage-browse-files' => [
        'title'       => 'Manage & Browse Files',
        'description' => 'Plugin\'s File Browser manages files efficiently. You can copy, edit, rename, and delete files directly without leaving WordPress',
    ],
    'shortcode-builder' => [
        'title'       => 'Shortcode Builder',
        'description' => 'Create various modules using the Shortcode builder, and place them anywhere with the Shortcode',
    ],
    'explore-enjoy-features' => [
        'title'       => 'Explore and Enjoy Features',
        'description' => 'Enjoy fast uploads, real-time syncing, and direct Drive access from your WordPress dashboard',
    ],

];

?>





<section id="how-to-use">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 m-auto">
                <div class="how-to-use-head text-center">
                    <h3>Let's learn how to Integrate <span>Google Drive</span></h3>
                    <p>Enhance your productivity by installing the Integrate Google Drive plugin. Follow our straightforward, step-by-step guide below to learn how to use it effectively.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="use-main">
                   <?php foreach ( $howtouses as $key => $howtouse ) { ?>
                    <div class="row how-to-use-<?php echo $key; ?> justify-content-center align-items-center">
                        <div class="col-lg-2 col-md-3">
                            <div class="use-imgs">
                                <div class="image-<?php echo $key; ?>">
                                    <img class="img-fluid <?php echo $key; ?>-icon feature-icon"
                                     src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/how-to-use/<?php echo $key; ?>-number.png"
                                     alt="<?php echo $howtouse['title']; ?>">
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-8">

                            <div class="use-item d-flex align-items-center">
                                <div class="use-img">
                                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/how-to-use//<?php echo $key; ?>-icons.png"  alt="<?php echo $howtouse['title']; ?>">
                                </div>
                                <div class="use-text">
                                    <h4><?php echo $howtouse['title']; ?></h4>
                                    <p><?php echo $howtouse['description']; ?></p>
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