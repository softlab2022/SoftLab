<?php

$features = [
	'reader-mode'                => [
		'title'       => 'Reader Mode Layout',
		'description' => 'Reader Mode adds a simple and clean layout for a better readability for the users on every post/ article by strips away clutter and unnecessary elements from the post/ article.',
	],
	'translation'                => [
		'title'       => 'Translation',
		'description' => 'Reader Mode adds a translation button both in the general mode and reader mode layout for the users to translate the post/ article to their language',
	],
	'text-to-speech'             => [
		'title'       => 'Text to Speech',
		'description' => 'Reader Mode adds a text to speech button both in the general mode and reader mode for the users to listen to the post/ article.',
	],
	'reading-time'               => [
		'title'       => 'Reading Time',
		'description' => 'Reader Mode adds a reading time for the users to know how much time they need to read the post/ article.',
	],
	'progress-bar'               => [
		'title'       => 'Progress Bar',
		'description' => 'Reader Mode adds a customizable reading progress bar for the users to know how much they read from the post/ article.',
	],
	'multiple-buttons-styles'    => [
		'title'       => 'Multiple Buttons & Styles',
		'description' => 'Multiple highly customizable buttons and styles are available for the Reader Mode, Translation, Text to speech and Reading time.',
	],
	'multiple-display-positions' => [
		'title'       => 'Multiple Display Positions',
		'description' => 'The Reader mode button, reading time, translation button, text to speech button, reading progressbar can be displayed in multiple positions. such as: Above the post title, Below the post title and Above the post content.',
	],
	'dark-mode'                  => [
		'title'       => 'Light/ Dark Mode Theme',
		'description' => 'Reader Mode has a light/ dark mode theme for the users to choose the best one for their reading preference. Reader mode theme also can be changed based on the user\'s device light/dark theme.',
	],
];

?>


<section id="reader-mode-features">

    <div class="container">
        <div class="col-md-6 m-auto">
            <div class="section-title">
                <h2>Reader Mode Features</h2>
                <p>Let's explore the amazing features of the Reader Mode, which will help you to improve your user's
                    reading
                    experience.</p>
            </div>
        </div>
    </div>

	<?php

	$i = 0;
	foreach ( $features as $key => $feature ) {

		$is_odd = $i % 2 == 0;

		?>

        <div class="feature-item feature-<?php echo $key; ?>">
            <div class="container">
                <div class="row flex-column-reverse <?php echo $is_odd ? 'flex-md-row' : 'flex-md-row-reverse'; ?>  align-items-center">

                    <div class="col-md-6">
                        <div class="feature-content">
                            <h2><?php echo $feature['title']; ?></h2>
                            <p><?php echo $feature['description']; ?></p>
                        </div>
                    </div>

                    <div class="col-md-6 m-auto">
                        <div class="feature-img text-center">
                            <img class="img-fluid"
                                 src="<?php echo get_template_directory_uri(); ?>/assets/images/reader-mode/home/features/<?php echo $key; ?>.png"
                                 alt="<?php echo $feature['title']; ?>">
                        </div>
                    </div>

                </div>
            </div>
        </div>

		<?php
		$i ++;
	} ?>

</section>