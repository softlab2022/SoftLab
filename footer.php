</main><!-- /#main -->

<!----==== footer area ====----->

<footer class="footer">
    <div class="container">

        <div class="row footer-top">

            <?php
            $footer_logos = [
                'main_logo'  => [
                    'url'   => 'https://softlabbd.com/',
                    'description' => 'We make WordPress Better, Faster & Easier, in Smart Ways that Pushes Your Business Growth',
                ],
                'igd_logo'   => [
                    'url'   => 'https://softlabbd.com/integrate-google-drive/',
                    'description' => 'Experience remarkable WordPress products with a new level of power, beauty, and human-centered designs.',
                ],
                'radio_logo'   => [
                    'url'   => 'https://softlabbd.com/radio-player/',
                    'description' => 'Experience remarkable WordPress products with a new level of power, beauty, and human-centered designs.',
                ],
                'dracula_logo' => [
                    'url'   => 'https://softlabbd.com/dracula-dark-mode/',
                    'description' => 'Experience remarkable WordPress products with a new level of power, beauty, and human-centered designs.',
                ],
                'eacf7_logo' => [
                    'url'   => 'https://softlabbd.com/essential-addons-for-contact-form-7/',
                    'description' => 'Experience remarkable WordPress products with a new level of power, beauty, and human-centered designs.',
                ],
                'soft_accordion_logo' => [
                    'url'   => 'https://softlabbd.com/soft-accordion/',
                    'description' => 'Experience remarkable WordPress products with a new level of power, beauty, and human-centered designs.',
                ],
                'radio_proxy_logo' => [
                    'url'   => 'https://softlabbd.com/radio-player-proxy/',
                    'description' => 'Radio Player Proxy Add-on for Radio Player facilitates the playback of Radio (non-SSL) Player Proxy on HTTPS-enabled websites.',
                ],
                'radio_ads_logo' => [
                    'url'   => 'https://softlabbd.com/radio-player-ads/',
                    'description' => 'Experience remarkable WordPress products with a new level of power, beauty, and human-centered designs.',
                ],
            ];
            ?>
            <div class="col-lg-4 col-md-6 mb-5 mb-lg-0 text-center text-md-start">
                <?php foreach ($footer_logos as $key => $footer_logo) { ?>
                    <div class="footer-main footer-<?php echo $key; ?>">
                        <div class="footer-logo">
                            <a href="<?php echo $footer_logo['url']; ?>">
                                <img class="img-fluid"
                                    src="<?php echo get_template_directory_uri(); ?>/assets/images/<?php echo $key; ?>.png"
                                    alt="footer-logo">
                            </a>
                        </div>

                        <div class="footer-contant">
                            <p><?php echo $footer_logo['description']; ?></p>
                        </div>
                    </div>
                <?php } ?>
                <?php
                $socials = [
                    'facebook'  => [
                        'title' => 'Facebook',
                        'icon'  => 'fa-brands fa-facebook-f',
                        'url'   => 'https://www.facebook.com/softlabbd',
                    ],
                    'twitter'   => [
                        'title' => 'Twitter',
                        'icon'  => 'fa-brands fa-twitter',
                        'url'   => 'https://twitter.com/softlab_',
                    ],
                    'youtube'   => [
                        'title' => 'Youtube',
                        'icon'  => 'fa-brands fa-youtube',
                        'url'   => 'https://www.youtube.com/channel/UC6SI0Jlr9h-GyhER_EB-kBg',
                    ],
                    'wordpress' => [
                        'title' => 'WordPress',
                        'icon'  => 'fa-brands fa-wordpress',
                        'url'   => 'https://profiles.wordpress.org/softlab/',
                    ],
                ];
                ?>
                <div class="footer-social">
                    <?php foreach ($socials as $social) { ?>
                        <a href="<?php echo $social['url']; ?>" target="_blank" title="<?php echo $social['title']; ?>">
                            <i class="<?php echo $social['icon']; ?>"></i>
                        </a>
                    <?php } ?>
                </div>

            </div>

            <!-- Resources Menu -->
            <div class="col-lg-2 col-6 col-md-6 mb-md-5">
                <div class="footer-menu-head">
                    <h4><?php _e('Resources', 'softlab'); ?></h4>
                </div>
                <div class="footer-menu">
                    <?php
                    wp_nav_menu(
                        array(
                            'theme_location' => 'footer-menu',
                            'container'      => '',
                            'menu_class'     => 'navbar-nav ms-auto',
                            'fallback_cb'    => 'WP_Bootstrap_Navwalker::fallback',
                            'walker'         => new WP_Bootstrap_Navwalker(),
                        )
                    );
                    ?>
                </div>
            </div>

            <!-- Products -->
            <?php
            $products = [
                'integrate-google-drive'              => 'Integrate Google Drive',
                'radio-player'                        => 'Radio Player',
                // 'wp-radio'                         => 'WP Radio',
                // 'reader-mode'                      => 'Reader Mode',
                'dracula-dark-mode'                   => 'Dracula Dark Mode',
                'essential-addons-for-contact-form-7' => 'Essential Addons for Contact Form 7',
                // 'soft-accordion'                      => 'Soft Accordion',
                'soft-multimedia-player'                      => 'Multimedia Player',
            ];
            ?>
            <div class="col-lg-3 col-6 col-md-6">
                <div class="footer-menu-head pro">
                    <h4><?php _e('Our Products', 'softlab'); ?></h4>
                </div>

                <div class="footer-menu-products">
                    <?php foreach ($products as $key => $title) { ?>
                        <a href="/<?php echo $key; ?>" class="product-<?php echo $key; ?>">
                            <img class="img-fluid"
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/products/<?php echo $key; ?>.png"
                                alt="<?php echo $title; ?>">
                            <span><?php echo $title; ?></span>
                        </a>
                    <?php } ?>
                </div>
            </div>

            <!-- Newsletter -->
            <div class="col-lg-3 col-10 col-md-6 mx-auto text-center text-md-start">
                <div class="footer-menu-head">
                    <h4><?php _e('Subscribe to Our Newsletter', 'softlab'); ?></h4>
                </div>

                <div class="news-letter-form">
                    <p><?php _e('Stay up to date with all the recent news, updates and great discounts', 'softlab'); ?></p>


                    <?php echo do_shortcode('[fluentform id="4"]'); ?>

                    <p><?php _e('We promise we will never spam you', 'softlab'); ?></p>
                </div>

            </div>

        </div>

        <!-- Footer messenger start-->
        <div class="footer-massenger">
            <a href="https://www.messenger.com/t/107668491874803/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0" class="massenger" target="blank">
                <i class="fa-brands fa-facebook-messenger"></i>
            </a>
            <div class="on-hover-text">
                <p class="hover-text"><?php _e('Live Chat', 'softlab'); ?></p>
            </div>
        </div>
        <!-- Footer messenger end-->
        <!-- Footer Bottom-->
        <div class="row footer-bottom">

            <div class="to-top">
                <i class="fa-solid fa-arrow-up"></i>
            </div>

            <div class="col-md-12 d-flex align-items-center justify-content-center flex-column flex-md-row">
                <p>© <?php echo date('Y'); ?> SoftLab. All rights reserved.</p>

                <!-- <div class="footer-menu-bottom">
					<?php
                    wp_nav_menu(
                        array(
                            'theme_location' => 'footer-menu-bottom',
                            'container'      => '',
                            'menu_class'     => 'navbar-nav ms-auto',
                            'fallback_cb'    => 'WP_Bootstrap_Navwalker::fallback',
                            'walker'         => new WP_Bootstrap_Navwalker(),
                        )
                    );
                    ?>

                </div> -->

            </div>
        </div>

    </div>
</footer>

</div><!-- /#wrapper -->
<?php
wp_footer();
?>
</body>

</html>