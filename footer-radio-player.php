
		</main><!-- /#main -->


        <section id="newslatter">
            <div class="container newslatter">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6 m-auto">
                        <div class="newslatter-content">
                            <span class="newslatter-title">Get Notified About Our Products, Features, Updates and Offers</span>
                            <p>We will not spam you. We Will not disclose your email to anyone</p>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6 me-auto">
                        <div class="newslatter-from">

                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Enter Your Email" aria-label="Enter Your Email" aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    <a href="#">Subscribe <i class="fa-solid fa-paper-plane"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!----==== footer area ====----->
        <footer id="footer">
            <div class="container">
                <div class="row">

                    <div class="col-lg-4 col-md-6">
                        <div class="footer-logo">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/footer-logo.png" alt="footer-logo">
                        </div>
                        <div class="footer-contant">
                            <p>Experience remarkable WordPress products with a new level of power, beauty, and human-centered designs.</p>
                        </div>
                        <div class="footer-social">
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-2 col-6 col-md-6">
                        <div class="footer-menu-head">
                            <h4>Company</h4>
                        </div>
                        <div class="footer-menu">
                            <a href="#">About Us</a>
                            <a href="#">Testimonials</a>
                            <a href="#">Services</a>
                            <a href="#">Contact Us</a>
                        </div>
                    </div>

                    <div class="col-lg-3 col-6 col-md-6">
                        <div class="footer-menu-head pro">
                            <h4>Help & Support</h4>
                        </div>
                        <div class="footer-menu-help">
                            <a href="#">Documentaions</a>
                            <a href="#">Help & Technical Support</a>
                            <a href="#">Support Center</a>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="footer-menu-head pro">
                            <h4>Our Products</h4>
                        </div>
                        <div class="footer-menu-products">
                            <a href="#"><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/f-google-drive.png" alt="f-google-drive">Integrate Google Drive</a>
                            <a href="#"><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/f-wp-radio.png" alt="f-wp-radio">WP Radio</a>
                            <a href="#"><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/f-radio-player.png" alt="f-radio-player">Radio Player</a>
                        </div>
                    </div>

                    <?php
                    if ( is_active_sidebar( 'third_widget_area' ) ) :
                    ?>
                    <div class="col-md-12">
		                <?php
		                dynamic_sidebar( 'third_widget_area' );

		                if ( current_user_can( 'manage_options' ) ) :
			                ?>
                            <span class="edit-link"><a href="<?php echo esc_url( admin_url( 'widgets.php' ) ); ?>" class="badge badge-secondary"><?php esc_html_e( 'Edit', 'softlab' ); ?></a></span><!-- Show Edit Widget link -->
		                <?php
		                endif;
		                ?>
                    </div>
                    <?php
						endif;
					?>

                </div>

                <div class="row">
                    <div class="col-lg-12 m-auto">
                        <div class="footer-last text-center">
                            <p><?php printf( esc_html__( '&copy; %1$s %2$s. All rights reserved.', 'softlab' ), date_i18n( 'Y' ), get_bloginfo( 'name', 'display' ) ); ?></p>
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
