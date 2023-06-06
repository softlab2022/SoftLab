<?php

$addons = [
    'wp-radio-user-frontend' => [
        'title'       => 'WP Radio User Frontend',
        'logo'        => get_template_directory_uri() . '/assets/images/wp-radio/wp-radio-user-frontend-logo.png',
    ],
    'wp-radio-proxy-player'  => [
        'title'       => 'WP Radio Proxy Player',
        'logo'        => get_template_directory_uri() . '/assets/images/wp-radio/wp-radio-proxy-player-logo.png',
    ],
    'wp-radio-ads-player'    => [
        'title'       => 'WP Radio Ads Player',
        'logo'        => get_template_directory_uri() . '/assets/images/wp-radio/wp-radio-ads-player-logo.png',
    ],
    'wp-radio-image-import'  => [
        'title'       => 'WP Radio Image Import',
        'logo'        => get_template_directory_uri() . '/assets/images/wp-radio/wp-radio-image-import-logo.png',
    ],
];

$page_template = get_page_template_slug();
$file_name     = basename($page_template, '.php');

$is_addon = in_array($file_name, array_keys($addons));

$title = $is_addon ? $addons[$file_name]['title'] : 'WP Radio';
$logo  = $is_addon ? $addons[$file_name]['logo'] : get_template_directory_uri() . '/assets/images/wp-radio/wp-radio-logo.png';
$link  = $is_addon ? '/' . $file_name : '/wp-radio';

$nav_class = $is_addon ? $file_name . '-nav' : 'wp-radio-nav';

$pricing_link = $is_addon ? '#pricing' : '/wp-radio-pricing';

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

    <?php wp_body_open(); ?>

    <a href="#main" class="visually-hidden-focusable"><?php esc_html_e('Skip to main content', 'softlab'); ?></a>

    <!-- Sticky Notification -->


    <div id="wrapper">


        <header class="site-header">
            <div class="container">
                <div class="row align-items-center">
                    <nav class="navbar navbar-expand-md primary-nav">

                        <a class="navbar-brand brand-softlab" href="<?php echo esc_url(home_url()); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" rel="home">

                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/site-logo.png" alt="site-logo">
                        </a>

                        <a class="navbar-brand brand-wp-radio" href="<?php echo $link; ?>" title="<?php echo $title; ?>" rel="home">
                            <img class="img-fluid" src="<?php echo $logo; ?>" alt="<?php echo $title; ?>">
                        </a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="<?php esc_attr_e('Toggle navigation', 'softlab'); ?>">
                            <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
                        </button>

                        <div id="navbar" class=" mobile-menu collapse navbar-collapse">
                            <span class="mobile-close-btn d-flex justify-content-between align-items-center">
                                <a class="navbar-brand brand-wp-radio logo-btn" href="<?php echo $link; ?>" title="<?php echo $title; ?>" rel="home">
                                    <img class="img-fluid" src="<?php echo $logo; ?>" alt="<?php echo $title; ?>">
                                </a>
                                <button id="close_btn" class="close-btn"><i class="fa-solid fa-xmark"></i></button>
                            </span>
                            <?php
                            wp_nav_menu(
                                array(
                                    'theme_location' => 'wp-radio-menu',
                                    'container'      => '',
                                    'menu_class'     => 'navbar-nav ms-auto ' . $nav_class,
                                    'fallback_cb'    => 'WP_Bootstrap_Navwalker::fallback',
                                    'walker'         => new WP_Bootstrap_Navwalker(),
                                )
                            );
                            ?>

                            <div class="buy-now-btn buy-now-btn-<?php echo $file_name; ?>">
                                <a href="<?php echo $pricing_link; ?>"><i class="fa-solid fa-cart-shopping"></i> Get Now</a>
                            </div>

                        </div><!-- /.navbar-collapse -->
                    </nav><!-- /#header -->
                </div>
            </div>
        </header>

        <main id="main" class="site-main">