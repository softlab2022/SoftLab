<?php

$addons = [
	'wp-radio-user-frontend' => [
		'title'       => 'WP Radio User Frontend',
		'description' => 'Let engage your visitors to your website by adding powerful features for the users such as adding a login/ registration form, review submission, favorite stations, station submission, report submission etc.',
	],
	'wp-radio-proxy-player'  => [
		'title'       => 'WP Radio Proxy Player',
		'description' => 'Using the Proxy Player addon most of the HTTP radio stream links can be played even your site is loaded with HTTPS.',
	],
	'wp-radio-ads-player'    => [
		'title'       => 'WP Radio Ads Player',
		'description' => 'Monetize your radio directory website by playing custom mic-drops, stringers and audio advertisements. You can set custom audio ads for your radio stations by filtering specific radio stations and countries.',
	],
	'wp-radio-image-import'  => [
		'title'       => 'WP Radio Image Import',
		'description' => 'Using the WP Radio Image Importer addon, you can import all the imported station\'s images to your own server from the 3rd party server.',
	],
];

?>

<section class="wp-radio-addons">
    <div class="container">

        <div class="row">
            <div class="col-lg-5 col-md-8 m-auto">
                <div class="addons-head text-center">
                    <h2>Addons for WP Radio</h2>
                    <p>WP Radio has powerful extensions to enrich your radio stations directory website.</p>
                </div>
            </div>
        </div>

        <div class="row">

			<?php foreach ( $addons as $key => $addon ) { ?>
                <div class="col-lg-3 col-md-6 m-auto">
                    <a href="/<?php echo $key; ?>">
                        <div class="addon-item text-center addon-<?php echo $key; ?>">
                            <img class="img-fluid"
                                 src="<?php echo get_template_directory_uri(); ?>/assets/images/wp-radio/home/addons/<?php echo $key; ?>.png"
                                 alt="<?php echo $addon['title']; ?>">
                            <div class="addon-content">
                                <span class="addon-title"><?php echo $addon['title']; ?></span>
                                <p><?php echo $addon['description']; ?></p>
                                <span class="addon-view-details">View Details <i class="fa-solid fa-arrow-right"></i></span>
                            </div>
                        </div>
                    </a>
                </div>
			<?php } ?>

        </div>

    </div>
</section>