<?php

$products = [
	'integrate-google-drive' => [
		'title'       => 'Integrate Google Drive',
		'description' => 'Integrate Google Drive is a WordPress plugin that allows you to integrate Google Drive with your WordPress site.',
		'image'       => get_template_directory_uri() . '/assets/images/home/products/integrate-google-drive-icon.png',
	],

	'radio-player'           => [
		'title'       => 'Radio Player',
		'description' => 'Radio Player is a WordPress plugin that allows you to create a radio station with a custom player.',
		'image'       => get_template_directory_uri() . '/assets/images/home/products/radio-icon.png',
	],

	// 'wp-radio'               => [
	// 	'title'       => 'WP Radio',
	// 	'description' => 'WP Radio is a WordPress plugin that allows you to create a radio station with a custom player.',
	// 	'image'       => get_template_directory_uri() . '/assets/images/home/products/wp-radio-icon.png',
	// ],

	// 'reader-mode'               => [
	// 	'title'       => 'Reader Mode',
	// 	'description' => 'Reader Mode Plugin adds a distraction-free reading experience for users by stripping away clutter and unnecessary elements from the post content.',
	// 	'image'       => get_template_directory_uri() . '/assets/images/home/products/reader-mode.png',
	// ],

	'dracula-dark-mode'               => [
		'title'       => 'Dracula Dark Mode',
		'description' => 'Experience a user-friendly AI-powered dark mode solution for WordPress. Instantly give your website an elegant look.',
		'image'       => get_template_directory_uri() . '/assets/images/home/products/dracula-icon.png',
	],
	'essential-addons-for-contact-form-7'               => [
		'title'       => 'Essential Addons <span class="e-addons-title">for Contact Form 7</span>',
		'description' => 'Essential Addons for Contact Form 7 enhances Contact Form 7\'s capabilities.',
		'image'       => get_template_directory_uri() . '/assets/images/home/products/essential-addons-for-contact-form-7-icon.png',
	],

];

?>

<section id="products">
    <div class="container">

        <div class="row">
            <div class="col-lg-5 m-auto">
                <div class="products-head autoShow text-center">
                    <h1>Our Solutions</h1>
                    <p>Empower your business with our next level solutions.</p>

                    <div class="products-vector">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/home/products/vector1.png">
                    </div>
                    <div class="products-vector2">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/home/products/vector1.png">
                    </div>
                </div>
            </div>
        </div>

        <div class="row">

			<?php foreach ( $products as $key => $product ) { ?>
                <div class="col-lg-4 col-md-6">
                    <a href="/<?php echo $key; ?>" class="products-item autoShow text-center product-<?php echo $key; ?>">

                        <img class="products-icon img-fluid" src="<?php echo $product['image']; ?>" alt="WP Radio">

                        <h5 class="product-title"><?php echo $product['title']; ?></h5>
                        <p class="product-description"><?php echo $product['description']; ?></p>

                        <div class="products-butt">
                            <span>Explore</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </a>
                </div>
			<?php } ?>

        </div>
    </div>
</section>