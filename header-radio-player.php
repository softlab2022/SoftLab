<?php

$addons = [

    'radio-player-ads'    => [
        'title'      => 'Radio Player Ads',
        'logo'       => get_template_directory_uri() . '/assets/images/radio-player/radio-station/addon-logo.png',
        'logo_withe' => get_template_directory_uri() . '/assets/images/new-logo/radio-player-ads-withe-logo.png',
    ],
    'radio-player-proxy-player'    => [
        'title'      => 'Radio Player Proxy Player',
        'logo'       => get_template_directory_uri() . '/assets/images/radio-player/addons/http-stream-logo.png',
        'logo_withe' => get_template_directory_uri() . '/assets/images/radio-player/addons/http-stream-logo.png',
    ],
];

$page_template = get_page_template_slug();
$file_name     = basename($page_template, '.php');

$is_addon      = in_array($file_name, array_keys($addons));

$title         = $is_addon ? $addons[$file_name]['title'] : 'Radio Player';
$logo          = $is_addon ? $addons[$file_name]['logo'] : get_template_directory_uri() . '/assets/images/radio-player/radio-player-logo.png';
$logo_withe    = $is_addon ? $addons[$file_name]['logo_withe'] : get_template_directory_uri() . '/assets/images/new-logo/radio-player-withe-logo.png';
$link          = $is_addon ? '/' . $file_name : '/radio-player';

$nav_class     = $is_addon ? $file_name . '-nav' : 'radio-player-nav';

$pricing_link  = $is_addon ? '#addon-pricing' : '/radio-player-pricing';

?>




<!DOCTYPE html>
<html <?php language_attributes(); ?>>


<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-C6DRHX4YG7"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-C6DRHX4YG7');
    </script>


<?php wp_head(); ?>

</head>

<?php
$navbar_scheme   = get_theme_mod('navbar_scheme', 'navbar-light'); // Get custom meta-value.
$navbar_position = get_theme_mod('navbar_position', 'static'); // Get custom meta-value.

$search_enabled = get_theme_mod('search_enabled', '1'); // Get custom meta-value.
?>

<body <?php body_class(); ?>>

    <?php wp_body_open(); ?>

    <a href="#main" class="visually-hidden-focusable"><?php esc_html_e('Skip to main content', 'softlab'); ?></a>

    <!-- Sticky Notification -->
    <?php //get_template_part( 'template-parts/black-friday-sticky-banner' ); ?>


    <div id="wrapper">

        <header class="site-header">
            <div class="container">
                <div class="row">
                    <nav class="navbar navbar-expand-md primary-nav <?php echo esc_attr($navbar_scheme);
                                                                    if (isset($navbar_position) && 'fixed_top' === $navbar_position) : echo ' fixed-top';
                                                                    elseif (isset($navbar_position) && 'fixed_bottom' === $navbar_position) : echo ' fixed-bottom';
                                                                    endif;

                                                                    if (is_home() || is_front_page()) : echo ' home';
                                                                    endif; ?>">
                        <div class="navbar-navs">
                            <a class="navbar-brand brand-softlab" href="<?php echo esc_url(home_url()); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" rel="home">

                                <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/site-logo.png" alt="site-logo">
                            </a>

                            <!-- <a class="navbar-brand brand-radio-player" href="/radio-player"
                                title="Radio Player" rel="home">
                                <img class="img-fluid"
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/radio-player-logo.png"
                                alt="Radio Player">
                                </a> -->
                            <a class="navbar-brand brand-radio-player" href="<?php echo $link; ?>" title="<?php echo $title; ?>" rel="home">
                                <img class="img-fluid" src="<?php echo $logo; ?>" alt="<?php echo $title; ?>">
                            </a>
                        </div>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="<?php esc_attr_e('Toggle navigation', 'softlab'); ?>">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div id="navbar" class="mobile-menu collapse navbar-collapse">
                            <?php if (wp_is_mobile()) { ?>
                                <span class="mobile-close-btn d-flex justify-content-between align-items-center">

                                    <a class="navbar-brand brand-radio-player logo-btn" href="<?php echo $link; ?>" title="<?php echo $title; ?>" rel="home">
                                        <img class="img-fluid" src="<?php echo $logo_withe; ?>" alt="<?php echo $title; ?>">
                                    </a>

                                    <button id="close_btn" data-bs-toggle="collapse" data-bs-target="#navbar" class="close-btn"><i class="fa-solid fa-xmark"></i></button>
                                </span>

                            <?php } ?>
                            <?php
                            wp_nav_menu(
                                array(
                                    'theme_location' => 'radio-player-menu',
                                    'container'      => '',
                                    'menu_class'     => 'navbar-nav ms-auto ' . $nav_class,
                                    'fallback_cb'    => 'WP_Bootstrap_Navwalker::fallback',
                                    'walker'         => new WP_Bootstrap_Navwalker(),
                                )
                            );
                            ?>


                            <div class="buy-now-btn buy-now-btn-radio-player">
                                <a href="<?php echo $pricing_link; ?>"><i class="fa-solid fa-cart-shopping"></i> Buy Now</a>
                            </div>


                        </div><!-- /.navbar-collapse -->
                    </nav><!-- /#header -->
                </div>
            </div>
        </header>

        <main id="main" class="site-main">