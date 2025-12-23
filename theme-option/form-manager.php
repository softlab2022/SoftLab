<?php
// Register Custom Post Type for Forms
function fm_register_custom_post_type()
{
    register_post_type(
        'form',
        array(
            'labels' => array(
                'name' => __('Form Templates', 'softlab'),
                'singular_name' => __('Form Template', 'softlab'),
                'add_new' => __('Add new Form Template', 'softlab'),
                'add_new_item' => __('Add new Form Template', 'softlab'),
                'edit_item' => __('Edit Form Template', 'softlab'),
                'new_item' => __('New Form Template', 'softlab'),
                'view_item' => __('View Form Template', 'softlab'),
                'not_found' => __('Sorry you have no Form Template', 'softlab'),
            ),
            'menu_icon'     => 'dashicons-forms',
            'public'        => true,
            'show_ui'       => true,
            'has_archive'   => false,
            'rewrite'       => array('slug' => 'contact-form-7-templates'),
            'supports'      => array('title', 'editor', 'thumbnail', 'page-attributes'),
            'taxonomies'    => array('form_category'),
        )
    );
}
add_action('init', 'fm_register_custom_post_type');

// Register Custom Taxonomy for Form Categories
function fm_register_custom_taxonomy()
{
    register_taxonomy(
        'form_category',
        'form',
        array(
            'label' => __('Form Categories'),
            'rewrite' => array('slug' => 'form-category'),
            'hierarchical' => true,
        )
    );
}
add_action('init', 'fm_register_custom_taxonomy');

/**
 * Add meta box to the custom post type 'form'
 * @return void
 */
function slfm_metabox()
{
    add_meta_box(
        'slfm-page-id',
        'Feature of this Template',
        'wpl_slfm_pages_function',
        'form',
        'normal',
        'default'
    );
    add_meta_box(
        'slfm_fields_features_box_description',
        'Template Fields Description',
        'slfm_pages_fields_description_function',
        'form',
        'normal',
        'default'
    );
    add_meta_box(
        'slfm_fields_features_box',
        'Template Fields Features',
        'slfm_pages_fields_function',
        'form',
        'normal',
        'default'
    );

    add_meta_box(
        'slfm_description_box',
        'Template Description',
        'slfm_pages_function',
        'form',
        'normal',
        'default'
    );
}
add_action('add_meta_boxes', 'slfm_metabox');



/**
 * Render the meta box content with a WYSIWYG editor
 * @param mixed $post
 */
function wpl_slfm_pages_function($post)
{
    // Add a nonce field for security
    wp_nonce_field('slfm_meta_box_nonce', 'slfm_meta_box_nonce');

    // Get saved meta value
    $content = get_post_meta($post->ID, 'softlab_custom_template_description', true);

    echo '<div class="softlab_custom_post-metabox-fields">';
    echo '<label for="softlab_custom_template_description"></label>';

    // Add WYSIWYG editor
    wp_editor($content, 'softlab_custom_template_description', array(
        'textarea_name' => 'softlab_custom_template_description',
        'media_buttons' => true, // Allows media uploads
        // 'textarea_rows' => 6,
        'teeny' => false, // Use the full editor instead of a simplified one
        'quicktags' => true // Enable quicktags (HTML editing buttons)
    ));

    echo '</div>';
}
add_action('add_meta_boxes', function () {
    add_meta_box('softlab_meta_box', 'Job Responsibilities', 'wpl_slfm_pages_function', 'post', 'normal', 'high');
});

/**
 * Save meta box data
 * @param mixed $post_id
 */
function slfm_save_meta_box_data($post_id)
{
    // Verify nonce
    if (!isset($_POST['slfm_meta_box_nonce']) || !wp_verify_nonce($_POST['slfm_meta_box_nonce'], 'slfm_meta_box_nonce')) {
        return;
    }

    // Prevent autosaving from interfering
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    // Check user permissions
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    // Save rich text content (allowing HTML)
    if (isset($_POST['softlab_custom_template_description'])) {
        update_post_meta(
            $post_id,
            'softlab_custom_template_description',
            wp_kses_post($_POST['softlab_custom_template_description']) // Sanitizes rich text
        );
    }
}
add_action('save_post', 'slfm_save_meta_box_data');



/**
 * Render the meta box content with a WYSIWYG editor
 * @param mixed $post
 */
function slfm_pages_function($post)
{
    // Add a nonce field for security
    wp_nonce_field('slfm_meta_box_nonce', 'slfm_meta_box_nonce');

    // Get saved meta value
    $content = get_post_meta($post->ID, 'softlab_custom_description', true);

    echo '<div class="softlab_custom_post-metabox-fields">';
    echo '<label for="softlab_custom_description"></label>';

    // Add WYSIWYG editor
    wp_editor($content, 'softlab_custom_description', array(
        'textarea_name' => 'softlab_custom_description',
        'media_buttons' => true, 
        // 'textarea_rows' => 6,
        'teeny' => false, 
        'quicktags' => true 
    ));

    echo '</div>';
}
add_action('add_meta_boxes', function () {
    add_meta_box('softlab_meta_boxss', 'Job Responsibilities111', 'slfm_pages_function', 'post', 'normal', 'high');
});

/**
 * Save meta box data
 * @param mixed $post_id
 */
function slfm_save_meta_box_data_description($post_id)
{
    // Verify nonce
    if (!isset($_POST['slfm_meta_box_nonce']) || !wp_verify_nonce($_POST['slfm_meta_box_nonce'], 'slfm_meta_box_nonce')) {
        return;
    }

    // Prevent autosaving from interfering
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    // Check user permissions
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    // Save rich text content (allowing HTML)
    if (isset($_POST['softlab_custom_description'])) {
        update_post_meta(
            $post_id,
            'softlab_custom_description',
            wp_kses_post($_POST['softlab_custom_description']) // Sanitizes rich text
        );
    }
}
add_action('save_post', 'slfm_save_meta_box_data_description');

/**
 * Render the meta box content with a WYSIWYG editor
 * @param mixed $post
 */
function slfm_pages_fields_function($post)
{
    // Add a nonce field for security
    wp_nonce_field('slfm_meta_box_nonce', 'slfm_meta_box_nonce');

    // Get saved meta value
    $content = get_post_meta($post->ID, 'softlab_custom_template_fields_features', true);

    echo '<div class="softlab_custom_post-metabox-fields">';
    echo '<label for="softlab_custom_template_fields_features"></label>';

    // Add WYSIWYG editor
    wp_editor($content, 'softlab_custom_template_fields_features', array(
        'textarea_name' => 'softlab_custom_template_fields_features',
        'media_buttons' => true, 
        // 'textarea_rows' => 6,
        'teeny' => false, 
        'quicktags' => true 
    ));

    echo '</div>';
}
add_action('add_meta_boxes', function () {
    add_meta_box('softlab_meta_boxss', 'Job Responsibilities11', 'slfm_pages_fields_function', 'post', 'normal', 'high');
});

/**
 * Save meta box data
 * @param mixed $post_id
 */
function slfm_save_meta_box_data_fields_features($post_id)
{
    // Verify nonce
    if (!isset($_POST['slfm_meta_box_nonce']) || !wp_verify_nonce($_POST['slfm_meta_box_nonce'], 'slfm_meta_box_nonce')) {
        return;
    }

    // Prevent autosaving from interfering
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    // Check user permissions
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    // Save rich text content (allowing HTML)
    if (isset($_POST['softlab_custom_template_fields_features'])) {
        update_post_meta(
            $post_id,
            'softlab_custom_template_fields_features',
            wp_kses_post($_POST['softlab_custom_template_fields_features']) // Sanitizes rich text
        );
    }
}
add_action('save_post', 'slfm_save_meta_box_data_fields_features');
/**
 * Render the meta box content with a WYSIWYG editor
 * @param mixed $post
 */
function slfm_pages_fields_description_function($post)
{
    // Add a nonce field for security
    wp_nonce_field('slfm_meta_box_nonce', 'slfm_meta_box_nonce');

    // Get saved meta value
    $content = get_post_meta($post->ID, 'softlab_custom_template_fields_features_description', true);

    echo '<div class="softlab_custom_post-metabox-fields">';
    echo '<label for="softlab_custom_template_fields_features_description"></label>';

    // Add WYSIWYG editor
    wp_editor($content, 'softlab_custom_template_fields_features_description', array(
        'textarea_name' => 'softlab_custom_template_fields_features_description',
        'media_buttons' => true, 
        // 'textarea_rows' => 6,
        'teeny' => false, 
        'quicktags' => true 
    ));

    echo '</div>';
}
add_action('add_meta_boxes', function () {
    add_meta_box('softlab_meta_boxss', 'Job Responsibilities11', 'slfm_pages_fields_description_function', 'post', 'normal', 'high');
});

/**
 * Save meta box data
 * @param mixed $post_id
 */
function slfm_save_meta_box_data_fields_features_description($post_id)
{
    // Verify nonce
    if (!isset($_POST['slfm_meta_box_nonce']) || !wp_verify_nonce($_POST['slfm_meta_box_nonce'], 'slfm_meta_box_nonce')) {
        return;
    }

    // Prevent autosaving from interfering
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    // Check user permissions
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    // Save rich text content (allowing HTML)
    if (isset($_POST['softlab_custom_template_fields_features_description'])) {
        update_post_meta(
            $post_id,
            'softlab_custom_template_fields_features_description',
            wp_kses_post($_POST['softlab_custom_template_fields_features_description']) // Sanitizes rich text
        );
    }
}
add_action('save_post', 'slfm_save_meta_box_data_fields_features_description');