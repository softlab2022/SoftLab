<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<?php wp_head(); ?>
</head>

<?php
$navbar_scheme   = get_theme_mod( 'navbar_scheme', 'navbar-light' ); // Get custom meta-value.
$navbar_position = get_theme_mod( 'navbar_position', 'static' ); // Get custom meta-value.

$search_enabled = get_theme_mod( 'search_enabled', '1' ); // Get custom meta-value.
?>

<body <?php body_class(); ?>>

<?php wp_body_open(); ?>

<a href="#main" class="visually-hidden-focusable"><?php esc_html_e( 'Skip to main content', 'softlab' ); ?></a>

<div id="wrapper">


    <header class="site-header">
        <div class="container">
            <div class="row">
                <nav class="navbar navbar-expand-md primary-nav <?php echo esc_attr( $navbar_scheme );
				if ( isset( $navbar_position ) && 'fixed_top' === $navbar_position ) : echo ' fixed-top';
                elseif ( isset( $navbar_position ) && 'fixed_bottom' === $navbar_position ) : echo ' fixed-bottom'; endif;

				if ( is_home() || is_front_page() ) : echo ' home'; endif; ?>">
                    <a class="navbar-brand" href="<?php echo esc_url( home_url() ); ?>"
                       title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
                       
                       <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/site-logo.png" alt="site-logo" style="width: 70%;">
                    </a>
                    <a class="navbar-brand" href="<?php echo esc_url( home_url() ); ?>"
                       title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
                       
                       <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/wp-radio/wp-radio-logo.png" alt="radio-player">
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
                            aria-controls="navbar" aria-expanded="false"
                            aria-label="<?php esc_attr_e( 'Toggle navigation', 'softlab' ); ?>">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div id="navbar" class="collapse navbar-collapse">
						<?php
						// Loading WordPress Custom Menu (theme_location).
						wp_nav_menu(
							array(
								'theme_location' => 'wp-radio-menu',
								'container'      => '',
								'menu_class'     => 'navbar-nav ms-auto',
								'fallback_cb'    => 'WP_Bootstrap_Navwalker::fallback',
								'walker'         => new WP_Bootstrap_Navwalker(),
							)
						);
						?>

                        
                        <div class="buy-now">
                        <a href="#"><i class="fa-solid fa-cart-shopping"></i> buy now</a>
                        </div>
                        

                    </div><!-- /.navbar-collapse -->
                </nav><!-- /#header -->
            </div>
        </div>
    </header>

    <main id="main"
          class=""<?php if ( isset( $navbar_position ) && 'fixed_top' === $navbar_position ) : echo ' style="padding-top: 100px;"'; elseif ( isset( $navbar_position ) && 'fixed_bottom' === $navbar_position ) : echo ' style="padding-bottom: 100px;"'; endif; ?>>
