<?php

include_once get_theme_file_path('inc/class-enqueue.php');
include_once get_theme_file_path('inc/class-nav.php');
require_once('theme-option/theme-option.php');
require_once('theme-option/custom-post.php');
require_once('theme-option/form-manager.php');
require_once('theme-option/form-templates-metabox.php');


/**
 * Include Theme Customizer.
 *
 * @since v1.0
 */
$theme_customizer = __DIR__ . '/inc/customizer.php';
if (is_readable($theme_customizer)) {
	require_once $theme_customizer;
}


/**
 * Include Support for wordpress.com-specific functions.
 *
 * @since v1.0
 */
$theme_wordpresscom = __DIR__ . '/inc/wordpresscom.php';
if (is_readable($theme_wordpresscom)) {
	require_once $theme_wordpresscom;
}


/**
 * Set the content width based on the theme's design and stylesheet.
 *
 * @since v1.0
 */
if (! isset($content_width)) {
	$content_width = 800;
}


/**
 * General Theme Settings.
 *
 * @since v1.0
 */
if (! function_exists('softlab_setup_theme')) :
	function softlab_setup_theme()
	{
		// Make theme available for translation: Translations can be filed in the /languages/ directory.
		load_theme_textdomain('softlab', __DIR__ . '/languages');

		// Theme Support.
		add_theme_support('title-tag');
		add_theme_support('automatic-feed-links');
		add_theme_support('post-thumbnails');
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'script',
				'style',
				'navigation-widgets',
			)
		);

		// Add support for Block Styles.
		add_theme_support('wp-block-styles');
		// Add support for full and wide alignment.
		add_theme_support('align-wide');
		// Add support for editor styles.
		add_theme_support('editor-styles');
		// Enqueue editor styles.
		add_editor_style('style-editor.css');

		// Default Attachment Display Settings.
		update_option('image_default_align', 'none');
		update_option('image_default_link_type', 'none');
		update_option('image_default_size', 'large');

		// Custom CSS-Styles of Wordpress Gallery.
		add_filter('use_default_gallery_style', '__return_false');
	}

	add_action('after_setup_theme', 'softlab_setup_theme');

	// Disable Block Directory: https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/filters/editor-filters.md#block-directory
	remove_action('enqueue_block_editor_assets', 'wp_enqueue_editor_block_directory_assets');
	remove_action('enqueue_block_editor_assets', 'gutenberg_enqueue_block_editor_assets_block_directory');
endif;


/**
 * Fire the wp_body_open action.
 *
 * Added for backwards compatibility to support pre 5.2.0 WordPress versions.
 *
 * @since v2.2
 */
if (! function_exists('wp_body_open')) :
	function wp_body_open()
	{
		/**
		 * Triggered after the opening <body> tag.
		 *
		 * @since v2.2
		 */
		do_action('wp_body_open');
	}
endif;


/**
 * Add new User fields to Userprofile.
 *
 * @since v1.0
 */
if (! function_exists('softlab_add_user_fields')) :
	function softlab_add_user_fields($fields)
	{
		// Add new fields.
		$fields['facebook_profile'] = 'Facebook URL';
		$fields['twitter_profile']  = 'Twitter URL';
		$fields['linkedin_profile'] = 'LinkedIn URL';
		$fields['xing_profile']     = 'Xing URL';
		$fields['github_profile']   = 'GitHub URL';

		return $fields;
	}

	add_filter('user_contactmethods', 'softlab_add_user_fields'); // get_user_meta( $user->ID, 'facebook_profile', true );
endif;


/**
 * Test if a page is a blog page.
 * if ( is_blog() ) { ... }
 *
 * @since v1.0
 */
function is_blog()
{
	global $post;
	$posttype = get_post_type($post);

	return ((is_archive() || is_author() || is_category() || is_home() || is_single() || (is_tag() && ('post' === $posttype))) ? true : false);
}


/**
 * Disable comments for Media (Image-Post, Jetpack-Carousel, etc.)
 *
 * @since v1.0
 */
function softlab_filter_media_comment_status($open, $post_id = null)
{
	$media_post = get_post($post_id);
	if ('attachment' === $media_post->post_type) {
		return false;
	}

	return $open;
}

add_filter('comments_open', 'softlab_filter_media_comment_status', 10, 2);


/**
 * Style Edit buttons as badges: https://getbootstrap.com/docs/5.0/components/badge
 *
 * @since v1.0
 */
function softlab_custom_edit_post_link($output)
{
	return str_replace('class="post-edit-link"', 'class="post-edit-link badge badge-secondary"', $output);
}

add_filter('edit_post_link', 'softlab_custom_edit_post_link');

function softlab_custom_edit_comment_link($output)
{
	return str_replace('class="comment-edit-link"', 'class="comment-edit-link badge badge-secondary"', $output);
}

add_filter('edit_comment_link', 'softlab_custom_edit_comment_link');


/**
 * Responsive oEmbed filter: https://getbootstrap.com/docs/5.0/helpers/ratio
 *
 * @since v1.0
 */
function softlab_oembed_filter($html)
{
	return '<div class="ratio ratio-16x9">' . $html . '</div>';
}

add_filter('embed_oembed_html', 'softlab_oembed_filter', 10, 4);


if (! function_exists('softlab_content_nav')) :
	/**
	 * Display a navigation to next/previous pages when applicable.
	 *
	 * @since v1.0
	 */
	function softlab_content_nav($nav_id)
	{
		global $wp_query;

		if ($wp_query->max_num_pages > 1) :
?>
			<div id="<?php echo esc_attr($nav_id); ?>" class="d-flex mb-4 justify-content-between">
				<div><?php next_posts_link('<span aria-hidden="true">&larr;</span> ' . esc_html__('Older posts', 'softlab')); ?></div>
				<div><?php previous_posts_link(esc_html__('Newer posts', 'softlab') . ' <span aria-hidden="true">&rarr;</span>'); ?></div>
			</div><!-- /.d-flex -->
			<?php
		else :
			echo '<div class="clearfix"></div>';
		endif;
	}

	// Add Class.
	function posts_link_attributes()
	{
		return 'class="btn btn-secondary btn-lg"';
	}

	add_filter('next_posts_link_attributes', 'posts_link_attributes');
	add_filter('previous_posts_link_attributes', 'posts_link_attributes');
endif;


/**
 * Init Widget areas in Sidebar.
 *
 * @since v1.0
 */
function softlab_widgets_init()
{
	// Area 1.
	register_sidebar(
		array(
			'name'          => 'Primary Widget Area (Sidebar)',
			'id'            => 'primary_widget_area',
			'before_widget' => '',
			'after_widget'  => '',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);

	// Area 2.
	register_sidebar(
		array(
			'name'          => 'Secondary Widget Area (Header Navigation)',
			'id'            => 'secondary_widget_area',
			'before_widget' => '',
			'after_widget'  => '',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);

	// Area 3.
	register_sidebar(
		array(
			'name'          => 'Third Widget Area (Footer)',
			'id'            => 'third_widget_area',
			'before_widget' => '',
			'after_widget'  => '',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);
	// Area 4.
	register_sidebar(
		array(
			'name'          => 'Four Widget Area (Single Sidebar)',
			'id'            => 'single_sidebar_area',
			'before_widget' => '',
			'after_widget'  => '',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);
}

add_action('widgets_init', 'softlab_widgets_init');


if (! function_exists('softlab_article_posted_on')) :
	/**
	 * "Theme posted on" pattern.
	 *
	 * @since v1.0
	 */
	function softlab_article_posted_on()
	{
		printf(
			wp_kses_post(__(' <div> <span class="sep"> Updated on </span><a href="%1$s" title="%2$s" rel="bookmark"><time class="entry-date" datetime="%3$s">%4$s</time></a></div>', 'softlab')),
			esc_url(get_the_permalink()),
			esc_attr(get_the_date() . ' - ' . get_the_time()),
			esc_attr(get_the_date('c')),
			esc_html(get_the_modified_date('F j, Y'))
		);
	}
endif;


/**
 * Template for Password protected post form.
 *
 * @since v1.0
 */
function softlab_password_form()
{
	global $post;
	$label = 'pwbox-' . (empty($post->ID) ? rand() : $post->ID);

	$output = '<div class="row">';
	$output .= '<form action="' . esc_url(site_url('wp-login.php?action=postpass', 'login_post')) . '" method="post">';
	$output .= '<h4 class="col-md-12 alert alert-warning">' . esc_html__('This content is password protected. To view it please enter your password below.', 'softlab') . '</h4>';
	$output .= '<div class="col-md-6">';
	$output .= '<div class="input-group">';
	$output .= '<input type="password" name="post_password" id="' . esc_attr($label) . '" placeholder="' . esc_attr__('Password', 'softlab') . '" class="form-control" />';
	$output .= '<div class="input-group-append"><input type="submit" name="submit" class="btn btn-primary" value="' . esc_attr__('Submit', 'softlab') . '" /></div>';
	$output .= '</div><!-- /.input-group -->';
	$output .= '</div><!-- /.col -->';
	$output .= '</form>';
	$output .= '</div><!-- /.row -->';

	return $output;
}

add_filter('the_password_form', 'softlab_password_form');


if (! function_exists('softlab_comment')) :
	/**
	 * Style Reply link.
	 *
	 * @since v1.0
	 */
	function softlab_replace_reply_link_class($class)
	{
		return str_replace("class='comment-reply-link", "class='comment-reply-link btn btn-outline-secondary", $class);
	}

	add_filter('comment_reply_link', 'softlab_replace_reply_link_class');

	/**
	 * Template for comments and pingbacks:
	 * add function to comments.php ... wp_list_comments( array( 'callback' => 'softlab_comment' ) );
	 *
	 * @since v1.0
	 */
	function softlab_comment($comment, $args, $depth)
	{
		$GLOBALS['comment'] = $comment;
		switch ($comment->comment_type):
			case 'pingback':
			case 'trackback':
			?>
				<li class="post pingback">
					<p><?php esc_html_e('Pingback:', 'softlab'); ?><?php comment_author_link(); ?><?php edit_comment_link(esc_html__('Edit', 'softlab'), '<span class="edit-link">', '</span>'); ?></p>
				<?php
				break;
			default:
				?>
				<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
					<article id="comment-<?php comment_ID(); ?>" class="comment">
						<footer class="comment-meta">
							<div class="comment-author vcard">
								<?php
								$avatar_size = ('0' !== $comment->comment_parent ? 68 : 136);
								echo get_avatar($comment, $avatar_size);

								/* translators: 1: comment author, 2: date and time */
								printf(
									wp_kses_post(__('%1$s, %2$s', 'softlab')),
									sprintf('<span class="fn">%s</span>', get_comment_author_link()),
									sprintf(
										'<a href="%1$s"><time datetime="%2$s">%3$s</time></a>',
										esc_url(get_comment_link($comment->comment_ID)),
										get_comment_time('c'),
										/* translators: 1: date, 2: time */
										sprintf(esc_html__('%1$s ago', 'softlab'), human_time_diff((int) get_comment_time('U'), current_time('timestamp')))
									)
								);

								edit_comment_link(esc_html__('Edit', 'softlab'), '<span class="edit-link">', '</span>');
								?>
							</div><!-- .comment-author .vcard -->

							<?php if ('0' === $comment->comment_approved) : ?>
								<em class="comment-awaiting-moderation"><?php esc_html_e('Your comment is awaiting moderation.', 'softlab'); ?></em>
								<br />
							<?php endif; ?>
						</footer>

						<div class="comment-content"><?php comment_text(); ?></div>

						<div class="reply">
							<?php
							comment_reply_link(
								array_merge(
									$args,
									array(
										'reply_text' => esc_html__('Reply', 'softlab') . ' <span>&darr;</span>',
										'depth'      => $depth,
										'max_depth'  => $args['max_depth'],
									)
								)
							);
							?>
						</div><!-- /.reply -->
					</article><!-- /#comment-## -->
				<?php
				break;
		endswitch;
	}

	/**
	 * Custom Comment form.
	 *
	 * @since v1.0
	 * @since v1.1: Added 'submit_button' and 'submit_field'
	 * @since v2.0.2: Added '$consent' and 'cookies'
	 */
	function softlab_custom_commentform($args = array(), $post_id = null)
	{
		if (null === $post_id) {
			$post_id = get_the_ID();
		}

		$commenter     = wp_get_current_commenter();
		$user          = wp_get_current_user();
		$user_identity = $user->exists() ? $user->display_name : '';

		$args = wp_parse_args($args);

		$req      = get_option('require_name_email');
		$aria_req = ($req ? " aria-required='true' required" : '');
		$consent  = (empty($commenter['comment_author_email']) ? '' : ' checked="checked"');
		$fields   = array(
			'author'  => '<div class="form-floating folat-name mb-3">
							<input type="text" id="author" name="author" class="form-control" value="' . esc_attr($commenter['comment_author']) . '" placeholder="' . esc_html__('Name', 'softlab') . ($req ? '*' : '') . '"' . $aria_req . ' />
							<label for="author">' . esc_html__('Name', 'softlab') . ($req ? '*' : '') . '</label>
						</div>',
			'email'   => '<div class="form-floating emails mb-3">
							<input type="email" id="email" name="email" class="form-control" value="' . esc_attr($commenter['comment_author_email']) . '" placeholder="' . esc_html__('Email', 'softlab') . ($req ? '*' : '') . '"' . $aria_req . ' />
							<label for="email">' . esc_html__('Email', 'softlab') . ($req ? '*' : '') . '</label>
						</div>',
			'url'     => '',
			'cookies' => '<p class="form-check mb-3 comment-form-cookies-consent">
							<input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" class="form-check-input" type="checkbox" value="yes"' . $consent . ' />
							<label class="form-check-label" for="wp-comment-cookies-consent">' . esc_html__('Save my name, email, and website in this browser for the next time I comment.', 'softlab') . '</label>
						</p>',
		);

		$defaults = array(
			'fields'               => apply_filters('comment_form_default_fields', $fields),
			'comment_field'        => '<div class="form-floating comments mb-3">
											<textarea id="comment" name="comment" class="form-control" aria-required="true" required placeholder="' . esc_attr__('Comment', 'softlab') . ($req ? '*' : '') . '"></textarea>
											<label for="comment">' . esc_html__('Comment', 'softlab') . '</label>
										</div>',
			/** This filter is documented in wp-includes/link-template.php */
			'must_log_in'          => '<p class="must-log-in">' . sprintf(wp_kses_post(__('You must be <a href="%s">logged in</a> to post a comment.', 'softlab')), wp_login_url(apply_filters('the_permalink', get_the_permalink(get_the_ID())))) . '</p>',
			/** This filter is documented in wp-includes/link-template.php */
			'logged_in_as'         => '<p class="logged-in-as">' . sprintf(wp_kses_post(__('Logged in as <a href="%1$s">%2$s</a>. <a href="%3$s" title="Log out of this account">Log out?</a>', 'softlab')), get_edit_user_link(), $user->display_name, wp_logout_url(apply_filters('the_permalink', get_the_permalink(get_the_ID())))) . '</p>',
			'comment_notes_before' => '<p class="small comment-notes">' . esc_html__('Your Email address will not be published.', 'softlab') . '</p>',
			'comment_notes_after'  => '',
			'id_form'              => 'commentform',
			'id_submit'            => 'submit',
			'class_submit'         => 'btn btn-primary',
			'name_submit'          => 'submit',
			'title_reply'          => '',
			'title_reply_to'       => esc_html__('Leave a Reply to %s', 'softlab'),
			'cancel_reply_link'    => esc_html__('Cancel reply', 'softlab'),
			'label_submit'         => esc_html__('Post Comment', 'softlab'),
			'submit_button'        => '<input type="submit" id="%2$s" name="%1$s" class="%3$s" value="%4$s" />',
			'submit_field'         => '<div class="form-submit">%1$s %2$s</div>',
			'format'               => 'html5',
		);

		return $defaults;
	}

	add_filter('comment_form_defaults', 'softlab_custom_commentform');

endif;


/**
 * Auto Complete all WooCommerce orders.
 */
add_action('woocommerce_thankyou', 'custom_woocommerce_auto_complete_order');
function custom_woocommerce_auto_complete_order($order_id)
{
	if (! $order_id) {
		return;
	}

	$order = wc_get_order($order_id);
	$order->update_status('completed');
}

/**
 * Add ACF Options Page.
 */
if (function_exists('acf_add_options_page')) {
	acf_add_options_page(array(
		'page_title' => 'Theme Options',
		'menu_title' => 'Theme Options',
		'menu_slug'  => 'softlab-theme-options',
		'capability' => 'edit_posts',
		'redirect'   => false,
	));
}


// ajax backend configuration
function softlab_affiliate_register_backend_action()
{

	$name                         = ! empty($_POST['name']) ? $_POST['name'] : '';
	$email                        = ! empty($_POST['email']) ? $_POST['email'] : '';
	$pemail                       = ! empty($_POST['pemail']) ? $_POST['pemail'] : '';
	$domain                       = ! empty($_POST['domain']) ? $_POST['domain'] : '';
	$products                     = ! empty($_POST['products']) ? $_POST['products'] : [];
	$methods                      = ! empty($_POST['methods']) ? $_POST['methods'] : '';
	$statistics                   = ! empty($_POST['statistics']) ? $_POST['statistics'] : '';
	$promotion_method_description = ! empty($_POST['promotion_method_description']) ? $_POST['promotion_method_description'] : '';


	define('FS__API_SCOPE', 'developer');
	define('FS__API_DEV_ID', 5043);
	define('FS__API_PUBLIC_KEY', 'pk_a98c8f6df1cb2964b726c7ac7686e');
	define('FS__API_SECRET_KEY', 'sk_#_FrNZ[vglb%c^1=MG{<r=cut&pt<');

	if (! class_exists('Softlab_Freemius_Api')) {
		include_once get_theme_file_path('freemius-api/Freemius.php');
		include_once get_theme_file_path('freemius-api/FreemiusBase.php');
	}

	// Init SDK.
	$api = new Softlab_Freemius_Api(FS__API_SCOPE, FS__API_DEV_ID, FS__API_PUBLIC_KEY, FS__API_SECRET_KEY);


	if (empty($products)) {
		wp_send_json_error('Please select at least one product.');
	}

	foreach ($products as $product) {

		if (! in_array($product, array('radio-player', 'integrate-google-drive'))) {
			wp_send_json_error('Invalid product selected.');
		}

		if ('radio-player' == $product) {
			$productID               = '8684';
			$affiliateProgramTermsID = '1593';
		} else if ('integrate-google-drive' == $product) {
			$productID               = '9618';
			$affiliateProgramTermsID = '1449';
		}

		// You can get the product's affiliate program terms ID from the AFFILIATION section, it's stated right in the 1st tab.
		$api->Api("/plugins/{$productID}/aff/{$affiliateProgramTermsID}/affiliates.json", 'POST', array(
			'name'                         => $name,
			'email'                        => $email,
			'paypal_email'                 => $pemail,

			// Should not include an HTTP/S protocol.
			'domain'                       => str_replace(array('http://', 'https://'), '', $domain),

			// An optional param to include additional domains where the applicant will promote your product.
			//'additional_domains'           => array('affiliate-2nd-site.com', 'affiliate-3rd-site.com'),

			// Optional comma-separated combination of the following: 'social_media' and 'mobile_apps'.
			// This is useful if by default you don't allow promoting through mobile or social, to manually (& optionally) create custom terms for the applicant after approval.
			'promotional_methods'          => $methods,

			// An optional free text where an applicant can provide some stats data about their reach.
			'stats_description'            => $statistics,

			// An optional free text when an applicant can explain how they are planning to promote your product.
			'promotion_method_description' => $promotion_method_description,

			// An option applicant state. Defaults to 'active'. One of the following states: 'active', 'pending', 'rejected', 'suspended', 'blocked'.
			'state'                        => 'pending',

		));
	}

	wp_send_json_success('Thank you for your application. We will review it and get back to you shortly.');
}

add_action('wp_ajax_affiliate_register', 'softlab_affiliate_register_backend_action');
add_action('wp_ajax_nopriv_affiliate_register', 'softlab_affiliate_register_backend_action');


//update date on the blog page
function display_update_date()
{
	$date_format = get_option('date_format');
	$update_date = esc_html(get_the_modified_date($date_format));
	if (get_the_modified_time() !== get_the_date()) {
		return sprintf('<span class="update-date">%s</span>', $update_date);
	}
}


//show the category of singe page
function softlab_post_date_and_category()
{
	if (is_single()) {
		echo '<p>';
		the_category('  ');
		echo '  </p> ';
	}
}

// Change privacy policy link in Google Drive pages
add_filter('wp_nav_menu_objects', 'softlab_change_privacy_policy_menu_link', 10, 2);

function softlab_change_privacy_policy_menu_link($sorted_menu_items, $args)
{

	if ($args->menu->slug != 'footer-menu') {
		return $sorted_menu_items;
	}

	// Get the current page template
	$current_template = basename(get_page_template_slug());

	foreach ($sorted_menu_items as $key => $item) {

		// Check if the current page uses a specific template and the menu item ID matches
		if (str_contains($current_template, 'integrate-google-drive') && str_contains($item->url, '/privacy-policy')) {
			$item->url = 'https://softlabbd.com/integrate-google-drive-privacy-policy/';
		}

		if (str_contains($current_template, 'connect-dropbox') && str_contains($item->url, '/privacy-policy')) {
			$item->url = 'https://softlabbd.com/connect-dropbox-privacy-policy/';
		}

		$sorted_menu_items[$key] = $item;
	}

	return $sorted_menu_items;
}

// Support login form notice
add_filter('login_form_bottom', 'softlab_support_login_form_notice', 10, 2);

function softlab_support_login_form_notice($login_form_bottom, $args)
{

	// Check if the FluentSupport Helper class exists
	if (! class_exists('FluentSupport\App\Services\Helper')) {
		return $login_form_bottom;
	}

	$redirect = FluentSupport\App\Services\Helper::getPortalBaseUrl();

	// Verify that the redirect matches FluentSupport's portal URL
	if ($args['redirect'] != $redirect) {
		return $login_form_bottom;
	}

	// Add a styled notice with FontAwesome icon and updated message
	$login_form_bottom .= '<div class="alert alert-info d-flex align-items-center" role="alert">';
	$login_form_bottom .= '<i class="fas fa-info-circle me-2"></i>';
	$login_form_bottom .= 'Please note that your Freemius login details cannot be used here. You need to create a new account on this site to submit a support ticket.';
	$login_form_bottom .= '</div>';

	return $login_form_bottom;
}



//form template ajax 
/**
 * Get posts by category via AJAX
 */
function get_category_posts()
{
	$category_id = intval($_POST['category_id']);

	$args = array(
		'post_type'      => 'form',
		'posts_per_page' => -1,
		'orderby'        => 'title',
		'order'          => 'ASC',
		'tax_query'      => array(
			array(
				'taxonomy'         => 'form_category',
				'field'            => 'term_id',
				'terms'            => $category_id,
				'include_children' => true,
			),
		),
	);

	$query = new WP_Query($args);

	if ($query->have_posts()) :
		while ($query->have_posts()) : $query->the_post();
			$post_id = get_the_ID();
				?>
				<div class="col-lg-4 col-md-6">
					<div class="main-item">
						<div class="item-img">
							<img class="img-fluid" src="<?php echo get_the_post_thumbnail_url($post_id) ?: 'https://via.placeholder.com/150'; ?>" alt="<?php the_title_attribute(); ?>">
							<div class="item-button">
								<div class="buttons-group">
									<a href="<?php echo get_permalink($post_id); ?>" class="button1" target="_blank"><i class="fa-solid fa-eye"></i> View Demo</a>
								</div>
							</div>
						</div>
						<div class="item-content">
							<h4><?php the_title(); ?></h4>
							<p><?php the_excerpt(); ?></p>
						</div>
					</div>
				</div>
			<?php
		endwhile;
		wp_reset_postdata();
	else :
		echo '<div class="col-12"><p>No posts found in this category.</p></div>';
	endif;

	wp_die();
}
add_action('wp_ajax_get_category_posts', 'get_category_posts');
add_action('wp_ajax_nopriv_get_category_posts', 'get_category_posts');

/**
 * Get single post content via AJAX
 */
function get_form_content()
{
	$post_id = intval($_POST['post_id']);
	$post = get_post($post_id);

	if ($post) :
			?>
			<div class="col-lg-4 col-md-6">
				<div class="main-item">
					<div class="item-img">
						<img class="img-fluid" src="<?php echo get_the_post_thumbnail_url($post_id) ?: 'https://via.placeholder.com/150'; ?>" alt="<?php echo esc_attr($post->post_title); ?>">
						<div class="item-button">
							<div class="buttons-group">
								<a href="<?php echo get_permalink($post_id); ?>" class="button1" target="_blank"><i class="fa-solid fa-eye"></i> View Demo</a>
							</div>
						</div>
					</div>
					<div class="item-content">
						<h4><?php echo esc_html($post->post_title); ?></h4>
						<p><?php echo esc_html($post->post_content); ?></p>
					</div>
				</div>
			</div>
			<?php
		else :
			echo '<div class="col-12"><p>Post not found.</p></div>';
		endif;

		wp_die();
	}
	add_action('wp_ajax_get_form_content', 'get_form_content');
	add_action('wp_ajax_nopriv_get_form_content', 'get_form_content');

	/**
	 * Search posts via AJAX
	 */
	function contact_form_7_templates_search()
	{
		$search   = !empty($_POST['search']) ? sanitize_text_field($_POST['search']) : '';
		$category = !empty($_POST['category']) ? sanitize_text_field($_POST['category']) : '';

		$args = [
			'post_type'      => 'form',
			'post_status'    => 'publish',
			'posts_per_page' => -1,
			's'              => $search,
		];

		if (!empty($category)) {
			$args['tax_query'] = [
				[
					'taxonomy' => 'form_category',
					'field'    => 'slug',
					'terms'    => $category,
				],
			];
		}

		$posts = get_posts($args);

		ob_start();
		if (!empty($posts)) {
			foreach ($posts as $post) {
				$post_id = $post->ID;
				$permalink = get_permalink($post_id);
				$title     = esc_html($post->post_title);
				$terms = get_the_terms($post_id, 'form_category');
				$term_title = !empty($terms) && is_array($terms) ? esc_html($terms[0]->name) : 'Uncategorized';
			?>
				<div class="col-lg-4 col-md-6">
					<div class="main-item">
						<div class="item-img">
							<img class="img-fluid" src="<?php echo get_the_post_thumbnail_url($post_id) ?: 'https://via.placeholder.com/150'; ?>" alt="<?php echo esc_attr($title); ?>">
							<div class="item-button">
								<div class="buttons-group">
									<a href="<?php echo $permalink; ?>" class="button1" target="_blank"><i class="fa-solid fa-eye"></i> View Demo</a>
								</div>
							</div>
						</div>
						<div class="item-content">
							<h4><?php echo esc_html($title); ?></h4>
							<p><?php echo get_the_excerpt($post_id); ?></p>
						</div>
					</div>
				</div>
			<?php
			}
		} else {
			?>
			<div class="col-12">
				<p>No results found</p>
			</div>
	<?php
		}

		$html = ob_get_clean();
		wp_send_json_success($html);
	}
	add_action('wp_ajax_contact_form_7_templates_search', 'contact_form_7_templates_search');
	add_action('wp_ajax_nopriv_contact_form_7_templates_search', 'contact_form_7_templates_search');
