<?php

$single_features = [
    'toggle-button' => [
        'name'       => __('Toggle Button Shortcode', 'softlab'),
        'description' => __('You can display the dark mode toggle button anywhere on your website using the [dracula_toggle] shortcode', 'softlab'),
    ],
    'default' => [
        'name'       => __('Default Dark Mode', 'softlab'),
        'description' => __('Dracula Dark Mode lets you set the dark mode as your websites default theme. Thus, first-time visitors will experience the site in dark mode', 'softlab'),
    ],
    'performance' => [
        'name'       => __('Performance', 'softlab'),
        'description' => __('The Performance Mode feature enhances websites loading speed by deferring script loading, reducing initial page load times', 'softlab'),
    ],
    'dashbord' => [
        'name'       => __('Dashboard Dark Mode For Specific User Roles', 'softlab'),
        'description' => __('You can allow other users to use the dark mode color scheme on their backend admin dashboard by selectively certain user roles such as: Administrator, Editor, Author etc', 'softlab'),
    ],
    'custom-button' => [
        'name'       => __('Custom Toggle Button Size', 'softlab'),
        'description' => __('Dracula Dark Mode allows you to customize the dark mode toggle button size as small, normal, large or even in a custom width and height of the button', 'softlab'),
    ],
    'custom-button-position' => [
        'name'       => __('Custom Toggle Button Position', 'softlab'),
        'description' => __('You can also set the custom position for the dark mode toggle button as on the left, right, or even can place the toggle button in a specific location on the site for easy access', 'softlab'),
    ],
    'typography' => [
        'name'       => __('Dark Mode Based Typography', 'softlab'),
        'description' => __('Dracula Dark Mode allows you to set a different font family with a customized font size when dark mode is enabled to improve readability and legibility of their website', 'softlab'),
    ],
    'exclude' => [
        'name'       => __('Include Elements, Pages & Posts', 'softlab'),
        'description' => __('Include any elements, pages or posts to be turned into dark mode. This can be handy if you want to include specific elements, pages or posts to be enabled in dark mode', 'softlab'),
    ],
    'pages-posts' => [
        'name'       => __('Excludes Elements, Pages & Posts', 'softlab'),
        'description' => __('Exclude any elements, pages or posts not to be turned into dark mode. This can be handy if you want to exclude specific elements, pages or posts not to be turned in dark mode', 'softlab'),
    ],
    'custom-css' => [
        'name'       => __('Custom CSS Support', 'softlab'),
        'description' => __('Dracula Dark Mode allows you to add your custom CSS code to customize the appearance of the website both in the light and dark mode', 'softlab'),
    ],
    // 'cookie' => [
    //     'name'       => __('Dark Mode Cookie', 'softlab'),
    //     'description' => __('The radio station player can display the currently playing song title.', 'softlab'),
    // ],
    'wide' => [
        'name'       => __('Wide Page Builder Compatibility', 'softlab'),
        'description' => __('Dracula Dark Mode is compatible with wide number of page builders. Ex: Classic Editor, Guttenberg, Elementor, and many others. This compatibility gives freedom to use anywhere users and website owners wants', 'softlab'),
    ],
    'export-import' => [
        'name'       => __('Export, Import, Reset Settings', 'softlab'),
        'description' => __('Dracula Dark Mode have the option to export, import or reset the whole settings and further optimize them if necessary', 'softlab'),
    ],
    'time-based' => [
        'name'       => __('Time based dark mode', 'softlab'),
        'description' => __('Dracula Dark Mode allows to schedule the dark mode based on the time of the day.', 'softlab'),
    ],
    'url-parameter' => [
        'name'       => __('URL  Parameter', 'softlab'),
        'description' => __('Dracula Dark Mode allows you to enable/ disable dark mode by adding the darkmode and lightmode parameter to the website URL', 'softlab'),
    ],
    'draggable-switch' => [
        'name'       => __('Draggable Floating Switch', 'softlab'),
        'description' => __('You can also enable the draggable switch option to allow users to drag the floating dark mode toggle button to the desired position on the screen', 'softlab'),
    ],
    'keyboard-shortcut' => [
        'name'       => __('Keyboard Shortcut', 'softlab'),
        'description' => __('Dracula Dark Mode allows users to switch between light and dark mode using the keyboard shortcut `(Ctrl + Alt + D)`.', 'softlab'),
    ],
    'gutenberg-toggle-switch-block' => [
        'name'       => __('Gutenberg Dark Mode Toggle Switch Block', 'softlab'),
        'description' => __('Embed a dark mode switch directly within the Gutenberg editor for easy reader access', 'softlab'),
    ],
    'elementor-toggle-switch-block' => [
        'name'       => __('Elementor Dark Mode Toggle Switch Block', 'softlab'),
        'description' => __('Add a dark mode toggle to your Elementor designs effortlessly.', 'softlab'),
    ],
    'dark-mode-page-transition-animation' => [
        'name'       => __('Dark Mode Page Transition Animation', 'softlab'),
        'description' => __('Smooth and stylish transitions when switching between dark and light modes.', 'softlab'),
    ],
    'toggle-switch-attention-effect' => [
        'name'       => __('Toggle Switch Attention Effect', 'softlab'),
        'description' => __('Eye-catching effects on the toggle, ensuring users notice the dark mode option.', 'softlab'),
    ],
    

];

?>

<section id="single-feature">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 m-auto">
                <div class="section-head text-center">
                    <h2>Never Miss Any Single  Feature</h2>
                    <p>Let's explore which features are absolute you can add <br> to stand out and give even more value</p>
                </div>
            </div>
        </div>

        <div class="row">
            <?php foreach ($single_features as $key => $single_feature) { ?>
                <div class="col-lg-3 col-md-6 m-auto">
                    <div class="feature-item text-center">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/single-feature/<?php echo $key; ?>.png" alt="<?php echo $single_feature['name']; ?>">
                        <h3><?php echo $single_feature['name']; ?></h3>
                        <p><?php echo $single_feature['description']; ?></p>
                    </div>
                </div>
            <?php } ?>
             
            
        </div>

    </div>
</section>