<section id="slider-carousel-demo">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="slider-carousel-demo-head text-center">
                    <h1><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/features/slider-carousel-icon.png" alt="">Slider Carousel</h1>
                    <p>The Slider Carousel feature in our Connect Dropbox plugin lets you create a slideshow of images or videos for your Dropbox files. You can customize it with autoplay and navigation buttons to make your content more engaging and visually appealing.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="demo-header-bg text-center">

                    <!-- <?php //echo do_shortcode('[integrate_google_drive id="6"]'); 
                            ?> -->
                    <?php
                    if (!empty(get_option('slider_carousel_shortcode_dropbox'))) {
                        echo do_shortcode(get_option('slider_carousel_shortcode_dropbox'));
                    }else {
                        echo "No Shortcode Found!";
                    }
                    ?>
                </div>
            </div>
        </div>

    </div>
</section>