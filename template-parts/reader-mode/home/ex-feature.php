<?php

$features = [
	'custom-button-text'       => [
		'title'       => __( 'Custom Button Text & Size', 'reader-mode' ),
		'description' => __( 'You can change the button text and size to match your theme.', 'reader-mode' ),
	],
	'multiple-display-options' => [
		'title'       => __( 'Multiple Display Options', 'reader-mode' ),
		'description' => __( 'The Reader mode button, Reading time, Translation button, Text to speech button, Reading progressbar can be
        displayed both in the General mode and Reader mode layout.', 'reader-mode' ),
	],

	'post-types'      => [
		'title'       => __( 'Specific Post Types', 'reader-mode' ),
		'description' => __( 'Reader mode can be enabled for only specific posts types.', 'reader-mode' ),
	],
	'custom-fonts'    => [
		'title'       => __( 'Custom Fonts', 'reader-mode' ),
		'description' => __( 'You can set any custom Google Fonts for the Reader Mode view. Users also can set their own custom fonts for the
        Reader Mode view.', 'reader-mode' ),
	],
	'font-size'       => [
		'title'       => __( 'Custom Font Size', 'reader-mode' ),
		'description' => __( 'You can set any custom font size for the Reader Mode view. Users also customized the font size in the Reader
        Mode view.', 'reader-mode' ),
	],
	'print-optimized' => [
		'title'       => __( 'Print Optimized', 'reader-mode' ),
		'description' => __( 'Reader Mode is print optimized for the users to print the post/ article.', 'reader-mode' ),
	],
	'customizable'    => [
		'title'       => __( 'Fully customizable', 'reader-mode' ),
		'description' => __( 'Reader Mode is fully customizable for both the admins & users. Admin can easily customize the various buttons
        with different layout and colors and also customize the Reader Mode layout. ', 'reader-mode' ),
	],
	'fullscreen'      => [
		'title'       => __( 'Fullscreen Mode', 'reader-mode' ),
		'description' => __( 'Fullscreen reading mode is available in the reader mode for the users to read the post/ article in fullscreen
        mode.', 'reader-mode' ),
	],
	'auto-scroll'     => [
		'title'       => __( 'Auto-scroll', 'reader-mode' ),
		'description' => __( 'Auto scroll feature is available in the reader mode for the users to scroll the post/ article automatically while they
        are reading the post/ article.', 'reader-mode' ),
	],
	'toc'             => [
		'title'       => __( 'Table of contents', 'reader-mode' ),
		'description' => __( 'Table of contents feature is available in the reader mode for the users to navigate to the specific section of
        the post/ article.', 'reader-mode' ),
	],
	'link-list'       => [
		'title'       => __( 'Link List', 'reader-mode' ),
		'description' => __( 'All the links in the post/ article will be listed in the reader mode for the users to navigate to the specific
        link in the post/ article.', 'reader-mode' ),
	],
	'custom-css'      => [
		'title'       => __( 'Custom CSS', 'reader-mode' ),
		'description' => __( 'Reader mode layout can be customized by using the custom CSS.', 'reader-mode' ),
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