<?php
/**
 * Template Name: Products Page
 *
 */

get_header();


$products = [
	'reader-mode' => [
		'name'        => 'Reader Mode',
		'title'       => 'Adds a distraction free reading layout for a better readability for the users',
		'description' => 'Reader Mode adds a distraction free reading layout for a better readability for the users on every post/ article by strips away clutter and unnecessary elements from the post/ article.',
		'image'       => get_template_directory_uri() . '/assets/images/products//reader-mode/reader-mode.png',
		'logo'        => get_template_directory_uri() . '/assets/images/products//reader-mode/logo.png',
		'features'    => [
			[
				'title' => 'Reader Mode layout',
				'image' => get_template_directory_uri() . '/assets/images/products//reader-mode/layout.png',
			],

			[
				'title' => 'Reading Time',
				'image' => get_template_directory_uri() . '/assets/images/products//reader-mode/time.png',
			],

			[
				'title' => 'Translation',
				'image' => get_template_directory_uri() . '/assets/images/products//reader-mode/transiation.png',
			],


			[
				'title' => 'Text to Speech',
				'image' => get_template_directory_uri() . '/assets/images/products//reader-mode/speech.png',
			],

			[
				'title' => 'Multiple Buttons & Styles',
				'image' => get_template_directory_uri() . '/assets/images/products//reader-mode/multiple.png',
			],

			[
				'title' => 'Multiple Display Positions',
				'image' => get_template_directory_uri() . '/assets/images/products//reader-mode/display.png',
			],

			[
				'title' => 'Light/ Dark Mode Theme',
				'image' => get_template_directory_uri() . '/assets/images/products//reader-mode/light-dark.png',
			],

			[
				'title' => 'Reading Progress Bar',
				'image' => get_template_directory_uri() . '/assets/images/products//reader-mode/reading.png',
			],
		]
	],
	'integrate-google-drive' => [
		'name'        => '<span>Integrate</span> Google Drive',
		'title'       => 'Complete <span>Google Drive</span> Cloud Solution For WordPress',
		'description' => 'Integrate Google Drive – is the best and easy-to-use Google Drive cloud solution plugin for WordPress to integrate your Google Drive documents and media directly into your WordPress Website.',
		'image'       => get_template_directory_uri() . '/assets/images/products//google-drive/google-drive-1.png',
		'logo'        => get_template_directory_uri() . '/assets/images/products//google-drive/integrate-google-drive.png',
		'features'    => [
			[
				'title' => 'File Browser',
				'image' => get_template_directory_uri() . '/assets/images/products//google-drive/drive-feat-icon1.png',
			],

			[
				'title' => 'Photo Gallery',
				'image' => get_template_directory_uri() . '/assets/images/products//google-drive/drive-feat-icon2.png',
			],

			[
				'title' => 'File uploader',
				'image' => get_template_directory_uri() . '/assets/images/products//google-drive/drive-feat-icon3.png',
			],

			[
				'title' => 'Media Player',
				'image' => get_template_directory_uri() . '/assets/images/products//google-drive/drive-feat-icon4.png',
			],

			[
				'title' => 'File Search',
				'image' => get_template_directory_uri() . '/assets/images/products//google-drive/drive-feat-icon5.png',
			],

			[
				'title' => 'Shortcode Builder',
				'image' => get_template_directory_uri() . '/assets/images/products//google-drive/drive-feat-icon6.png',
			],

			[
				'title' => 'Multiple Google Accounts',
				'image' => get_template_directory_uri() . '/assets/images/products//google-drive/drive-feat-icon7.png',
			],

			[
				'title' => 'File View Links',
				'image' => get_template_directory_uri() . '/assets/images/products//google-drive/drive-feat-icon8.png',
			],

		]
	],
	'radio-player'           => [
		'name'        => '<span>Radio Player</span>',
		'title'       => '<span>Live</span> Shoutcast, Icecast and Audio Stream Player for WordPress',
		'description' => 'A simple, easy-to-use, user-friendly and fully customizable web radio player for WordPress. You can play any live mp3, iceCast and Shoutcast stream in your WordPress website using shortcode, gutenberg block, elementor widget, sidebar widget, full-width sticky & popup player.',
		'image'       => get_template_directory_uri() . '/assets/images/products/radio-player/radio-player-illustration.png',
		'logo'        => get_template_directory_uri() . '/assets/images/products/radio-player/radio-player.png',
		'features'    => [
			[
				'title' => 'HTTP Stream Player',
				'image' => get_template_directory_uri() . '/assets/images/products/radio-player/player-feat-icon-1.png',
			],

			[
				'title' => 'Full-width Sticky Player',
				'image' => get_template_directory_uri() . '/assets/images/products/radio-player/player-feat-icon-2.png',
			],

			[
				'title' => 'Add Unlimited Radio Stations',
				'image' => get_template_directory_uri() . '/assets/images/products/radio-player/player-feat-icon-3.png',
			],

			[
				'title' => 'Specific Pages Sticky Player',
				'image' => get_template_directory_uri() . '/assets/images/products/radio-player/player-feat-icon-4.png',
			],

			[
				'title' => 'Multiple Player Skins',
				'image' => get_template_directory_uri() . '/assets/images/products/radio-player/player-feat-icon-5.png',
			],

			[
				'title' => 'Stations Playlist',
				'image' => get_template_directory_uri() . '/assets/images/products/radio-player/player-feat-icon-6.png',
			],

			[
				'title' => 'Play Statistics',
				'image' => get_template_directory_uri() . '/assets/images/products/radio-player/player-feat-icon-7.png',
			],

			[
				'title' => 'Popup window Player',
				'image' => get_template_directory_uri() . '/assets/images/products/radio-player/player-feat-icon-8.png',
			],

		]
	],
	'wp-radio'               => [
		'name'        => '<span>WP Radio</span>',
		'title'       => '<span>Worldwide</span> Online Radio Stations Directory for WordPress',
		'description' => 'WP Radio is a worldwide online radio stations directory plugin for WordPress. You can easily create a full-featured online radio directory website.',
		'image'       => get_template_directory_uri() . '/assets/images/products/wp-radio/wp-radio-illustration.png',
		'logo'        => get_template_directory_uri() . '/assets/images/products/wp-radio/wp-radio.png',
		'features'    => [
			[
				'title' => 'Radio Stations Listing',
				'image' => get_template_directory_uri() . '/assets/images/products/wp-radio/radio-feat-icon1.png',
			],

			[
				'title' => 'Radio Stations Importer',
				'image' => get_template_directory_uri() . '/assets/images/products/wp-radio/radio-feat-icon2.png',
			],

			[
				'title' => 'Add Unlimited Radio Stations',
				'image' => get_template_directory_uri() . '/assets/images/products/wp-radio/radio-feat-icon3.png',
			],

			[
				'title' => 'Custom Sticky Player',
				'image' => get_template_directory_uri() . '/assets/images/products/wp-radio/radio-feat-icon4.png',
			],

			[
				'title' => 'Easy Stations Search',
				'image' => get_template_directory_uri() . '/assets/images/products/wp-radio/radio-feat-icon5.png',
			],

			[
				'title' => 'City Region List',
				'image' => get_template_directory_uri() . '/assets/images/products/wp-radio/radio-feat-icon6.png',
			],

			[
				'title' => 'Current Song Title',
				'image' => get_template_directory_uri() . '/assets/images/products/wp-radio/radio-feat-icon7.png',
			],

			[
				'title' => 'Mobile Media Notification',
				'image' => get_template_directory_uri() . '/assets/images/products/wp-radio/radio-feat-icon8.png',
			],

		]
	],
];

?>
    <section class="title-header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 m-auto">
                    <div class="header-content text-center">
                        <h2>Empower your business with our next level solutions.</h2>
                        <p>Clean, Simple & Affordable Premium WordPress Plugins for You to Become the Next Champion!.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php foreach ( $products as $key => $product ) { ?>
    <section class="product-item product-<?php echo $key; ?>">
        <div class="container">

            <div class="row">

                <div class="col-md-6 m-auto product-image">
                    <img class="img-fluid" src="<?php echo $product['image']; ?>"
                         alt="<?php echo esc_html( $product['name'] ); ?>"/>
                </div>

                <div class="col-md-6 product-content">

                    <div class="product-name d-flex  align-items-center">
                        <img class="img-fluid" src="<?php echo $product['logo']; ?>" alt="Product Logo">
                        <h3><?php echo $product['name']; ?></h3>
                    </div>

                    <h4 class="product-subtitle"><?php echo $product['title']; ?></h4>
                    <p class="product-description"><?php echo $product['description']; ?></p>

                    <div class="row features-wrap">

						<?php foreach ( $product['features'] as $feature ) { ?>
                            <div class="col-lg-3 col-6 m-auto">
                                <div class="feature-item text-center <?php echo sanitize_key( $feature['title'] ); ?>">
                                    <img class="img-fluid" src="<?php echo $feature['image']; ?>"
                                         alt="<?php echo $feature['title']; ?>">
                                    <span class="feature-title"><?php echo $feature['title']; ?></span>
                                </div>
                            </div>
						<?php } ?>

                    </div>

                    <a href="/<?php echo $key; ?>" class="btn product-explore-btn btn-primary">
                        <span>Explore more</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>

                </div>

            </div>

        </div>
    </section>
<?php } ?>

<?php
get_footer();