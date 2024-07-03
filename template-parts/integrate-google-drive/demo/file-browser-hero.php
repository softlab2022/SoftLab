<section id="browser-demo">
    <div class="container">
        <div class="row">
            <div class="col-md-6 m-auto">
                <div class="browser-demo-head text-center">
                    <h1><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/features/file-browser-icon.png" alt="">File Browser</h1>
                    <p>Display your cloud files via a File Browser. The file browser can have a grid thumbnail and list
                        view and can have a file uploader.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 m-auto">
                <div class="demo-header-bg text-center">

                    <!-- <?php //echo do_shortcode( '[integrate_google_drive id="1"]' ); 
                            ?> -->
                    <?php
                    if (!empty(get_option('file_browser_shortcode'))) {
                        echo do_shortcode(get_option('file_browser_shortcode'));
                    }
                    ?>

                </div>
            </div>
        </div>

    </div>
</section>