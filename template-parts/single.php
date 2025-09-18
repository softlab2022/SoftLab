<?php
/**
 * The template for displaying content in the single.php template.
 *
 */
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

    <header class="title-header">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-8">
                    <div class="header-content text-center">
                        <h1 class="entry-title"><?php the_title(); ?></h1>
                        <div class="entry-meta">
							<?php
                            
                            softlab_post_date_and_category();
                            softlab_article_posted_on();

                              
                            ?>
                              <span class="blog-item-meta-time"><i class="fa-solid fa-clock"></i><?php echo softlab_get_reading_time(); ?></span>
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>


    <div class="container section-item">
        <div class="row justify-content-center">
            <div class="col-md-8  col-sm-12 m-auto">

				<?php
				if ( has_post_thumbnail() ) {
					echo '<div class="post-thumbnail">' . get_the_post_thumbnail( get_the_ID(), 'large' ) . '</div>';
				}
				?>

                <div class="entry-content">
					<?php

					the_content();

					wp_link_pages( array(
						'before' => '<div class="page-link"><span>' . esc_html__( 'Pages:', 'softlab' ) . '</span>',
						'after'  => '</div>'
					) );
					?>
                </div>

				<?php

				if ( comments_open() || get_comments_number() ) {
					comments_template();
				}

				?>

            </div>
            <!-- <div class="col-md-4">
                <div class="single-widget-area">
                    <?php 
                        dynamic_sidebar('single_sidebar_area')
                    ?>
                    
                    <div class="sub-mains">
                        <div class="section-head">
                            <h2>Explore our products</h2>
                        </div>

                        <a href="/integrate-google-drive/">
                            <div class="products-item item-border d-flex align-items-center">
                                <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images//products/integrate-google-drive.png" alt="integrate-google-drive">
                                <div class="content">
                                    <h3>Integrate Google Drive</h3>
                                    <p>Integrate Google Drive – is the best and easy-<br>to-use Google Drive cloud solution</p>
                                </div>
                            </div>
                        </a>

                        <a href="/radio-player/">
                            <div class="products-item item-border d-flex align-items-center">
                                <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images//products/radio-player.png" alt="radio-player">
                                <div class="content">
                                    <h3>Radio Player</h3>
                                    <p>A simple, easy to use, user-friendly and fully customizable web radio player.</p>
                                </div>
                            </div>
                        </a>
                        
                        <a href="/wp-radio/">
                            <div class="products-item d-flex align-items-center">
                                <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images//products/wp-radio.png" alt="wp-radio">
                                <div class="content">
                                    <h3>WP Radio</h3>
                                    <p>WP Radio – Worldwide Online Radio Stations <br>Directory for WordPress.</p>
                                </div>
                            </div>  
                        </a>

                    </div>

                    <div class="sub-main text-center">
                        <div class="sub-icon">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/emails.png" alt="emails">
                            <span>
                                Join 30 thousand+<br> Happy Customers
                            </span>
                        </div>
                        <div class="sub-mails">
                            <form class="row g-3 needs-validation" novalidate>
                                <div class="col-md-12 position-relative">
                                    <label for="validationTooltip01" class="form-label"></label>
                                    <input type="email" class="form-control" id="validationTooltip01" placeholder="Enter your email address" required>
                                    <div class="valid-tooltip">
                                    Looks good!
                                    </div>
                                </div>
                                <div class="col-md-12">
                                <button class="btn btn-primary" type="submit">Submit form</button>
                                </div>
                            </form>
                            <span>No charge. Unsubscribe anytime</span>
                        </div>
                    </div>

                </div>
            </div> -->
            
			<?php
			edit_post_link( __( 'Edit', 'softlab' ), '<span class="edit-link">', '</span>' );
			?>
        </div>
    </div>

</article>
