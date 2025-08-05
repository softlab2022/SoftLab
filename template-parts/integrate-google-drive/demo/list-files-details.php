<?php

$features = [
	[
		'title'       => 'Showcase Google Drive Files to View, Download, or Edit',
		'description' => 'Display your Google Drive files in a clean, organized list layout. The List Module allows users to view, download, or even edit files (based on permissions) directly from your site.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/list-demo/showcase-google.png",
		'features'    => [ 'Clean list-style file display', 'View or download files instantly', 'Edit access based on file permissions', 'Supports all Google Drive file types','Ideal for documents, spreadsheets, PDFs, and more' ]
	],
	[
		'title'       => 'Multiple List Styles',
		'description' => 'Customize how your Google Drive files are displayed with a variety of list styles. Choose from clean link lists, button-enhanced layouts, or alternate list designs to match your site\'s look and feel.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/list-demo/multiple-list-styles.png",
		'features'    => [
			'Link',
			'Link Button',
			'List',
			'List Alt',
			'List Button Alt',
		],
	],
	[
		'title'       => 'Default Click Action',
		'description' => 'Control what happens when users click on a file—set the default action to view, download, or edit. This gives you full flexibility over how files behave across your modules based on your use case.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/list-demo/default-click-action.png",
		'features'    => [ 'View', 'Download', 'Edit' ],
	],
	[
		'title'       => 'Generate Links for Folder Files',
		'description' => 'Automatically generate shareable links for all files inside a selected Google Drive folder. Perfect for creating quick download pages, file listings, or sharing multiple files with a single setup.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/list-demo/generate-links-for-folder-files.png",
		'features'    => [ 'One-click link generation for folder contents', 'Supports view and download actions', 'Works with public and private folders', 'Ideal for documents, resources, or client deliverables', ],
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