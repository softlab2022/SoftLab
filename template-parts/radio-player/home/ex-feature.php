<?php

$features = [
	[
		'title'       => 'Shortcode Player',
		'description' => 'Display and play the radio player anywhere using the [radio_player] shortcode.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/shortcode.png',
	],
	[
		'title'       => 'Play Statistics',
		'description' => 'You can view the statistics how many user how many times the radio player.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/play-statistics.png',
	],
	[
		'title'       => 'MP3 + AAC + M3U8 Compatibility',
		'description' => 'You can play the live .m3u8 streams using the radio player.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/mp3.png',
	],
	[
		'title'       => 'Customize Popup Player Size',
		'description' => 'You customize the popup player width & height.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/customize.png',
	],
	[
		'title'       => 'Player Duplicator',
		'description' => 'You can duplicate any radio player with all the configurations.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/player-duplicator.png',
	],
	[
		'title'       => 'Multiple Instance',
		'description' => 'You can use multiple radio player in a single page. Station Metadata -Radio player can grap and play the current playing station metadata title.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/multiple-lnstance.png',
	],
	[
		'title'       => 'Station Metadata',
		'description' => 'Radio player can grap and play the current playing station metadata title.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/station-metadata.png',
	],
	[
		'title'       => 'Mobile Media Notification',
		'description' => 'While playing a radio station, users can see currently playing station information and can play/ pause the radio player from the mobile notification bar.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/notification.png',
	],
	[
		'title'       => 'Add Unlimited Players',
		'description' => 'You can add unlimited radio players as you want.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/unlimited-players.png',
	],
	[
		'title'       => 'Elementor Widget',
		'description' => 'Display and play the radio player in any page/ post using the radio player elementor widget.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/widget.png',
	],
	[
		'title'       => 'Color Customizations',
		'description' => 'Color customizations available for customizing the radio player.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/color-custom.png',
	],
	[
		'title'       => 'Gutenberg Block',
		'description' => 'Display and play the radio player in any page/ post using the radio player gutenberg block.',
		'image'       => get_template_directory_uri() . '/assets/images/radio-player/ex-feature/block.png',
	],

];

?>

<section id="ex-feature">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="ex-head text-center">
                    <h1>Never miss more valuable Extra Features.</h1>
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