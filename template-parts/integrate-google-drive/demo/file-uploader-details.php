<?php
$features = [
	[
		'title'       => 'One-Click File Uploader',
		'description' => 'You and your users can upload files directly to your Google Drive account from your site with just 1 click.',
		'image'       => get_template_directory_uri() ."/assets/images/google-drive/uploader-demo/one-click.png",
		'features'    => [ 'Create Perfect Upload', 'Customize Uploader', 'Easily Upload Documents ', 'Close Uploaded Files', ],
	],
	
	[
		'title'       => 'Popular Forms Connect & Easy to Use',
		'description' => 'Integrate your favorite services and add advanced features with official Forms. Each license offers a range of add-ons included with your annual subscription.',
		'image'       => get_template_directory_uri() ."/assets/images/google-drive/uploader-demo/form-illustration.png",
		'features'    => [ 'Contact Form 7', 'WPForms', 'Gravity Forms', 'Ninja Forms', 'Fluent Forms', 'Formidable Forms', 'Elementor Form', 'MetForm' ],
	],
	[
		'title'       => 'Upload to Google Drive',
		'description' => 'Allow users to upload files directly to your connected Google Drive from the WordPress platform. It’s a fast, secure, and seamless way to collect files without needing external access to Google Drive.',
		'image'       => get_template_directory_uri() ."/assets/images/google-drive/uploader-demo/uploader-style.png",
		'features'    => [ 'Direct upload to Google Drive', 'Supports multiple file types and sizes', 'Secure uploads with permission control', 'Role and permission-based uploads', ],
	],
	[
		'title'       => 'Specific Folder Selector',
		'description' => 'Easily choose the exact Google Drive folder where files will be uploaded or displayed. With the Specific Folder Selector, you have full control over file organization for each module—no need to hardcode folder IDs.',
		'image'       => get_template_directory_uri() ."/assets/images/google-drive/uploader-demo/specific-folder-selector.png",
		'features'    => [ 'Select Google Drive folders visually from WordPress', 'Avoids manual folder ID entry', 'Supports nested folders', 'Saves time and improves accuracy', ],
	],
	[
		'title'       => 'Uploaded File Description',
		'description' => 'Allow users to enter a custom description when uploading files through the File Uploader module. The description is saved to Google Drive and can be viewed directly from Drive or used in your file display modules.',
		'image'       => get_template_directory_uri() ."/assets/images/google-drive/uploader-demo/uploaded-file-description.png",
		'features'    => [ 'Add file description during upload', 'Description saved in Google Drive metadata', 'Enhances file context and organization', 'An optional and user-friendly input field', ],
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
