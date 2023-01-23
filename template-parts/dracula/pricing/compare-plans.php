<?php

$features = [
	'frontend' => [
		'title'       => 'Frontend Dark Mode',
		'isFree'       => true,
	],
	'performance' => [
		'title'       => 'Performance Mode',
		'isPro'       => true,
	],
	'toggle' => [
		'title'       => 'Custom Toggle Button Builder',
		'isPro'       => true,
	],
    'custom-toggle-switch' => [
		'title'       => 'Custom Toggle Switch Positions',
		'isPro'       => true,
	],
    'custom-position' => [
		'title'       => 'Custom position',
		'isPro'       => true,
	],
    'darkmode-animation' => [
		'title'       => 'Dark mode Toggle Animation',
		'isPro'       => true,
	],
    'custom-text-color' => [
		'title'       => 'Custom Switch Text & Color',
		'isPro'       => true,
	],
    'ready-mode' => [
		'title'       => 'Ready-made color schema',
		'isFree'       => true,
	],
    'color-adjust' => [
		'title'       => 'Color Adjustment',
		'isPro'       => true,
	],
    'dynamic-colors' => [
		'title'       => 'Dynamic Color',
		'isPro'       => true,
	],
    'custom-color' => [
		'title'       => 'Custom Colors',
		'isPro'       => true,
	],
    'presets' => [
		'title'       => 'Presets',
		'isPro'       => true,
	],
    'typography' => [
		'title'       => 'Dark Mode Based Typography',
		'isPro'       => true,
	],
    'background-image' => [
		'title'       => 'Darken Background Images',
		'isFree'       => true,
	],
    'low-brightness' => [
		'title'       => 'Low Brightness Images',
		'isFree'       => true,
	],
    'grayscale' => [
		'title'       => 'Grayscale Images',
		'isFree'       => true,
	],
    'invert' => [
		'title'       => 'Invert Images',
		'isFree'       => true,
	],
    'replacement' => [
		'title'       => 'Image Replacement',
		'isPro'       => true,
	],
    'logo-suport' => [
		'title'       => 'Dark mode logo support',
		'isFree'       => true,
	],
    'image-support' => [
		'title'       => 'Dark mode based Image Support',
		'isPro'       => true,
	],
    'video-support' => [
		'title'       => 'Dark mode based Video Support',
		'isPro'       => true,
	],
    'popular-page' => [
		'title'       => 'Popular page builder support',
		'isFree'       => true,
	],
    'classic-editor' => [
		'title'       => 'Classic Editor Compatibility',
		'isFree'       => true,
	],
    'gutenberg' => [
		'title'       => 'Gutenberg Editor Compatibility',
		'isFree'       => true,
	],
    'woocommerce' => [
		'title'       => 'WooCommerce Compatibility',
		'isFree'       => true,
	],
    'wide-theme' => [
		'title'       => 'Wide Themes & Plugins Compatibility',
		'isFree'       => true,
	],
    'button-shortcode' => [
		'title'       => 'Toggle Button Shortcode',
		'isFree'       => true,
	],
    'keybord' => [
		'title'       => 'Keybord Shortcode',
		'isFree'       => true,
	],
    'custom-css' => [
		'title'       => 'Custom CSS Support',
		'isPro'       => true,
	],
    'include' => [
		'title'       => 'Include Elements, Pages & Posts',
		'isFree'       => true,
	],
    'exclude' => [
		'title'       => 'Excludes Elements, Pages & Posts',
		'isPro'       => true,
	],
    'export-import' => [
		'title'       => 'Export, Import, Reset Settings',
		'isFree'       => true,
	],
    'email-report' => [
		'title'       => 'Usage Analytics & Email Report',
		'isPro'       => true,
	],
    'works-all-devices' => [
		'title'       => 'Works on all devices',
		'isFree'       => true,
	],
];

?>


<section id="compare-plans">
    <div class="container">
        <div class="compare-main">
            <div class="row compare-header">

                <div class="col-lg-3 col-md-3 compare-header-item">
                    <div class="compare-item compare-heading">
                        <h5>Compare Plans</h5>
                        <p class="text-center">Feature List</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-3 compare-header-item">
                    <div class="compare-item starter-item">
                        <div class="compare-item-title">
                            <h5>Basic Plan</h5>
                        </div>
                        <div class="compare-item-btn">
                            <a href="#">Download Now</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-3 compare-header-item">
                    <div class="compare-item professional-item">
                        <div class="compare-item-title">
                            <h5>Professional Plan</h5>
                        </div>
                        <div class="compare-item-btn">
                            <a href="#" class=" buy-btn-pro">Purchase Now</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-3 compare-header-item">
                    <div class="compare-item elite-item">
                        <div class="compare-item-title">
                            <h5>Elite Plan</h5>
                        </div>
                        <div class="compare-item-btn">
                            <a href="#" class=" buy-btn-elite">Purchase Now</a>
                        </div>
                    </div>
                </div>
            </div>


            <?php

            foreach ( $features as $key => $feature ) {
                ?>
                <div class="row">
                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="item-content d-flex justify-content-start align-items-center">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri() .'/assets/images/dracula/home/compare/'.$key.'.png'; ?>" >
                            <h5><?php echo $feature['title']; ?></h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-md-2">
                        <div class="item text-center">
                            <?php echo isset( $feature['isFree'] ) ? '<i class="fa fa-check"></i>' : '<i class="fa fa-xmark"></i>'; ?>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-md-2">
                        <div class="item text-center">
	                        <?php echo isset( $feature['isPro'] ) || isset( $feature['isFree'] ) ? '<i class="fa fa-check"></i>' : '<i class="fa fa-xmark"></i>'; ?>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-md-2">
                        <div class="items text-center">
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                </div>
                <?php
            }

            ?>


            <div class="row compare-footer">

                <div class="col-lg-3 col-md-3 compare-footer-item">
                    <div class="compare-item compare-heading">
                        <h5>Let’s Get Started</h5>
                        <p>It’s time to use our dark mode solutions</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-3 compare-footer-item">
                    <div class="compare-item starter-item">
                        <div class="compare-item-btn">
                            <a href="#">Download Now</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-3 compare-footer-item">
                    <div class="professional-item compare-item">
                        <div class="compare-item-btn">
                            <a href="#" class=" buy-btn-pro">Purchase Now</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-3 compare-footer-item">
                    <div class="elite-item compare-item">
                        <div class="compare-item-btn">
                            <a href="#" class=" buy-btn-elite">Purchase Now</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</section>