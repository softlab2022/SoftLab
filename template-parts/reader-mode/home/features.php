<?php

$features = [
	'reader-mode'                => [
		'title'       => 'Reader Mode Layout',
		'description' => '
		Reader Mode adds a simple and clean content layout that is user-friendly, comfortable, more readable, more accessible, and easy to use for readers. Your website articles & posts can be turned into simple & interactive by using the Reader Mode layout.
		<br />
		<br />
		Reader Mode\'s simple layout represents easy customizations of buttons style and text, translating over 100+ languages, multiple accents, and genders Text-to-Speech capability, reading time estimator, reading progress bar, and many other powerful features that improve your websites readability and accessibility better among users.
		',
	],
	'translation'                => [
		'title'       => 'Translation',
		'description' => '
		Reader Mode adds a translation button both in the general mode and reader mode layout. This function translates the whole post/ article into user preferred language. The translation function has the ability to translate the post content into over 100+ languages.
		',
	],
	'text-to-speech'             => [
		'title'       => 'Text to Speech',
		'description' => '
		Reader Mode adds a Text-to-Speech button both in the general mode and reader mode for the users to listen to the post/ article. With multiple accents & voice diversity, this feature takes users into a new era while they will play with the Text-to-Speech feature of the Reader Mode plugin. The Text-to-Speech function has the ability to listen to the post content in over 100+ accents & voices.
		',
	],
	'reading-time'               => [
		'title'       => 'Reading Time',
		'description' => '
		Reader Mode adds a reading time estimation for the users to know how much time they need to read the post/ article. Reading time specified in minutes motivates users to read the post. It works great to give visitors a quick idea about the time needed to read a post and encourages them to go on till the end.
		',
	],
	'progress-bar'               => [
		'title'       => 'Progress Bar',
		'description' => '
		Reader Mode adds a handy reading progress bar that works as an identifier for the users to know how much they read the post/ article. This lets readers know how far they have reached and how much more they have to go on.
		',
	],
	'multiple-buttons-styles'    => [
		'title'       => 'Multiple Buttons & Styles',
		'description' => '
		Highly customizable multiple buttons and styles are available to enable the Reader Mode, Translation, Text to speech, and Reading time features. As an admin, you have multiple eye catchy buttons to use depending on your website theme, color, and style.
		',
	],
	'multiple-display-positions' => [
		'title'       => 'Multiple Display Positions',
		'description' => '
		The Reader mode button, reading time, translation button, text-to-speech button, and reading progress bar can be displayed in multiple positions. such as: Above the post title, Below the post title, and Above the post content.
		',
	],
	'dark-mode'                  => [
		'title'       => 'Light/ Dark Mode Theme',
		'description' => '
		Reader Mode has a light/ dark mode theme for the users to choose the best one for their reading preference. Reader mode theme also can be changed based on the user\'s device light/dark theme.
		',
	],
];

?>


<section id="reader-mode-features">

	<div class="container">
		<div class="col-lg-6 col-md-10 m-auto">
			<div class="section-title">
				<h2>Reader Mode Features</h2>
				<p>Let's explore the amazing features of the Reader Mode, which will help you to improve your user'sreading experience.</p>
			</div>
		</div>
	</div>

	<?php

	$i = 0;
	foreach ($features as $key => $feature) {

		$is_odd = $i % 2 == 0;

	?>

		<div class="feature-item feature-<?php echo $key; ?>">
			<div class="container">
				<div class="row flex-column-reverse <?php echo $is_odd ? 'flex-md-row' : 'flex-md-row-reverse'; ?>  align-items-center">

					<div class="col-md-6">
						<div class="feature-content">
							<h2><?php echo $feature['title']; ?></h2>
							<?php if ( wp_is_mobile() ) { ?>
							<div class="feature-img-mobile text-center">
								<img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/reader-mode/home/features/<?php echo $key; ?>.png" alt="<?php echo $feature['title']; ?>">
							</div>
							<?php } ?>
							<p><?php echo $feature['description']; ?></p>
						</div>
					</div>

					<div class="col-md-6 m-auto">
						<div class="feature-img text-center">
							<img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/reader-mode/home/features/<?php echo $key; ?>.png" alt="<?php echo $feature['title']; ?>">
						</div>
					</div>

				</div>
			</div>
		</div>

	<?php
		$i++;
	} ?>

</section>