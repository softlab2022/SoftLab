<?php
$howtouses = [

    'download-install' => [
        'title'       => 'Download & Install',
        'description' => 'Download the plugin from WordPress repository and install it via admin dashboard',
    ],
    'link-google-account' => [
        'title'       => 'Link Dropbox Account',
        'description' => 'After activating the plugin, link your Dropbox account to access Dropbox files',
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
        'description' => 'Enjoy fast uploads, real-time syncing, and direct Dropbox access from your WordPress dashboard',
    ],

];

?>





<section id="how-to-use">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 m-auto">
                <div class="how-to-use-head text-center">
                    <h3>Explore How to Integrate<span> Dropbox</span></h3>
                    <p>Discover to use Connect Dropbox to simplify your Dropbox file management within WordPress.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="use-main">
                    <?php foreach ($howtouses as $key => $howtouse) { ?>
                        <div class="row how-to-use-<?php echo $key; ?> justify-content-center align-items-center">
                            <div class="col-lg-2 col-md-3">
                                <div class="use-imgs">
                                    <div class="image-<?php echo $key; ?>">
                                        <img class="img-fluid <?php echo $key; ?>-icon feature-icon"
                                            src="<?php echo get_template_directory_uri(); ?>/assets/images/connect-dropbox/how-to-use/<?php echo $key; ?>-number.png"
                                            alt="<?php echo $howtouse['title']; ?>">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-8">

                                <div class="use-item d-flex align-items-center">
                                    <div class="use-img">
                                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/connect-dropbox/how-to-use//<?php echo $key; ?>-icons.png" alt="<?php echo $howtouse['title']; ?>">
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