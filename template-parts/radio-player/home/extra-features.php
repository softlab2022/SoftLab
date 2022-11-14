<?php

$features = [
	[
		'title'       => 'Shortcode Player',
		'description' => 'Display the Radio Players anywhere in your website using the <code>[radio_player]</code> shortcode.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/shortcode.png',
	],
	[
		'title'       => 'Play Statistics',
		'description' => 'You can view the statistics of how many visitors how many times playing the players in each day.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/play-statistics.png',
	],
	[
		'title'       => 'MP3 + AAC + M3U8 Compatibility',
		'description' => 'Radio Player plugin can play any audio source including .mp3, .aac, .m3u8, .pls and more.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/mp3.png',
	],
	[
		'title'       => 'Customize Popup Player Size',
		'description' => 'The popup player is fully customizable. You can change the width and height of the popup player window.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/customize.png',
	],
	[
		'title'       => 'Player Duplicator',
		'description' => 'Any pre created player can be duplicated with all the settings and create a new player with the same settings.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/player-duplicator.png',
	],
	[
		'title'       => 'Multiple Instance',
		'description' => 'Multiple players can be displayed and played at the same time on the same page.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/multiple-lnstance.png',
	],
	[
		'title'       => 'Station Metadata',
		'description' => 'Radio player can grab and display the currently playing track title.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/station-metadata.png',
	],
	[
		'title'       => 'Mobile Media Notification',
		'description' => 'While playing a the player, users can see currently playing station information and can play/ pause the player from the mobile notification bar.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/notification.png',
	],
	[
		'title'       => 'Add Unlimited Players',
		'description' => 'You can add unlimited radio players as you want.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/unlimited-players.png',
	],
	[
		'title'       => 'Color Customizations',
		'description' => 'Player text colors and background colors can be customize.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/color-custom.png',
	],
	[
		'title'       => 'Elementor Widget',
		'description' => 'Display and play the radio player in any page/ post using the Radio Player Elementor widget.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/widget.png',
	],
	[
		'title'       => 'Gutenberg Block',
		'description' => 'Display the player in any page/ post using the Radio Player Gutenberg editor block.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/block.png',
	],

];

?>

<section id="ex-feature">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="ex-head text-center">
                    <h1>Never Miss a Single Valuable Feature.</h1>
                    <p>Let's explore which features are absolute you can add to stand out and give even more value</p>
                </div>
            </div>
        </div>


        <div class="row">
            
        <?php foreach ( $features as $feature ) { ?>
            <div class="col-lg-4 col-md-6 m-auto">
                <div class="ex-feature-item text-center">
                    <div class="item-logo">
                    <img class="img-fluid" src="<?php echo $feature['image']; ?>" alt="<?php echo $feature['title']; ?>">
                    </div>
                    <div class="item-text">
                        <h5><?php echo $feature['title']; ?></h5>
                        <p><?php echo $feature['description']; ?></p>
                    </div>
                </div>
            </div>
            <?php } ?>

        </div>

    </div>
</section>