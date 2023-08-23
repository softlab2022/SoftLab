<?php

$features = [
	[
		'title'       => 'MP3 + AAC + M3U8 Compatibility',
		'description' => 'You can play the live .m3u8 streams using the radio player.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/mp3-aac.png',
	],
	[
		'title'       => 'Shortcode Player',
		'description' => 'Display the Radio Players anywhere in your website using the <code>[radio_player]</code> shortcode.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/shortcode.png',
	],
	
	[
		'title'       => 'Stream Data Display',
		'description' => 'Radio player can grab and play the stream data including current track title, artist, artwork, and recent play history',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/current-title.png',
	],
	[
		'title'       => 'Player Duplicator',
		'description' => 'Any pre created player can be duplicated with all the settings and create a new player with the same settings.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/player-duplicator.png',
	],
	[
		'title'       => 'Mobile Media Notification',
		'description' => 'While playing a the player, users can see currently playing station information and can play/ pause the player from the mobile notification bar.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/notification.png',
	],
	[
		'title'       => 'Multiple Instance',
		'description' => 'Multiple players can be displayed and played at the same time on the same page.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/multiple-lnstance.png',
	],
	
	[
		'title'       => 'Add Multiple Players',
		'description' => 'You can add upto 10 players in the free version and unlimited players in the PRO version.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/unlimited-players.png',
	],
	[
		'title'       => 'Custom CSS',
		'description' => 'You customize the popup player width & height.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/custom-css.png',
	],
	[
		'title'       => 'Color Customizations',
		'description' => 'Player text colors and background colors can be customize.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/color-custom.png',
	],
	[
		'title'       => 'Play Statistics',
		'description' => 'You can view the statistics how many user how many times the radio player.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/play-statistics.png',
	],
	[
		'title'       => 'Gutenberg Block',
		'description' => 'Display the player in any page/ post using the Radio Player Gutenberg editor block.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/block.png',
	],
	[
		'title'       => 'Elementor Widget',
		'description' => 'Display and play the radio player in any page/ post using the Radio Player Elementor widget.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/widget.png',
	],
	

];

?>

<section id="ex-feature">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 m-auto">
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