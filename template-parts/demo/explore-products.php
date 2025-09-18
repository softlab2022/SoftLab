<?php

$items = array(
        array(
                'key'   => 'integrate-google-drive',
                'title' => esc_html__( 'Integrate Google Drive', 'softlab' ),
                'desc'  => esc_html__( 'All-in-One Google Drive Integration for WordPress', 'softlab' ),
        ),
        array(
                'key'   => 'radio-player',
                'title' => esc_html__( 'Radio Player', 'softlab' ),
                'desc'  => esc_html__( 'Live Shoutcast, Icecast and Audio Stream Player for WordPress.', 'softlab' ),
        ),
        array(
                'key'   => 'dracula-dark-mode',
                'title' => esc_html__( 'Dracula Dark Mode', 'softlab' ),
                'desc'  => esc_html__( 'Enhanced Accessibility, Dark Mode & Reading Mode for WordPress', 'softlab' ),
        ),
        array(
                'key'   => 'essential-addons-for-contact-form-7',
                'title' => esc_html__( 'Essential Addons for Contact Form 7', 'softlab' ),
                'desc'  => esc_html__( 'All-in-one enhancement suite for improving Contact Form 7 and WordPress', 'softlab' ),
        ),
        array(
                'key'   => 'multimedia-player',
                'title' => esc_html__( 'Multimedia Player', 'softlab' ),
                'desc'  => esc_html__( 'The ultimate WordPress plugin to stream audio, video, and podcasts.', 'softlab' ),
        ),
);

?>

<section class="explore-products">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title text-center">
                    <h2><?php echo esc_html__( 'Choose the product that you want to try!', 'softlab' ); ?></h2>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row product-items">
            <?php foreach ( $items as $item ) : ?>
                <div class="product-item text-center" data-id="<?php echo $item['key']; ?>">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/demo/products/<?php echo $item['key']; ?>.png"
                         alt="<?php echo $item['title']; ?>" class="img-fluid">
                    <h3><?php echo $item['title']; ?></h3>
                    <p><?php echo $item['desc']; ?></p>
                    <button class="btn btn-primary"><?php echo esc_html__( 'Try Live Demo', 'softlab' ); ?></button>
                </div>
            <?php endforeach; ?>
        </div>

    </div>

</section>

<script>
    jQuery(document).ready(function ($) {

        $('.product-item').on('click', function () {
            const product = $(this).data('id');
            const title = $(this).find('h3').text();
            swal.fire({
                html: `
                    <img src="${`${softlab.assets_url}`}images/demo/products/${product}.png" alt="${product}" class="img-fluid">
                    <h3>${title}</h3>
                    <p class="access">Access all premium feature for FREE!</p>
                    <form action="#" method="post" class="demo-request">
                        <input type="email" class="form-control" placeholder="Email Address" required />

                        <div class="privacy"><img src="${softlab.assets_url}images/demo/lock.svg" alt="lock" /> <p>Your privacy is our priority. We don't spam.</p></div>

                        <button type="submit" class="btn btn-primary">Try Live Demo</button>
                    </form>
                    <div class="success hidden">
                        <p>Check your email to get the demo account credentials. If you didn't receive any email, please check the Spam folder.</p>
                    </div>
                    <div class="error hidden">
                        <p>Something went wrong. Please try again.</p>
                    </div>
                `,

                showCancelButton: false,
                showConfirmButton: false,
                confirmButtonText: 'Try Live Demo',
                showCloseButton: true,
                allowOutsideClick: false,
                width: 480,
                customClass: {
                    container: 'softlab-swal',
                    htmlContainer: 'softlab-demo-popup',
                }
            });

            // Send AJAX
            $('.demo-request').on('submit', function (e) {
                e.preventDefault();
                const email = $(this).find('input[type="email"]').val();

                // Show SweetAlert built-in loader
                Swal.showLoading();

                wp.ajax.post('demo_request', {
                    product,
                    email,
                    nonce: softlab.nonce,
                }).done(function (response) {
                    Swal.hideLoading(); // stop spinner
                    $('.demo-request').fadeOut(400, function () {
                        $('.success').removeClass('hidden').fadeIn(400);
                    });
                }).fail(function (error) {
                    Swal.hideLoading();
                    $('.demo-request').fadeOut(400, function () {
                        $('.error').removeClass('hidden').fadeIn(400);
                    });
                });
            });

        });
    });
</script>