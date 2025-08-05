<?php

$features = [
	[
		'title'       => 'Allow Users to Review & Submit',
		'description' => 'Let users select and submit specific files for review using a streamlined interface. Whether it’s for approvals, feedback, or final selections, this feature enables a smooth, user-friendly submission process from the front end.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/review-approve-demo/allow-users-review-submit.png",
		'features'    => ['Galleries in the Cloud', 'Increase loading performance', 'Inline preview Galleries ', 'Automatically Set Thumbnails',]
	],
	[
		'title'       => 'Admins can Review Selection from Admin Dashboard',
		'description' => 'Easily manage and review user-submitted file selections directly from the WordPress admin dashboard. View submissions, approve or reject them, and streamline your review workflow—all in one place.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/review-approve-demo/review-selection.png",
		'features'    => [
			'Control the Grid size',
			'Available horizontal space',
			'Automatically place file',
			'Auto row height setup',
		],
	],
	[
		'title'       => 'Multiple Tags Management',
		'description' => 'Easily organize and track file statuses using custom tags like Approved, Rejected, Pending, and Needs Review. Tags help streamline collaboration and keep everyone on the same page throughout the review process.',
		'image'       => get_template_directory_uri() . "/assets/images/google-drive/review-approve-demo/multiple-tags-management.png",
		'features'    => ['Tag files as Approved , Rejected , Pending , etc.', 'Customize and filter by tags', 'Improve file tracking and workflow clarity', 'Visible to both users and admins',],
	]
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