<?php
$features = [
	[
		'title'       => 'One-Click File Uploader',
		'description' => 'You and also your users can upload files directly to your Google Drive account from your site.',
		'image'       => get_template_directory_uri() ."/assets/images/google-drive/uploader-demo/one-click.png",
		'features'    => [ 'Create Perfect Upload', 'Customize Uploader', 'Easily Upload Documents ', 'Close Uploaded Files', ],
	],
	[
		'title'       => 'Switch to Change Uploader Style',
		'description' => 'You and also your users can upload files directly to your Google Drive account from your site.',
		'image'       => get_template_directory_uri() ."/assets/images/google-drive/uploader-demo/uploader-style.png",
		'features'    => [ 'Easy to Upload Files', 'Customize Uploader', 'Drag and Drop', 'Skip Uploaded Files', ],
	],
	[
		'title'       => 'Popular Forms Connect & Easy to Use',
		'description' => 'Integrate your favorite services and add advanced features with official Forms. Each license offers a range of add-ons included with your annual subscription.',
		'image'       => get_template_directory_uri() ."/assets/images/google-drive/uploader-demo/form-illustration.png",
		'features'    => [ 'Contact Form 7', 'WPForms', 'Gravity Forms', 'Ninja Forms', 'Fluent Forms', 'Formidable Forms', 'Elementor Form', 'MetForm' ],
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
						<div class="feature-item-img-mobile">
                        	<img class="img-fluid" src="<?php echo $feature['image']; ?>" alt="File Uploader">
                    	</div>
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
