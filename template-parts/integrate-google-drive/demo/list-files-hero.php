<section id="list-files-demo-hero">
    <div class="container">
        <div class="row">
            <div class="col-md-6 m-auto">
                <div class="list-files-demo-head text-center">
                    <h1><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/features/list-files-icon.png" alt="">List Files</h1>
                    <p>Display your Google Drive files in a clean, organized list layout. The List Module allows users to view, download, or even edit files (based on permissions) directly from your site.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 m-auto">
                <div class="demo-header-bg text-center">

                    <!-- <?php //echo do_shortcode( '[integrate_google_drive id="1"]' ); 
                            ?> -->
                    <?php
                    if (!empty(get_option('list_files_shortcode'))) {
                        echo do_shortcode(get_option('list_files_shortcode'));
                    }
                    ?>

                </div>
            </div>
        </div>

    </div>
</section>