<?php

    $features = [
	[
		'title'       => 'Reading Progress',
		'description' => 'Reader Mode adds a customizable reading progress bar for the users to know how much they read from the post/ article.',
		'image'       => get_template_directory_uri() . '/assets/images/reader-mode/home/ex-feature/reading-progress.png',
	],
	[
		'title'       => 'Multiple Display Options',
		'description' => 'The Reader mode button, Reading time, Translation button, Text to speech button, Reading progressbar can be displayed both in the General mode.',
		'image'       => get_template_directory_uri() . '/assets/images/reader-mode/home/ex-feature/multiple-display.png',
	],
	[
		'title'       => 'Custom Font Size',
		'description' => 'You can set any custom font size for the Reader Mode view. Users also customized the font size in the Reader Mode view.',
		'image'       => get_template_directory_uri() . '/assets/images/reader-mode/home/ex-feature/custom-font-size.png',
	],
	[
		'title'       => 'Specific Posts/ Types',
		'description' => 'Reader mode can be enabled for specific posts/ types',
		'image'       => get_template_directory_uri() . '/assets/images/reader-mode/home/ex-feature/specific-posts.png',
	],
	[
		'title'       => 'Custom Fonts',
		'description' => 'You can set any custom Google Fonts for the Reader Mode view. Users also can set their own custom fonts for the 
        Reader Mode view.',
		'image'       => get_template_directory_uri() . '/assets/images/reader-mode/home/ex-feature/custom-font.png',
	],
	[
		'title'       => 'Print Optimized',
		'description' => 'Reader Mode is print optimized for the users to print the post/ article.',
		'image'       => get_template_directory_uri() . '/assets/images/reader-mode/home/ex-feature/print-optimized.png',
	],
	[
		'title'       => 'Fully-Customizable',
		'description' => 'Reader Mode is fully customizable for both the admins & users. Admin can easily customize the various buttons with different layout and colors.',
		'image'       => get_template_directory_uri() . '/assets/images/reader-mode/home/ex-feature/fully-customizable.png',
	],
	[
		'title'       => 'Fullscreen Mode',
		'description' => 'Fullscreen reading mode is available in the reader mode for the users to read the post/ article in fullscreen mode.',
		'image'       => get_template_directory_uri() . '/assets/images/reader-mode/home/ex-feature/fullscreen-mode.png',
	],
	[
		'title'       => 'Auto-scroll - Auto',
		'description' => 'scroll feature is available in the reader mode for the users to scroll the post/ article automatically while they are reading the post/ article.',
		'image'       => get_template_directory_uri() . '/assets/images/reader-mode/home/ex-feature/auto-scroll.png',
	],
	[
		'title'       => 'Table of Contents',
		'description' => 'Table of contents feature is available in the reader mode for the users to navigate to the specific section of the post/ article.',
		'image'       => get_template_directory_uri() . '/assets/images/reader-mode/home/ex-feature/table-of-contact.png',
	],
	[
		'title'       => 'Custom CSS',
		'description' => 'Reader mode layout can be customized by using the custom CSS.',
		'image'       => get_template_directory_uri() . '/assets/images/reader-mode/home/ex-feature/custom-css.png',
	],
	[
		'title'       => 'Links list',
		'description' => 'All the links in the post/ article will be listed in the reader mode for the users to navigate to the specific link in the post/ article.',
		'image'       => get_template_directory_uri() . '/assets/images/reader-mode/home/ex-feature/links-list.png',
	],
	[
		'title'       => ' Progress Bar',
		'description' => 'Reading progress bar for the users to know how much they read from the post/ article.',
		'image'       => get_template_directory_uri() . '/assets/images/reader-mode/home/ex-feature/progress-bar.png',
	],

];

?>

<section id="ex-feat">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-8 m-auto">
                <div class="ex-head text-center">
                    <h1>Never miss more <br> valuable  Features.</h1>
                    <p>Let's explore which features are absolute you can <br> add to stand out and give even more value</p>
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