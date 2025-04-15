<section id="media-demo">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="media-demo-head text-center">
                    <h1>Media Player</h1>
                    <p>You can play your Dropbox audio & video files with a playlist on your website. Audio and video can be played in a single player.</p>
                </div>
            </div>
        </div>

            <div class="row">
            <div class="col-lg-8 m-auto">
                    <div class="demo-header-bg text-center">
                    <?php
                    if (!empty(get_option('media_player_shortcode_dropbox'))) {
                        echo do_shortcode(get_option('media_player_shortcode_dropbox'));
                    }
                    ?>
                    </div>
                </div>
            </div>

    </div>
</section>