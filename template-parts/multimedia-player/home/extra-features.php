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
    'custom-css' => [
        'title'       => 'Custom CSS',
        'description' => 'Apply custom CSS to fine-tune the look and feel of your player, giving you full control over its design.',
    ],
    'statistics' => [
        'title'       => 'Statistics',
        'description' => 'Track player performance with detailed statistics on usage, engagement, and playback data.',
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