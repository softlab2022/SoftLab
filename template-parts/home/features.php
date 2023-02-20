<?php

$features = [
	'easy-to-customize'     => [
		'title'       => 'Easy to Customize',
		'description' => 'Change the design through a range of options in t he WordPress Customizer. No coding knowledge necessary!',
		'image'       => get_template_directory_uri() . '/assets/images/home/features/easy.png',
	],
	'details-documentation' => [
		'title'       => 'Details Documentation',
		'description' => 'Check out our detailed online documentation and video tutorials to find out more about what you can do.',
		'image'       => get_template_directory_uri() . '/assets/images/home/features/documentation.png',
	],
	'business'  => [
		'title'       => 'Business Growth',
		'description' => 'Expert client-handling to ensure proper buainess plan execution',
		'image'       => get_template_directory_uri() . '/assets/images/home/features/business.png',
	],
	'highly-rated-support'  => [
		'title'       => 'Highly-Rated Support',
		'description' => 'We have dedicated support team to provide you fast, friendly & top-notch customer support.',
		'image'       => get_template_directory_uri() . '/assets/images/home/features/support.png',
	],
	'regular-updates'       => [
		'title'       => 'Regular Updates',
		'description' => 'Plugins and themes require regular maintenance. Plugin and theme authors routinely release updates for bug fixes',
		'image'       => get_template_directory_uri() . '/assets/images/home/features/updates.png',
	],

	'top-nothch-security' => [
		'title'       => 'Top Notch Security',
		'description' => 'Change the design through a range of options in the WordPress Customizer. No coding knowledge necessary!',
		'image'       => get_template_directory_uri() . '/assets/images/home/features/security.png',
	],

];

?>

<section id="feature">
    <div class="container">

        <div class="feature-vector2">
            <img class="img-fluid"
                 src="<?php echo get_template_directory_uri(); ?>/assets/images/home/features/vector1.png">
        </div>

        <div class="feature-vector">
            <img class="img-fluid"
                 src="<?php echo get_template_directory_uri(); ?>/assets/images/home/features/vector2.png">
        </div>

        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="feature-head text-center">
                    <h2 class="feature-title">What's so special about SofLab?</h2>
                    <p class="feature-description">We help growing and solving small businesses around the world with our unique products and solutions</p>
                </div>
            </div>
        </div>

        <div class="row">
			<?php foreach ( $features as $key => $feature ) { ?>
                <div class="col-lg-4 col-md-6 m-auto">
                    <div class="feature-item text-center feature-<?php echo $key; ?>">
                        <div class="feat-icon">
                            <img class="img-fluid" src="<?php echo $feature['image']; ?>"
                                 alt="<?php echo $feature['title']; ?>">
                        </div>
                        <div class="feat-content">
                            <h3><?php echo $feature['title']; ?></h3>
                            <p><?php echo $feature['description']; ?></p>
                        </div>
                    </div>
                </div>
			<?php } ?>
        </div>

    </div>

    <div class="feature-vector1">
        <img class="img-fluid"
             src="<?php echo get_template_directory_uri(); ?>/assets/images/home/features/vector3.png">
    </div>
</section>