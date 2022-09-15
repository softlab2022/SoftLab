<?php

class SoftLa {

	private static $instance = null;

	public function __construct() {
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
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

		] ) ) {

			wp_enqueue_style( 'integrate-google-drive', get_theme_file_uri( 'assets/css/integrate-google-drive.css' ), array(), $theme_version, 'all' ); // main.scss: Compiled Framework source + custom styles.

		} else if ( in_array( $file_name, [
				'radio-player',
				'radio-player-pricing',
				'http-streaming',
				'multiple',
			] ) ) {

			wp_enqueue_style( 'radio-player-main', get_theme_file_uri( 'assets/css/radio-player-main.css' ) );

		} else if ( in_array( $file_name, [
			'wp-radio',
			'wp-pricing',
			'wp-radio-user-frontend',
			'wp-radio-ads-player',
			'wp-radio-proxy-player',
			'wp-radio-image-import',
		] ) ) {
			wp_enqueue_style( 'wp-radio-main', get_theme_file_uri( 'assets/css/wp-radio-main.css' ), array(), $theme_version, 'all' );

		} else {

			wp_enqueue_style( 'main', get_theme_file_uri( 'assets/css/main.css' ), array(), $theme_version, 'all' );
		}

		if ( is_rtl() ) {
			wp_enqueue_style( 'rtl', get_theme_file_uri( 'assets/css/rtl.css' ), array(), $theme_version, 'all' );
		}

		// Common Styles
		wp_enqueue_style( 'slick', get_theme_file_uri( 'assets/vendor/slick/slick.css' ), array(), $theme_version, 'all' );
		wp_enqueue_style( 'bootstrap', get_theme_file_uri( 'assets/vendor/bootstrap/bootstrap.min.css' ), array(), '5.1.3', 'all' );
		wp_enqueue_style( 'fontawesome', get_theme_file_uri( 'assets/vendor/fontawesome/css/all.min.css' ), array(), $theme_version, 'all' );
		wp_enqueue_style( 'style', get_theme_file_uri( 'style.css' ), array('bootstrap'), $theme_version );


		// Common Scripts.
		wp_enqueue_script( 'slick', get_theme_file_uri( 'assets/vendor/slick/slick.min.js' ), array(), $theme_version, true );
		wp_enqueue_script( 'bootstrap', get_theme_file_uri( 'assets/vendor/bootstrap/bootstrap.bundle.min.js' ), array(), '5.1.3', true );
		wp_enqueue_script( 'counter', get_theme_file_uri( 'assets/vendor/cunter/jquery.counterup.min.js' ), array(), $theme_version, true );
		wp_enqueue_script( 'waypoint', get_theme_file_uri( 'assets/vendor/cunter/waypoints.min.js' ), array(), $theme_version, true );
		wp_enqueue_script( 'main', get_theme_file_uri( 'assets/js/main.js' ), array( 'jquery' ), $theme_version, true );

		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}

		//If pricing page, enqueue the freemius script
		$is_pricing_page = in_array( $file_name, [
			'integrate-google-drive-pricing',
			'radio-player-pricing',
			'wp-radio-pricing',
			'wp-radio-user-frontend',
			'wp-radio-proxy-player',
			'wp-radio-image-import',
			'wp-radio-ads-player'
		] );

		if ( $is_pricing_page ) {
			wp_enqueue_script( 'freemius-checkout', 'https://checkout.freemius.com/checkout.min.js', [ 'jquery' ], false, true );
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