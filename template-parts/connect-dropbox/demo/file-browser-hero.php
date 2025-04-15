<section id="browser-demo">
    <div class="container">
        <div class="row">
            <div class="col-md-6 m-auto">
                <div class="browser-demo-head text-center">
                    <h1>File Browser</h1>
                    <p>Display your Dropbox cloud files via a File Browser. The file browser can have a grid thumbnail and list view and can have a file uploader.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 m-auto">
                <div class="demo-header-bg text-center">

                <?php
                    if (!empty(get_option('file_browser_shortcode_dropbox'))) {
                        echo do_shortcode(get_option('file_browser_shortcode_dropbox'));
                    }else {
                        echo "No Shortcode Found!";
                    }
                    ?>


                </div>
            </div>
        </div>

    </div>
</section>