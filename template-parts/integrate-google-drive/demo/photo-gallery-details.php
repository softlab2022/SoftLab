<?php

$features = [
	[
		'title'       => 'Optimize Your Gallery',
		'description' => 'Customize and organize your Dropbox file gallery with flexible layout options, then effortlessly showcase it on your website for a seamless visual experience.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/photo-demo/optimized.png",
		'features'    => ['Galleries in the Cloud', 'Increase Loading Performance', 'Inline Preview Galleries', 'Automatically Set Thumbnails'],
	],
	[
		'title'       => 'Awesome Looking Masonry Grid',
		'description' => 'Display your Dropbox cloud files in a visually striking masonry-style grid. This dynamic layout automatically arranges your content for a clean, organized, and modern look.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/photo-demo/masonry-grid.png",
		'features'    => ['Control the Grid Size', 'Available Horizontal Space', 'Automatically Place File', 'Auto Row Height Setup '],
	],
	[
		'title'       => 'Inline Lightbox File Preview',
		'description' => 'Instantly preview your Dropbox files in a sleek lightbox, right within the grid layout—no need to open new tabs or leave the page. Clean, fast, and user-friendly.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/photo-demo/lightbox.png",
		'features'    => ['Lightbox Preview', 'Auto Folder Thumbnails', 'Responsive View', 'Different Lightbox Skins'],
	],
	[
		'title'       => 'Photoproofing',
		'description' => 'Let clients review, select, and submit their favorite photos directly from the gallery. The Gallery Module’s built-in proofing feature simplifies the approval process and eliminates back-and-forth emails.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/photo-demo/photoproofing.png",
		'features'    => ['Clients can select photos for approval', 'One-click submission from the gallery', 'Works seamlessly with Google Drive images', 'Ideal for photographers, designers, and agencies','Integrated with review and tagging workflow'],
	],
];
?>

<section class="demo-details">
	<div class="container">

		<?php
		$i = 0;
		foreach ($features as $feature) {
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
							<?php foreach ($feature['features'] as $item) { ?>
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