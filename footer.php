</main><!-- /#main -->

<!----==== footer area ====----->

<footer class="footer">
    <div class="container">

        <div class="row footer-top">

			<?php
			$socials = [
				'facebook'  => [
					'title' => 'Facebook',
					'icon'  => 'fa-brands fa-facebook-f',
					'url'   => 'https://www.facebook.com/softlabwp/',
				],
				'twitter'   => [
					'title' => 'Twitter',
					'icon'  => 'fa-brands fa-twitter',
					'url'   => 'https://twitter.com/softlabwp',
				],
				'youtube'   => [
					'title' => 'Youtube',
					'icon'  => 'fa-brands fa-youtube',
					'url'   => 'https://www.youtube.com/channel/UC0ZVrjY8QX5Z7K9QXqQXj9w',
				],
				'wordpress' => [
					'title' => 'WordPress',
					'icon'  => 'fa-brands fa-wordpress',
					'url'   => 'https://wordpress.org/themes/softlab/',
				],
			];
			?>
            <div class="col-lg-4 col-md-6">
                <div class="footer-logo">
                    <a href="https://softlabbd.com/"><img class="img-fluid"
                                                          src="<?php echo get_template_directory_uri(); ?>/assets/images/footer-logo.png"
                                                          alt="footer-logo"></a>
                </div>

                <div class="footer-contant">
                    <p>Experience remarkable WordPress products with a new level of power, beauty, and human-centered
                        designs.</p>
                </div>

                <div class="footer-social">
					<?php foreach ( $socials as $social ) { ?>
                        <a href="<?php echo $social['url']; ?>" target="_blank" title="<?php echo $social['title']; ?>">
                            <i class="<?php echo $social['icon']; ?>"></i>
                        </a>
					<?php } ?>
                </div>

            </div>

            <!-- Resources Menu -->
            <div class="col-lg-2 col-6 col-md-6">
                <div class="footer-menu-head">
                    <h4>Resources</h4>
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
				'integrate-google-drive' => 'Integrate Google Drive',
				'radio-player'           => 'Radio Player',
				'wp-radio'               => 'WP Radio',
			];
			?>
            <div class="col-lg-3 col-6 col-md-6">
                <div class="footer-menu-head pro">
                    <h4>Our Products</h4>
                </div>

                <div class="footer-menu-products">
					<?php foreach ( $products as $key => $title ) { ?>
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
            <div class="col-lg-3 col-10 col-md-6">
                <div class="footer-menu-head">
                    <h4>Subscribe to Our Newsletter</h4>
                </div>

                <div class="news-letter-form">
                    <p>Stay up to date with all the recent news, updates and great discounts.</p>


					<?php echo do_shortcode( '[fluentform id="4"]' ); ?>

                    <p>We promise we will never spam you</p>
                </div>

            </div>

        </div>

        <!-- Footer Bottom-->
        <div class="row footer-bottom">

            <div class="to-top">
                <i class="fa-solid fa-arrow-up"></i>
            </div>

            <div class="col-md-12 d-flex align-items-center justify-content-between">
                <p>© <?php echo date( 'Y' ); ?> SoftLab. All rights reserved.</p>

                <div class="footer-menu-bottom">
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

                </div>
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
