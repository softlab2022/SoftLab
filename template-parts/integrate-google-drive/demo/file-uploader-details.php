<?php
$features = [
	[
		'title'       => 'One click file uploader',
		'description' => 'You and also your users can upload files directly to your Google Drive account from your site.',
		'image'       => get_template_directory_uri() ."/assets/images/google-drive/uploader-demo/one-click.png",
		'features'    => [ 'Create perfect Upload', 'Customize uploader', 'Easily Upload Documents ', 'Close uploaded files', ],
	],
	[
		'title'       => 'Switch to change uploader style',
		'description' => 'You and also your users can upload files directly to your Google Drive account from your site.',
		'image'       => get_template_directory_uri() ."/assets/images/google-drive/uploader-demo/uploader-style.png",
		'features'    => [ 'Easy to upload files', 'Customize uploader', 'Drag and drop', 'Skip uploaded files', ],
	],
	[
		'title'       => 'Popular Forms Connect & Easy to use',
		'description' => 'Integrate your favorite services and add advanced features with official Forms. Each license offers a range of add-ons included with your annual subscription.',
		'image'       => get_template_directory_uri() ."/assets/images/google-drive/uploader-demo/form-contact.png",
		'features'    => [ 'Contact Form 7', 'WPForms', 'GravityForms', ],
	],

];
?>

<section class="demo-details">
    <div class="container">

		<?php
		$i = 0;
		foreach ( $features as $feature ) {
			$is_odd        = $i % 2 == 0;
			$content_class = $is_odd ? 'col-lg-7 col-md-6' : 'col-lg-5 col-md-6';
			$img_class     = $is_odd ? 'col-lg-5 col-md-6' : 'col-lg-7 col-md-6';
			?>
            <div class="row feature-item align-items-center">
                <div class="<?php echo $content_class; ?>">
                    <div class="feature-content">
                        <h3><?php echo $feature['title']; ?></h3>
                        <p><?php echo $feature['description']; ?></p>
                        <div class="feature-list">
							<?php foreach ( $feature['features'] as $item ) { ?>
                                <span><i class="fa-solid fa-check"></i> <?php echo $item; ?></span>
							<?php } ?>
                        </div>
                    </div>
                </div>

                <div class="<?php echo $img_class; ?>">
                    <div class="feature-item-img">
                        <img class="img-fluid" src="<?php echo $feature['image']; ?>" alt="File Uploader">
                    </div>
                </div>
            </div>
		<?php } ?>
    </div>
</section>
