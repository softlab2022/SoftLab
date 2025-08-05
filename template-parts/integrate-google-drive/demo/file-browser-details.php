<?php

$features = [
	[
		'title'       => 'Manage Your Documents Easily',
		'description' => 'File Browser and manage your Documents easily via your favorite cloud platform. The File Browser will make sure that your files are automatically shown on your WordPress site.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/file-bowser-demo/documents.png",
		'features'    => [ 'List and Grid View', 'Search and Filter', 'Live Preview Files', 'Import Media in File', ]
	],
	[
		'title'       => 'Link Multiple Google Drive Accounts',
		'description' => 'You can add and manage multiple Google Drive cloud accounts from your site using this plugin.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/file-bowser-demo/multiple.png",
		'features'    => [
			'Use Your Own Account',
			'Add Multiple Account',
			'Remove Any Accounts',
			'Manage Your Own Drive',
		],
	],
	[
		'title'       => 'Customize Using by Appearance',
		'description' => 'You can change its colors, and Background colors as needed, save them with the current style.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/file-bowser-demo/appearance.png",
		'features'    => [ 'Live Preview Style', 'Colors Customize', 'Use Custom CSS', 'Background Color Changes', ],
	],
	[
		'title'       => 'Use ACF field Files',
		'description' => 'Easily connect your ACF File fields with the Google Drive File Browser module to display files dynamically across your site. Whether you\'re using single or repeater fields, files linked via ACF are automatically rendered—no manual setup required.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/file-bowser-demo/use-acf-field-files.png",
		'features'    => [ 'Automatically pulls files from Google Drive', 'Ideal for dynamic file rendering', 'Auto-sync with ACF File fields', 'No manual linking needed', ],
	],
	[
		'title'       => 'Useful Interactions',
		'description' => 'The File Browser module offers powerful Google Drive file management capabilities directly from the WordPress platform. Users can seamlessly interact with files—view, upload, download, or delete based on their permissions.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/file-bowser-demo/useful-interactions.png",
		'features'    => [ 'View files in real-time', 'Upload new files', 'Download with one click', 'Delete files securely','Role-based access control' ],
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
                        	<img class="img-fluid" src="<?php echo $feature['image']; ?>" alt="File Browser">
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
                        <img class="img-fluid" src="<?php echo $feature['image']; ?>" alt="File Browser">
                    </div>
                </div>
            </div>
		<?php } ?>
    </div>
</section>