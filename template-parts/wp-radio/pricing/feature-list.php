<?php
$features = [
	[
		'title'       => 'Radio Stations Listing',
		'description' => 'All the radio stations can be listed on any page/post using the [wp_radio_listing] shortcode.',
		'pro'         => true,
	],
	[
		'title'       => 'Radio Stations Importer',
		'description' => ' WP Radio included 52000+ online radio stations from around 190+ countries all over the world. You can import these radio stations easily from the Import Stations page. In the free version, you can only import the stations from the first 30 countries of the available country list.',
		'pro'         => true,

	],
	[
		'title'       => 'Add Unlimited Radio Stations',
		'description' => 'You can add unlimited radio stations with radio station logo, genres, description, contacts, and other additional information.',
		'pro'         => true,

	],
	[
		'title'       => 'Sticky Player',
		'description' => 'WP Radio has a full-width sticky player that will be displayed on the bottom of every page of your website.',
		'pro'         => true,

	],
	[
		'title'       => 'Stations Search',
		'description' => 'WP Radio has advanced stations search & filtering options. Users can easily search & filter the radio stations that they looking for.',
		'pro'         => true,

	],
	[
		'title'       => 'State/ City Region List',
		'description' => 'On the station country archive page, all the available states and cities of the country will be listed. Users can easily browse the stations by filtering the state and city regions.',
		'pro'         => true,

	],
	[
		'title'       => 'Current Song Title',
		'description' => 'The radio station player can display the currently playing song title.',
		'pro'         => true,

	],
	[
		'title'       => 'Mobile Media Notification',
		'description' => 'While playing a radio station, users can see currently playing station information and can play/ pause the radio player from the mobile notification bar.',
		'pro'         => true,

	],
	[
		'title'       => 'm3u8 Extension Supported',
		'description' => 'WP Radio can play the .m3u8 stream links.',
		'pro'         => true,

	],
	[
		'title'       => 'Gutenberg Blocks',
		'description' => 'WP Radio provides 3 Gutenberg blocks: Radio Player, Radio Station, and Country List.',
		'pro'         => true,

	],
	[
		'title'       => 'Elementor Widgets',
		'description' => 'WP Radio also provides 3 Elementor widgets: Radio Player, Radio Station, and Country List',
		'pro'         => true,

	],
	[
		'title'       => 'Import All Stations',
		'description' => 'In the PRO version you can import all the included radio stations (52000+) from around 190+ countries all over the world.',
		'pro'         => false,

	],
	[
		'title'       => 'Country Based Listing',
		'description' => 'User’s IP based country stations list can be set from the settings. Visitors will see their country’s stations at first in the listing page. Then users can chang the country to view other stations.',
		'pro'         => false,

	],
	[
		'title'       => 'Shortcode Player',
		'description' => 'The radio station player can be placed anywhere using the [wp_radio_player]shortcode. You can also display the player on any post/ page using the gutenberg block & elementor widget.',
		'pro'         => false,

	],
	[
		'title'       => 'Popup Player',
		'description' => 'WP Radio also has the popup player feature. Users can play the radio stations in a new popup window. This will increase the radio listening experience without page reload interrupts.',
		'pro'         => false,

	],
	[
		'title'       => 'Multiple Listing Layouts',
		'description' => 'You can display the stations in list view and grid view.',
		'pro'         => false,

	],
	[
		'title'       => 'Recently Played Tracks Playlist',
		'description' => ' On the single radio station page recently played tracks playlist will be displayed.',
		'pro'         => false,

	],
	[
		'title'       => 'Stations Play Statistics',
		'description' => 'YOn the statistics page you will get an overview of the stations play counts per day and the number total listeners who played the stations and also the most played stations list.',
		'pro'         => false,

	],
	[
		'title'       => 'Admin Dashboard Chart Widget',
		'description' => ' There is also an admin dashboard widget available for the stations play statistics, to get a quick overview of the stations play statistics.',
		'pro'         => false,

	],
	[
		'title'       => 'Statistics Email Reporting',
		'description' => 'You can receive a daily/weekly/monthly email report with the stations play statistics and the list of the top played stations.',
		'pro'         => false,

	],
	[
		'title'       => 'Country List',
		'description' => 'You can display all the radio stations countries using the [wp_radio_country_list] shortcode. You also can display the country list in any post/ page using the gutenberg block & elementor widget.',
		'pro'         => false,

	],
	[
		'title'       => 'Color Customizations',
		'description' => 'You can customize the radio stations listing and player background and text colors from the color settings of the plugin. You also can use gradient color for the station listing and player.',
		'pro'         => false,

	],
	[
		'title'       => 'Trending Stations',
		'description' => 'You can display the trending stations listing in any page/ post use the code [wp_radio_trending] shortcode.',
		'pro'         => false,

	],
	[
		'title'       => 'Featured Stations',
		'description' => 'You can display the featured stations listing in any page/ post use the code [wp_radio_featured] shortcode.',
		'pro'         => false,

	],
	[
		'title'       => 'AJAX Loading',
		'description' => 'You can enable the AJAX loading from the general settings of the plugin. If the ajax loading is on users can browse the stations without any page reload.',
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

										<div class="title">
											<i class="fa-solid fa-chevron-down"></i>
											<span class="feature-title"><?php echo $feature['title']; ?></span>
										</div>

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