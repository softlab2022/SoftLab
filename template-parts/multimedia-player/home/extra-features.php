<?php
$ex_features = [

    'shortcode-generator' => [
        'title'       => 'Shortcode Generator',
        'description' => 'Easily generate custom shortcodes to embed audio, video, or podcast players anywhere on your site with zero coding skills.',
    ],
    'player-duplicator' => [
        'title'       => 'Player Duplicator',
        'description' => 'Quickly duplicate your media players with customized settings, making it easy to create multiple instances in no time.',
    ],
    'add-unlimited-players' => [
        'title'       => 'Add Unlimited Players',
        'description' => 'Add as many players as you need to seamlessly integrate unlimited audio, video, and podcast players across your site.',
    ],
    'multiple-instances' => [
        'title'       => 'Multiple Instances',
        'description' => 'Run multiple instances of the player simultaneously, each with unique settings and media types.',
    ],
    'advanced-player-controls' => [
        'title'       => 'Advanced Player Controls',
        'description' => 'Take full control with advanced playback options, including speed, volume, looping, and more for a personalized media experience.',
    ],
    'color-customization' => [
        'title'       => 'Color Customization',
        'description' => 'Fully personalize your player’s colors to match your brand’s style and create a visually cohesive experience.',
    ],
    'track-metadata-customization' => [
        'title'       => 'Track Metadata Customization',
        'description' => 'Easily edit and display custom metadata for each track, including title, artist, album, and more. Tailor how track details appear to create a polished, professional listening experience.',
    ],
    'typography-customization' => [
        'title'       => 'Typography Customization',
        'description' => 'Fine-tune every detail of your player’s text with customizable typography settings. Choose your preferred fonts, sizes, weights, and spacing to ensure visual harmony with your website’s',
    ],
    'autoplay' => [
        'title'       => 'Autoplay',
        'description' => 'Enable autoplay for seamless playback as soon as the page loads. Whether you’re showcasing a featured track or podcast episode, autoplay helps engage visitors instantly.',
    ],
    'custom-css' => [
        'title'       => 'Custom CSS',
        'description' => 'Apply custom CSS to fine-tune the look and feel of your player, giving you full control over its design.',
    ],
    'tools' => [
        'title'       => 'Tools',
        'description' => 'Quickly manage your player settings with built-in options to auto-save changes, export or import configurations, and reset everything to default when needed. Simple, fast, and built for everyday use.',
    ],
    'statistics' => [
        'title'       => 'Statistics',
        'description' => 'Track player performance with detailed statistics on usage, engagement, and playback data.',
    ],
    'classic-widget' => [
        'title'       => 'Classic Widget',
        'description' => 'Still using the Classic WordPress Widgets interface? No problem. Add and configure your media player with ease using our Classic Widget, offering full functionality without the need to switch editors.',
    ],
    'gutenberg-block' => [
        'title'       => 'Gutenberg Block',
        'description' => 'Easily add and manage audio or video using the Gutenberg block editor. No need for shortcodes or extra setup—just choose the media block, customize your player, and you\'re ready to go.',
    ],
    'elementor-widget' => [
        'title'       => 'Elementor Widget',
        'description' => 'Designed for effortless integration with Elementor. Simply drag the media player widget into your layout and start customizing. Adjust styles, control playback, and place your audio or video exactly where you want it.',
    ],

];
?>

<section id="ex-feature">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="ex-feature-head text-center">
                    <h1>Other <span>Features</span></h1>
                    <p>Packed with extra features and enhancements to fine-tune your media experience.</p>
                </div>
            </div>
        </div>

        <div class="row">
             <?php foreach ($ex_features as $key => $ex_feature) { ?>
            <div class="col-lg-4 col-md-6">
                <div class="ex-feature-item text-center">
                    <div class="ex-logo">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/multimedia-player/ex-feature/<?php echo $key; ?>.png" alt="icon1">
                    </div>
                    <div class="ex-text">
                        <h4><?php echo $ex_feature['title']; ?></h4>
                            <p><?php echo $ex_feature['description']; ?></p>
                    </div>
                </div>
            </div>
             <?php } ?>

        </div>
        
    </div>
</section>