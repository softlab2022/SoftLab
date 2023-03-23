<?php

$features = [
	[
		'title'       => 'Optimized your photo gallery',
		'description' => 'The gallery will be generated based on the folders that you select.',
		'image'       => get_template_directory_uri() ."/assets/images/integrate-dropbox/photo-demo/optimized.png",
		'features'    => [ 'Galleries in the Cloud', 'Increase loading performance', 'Inline preview Galleries', 'Automatically Set Thumbnails' ],
	],
	[
		'title'       => 'Awesome looking masonry Grid',
		'description' => 'You see something which looks visually like a masonry layout for our google drive cloud.',
		'image'       => get_template_directory_uri() ."/assets/images/integrate-dropbox/photo-demo/masonry-grid.png",
		'features'    => [ 'Control the Grid size', 'Available horizontal space', 'Automatically place file', 'Auto row height setup ' ],
	],
	[
		'title'       => 'Inline Lightbox file Preview',
		'description' => 'You see something which looks visually like a masonry layout for our google drive cloud.',
		'image'       => get_template_directory_uri() ."/assets/images/integrate-dropbox/photo-demo/lightbox.png",
		'features'    => [ 'Lightbox Preview', 'Auto Folder Thumbnails', 'Responsive View', 'Different Lightbox Skins' ],
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
                        <img class="img-fluid" src="<?php echo $feature['image']; ?>" alt="File Browser">
                    </div>
                </div>
            </div>
		<?php } ?>
    </div>
</section>