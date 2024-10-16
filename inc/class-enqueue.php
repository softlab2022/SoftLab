<?php

class SoftLa {

	private static $instance = null;

	public function __construct() {
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'admin_enqueue_scripts' ] );
	}


	/**
	 * Loading All CSS Stylesheets and Javascript Files.
	 *
	 * @since v1.0
	 */
	function enqueue_scripts() {
		$theme_version = wp_get_theme()->get( 'Version' );

		$page_template = get_page_template_slug();
		$file_name     = basename( $page_template, '.php' );


		if ( in_array( $file_name, [
			'integrate-google-drive',
			'integrate-google-drive-pricing',
			'integrate-google-drive-file-browser',
			'integrate-google-drive-file-uploader',
			'integrate-google-drive-photo-gallery',
			'integrate-google-drive-media-player',
			'integrate-googlle-drive-slider-carousel',
			'integrate-google-drive-integrations',
			'integrate-google-drive-media-library',

		] ) ) {

			wp_enqueue_style( 'integrate-google-drive', get_theme_file_uri( 'assets/css/integrate-google-drive.css' ), array(), $theme_version, 'all' );
		} else if ( in_array( $file_name, [
			'radio-player',
			'radio-player-pricing',
			'radio-player-multiple-player-skins',
			'radio-player-ads',
			'radio-player-check-http-stream',
			'radio-player-proxy-player',

		] ) ) {

			wp_enqueue_style( 'radio-player-main', get_theme_file_uri( 'assets/css/radio-player-main.css' ), array(), $theme_version, 'all' );
		} else if ( in_array( $file_name, [
			'reader-mode',
			'reader-mode-pricing',
		] ) ) {

			wp_enqueue_style( 'reader-mode-main', get_theme_file_uri( 'assets/css/reader-mode-main.css' ), array(), $theme_version, 'all' );
		} else if ( in_array( $file_name, [
			'dracula',
			'dracula-pricing',
			'dracula-features',
			'dracula-compare',
		] ) ) {

			wp_enqueue_style( 'dracula-main', get_theme_file_uri( 'assets/css/dracula-main.css' ), array(), $theme_version, 'all' );
		} else if ( in_array( $file_name, [
			'integrate-dropbox',
			'integrate-dropbox-pricing',
			'integrate-dropbox-file-browser',
			'integrate-dropbox-file-uploader',
			'integrate-dropbox-photo-gallery',
			'integrate-dropbox-media-player',
		] ) ) {

			wp_enqueue_style( 'integrate-dropbox-main', get_theme_file_uri( 'assets/css/integrate-dropbox-main.css' ), array(), $theme_version, 'all' );
		} else if ( in_array( $file_name, [
			'wp-radio',
			'wp-radio-pricing',
			'wp-radio-user-frontend',
			'wp-radio-ads-player',
			'wp-radio-proxy-player',
			'wp-radio-image-import',
		] ) ) {
			wp_enqueue_style( 'wp-radio-main', get_theme_file_uri( 'assets/css/wp-radio-main.css' ), array(), $theme_version, 'all' );
			// wp_enqueue_style( 'wp-radio-main', get_theme_file_uri( 'assets/css/wp-radio-main.css' ), array(), $theme_version, 'all' );

		} else if ( in_array( $file_name, [
			'wp-forms',
			'wp-forms-pricing',
		] ) ) {
			wp_enqueue_style( 'wp-forms-main', get_theme_file_uri( 'assets/css/wp-forms-main.css' ), array(), $theme_version, 'all' );
			// wp_enqueue_style( 'wp-radio-main', get_theme_file_uri( 'assets/css/wp-radio-main.css' ), array(), $theme_version, 'all' );

		
		} else if ( in_array( $file_name, [
			'essential-addons-for-contact-form-7',
			'essential-addons-for-contact-form-7-pricing',
			'essential-addons-for-contact-form-7-integrations',
			'essential-addons-for-contact-form-7-features',
		] ) ) {
			wp_enqueue_style( 'cf7-extended-main', get_theme_file_uri( 'assets/css/cf7-extended-main.css' ), array(), $theme_version, 'all' );
		} else {
			wp_enqueue_style( 'main', get_theme_file_uri( 'assets/css/main.css' ), array(), $theme_version, 'all' );
		}

		if ( is_rtl() ) {
			wp_enqueue_style( 'rtl', get_theme_file_uri( 'assets/css/rtl.css' ), array(), $theme_version, 'all' );
		}

		// Common Styles
		wp_enqueue_style( 'slick', get_theme_file_uri( 'assets/vendor/slick/slick.css' ), array(), $theme_version );
		wp_enqueue_style( 'bootstrap', get_theme_file_uri( 'assets/vendor/bootstrap/bootstrap.min.css' ), array(), '5.1.3' );
		wp_enqueue_style( 'fontawesome', get_theme_file_uri( 'assets/vendor/fontawesome/css/all.min.css' ), array(), $theme_version );
		wp_enqueue_style( 'twenty-twenty', get_theme_file_uri( 'assets/vendor/twenty/twentytwenty.css' ), array(), $theme_version );
		wp_enqueue_style( 'lity', get_theme_file_uri( 'assets/vendor/lity/lity.min.css' ), array(), $theme_version );
		wp_enqueue_style( 'style', get_stylesheet_uri(), array( 'bootstrap' ), $theme_version );


		// Common Scripts.
		wp_enqueue_script( 'slick', get_theme_file_uri( 'assets/vendor/slick/slick.min.js' ), array(), $theme_version, true );
		wp_enqueue_script( 'bootstrap', get_theme_file_uri( 'assets/vendor/bootstrap/bootstrap.bundle.min.js' ), array(), '5.1.3', true );
		wp_enqueue_script( 'counter', get_theme_file_uri( 'assets/vendor/counter/jquery.counterup.min.js' ), array(), $theme_version, true );
		wp_enqueue_script( 'waypoint', get_theme_file_uri( 'assets/vendor/counter/waypoints.min.js' ), array(), $theme_version, true );
		wp_enqueue_script( 'event', get_theme_file_uri( 'assets/vendor/twenty/jquery.event.move.js' ), array(), $theme_version, true );
		wp_enqueue_script( 'twenty-twenty', get_theme_file_uri( 'assets/vendor/twenty/jquery.twentytwenty.js' ), array(), $theme_version, true );
		wp_enqueue_script( 'lity', get_theme_file_uri( 'assets/vendor/lity/lity.min.js' ), array(), $theme_version, true );
		wp_enqueue_script( 'masonary', get_theme_file_uri( 'assets/vendor/masonary.js' ), array(), '4.2.2', true );


		wp_enqueue_script( 'main', get_theme_file_uri( 'assets/js/main.js' ), array( 'jquery' ), $theme_version, true );

		wp_localize_script( 'main', 'softlab', [
			'ajax_url' => admin_url( 'admin-ajax.php' ),
		] );


		//popup img Scripts
		// if ( is_single() ) {
		// 	wp_enqueue_style( 'magnific-popup', get_theme_file_uri( 'assets/vendor/magnific-popup/magnific-popup.css' ), array(), '1.1.0' );
		// 	wp_enqueue_script( 'magnific-popup', get_theme_file_uri( 'assets/vendor/magnific-popup/jquery.magnific-popup.min.js' ), array('main'), '1.1.0', true );
		// }

		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}


		//If pricing page, enqueue the freemius script
		$is_pricing_page = in_array( $file_name, [
			'integrate-google-drive-pricing',
			'radio-player-pricing',
			'reader-mode-pricing',
			'wp-radio-pricing',
			'wp-radio-user-frontend',
			'wp-radio-proxy-player',
			'wp-radio-image-import',
			'wp-radio-ads-player',
			'dracula-pricing',
			'radio-player-ads',
			'integrate-dropbox-pricing',
			'radio-player-proxy-player',
			'offers',
			'offers-black-friday',
			'integrate-google-drive-media-library',
			'essential-addons-for-contact-form-7-pricing',
		] );

		if ( $is_pricing_page ) {
			wp_enqueue_script( 'freemius-checkout', 'https://checkout.freemius.com/checkout.min.js', [ 'jquery' ], false, true );
		}
	}

	/**
	 * Admin Assets
	 * @since 1.0.72
	 */
	function admin_enqueue_scripts($hook) {
		if ( $hook === 'appearance_page_theme-option' ) {
			wp_enqueue_style('softlab-admin', get_theme_file_uri("assets/css/admin.css"), array(), time(), 'all');
			wp_enqueue_style('bootstrap', get_theme_file_uri('assets/vendor/bootstrap/bootstrap.min.css'), array(), '5.1.3');
			
			wp_enqueue_script('bootstrap', get_theme_file_uri('assets/vendor/bootstrap/bootstrap.bundle.min.js'), array(), '5.1.3', true);
		}
	}
	

	public static function instance() {
		if ( null === self::$instance ) {
			self::$instance = new self;
		}

		return self::$instance;
	}
}

SoftLa::instance();
