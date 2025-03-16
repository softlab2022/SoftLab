<?php

/**
 * Summary of softlab Form Templates meta box
 * @return void
 */
function sl_ft_metabox()
{
    add_meta_box(
        'sl-ft-page-id',
        'Form Shortcode',
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
        $sl_ft_meta_fields = ['shortcode' => ''];
    }

    echo '<div id="sl-metabox-container">';
    echo '<div class="sl-metabox-fields">';

    echo '<br>';
    echo '<label for="sl_ft_meta_field_shortcode"></label>';
    echo '<input type="text" id="sl_ft_meta_field_shortcode" name="sl_ft_meta_fields[shortcode]" value="' . esc_attr($sl_ft_meta_fields['shortcode']) . '">';
    echo '<br>';
    echo '</div>';
    echo '</div>';
}

/**
 * Summary of sl_ft_save_meta_box_data
 * @param mixed $post_id
 * @return void
 */
function sl_ft_save_meta_box_data($post_id)
{
    // Check for nonce, autosave, and permissions.
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE || !current_user_can('edit_post', $post_id)) {
        return;
    }

    // Save the fields.
    if (isset($_POST['sl_ft_meta_fields']) && is_array($_POST['sl_ft_meta_fields'])) {
        $sanitized_fields = [
            'shortcode' => wp_kses_post($_POST['sl_ft_meta_fields']['shortcode']),
        ];
        update_post_meta($post_id, 'sl_ft_meta_fields', $sanitized_fields);
    }
}

add_action('save_post', 'sl_ft_save_meta_box_data');