<?php
$features = [
	[
		'title'       => 'Easy setup',
		'description' => '',
		'pro'         => true,
	],
	[
		'title'       => 'File Browser',
		'description' => '',
		'pro'         => true,

	],
	[
		'title'       => 'Embed Document',
		'description' => '',
		'pro'         => true,

	],
	[
		'title'       => 'Private Folders',
		'description' => '',
		'pro'         => true,

	],
	[
		'title'       => 'Media Importer',
		'description' => '',
		'pro'         => true,

	],
	[
		'title'       => 'File Uploader',
		'description' => '',
		'pro'         => true,

	],
	[
		'title'       => 'Photo Gallery',
		'description' => '',
		'pro'         => true,

	],
	[
		'title'       => 'Audio & Video Player',
		'description' => '',
		'pro'         => true,

	],
	[
		'title'       => 'File Search',
		'description' => '',
		'pro'         => true,

	],
	[
		'title'       => 'File View Links',
		'description' => '',
		'pro'         => true,

	],
	[
		'title'       => 'File Download Links',
		'description' => '',
		'pro'         => true,

	],
	[
		'title'       => 'Shortcode Builder',
		'description' => '',
		'pro'         => false,

	],
	[
		'title'       => 'Multiple Accounts',
		'description' => '',
		'pro'         => false,

	],
	[
		'title'       => 'Use Own Google App',
		'description' => '',
		'pro'         => false,

	],
	[
		'title'       => 'Statistics',
		'description' => '',
		'pro'         => false,

	],
	[
		'title'       => 'Email Notification',
		'description' => '',
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
					<?php foreach ( $features as $key => $feature ) { ?>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading-<?php echo $key; ?>">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse-<?php echo $key; ?>" aria-expanded="false"
                                        aria-controls="collapse-<?php echo $key; ?>">
                                    <span class="feature-title"><?php echo $feature['title']; ?></span>

                                    <i class="fas <?php echo !empty($feature['pro']) ? 'fa-check-square' : 'fa-times-square'; ?>"></i>
                                    <i class="fas fa-check-square"></i>
                                </button>
                            </h2>

                            <div id="collapse-<?php echo $key; ?>" class="accordion-collapse collapse"
                                 aria-labelledby="heading-<?php echo $key; ?>"
                                 data-bs-parent="#features-accordion">
                                <div class="accordion-body">
									<?php echo $feature['description']; ?>
                                </div>
                            </div>
                        </div>
					<?php } ?>

                </div>
            </div>
        </div>

    </div>

</section>