<?php

$ex_features = [
    'address' => [
        'title'       => 'Address',
        'description' => 'Adds a text field for entering addresses while submitting the form',
        'image'       => get_template_directory_uri() . '/assets/images/cf7-extended/ex-features/address.png',
    ],
    'math-captcha'  => [
        'title'       => 'Math Captcha',
        'description' => 'Integrates a dynamic math challenge to prevent spam during form submission',
        'image'       => get_template_directory_uri() . '/assets/images/cf7-extended/ex-features/math-captcha.png',
    ],

    'dynamic-text' => [
        'title'       => 'Dynamic Text',
        'description' => 'Retrieves and displays dynamic data from the website in forms (useful for hidden fields)',
        'image'       => get_template_directory_uri() . '/assets/images/cf7-extended/ex-features/dynamic-text.png',
    ],

    'submission-id'         => [
        'title'       => 'Submission ID',
        'description' => 'Assigns an input field to enter a unique ID to each form submission for tracking',
        'image'       => get_template_directory_uri() . '/assets/images/cf7-extended/ex-features/submission-id.png',
    ],
    'country-list'         => [
        'title'       => 'Country List',
        'description' => 'Provides a dropdown field listing countries for easy selection',
        'image'       => get_template_directory_uri() . '/assets/images/cf7-extended/ex-features/country-list.png',
    ],

    'phone' => [
        'title'       => 'Phone',
        'description' => 'Creates a field specifically for phone number entries',
        'image'       => get_template_directory_uri() . '/assets/images/cf7-extended/ex-features/phone.png',
    ],

    'date-time' => [
        'title'       => 'Date and Time',
        'description' => 'Allows users to input both date and time in a single field',
        'image'       => get_template_directory_uri() . '/assets/images/cf7-extended/ex-features/date-time.png',
    ],

    'range-slider' => [
        'title'       => 'Range Slider',
        'description' => 'Adds a slider for selecting a range of values, enhancing user interaction',
        'image'       => get_template_directory_uri() . '/assets/images/cf7-extended/ex-features/range-slider.png',
    ],
    'star-rating'         => [
        'title'       => 'Star Rating',
        'description' => 'Incorporates a field for users to leave a star rating',
        'image'       => get_template_directory_uri() . '/assets/images/cf7-extended/ex-features/star-rating.png',
    ],
    'google-drive-upload'         => [
        'title'       => 'Google Drive Upload',
        'description' => 'Creates a file upload field directly to Google Drive via the form',
        'image'       => get_template_directory_uri() . '/assets/images/cf7-extended/ex-features/google-drive-upload.png',
    ],
    'honeypot'         => [
        'title'       => 'Honeypot',
        'description' => 'Implements a hidden field to help detect and block spam bots',
        'image'       => get_template_directory_uri() . '/assets/images/cf7-extended/ex-features/honeypot.png',
    ],
    'custom-html'         => [
        'title'       => 'Custom HTML',
        'description' => 'Implements a hidden field to help detect and block spam bots',
        'image'       => get_template_directory_uri() . '/assets/images/cf7-extended/ex-features/custom-html.png',
    ],
    'color-picker'         => [
        'title'       => 'Color Picker',
        'description' => 'Adds a tool for selecting colors, useful for forms needing color inputs',
        'image'       => get_template_directory_uri() . '/assets/images/cf7-extended/ex-features/color-picker.png',
    ],
    'repeater-fields'         => [
        'title'       => 'Repeater Fields',
        'description' => 'Enables users to duplicate any given form field as needed (allocated by admin)',
        'image'       => get_template_directory_uri() . '/assets/images/cf7-extended/ex-features/repeater-fields.png',
    ],
    'shortcode'         => [
        'title'       => 'Shortcode',
        'description' => 'Generates a shortcode to embed the form on different pages',
        'image'       => get_template_directory_uri() . '/assets/images/cf7-extended/ex-features/shortcode.png',
    ],
    'action-hook'         => [
        'title'       => 'Action Hook',
        'description' => 'Allows inclusion of additional content in the form using predefined hooks',
        'image'       => get_template_directory_uri() . '/assets/images/cf7-extended/ex-features/action-hook.png',
    ],
    'section-break'         => [
        'title'       => 'Section Break',
        'description' => 'Inserts a visual break in the form to separate sections',
        'image'       => get_template_directory_uri() . '/assets/images/cf7-extended/ex-features/section-break.png',
    ],

];

?>


<section id="ex-features">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 m-auto">
                <div class="feature-heading text-center">
                    <h2><?php _e('Capture Specialized Data with Next-level <span>Custom Fields</span>', 'softlab'); ?></h2>
                    <p><?php _e('Maximize efficiency in your data collection processes with Essential Addons for Contact Form 7 enhanced custom field options. Designed to capture detailed and specialized information effortlessly while submitting the form', 'softlab'); ?></p>
                </div>
            </div>
        </div>

        <div class="row">
            <?php foreach ($ex_features as $key => $ex_feature) { ?>
                <div class="col-md-4 col-md-3 feature-<?php echo $key; ?> ">
                    <div class="ex-features-item text-center">
                        <div class="ex-features-item-img">
                            <img class="img-fluid ex-logo" src="<?php echo $ex_feature['image']; ?>" alt="<?php echo $ex_feature['title']; ?>">
                        </div>
                        <span class="ex-subtitle" ><?php echo $ex_feature['title']; ?></span>
                        <p class="ex-description"><?php echo $ex_feature['description']; ?></p>

                    </div>
                </div>
            <?php } ?>
        </div>


    </div>
</section>