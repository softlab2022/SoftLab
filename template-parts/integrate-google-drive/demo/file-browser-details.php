<?php

$features = [
	[
		'title'       => 'Manage Your Documents Easily',
		'description' => 'File Browser and manage your Documents easily via your favorite cloud platform. The File Browser will make sure that your files are automatically shown on your WordPress site.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/file-bowser-demo/documents.png",
		'features'    => [ 'List and Grid View', 'Search and Filter', 'Live Preview Files', 'Import Media in File', ]
	],
	[
		'title'       => 'Link Multiple Dropbox Accounts',
		'description' => 'You can add and manage multiple Dropbox cloud accounts from your site using this plugin.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/file-bowser-demo/multiple.png",
		'features'    => [
			'Use Your Own Account',
			'Add Multiple Account',
			'Remove Any Accounts',
			'Manage Your Own Drive',
		],
	],
	[
		'title'       => 'Customize Appearance',
		'description' => 'You can change its colors and Background colors as needed and save them with the current style.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/file-bowser-demo/appearance.png",
		'features'    => [ 'Live Preview Style', 'Colors Customize', 'Use Custom CSS', 'Background Color Changes', ],
	]
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