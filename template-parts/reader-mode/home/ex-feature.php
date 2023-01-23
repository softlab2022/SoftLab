<?php

$features = [
	'custom-button-text'       => [
		'title'       => __( 'Custom Button Text & Size', 'softlab' ),
		'description' => __( 'The Reader Mode button, Text-to-Speech button, Translation button, and Reading time button can be customized with custom label text and small, medium, and large sizes.', 'softlab' ),
	],
	'multiple-display-options' => [
		'title'       => __( 'Multiple Display Options', 'softlab' ),
		'description' => __( 'The Reader mode button, Reading time, Translation button, Text to speech button, Reading progressbar can be
        displayed both in the General mode and Reader mode layout.', 'softlab' ),
	],

	'post-types'      => [
		'title'       => __( 'Specific Post Types', 'softlab' ),
		'description' => __( 'The Reader Mode Layout, Text-to-Speech, Translation, Reading Time, and Reading Progress Bar can be enabled for only specific post types of your website.', 'softlab' ),
	],
	'custom-fonts'    => [
		'title'       => __( 'Custom Fonts', 'softlab' ),
		'description' => __( 'You can set any custom Google Fonts for the Reader Mode view. Users also can set their own custom fonts for the
        Reader Mode view.', 'softlab' ),
	],
	'font-size'       => [
		'title'       => __( 'Custom Font Size', 'softlab' ),
		'description' => __( 'You can set any custom font size for the Reader Mode view. Users also customized the font size in the Reader
        Mode view.', 'softlab' ),
	],
	'print-optimized' => [
		'title'       => __( 'Print Optimized', 'softlab' ),
		'description' => __( 'Reader Mode is print optimized for the users to print the post/ article.', 'softlab' ),
	],
	'customizable'    => [
		'title'       => __( 'Fully customizable', 'softlab' ),
		'description' => __( 'Reader Mode is fully customizable for both the admins & users. Admin can easily customize the various buttons
        with different layout and colors and also customize the Reader Mode layout. ', 'softlab' ),
	],
	'fullscreen'      => [
		'title'       => __( 'Fullscreen Mode', 'softlab' ),
		'description' => __( 'Fullscreen reading mode is available in the reader mode for the users to read the post/ article in fullscreen. As the full-screen mode is readers friendly with fewer distractions, that\'s the reason Fullscreen mode is such useful.', 'softlab' ),
	],
	'auto-scroll'     => [
		'title'       => __( 'Auto-scroll', 'softlab' ),
		'description' => __( 'Auto scroll feature is available in the reader mode for the users to scroll the post/ article automatically while they
        are reading the post/ article.', 'softlab' ),
	],
	'toc'             => [
		'title'       => __( 'Table of contents', 'softlab' ),
		'description' => __( 'Table of contents feature is available in the reader mode for the users to navigate to the specific section of
        the post/ article.', 'softlab' ),
	],
	'link-list'       => [
		'title'       => __( 'Link List', 'softlab' ),
		'description' => __( 'All the links in the post/ article will be listed in the reader mode for the users to navigate to the specific
        link in the post/ article.', 'softlab' ),
	],
	'custom-css'      => [
		'title'       => __( 'Custom CSS', 'softlab' ),
		'description' => __( 'Reader mode layout can be customized by using the custom CSS.', 'softlab' ),
	],

];

?>

<section id="ex-feat">

    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="section-title">
                    <h2>More Powerful Features</h2>
                    <p>More powerful features to enhance your website readability and accessibility.</p>
                </div>
            </div>
        </div>

        <div class="row">
			<?php foreach ( $features as $key => $feature ) { ?>
                <div class="col-lg-4 col-md-6">
                    <div class="ex-item text-center">
                        <div class="item-logo">
                            <img class="img-fluid"
                                 src="<?php echo get_theme_file_uri() ?>/assets/images/reader-mode/home/ex-feature/<?php echo $key; ?>.png"
                                 alt="<?php echo $feature['title']; ?>">
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