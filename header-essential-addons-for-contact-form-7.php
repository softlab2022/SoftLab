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


    <?php
    $page_template = get_page_template_slug();

    if ($page_template) {
        get_template_part('template-parts/page', $page_template);
    }

    ?>

    <!-- Sticky Notification -->
    
    <div id="wrapper">


        <header class="site-header navbar-transparent">
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

                                <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/site-logo.png" alt="white-site-icon">
                            </a>

                            <a class="navbar-brand brand-cf7-extended" href="/essential-addons-for-contact-form-7/" title="Essential Addons for Contact Form 7" rel="home">
                                <img class="img-fluid logo-black" src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/cf7-extended-logo-new.png" alt="essential addons for contact form 7">
                                <img class="img-fluid logo-white" src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/cf7-extended-logo-withe.png" alt="Essential Addons for Contact Form 7">
                            </a>
                        </div>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="<?php esc_attr_e('Toggle navigation', 'softlab'); ?>">
                            <span class="navbar-toggler-icon"></span>
                            <!-- <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span> -->

                        </button>

                        <div id="navbar" class=" mobile-menu collapse navbar-collapse">

                            <?php if (wp_is_mobile()) { ?>
                                <span class="mobile-close-btn d-flex justify-content-between align-items-center">
                                    <a class="navbar-brand brand-dracula logo-btn" href="/essential-addons-for-contact-form-7/" title="Essential Addons for Contact Form 7" rel="home">
                                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/cf7-extended-logo-withe.png" alt="Essential Addons for Contact Form 7">
                                    </a>
                                    <button id="close_btn" data-bs-toggle="collapse" data-bs-target="#navbar" class="close-btn"><i class="fa-solid fa-xmark"></i></button>
                                </span>
                            <?php } ?>

                            <?php
                            wp_nav_menu(
                                array(
                                    'theme_location' => 'essential-addons-for-contact-form-7-menu',
                                    'container'      => '',
                                    'menu_class'     => 'navbar-nav ms-auto cf7-extended-nav',
                                    'fallback_cb'    => 'WP_Bootstrap_Navwalker::fallback',
                                    'walker'         => new WP_Bootstrap_Navwalker(),
                                )
                            );
                            ?>

                            <div class="buy-now-btn buy-now-btn-cf7-extended ">
                            <a href="/essential-addons-for-contact-form-7-pricing/"><i class="fa-solid fa-cart-shopping"></i> Buy Now</a>
                            </div>

                        </div><!-- /.navbar-collapse -->

                    </nav><!-- /#header -->
                </div>
            </div>
        </header>

        <main id="main" class="site-main">