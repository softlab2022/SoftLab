<?php
$features = [
	[
		'title'       => 'Easy setup',
		'description' => 'You don’t need to create any custom Google app. You can sign-in to your Google account directly using this plugin.',
		'video'		  => '',
		'pro'         => true,
	],
	[
		'title'       => 'Admin File Browser',
		'description' => 'Display & manage your cloud files via a File Browser. The file browser can have a grid thumbnail and list view and can have a file uploader.',
		'video'		  => '',
		'pro'         => true,

	],

	[
		'title'       => 'Shortcode Builder',
		'description' => 'You can create various types of module (File browser, Photo Gallery etc.) with different configurations with the shortcode builder and can use them anywhere using the shortcode.',
		'video' => '<iframe width="100%" height="315" src="https://www.youtube.com/embed/8M84lcvfCiI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
		'pro'         => true,

	],
	[
		'title'       => 'Shortcode Builder',
		'description' => 'You can create various types of module (File browser, Photo Gallery etc.) with different configurations with the shortcode builder and can use them anywhere using the shortcode.',
		'video' => '<iframe width="100%" height="315" src="https://www.youtube.com/embed/8M84lcvfCiI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
		'pro'         => false,

	],
];
?>

<section id="features">
	<div class="container">

		<div class="row">
			<div class="col-lg-5 m-auto">
				<div class="section-header text-center">
					<h2>Choose the best plan that fits your needs</h2>
					<p>we’ve created several packages with different features in them. These are priced according to the
						value they deliver.</p>
				</div>
			</div>
		</div>

		<div class="row ">
			<div class="col-lg-8 m-auto">

				<div class="features-header justify-content-between">
					<h5>Features</h5>
					<span class="feature-type type-free">FREE</span>
					<span class="feature-type type-pro">PRO</span>
				</div>

				<div class="accordion" id="features-accordion">
					<?php foreach ($features as $key => $feature) { ?>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading-<?php echo $key; ?>">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-<?php echo $key; ?>" aria-expanded="false" aria-controls="collapse-<?php echo $key; ?>">

									<div class="title">
										<i class="fa-solid fa-chevron-down"></i>
										<span class="feature-title"><?php echo $feature['title']; ?></span>
									</div>

									<i class="fas <?php echo !empty($feature['pro']) ? 'fa-check-square' : 'fa-times-square'; ?>"></i>
									<i class="fas fa-check-square"></i>
								</button>
							</h2>

							<div id="collapse-<?php echo $key; ?>" class="accordion-collapse collapse" aria-labelledby="heading-<?php echo $key; ?>" data-bs-parent="#features-accordion">
								<div class="accordion-body">
									<div class="row">
										<div class="col-lg-12">
											<div class="description">
												<?php echo $feature['description']; ?>
											</div>
											<div class="video">
												<?php echo $feature['video']; ?>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					<?php } ?>

				</div>
			</div>
		</div>

	</div>

</section>