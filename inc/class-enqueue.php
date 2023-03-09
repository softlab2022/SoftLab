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
			'radio-player-http-player',
			'radio-player-multiple-player-skins',
			'radio-player-ads',
		] ) ) {

			wp_enqueue_style( 'radio-player-main', get_theme_file_uri( 'assets/css/radio-player-main.css' ) );

		}
		
		else if ( in_array( $file_name, [
			'reader-mode',
			'reader-mode-pricing',
		] ) ) {

			wp_enqueue_style( 'reader-mode-main', get_theme_file_uri( 'assets/css/reader-mode-main.css' ) );

		} 

		else if ( in_array( $file_name, [
			'dracula',
			'dracula-pricing',
			'dracula-features',
			'dracula-compare',
		] ) ) {

			wp_enqueue_style( 'dracula-main', get_theme_file_uri( 'assets/css/dracula-main.css' ) );

		} 
		
		else if ( in_array( $file_name, [
			'wp-radio',
			'wp-radio-pricing',
			'wp-radio-user-frontend',
			'wp-radio-ads-player',
			'wp-radio-proxy-player',
			'wp-radio-image-import',
		] ) ) {
			wp_enqueue_style( 'wp-radio-main', get_theme_file_uri( 'assets/css/wp-radio-main.css' ), array(), $theme_version, 'all' );
			wp_enqueue_style( 'wp-radio-main', get_theme_file_uri( 'assets/css/wp-radio-main.css' ), array(), $theme_version, 'all' );

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
		wp_enqueue_style( 'style', get_stylesheet_uri(), array( 'bootstrap' ), $theme_version );


		// Common Scripts.
		wp_enqueue_script( 'slick', get_theme_file_uri( 'assets/vendor/slick/slick.min.js' ), array(), $theme_version, true );
		wp_enqueue_script( 'bootstrap', get_theme_file_uri( 'assets/vendor/bootstrap/bootstrap.bundle.min.js' ), array(), '5.1.3', true );
		wp_enqueue_script( 'counter', get_theme_file_uri( 'assets/vendor/counter/jquery.counterup.min.js' ), array(), $theme_version, true );
		wp_enqueue_script( 'waypoint', get_theme_file_uri( 'assets/vendor/counter/waypoints.min.js' ), array(), $theme_version, true );
		wp_enqueue_script( 'event', get_theme_file_uri( 'assets/vendor/twenty/jquery.event.move.js' ), array(), $theme_version, true );
		wp_enqueue_script( 'twenty-twenty', get_theme_file_uri( 'assets/vendor/twenty/jquery.twentytwenty.js' ), array(), $theme_version, true );
		wp_enqueue_script( 'masonary', get_theme_file_uri( 'assets/vendor/masonary.js' ), array(), '4.2.2', true );

		wp_enqueue_script( 'main', get_theme_file_uri( 'assets/js/main.js' ), array( 'jquery' ), $theme_version, true );

		wp_localize_script('main', 'softlab', [
			'ajax_url' => admin_url( 'admin-ajax.php' ),
		]);


		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}

		// if(is_page_template('affiliates-area.php')){
		// 	wp_enqueue_script( 'ajaxscript-js', get_theme_file_uri(  'assets/vendor/ajax/ajax.js' ), array( 'jquery' ), $theme_version, true );

		// 	//$test = admin_url( 'admin-ajax.php' );
		// }
		


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
			'radio-player-ads'
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

