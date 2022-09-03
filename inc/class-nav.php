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
					'integrate-google-drive-menu' => 'Integrate Google Drive Menu',
					'radio-player-menu'           => 'Radio Player Menu',
					'wp-radio-menu'               => 'WP Radio Menu',
				)
			);
		}

		// Custom Nav Walker: wp_bootstrap_navwalker().
		$custom_walker = get_theme_file_path( '/inc/wp_bootstrap_navwalker.php' );
		if ( is_readable( $custom_walker ) ) {
			require_once $custom_walker;
		}


	}

	public function add_product_mega_menu( $item_output, $item, $depth, $args ) {

		$item_output .= '<span>test</span>';

		return $item_output;
	}


	public static function instance() {
		if ( null === self::$instance ) {
			self::$instance = new self;
		}

		return self::$instance;
	}

}

SoftLaB_Nav::instance();