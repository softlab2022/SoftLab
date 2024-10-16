<?php

class SoftLaB_Nav {

	private static $instance = null;

	public function __construct() {
		/**
		 * Register Nav menus.
		 */
		if ( function_exists( 'register_nav_menus' ) ) {
			register_nav_menus(
				array(
					'main-menu'                   => 'Main Navigation Menu',
					'footer-menu'                 => 'Footer Menu',
					'footer-menu-bottom'          => 'Footer Menu Bottom',
					'integrate-google-drive-menu' => 'Integrate Google Drive Menu',
					'radio-player-menu'           => 'Radio Player Menu',
					'wp-radio-menu'               => 'WP Radio Menu',
					'reader-mode-menu'            => 'Reader Mode Menu',
					'dracula-menu'            	=> 'Dracula Menu',
					'integrate-dropbox-menu'  	=> 'Integrate Dropbox Menu',
					'wp-froms-menu'  	=> 'WP Froms Menu',
					'essential-addons-for-contact-form-7-menu'  	=> 'Essential Addons for Contact Form 7 Menu',
				)
			);
		}

		// Custom Nav Walker: wp_bootstrap_navwalker().
		$custom_walker = get_theme_file_path( '/inc/wp_bootstrap_navwalker.php' );
		if ( is_readable( $custom_walker ) ) {
			require_once $custom_walker;
		}


	}

	public static function instance() {
		if ( null === self::$instance ) {
			self::$instance = new self;
		}

		return self::$instance;
	}

}

SoftLaB_Nav::instance();