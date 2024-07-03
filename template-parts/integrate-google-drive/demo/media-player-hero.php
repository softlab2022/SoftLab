<section id="media-demo">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="media-demo-head text-center">
                    <h1><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/features/media-player-icon.png" alt="">Media Player</h1>
                    <p>You can play your Google Drive audio & video files with a playlist into your website. Audio and video can be played in a single player.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="demo-header-bg text-center">
                    <!-- <?php //echo do_shortcode('[integrate_google_drive id="4"]'); 
                            ?> -->
                    <?php
                    if (!empty(get_option('media_player_shortcode'))) {
                        echo do_shortcode(get_option('media_player_shortcode'));
                    }
                    ?>
                </div>
            </div>
        </div>

    </div>
</section>