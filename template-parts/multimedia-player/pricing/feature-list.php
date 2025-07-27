<?php
$features = [
	[
		'title'       => 'Title',
		'description' => 'Give your media file a clear and descriptive title that appears directly on the player. This helps users instantly recognize what they’re about to play and improves content organization across playlists or pages.',
		'video'		  => '',
		'pro'         => true,
	],
	[
		'title'       => 'Art',
		'description' => 'Upload custom artwork such as album covers, podcast thumbnails, or video stills to represent your media. This adds a professional touch and visually engages your audience before playback even begins',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Artist Name',
		'description' => 'Showcase the name of the artist, creator, or speaker alongside your track or video. Highlighting contributors gives proper credit and helps build recognition with your audience.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Album Name',
		'description' => 'Label your media as part of an album or collection to make series or themed content easier to navigate. Perfect for musicians, podcasters, or video series creators who want to group related items.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Genre',
		'description' => 'Categorize your content by genre, such as pop, rock, documentary, or comedy. This makes filtering and discovery more user-friendly, especially when your library grows.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Season',
		'description' => 'Organize episodic content by seasons to maintain structure in a long-running podcast or video series. Viewers and listeners will appreciate the clean breakdown when following your content in order.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Episode',
		'description' => 'Assign an episode number or name to help users keep track of what they’ve seen or heard. Ideal for serialized podcasts, lectures, or narrative video content.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Episode Type',
		'description' => 'Specify if an episode is full-length, a trailer, or bonus content. This gives audiences a quick idea of what they’re accessing and sets expectations for content length or depth.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Explicit Content',
		'description' => 'Mark media as explicit when it contains mature language or themes. This helps you stay compliant with content regulations and gives users the ability to make informed choices.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Add New Audio (button)',
		'description' => 'Easily add new audio files to your library or playlist with a single click. This user-friendly upload option makes managing and updating content a breeze.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Source',
		'description' => '',
		'video'       => '',
		'pro'         => true,
		'subitems'    => [
			[
				'title' => 'Local Audio',
				'description' => 'Upload and play media files directly from your WordPress media library. Best for creators who want total control over hosting, performance, and file availability.',
				'pro'   => true,
			],
			[
				'title' => 'External Audio URL',
				'description' => 'Stream media by linking to externally hosted files or streams. Save hosting space on your site while still offering fast, reliable playback.',
				'pro'   => true,
			],
			[
				'title' => 'SoundCloud',
				'description' => 'Connect to SoundCloud to stream music or audio files directly from your account. A great option for musicians, producers, or DJs sharing tracks on multiple platforms.',
				'pro'   => false,
			],
			// [
			// 	'title' => 'Local Video',
			// 	'description' => 'Embed and play YouTube videos without leaving your site. Perfect for vloggers, educators, and content creators looking to keep users engaged on-site.',
			// 	'pro'   => true,
			// ],
			// [
			// 	'title' => 'External Video URL',
			// 	'description' => 'Bring Facebook-hosted media directly into your player. Keep your content unified and expand visibility by tapping into social content.',
			// 	'pro'   => true,
			// ],
			[
				'title' => 'Youtube',
				'description' => 'Embed and play YouTube videos without leaving your site. Perfect for vloggers, educators, and content creators looking to keep users engaged on-site.',
				'pro'   => false,
			],
			[
				'title' => 'Facebook',
				'description' => 'Bring Facebook-hosted media directly into your player. Keep your content unified and expand visibility by tapping into social content.',
				'pro'   => false,
			],
			[
				'title' => 'Vimeo',
				'description' => 'Use Vimeo-hosted videos in your player for a clean, ad-free viewing experience. Ideal for portfolios, branded content, and high-quality visuals.',
				'pro'   => false,
			],
			[
				'title' => 'Dailymotion',
				'description' => 'Add Dailymotion videos to your player for even more content flexibility. Reach audiences using multiple platforms while keeping your site the central hub.',
				'pro'   => false,
			],
			[
				'title' => 'RSS Feed',
				'description' => 'Automatically pull podcast episodes or audio content using an RSS feed. Keeps your content up-to-date without manual uploads.',
				'pro'   => false,
			],
		]
	],
	[
		'title'       => 'Play/Pause Button',
		'description' => 'Provides users with simple, familiar control over playback. Start or stop content with a single click for an intuitive experience.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Volume Button',
		'description' => 'Let users control the sound level directly from the player. Adds flexibility for any environment—quiet, loud, or in-between.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Progress Bar',
		'description' => 'Shows how far into the media the user is and allows them to jump to different sections. A key feature for navigation and repeat listening.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Next/Previous Button',
		'description' => 'Allow users to skip forward or go back through a playlist or series. Great for binge-watchers, music lovers, or learners following along.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Rewind/Forward Button',
		'description' => 'Skip backward or ahead in small increments—great for podcasts or long videos where users want to review or jump ahead quickly.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Full Screen Button',
		'description' => 'Gives users the ability to expand the video to full-screen mode. Ideal for visual content like films, webinars, or presentations.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Playlist',
		'description' => 'Group multiple tracks or episodes together into a seamless playlist. Perfect for album releases, full podcast seasons, or content collections.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Allow Search',
		'description' => 'Enable a search bar for your playlist so users can find what they’re looking for fast. Ideal for large libraries or educational content.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Playlist Time Duration',
		'description' => 'Displays the total length of all media files in the playlist. Useful for managing time or understanding the scope of your content at a glance.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Popup Icon',
		'description' => 'Allows your player to pop out into a small floating window so users can continue browsing the site while media keeps playing.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Shuffle Button',
		'description' => 'Mix up the playback order with a shuffle function for music or audio playlists. Keeps things fresh and adds a dynamic listening experience.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Settings Button',
		'description' => 'Opens advanced settings like playback speed, quality, and more. Gives users deeper control over their experience without clutter.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Allow Skip Silence',
		'description' => 'Automatically remove long pauses or silent sections in audio. Great for improving pacing in interviews, lectures, or long-form podcasts.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Track Time Duration',
		'description' => 'Shows how much time has passed and how much is left in the current track. Keeps users informed and improves time management.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Allow Autoplay',
		'description' => 'Start the media automatically when the page loads. Ideal for background music, landing pages, or immersive experiences.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Allow Embedding',
		'description' => 'Let users or other sites embed your media player. Expands your reach and makes it easy to share content elsewhere on the web.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Video Schema',
		'description' => 'Add structured data to your videos to help them appear as rich snippets in search engines. Boosts your SEO and visibility.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Player Width',
		'description' => 'Set a custom width for the media player to match your website layout. Helps integrate the player seamlessly into your page design.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Background Type',
		'description' => '',
		'video'       => '',
		'pro'         => true,
		'subitems'    => [
			[
				'title' => 'Color',
				'description' => 'Customize the player’s primary colors for buttons, text, and highlights. Aligns the media experience with your overall branding.',
				'pro'   => true,
			],
			[
				'title' => 'Image',
				'description' => 'Use a background image to add style or branding behind your player. Great for storytelling or enhancing visual appeal.',
				'pro'   => false,
			]
		]
	],
	[
		'title'       => 'Background Color',
		'description' => '',
		'video'       => '',
		'pro'         => true,
		'subitems'    => [
			[
				'title' => 'Solid',
				'description' => 'Use a single solid color background for a minimalist and focused look. Keeps your design clean and content-focused.',
				'pro'   => true,
			],
			[
				'title' => 'Gradient',
				'description' => 'Add a color gradient background for depth and modern visual appeal. Makes your player more dynamic and stylish.',
				'pro'   => false,
			]
		]
	],
	[
		'title'       => 'Background Image',
		'description' => 'Upload an image that appears behind your player. Useful for branded content, featured media, or storytelling themes.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Text Color',
		'description' => 'Adjust the text color for titles, descriptions, and timestamps to ensure readability against any background.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Button Color',
		'description' => 'Change the color of your play, pause, and navigation buttons. Match your site’s aesthetic and enhance user experience.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Border Radius',
		'description' => 'Set how round or square the edges of your player appear. From clean and sharp to soft and rounded—it’s up to you.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Box Shadow',
		'description' => 'Add shadows to your player for a 3D or floating effect. Helps your player stand out visually on the page.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Typography',
		'description' => 'Choose from custom fonts for the player’s text. Match your site’s design or set a unique tone for media.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Default Volume',
		'description' => 'Set the initial playback volume for all users. Helps create a consistent audio experience across all devices.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Playlist Background',
		'description' => 'Apply a specific background just for the playlist section. Separates it visually from the player and enhances readability.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Thumbnail',
		'description' => 'Upload a custom image to represent each track or video. Makes your playlist visually appealing and easier to navigate.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Resume Local Playback',
		'description' => 'Let users return to where they left off in local files. Enhances user experience, especially for longer content.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Enable Statistics',
		'description' => 'Track usage metrics like plays, skips, and listener drop-off. Perfect for analyzing performance and improving content.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Enable Email Report',
		'description' => 'Receive automatic reports about your media activity by email. Stay informed without logging into the dashboard.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Reporting Email',
		'description' => 'Choose which email address will receive performance summaries and insights. Keep yourself or your team in the loop.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Email Report Interval',
		'description' => 'Set how often reports are sent: daily, weekly, or monthly. Stay up to date with the frequency that suits you.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Custom CSS',
		'description' => 'Add your own CSS styles for complete design freedom. Tweak every visual element to match your creative vision.',
		'video'		  => '',
		'pro'         => false,

	],
	[
		'title'       => 'Enable Auto-save',
		'description' => 'Automatically saves changes as you work on settings. Prevents accidental data loss and streamlines the customization process.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Export Data',
		'description' => 'Back up your player settings and content details for future use. Easily transfer setups between sites or themes.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Import Data',
		'description' => 'Load saved player configurations with one click. Perfect for replicating layouts or restoring previous settings.',
		'video'		  => '',
		'pro'         => true,

	],
	[
		'title'       => 'Reset Settings',
		'description' => 'Quickly restore all player settings to their default state. Useful for troubleshooting or starting fresh.',
		'video'		  => '',
		'pro'         => true,

	],

];
?>

<section id="features">
	<div class="container">

		<div class="row">
			<div class="col-lg-6 m-auto">
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
					<?php foreach ($features as $key => $feature) { ?>
						<div class="accordion-item">
							<h2 class="accordion-header title-<?php echo $key; ?>" id="heading-<?php echo $key; ?>">
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
									<div class="description">
										<?php echo $feature['description']; ?>
									</div>

									<?php if (!empty($feature['subitems'])) { ?>
										<div class="subitems-accordion" id="subitems-<?php echo $key; ?>">
											<?php foreach ($feature['subitems'] as $subkey => $subitem) { ?>
												<div class="subitem">
													<button class="subitem-button collapsed" type="button"
														data-bs-toggle="collapse"
														data-bs-target="#subitem-<?php echo $key; ?>-<?php echo $subkey; ?>"
														aria-expanded="false"
														aria-controls="subitem-<?php echo $key; ?>-<?php echo $subkey; ?>">
														<div class="title">
															<i class="fa-solid fa-chevron-down"></i>
															<span class="feature-title"><?php echo $subitem['title']; ?></span>
														</div>
														<i class="fas <?php echo !empty($subitem['pro']) ? 'fa-check-square' : 'fa-times-square'; ?>"></i>
														<i class="fas fa-check-square"></i>
													</button>

													<div id="subitem-<?php echo $key; ?>-<?php echo $subkey; ?>"
														class="collapse"
														aria-labelledby="subitem-<?php echo $key; ?>-<?php echo $subkey; ?>"
														data-bs-parent="#subitems-<?php echo $key; ?>">
														<div class="subitem-content">
															<div class="subitem-description">
																<?php echo $subitem['description']; ?>
															</div>
														</div>
													</div>
												</div>
											<?php } ?>
										</div>
									<?php } ?>
								</div>
							</div>
						</div>
					<?php } ?>
				</div>
			</div>
		</div>

	</div>

</section>