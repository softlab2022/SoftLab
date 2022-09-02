<?php

$features = [
	[
		'title'       => 'Easy to use',
		'description' => 'Our plugins are easy to use and you can easily customize them to fit your needs.',
		'image'       => get_template_directory_uri() . '/assets/images/home/features/easy.png',
	],
	[
		'title'       => 'Detailed Documentation',
		'description' => 'We have a detailed online documentation and video tutorials to find out more about what you can do.',
		'image'       => get_template_directory_uri() . '/assets/images/home/features/documentation.png',
	],
	[
		'title'       => 'Top Notch Security',
		'description' => 'Our plugins are built with high security in mind and we are constantly improving them to make them even more secure.',
		'image'       => get_template_directory_uri() . '/assets/images/home/features/security.png',
	],
	[
		'title'       => 'Regular Updates',
		'description' => 'We provide free updates for our products. You can update them anytime you want.',
		'image'       => get_template_directory_uri() . '/assets/images/home/features/updates.png',
	],
	[
		'title'       => '24/7 Support',
		'description' => 'We provide 24/7 support for our products. You can contact us anytime you want.',
		'image'       => get_template_directory_uri() . '/assets/images/home/features/support.png',
	],
	[
		'title'       => 'Money Back Guarantee',
		'description' => 'We provide a 14-day money back guarantee for our products.',
		'image'       => get_template_directory_uri() . '/assets/images/home/features/user-friendly.png',
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
                    <p class="feature-description">We help small businesses around the world with amazing products that
                        solve their business and web problems.</p>
                </div>
            </div>
        </div>

        <div class="row">
			<?php foreach ( $features as $feature ) { ?>
                <div class="col-lg-4 col-md-6 m-auto">
                    <div class="feature-item text-center">
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
        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/vector3.png">
    </div>
</section>