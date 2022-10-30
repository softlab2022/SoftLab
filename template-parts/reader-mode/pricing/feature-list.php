<?php

$features = [
	[
		'title'       => 'Reader Mode Layout',
		'description' => 'Reader Mode adds a simple and clean content layout that is user-friendly, comfortable, more readable, more accessible, and easy to use for readers. Your website articles & posts can be turned into simple & interactive by using the Reader Mode layout.<br>Reader Mode\'s simple layout represents easy customizations of buttons style and text, translating over 100+ languages, multiple accents, and genders Text-to-Speech capability, reading time estimator, reading progress bar, and many other powerful features that improve your websites readability and accessibility better among users.',
		'pro'         => true,
	],
	[
		'title'       => 'Estimated Reading Time',
		'pro'         => true,
		'description' => 'Reader Mode adds a reading time estimation for the users to know how much time they need to read the post/ article. Reading time specified in minutes motivates users to read the post. It works great to give visitors a quick idea about the time needed to read a post and encourages them to go on till the end.',

	],
	[
		'title'       => 'Reading Progress Bar',
		'pro'         => true,
		'description' => 'Reader Mode adds a handy reading progress bar that works as an identifier for the users to know how much they read the post/ article. This lets readers know how far have they reached and how much more they have to go on.',

	],
	[
		'title'       => 'Specific Posts Types',
		'pro'         => true,
		'description' => 'The Reader Mode Layout, Text-to-Speech, Translation, Reading Time, and Reading Progress Bar can be enabled for only specific post types of your website.',

	],
	[
		'title'       => 'Multiple Display Positions',
		'pro'         => true,
		'description' => 'The Reader mode button, reading time, translation button, text to speech button, reading progressbar can be displayed in multiple positions. such as: Above the post title, Below the post title and Above the post content.',

	],
	[
		'title'       => 'Print Optimized',
		'pro'         => true,
		'description' => 'Reader Mode is print optimized for the users to print the whole post/ article. This operation can be operated with only one simple click. This allows your users to print the post content in a print-optimized layout without any unnecessary elements.',

	],
	[
		'title'       => 'Auto Scroll',
		'pro'         => true,
		'description' => 'Auto scroll feature is available in the reader mode for the users to scroll the post/ article automatically while they are reading the post/ article.',

	],
	[
		'title'       => 'Light/Dark Mode Theme',
		'pro'         => true,
		'description' => 'Reader Mode has a light/ dark mode theme for the users to choose the best one for their reading preference. Reader mode theme also can be changed based on the user\'s device light/dark theme.',

	],
	[
		'title'       => 'Custom Font Size',
		'pro'         => true,
		'description' => 'Reader Mode allows the users to customize the content font sizes depending on their needs and tests. Users can customize font sizes in small, medium, and large sizes to improve excessive readability.',

	],
	[
		'title'       => 'Full Screen Mode',
		'pro'         => true,
		'description' => 'Fullscreen reading mode is available in the reader mode for the users to read the post/ article in fullscreen. As the full-screen mode is readers friendly with fewer distractions, that is the reason Fullscreen mode is such useful.',

	],
	[
		'title'       => 'Table of Contents',
		'pro'         => true,
		'description' => 'Table of contents feature is available in the reader mode for the users to navigate to the specific section of the post/ article.',

	],
	[
		'title'       => 'Link List',
		'pro'         => true,
		'description' => 'All the links in the post/ article will be listed in the reader mode for the users to navigate to the specific link in the post/ article.',
	],

	[
		'title'       => 'Custom Button Alignment',
		'pro'         => true,
		'description' => 'The Reader Mode button, Text-to-Speech button, Translation button, Reading time button, and Reading progressbar can be customized with multiple alignments such as: Left, Center, and Right.',

	],

	[
		'title'       => 'Text-to-Speech (TTS)',
		'pro'         => false,
		'description' => 'Reader Mode adds a Text-to-Speech button both in the general mode and reader mode for the users to listen to the post/ article. With multiple accents & voice diversity, this feature takes users into a new era while they will play with the Text-to-Speech feature of the Reader Mode plugin. The Text-to-Speech function has the ability to listen to the post content in over 100+ accents & voices.',
	],
	[
		'title'       => 'Translation',
		'pro'         => false,
		'description' => 'Reader Mode adds a translation button both in the general mode and reader mode layout. This function translates the whole post/ article into user preferred language. The translation function has the ability to translate the post content into over 100+ languages.',

	],
	[
		'title'       => 'Multiple Display options',
		'pro'         => false,
		'description' => 'The Reader mode button, Reading time, Translation button, Text to speech button, Reading progressbar can be displayed both in the General mode and Reader mode layout.',

	],
	[
		'title'       => 'Multiple Buttons & Styles',
		'pro'         => false,
		'description' => 'Highly customizable multiple buttons and styles are available to enable the Reader Mode, Translation, Text to speech, and Reading time features. As an admin, you have multiple eye catchy buttons to use depending on your website theme, color, and style.',

	],
	[
		'title'       => 'Custom Button Text & Size',
		'pro'         => false,
		'description' => 'You can customize the button text and size to match your website theme and screen size. This feature can be controlled in Reader Mode Layout, Text-to-Speech, Translation, Reading Time, and Reading Progress Bar. For a  better user experience, more readability, and more accessibility this function plays an important role.',

	],
	[
		'title'       => 'Custom Button Colors',
		'pro'         => false,
		'description' => 'The Reader Mode button, Text-to-Speech button, Translation button, Reading time button, and Reading progressbar can be customized with multiple colors.',

	],
	[
		'title'       => 'Custom Button Icon',
		'pro'         => false,
		'description' => 'The Reader Mode button, Text-to-Speech button, Translation button, Reading time button, and Reading progressbar can be customized with multiple image icons. You can also upload your own image as an icon with the button.',

	],
	[
		'title'       => 'Custom CSS',
		'pro'         => false,
		'description' => 'Reader mode layout can be customized by using custom CSS. If you (as admin) want to customize some elements implementing your expertise, you are allowed to do that by using custom CSS.',

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

                                    <i class="fas <?php echo ! empty( $feature['pro'] ) ? 'fa-check-square' : 'fa-times-square'; ?>"></i>
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