<?php

class SoftLa
{

	private static $instance = null;

	public function __construct()
	{
		add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
		add_action('admin_enqueue_scripts', [$this, 'admin_enqueue_scripts']);
	}


	/**
	 * Loading All CSS Stylesheets and Javascript Files.
	 *
	 * @since v1.0
	 */
	function enqueue_scripts($hook)
	{
		$theme_version = wp_get_theme()->get('Version');

		$page_template = get_page_template_slug();
		$file_name     = basename($page_template, '.php');


		if (in_array($file_name, [
			'integrate-google-drive',
			'integrate-google-drive-pricing',
			'integrate-google-drive-pricing-update',
			'integrate-google-drive-file-browser',
			'integrate-google-drive-file-uploader',
			'integrate-google-drive-photo-gallery',
			'integrate-google-drive-media-player',
			'integrate-googlle-drive-slider-carousel',
			'integrate-google-drive-integrations',
			'integrate-google-drive-media-library',
			'integrate-google-drive-review-approve',
			'integrate-google-drive-list-files',
			'woocommerce-integration',

		])) {

			wp_enqueue_style('integrate-google-drive', get_theme_file_uri('assets/css/integrate-google-drive.css'), array(), $theme_version, 'all');
		} else if (in_array($file_name, [
			'radio-player',
			'radio-player-pricing',
			'radio-player-pricing-update',
			'radio-player-multiple-player-skins',
			'radio-player-ads',
			'radio-player-check-http-stream',
			'radio-player-proxy-player',

		])) {

			wp_enqueue_style('radio-player-main', get_theme_file_uri('assets/css/radio-player-main.css'), array(), $theme_version, 'all');
		} else if (in_array($file_name, [
			'reader-mode',
			'reader-mode-pricing',
		])) {

			wp_enqueue_style('reader-mode-main', get_theme_file_uri('assets/css/reader-mode-main.css'), array(), $theme_version, 'all');
		} else if (in_array($file_name, [
			'dracula',
			'dracula-pricing',
			'dracula-pricing-update',
			'dracula-features',
			'dracula-compare',
		])) {

			wp_enqueue_style('dracula-main', get_theme_file_uri('assets/css/dracula-main.css'), array(), $theme_version, 'all');
		} else if (in_array($file_name, [
			'connect-dropbox',
			'connect-dropbox-pricing',
			'connect-dropbox-file-browser',
			'connect-dropbox-file-uploader',
			'connect-dropbox-photo-gallery',
			'connect-dropbox-media-player',
			'connect-dropbox-slider-carousel',
			'connect-dropbox-integrations',
		])) {

			wp_enqueue_style('connect-dropbox-main', get_theme_file_uri('assets/css/connect-dropbox-main.css'), array(), $theme_version, 'all');
		} else if (in_array($file_name, [
			'wp-radio',
			'wp-radio-pricing',
			'wp-radio-user-frontend',
			'wp-radio-ads-player',
			'wp-radio-proxy-player',
			'wp-radio-image-import',
		])) {
			wp_enqueue_style('wp-radio-main', get_theme_file_uri('assets/css/wp-radio-main.css'), array(), $theme_version, 'all');
			// wp_enqueue_style( 'wp-radio-main', get_theme_file_uri( 'assets/css/wp-radio-main.css' ), array(), $theme_version, 'all' );

		} else if (in_array($file_name, [
			'wp-forms',
			'wp-forms-pricing',
		])) {
			wp_enqueue_style('wp-forms-main', get_theme_file_uri('assets/css/wp-forms-main.css'), array(), $theme_version, 'all');
			// wp_enqueue_style( 'wp-radio-main', get_theme_file_uri( 'assets/css/wp-radio-main.css' ), array(), $theme_version, 'all' );


		} else if (in_array($file_name, [
			'essential-addons-for-contact-form-7',
			'essential-addons-for-contact-form-7-pricing',
			'essential-addons-for-contact-form-7-pricing-update',
			'essential-addons-for-contact-form-7-integrations',
			'essential-addons-for-contact-form-7-features',
			'eacf7-preview',
			'contact-form-7-templates',
			'eacf7-templates',
		])) {
			wp_enqueue_style('cf7-extended-main', get_theme_file_uri('assets/css/cf7-extended-main.css'), array(), $theme_version, 'all');
		} else if (in_array($file_name, [
			'career-page',
		])) {
			wp_enqueue_style('career-page-main', get_theme_file_uri('assets/css/career-page-main.css'), array(), $theme_version, 'all');
		} else if (in_array($file_name, [
			'soft-accordion',
			'soft-accordion-pricing',
		])) {
			wp_enqueue_style('soft-accordion-main', get_theme_file_uri('assets/css/soft-accordion-main.css'), array(), $theme_version, 'all');
		} 
		 else if (in_array($file_name, [
			'multimedia-player',
			'multimedia-player-pricing',
			'multimedia-audio-player-skins',
			'multimedia-video-player-skins',
			'multimedia-podcast-player-skins',
		])) {
			wp_enqueue_style('multimedia-player-main', get_theme_file_uri('assets/css/multimedia-player-main.css'), array(), $theme_version, 'all');
		} 
		
		else if (in_array($file_name, [
			'thank-you-page',
		])) {
			wp_enqueue_style('thank-you-page', get_theme_file_uri('assets/css/thank-you-page.css'), array(), $theme_version, 'all');
		}
		
		else {
			wp_enqueue_style('main', get_theme_file_uri('assets/css/main.css'), array(), $theme_version, 'all');
		}

		if (is_rtl()) {
			wp_enqueue_style('rtl', get_theme_file_uri('assets/css/rtl.css'), array(), $theme_version, 'all');
		}

		// Common Styles
		wp_enqueue_style('slick', get_theme_file_uri('assets/vendor/slick/slick.css'), array(), $theme_version);
		wp_enqueue_style('bootstrap', get_theme_file_uri('assets/vendor/bootstrap/bootstrap.min.css'), array(), '5.1.3');
		wp_enqueue_style('fontawesome', get_theme_file_uri('assets/vendor/fontawesome/css/all.min.css'), array(), $theme_version);
		wp_enqueue_style('twenty-twenty', get_theme_file_uri('assets/vendor/twenty/twentytwenty.css'), array(), $theme_version);
		wp_enqueue_style('lity', get_theme_file_uri('assets/vendor/lity/lity.min.css'), array(), $theme_version);
		wp_enqueue_style('style', get_stylesheet_uri(), array('bootstrap'), $theme_version);


		// Common Scripts.
		wp_enqueue_script('slick', get_theme_file_uri('assets/vendor/slick/slick.min.js'), array(), $theme_version, true);
		wp_enqueue_script('bootstrap', get_theme_file_uri('assets/vendor/bootstrap/bootstrap.bundle.min.js'), array(), '5.1.3', true);
		wp_enqueue_script('counter', get_theme_file_uri('assets/vendor/counter/jquery.counterup.min.js'), array(), $theme_version, true);
		wp_enqueue_script('waypoint', get_theme_file_uri('assets/vendor/counter/waypoints.min.js'), array(), $theme_version, true);
		wp_enqueue_script('event', get_theme_file_uri('assets/vendor/twenty/jquery.event.move.js'), array(), $theme_version, true);
		wp_enqueue_script('twenty-twenty', get_theme_file_uri('assets/vendor/twenty/jquery.twentytwenty.js'), array(), $theme_version, true);
		wp_enqueue_script('lity', get_theme_file_uri('assets/vendor/lity/lity.min.js'), array(), $theme_version, true);
		wp_enqueue_script('masonary', get_theme_file_uri('assets/vendor/masonary.js'), array(), '4.2.2', true);

		print_r($hook);

		// Check if the current page is using the specific template
		if (is_page_template('templates/eacf7-preview.php')) {
			// Enqueue the CSS for highlight.js
			wp_enqueue_style(
				'softlab-highlight-atom',
				get_theme_file_uri('assets/vendor/highlight/atom-one-dark.min.css'),
				array(),
				$theme_version
			);
			// wp_enqueue_style(
			// 	'softlab-toastify',
			// 	get_theme_file_uri('assets/vendor/toastify/toastify.css'), array(), $theme_version);

			// Enqueue the JavaScript for highlight.js
			wp_enqueue_script(
				'softlab-highlight',
				get_theme_file_uri('assets/vendor/highlight/highlight.min.js'),
				array(),
				$theme_version,
				false
			);
			// wp_enqueue_script(
			// 	'softlab-toastify',
			// 	get_theme_file_uri('assets/vendor/toastify/toastify.js'), array(),
			// 	$theme_version,
			// 	false
			// );
		}


		wp_enqueue_script('main', get_theme_file_uri('assets/js/main.js'), array('jquery'), $theme_version, true);

		wp_localize_script('main', 'softlab', [
			'ajax_url' => admin_url('admin-ajax.php'),
		]);


		//popup img Scripts
		// if ( is_single() ) {
		// 	wp_enqueue_style( 'magnific-popup', get_theme_file_uri( 'assets/vendor/magnific-popup/magnific-popup.css' ), array(), '1.1.0' );
		// 	wp_enqueue_script( 'magnific-popup', get_theme_file_uri( 'assets/vendor/magnific-popup/jquery.magnific-popup.min.js' ), array('main'), '1.1.0', true );
		// }

		if (is_singular() && comments_open() && get_option('thread_comments')) {
			wp_enqueue_script('comment-reply');
		}


		//If pricing page, enqueue the freemius script
		$is_pricing_page = in_array($file_name, [
			'integrate-google-drive-pricing',
			'integrate-google-drive-pricing-update',
			'radio-player-pricing',
			'reader-mode-pricing',
			'wp-radio-pricing',
			'wp-radio-user-frontend',
			'wp-radio-proxy-player',
			'wp-radio-image-import',
			'wp-radio-ads-player',
			'dracula-pricing',
			'dracula-pricing-update',
			'radio-player-ads',
			'connect-dropbox-pricing',
			'radio-player-proxy-player',
			'offers',
			'offers-black-friday',
			'integrate-google-drive-media-library',
			'essential-addons-for-contact-form-7-pricing',
			'soft-accordion-pricing',
			'essential-addons-for-contact-form-7-pricing-update',
			'radio-player-pricing-update',
			'multimedia-player-pricing',
		]);

		if ($is_pricing_page) {
			wp_enqueue_script('freemius-checkout', 'https://checkout.freemius.com/checkout.min.js', ['jquery'], false, true);
		}
	}

	/**
	 * Admin Assets
	 * @since 1.0.72
	 */
	function admin_enqueue_scripts($hook)
	{
		// For the 'Appearance > Theme Options' page
		if ($hook === 'appearance_page_theme-option') {
			wp_enqueue_style('softlab-admin', get_theme_file_uri("assets/css/admin.css"), array(), null, 'all');
			wp_enqueue_style('bootstrap', get_theme_file_uri('assets/vendor/bootstrap/bootstrap.min.css'), array(), '5.1.3');
			wp_enqueue_script('bootstrap', get_theme_file_uri('assets/vendor/bootstrap/bootstrap.bundle.min.js'), array(), '5.1.3', true);
		}

		// For the Post editing pages
		if ($hook === 'post.php' || $hook === 'post-new.php') {
			wp_enqueue_style('softlab-preview-admin', get_theme_file_uri("assets/css/preview-admin.css"), array(), null, 'all');
			wp_enqueue_style('soft-custom-post-admin', get_theme_file_uri("assets/css/soft-custom-post-admin.css"), array(), null, 'all');


			wp_enqueue_media();
			wp_enqueue_script('sl-admin-script', get_template_directory_uri() . '/assets/admin-js/sl-admin.js', array('jquery'), time(), true);
			wp_enqueue_script('softlab_custom_post-admin-script', get_template_directory_uri() . '/assets/admin-js/softla-admin.js', array('jquery'), time(), true);
		}
	}


	/**
	 * Summary of instance
	 * @return SoftLa
	 */
	public static function instance()
	{
		if (null === self::$instance) {
			self::$instance = new self;
		}

		return self::$instance;
	}
}

SoftLa::instance();
