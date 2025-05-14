<section id="photo-gallery-demo">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="photo-gallery-demo-head text-center">
                    <h1>Photo gallery</h1>
                    <p>You can add a grid lightbox popup photo gallery in your page/ post using the photo gallery options of the plugin. The gallery will be generated based on the folders that you select.</p>
                </div>
            </div>
        </div>

            <div class="row">
            <div class="col-lg-8 m-auto">
                    <div class="demo-header-bg text-center">

                    <?php
                    if (!empty(get_option('gallery_shortcode_dropbox'))) {
                        echo do_shortcode(get_option('gallery_shortcode_dropbox'));
                    }else {
                        echo "No Shortcode Found!";
                    }
                    ?>
                    
                    </div>
                </div>
            </div>

    </div>
</section>