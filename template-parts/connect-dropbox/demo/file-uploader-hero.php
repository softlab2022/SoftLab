<section class="file-uploader-demo-hero">
    <div class="container">

        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="uploader-demo-head text-center">
                    <h1>File Uploader</h1>
                    <p>You and your users can upload files directly to your Dropbox account from your site.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 m-auto">
                <div class="demo-header-bg text-center">

                <?php
                    if (!empty(get_option('file_uploader_shortcode_dropbox'))) {
                        echo do_shortcode(get_option('file_uploader_shortcode_dropbox'));
                    }else {
                        echo "No Shortcode Found!";
                    }
                    ?>

                </div>
            </div>
        </div>

    </div>
</section>