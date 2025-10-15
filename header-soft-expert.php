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

                            <a class="navbar-brand brand-soft-expert" href="/soft-expert/" title="Soft expert" rel="home">
                                <img class="img-fluid logo-black" src="<?php echo get_template_directory_uri(); ?>/assets/images/soft-expert/soft-expert-logo.png" alt="Soft expert">
                                <img class="img-fluid logo-white" src="<?php echo get_template_directory_uri(); ?>/assets/images/soft-expert/soft-expert-logo-withe.png" alt="Soft expert">
                            </a>
                        </div>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="<?php esc_attr_e('Toggle navigation', 'softlab'); ?>">
                            <span class="navbar-toggler-icon"></span>

                        </button>

                        <div id="navbar" class=" mobile-menu collapse navbar-collapse">

                            <?php if (wp_is_mobile()) { ?>
                                <span class="mobile-close-btn d-flex justify-content-between align-items-center">
                                    <a class="navbar-brand brand-dracula logo-btn" href="/soft-expert/" title="Soft expert" rel="home">
                                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/soft-expert/soft-expert-logo-white.png" alt="Soft expert">
                                    </a>
                                    <button id="close_btn" data-bs-toggle="collapse" data-bs-target="#navbar" class="close-btn"><i class="fa-solid fa-xmark"></i></button>
                                </span>
                            <?php } ?>

                            <?php
                            wp_nav_menu(
                                array(
                                    'theme_location' => 'soft-expert-menu',
                                    'container'      => '',
                                    'menu_class'     => 'navbar-nav ms-auto soft-expert-nav',
                                    'fallback_cb'    => 'WP_Bootstrap_Navwalker::fallback',
                                    'walker'         => new WP_Bootstrap_Navwalker(),
                                )
                            );
                            ?>

                            <div class="buy-now-btn buy-now-btn-soft-expert">
                                <a href="/soft-expert-pricing/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                        <g clip-path="url(#clip0_1735_7808)">
                                            <path d="M6.97226 0.492148C7.00261 0.491872 7.03295 0.491596 7.06421 0.491312C8.33325 0.482394 8.33325 0.482394 8.90632 0.61727C8.94026 0.625031 8.97421 0.632791 9.00918 0.640787C10.7444 1.04813 12.308 2.06579 13.3594 3.50789C13.3758 3.53038 13.3922 3.55286 13.4091 3.57603C14.3058 4.82338 14.7861 6.31043 14.7779 7.84627C14.7778 7.88815 14.7778 7.88815 14.7777 7.93088C14.7723 9.19028 14.4643 10.3682 13.8673 11.4766C13.8485 11.5122 13.8485 11.5122 13.8293 11.5485C13.5674 12.0413 13.2406 12.4597 12.8605 12.8658C12.8022 12.9296 12.7463 12.9954 12.6926 13.0631C12.5786 13.2041 12.443 13.3131 12.3048 13.4298C12.2705 13.4597 12.2362 13.4896 12.2008 13.5204C10.7146 14.7966 8.77448 15.369 6.83044 15.2503C5.97492 15.1842 5.13638 14.9833 4.35553 14.6261C4.13616 14.5304 3.94889 14.4632 3.711 14.5235C3.55026 14.6014 3.41763 14.7091 3.28132 14.8234C2.63548 15.3554 1.801 15.6023 0.968846 15.5265C0.741422 15.5006 0.528591 15.4606 0.312565 15.3829C0.325231 15.3521 0.325231 15.3521 0.338152 15.3206C1.0437 13.5851 0.994403 12.001 0.366276 10.2608C0.238161 9.90399 0.143191 9.54549 0.0781901 9.17196C0.0712916 9.13342 0.0643931 9.09488 0.0572855 9.05517C-0.0059581 8.66549 -0.01557 8.28184 -0.0145834 7.88778C-0.0145491 7.85428 -0.0145149 7.82079 -0.0144797 7.78629C-0.00837764 5.97046 0.658327 4.18676 1.93 2.87252C2.02205 2.77547 2.10416 2.67478 2.18757 2.57039C2.28613 2.47278 2.39344 2.38563 2.50007 2.29696C2.53053 2.27131 2.53053 2.27131 2.56162 2.24515C3.10879 1.78651 3.69004 1.42755 4.336 1.12508C4.40134 1.09381 4.40134 1.09381 4.46799 1.06191C5.23917 0.710464 6.12412 0.497323 6.97226 0.492148ZM2.61725 7.21883C2.43568 7.49489 2.34945 7.77097 2.39753 8.10048C2.47659 8.42367 2.66298 8.6397 2.93952 8.81795C3.17645 8.95774 3.40184 8.96177 3.67194 8.93758C3.97571 8.85289 4.20995 8.68202 4.36774 8.4078C4.50203 8.15703 4.53959 7.90409 4.46555 7.62655C4.35423 7.32352 4.20483 7.11113 3.92341 6.94784C3.46352 6.73867 2.96046 6.86002 2.61725 7.21883ZM6.58454 7.19686C6.37608 7.46774 6.29016 7.73961 6.32819 8.07821C6.41792 8.40249 6.56355 8.6437 6.86042 8.81307C7.11282 8.94616 7.33407 8.96763 7.61725 8.93758C7.94008 8.8359 8.18642 8.63332 8.35456 8.34188C8.46573 7.97129 8.45611 7.68505 8.28132 7.33602C8.13838 7.08837 7.88132 6.95529 7.61725 6.86727C7.20653 6.82695 6.87046 6.88151 6.58454 7.19686ZM10.4456 7.29329C10.2729 7.55053 10.2346 7.81054 10.2735 8.11727C10.3493 8.38658 10.5039 8.64227 10.7445 8.79247C11.0339 8.94058 11.3077 8.98943 11.6289 8.91225C11.9291 8.80469 12.134 8.62933 12.2828 8.34676C12.3939 8.0648 12.3939 7.74005 12.2828 7.45809C12.1448 7.19506 11.941 7.00195 11.6634 6.89321C11.1781 6.7684 10.7553 6.90181 10.4456 7.29329Z" fill="white" />
                                            <path d="M15.9375 6.24219C16.3847 6.37614 16.7824 6.66275 17.1484 6.94531C17.18 6.96928 17.2115 6.99325 17.244 7.01794C17.4368 7.168 17.62 7.32746 17.8003 7.49219C17.8207 7.51071 17.8411 7.52922 17.8621 7.5483C19.0587 8.65649 19.913 10.3868 20.0044 12.025C20.007 12.1083 20.0084 12.1915 20.0093 12.2747C20.0097 12.3055 20.0101 12.3362 20.0105 12.3679C20.0174 13.0748 19.9983 13.752 19.8438 14.4453C19.8369 14.4776 19.83 14.51 19.8228 14.5433C19.7302 14.971 19.5998 15.3858 19.4678 15.8027C19.3437 16.1949 19.233 16.576 19.1797 16.9844C19.1747 17.0196 19.1697 17.0548 19.1646 17.091C19.05 18.0746 19.2075 19.0611 19.5696 19.978C19.6226 20.1127 19.6613 20.2407 19.6875 20.3828C19.3745 20.4853 19.0884 20.5202 18.7598 20.5171C18.7151 20.5167 18.6703 20.5164 18.6243 20.516C17.8828 20.5009 17.2466 20.229 16.6797 19.7578C16.3968 19.5399 16.3968 19.5399 16.0547 19.4844C15.9073 19.5301 15.7661 19.5883 15.6239 19.6478C15.2182 19.8159 14.8097 19.9607 14.3823 20.063C14.3507 20.0706 14.319 20.0782 14.2864 20.086C13.7539 20.2071 13.2342 20.2411 12.6904 20.2388C12.6567 20.2387 12.623 20.2386 12.5883 20.2386C12.0946 20.2368 11.6156 20.2212 11.1328 20.1094C11.1031 20.1029 11.0735 20.0964 11.0429 20.0897C9.13102 19.6635 7.51135 18.5146 6.4209 16.9014C6.40425 16.8769 6.3876 16.8523 6.37045 16.8271C6.29371 16.7109 6.2397 16.6124 6.21094 16.4766C6.2597 16.4806 6.2597 16.4806 6.30945 16.4848C8.81059 16.6799 11.1513 16.0506 13.0835 14.416C13.5397 14.0225 13.9381 13.601 14.2969 13.1172C14.3134 13.0952 14.33 13.0732 14.347 13.0505C15.2915 11.7925 15.8287 10.3393 16.0156 8.78125C16.0208 8.74132 16.0259 8.70139 16.0312 8.66025C16.1084 7.93546 16.0463 7.21421 15.9483 6.49515C15.9375 6.39844 15.9375 6.39844 15.9375 6.24219Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1735_7808">
                                                <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg> Request a Quote</a>
                            </div>

                        </div><!-- /.navbar-collapse -->

                    </nav><!-- /#header -->
                </div>
            </div>
        </header>

        <main id="main" class="site-main">