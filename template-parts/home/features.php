<?php

$features = [
	'easy-to-customize'     => [
		'title'       => __('Easy to Customize', 'softlab'),
		'description' => __('Change the design through a range of options in t he WordPress Customizer. No coding knowledge necessary!', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/home/features/easy.png',
	],
	'details-documentation' => [
		'title'       => __('Detailed Documentation', 'softlab'),
		'description' => __('Check out our detailed online documentation and video tutorials to find out more about what you can do.', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/home/features/documentation.png',
	],
	'business'  => [
		'title'       => __('Business Growth', 'softlab'),
		'description' => __('Expert client-handling to ensure proper buainess plan execution', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/home/features/business.png',
	],
	'highly-rated-support'  => [
		'title'       => __('Highly-Rated Support', 'softlab'),
		'description' => __('We have dedicated support team to provide you fast, friendly & top-notch customer support.', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/home/features/support.png',
	],
	'regular-updates'       => [
		'title'       => __('Regular Updates', 'softlab'),
		'description' => __('Plugins and themes require regular maintenance. Plugin and theme authors routinely release updates for bug fixes', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/home/features/updates.png',
	],

	'top-nothch-security' => [
		'title'       => __('Top Notch Security', 'softlab'),
		'description' => __('Change the design through a range of options in the WordPress Customizer. No coding knowledge necessary!', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/home/features/security.png',
	],

];

?>

<section id="feature">
    <div class="container">

        <!-- <div class="feature-vector2">
            <img class="img-fluid"
                 src="<?php //echo get_template_directory_uri(); ?>/assets/images/home/features/vector1.png">
        </div>

        <div class="feature-vector">
            <img class="img-fluid"
                 src="<?php //echo get_template_directory_uri(); ?>/assets/images/home/features/vector2.png">
        </div> -->

        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="feature-head  text-center">
                    <h4 class="sub-hedding-title"><?php _e('Why Choose SofLab?', 'softlab'); ?></h4>
                    <p class="sub-hedding-description"><?php _e('We help growing and solving small businesses around the world with our unique products and solutions', 'softlab'); ?></p>
                </div>
            </div>
        </div>

        <div class="row">
			<?php foreach ( $features as $key => $feature ) { ?>
                <div class="col-lg-4 col-md-6 m-auto">
                    <div class="feature-item  text-center feature-<?php echo $key; ?>">
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

    <!-- <div class="feature-vector1">
        <img class="img-fluid"
             src="<?php //echo get_template_directory_uri(); ?>/assets/images/home/features/vector3.png">
    </div> -->
</section>