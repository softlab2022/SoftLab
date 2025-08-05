<section id="review-approve-demo">
    <div class="container">
        <div class="row">
            <div class="col-md-6 m-auto">
                <div class="review-approve-demo-head text-center">
                    <h1><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/features/review-approve-module-icon.png" alt="">Review & Approve Module</h1>
                    <p>Allow users to review and submit selected files for approval. Admins can easily view, manage, and take action on submissions directly from the WordPress dashboard.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 m-auto">
                <div class="demo-header-bg text-center">

                    <!-- <?php //echo do_shortcode( '[integrate_google_drive id="1"]' ); 
                            ?> -->
                    <?php
                    if (!empty(get_option('review_approve_shortcode'))) {
                        echo do_shortcode(get_option('review_approve_shortcode'));
                    }
                    ?>

                </div>
            </div>
        </div>

    </div>
</section>