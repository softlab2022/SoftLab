<?php

$features = [

    'multiple-color-generator-algorithms' => [
        'title'       => '<span class="multiple-color-generator-algorithms">Multiple Color Generator Algorithms</span>',
        'description' => 'Dracula offers two dark mode color generation algorithms : Dynamic and Static.</br> Dynamic automatically adapts to your website’s main color for a personalized dark mode, and Static uses a fixed formula with customizable options for a consistent and balanced dark mode look.',
    ],
    'reading-mode' => [
        'title'       => '<span class="multiple-color-generator-algorithms">Reading Mode </span>',
        'description' => 'Reading Mode enhances user experience by providing a distraction-free environment, removing clutter from articles and posts for improved focus. It prioritizes readability, accessibility, and ease of navigation, making it an invaluable tool for engaging and effortless content interaction.',
    ],
    'frontend-dark-mode' => [
        'title'       => 'Frontend <span class="dark-text">Dark Mode</span>',
        'description' => 'Frontend dark mode refers to the implementation of a dark color scheme on a website frontend while users interact. This feature is highly applicable for users when they spend a lot of time on your website’s front end.',
    ],
    'admin-dashbord-dark-mode'  => [
        'title'       => 'Admin Dashboard <span class="dark-text">Dark Mode</span>',
        'description' => 'Dracula Dark Mode allows site admins to enable and use dark mode in their admin dashboard. This provides a consistent look and feel throughout the site, and can also help to reduce eye strain when working in the admin dashboard.',
    ],
    'dynamic-presets-custom-color' => [
        'title'       => 'Dynamic Presets & Custom Color',
        'description' => 'Dracula Dark Mode use a smart dynamic algorithm to generate the dark mode color scheme automatically for your website without any complicated configuration. The plugin also provides 8+ popular dark mode color presets and the ability to select your own color scheme.',
    ],
    'toggle-button-style' => [
        'title'       => '14+ Toggle Button Style',
        'description' => 'Dracula Dark Mode offers a variety of toggle button styles for switching between light and dark mode. You can choose from 14+ different toggle button styles, which can be easily customized to match the website\'s design and branding. This allows users to give a unique look and feel to the Dark mode toggle button and enhance the overall user experience.',
    ],
    'custom-toggle-button-builder'         => [
        'title'       => 'Custom Toggle Button Builder',
        'description' => 'You don’t have to stick with the toggle buttons we designed for you. You always have the freedom to redesign whatever you are looking for. By using the Toggle Builder feature you can create a custom toggle button for dark mode',
    ],
    'live-edit-dark-mode' => [
        'title'       => 'Live Edit <span class="dark-text">Dark Mode</span>',
        'description' => 'Dark Mode plugin features a live edit widget that allows users to customize the appearance of their dark mode theme in real-time. It allows users to customize a wide range of settings, including the colors customization, toggle button customization, typography settings, exclude elements, image and video replacements, and custom CSS can be customized. This feature can be handy in terms of saving you valuable time than editing on the backend.',
    ],

    'page-wish-dark-mode' => [
        'title'       => 'Page-Specific <span class="dark-text">Dark Mode</span> Appearance',
        'description' => 'Dracula Dark Mode allows you to set and customize every page of your website separately with different dark mode color schemes, switch variations, typography styles, and many others settings. This gives you the flexibility and fully customize controls to present every page of your website more perfectly in dark mode and create a unique experience for the visitors.',
    ],
    'dark-mode-usage-analytics' => [
        'title'       => '<span class="dark-text">Dark Mode</span> Usage Analytics',
        'description' => 'Dracula Dark Mode provides a detailed usage analytics report that allows you to track the number of users who use the dark mode, how many times the dark mode is enabled/ disabled, and many other useful information.',
    ],
    'color-adjustments' => [
        'title'       => 'Color Adjustments',
        'description' => 'Dracula Dark Mode plugin features advanced color adjustment options for its dark mode theme, including brightness, contrast, sepia and grayscale adjustments. These options provide users with greater control over the appearance of their website in dark mode, allowing them to fine-tune the colors to their liking. This can be especially useful for users with visual impairments or those who prefer a specific aesthetic for their website in dark mode.',
    ],
    'auto-match-os-theme' => [
        'title'       => ' Auto Match OS Theme',
        'description' => 'Dracula Dark Mode automatically detect user’s device OS theme and automatically enable website’s dark mode to match the dark mode setting on the user’s device. This allows for a seamless experience for users who prefer to use dark mode on their device.',
    ],
    'floating-dark-mode' => [
        'title'       => ' Floating <span class="dark-text">Dark Mode</span> Toggle Button',
        'description' => 'Dracula Dark Mode features a floating dark mode toggle button with 14+ attractive styles that allows users to easily switch between the light and dark modes of a website. The floating button is designed to provide a convenient and user-friendly way to access the dark mode feature, regardless of where the user is on the website.',
    ],
    'display-toggle-button-menu' => [
        'title'       => ' Display Toggle Button in Menu',
        'description' => 'Dracula Dark Mode also allows to display the toggle button in any of your website navigation menu for an easy interacting & time-consuming dark mode enabling or disabling option for visitors. You can also control the position of the toggle button at the start or end of the menu so that users can easily enable dark mode from the menu.',
    ],
    'imageandvideo' => [
        'title'       => ' Image & Video Replacement',
        'description' => 'Sometimes all the images & videos don’t look better in dark mode and you might want to replace them in dark mode. Dracula Dark Mode lets you replace the light-mode images and videos with different images and videos in dark mode.',
    ],
    'gutenberg' => [
        'title'       => 'Gutenberg & Classic Editor Compatibility',
        'description' => 'Dracula Dark Mode is designed to be compatible with both the classic editor and the block editor. This can be a great way to make the editing experience more comfortable for users, especially for those who spend a lot of time editing and creating content in WordPress.',
    ],
    'custom-css' => [
        'title'       => ' Custom CSS',
        'description' => 'Dracula Dark Mode allows you to add your Custom CSS code to customize the appearance of the website when it is in dark mode.',
    ],

];

?>

<section id="feature">
    <div class="container">
        <?php
        $i = 0;
        foreach ($features as $key => $feature) {
            $is_odd = $i % 2 == 0;

            $is_integration  = in_array($key, ['frontend-dark-mode', 'admin-dashbord-dark-mode', 'dynamic-presets-custom-color', 'live-edit-dark-mode', 'toggle-button-style', 'custom-toggle-button-builder', 'page-specific-dark-mode', 'page-wish-dark-mode', 'dark-mode-usage-analytics', 'color-adjustments', 'auto-match-os-theme', 'floating-dark-mode', 'display-toggle-button-menu', 'imageandvideos', 'gutenberg', 'custom-css']);

            $is_integrations = in_array($key, ['reading-mode', 'multiple-color-generator-algorithms']);
        ?>
            <div class="row feature-items dark-mode align-items-center <?php echo $key; ?> <?php echo ! $is_odd ? 'flex-row-reverse' : '' ?>">

                <div class="col-lg-6 col-md-6 more-feat-img">
                    <div class="feature-item-img d-flex  <?php echo $is_odd ? 'justify-content-start' : 'justify-content-end'; ?>">
                        <img class="img-fluid"
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/feature/<?php echo $key; ?>-illustration.png"
                            alt="">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="feature-content">

                        <?php if ($is_integration) { ?>
                            <img class="img-fluid <?php echo $key; ?>-icon feature-icon" src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/feature/<?php echo $key; ?>-icon.png" alt="<?php echo $key; ?>">
                        <?php } ?>

                        <?php if ($is_integrations) { ?>
                            <div class="feature-icon-new">
                                <img class="img-fluid feature-icon" src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/feature/<?php echo $key; ?>-icon.png" alt="">
                                <span class="new-text">New⚡</span>
                            </div>
                        <?php } ?>
                        <h3><?php echo $feature['title']; ?></h3>
                        <?php if (wp_is_mobile()) { ?>
                            <div class="more-feat-img-mobile">
                                <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/feature/<?php echo $key; ?>-illustration.png" alt="">
                            </div>
                        <?php } ?>
                        <p><?php echo $feature['description']; ?></p>
                    </div>
                </div>
            </div>
        <?php
            $i++;
        } ?>
    </div>
</section>