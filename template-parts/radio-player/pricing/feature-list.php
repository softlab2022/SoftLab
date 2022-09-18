<?php
$features = [
	[
		'title'       => 'HTTP Stream Player',
		'description' => 'You can play a HTTP radio stream in a HTTPS website.',
		'pro'         => true,
	],
	[
		'title'       => 'Full-width Sticky Player ',
		'description' => 'Full-width sticky player is available to play a radio station in all page.',
		'pro'         => true,

	],
	[
		'title'       => 'Multiple Radio Stations',
		'description' => 'You can add multiple radio stations with title, stream url and thumbnail. Users can play the stations by using the next/ previous buttons.',
		'pro'         => true,

	],
	[
		'title'       => 'Specific Pages Sticky Player ',
		'description' => ' You can display the sticky-player in the specific pages where you want.',
		'pro'         => true,

	],
	[
		'title'       => 'Multiple Player Skins',
		'description' => 'Multiple player skins available.',
		'pro'         => true,

	],
	[
		'title'       => 'Stations Playlist',
		'description' => 'Users can choose and play any station from the radio stations playlist of the player.',
		'pro'         => true,

	],
	[
		'title'       => 'Play Statistics',
		'description' => 'You can view the statistics how many user how many times the radio player.',
		'pro'         => true,

	],
	[
		'title'       => 'MP3 + AAC + M3U8 Compatibility',
		'description' => 'You can play the live .m3u8 streams using the radio player.',
		'pro'         => true,

	],
	[
		'title'       => 'Popup Player',
		'description' => 'Popup radio player is available to play the radio in a new popup window for a better listening experience for the user.',
		'pro'         => true,

	],
	[
		'title'       => 'Player Duplicator',
		'description' => 'You can duplicate any radio player with all the configurations.',
		'pro'         => true,

	],
	[
		'title'       => 'Live Player Editing Preview ',
		'description' => 'Realtime player preview in the player editing screen',
		'pro'         => true,

	],
	[
		'title'       => 'Customize Popup Player Size',
		'description' => 'You customize the popup player width & height.',
		'pro'         => false,

	],
	[
		'title'       => 'Multiple Instance',
		'description' => 'You can use multiple radio player in a single page.',
		'pro'         => false,

	],
	[
		'title'       => 'Station Metadata',
		'description' => 'Radio player can grap and play the current playing station metadata title.',
		'pro'         => false,

	],
	
	[
		'title'       => 'Add Unlimited Players',
		'description' => 'You can add unlimited radio players as you want.',
		'pro'         => false,

	],
	[
		'title'       => 'Color Customizations',
		'description' => 'Color customizations available for customizing the radio player.',
		'pro'         => false,

	],
	[
		'title'       => 'Shortcode Player ',
		'description' => 'Display and play the radio player anywhere using the [radio_player] shortcode.',
		'pro'         => false,

	],
	[
		'title'       => 'Mobile Media Notification ',
		'description' => 'While playing a radio station, users can see currently playing station information and can play/ pause the radio player from the mobile notification bar.',
		'pro'         => false,

	],
	[
		'title'       => 'Gutenberg Block',
		'description' => 'Display and play the radio player in any page/ post using the radio player gutenberg block.',
		'pro'         => false,

	],
	[
		'title'       => 'Elementor Widget',
		'description' => 'Display and play the radio player in any page/ post using the radio player elementor widget.',
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

										<i class="fa-solid fa-chevron-down"></i>

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