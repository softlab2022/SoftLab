<section class="file-uploader-demo-hero">
    <div class="container">

        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="uploader-demo-head text-center">
                    <h1><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/features/file-uploader-icon.png" alt="">File Uploader</h1>
                    <p>You and also your users can upload files directly to your Google Drive account from your
                    site.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 m-auto">
                <div class="demo-header-bg text-center">

                    <!-- <?php //echo do_shortcode('[integrate_google_drive id="2"]'); ?> -->
                    <?php
                    if (!empty(get_option('file_uploader_shortcode'))) {
                        echo do_shortcode(get_option('file_uploader_shortcode'));
                    }
                    ?>

                </div>
            </div>
        </div>

    </div>
</section>