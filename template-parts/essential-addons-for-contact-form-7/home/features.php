<?php

$features = [
    'database-entries' => [
        'title'       => 'Database Entries',
        'description' => 'Captures all form submissions and stores them in the WordPress admin area. Admins can view and manage these entries easily. It\'s great for keeping track of all submissions.',
    ],
    'multistep-form'  => [
        'title'       => 'Multistep Form',
        'description' => 'Break down complex forms into smaller, manageable steps. This makes filling out long forms less daunting and more user-friendly. Ideal for detailed surveys and applications.',
    ],

    'conditional-logic' => [
        'title'       => 'Conditional Logic',
        'description' => 'Shows or hides form fields based on what the user selects. This keeps forms concise and relevant to each user. It works with various fields like dropdowns and sliders.',
    ],

    'repeater-fields'         => [
        'title'       => 'Repeater Fields',
        'description' => 'Allows users to duplicate fields as needed, such as text boxes, files, or checkboxes. This is helpful for forms requiring multiple similar entries.',
    ],
    'columns-layout' => [
        'title'       => 'Columns layout',
        'description' => 'Enables to manually customize the layout of forms into columns. An effective way to create forms with multiple columns, organizing information neatly.',
    ],

    'conversational-forms' => [
        'title'       => 'Conversational Forms',
        'description' => 'Design forms to feel like a conversation, making interactions engaging and natural. These forms increase user engagement higher than ever.',
    ],

    'form-styler' => [
        'title'       => 'Form Styler',
        'description' => 'Provides tools for customizing the look of your forms without needing CSS skills. You can change colors, adjust margins, and style buttons and fonts easily.',
    ],


];

?>


<section id="cf7-features">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 m-auto">
                <div class="feature-heading text-center">
                    <h2>Never Miss Top-notch Powerful <span>Features</span></h2>
                    <p>Explore the advanced functionalities that extend Contact Form 7, enhancing your form capabilities and optimizing user interactions</p>
                </div>
            </div>
        </div>

        <?php
        $i = 0;
        foreach ($features as $key => $feature) {
            $is_odd = $i % 2 == 0;

            $is_integration  = in_array($key, ['page-builder']);

        ?>
            <div class="row feature-item align-items-center feature-<?php echo $key; ?> <?php echo !$is_odd ? '' : 'flex-row-reverse' ?>">

                <div class="col-md-5">
                    <div class="feature-item-img feature-item-img-dextop <?php echo $is_odd ? 'justify-content-start' : 'justify-content-end'; ?>">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/features/<?php echo $key; ?>-illustration.png" alt="<?php echo $feature['title']; ?>">
                    </div>
                </div>

                <div class="col-md-7">
                    <div class="feature-item-content feature-item-con-<?php echo $key; ?> text-center text-md-start">

                        <?php if (!$is_integration) { ?>
                            <img class="img-fluid <?php echo $key; ?>-icon feature-icon" src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/features/<?php echo $key; ?>-icon.png" alt="<?php echo $feature['title']; ?>">
                        <?php } ?>

                        <h3 class="feature-title"><?php echo $feature['title']; ?></h3>
                        <?php if (wp_is_mobile()) { ?>
                            <div class="feature-item-img-mobile">
                                <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/features/<?php echo $key; ?>-illustration.png" alt="<?php echo $feature['title']; ?>">
                            </div>
                        <?php } ?>
                        <p class="feature-description"><?php echo $feature['description']; ?></p>

                        

                    </div>
                </div>
            </div>
        <?php
            $i++;
        } ?>
        <div class="row">
            <div class=" col-md-3 m-auto">
                <div class="integration-btn">
                    <a href="/essential-addons-for-contact-form-7-integrations/" class="feature-integration-btn"><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/integrated-icon.png" alt="integrated-icon">View All Integrations</a>
                </div>
            </div>
        </div>

    </div>
</section>