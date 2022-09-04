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

		if ( in_array( get_page_template_slug(), [
			'templates/integrate-google-drive.php',
			'templates/integrate-google-drive-pricing.php',
			'templates/integrate-google-drive-file-browser.php',
			'templates/integrate-google-drive-file-uploader.php',
			'templates/integrate-google-drive-photo-gallery.php',
			'templates/integrate-google-drive-media-player.php',

		] ) ) {

			wp_enqueue_style( 'integrate-google-drive', get_theme_file_uri( 'assets/css/integrate-google-drive.css' ), array(), $theme_version, 'all' ); // main.scss: Compiled Framework source + custom styles.

		} else if ( in_array( get_page_template_slug(), [
			'templates/radio-player.php',
			'templates/radio-player-pricing.php',
			'templates/http-streaming.php',
			'templates/multiple.php',
		] ) ) {

			wp_enqueue_style( 'radio-player-main', get_theme_file_uri( 'assets/css/radio-player-main.css' ) );

		} else if ( in_array( get_page_template_slug(), [
			'templates/wp-radio.php',
			'templates/wp-pricing.php',
			'templates/user-frontend.php',
			'templates/wp-radio-station.php',
			'templates/proxy-player.php',
			'templates/image-importer.php',
		] ) ) {
			wp_enqueue_style( 'wp-radio-main', get_theme_file_uri( 'assets/css/wp-radio-main.css' ), array(), $theme_version, 'all' );

		} else {

			wp_enqueue_style( 'main', get_theme_file_uri( 'assets/css/main.css' ), array(), $theme_version, 'all' ); // main.scss: Compiled Framework source + custom styles.
		}

		if ( is_rtl() ) {
			wp_enqueue_style( 'rtl', get_theme_file_uri( 'assets/css/rtl.css' ), array(), $theme_version, 'all' );
		}

		// Common Styles
		wp_enqueue_style( 'style', get_theme_file_uri( 'style.css' ), array(), $theme_version, 'all' );
		wp_enqueue_style( 'slick', get_theme_file_uri( 'assets/vendor/slick/slick.css' ), array(), $theme_version, 'all' ); // main.scss: Compiled Framework source + custom styles.
		wp_enqueue_style( 'bootstrap', get_theme_file_uri( 'assets/vendor/bootstrap/bootstrap.min.css' ), array(), '5.1.3', 'all' ); // main.scss: Compiled Framework source + custom styles.
		wp_enqueue_style( 'fontawesome', get_theme_file_uri( 'assets/vendor/fontawesome/css/all.min.css' ), array(), $theme_version, 'all' ); // main.scss: Compiled Framework source + custom styles.


		// Common Scripts.
		wp_enqueue_script( 'slick', get_theme_file_uri( 'assets/vendor/slick/slick.min.js' ), array(), $theme_version, true );
		wp_enqueue_script( 'bootstrap', get_theme_file_uri( 'assets/vendor/bootstrap/bootstrap.bundle.min.js' ), array(), '5.1.3', true );
		wp_enqueue_script( 'cunter', get_theme_file_uri( 'assets/vendor/cunter/jquery.counterup.min.js' ), array(), $theme_version, true );
		wp_enqueue_script( 'waypoint', get_theme_file_uri( 'assets/vendor/cunter/waypoints.min.js' ), array(), $theme_version, true );
		wp_enqueue_script( 'main', get_theme_file_uri( 'assets/js/main.js' ), array( 'jquery' ), $theme_version, true );

		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
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