<?php

/**
 * Summary of softlab_custom_post
 * @return void
 */
function softlab_custom_post()
{
    register_post_type('soft_job', array(
        'labels' => array(
            'name' => ('Jobs'),
            'singular_name' => ('Job'),
            'add_new' => ('Add new Job'),
            'add_new_item' => ('Add new Job'),
            'edit_item' => ('Edit Job'),
            'new_item' => ('New Job'),
            'view_item' => ('View Job'),
            'not_found' => ('Sorry you have no Job'),
        ),
        'menu_icon' => 'dashicons-admin-users',
        // 'menu_icon' => get_template_directory_uri() . '/theme-option/icon2.svg',
        'public' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => true,
        'menu_position' => 4,
        'has_archive' => true,
        'hierarchical' => true,
        'show_ui' => true,
        'capability_type' => 'post',
        'rewrite' => array('slug' => 'jobs'),
        'query_var' => true,
        'supports' => array('title', 'thumbnail'),
    ));
}
add_action('init', 'softlab_custom_post');



/**
 * Summary of softlab custom meta boxt metabox
 * @return void
 */
function softlab_custom_post_metabox()
{
    add_meta_box(
        'softlab_custom_post-page-id',
        'softlab page meta box',
        'wpl_softlab_custom_post_pages_function',
        'soft_job',
        'normal',
        'default'
    );
}

add_action('add_meta_boxes', 'softlab_custom_post_metabox');

/**
 * Summary of wpl_softlab_custom_post_pages_function
 * @param mixed $post
 * @return void
 */
function wpl_softlab_custom_post_pages_function($post)
{
    // Retrieve saved meta data for multiple fields
    $softlab_custom_post_meta_fields = get_post_meta($post->ID, 'softlab_custom_post_meta_fields', true);
    if (empty($softlab_custom_post_meta_fields)) {
        $softlab_custom_post_meta_fields = [['title' => '', 'description' => '', 'shortcode' => '', 'image' => '']];
    }

    echo '<div id="softlab_custom_post-metabox-container">';
    foreach ($softlab_custom_post_meta_fields as $index => $field) {
        // $field_number = $index + 1;
        echo '<div class="softlab_custom_post-metabox-fields">';
        // echo '<h3>Demo Fields <span>' . $field_number . '</span></h3>';
        // Image upload field
        echo '<br>';
        echo '<label for="softlab_custom_post_meta_field_image_' . $index . '">Icon: </label>';

        // Provide a default value for the 'image' key if it is not set
        $image_url = isset($field['image']) ? esc_attr($field['image']) : '';

        echo '<input type="hidden" id="softlab_custom_post_meta_field_image_' . $index . '" name="softlab_custom_post_meta_fields[' . $index . '][image]" value="' . $image_url . '">';
        echo '<img id="softlab_image_preview_' . $index . '" src="' . esc_url($image_url) . '" style="max-width: 200px; display: ' . (empty($image_url) ? 'none' : 'block') . ';" />';
        echo '<br>';
        echo '<div class="soft-metabox-fields-button">';
        echo '<button type="button" class="button s-upload-image softlab-upload-image" data-target="#softlab_custom_post_meta_field_image_' . $index . '" data-preview="#softlab_image_preview_' . $index . '">Upload Icon</button>';
        echo '<button type="button" class="button s-remove-image softlab-icon-remove-image" data-target="#softlab_custom_post_meta_field_image_' . $index . '" data-preview="#softlab_image_preview_' . $index . '" style="">Remove Icon</button>';
        echo '</div>';
        echo '<br>';
        //  Job Type field
        echo '<label for="softlab_custom_post_meta_field_' . $index . '">Job Type: </label>';
        echo '<input type="text" id="softlab_custom_post_meta_field_' . $index . '" name="softlab_custom_post_meta_fields[' . $index . '][title]" value="' . esc_attr($field['title']) . '">';
        //  Job description field
        echo '<br>';
        echo '<label for="softlab_custom_post_meta_field_description_' . $index . '">Job Description: </label>';
        echo '<input type="text" id="softlab_custom_post_meta_field_description_' . $index . '" name="softlab_custom_post_meta_fields[' . $index . '][description]" value="' . esc_attr($field['description']) . '">';
        //  shortcode field
        echo '<br>';
        echo '<label for="softlab_custom_post_meta_field_shortcode_' . $index . '">Form Shortcode: </label>';
        echo '<input type="text" id="softlab_custom_post_meta_field_shortcode_' . $index . '" name="softlab_custom_post_meta_fields[' . $index . '][shortcode]" value="' . esc_attr($field['shortcode']) . '">';



        echo '</div>';
    }
    echo '</div>';

    // Button group
    // echo '<div class="softlab_custom_post-button-group">';
    // echo '<button type="button" id="add-new-demo">Add New</button>';
    // echo '<button type="button" id="remove-new-demo">Remove</button>';
    // echo '</div>';

    // Image upload field

    //our team description field
    echo '<div class="softlab_custom_post-metabox-fields">';
    $image_url = get_post_meta($post->ID, 'softlab_image_about_image', true);
    wp_nonce_field('softlab_image_nonce', 'softlab_image_nonce_field'); // Security nonce

    echo '<div class="softlab_custom_post-metabox-fields">';
    echo '<input type="hidden" id="softlab_image_about_image_input" name="softlab_image_about_image" value="' . esc_attr($image_url) . '">';
    echo '<img id="softlab_image_about_image_preview" src="' . esc_url($image_url) . '" style="max-width: 200px; display: ' . (empty($image_url) ? 'none' : 'block') . ';" />';
    echo '<br>';
    echo '<div class="soft-metabox-fields-button">';
    echo '<button type="button" class="button s-upload-image softlab-about-upload-image" data-target="#softlab_image_about_image_input" data-preview="#softlab_image_about_image_preview">Upload Image</button>';
    // echo '<br>';
    echo '<button type="button" class="button s-remove-image softlab-remove-image" data-target="#softlab_image_about_image_input" data-preview="#softlab_image_about_image_preview" style="">Remove Image</button>';
    echo '</div>';
    echo '</div>';

    echo '<label for="softlab_custom_post_meta_field_our_team_description">Our Team Description: </label>';
    echo '<textarea rows="4" cols="50" id="softlab_custom_post_meta_field_our_team_description" name="softlab_custom_post_meta_field_our_team_description">';
    echo esc_textarea(get_post_meta($post->ID, 'softlab_custom_post_meta_field_our_team_description', true)); // Use the content inside textarea
    echo '</textarea>';
    echo '</div>';

    // Save our_team_about_title fields.
    echo '<div class="softlab_custom_post-metabox-fields">';
    echo '<h3>About Us</h3>';
    echo '<label for="softlab_custom_post_meta_field_our_team_about_title">About Title: </label>';
    echo '<input type="text" id="softlab_custom_post_meta_field_our_team_about_title" name="softlab_custom_post_meta_field_our_team_about_title" value="' . esc_attr(get_post_meta($post->ID, 'softlab_custom_post_meta_field_our_team_about_title', true)) . '">';

    echo '<label for="softlab_custom_post_meta_field_our_team_about_description">About Description: </label>';
    echo '<textarea rows="4" cols="50" id="softlab_custom_post_meta_field_our_team_about_description" name="softlab_custom_post_meta_field_our_team_about_description">';
    echo esc_textarea(get_post_meta($post->ID, 'softlab_custom_post_meta_field_our_team_about_description', true));
    echo '</textarea>';
    echo '</div>';

    // Save Job Responsibility fields.
    echo '<div class="softlab_custom_post-metabox-fields">';
    echo '<h3>Job Responsibility</h3>';
    echo '<label for="softlab_custom_job_responsibility_title">Job Responsibility Title: </label>';
    echo '<input type="text" id="softlab_custom_job_responsibility_title" name="softlab_custom_job_responsibility_title" value="' . esc_attr(get_post_meta($post->ID, 'softlab_custom_job_responsibility_title', true)) . '">';

    $value = get_post_meta($post->ID, 'softlab_custom_job_responsibility_description', true);
    echo '<label for="softlab_custom_job_responsibility_description">Job Responsibility Description:</label>';
    echo '<textarea rows="4" cols="50" id="softlab_custom_job_responsibility_description" name="softlab_custom_job_responsibility_description">';
    echo esc_textarea($value);
    echo '</textarea>';
    echo '</div>';
    // Save Job Requirements fields.
    echo '<div class="softlab_custom_post-metabox-fields">';
    echo '<h3>Job Requirements </h3>';
    echo '<label for="softlab_custom_job_requirements_title">Job Requirements Title: </label>';
    echo '<input type="text" id="softlab_custom_job_requirements_title" name="softlab_custom_job_requirements_title" value="' . esc_attr(get_post_meta($post->ID, 'softlab_custom_job_requirements_title', true)) . '">';

    $value = get_post_meta($post->ID, 'softlab_custom_job_requirements_description', true);
    echo '<label for="softlab_custom_job_requirements_description">Job Requirements Description:</label>';
    echo '<textarea rows="4" cols="50" id="softlab_custom_job_requirements_description" name="softlab_custom_job_requirements_description">';
    echo esc_textarea($value);
    echo '</textarea>';
    echo '</div>';
    // Save Job Good to Have  fields.
    echo '<div class="softlab_custom_post-metabox-fields">';
    echo '<h3>Job Good to Have </h3>';
    echo '<label for="softlab_custom_job_good_have_title">Job Good to Have Title: </label>';
    echo '<input type="text" id="softlab_custom_job_good_have_title" name="softlab_custom_job_good_have_title" value="' . esc_attr(get_post_meta($post->ID, 'softlab_custom_job_good_have_title', true)) . '">';

    $value = get_post_meta($post->ID, 'softlab_custom_job_good_have_description', true);
    echo '<label for="softlab_custom_job_good_have_description">Job Good to Have Description:</label>';
    echo '<textarea rows="4" cols="50" id="softlab_custom_job_good_have_description" name="softlab_custom_job_good_have_description">';
    echo esc_textarea($value);
    echo '</textarea>';
    echo '</div>';
    // Save Job Perks & Benefits  fields.
    echo '<div class="softlab_custom_post-metabox-fields">';
    echo '<h3>Job Perks & Benefits </h3>';
    echo '<label for="softlab_custom_job_perks_benefits_title">Job Perks & Benefits Title: </label>';
    echo '<input type="text" id="softlab_custom_job_perks_benefits_title" name="softlab_custom_job_perks_benefits_title" value="' . esc_attr(get_post_meta($post->ID, 'softlab_custom_job_perks_benefits_title', true)) . '">';

    $value = get_post_meta($post->ID, 'softlab_custom_job_perks_benefits_description', true);
    echo '<label for="softlab_custom_job_perks_benefits_description">Job Perks & Benefits Description:</label>';
    echo '<textarea rows="4" cols="50" id="softlab_custom_job_perks_benefits_description" name="softlab_custom_job_perks_benefits_description">';
    echo esc_textarea($value);
    echo '</textarea>';
    echo '</div>';

    // Save Our Statement our_statement fields.
    echo '<div class="softlab_custom_post-metabox-fields">';
    echo '<h3>Our Statement</h3>';
    echo '<label for="softlab_custom_post_meta_field_our_statement_title">Our Statement Title: </label>';
    echo '<input type="text" id="softlab_custom_post_meta_field_our_statement_title" name="softlab_custom_post_meta_field_our_statement_title" value="' . esc_attr(get_post_meta($post->ID, 'softlab_custom_post_meta_field_our_statement_title', true)) . '">';

    echo '<label for="softlab_custom_post_meta_field_our_statement_description">Our Statement Description: </label>';
    echo '<textarea rows="4" cols="50" id="softlab_custom_post_meta_field_our_statement_description" name="softlab_custom_post_meta_field_our_statement_description">';
    echo esc_textarea(get_post_meta($post->ID, 'softlab_custom_post_meta_field_our_statement_description', true));
    echo '</textarea>';
    echo '</div>';
    // Save Experience  fields.
    echo '<div class="softlab_custom_post-metabox-fields">';
    echo '<h3>Experience</h3>';
    echo '<label for="softlab_custom_post_meta_field_experience">Experience Details: </label>';
    echo '<input type="text" id="softlab_custom_post_meta_field_experience" name="softlab_custom_post_meta_field_experience" value="' . esc_attr(get_post_meta($post->ID, 'softlab_custom_post_meta_field_experience', true)) . '">';
    echo '</div>';
    // Save Salary  fields.
    echo '<div class="softlab_custom_post-metabox-fields">';
    echo '<h3>Salary</h3>';
    echo '<label for="softlab_custom_post_meta_field_salary">Salary Details: </label>';
    echo '<input type="text" id="softlab_custom_post_meta_field_salary" name="softlab_custom_post_meta_field_salary" value="' . esc_attr(get_post_meta($post->ID, 'softlab_custom_post_meta_field_salary', true)) . '">';
    echo '</div>';

    // Save daedline date  fields.
    $expiration_date = esc_attr(get_post_meta($post->ID, 'soft_job_expiration_date', true));
    // Display the input field
    echo '<div class="softlab_custom_post-metabox-fields">';
    echo '<h3>Date</h3>';
    echo '<label for="soft_job_expiration_date">Set Expiration Date:</label>';
    echo '<input type="date" id="soft_job_expiration_date" name="soft_job_expiration_date" value="' . $expiration_date . '">';
    echo '</div>';
}


/**
 * Summary of softlab_custom_post_save_meta_box_data 
 * @param mixed $post_id
 * @return void
 */
function softlab_custom_post_save_meta_box_data($post_id)
{
    // Check for nonce, autosave, and permissions.
    // if (!isset($_POST['softlab_custom_post_meta_field_url']) || defined('DOING_AUTOSAVE') && DOING_AUTOSAVE || !current_user_can('edit_post', $post_id)) {
    //     return;
    // }
    if (!isset($_POST['softlab_image_nonce_field']) || !wp_verify_nonce($_POST['softlab_image_nonce_field'], 'softlab_image_nonce')) {
        return;
    }

    // Save image URL
    if (isset($_POST['softlab_image_about_image'])) {
        update_post_meta($post_id, 'softlab_image_about_image', esc_url_raw($_POST['softlab_image_about_image']));
    }
    if (isset($_POST['softlab_custom_post_meta_field_our_team_description'])) {
        update_post_meta(
            $post_id,
            'softlab_custom_post_meta_field_our_team_description',
            sanitize_textarea_field($_POST['softlab_custom_post_meta_field_our_team_description'])
        );
    }
    // Save our_team_about_title fields.
    if (isset($_POST['softlab_custom_post_meta_field_our_team_about_title'])) {
        update_post_meta(
            $post_id,
            'softlab_custom_post_meta_field_our_team_about_title',
            sanitize_text_field($_POST['softlab_custom_post_meta_field_our_team_about_title'])
        );
    }
    if (isset($_POST['softlab_custom_post_meta_field_our_team_about_description'])) {
        update_post_meta(
            $post_id,
            'softlab_custom_post_meta_field_our_team_about_description',
            sanitize_textarea_field($_POST['softlab_custom_post_meta_field_our_team_about_description'])
        );
    }
    // Save Job Responsibility  fields.
    if (isset($_POST['softlab_custom_job_responsibility_title'])) {
        update_post_meta(
            $post_id,
            'softlab_custom_job_responsibility_title',
            sanitize_text_field($_POST['softlab_custom_job_responsibility_title'])
        );
    }
    if (array_key_exists('softlab_custom_job_responsibility_description', $_POST)) {
        update_post_meta(
            $post_id,
            'softlab_custom_job_responsibility_description',
            sanitize_textarea_field($_POST['softlab_custom_job_responsibility_description'])
        );
    }
    // Save Job requirements  fields.
    if (isset($_POST['softlab_custom_job_requirements_title'])) {
        update_post_meta(
            $post_id,
            'softlab_custom_job_requirements_title',
            sanitize_text_field($_POST['softlab_custom_job_requirements_title'])
        );
    }
    if (array_key_exists('softlab_custom_job_requirements_description', $_POST)) {
        update_post_meta(
            $post_id,
            'softlab_custom_job_requirements_description',
            sanitize_textarea_field($_POST['softlab_custom_job_requirements_description'])
        );
    }
    // Save Good to Have  fields.
    if (isset($_POST['softlab_custom_job_good_have_title'])) {
        update_post_meta(
            $post_id,
            'softlab_custom_job_good_have_title',
            sanitize_text_field($_POST['softlab_custom_job_good_have_title'])
        );
    }
    if (array_key_exists('softlab_custom_job_good_have_description', $_POST)) {
        update_post_meta(
            $post_id,
            'softlab_custom_job_good_have_description',
            sanitize_textarea_field($_POST['softlab_custom_job_good_have_description'])
        );
    }
    // Save Perks & Benefits fields.
    if (isset($_POST['softlab_custom_job_perks_benefits_title'])) {
        update_post_meta(
            $post_id,
            'softlab_custom_job_perks_benefits_title',
            sanitize_text_field($_POST['softlab_custom_job_perks_benefits_title'])
        );
    }
    if (array_key_exists('softlab_custom_job_perks_benefits_description', $_POST)) {
        update_post_meta(
            $post_id,
            'softlab_custom_job_perks_benefits_description',
            sanitize_textarea_field($_POST['softlab_custom_job_perks_benefits_description'])
        );
    }
    // Save Our Statement fields.
    if (isset($_POST['softlab_custom_post_meta_field_our_statement_title'])) {
        update_post_meta(
            $post_id,
            'softlab_custom_post_meta_field_our_statement_title',
            sanitize_text_field($_POST['softlab_custom_post_meta_field_our_statement_title'])
        );
    }

    if (isset($_POST['softlab_custom_post_meta_field_our_statement_description'])) {
        update_post_meta(
            $post_id,
            'softlab_custom_post_meta_field_our_statement_description',
            sanitize_textarea_field($_POST['softlab_custom_post_meta_field_our_statement_description'])
        );
    }
    // Experience
    if (isset($_POST['softlab_custom_post_meta_field_experience'])) {
        update_post_meta(
            $post_id,
            'softlab_custom_post_meta_field_experience',
            sanitize_text_field($_POST['softlab_custom_post_meta_field_experience'])
        );
    }
    // Salary 
    if (isset($_POST['softlab_custom_post_meta_field_salary'])) {
        update_post_meta(
            $post_id,
            'softlab_custom_post_meta_field_salary',
            sanitize_text_field($_POST['softlab_custom_post_meta_field_salary'])
        );
    }
    //daedline date
    if (isset($_POST['soft_job_expiration_date'])) {
        update_post_meta($post_id, 'soft_job_expiration_date', sanitize_text_field($_POST['soft_job_expiration_date']));
    }
    // Save multiple fields.
    if (isset($_POST['softlab_custom_post_meta_fields']) && is_array($_POST['softlab_custom_post_meta_fields'])) {
        $sanitized_fields = array_map(function ($field) {
            return [
                'title' => sanitize_text_field($field['title']),
                'description' => sanitize_text_field($field['description']),
                'shortcode' => wp_kses_post($field['shortcode']),
                'image' => esc_url_raw($field['image']),
            ];
        }, $_POST['softlab_custom_post_meta_fields']);
        update_post_meta($post_id, 'softlab_custom_post_meta_fields', $sanitized_fields);
    }
}

add_action('save_post', 'softlab_custom_post_save_meta_box_data');
