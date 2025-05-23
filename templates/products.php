<?php

/**
 * Template Name: Products Page
 *
 */

get_header();


$products = [

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
				'title' => 'Gallery',
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
			// [
			// 	'title' => 'HTTP Stream Player',
			// 	'image' => get_template_directory_uri() . '/assets/images/products/radio-player/player-feat-icon-1.png',
			// ],
			[
				'title' => 'Play Statistics',
				'image' => get_template_directory_uri() . '/assets/images/products//dracula/admin-dash.png',
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

	'dracula-dark-mode' => [
		'name'        => 'Dracula Dark Mode',
		'title'       => 'The Revolutionary <span class="title-drak">Dark Mode</span> Plugin For WordPress',
		'description' => 'Dracula Dark Mode is a highly customizable and easy-to-use dark mode plugin for WordPress. It offers an elegant dark mode version of your website',
		'image'       => get_template_directory_uri() . '/assets/images/products//dracula/frontend-dark-mode.png',
		'logo'        => get_template_directory_uri() . '/assets/images/products//dracula/dracula-icon.png',
		'features'    => [
			[
				'title' => 'Frontend Dark Mode',
				'image' => get_template_directory_uri() . '/assets/images/products//dracula/frontend.png',
			],

			[
				'title' => 'Dark Mode Live Edit Mode',
				'image' => get_template_directory_uri() . '/assets/images/products//dracula/live-edit.png',
			],

			[
				'title' => 'Page Wise Dark Mode',
				'image' => get_template_directory_uri() . '/assets/images/products//dracula/page-wish.png',
			],


			[
				'title' => 'Backend Dark Mode',
				'image' => get_template_directory_uri() . '/assets/images/products//dracula/backend.png',
			],

			[
				'title' => 'Multiple switches',
				'image' => get_template_directory_uri() . '/assets/images/products//dracula/multiple.png',
			],

			[
				'title' => 'Admin Dashboard Dark Mode',
				'image' => get_template_directory_uri() . '/assets/images/products//dracula/admin-dash.png',
			],

			[
				'title' => 'OS-based color mode',
				'image' => get_template_directory_uri() . '/assets/images/products//dracula/os-based.png',
			],

			[
				'title' => 'Time-based dark mode',
				'image' => get_template_directory_uri() . '/assets/images/products//dracula/time-based.png',
			],
		]
	],

	// 'wp-radio'               => [
	// 	'name'        => '<span>WP Radio</span>',
	// 	'title'       => '<span>Worldwide</span> Online Radio Stations Directory for WordPress',
	// 	'description' => 'WP Radio is a worldwide online radio stations directory plugin for WordPress. You can easily create a full-featured online radio directory website.',
	// 	'image'       => get_template_directory_uri() . '/assets/images/products/wp-radio/wp-radio-illustration.png',
	// 	'logo'        => get_template_directory_uri() . '/assets/images/products/wp-radio/wp-radio.png',
	// 	'features'    => [
	// 		[
	// 			'title' => 'Radio Stations Listing',
	// 			'image' => get_template_directory_uri() . '/assets/images/products/wp-radio/radio-feat-icon1.png',
	// 		],

	// 		[
	// 			'title' => 'Radio Stations Importer',
	// 			'image' => get_template_directory_uri() . '/assets/images/products/wp-radio/radio-feat-icon2.png',
	// 		],

	// 		[
	// 			'title' => 'Add Unlimited Radio Stations',
	// 			'image' => get_template_directory_uri() . '/assets/images/products/wp-radio/radio-feat-icon3.png',
	// 		],

	// 		[
	// 			'title' => 'Custom Sticky Player',
	// 			'image' => get_template_directory_uri() . '/assets/images/products/wp-radio/radio-feat-icon4.png',
	// 		],

	// 		[
	// 			'title' => 'Easy Stations Search',
	// 			'image' => get_template_directory_uri() . '/assets/images/products/wp-radio/radio-feat-icon5.png',
	// 		],

	// 		[
	// 			'title' => 'City Region List',
	// 			'image' => get_template_directory_uri() . '/assets/images/products/wp-radio/radio-feat-icon6.png',
	// 		],

	// 		[
	// 			'title' => 'Current Song Title',
	// 			'image' => get_template_directory_uri() . '/assets/images/products/wp-radio/radio-feat-icon7.png',
	// 		],

	// 		[
	// 			'title' => 'Mobile Media Notification',
	// 			'image' => get_template_directory_uri() . '/assets/images/products/wp-radio/radio-feat-icon8.png',
	// 		],

	// 	]
	// ],

	// 'reader-mode' => [
	// 	'name'        => 'Reader Mode',
	// 	'title'       => 'Distraction-Free Content Reader',
	// 	'description' => 'Reader Mode Plugin adds a distraction-free reading experience for users by stripping away clutter and unnecessary elements from the post content.',
	// 	'image'       => get_template_directory_uri() . '/assets/images/products//reader-mode/reader-mode.png',
	// 	'logo'        => get_template_directory_uri() . '/assets/images/products//reader-mode/logo.png',
	// 	'features'    => [
	// 		[
	// 			'title' => 'Reader Mode layout',
	// 			'image' => get_template_directory_uri() . '/assets/images/products//reader-mode/layout.png',
	// 		],

	// 		[
	// 			'title' => 'Reading Time',
	// 			'image' => get_template_directory_uri() . '/assets/images/products//reader-mode/time.png',
	// 		],

	// 		[
	// 			'title' => 'Translation',
	// 			'image' => get_template_directory_uri() . '/assets/images/products//reader-mode/transiation.png',
	// 		],


	// 		[
	// 			'title' => 'Text to Speech',
	// 			'image' => get_template_directory_uri() . '/assets/images/products//reader-mode/speech.png',
	// 		],

	// 		[
	// 			'title' => 'Multiple Buttons & Styles',
	// 			'image' => get_template_directory_uri() . '/assets/images/products//reader-mode/multiple.png',
	// 		],

	// 		[
	// 			'title' => 'Multiple Display Positions',
	// 			'image' => get_template_directory_uri() . '/assets/images/products//reader-mode/display.png',
	// 		],

	// 		[
	// 			'title' => 'Light/ Dark Mode Theme',
	// 			'image' => get_template_directory_uri() . '/assets/images/products//reader-mode/light-dark.png',
	// 		],

	// 		[
	// 			'title' => 'Reading Progress Bar',
	// 			'image' => get_template_directory_uri() . '/assets/images/products//reader-mode/reading.png',
	// 		],
	// 	]
	// ],



	'essential-addons-for-contact-form-7' => [
		'name'        => 'Essential Addons </br> <span class="cf7" >for Contact Form 7</span>',
		'title'       => 'All-in-one Enhancement Suite for <span class="title-cf7" > Contact Form 7</span>',
		'description' => 'Essential Addons for Contact Form 7 is an advanced plugin that dramatically enhances the capabilities of Contact Form 7.</br></br>

		Featuring over 20 versatile fields and more than 15 useful features, Essential Addons for Contact Form 7 is designed to expand limitations of Contact Form 7.',
		'image'       => get_template_directory_uri() . '/assets/images/products//cf7-extended/essential-addons-for-contact-form-7-illus.png',
		'logo'        => get_template_directory_uri() . '/assets/images/products//cf7-extended/essential-addons-for-contact-form-7.png',
		'features'    => [
			[
				'title' => 'Conditional Fields',
				'image' => get_template_directory_uri() . '/assets/images/products//cf7-extended/conditional-fields.png',
			],

			[
				'title' => 'Drag & Drop File Upload',
				'image' => get_template_directory_uri() . '/assets/images/products//cf7-extended/drag-drop-file-upload.png',
			],

			[
				'title' => 'Multistep Form',
				'image' => get_template_directory_uri() . '/assets/images/products//cf7-extended/multistep-form.png',
			],


			[
				'title' => 'Form Styler',
				'image' => get_template_directory_uri() . '/assets/images/products//cf7-extended/form-styler.png',
			],

			[
				'title' => 'Multi-Column Layout',
				'image' => get_template_directory_uri() . '/assets/images/products//cf7-extended/multi-column-layout.png',
			],

			[
				'title' => 'Database Entries',
				'image' => get_template_directory_uri() . '/assets/images/products//cf7-extended/database-entries.png',
			],

			[
				'title' => 'PDF Generator',
				'image' => get_template_directory_uri() . '/assets/images/products//cf7-extended/pdf-generator.png',
			],

			[
				'title' => 'Repeater Field',
				'image' => get_template_directory_uri() . '/assets/images/products//cf7-extended/repeater-field.png',
			],
		]
	],

	'soft-accordion' => [
		'name'        => 'Soft Accordion',
		'title'       => 'Interactive Features & Functionalities',
		'description' => 'Soft Accordion offers interactive features to transform basic FAQs into modern, stylish, and user-friendly sections. With its collapsible design, this plugin ensures a responsive FAQ experience for your visitors on any device. Perfect for enhancing your WordPress site’s FAQ section with ease.',
		'image'       => get_template_directory_uri() . '/assets/images/products//soft-accordion/soft-accordion-illus.png',
		'logo'        => get_template_directory_uri() . '/assets/images/products//soft-accordion/soft-accordion.png',
		'features'    => [
			[
				'title' => 'Classic Editor (WYSIWYG) Support',
				'image' => get_template_directory_uri() . '/assets/images/products//soft-accordion/classic-editor.png',
			],

			[
				'title' => 'Drag & Drop Sorting',
				'image' => get_template_directory_uri() . '/assets/images/products//soft-accordion/drag-drop.png',
			],
			[
				'title' => 'WooCommerce Product FAQs',
				'image' => get_template_directory_uri() . '/assets/images/products//soft-accordion/WooCommerce.png',
			],
			[
				'title' => '16+ Premium Themes',
				'image' => get_template_directory_uri() . '/assets/images/products//soft-accordion/premium-themes.png',
			],
			[
				'title' => 'FAQ Schema Support',
				'image' => get_template_directory_uri() . '/assets/images/products//soft-accordion/schema-support.png',
			],
			[
				'title' => 'Ajax Pagination',
				'image' => get_template_directory_uri() . '/assets/images/products//soft-accordion/ajax-pagination.png',
			],
			[
				'title' => '50+ Animation Effects',
				'image' => get_template_directory_uri() . '/assets/images/products//soft-accordion/animation-effects.png',
			],
			[
				'title' => 'Google Fonts',
				'image' => get_template_directory_uri() . '/assets/images/products//soft-accordion/google-fonts.png',
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
					<h2>Empower Your Business with Our Next Level Solutions</h2>
					<p>Clean, Simple & Affordable Premium WordPress Plugins for You to Become the Next Champion!</p>
				</div>
			</div>
		</div>
	</div>
</section>

<?php foreach ($products as $key => $product) { ?>
	<section class="product-item product-<?php echo $key; ?>">
		<div class="container">

			<div class="row">

				<div class="col-md-6 m-auto product-image">

					<img class="img-fluid" src="<?php echo $product['image']; ?>"
						alt="<?php echo esc_html($product['name']); ?>" />
				</div>

				<div class="col-md-6 product-content">

					<div class="product-name product-logo-<?php echo $key ?> d-flex  align-items-center">
						<img class="img-fluid" src="<?php echo $product['logo']; ?>" alt="Product Logo">
						<h3><?php echo $product['name']; ?></h3>
					</div>

					<h4 class="product-subtitle"><?php echo $product['title']; ?></h4>
					<?php if (wp_is_mobile()) { ?>
						<div class="product-images">
							<img class="img-fluid" src="<?php echo $product['image']; ?>"
								alt="<?php echo esc_html($product['name']); ?>" />
						</div>
					<?php } ?>

					<p class="product-description"><?php echo $product['description']; ?></p>

					<div class="row features-wrap">

						<?php foreach ($product['features'] as $feature) { ?>
							<div class="col-lg-3 col-6 m-auto">
								<div class="feature-item text-center <?php echo sanitize_key($feature['title']); ?>">
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
