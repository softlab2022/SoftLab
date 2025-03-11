<?php

/**
 * Summary of softlab Form Templates meta box
 * @return void
 */
function sl_ft_metabox()
{
    add_meta_box(
        'sl-ft-page-id',
        'Form Templates meta box',
        'wpl_sl_ft_pages_function',
        'form',
        'normal',
        'default'
    );
}

add_action('add_meta_boxes', 'sl_ft_metabox');

/**
 * Summary of wpl_sl_ft_ft_pages_function
 * @param mixed $post
 * @return void
 */
function wpl_sl_ft_pages_function($post)
{
    // Retrieve saved meta data for the fields
    $sl_ft_meta_fields = get_post_meta($post->ID, 'sl_ft_meta_fields', true);
    if (empty($sl_ft_meta_fields)) {
        // $sl_ft_meta_fields = ['title' => '', 'description' => '', 'shortcode' => ''];
        $sl_ft_meta_fields = [ 'shortcode' => ''];
    }

    echo '<div id="sl-metabox-container">';
    echo '<div class="sl-metabox-fields">';
    echo '<h3>Form Templates meta box</h3>';
    // echo '<label for="sl_ft_meta_field_title">Title: </label>';
    // echo '<input type="text" id="sl_ft_meta_field_title" name="sl_ft_meta_fields[title]" value="' . esc_attr($sl_ft_meta_fields['title']) . '">';

    // echo '<br>';
    // echo '<label for="sl_ft_meta_field_description">Description: </label>';
    // echo '<input type="text" id="sl_ft_meta_field_description" name="sl_ft_meta_fields[description]" value="' . esc_attr($sl_ft_meta_fields['description']) . '">';

    echo '<br>';
    echo '<label for="sl_ft_meta_field_shortcode">Form Shortcode: </label>';
    echo '<input type="text" id="sl_ft_meta_field_shortcode" name="sl_ft_meta_fields[shortcode]" value="' . esc_attr($sl_ft_meta_fields['shortcode']) . '">';
    echo '<br>';
    echo '</div>';
    echo '</div>';

    // Single URL fields
    // echo '<div class="sl-metabox-field">';
    // echo '<label for="sl_ft_meta_field_url">Video URL: </label>';
    // echo '<input type="url" id="sl_ft_meta_field_url" name="sl_ft_meta_field_url" value="' . esc_attr(get_post_meta($post->ID, 'sl_ft_meta_field_url', true)) . '">';
    // echo '</div>';

    // echo '<div class="sl-metabox-field">';
    // echo '<label for="sl_ft_meta_field_documentation_link">Documentation Link: </label>';
    // echo '<input type="url" id="sl_ft_meta_field_documentation_link" name="sl_ft_meta_field_documentation_link" value="' . esc_attr(get_post_meta($post->ID, 'sl_ft_meta_field_documentation_link', true)) . '">';
    // echo '</div>';
}

/**
 * Summary of sl_ft_save_meta_box_data
 * @param mixed $post_id
 * @return void
 */
function sl_ft_save_meta_box_data($post_id)
{
    // Check for nonce, autosave, and permissions.
    if (!isset($_POST['sl_ft_meta_field_url']) || defined('DOING_AUTOSAVE') && DOING_AUTOSAVE || !current_user_can('edit_post', $post_id)) {
        return;
    }

    // Save the fields.
    if (isset($_POST['sl_ft_meta_fields']) && is_array($_POST['sl_ft_meta_fields'])) {
        $sanitized_fields = [
            // 'title' => sanitize_text_field($_POST['sl_ft_meta_fields']['title']),
            // 'description' => sanitize_text_field($_POST['sl_ft_meta_fields']['description']),
            'shortcode' => wp_kses_post($_POST['sl_ft_meta_fields']['shortcode']),
        ];
        update_post_meta($post_id, 'sl_ft_meta_fields', $sanitized_fields);
    }

    // Save single URL fields.
    // update_post_meta($post_id, 'sl_ft_meta_field_url', esc_url_raw($_POST['sl_ft_meta_field_url']));
    // update_post_meta($post_id, 'sl_ft_meta_field_documentation_link', esc_url_raw($_POST['sl_ft_meta_field_documentation_link']));
}

add_action('save_post', 'sl_ft_save_meta_box_data');