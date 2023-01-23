<?php

    $features = [
	[
		'title'       => 'Current song title',
		'description' => 'The radio station player can display the currently playing song title.',
		'image'       => get_template_directory_uri() . '/assets/images/wp-radio/home/ex-feature/current.png',
	],
	[
		'title'       => 'Mobile Media Notification',
		'description' => 'While playing a radio station, users can see currently playing station information and can play/ pause the radio player from the mobile notification bar.',
		'image'       => get_template_directory_uri() . '/assets/images/wp-radio/home/ex-feature/notification.png',
	],
	[
		'title'       => 'm3u8 Extension Supported',
		'description' => 'WP Radio can play the .m3u8 stream links.',
		'image'       => get_template_directory_uri() . '/assets/images/wp-radio/home/ex-feature/m3u8.png',
	],
	[
		'title'       => 'Gutenberg Blocks',
		'description' => 'WP Radio provides 3 Gutenberg blocks: Radio Player, Radio Station, and Country List.',
		'image'       => get_template_directory_uri() . '/assets/images/wp-radio/home/ex-feature/blocks.png',
	],
	[
		'title'       => 'Elementor Widgets',
		'description' => 'WP Radio also provides 3 Elementor widgets: Radio Player, Radio Station, and Country List.',
		'image'       => get_template_directory_uri() . '/assets/images/wp-radio/home/ex-feature/widget.png',
	],
	[
		'title'       => 'Import All Stations',
		'description' => 'In the PRO version you can import all the included radio stations (52000+) from around 190+ countries all over the world.',
		'image'       => get_template_directory_uri() . '/assets/images/wp-radio/home/ex-feature/import.png',
	],
	[
		'title'       => 'Multiple Listing Layouts',
		'description' => 'You can display the stations in list view and grid view.',
		'image'       => get_template_directory_uri() . '/assets/images/wp-radio/home/ex-feature/layout.png',
	],
	[
		'title'       => 'Recently Played Tracks Playlist',
		'description' => 'On the single radio station page recently played tracks playlist will be displayed.',
		'image'       => get_template_directory_uri() . '/assets/images/wp-radio/home/ex-feature/playlist.png',
	],
	[
		'title'       => 'Stations Play Statistics',
		'description' => 'On the statistics page you will get an overview of the stations play counts per day and the number total listeners who played the stations and also the most played stations list.',
		'image'       => get_template_directory_uri() . '/assets/images/wp-radio/home/ex-feature/station.png',
	],
	[
		'title'       => 'Admin Dashboard Chart Widget',
		'description' => 'There is also an admin dashboard widget available for the stations play statistics, to get a quick overview of the stations play statistics.',
		'image'       => get_template_directory_uri() . '/assets/images/wp-radio/home/ex-feature/chart.png',
	],
	[
		'title'       => 'Statistics Email Reporting',
		'description' => 'You can receive a daily/weekly/monthly email report with the stations play statistics and the list of the top played stations.',
		'image'       => get_template_directory_uri() . '/assets/images/wp-radio/home/ex-feature/email.png',
	],
	[
		'title'       => 'Color Customizations',
		'description' => 'You can customize the radio stations listing and player background and text colors from the color settings of the plugin. You also can use gradient color for the station listing and player.',
		'image'       => get_template_directory_uri() . '/assets/images/wp-radio/home/ex-feature/custom.png',
	],
	[
		'title'       => 'Trending Stations',
		'description' => 'You can display the trending stations listing in any page/ post use the code [wp_radio_trending] shortcode.',
		'image'       => get_template_directory_uri() . '/assets/images/wp-radio/home/ex-feature/trending.png',
	],
	[
		'title'       => 'Featured Stations',
		'description' => 'You can display the featured stations listing in any page/ post use the code [wp_radio_featured] shortcode.',
		'image'       => get_template_directory_uri() . '/assets/images/wp-radio/home/ex-feature/feats.png',
	],

];

?>

<section id="ex-feat">
    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-md-8 m-auto">
                <div class="ex-head text-center">
                    <span>More Features</span>
                    <h1>Never miss more valuable Extra Features.</h1>
                    <p>Let's explore which features are absolute you can add to stand out and give even more value</p>
                </div>
            </div>
        </div>

        <div class="row">
            <?php foreach ( $features as $feature ) { ?>
                <div class="col-lg-4 col-md-6">
                    <div class="ex-item text-center">
                        <div class="item-logo">
                        <img class="img-fluid" src="<?php echo $feature['image']; ?>" alt="<?php echo $feature['title']; ?>">
                        </div>
                        <div class="ex-text">
                            <span><?php echo $feature['title']; ?></span>
                            <p><?php echo $feature['description']; ?></p>
                        </div>
                    </div>
                </div>
            <?php } ?>

        </div>

    </div>
</section>