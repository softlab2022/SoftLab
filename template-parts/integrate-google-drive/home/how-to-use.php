<?php
$howtouses = [
     
    'download-install' => [
        'title'       => 'Download & Install',
        'description' => 'Download the WordPress plugin from WordPress repo and install the plugin from your admin dashboard',
    ],
    'link-google-account' => [
        'title'       => 'Link A Google Account',
        'description' => 'After activating the plugin, you need to link your Google account to it in order to access your Google Drive files from WordPress admin dashboard',
    ],
    'manage-browse-files' => [
        'title'       => 'Manage & Browse Files',
        'description' => 'Browse files via the plugin\'s File Browser to manage them efficiently. You can copy, edit, rename, and delete files directly within the plugin. This integration simplifies organizing your files without leaving WordPress',
    ],
    'shortcode-builder' => [
        'title'       => 'Shortcode Builder',
        'description' => 'You can create various types of module (File browser, Photo Gallery, Media player etc.) with different configurations with the shortcode builder and can use them anywhere using the shortcode.',
    ],
    'explore-enjoy-features' => [
        'title'       => 'Explore and Enjoy Features',
        'description' => 'You can create various types of module (File browser, Photo Gallery, Media player etc.) with different configurations with the shortcode builder and can use them anywhere using the shortcode.',
    ],

];

?>





<section id="how-to-use">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 m-auto">
                <div class="how-to-use-head text-center">
                    <h1>Let's learn how to Integrate <span>Google Drive</span></h1>
                    <p>Enhance your productivity by installing the Integrate Google Drive plugin. Follow our straightforward, step-by-step guide below to learn how to use it effectively.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="use-main">
                   <?php foreach ( $howtouses as $key => $howtouse ) { ?>
                    <div class="row how-to-use-<?php echo $key; ?> justify-content-center align-items-center">
                        <div class="col-lg-3 col-md-3">
                            <div class="use-imgs">
                                <img class="img-fluid <?php echo $key; ?>-icon feature-icon"
                                 src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/how-to-use/<?php echo $key; ?>-number.png"
                                 alt="<?php echo $howtouse['title']; ?>">
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