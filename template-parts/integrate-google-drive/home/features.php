<?php

$features = [
	'file-browser' => [
		'title'       => 'File Browser',
		'description' => 'Display your cloud files via a File Browser. The file browser can have a grid thumbnail and list view and can have a file uploader.',
	],

	'file-uploader' => [
		'title'       => 'File Uploader',
		'description' => 'You and also your users can upload files directly to your Google Drive account from your site.',
	],

	'photo-gallery' => [
		'title'       => 'Photo Gallery',
		'description' => 'You can add a grid lightbox popup photo gallery in your page/ post using the photo gallery options of the plugin. The gallery will be generated based on the folders that you select.',
	],

	'media-player' => [
		'title'       => 'Media Player',
		'description' => 'Play audio and video in a single player using this module. The audio and video playlist will be created from the selected folders that you select.',
	],

	'shortcode-builder' => [
		'title'       => 'Shortcode Builder',
		'description' => 'You can create various types of module with different configurations with the shortcode builder and can use them anywhere using the shortcode.',
	],

	'multiple-accounts' => [
		'title'       => 'Multiple Google Accounts',
		'description' => 'You can link multiple Google accounts and can use files from the multiple accounts.',
	],

	'page-builder' => [
		'title'       => 'Popular Page Builder Supports',
		'description' => 'Compare the Best Website Builders and Choose Yours. Create a Free Website Today. It\'s Easy and Free. Compare the Best Website Builders.',
	],

	'form' => [
		'title'       => 'Popular Forms Connect & Easy to Use',
		'description' => 'Integrate your favorite services and add advanced features with official Forms. Each license offers a range of add-ons included with your annual subscription.',
	],

];

?>

<section id="features" class="integrate-google-drive-features">
    <div class="container">

        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="section-head text-center">
                    <h1>Amazing Drive </br> Integration <span>Features</span>.</h1>
                    <p>Best and most productive integrations for </br> Google Drive. Learn how to connect with us.</p>
                </div>
            </div>
        </div>

		<?php
		$i = 0;
		foreach ( $features as $key => $feature ) {
			$is_odd         = $i % 2 == 0;
			$is_integration = in_array( $key, [ 'page-builder', 'form' ] );

			$image_class   = $is_odd ? 'col-md-7' : 'col-md-5';
			$content_class = $is_odd ? 'col-md-5' : 'col-md-7';

			if ( $is_integration ) {
				$image_class   = 'col-md-6';
				$content_class = 'col-md-6';
			}

			?>
            <div class="row feature-item align-items-center feature-<?php echo $key; ?> <?php echo ! $is_odd ? 'flex-row-reverse' : '' ?>">

                <div class="<?php echo $image_class; ?>">
                    <div class="feature-item-img">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/features/<?php echo $key; ?>-illustration.png"
                             alt="<?php echo $feature['title']; ?>">
                    </div>
                </div>

                <div class="<?php echo $content_class; ?>">
                    <div class="feature-item-content text-center text-md-start">

						<?php if ( ! $is_integration ) { ?>
                            <img class="img-fluid feature-icon"
                                 src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/features/<?php echo $key; ?>-icon.png"
                                 alt="<?php echo $feature['title']; ?>">
						<?php } ?>

                        <h3 class="feature-title"><?php echo $feature['title']; ?></h3>
                        <p class="feature-description"><?php echo $feature['description']; ?></p>

						<?php if ( 'page-builder' == $key ) { ?>
                            <div class="feature-integrations">
                                <span><i class="fa-solid fa-check"></i> Classic Editor</span>
                                <span><i class="fa-solid fa-check"></i> Gutenberg</span>
                                <span><i class="fa-solid fa-check"></i> Elementor</span>
                            </div>
						<?php } elseif ( 'form' == $key ) { ?>
                            <div class="feature-integrations">
                                <span><i class="fa-solid fa-check"></i> Contact Form 7</span>
                                <span><i class="fa-solid fa-check"></i> WPForms</span>
                                <span><i class="fa-solid fa-check"></i> GravityForms</span>
                                <span><i class="fa-solid fa-check"></i> NinjaForms</span>
                                <span><i class="fa-solid fa-check"></i> FluentForms</span>
                                <span><i class="fa-solid fa-check"></i> FormidableForms</span>
                            </div>
						<?php } ?>

						<?php if ( ! $is_integration && ! in_array( $key, [
								'multiple-accounts',
								'shortcode-builder'
							] ) ) { ?>
                            <a href="/integrate-google-drive-<?php echo $key; ?>" class="feature-demo-btn">View demo</a>
						<?php } ?>

                    </div>
                </div>
            </div>
			<?php
			$i ++;
		} ?>

    </div>
</section>

<section id="woocommerce-support" class="woocommerce-support">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 m-auto">
                <div class="feature-head text-center">
                    <h1>WooCommerce Supports</h1>
                    <p>You can integrate your Google Drive files nicely into WooCommerce, and it allows you to serve
                        your Digital Downloads directly from Google Drive.</p>
                    <div class="vector4">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/ex-feature/ellipse-2.png"
                             alt="ellipse-2">
                    </div>
                </div>

            </div>
        </div>

        <div class="row">
            <div class="col-lg-9 m-auto">
                <div class="woocommerce-img text-center">
                    <img class="img-fluid"
                         src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/support-img.png"
                         alt="support-img">
                </div>
            </div>
        </div>
    </div>
</section>