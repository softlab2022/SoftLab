<section id="photo-gallery-demo">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="photo-gallery-demo-head text-center">
                    <h1><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/features/gallery-icon.png" alt="">Gallery</h1>
                    <p>You can add a grid lightbox popup photo gallery in your page/ post using the gallery options of the plugin. The gallery will be generated based on the folders that you select.</p>
                </div>
            </div>
        </div>

            <div class="row">
            <div class="col-lg-8 m-auto">
                    <div class="demo-header-bg text-center">

                    <?php echo do_shortcode('[integrate_google_drive id="3"]'); ?>
                    
                    </div>
                </div>
            </div>

    </div>
</section>