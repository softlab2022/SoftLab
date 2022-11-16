<?php
$features = [
	[
		'title'       => 'Shortcode Player ',
		'description' => 'Display the Radio Players anywhere in your website using the <code>[radio_player]</code> shortcode.',
		'pro'         => false,

	],
	[
		'title'       => 'Current Song Title',
		'description' => 'Radio player can grab and display the currently playing track title.',
		'pro'         => false,

	],
	[
		'title'       => 'MP3 + AAC + M3U8 Compatibility',
		'description' => 'Radio Player plugin can play any audio source including .mp3, .aac, .m3u8, .pls and more.',
		'pro'         => false,

	],
	[
		'title'       => 'Multiple Instance',
		'description' => 'Multiple players can be displayed and played at the same time on the same page.',
		'pro'         => false,

	],

	[
		'title'       => 'Add Unlimited Players',
		'description' => 'You can add and play unlimited radio players as you want.',
		'pro'         => false,

	],
	[
		'title'       => 'Player Duplicator',
		'description' => 'Any pre created player can be duplicated with all the settings and create a new player with the same settings.',
		'pro'         => false,

	],
	[
		'title'       => 'Realtime Player Editing Preview ',
		'description' => 'You can customize the player appearance in real-time. You can change the player colors, background color, background image, width, border radius, box shadow, and more.',
		'pro'         => false,

	],

	[
		'title'       => 'Mobile Media Notification ',
		'description' => 'While playing a the player, users can see currently playing station information and can play/ pause the player from the mobile notification bar.',
		'pro'         => false,

	],
	[
		'title'       => 'Gutenberg Block',
		'description' => 'Display the player in any page/ post using the Radio Player Gutenberg editor block.',
		'pro'         => false,

	],
	[
		'title'       => 'Elementor Widget',
		'description' => 'Display and play the radio player in any page/ post using the Radio Player Elementor widget.',
		'pro'         => false,

	],


	[
		'title'       => 'HTTP Stream Player',
		'description' => 'Modern browsers no longer accepts mixed-content requests. That means if you have an HTTP stream link, you can\'t play it on an HTTPS (Secured) website because of browser mixed-content restrictions.
		<br /> <br /> But Radio Player has a solution for this. You can play your HTTP stream on your HTTPS website using our HTTP Player Proxy system.',
		'pro'         => true,
	],
	[
		'title'       => 'Sticky Player ',
		'description' => 'Radio Player provides a sticky player with multiple styles (Fullwidth, Mini-Fullwidth & Floating) to play your radio stream on all the pages of your website.',
		'pro'         => true,

	],
	[
		'title'       => 'Specific Pages Sticky Player ',
		'description' => ' You can display the sticky-player in the specific pages where you want.',
		'pro'         => true,

	],
	[
		'title'       => 'Multiple Radio Stations',
		'description' => 'If you want to play multiple stations in a single player',
		'pro'         => true,

	],

	[
		'title'       => 'Multiple Player Skins',
		'description' => 'Radio Player provides 10+ player skins with different layouts and styles to choose from. You can choose any player skin from the skins library and display it anywhere on your website using the shortcode.',
		'pro'         => true,

	],
	[
		'title'       => 'Stations Playlist',
		'description' => 'If you add multiple stations in a single player they will display in the player playlist.
<br><br>Users can choose and play any station from the station playlist.',
		'pro'         => true,

	],
	[
		'title'       => 'Play Statistics',
		'description' => 'You can view the statistics of how many visitors how many times playing the players in each day.',
		'pro'         => true,

	],

	[
		'title'       => 'Popup Player',
		'description' => 'Radio Player provides a Popup Player to play your radio stream in a new browser window for a better user experience.
<br><br>
Users can listen to your radio stream while browsing your website or doing other tasks without interrupting their work.',
		'pro'         => true,
	],

	[
		'title'       => 'Customize Popup Player Size',
		'description' => 'The popup player is fully customizable. You can change the width and height of the popup player window.',
		'pro'         => true,

	],

	[
		'title'       => 'Color Customizations',
		'description' => 'Player text colors and background colors can be customize.',
		'pro'         => true,

	],

];
?>

<section id="features">
    <div class="container">

        <div class="row">
            <div class="col-lg-7 m-auto">
                <div class="section-header text-center">
                    <h2>Features Comparison</h2>
                    <p>Free vs PRO</p>
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

                                    <i class="fas <?php echo  empty( $feature['pro'] ) ? 'fa-check-square' : 'fa-times-square'; ?>"></i>
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