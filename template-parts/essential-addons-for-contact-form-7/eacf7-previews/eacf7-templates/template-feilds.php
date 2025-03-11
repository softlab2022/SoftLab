<?php
$sl_meta_field = get_post_meta(get_the_ID(), 'sl_ft_meta_fields', true) ?? [];
if (!empty($sl_meta_field)) {
    $attributes = shortcode_parse_atts(str_replace(['[', ']'], '', $sl_meta_field['shortcode']));
    $title = isset($attributes['title']) ? $attributes['title'] : '';
    $contact_form_7 = wpcf7_get_contact_form_by_title($title);

    if (!empty($contact_form_7)) {

        $form_raw = $contact_form_7->get_properties('form')['form'];

        // Define Pro features (update as needed)
        $pro_fields = ['mask_input', 'digital_signature', 'math_captcha', 'leads_info', 'rich_text', 'google_drive_upload', 'image_choice', 'shortcode', 'color_picker', 'eacf7_repeater', 'hook', 'product_dropdown', 'password', 'post_taxonomies', 'post_thumbnail', 'password', 'post_excerpt', 'post_content', 'post_title', 'booking_time', 'booking_date', 'step_start', 'step_end', 'save', 'password', 'password', 'password'];

        // Mapping of CF7 field types to user-friendly names
        $sl_meta_field_type_mapping = [
            'text' => 'Text Field',
            'email' => 'Email field',
            'textarea' => 'Textarea field',
            'submit' => 'Submit button',
            'file' => 'File',
            'date' => 'Date picker',
            'quiz' => 'Quiz field',
            'number' => 'Number field',
            'acceptance' => 'Acceptance field',
            'checkbox' => 'Checkbox field',
            'radio' => 'Radio buttons',
            'select' => 'Dropdown select',
            'mask_input' => 'Mask Input Field',
            'digital_signature' => 'Digital Signature Field',
            'file_upload' => 'File Upload Field',
            'conversational_start' => 'Conversational Field',
            'recaptcha' => 'Recaptcha Field',
            'hcaptcha' => 'Hcaptcha Field',
            'math_captcha' => 'Math Captcha Field',
            'cloudflare_turnstile' => 'Cloudflare Turnstile Field',
            'address' => 'Address Field',
            'dynamic_text' => 'Dynamic Text Field',
            'leads_info' => 'Leads Info Field',
            'submission_id' => 'Submission Id Field',
            'country_list' => 'Country List Field',
            'phone' => 'Phone Field',
            'date_time' => 'Date Time Field',
            'rating' => 'Star Rating Field',
            'rich_text' => 'Rich Text Editor Field',
            'image_upload' => 'Image Upload Field',
            'google_drive_upload' => 'Google Drive Upload Field',
            'image_choice' => 'Image Choice Field',
            'honeypot' => 'Honeypot Field',
            'color_picker' => 'Color Picker Field',
            'eacf7_repeater' => 'Repeater Field',
            'shortcode' => 'Shortcode Field',
            'hook' => 'Action Hook Field',
            'section_break' => 'Section Break Field',
            'product_dropdown' => 'WooCommerce Product Dropdown Field',
            'save' => 'Save Form Progress Field',
            'step_start' => 'Step Start Field',
            'step_end' => 'Step End Field',
            'booking_date' => 'Booking Date Field',
            'booking_time' => 'Booking Time Field',
            'eacf7' => 'EACF7 Row Field',
            'post_title' => 'Post Title Field',
            'post_excerpt' => 'Post Excerpt Field',
            'post_content' => 'Post Content Field',
            'post_thumbnail' => 'Post Thumbnail Field',
            'post_taxonomies' => 'Post Taxonomies Field',
            'password' => 'Password Field',
            'conditional' => 'Conditional Field',

        ];

        // Regular expression to match CF7 fields
        preg_match_all('/\[(\w+)[^\]]*\]/', $form_raw, $matches);

        // print_r( $sl_meta_field_type_mapping);


        // Extract field details
        $sl_meta_fields = [];
        foreach ($matches[1] as $type) {
            $clean_type = trim(str_replace('*', '', $type));
            // var_dump($clean_type);

            // echo $sl_meta_field_type_mapping[$clean_type];

            $title = $sl_meta_field_type_mapping[$clean_type] ?? ucfirst($clean_type) . ' field';

            $sl_meta_fields[$clean_type] = [
                'type'   => $clean_type,
                'title'  => $title,
                'is_pro' => in_array($clean_type, $pro_fields) ? 1 : 0,
            ];
        }

        $sl_meta_fields = array_values($sl_meta_fields);
    }
}

?>
<section class="template-feilds">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 m-auto">
                <div class="template-feilds-hero-content text-center">
                    <h3>Input Fields Used in this Template</h3>
                    <p>
                        Explore the advanced functionalities that extend Contact Form 7, enhancing your form capabilities and optimizing user interactions
                    </p>
                </div>
            </div>

        </div>

        <div class="rows">
            <?php
            if (! empty($sl_meta_fields)) {
                foreach ($sl_meta_fields as $key => $sl_meta_field) {
                    $title  = !empty($sl_meta_field['title']) ? sanitize_text_field($sl_meta_field['title']) : '';
                    $is_pro = $sl_meta_field['is_pro'] ? 'pro' : '';
                    $icon   = get_template_directory_uri() . '/assets/images/cf7-extended/preview/icons/' . $sl_meta_field['type'] . '.png';
                    $crown   = $is_pro ? '<img class="img-fluid pro-crown" src="' . get_template_directory_uri() . '/assets/images/cf7-extended/preview/pro.png' . '" alt="crown"/>' : '';
            ?>
                    <div class="span">
                        <?php
                        echo sprintf('<div class="feilds-items %1$s text-center"><img class="img-fluid" src="%3$s" alt="image"/> %2$s %4$s</div>', $is_pro, $title, $icon, $crown);
                        ?>

                    </div>
            <?php

                }
            }
            ?>
        </div>
    </div>
</section>



<section class="template_description-form">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 m-auto">
                <div class="template-feilds-hero-content text-center">
                    <h3>Feature of this Template</h3>
                    <p>
                        Here is a quick overview of the features of this template, highlighting its key functions and how they can help you automate your process.
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 m-auto">
                <!-- Job Responsibility -->
                <div class="template_description_main">
                    <?php
                    // $our_team_description = get_post_meta(get_the_ID(), 'softlab_custom_template_description', true);

                    // if (!empty($our_team_description)) {
                    //     // Display each line as a list item
                    //     echo '<ul>';
                    //     foreach (explode("\n", $our_team_description) as $line) {
                    //         echo '<li>' . wpautop($line) . '</li>';
                    //     }
                    //     echo '</ul>';
                    // } else {
                    //     echo 'no list found';
                    // }
                    $our_team_description = get_post_meta(get_the_ID(), 'softlab_custom_template_description', true);

                    if (!empty($our_team_description)) {
                        // Convert the content into an array of lines
                        $lines = explode("\n", $our_team_description);

                        echo '<ul>';
                        foreach ($lines as $line) {
                            $trimmed_line = trim($line);
                            if (!empty($trimmed_line)) {
                                echo '<li>' . wp_kses_post($trimmed_line) . '</li>'; // Preserve formatting but avoid double <p> tags
                            }
                        }
                        echo '</ul>';
                    } else {
                        echo '<p>No features listed.</p>';
                    }
                    ?>



                </div>
            </div>
        </div>

    </div>
</section>

<section class="related-form">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="template-feilds-hero-content text-center">
                    <h3>Related Form</h3>
                    <p>
                        Explore additional related forms to enhance the Contact Form 7 user experience using different forms.
                    </p>
                </div>
            </div>
        </div>

        <?php
        $post_id  = get_the_ID();
        $taxonomy = 'form_category';

        $args = array(
            'post_type'      => 'form',
            'posts_per_page' => 4,
            'post__not_in'   => array($post_id),
        );

        $terms = wp_get_post_terms($post_id, $taxonomy, array('fields' => 'slugs'));

        if (!empty($terms)) {
            $args['tax_query'] = array(
                array(
                    'taxonomy' => $taxonomy,
                    'field'    => 'slug',
                    'terms'    => $terms,
                ),
            );
        }

        $query = new WP_Query($args);
        ?>
        <div class="row">
            <?php if ($query->have_posts()) : ?>
                <?php while ($query->have_posts()) : $query->the_post(); ?>
                    <div class="col-lg-3 col-md-6">
                        <div class="main-item">
                            <div class="item-img">
                                <img class="img-fluid" src="<?php echo esc_url(get_the_post_thumbnail_url() ?: 'https://via.placeholder.com/150'); ?>" alt="<?php the_title_attribute(); ?>">
                                <div class="item-button">
                                    <div class="buttons-group">
                                        <a href="<?php the_permalink(); ?>" class="button1" target="_blank"><i class="fa-solid fa-eye"></i> View Demo</a>
                                    </div>
                                </div>
                            </div>
                            <div class="item-content">
                                <h4><?php the_title(); ?></h4>
                                <p><?php the_excerpt(); ?></p>
                            </div>
                        </div>
                    </div>
                <?php endwhile; ?>
            <?php endif; ?>
        </div>
        <?php wp_reset_postdata(); ?>
    </div>
</section>